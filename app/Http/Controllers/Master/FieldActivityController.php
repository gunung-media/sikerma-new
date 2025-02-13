<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use App\Models\Master\FieldActivity;
use App\Repositories\Master\FieldActivityRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class FieldActivityController extends Controller
{
    public function __construct(
        protected FieldActivityRepository $fieldActivityRepository,
        protected UserRepository $userRepository,
    ) {}

    public function index(): InertiaResponse
    {
        return Inertia::render('FieldActivity/index', ['data' => $this->fieldActivityRepository->getAll()]);
    }

    public function store(Request $request): Response|RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required',
        ]);

        DB::beginTransaction();
        try {
            $this->fieldActivityRepository->create([...$validated, 'slug' => Str::slug($validated['name'])]);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }

    public function update(Request $request, FieldActivity $fieldActivity): Response|RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required'
        ]);

        DB::beginTransaction();
        try {
            $this->fieldActivityRepository->update($fieldActivity->id, [...$validated, 'slug' => Str::slug($validated['name'])]);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }

    public function destroy(FieldActivity $fieldActivity): Response|RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->fieldActivityRepository->delete($fieldActivity->id);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }
}
