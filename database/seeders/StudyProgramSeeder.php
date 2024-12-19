<?php

namespace Database\Seeders;

use App\Models\Master\StudyProgram;
use Illuminate\Database\Seeder;

class StudyProgramSeeder extends Seeder
{
    public function run(): void
    {
        $studyPrograms = [
            1 => [
                ['name' => 'TEKNIK INFORMATIKA - S1'],
                ['name' => 'TEKNIK SIPIL - S1'],
                ['name' => 'TEKNIK PERTAMBANGAN - S1'],
                ['name' => 'TEKNIK ARSITEKTUR - S1'],
            ],
            8 => [
                ['name' => 'PENDIDIKAN DOKTER - S1'],
                ['name' => 'PROGRAM PROFESI DOKTER - S1'],
            ],
            3 => [
                ['name' => 'PENDIDIKAN PANCASILA DAN KEWARGANEGARAAN (PPKN) - S1'],
                ['name' => 'BIMBINGAN KONSELING - S1'],
                ['name' => 'MANAJEMEN PENDIDIKAN - S1'],
                ['name' => 'TEKNOLOGI PENDIDIKAN - S1'],
                ['name' => 'PENDIDIKAN EKONOMI - S1'],
                ['name' => 'PENDIDIKAN MATEMATIKA - S1'],
                ['name' => 'PENDIDIKAN FISIKA - S1'],
                ['name' => 'PENDIDIKAN KIMIA - S1'],
                ['name' => 'PENDIDIKAN BIOLOGI - S1'],
                ['name' => 'PENDIDIKAN TEKNIK MESIN - S1'],
                ['name' => 'PENDIDIKAN TEKNIK BANGUNAN - S1'],
                ['name' => 'PENDIDIKAN BAHASA DAN SASTRA INDONESIA - S1'],
                ['name' => 'PENDIDIKAN BAHASA INGGRIS - S1'],
                ['name' => 'PENDIDIKAN JASMANI, KESEHATAN DAN REKREMASI - S1'],
                ['name' => 'PENDIDIKAN GURU SEKOLAH DASAR - S1'],
                ['name' => 'PENDIDIKAN GURU PENDIDIKAN ANAK USIA DINI - S1'],
                ['name' => 'PENDIDIKAN LUAR SEKOLAH - S1'],
                ['name' => 'PENDIDIKAN SENDRATASIK - S1'],
            ],
            5 => [
                ['name' => 'EKONOMI PEMBANGUNAN - S1'],
                ['name' => 'AKUTANSI - S1'],
                ['name' => 'MANAJEMEN - S1'],
            ],
            2 => [
                ['name' => 'ILMU HUKUM - S1'],
            ],
            6 => [
                ['name' => 'KEHUTANAN - S1'],
                ['name' => 'PETERNAKAN - S1'],
                ['name' => 'TEKNOLOGI INDUSTRI PERTANIAN - S1'],
                ['name' => 'ILMU SOSIAL EKONOMI PERTANIAN (AGRIBISNIS) - S1'],
                ['name' => 'TEKNOLOGI HASIL PERIKANAN - S1'],
                ['name' => 'AGROTEKNOLOGI - S1'],
                ['name' => 'MANAJEMEN SUMBERDAYA PERAIRAN - S1'],
                ['name' => 'BUDIDAYA PERAIRAN - S2'],
            ],
            4 => [
                ['name' => 'FISIKA - S1'],
                ['name' => 'KIMIA - S1'],
                ['name' => 'BIOLOGI - S1'],
            ],
            7 => [
                ['name' => 'SOSIOLOGI - S1'],
                ['name' => 'ILMU ADMINISTRASI NEGARA - S1'],
                ['name' => 'ILMU PEMERINTAHAN - S1'],
            ],
            9 => [
                ['name' => 'MAGISTER ILMU HUKUM - S2'],
                ['name' => 'MAGISTER PEND. LUAR SEKOLAH - S2'],
                ['name' => 'MAGISTER ILMU EKONOMI - S2'],
                ['name' => 'MAGISTER MANAJEMEN - S2'],
                ['name' => 'MAGISTER PENDIDIKAN BAHASA INGGRIS - S2'],
                ['name' => 'MAGISTER PENDIDIKAN BIOLOGI - S2'],
                ['name' => 'MAGISTER PENDIDIKAN DASAR - S2'],
                ['name' => 'MAGISTER PENGELOLAAN SUMBERDAYA ALAM DAN LINGKUNGAN - S2'],
                ['name' => 'MAGISTER ILMU PENGETAHUAN SOSIAL - S2'],
                ['name' => 'MAGISTER PENDIDIKAN EKONOMI - S2'],
                ['name' => 'MAGISTER PENDIDIKAN KIMIA - S2'],
                ['name' => 'PROGRAM DOKTOR ILMU LINGKUNGAN - S3'],
            ]
        ];

        foreach ($studyPrograms as $facultyId => $programs) {
            foreach ($programs as $program) {
                StudyProgram::create([
                    'faculty_id' => $facultyId,
                    'name' => trim($program['name']), // Remove extra spaces or newlines
                ]);
            }
        }
    }
}
