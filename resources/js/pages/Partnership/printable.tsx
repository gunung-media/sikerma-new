import { PartnershipType } from "@/features/Partnership";
import { PageProps } from "@/types";
import { formatDate } from "@/utils/date";
import { kebabToTitle } from "@/utils/StringRalated";
import { usePage } from "@inertiajs/react";
import { useEffect, useRef } from "react";
import { Margin, usePDF } from 'react-to-pdf';

export default function Printable({ partnership }: PageProps<{ partnership: PartnershipType }>) {
    const { props } = usePage<PageProps>();
    const containerRef = useRef<HTMLDivElement>(null);

    const { toPDF, targetRef } = usePDF({
        filename: `laporan-kerja-sama-${partnership.document_number?.replace(/\//g, '-') || 'dokumen'}.pdf`,
        page: {
            format: 'letter',
            orientation: 'landscape',
            margin: Margin.SMALL,
        },
    });

    const getPartnerString = () => {
        if (!partnership.partners?.length) return "";

        // Create a copy to avoid modifying the original array
        const partnersCopy = [...partnership.partners];
        const partnerCount = partnersCopy.length;

        if (partnerCount === 1) {
            return `dan ${partnersCopy[0].agency_name}`;
        }

        const lastPartner = partnersCopy.pop();
        return `${partnersCopy.map(partner => partner.agency_name).join(', ')} dan ${lastPartner?.agency_name}`;
    };

    useEffect(() => {
        // toPDF();
    }, []);

    return (
        <div className="w-full h-full p-0 m-0" ref={targetRef}>
            <div ref={containerRef} className="bg-white w-full" style={{ margin: 0, padding: 0 }}>
                <div className="text-center mb-4">
                    <h4 className="fw-bold">LAPORAN PELAKSANAAN KERJA SAMA</h4>
                    <p className="text-secondary mb-0">{formatDate(partnership.created_at ?? "")}</p>
                </div>

                <table className="table table-bordered border-dark w-full">
                    <tbody>
                        <tr>
                            <td className="fw-bold text-center" style={{ width: "5%" }}>1.</td>
                            <td className="fw-bold" style={{ width: "30%" }}>JUDUL KERJA SAMA</td>
                            <td className="fw-bold text-center" style={{ width: "5%" }}>:</td>
                            <td style={{ width: "60%" }}>{partnership.title}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold text-center">2.</td>
                            <td className="fw-bold">REFERENSI KERJA SAMA (MoA/IA)</td>
                            <td className="fw-bold text-center">:</td>
                            <td>
                                <div>Perjanjian Kerja Sama {partnership.institute?.name} {getPartnerString()} {partnership.type}</div>
                                <div>Nomor: {partnership.document_number} {partnership.document_fundamental ? 'dan '.concat(partnership.document_fundamental) : ''}</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="fw-bold text-center align-top" rowSpan={partnership.partners?.length ? partnership.partners.length + 1 : 1}>3.</td>
                            <td className="fw-bold align-top" rowSpan={partnership.partners?.length ? partnership.partners.length + 1 : 1}>MITRA KERJA SAMA</td>
                            <td className="fw-bold text-center align-top" rowSpan={partnership.partners?.length ? partnership.partners.length + 1 : 1}>:</td>
                            {!partnership.partners?.length && <td>-</td>}
                        </tr>
                        {partnership.partners?.map((partner, index) => (
                            <tr key={`partner-${index}`}>
                                <td>{index + 1}. {partner.agency_name}</td>
                            </tr>
                        ))}
                        <tr>
                            <td className="fw-bold text-center align-top" rowSpan={partnership.activities?.length ? partnership.activities.length + 1 : 1}>4.</td>
                            <td className="fw-bold align-top" rowSpan={partnership.activities?.length ? partnership.activities.length + 1 : 1}>RUANG LINGKUP</td>
                            <td className="fw-bold text-center align-top" rowSpan={partnership.activities?.length ? partnership.activities.length + 1 : 1}>:</td>
                            {!partnership.activities?.length && <td>-</td>}
                        </tr>
                        {partnership.activities?.map((activity, index) => (
                            <tr key={`activity-${index}`}>
                                <td>{index + 1}. {kebabToTitle(activity.field_activity?.name ?? '')}</td>
                            </tr>
                        ))}
                        <tr>
                            <td className="fw-bold text-center">5.</td>
                            <td className="fw-bold">HASIL PELAKSANAAN (OUTPUT & OUTCOME)</td>
                            <td className="fw-bold text-center">:</td>
                            <td className="py-3">
                                {partnership.description ? (
                                    <div dangerouslySetInnerHTML={{ __html: partnership.description }}></div>
                                ) : (
                                    <p>-</p>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td className="fw-bold text-center align-top" rowSpan={partnership.activities?.length ? partnership.activities.length + 1 : 2}>6.</td>
                            <td className="fw-bold align-top" rowSpan={partnership.activities?.length ? partnership.activities.length + 1 : 2}>TAUTAN/LINK DOKUMENTASI KEGIATAN</td>
                            <td className="fw-bold text-center align-top" rowSpan={partnership.activities?.length ? partnership.activities.length + 1 : 2}>:</td>
                            {!partnership.activities?.length && <td>-</td>}
                        </tr>
                        {partnership.activities?.map((activity, index) => (
                            <tr key={`activity-doc-${index}`}>
                                <td>
                                    {index + 1}.{" "}
                                    {activity.document_path ? (
                                        <a
                                            href={`${props.storageUrl}/${activity.document_path}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {kebabToTitle(activity.field_activity?.name ?? '')} - Dokumen
                                        </a>
                                    ) : (
                                        <span>Tidak ada dokumen</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mt-5">
                    <div className="row text-center">
                        <div className="col-4 text-start">
                            <p className="fw-bold mb-1">PENANGGUNG JAWAB KEGIATAN</p>
                            <p className="mb-0">{formatDate(partnership.created_at ?? "")}</p>
                            <div className="my-5" style={{ height: "60px" }}></div>
                            <p className="fw-bold mb-0">...</p>
                        </div>

                        <div className="col-4">
                            <p></p>
                            <p></p>
                            <p></p>
                            <p className="mb-1 fw-bold">MITRA</p>
                            <p className="mb-1">...</p>
                            <div className="my-5" style={{ height: "60px" }}></div>
                            <p className="fw-bold mb-0">
                                ...
                            </p>
                        </div>

                        <div className="col-4 text-end">
                            <p></p>
                            <p></p>
                            <p></p>
                            <p className="fw-bold mb-1">Mengetahui,</p>
                            <p className="mb-0">...</p>
                            <div className="my-5" style={{ height: "60px" }}></div>
                            <p className="fw-bold mb-0">...</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <p className="small text-secondary">
                        Dokumen ini dicetak pada {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                </div>
            </div>
        </div>
    );
}
