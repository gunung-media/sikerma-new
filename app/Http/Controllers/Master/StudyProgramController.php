<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use App\Models\Master\StudyProgram;
use App\Repositories\Master\StudyProgramRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class StudyProgramController extends Controller
{
    public function __construct(
        protected StudyProgramRepository $studyProgramRepository,
        protected UserRepository $userRepository,
    ) {}

    public function index(): InertiaResponse
    {
        return Inertia::render('StudyProgram/index', ['data' => $this->studyProgramRepository->getAll()]);
    }

    public function store(Request $request): Response|RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required',
            'faculty_id' => 'required',
            'weight' => 'numeric'
        ]);

        DB::beginTransaction();
        try {
            $this->studyProgramRepository->create($validated);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }

    public function update(Request $request, StudyProgram $studyProgram): Response|RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required',
            'faculty_id' => 'required',
            'weight' => 'numeric'
        ]);

        DB::beginTransaction();
        try {
            $this->studyProgramRepository->update($studyProgram->id, $validated);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }

    public function destroy(StudyProgram $studyProgram): Response|RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->studyProgramRepository->delete($studyProgram->id);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }
}
