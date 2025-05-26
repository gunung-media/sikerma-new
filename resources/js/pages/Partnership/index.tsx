import { PartnershipStatus, PartnershipType } from "@/features/Partnership"
import { AuthenticatedLayout } from "@/layouts/Authenticated"
import { PageProps } from "@/types"
import DataTable from "datatables.net-react";
import { Button } from "@/components/Button";
import { router } from "@inertiajs/react";
import { basicErrorToast, successToast } from "@/utils/Toast";
import { confirmationDelete } from "@/utils/Swal";
import { useEffect, useState } from "react";
import { App } from "@/types/enum";
import { PartnerCriteriaSelector } from "@/features/PartnerCriteria";
import { Tooltip } from "@/components/Tooltip";

export default function Partnership({ data, isWeight = false }: PageProps & {
    data: PartnershipType[],
    isWeight: boolean
}) {
    const cols = ["#", "Tipe", "Judul", "Tanggal", "Status", "hide_tipe", "hide_judul", "hide_nomor", "Action"];
    const [count, setCount] = useState({
        moa: 0,
        mou: 0,
        ia: 0,
    })

    const dataStudyProgram = data.filter((item) => item.type !== App.Enums.PartnershipTypeEnum.MOU && item.study_program_id)

    const handleDelete = async (index: number) => {
        await confirmationDelete(() => {
            router.delete(route('partnerships.destroy', data[index].id), {
                onSuccess: () => {
                    successToast('Berhasil menghapus data')
                },
                onError: (errors) => {
                    basicErrorToast(errors)
                }
            })
        })
    }

    useEffect(() => {
        let moa = 0
        let mou = 0
        let ia = 0
        data.forEach((item) => {
            if (item.type === App.Enums.PartnershipTypeEnum.MOA) {
                moa++
            } else if (item.type === App.Enums.PartnershipTypeEnum.MOU) {
                mou++
            } else if (item.type === App.Enums.PartnershipTypeEnum.IA) {
                ia++
            }
        })
        setCount({
            moa,
            mou,
            ia
        })

    }, [data])

    return (
        <AuthenticatedLayout title="Kerjasama">
            <h4 className="mb-1">List Kerjasama</h4>

            <p className="mb-6">List kerjasama yang ada di aplikasi ini</p>

            <div className="row g-6 ">
                {Object.keys(count).map((item, index) => (
                    <div className="col-xl-4 col-lg-6 col-md-6" >
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    {/* @ts-expect-error */}
                                    <h6 className="fw-normal mb-0 text-body">Total {count[item]} Kerjasama</h6>
                                </div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <div className="role-heading">
                                        <h5 className="mb-1">{item.toUpperCase()}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="card mt-10 mb-6">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <div className="card-title mb-0">
                    </div>
                    {!isWeight && (
                        <div className="flex ">
                            <Button value="Export" type="success" icon="bx-download" onClick={() => window.open(route('partnerships.export'))} className="me-4" />
                            <Button value="Tambah Kerjasama" type="primary" icon="bx-plus" onClick={() => router.visit(route('partnerships.create'))} />
                        </div>
                    )}
                </div>
                <div className="card-datatable table-responsive" style={{ minHeight: '10rem' }}>
                    <DataTable
                        className="datatables-basic table border-top"
                        data={data.map((item, index) => [
                            index + 1, item.type, index, index, item.status, item.type, item.title, item.document_number, index
                        ])}
                        options={{
                            responsive: true,
                            stateDuration: 0
                        }}
                        columns={cols.map((col, index) => ({
                            title: col,
                            visible: !col.startsWith("hide_"),
                        }))}
                        slots={{
                            1: (value: string) => (
                                <span className="badge bg-label-primary">{value}</span>
                            ),
                            2: (value: number) => (
                                <div className="d-flex flex-column" style={{ maxWidth: "20rem" }}>
                                    <Tooltip value={data[value]?.title} />
                                    <small className="emp_post text-truncate text-muted">
                                        Nomor Dokumen: {data[value]?.document_number}
                                    </small>
                                </div>
                            ),
                            3: (value: number) => (
                                <div className="d-flex flex-column">
                                    <span className="emp_post text-truncate"> {new Date(data[value]?.start_date).toLocaleDateString()}  - {new Date(data[value]?.end_date).toLocaleDateString()}</span>
                                </div>
                            ),
                            4: (value: App.Enums.PartnershipStatusEnum) => (
                                <PartnershipStatus value={value} />
                            ),
                            [cols.length - 1]: (value: number) => (
                                <div >
                                    {isWeight && data[value].study_program_id && data[value].type != App.Enums.PartnershipTypeEnum.MOU && (
                                        <div style={{ width: "20rem" }}>
                                            <PartnerCriteriaSelector
                                                onChange={(newVal) => {
                                                    router.post(route('partnerships.updatePartnerCriteria', data[value].id), {
                                                        partner_criteria_id: newVal
                                                    }, {
                                                        onSuccess: () => {
                                                            window.location.reload()
                                                        }
                                                    })
                                                }}
                                                value={data[value].partner_criteria_id}
                                                className="mb-3"
                                            />
                                        </div>
                                    )}
                                    {!isWeight && (
                                        <div className="d-flex align-items-end gap-2">
                                            <Button value="Edit" type="warning" icon="bx-edit" isIcon onClick={() => router.visit(route('partnerships.edit', data[value].id))} />
                                            <Button
                                                value="Download"
                                                type="info"
                                                icon="bx-show"
                                                isIcon
                                                onClick={() => window.open(route('partnerships.show', data[value].id), '_blank')}
                                            />
                                            <Button value="Edit" type="danger" icon="bx-trash" isIcon onClick={() => handleDelete(value)} />
                                        </div>
                                    )}
                                </div>
                            ),
                        }}
                    >
                    </DataTable>
                </div>
            </div>


            {isWeight && (
                (<div className="row">
                    <div className="col-12" >
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h5 className="fw-bold mb-0 text-body">NILAI PERHITUNGAN IKU 6</h5>
                                </div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <div className="role-heading">
                                        <table className="table">
                                            <tr>
                                                <th>Jumlah Kerja Sama</th>
                                                <th><strong>{data.length}</strong></th>
                                            </tr>
                                            <tr>
                                                <th>Jumlah Kerjasama Program Studi</th>
                                                <th><strong>{dataStudyProgram.length}</strong></th>
                                            </tr>
                                            <tr>
                                                <th>Jumlah Nilai Bobot Mitra</th>
                                                <th><strong>{dataStudyProgram.reduce((total, item) => total + item.partner_criteria?.weight, 0)}</strong></th>
                                            </tr>
                                            <tr>
                                                <th>Nilai IKU Kerjasama Program Studi</th>
                                                <th><strong>{(dataStudyProgram.reduce((total, item) => total + item.partner_criteria?.weight, 0) ?? 1 / dataStudyProgram.length) * 100}%</strong></th>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            )}
        </AuthenticatedLayout >
    )
}
