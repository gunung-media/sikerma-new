<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use App\Models\Master\PartnerCriteria;
use App\Repositories\Master\PartnerCriteriaRepository;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class PartnerCriteriaController extends Controller
{
    public function __construct(
        protected PartnerCriteriaRepository $partnerCriteriaRepository,
    ) {}

    public function index(): InertiaResponse
    {
        return Inertia::render('PartnerCriteria/index', ['data' => $this->partnerCriteriaRepository->getAll()]);
    }

    public function store(Request $request): Response|RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'weight' => ['required', 'numeric'],
        ]);

        DB::beginTransaction();
        try {
            $this->partnerCriteriaRepository->create([...$validated,]);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }

    public function update(Request $request, PartnerCriteria $partnerCriteria): Response|RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'weight' => ['required', 'numeric'],
        ]);

        DB::beginTransaction();
        try {
            $this->partnerCriteriaRepository->update($partnerCriteria->id, $validated);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }

    public function destroy(PartnerCriteria $partnerCriteria): Response|RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->partnerCriteriaRepository->delete($partnerCriteria->id);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }
}
