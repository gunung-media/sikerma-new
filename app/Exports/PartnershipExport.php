<?php

namespace App\Exports;

use App\Models\Partnership\Partnership;
use App\Repositories\Partnership\PartnershipRepository;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class PartnershipExport implements FromCollection, WithHeadings
{
    protected PartnershipRepository $partnershipRepository;

    public function __construct()
    {
        $this->partnershipRepository = new PartnershipRepository(new Partnership());
    }

    public function collection()
    {
        $partnerships = $this->partnershipRepository->getAll(true);

        return $partnerships->map(function ($partnership) {
            $parts = array_filter([
                $partnership->institute?->name,
                $partnership->studyProgram?->name,
                $partnership->faculty?->name,
            ]);

            $partners = $partnership->partners->pluck('agency_name')->toArray();
            $partnerLocations = $partnership->partners->map(fn($partner) => 'Indonesia')->toArray();

            $activities = $partnership->activities->map(function ($activity) {
                return Str::title(str_replace('-', ' ', $activity->fieldActivity->name));
            })->toArray();

            return [
                'Instansi' => implode(', ', $parts),
                'Jenis Dokumen' => "{$partnership->type->value} ({$partnership->type->name})",
                'Nomor Dokumen' => $partnership->document_number,
                'Judul' => $partnership->title,
                'Keterangan' => html_entity_decode(strip_tags($partnership->description)),
                'Mitra' => implode(', ', $partners),
                'Kegiatan' => implode(', ', $activities),
                'Status' => $partnership->status->value,
                'Negara Mitra' => implode(', ', $partnerLocations),
                'Tanggal Awal' => $partnership->start_date->format('d/m/Y'),
                'Tanggal Berakhir' => $partnership->end_date->format('d/m/Y'),
            ];
        });
    }
    public function headings(): array
    {
        return [
            'Instansi',
            'Jenis Dokumen',
            'Nomor Dokumen',
            'Judul',
            'Keterangan',
            'Mitra',
            'Kegiatan',
            'Status',
            'Negara Mitra',
            'Tanggal Awal',
            'Tanggal Berakhir',
        ];
    }
}
