import { PartnershipType } from "@/features/Partnership"
import { AuthenticatedLayout } from "@/layouts/Authenticated"
import { PageProps } from "@/types"
import DataTable from "datatables.net-react";
import { Button } from "@/components/Button";
import { router } from "@inertiajs/react";
import { basicErrorToast, successToast } from "@/utils/Toast";
import { confirmationDelete } from "@/utils/Swal";
import { useEffect, useState } from "react";
import { App } from "@/types/enum";

export default function Partnership({ data }: PageProps & {
    data: PartnershipType[],
}) {
    const cols = ["#", "Tipe", "Judul", "Tanggal", "Status", "Action"];
    const [count, setCount] = useState({
        moa: 0,
        mou: 0,
        ia: 0,
    })

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

            <p className="mb-6">A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what faculty needs.</p>
            <div className="row g-6">
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
            <div className="card mt-10">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <div className="card-title mb-0">
                    </div>
                    <Button value="Tambah Kerjasama" type="primary" icon="bx-plus" onClick={() => router.visit(route('partnerships.create'))} />
                </div>
                <div className="card-datatable table-responsive">
                    <DataTable
                        className="datatables-basic table border-top"
                        data={data.map((item, index) => [
                            index + 1, item.type, index, index, item.status, index
                        ])}
                        options={{
                            responsive: true,
                        }}
                        slots={{
                            1: (value: string) => (
                                <span className="badge bg-label-primary">{value}</span>
                            ),
                            2: (value: number) => (
                                <div className="d-flex flex-column">
                                    <span className="emp_name text-truncate">{data[value]?.title}</span>
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
                            4: (value: string) => (
                                <span className="badge bg-label-primary">{value}</span>
                            ),
                            [cols.length - 1]: (value: number) => (
                                <div className="d-flex align-items-end gap-2">
                                    <Button value="Edit" type="warning" icon="bx-edit" isIcon onClick={() => router.visit(route('partnerships.edit', data[value].id))} />
                                    <Button value="Edit" type="danger" icon="bx-trash" isIcon onClick={() => handleDelete(value)} />
                                </div>
                            ),
                        }}
                    >
                        <thead>
                            <tr>{cols.map((col, index) => <th key={index}>{col}</th>)}</tr>
                        </thead>
                    </DataTable>
                </div>
            </div>
        </AuthenticatedLayout >
    )
}
