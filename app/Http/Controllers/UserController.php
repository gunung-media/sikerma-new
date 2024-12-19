<?php

namespace App\Http\Controllers;

use App\Enums\RoleEnum;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class UserController extends Controller
{
    public function __construct(
        protected UserRepository $userRepository,
    ) {}

    public function index(): InertiaResponse
    {
        return Inertia::render('User/index', [
            'data' => $this->userRepository->getAll(),
            'roles' => $this->userRepository->getGroupByRole(),
        ]);
    }

    public function store(Request $request): Response|RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required',
            'username' => 'required|unique:users',
            'password' => 'required',
            'role' => 'required|in:' . implode(',', RoleEnum::getValues()),
            'faculty_id' => 'exists:faculties,id',
            'study_program_id' => 'exists:study_programs,id',

        ]);

        DB::beginTransaction();
        try {
            $this->userRepository->create($validated);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }

    public function update(Request $request, User $user): Response|RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required',
            'username' => 'required|unique:users,username,' . $user->id,
            'role' => 'required|in:' . implode(',', RoleEnum::getValues()),
            'faculty_id' => 'nullable|exists:faculties,id',
            'study_program_id' => 'nullable|exists:study_programs,id',

        ]);

        DB::beginTransaction();
        try {
            $this->userRepository->update($user->id, $validated);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }

    public function destroy(User $user): Response|RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->userRepository->delete($user->id);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }
}
