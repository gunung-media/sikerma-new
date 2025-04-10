<?php

namespace Database\Seeders;

use App\Models\Master\PartnerCriteria;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PartnerCriteriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $criteria = [
            ['name' => 'Perusahaan teknologi global', 'weight' => 1.0],
            ['name' => 'Institusi / organisasi multilateral', 'weight' => 1.0],
            ['name' => 'Perguruan tinggi luar negeri masuk QS200 (by subject)', 'weight' => 1.0],
            ['name' => 'Organisasi nirlaba kelas dunia', 'weight' => 0.75],
            ['name' => 'Perusahaan multinasional', 'weight' => 0.75],
            ['name' => 'Perguruan tinggi dalam negeri masuk QS200 (by subject)', 'weight' => 0.5],
            ['name' => 'Perusahaan nasional berstandar tinggi, BUMN, BUMD', 'weight' => 0.5],
            ['name' => 'Perusahaan rintisan (startup) teknologi (2–5 tahun berdiri, NIB aktif)', 'weight' => 0.5],
            ['name' => 'Instansi pemerintah (pusat/daerah)', 'weight' => 0.3],
            ['name' => 'Rumah sakit kelas A–D', 'weight' => 0.3],
            ['name' => 'Lembaga riset (pemerintah/swasta/nasional/internasional)', 'weight' => 0.3],
            ['name' => 'Lembaga kebudayaan berskala nasional / bereputasi', 'weight' => 0.3],
        ];

        PartnerCriteria::insert($criteria);
    }
}
