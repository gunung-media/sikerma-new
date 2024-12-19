<?php

namespace App\Enums;

enum PartnershipActivityTypeEnum: string
{
    case ASISTENSI_MENGAJAR_DI_SATUAN_PENDIDIKAN_KAMPUS_MERDEKA = 'asistensi-mengajar-di-satuan-pendidikan-kampus-merdeka';
    case GELAR_BERSAMA = 'gelar-bersama-joint-degree';
    case GELAR_GANDA = 'gelar-ganda-dual-degree';
    case KEGIATAN_WIRAUSAHA_KAMPUS_MERDEKA = 'kegiatan-wirausaha-kampus-merdeka';
    case MAGANG_PRAKTIK_KERJA_KAMPUS_MERDEKA = 'magang-praktik-kerja-kampus-merdeka';
    case MEMBANGUN_DESA_KKN_TEMATIK_KAMPUS_MERDEKA = 'membangun-desa-kkn-tematik-kampus-merdeka';
    case PELATIHAN = 'pelatihan';
    case PELATIHAN_DOSEN_DAN_INSTRUKTUR = 'pelatihan-dosen-dan-instruktur';
    case PEMAGANGAN = 'pemagangan';
    case PENELITIAN_BERSAMA = 'penelitian-bersama';
    case PENELITIAN_BERSAMA_ARTIKEL_JURNAL_ILMIAH = 'penelitian-bersama-artikel-jurnal-ilmiah';
    case PENELITIAN_BERSAMA_PATEN = 'penelitian-bersama-paten';
    case PENELITIAN_BERSAMA_PROTOTIPE = 'penelitian-bersama-prototipe';
    case PENELITIAN_RISET_KAMPUS_MERDEKA = 'penelitian-riset-kampus-merdeka';
    case PENERBITAN_BERKALA_ILMIAH = 'penerbitan-berkala-ilmiah';
    case PENGABDIAN_KEPADA_MASYARAKAT = 'pengabdian-kepada-masyarakat';
    case PENGEMBANGAN_KURIKULUM_PROGRAM_BERSAMA = 'pengembangan-kurikulum-program-bersama';
    case PENGEMBANGAN_PUSAT_PENELITIAN_DAN_PENGEMBANGAN_KEILMUAN = 'pengembangan-pusat-penelitian-dan-pengembangan-keilmuan';
    case PENGEMBANGAN_SISTEM_PRODUK = 'pengembangan-sistem-produk';
    case PENGIRIMAN_PRAKTISI_SEBAGAI_DOSEN = 'pengiriman-praktisi-sebagai-dosen';
    case PENYALURAN_LULUSAN = 'penyaluran-lulusan';
    case PENYELENGGARAAN_SEMINAR_KONFERENSI_ILMIAH = 'penyelenggaraan-seminar-konferensi-ilmiah';
    case PERTUKARAN_DOSEN = 'pertukaran-dosen';
    case PERTUKARAN_MAHASISWA = 'pertukaran-mahasiswa';
    case PERTUKARAN_PELAJAR_KAMPUS_MERDEKA = 'pertukaran-pelajar-kampus-merdeka';
    case PROYEK_KEMANUSIAAN_KAMPUS_MERDEKA = 'proyek-kemanusiaan-kampus-merdeka';
    case STUDI_PROYEK_INDEPENDEN_KAMPUS_MERDEKA = 'studi-proyek-independen-kampus-merdeka';
    case TRANSFER_KREDIT = 'transfer-kredit';
    case VISITING_PROFESSOR = 'visiting-professor';


    public static function getValues(): array
    {
        return array_column(self::cases(), 'value');
    }
}
