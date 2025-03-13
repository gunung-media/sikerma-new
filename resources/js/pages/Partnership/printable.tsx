import { PartnershipType } from "@/features/Partnership";
import { PageProps } from "@/types";
import { formatDate } from "@/utils/date";
import { kebabToTitle } from "@/utils/StringRalated";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function Printable({ partnership }: PageProps<{ partnership: PartnershipType }>) {
    const { props } = usePage<PageProps>();
    const partnerString = () => {
        if (!partnership.partners) return ""
        const partnerCount = partnership.partners?.length || 0

        if (partnerCount <= 1) {
            return `dan ${partnership.partners[0].agency_name}`
        }

        return `${partnership.partners.splice(0, - 1).map((partner) => partner.agency_name).join(', ')} dan ${partnership.partners[partnerCount - 1].agency_name}`
    }

    useEffect(() => {
        window.print()
    }, [])

    return (
        <div className="container mt-4">
            <div className="text-center mb-3">
                <h5 className="fw-bold">LAPORAN PELAKSANAAN KERJA SAMA</h5>
            </div>

            {/* Table */}
            <table className="table table-bordered border-black">
                <tbody>
                    <tr>
                        <td className="fw-bold text-center">1.</td>
                        <td className="fw-bold">JUDUL KERJA SAMA</td>
                        <td className="fw-bold text-center">:</td>
                        <td className="w-75">{partnership.title}</td>
                    </tr>
                    <tr>
                        <td className="fw-bold text-center">2.</td>
                        <td className="fw-bold">REFERENSI KERJA SAMA (MoA/IA)</td>
                        <td className="fw-bold text-center">:</td>
                        <td>Perjanjian Kerja Sama {partnership.institute?.name} {partnerString()} {partnership.type}
                            <br />
                            Nomor: {partnership.document_number} {partnership.document_fundamental ? 'dan '.concat(partnership.document_fundamental) : ''}
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-bold text-center" rowSpan={partnership.partners?.length + 1}>3.</td>
                        <td className="fw-bold" rowSpan={partnership.partners?.length + 1}>MITRA KERJA SAMA</td>
                        <td className="fw-bold text-center" rowSpan={partnership.partners?.length + 1}>:</td>
                    </tr>
                    {partnership.partners?.map((partner, index) => (
                        <tr>
                            <td>{index + 1}. {partner.agency_name}</td>
                        </tr>
                    ))}
                    <tr>
                        <td className="fw-bold text-center" rowSpan={partnership.activities?.length + 1}>4.</td>
                        <td className="fw-bold" rowSpan={partnership.activities?.length + 1}>RUANG LINGKUP</td>
                        <td className="fw-bold text-center" rowSpan={partnership.activities?.length + 1}>:</td>
                    </tr>
                    {partnership.activities?.map((partner, index) => (
                        <tr>
                            <td>{index + 1}. {kebabToTitle(partner.field_activity?.name ?? '')}</td>
                        </tr>
                    ))}
                    <tr>
                        <td className="fw-bold text-center">5.</td>
                        <td className="fw-bold">HASIL PELAKSANAAN (OUTPUT & OUTCOME)</td>
                        <td className="fw-bold text-center">:</td>
                        <td className="py-4" dangerouslySetInnerHTML={{ __html: partnership.description }}></td>
                    </tr>
                    <tr>
                        <td className="fw-bold text-center" rowSpan={partnership.activities?.length + 1}>6.</td>
                        <td className="fw-bold" rowSpan={partnership.activities?.length + 1}>TAUTAN/LINK DOKUMENTASI KEGIATAN</td>
                        <td className="fw-bold text-center" rowSpan={partnership.activities?.length + 1}>:</td>
                    </tr>
                    {partnership.activities?.map((partner, index) => (
                        <tr>
                            <td>
                                {index + 1}.{" "}
                                <a
                                    href={`${props.storageUrl}/${partner.document_path}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {`${props.storageUrl}/${partner.document_path}`}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-4">
                <div className="row text-center">
                    <div className="col-4 text-start">
                        <p className="fw-bold mb-1">PENANGGUNG JAWAB KEGIATAN</p>
                        <p className="mb-0">{formatDate(partnership.created_at ?? "")}</p>
                        <p className="mb-0">Jabatan,</p>
                        <p className="mb-5" style={{ height: "60px" }}>‎ </p>
                        <p className="fw-bold">NIP. (Nama)</p>
                    </div>

                    <div className="col-4">
                        <p className="mb-1">‎ </p>
                        <p className="mb-1">Mitra</p>
                        <p className="mb-5" style={{ height: "80px" }}>‎ </p>
                        <p className="fw-bold">Nama</p>
                    </div>

                    <div className="col-4 text-end">
                        <p className="fw-bold mb-1">Mengetahui,</p>
                        <p className="mb-0">(Dekan/Pejabat Setara Eselon 2)</p>
                        <p className="mb-5" style={{ height: "60px" }}>‎ </p>
                        <p className="fw-bold">NIP. (Nama)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

