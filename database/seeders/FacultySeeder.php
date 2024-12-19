<?php

namespace Database\Seeders;

use App\Models\Master\Faculty;
use Illuminate\Database\Seeder;

class FacultySeeder extends Seeder
{
    public function run(): void
    {
        $faculties = [
            ['name' => 'FAKULTAS TEKNIK', 'slug' => 'Teknik'],
            ['name' => 'FAKULTAS HUKUM', 'slug' => 'Hukum'],
            ['name' => 'FAKULTAS KEGURUAN DAN ILMU PENDIDIKAN', 'slug' => 'FKIP'],
            ['name' => 'FAKULTAS MATEMATIKA DAN ILMU PENGETAHUAN ALAM', 'slug' => 'FMIPA'],
            ['name' => 'FAKULTAS EKONOMI', 'slug' => 'FEB'],
            ['name' => 'FAKULTAS PERTANIAN', 'slug' => 'Pertanian'],
            ['name' => 'FAKULTAS ILMU SOSIAL DAN POLITIK', 'slug' => 'FISIP'],
            ['name' => 'FAKULTAS KEDOKTERAN', 'slug' => 'Kedokteran'],
            ['name' => 'PROGRAM PASCA SARJANA', 'slug' => 'Pascasarjana'],
        ];

        foreach ($faculties as $faculty) {
            Faculty::create([
                'name' => trim($faculty['name']),
                'slug' => trim($faculty['slug']),
            ]);
        }
    }
}
