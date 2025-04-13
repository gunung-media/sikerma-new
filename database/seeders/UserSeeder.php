<?php

namespace Database\Seeders;

use App\Enums\RoleEnum;
use App\Models\Master\Faculty;
use App\Models\Master\StudyProgram;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => "Super Admin",
            'username' => 'admin',
            'password' => bcrypt('siapjaya20'),
            'password_raw' => 'siapjaya20',
            'role' => RoleEnum::SUPER_ADMIN,
        ]);

        $this->createFacultyAdmin();
        $this->createStudyProgramAdmin();
    }

    private function createFacultyAdmin(): void
    {
        $faculties = Faculty::all();

        foreach ($faculties as $faculty) {
            User::create([
                'name' => "Admin " . $faculty->name,
                'username' => $faculty->slug,
                'password' => bcrypt($faculty->slug),
                'password_raw' => $faculty->slug,
                'role' => RoleEnum::FACULTY_ADMIN,
                'faculty_id' => $faculty->id
            ]);
        }
    }

    private function createStudyProgramAdmin(): void
    {
        $studyPrograms = StudyProgram::all();


        foreach ($studyPrograms as $studyProgram) {
            $slug = Str::slug($studyProgram->name);
            User::create([
                'name' => "Admin " . $studyProgram->name,
                'username' => $slug,
                'password' => bcrypt($slug),
                'password_raw' => $slug,
                'role' => RoleEnum::STUDY_PROGRAM_ADMIN,
                'study_program_id' => $studyProgram->id
            ]);
        }
    }
}
