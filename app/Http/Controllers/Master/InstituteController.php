<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use App\Models\Master\Institute;
use App\Repositories\Master\InstituteRepository;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class InstituteController extends Controller
{
    public function __construct(
        protected InstituteRepository $instituteRepository,
    ) {}

    public function index(): InertiaResponse
    {
        return Inertia::render('Institute/index', ['data' => $this->instituteRepository->getAll()]);
    }

    public function store(Request $request): Response|RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        DB::beginTransaction();
        try {
            $this->instituteRepository->create([...$validated,]);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }

    public function update(Request $request, Institute $institute): Response|RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        DB::beginTransaction();
        try {
            $this->instituteRepository->update($institute->id, $validated);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }

    public function destroy(Institute $institute): Response|RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->instituteRepository->delete($institute->id);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }
}
