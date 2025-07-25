<?php

namespace App\Http\Controllers\Partnership;

use App\Exports\PartnershipExport;
use Illuminate\Validation\Rule;
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
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

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
            'data' => $this->partnershipRepository->getAll(true),
        ]);
    }

    public function weight(): InertiaResponse
    {
        return Inertia::render('Partnership/index', [
            'data' => $this->partnershipRepository->getAll(),
            'isWeight' => true,
        ]);
    }
    public function create(): InertiaResponse
    {
        return Inertia::render('Partnership/Form/index');
    }

    public function store(Request $request): JsonResponse|RedirectResponse
    {

        $validatedData = $request->validate([
            'type' => ['required', Rule::in(PartnershipTypeEnum::getValues())],
            'document_number' => [
                Rule::requiredIf($request->type === PartnershipTypeEnum::MOU->value),
            ],
            'document_fundamental' => 'nullable|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'user_id' => 'nullable|exists:users,id',
            'status' => ['required', Rule::in(PartnershipStatusEnum::getValues())],
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'executor' => 'nullable|string|max:255',
            'partner_criteria_id' => 'nullable|exists:partner_criterias,id',
            'document_path' => 'required|file|mimes:pdf,jpg,jpeg,png,doc,docx',
            'final_document_path' => 'nullable|file|mimes:pdf,jpg,jpeg,png,doc,docx',

            'institute_id' => 'nullable|exists:institutes,id',
            'upt_id' => 'nullable|exists:upts,id',
            'faculty_id' => 'nullable|exists:faculties,id',
            'study_program_id' => 'nullable|exists:study_programs,id',

            'partners' => 'required|array',
            'partners.*.agency_type' => ['required', Rule::in(AgencyTypeEnum::getValues())],
            'partners.*.agency_name' => ['required', 'max:255'],
            'partners.*.agency_address' => ['required', 'max:255'],
            'partners.*.signatory_name' => ['required', 'max:255'],
            'partners.*.signatory_position' => ['required', 'max:255'],
            'partners.*.responsible_name' => 'nullable|string|max:255',
            'partners.*.responsible_position' => 'nullable|string|max:255',

            'activities' => 'nullable|array',
            'activities.*.field_activity_id' => 'required|integer',
            'activities.*.file' => 'nullable|file|mimes:pdf,jpg,jpeg,png,doc,docx',
        ]);

        DB::beginTransaction();

        try {
            $partnership = $this->partnershipRepository->create([
                'type' => $validatedData['type'],
                'document_number' => $validatedData['document_number'] ?? '-',
                'document_fundamental' => $validatedData['document_fundamental'] ?? null,
                'document_path' => $validatedData['document_path'] ?? null,
                'final_document_path' => $validatedData['final_document_path'] ?? null,
                'title' => $validatedData['title'],
                'description' => $validatedData['description'],
                'user_id' => auth()->guard('web')->user()->id,
                'status' => $validatedData['status'],
                'start_date' => $validatedData['start_date'],
                'end_date' => $validatedData['end_date'],
                'executor' => $validatedData['executor'] ?? null,
                'partner_criteria_id' => $validatedData['partner_criteria_id'] ?? null,

                'institute_id' => $validatedData['institute_id'] ?? auth()->guard('web')->user()->institute_id ?? null,
                'upt_id' => $validatedData['upt_id'] ?? auth()->guard('web')->user()->upt_id ?? null,
                'faculty_id' => $validatedData['faculty_id'] ?? auth()->guard('web')->user()->faculty_id ??  null,
                'study_program_id' => $validatedData['study_program_id'] ?? auth()->guard('web')->user()->study_program_id ?? null,
            ]);

            foreach ($validatedData['partners'] as $partnerData) {
                $this->partnerRepository->create([...$partnerData, 'partnership_id' => $partnership->id]);
            }

            if (isset($validatedData['activities'])) {
                foreach ($validatedData['activities'] as $activityData) {
                    $activityData['partnership_id'] = null;
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
            'isReadOnly' => true
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
            'type' => ['required', Rule::in(PartnershipTypeEnum::getValues())],
            'document_number' => 'required|string|max:255',
            'document_fundamental' => 'nullable|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'user_id' => 'nullable|exists:users,id',
            'status' => ['required', Rule::in(PartnershipStatusEnum::getValues())],
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'executor' => 'nullable|string|max:255',
            'partner_criteria_id' => 'nullable|exists:partner_criterias,id',
            'document_path' => 'nullable',
            'final_document_path' => 'nullable',

            'institute_id' => 'nullable|exists:institutes,id',
            'upt_id' => 'nullable|exists:upts,id',
            'faculty_id' => 'nullable|exists:faculties,id',
            'study_program_id' => 'nullable|exists:study_programs,id',

            // Partners Validation
            'partners' => 'nullable|array',
            'partners.*.id' => 'nullable|exists:partners,id',
            'partners.*.agency_type' => ['nullable', Rule::in(AgencyTypeEnum::getValues())],
            'partners.*.agency_name' => ['required', 'max:255'],
            'partners.*.agency_address' => ['required', 'max:255'],
            'partners.*.signatory_name' => ['required', 'max:255'],
            'partners.*.signatory_position' => ['required', 'max:255'],
            'partners.*.responsible_name' => 'nullable|string|max:255',
            'partners.*.responsible_position' => 'nullable|string|max:255',

            // Activities Validation
            'activities' => 'nullable|array',
            'activities.*.id' => 'nullable|exists:partnership_activities,id',
            'activities.*.field_activity_id' => 'required|integer',
            'activities.*.file' => 'nullable|file|mimes:pdf,jpg,jpeg,png,doc,docx',
            'activities.*.document_path' => 'nullable|string',
        ]);
        DB::beginTransaction();

        try {
            $partnership = $this->partnershipRepository->findById($id);

            $this->partnershipRepository->update($id, [
                'type' => $validatedData['type'],
                'document_number' => $validatedData['document_number'] ?? '-',
                'document_fundamental' => $validatedData['document_fundamental'] ?? null,
                'document_path' => $validatedData['document_path'] ?? null,
                'final_document_path' => $validatedData['final_document_path'] ?? null,
                'title' => $validatedData['title'],
                'description' => $validatedData['description'] ?? null,
                'user_id' => $validatedData['user_id'] ?? auth()->guard('web')->user()->id,
                'status' => $validatedData['status'],
                'start_date' => $validatedData['start_date'],
                'end_date' => $validatedData['end_date'],
                'executor' => $validatedData['executor'] ?? null,
                'partner_criteria_id' => $validatedData['partner_criteria_id'] ?? null,

                'institute_id' => $validatedData['institute_id'] ?? auth()->guard('web')->user()->institute_id ?? null,
                'upt_id' => $validatedData['upt_id'] ?? auth()->guard('web')->user()->upt_id ?? null,
                'faculty_id' => $validatedData['faculty_id'] ?? auth()->guard('web')->user()->faculty_id ??  null,
                'study_program_id' => $validatedData['study_program_id'] ?? auth()->guard('web')->user()->study_program_id ?? null,
            ]);

            if (isset($validatedData['partners'])) {
                $existingPartnerIds = $this->partnerRepository->findByAttributes(['partnership_id' => $partnership->id])?->pluck('id')?->toArray() ?? [];

                $incomingPartnerIds = [];
                foreach ($validatedData['partners'] as $partnerData) {
                    if (isset($partnerData['id'])) {
                        $this->partnerRepository->update($partnerData['id'], $partnerData);
                        $incomingPartnerIds[] = $partnerData['id'];
                    } else {
                        $newPartner = $this->partnerRepository->create([...$partnerData, 'partnership_id' => $partnership->id]);
                        $incomingPartnerIds[] = $newPartner->id;
                    }
                }

                $partnersToDelete = array_diff($existingPartnerIds, $incomingPartnerIds);
                foreach ($partnersToDelete as $partnerId) {
                    $this->partnerRepository->delete($partnerId);
                }
            }

            if (isset($validatedData['activities'])) {
                $existingActivityIds = $this->partnershipActivityRepository->findByAttributes(['partnership_id' => $partnership->id])?->pluck('id')->toArray() ?? [];

                $incomingActivityIds = [];
                foreach ($validatedData['activities'] as $activityData) {
                    if (isset($activityData['id'])) {
                        $this->partnershipActivityRepository->update($activityData['id'], $activityData);
                        $incomingActivityIds[] = $activityData['id'];
                    } else {
                        $newActivity = $this->partnershipActivityRepository->create([...$activityData, 'partnership_id' => $partnership->id]);
                        $incomingActivityIds[] = $newActivity->id;
                    }
                }

                $activitiesToDelete = array_diff($existingActivityIds, $incomingActivityIds);
                foreach ($activitiesToDelete as $activityId) {
                    $this->partnershipActivityRepository->delete($activityId);
                }
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

    public function print(string $id): InertiaResponse
    {
        return Inertia::render('Partnership/printable', [
            'partnership' => $this->partnershipRepository->findById($id),
        ]);
    }

    public function updatePartnerCriteria(Request $request, string $id): Response|RedirectResponse
    {
        $validatedData = $request->validate([
            'partner_criteria_id' => 'required|exists:partner_criterias,id',
        ]);
        DB::beginTransaction();

        try {
            $partnership = $this->partnershipRepository->findById($id);

            $this->partnershipRepository->update($id, [
                'partner_criteria_id' => $validatedData['partner_criteria_id'] ?? null,
            ]);

            DB::commit();

            return response(status: 200);
        } catch (\Exception $e) {
            DB::rollBack();
            dd($e);
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function export(): BinaryFileResponse
    {
        return Excel::download(new PartnershipExport, 'kerjasama.xlsx');
    }
}
