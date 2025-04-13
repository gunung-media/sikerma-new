<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use App\Models\Master\Upt;
use App\Repositories\Master\UptRepository;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class UptController extends Controller
{
    public function __construct(
        protected UptRepository $uptRepository,
    ) {}

    public function index(): InertiaResponse
    {
        return Inertia::render('Upt/index', ['data' => $this->uptRepository->getAll()]);
    }

    public function store(Request $request): Response|RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        DB::beginTransaction();
        try {
            $this->uptRepository->create([...$validated,]);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }

    public function update(Request $request, Upt $upt): Response|RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        DB::beginTransaction();
        try {
            $this->uptRepository->update($upt->id, $validated);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }

    public function destroy(Upt $upt): Response|RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->uptRepository->delete($upt->id);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }
}
