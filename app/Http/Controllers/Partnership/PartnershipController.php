<?php

namespace App\Http\Controllers\Partnership;

use App\Enums\PartnershipActivityTypeEnum;
use App\Enums\AgencyTypeEnum;
use App\Enums\PartnershipStatusEnum;
use App\Enums\PartnershipTypeEnum;
use App\Http\Controllers\Controller;
use App\Repositories\Partnership\PartnerRepository;
use App\Repositories\Partnership\PartnershipActivityRepository;
use App\Repositories\Partnership\PartnershipRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class PartnershipController extends Controller
{
    public function __construct(
        protected PartnershipRepository $partnershipRepository,
        protected PartnerRepository $partnerRepository,
        protected PartnershipActivityRepository $partnershipActivityRepository,
    ) {}

    public function index(): InertiaResponse
    {
        return Inertia::render('Partnership/index', [
            'data' => $this->partnershipRepository->getAll(),
        ]);
    }

    public function create(): InertiaResponse
    {
        return Inertia::render('Partnership/Form/index');
    }

    public function store(Request $request): JsonResponse|RedirectResponse
    {
        $validatedData = $request->validate([
            'type' => 'required|in:' . implode(',', PartnershipTypeEnum::getValues()),
            'document_number' => 'required|string|max:255',
            'document_fundamental' => 'nullable|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'user_id' => 'nullable|exists:users,id',
            'status' => 'required|in:' . implode(',', PartnershipStatusEnum::getValues()),
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'executor' => 'nullable|string|max:255',
            'faculty_id' => 'nullable|exists:faculties,id',
            'study_program_id' => 'nullable|exists:study_programs,id',
            'partners' => 'required|array',
            'partners.*.agency_type' => 'required|in:' . implode(',', AgencyTypeEnum::getValues()),
            'partners.*.agency_name' => 'required|string|max:255',
            'partners.*.agency_address' => 'required|string|max:255',
            'partners.*.signatory_name' => 'required|string|max:255',
            'partners.*.signatory_position' => 'required|string|max:255',
            'partners.*.responsible_name' => 'nullable|string|max:255',
            'partners.*.responsible_position' => 'nullable|string|max:255',
            'activities' => 'nullable|array',
            'activities.*.activity_type' => 'required|in:' . implode(',', PartnershipActivityTypeEnum::getValues()),
            'activities.*.file' => 'required|file|mimes:pdf,jpg,jpeg,png,doc,docx',
        ]);

        DB::beginTransaction();

        try {
            $partnership = $this->partnershipRepository->create([
                'type' => $validatedData['type'],
                'document_number' => $validatedData['document_number'],
                'document_fundamental' => $validatedData['document_fundamental'],
                'title' => $validatedData['title'],
                'description' => $validatedData['description'],
                'user_id' => auth()->guard('web')->user()->id,
                'status' => $validatedData['status'],
                'start_date' => $validatedData['start_date'],
                'end_date' => $validatedData['end_date'],
                'executor' => $validatedData['executor'] ?? null,
                'faculty_id' => $validatedData['faculty_id'] ?? null,
                'study_program_id' => $validatedData['study_program_id'] ?? null,
            ]);

            foreach ($validatedData['partners'] as $partnerData) {
                $this->partnerRepository->create([...$partnerData, 'partnership_id' => $partnership->id]);
            }

            if (isset($validatedData['activities'])) {
                foreach ($validatedData['activities'] as $activityData) {
                    $this->partnershipActivityRepository->create([...$activityData, 'partnership_id' => $partnership->id]);
                }
            }

            DB::commit();

            return response()->json([
                'message' => 'Partnership created successfully.',
                'data' => $partnership->load(['partners', 'activities']),
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();

            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function show(string $id): InertiaResponse
    {
        return Inertia::render('Partnership/Form/index', [
            'partnership' => $this->partnershipRepository->findById($id),
            'is_read_only' => true
        ]);
    }

    public function edit(string $id): InertiaResponse
    {
        return Inertia::render('Partnership/Form/index', [
            'partnership' => $this->partnershipRepository->findById($id),
        ]);
    }

    public function update(Request $request, string $id): JsonResponse|RedirectResponse
    {
        $validatedData = $request->validate([
            'type' => 'required|in:' . implode(',', PartnershipTypeEnum::getValues()),
            'document_number' => 'required|string|max:255',
            'document_fundamental' => 'nullable|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'user_id' => 'nullable|exists:users,id',
            'status' => 'required|in:' . implode(',', PartnershipStatusEnum::getValues()),
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'executor' => 'nullable|string|max:255',
            'faculty_id' => 'nullable|exists:faculties,id',
            'study_program_id' => 'nullable|exists:study_programs,id',
            'partners' => 'nullable|array',
            'partners.*.id' => 'nullable|exists:partners,id',
            'partners.*.agency_type' => 'required|in:' . implode(',', AgencyTypeEnum::getValues()),
            'partners.*.agency_name' => 'required|string|max:255',
            'partners.*.agency_address' => 'required|string|max:255',
            'partners.*.signatory_name' => 'required|string|max:255',
            'partners.*.signatory_position' => 'required|string|max:255',
            'partners.*.responsible_name' => 'nullable|string|max:255',
            'partners.*.responsible_position' => 'nullable|string|max:255',
            'activities' => 'nullable|array',
            'activities.*.id' => 'nullable|exists:partnership_activities,id',
            'activities.*.activity_type' => 'required|in:' . implode(',', PartnershipActivityTypeEnum::getValues()),
            'activities.*.file' => 'file|mimes:pdf,jpg,jpeg,png,doc,docx',
        ]);

        DB::beginTransaction();

        try {
            $partnership = $this->partnershipRepository->findById($id);

            $this->partnershipRepository->update($id, [
                'type' => $validatedData['type'],
                'document_number' => $validatedData['document_number'],
                'document_fundamental' => $validatedData['document_fundamental'],
                'title' => $validatedData['title'],
                'description' => $validatedData['description'] ?? null,
                'user_id' => $validatedData['user_id'] ?? auth()->guard('web')->user()->id,
                'status' => $validatedData['status'],
                'start_date' => $validatedData['start_date'],
                'end_date' => $validatedData['end_date'],
                'executor' => $validatedData['executor'] ?? null,
                'faculty_id' => $validatedData['faculty_id'] ?? null,
                'study_program_id' => $validatedData['study_program_id'] ?? null,
            ]);

            if (isset($validatedData['partners'])) {
                foreach ($validatedData['partners'] as $partnerData) {
                    if (isset($partnerData['id'])) {
                        $this->partnerRepository->update($partnerData['id'], $partnerData);
                    } else {
                        $this->partnerRepository->create([...$partnerData, 'partnership_id' => $partnership->id]);
                    }
                }

                $existingPartnerIds = collect($validatedData['partners'])->pluck('id')->filter()->toArray();
                $partnership->partners()->whereNotIn('id', $existingPartnerIds)->delete();
            }

            if (isset($validatedData['activities'])) {
                foreach ($validatedData['activities'] as $activityData) {
                    if (isset($activityData['id'])) {
                        $this->partnershipActivityRepository->update($activityData['id'], $activityData);
                    } else {
                        $this->partnershipActivityRepository->create([...$activityData, 'partnership_id' => $partnership->id]);
                    }
                }

                $existingActivityIds = collect($validatedData['activities'])->pluck('id')->filter()->toArray();
                $partnership->activities()->whereNotIn('id', $existingActivityIds)->delete();
            }

            DB::commit();

            return response()->json([
                'message' => 'Partnership updated successfully.',
                'data' => $partnership->load(['partners', 'activities']),
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            dd($e);
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function destroy(string $id): Response|RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->partnershipRepository->delete($id);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }
}
