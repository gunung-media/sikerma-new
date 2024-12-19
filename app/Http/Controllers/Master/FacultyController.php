<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use App\Models\Master\Faculty;
use App\Repositories\Master\FacultyRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class FacultyController extends Controller
{
    public function __construct(
        protected FacultyRepository $facultyRepository,
        protected UserRepository $userRepository,
    ) {}

    public function index(): InertiaResponse
    {
        return Inertia::render('Faculty/index', ['data' => $this->facultyRepository->getAll()]);
    }

    public function store(Request $request): Response|RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required',
        ]);

        DB::beginTransaction();
        try {
            $this->facultyRepository->create([...$validated, 'slug' => Str::slug($validated['name'])]);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }

    public function update(Request $request, Faculty $faculty): Response|RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required'
        ]);

        DB::beginTransaction();
        try {
            $this->facultyRepository->update($faculty->id, [...$validated, 'slug' => Str::slug($validated['name'])]);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }

    public function destroy(Faculty $faculty): Response|RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->facultyRepository->delete($faculty->id);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }
}
