<?php

namespace Database\Seeders;

use App\Models\Master\Document;
use Illuminate\Database\Seeder;

class DocumentSeeder extends Seeder
{
    public function run(): void
    {
        $documents = [
            'Video Panduan',
            'Buku Panduan',
            'Template'
        ];

        foreach ($documents as $document) {
            Document::create([
                'name' => $document
            ]);
        }
    }
}
