import { PartnerCriteriaType, PartnerCriteriaDto } from "@/features/PartnerCriteria"
import { AuthenticatedLayout } from "@/layouts/Authenticated"
import { PageProps } from "@/types"
import { FormEventHandler, useState } from "react"
import DataTable from "datatables.net-react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { CustomOffcanvas } from "@/components/Offcanvas";
import { router, usePage } from "@inertiajs/react";
import { basicErrorToast, errorToast, successToast } from "@/utils/Toast";
import { confirmationDelete } from "@/utils/Swal";

export default function PartnerCriteria({ data }: PageProps & {
    data: PartnerCriteriaType[],
}) {
    const { errors } = usePage<PageProps>().props
    const [showForm, setShowForm] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [partnerCriteria, setPartnerCriteria] = useState<PartnerCriteriaDto>({
        name: '',
        weight: 0,
    })

    const cols = ["#", "Name", "Bobot", "Action"];

    const handleEdit = (index: number) => {
        setPartnerCriteria(data[index])
        setSelectedId(data[index].id)
        setShowForm(true);
    };

    const isEditing = selectedId !== null;

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        if (isEditing) {
            router.put(route('master.partner-criterias.update', selectedId), partnerCriteria, {
                onError: (errors) => {
                    errorToast(errors.error ? errors.error : 'Maaf, terjadi kesalahan.')
                },
                onSuccess: () => {
                    successToast('Berhasil mengubah data')
                    setSelectedId(null)
                    setShowForm(false)
                    router.visit(route('master.partner-criterias.index'))
                }
            })
            return;
        }
        router.post(route('master.partner-criterias.store'), partnerCriteria, {
            onError: (errors) => {
                console.error(errors)
                basicErrorToast(errors)
            },
            onSuccess: () => {
                successToast('Berhasil menambahkan data')
                setShowForm(false)
                router.visit(route('master.partner-criterias.index'))
            }
        })
    }

    const handleDelete = async (index: number) => {
        await confirmationDelete(() => {
            router.delete(route('master.partner-criterias.destroy', data[index].id), {
                onSuccess: () => {
                    successToast('Berhasil menghapus data')
                    router.visit(route('master.partner-criterias.index'))
                }
            })
        })
    }


    return (
        <AuthenticatedLayout title="Kriteria Mitra">
            <h4 className="mb-1">List Kriteria Mitra</h4>

            <p className="mb-6">List Kriteria Mitra yang ada di aplikasi ini</p>

            <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <div className="card-title mb-0">
                    </div>
                    <Button value="Tambah Kriteria Mitra" type="primary" icon="bx-plus" onClick={() => setShowForm(true)} />
                </div>
                <div className="card-datatable table-responsive">
                    <DataTable
                        className="datatables-basic table border-top"
                        data={data.map(({ name, weight }, index) => [
                            index + 1, name, weight, index
                        ])}
                        options={{
                            responsive: true,
                        }}
                        slots={{
                            [cols.length - 1]: (value: number) => (
                                <div className="d-flex align-items-end gap-2">
                                    <Button value="Edit" type="warning" icon="bx-edit" isIcon onClick={() => handleEdit(value)} />
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


            <CustomOffcanvas
                show={showForm}
                handleClose={() => {
                    setSelectedId(null)
                    setShowForm(false)
                    setPartnerCriteria({ name: '', weight: 0 })
                }}
                title={selectedId ? "Edit Kriteria Mitra" : "Tambah Kriteria Mitra"}
            >
                <form onSubmit={handleSubmit} method="post">
                    <Input
                        label="Nama"
                        name="name"
                        placeholder="Kriteria Mitra"
                        value={partnerCriteria?.name}
                        errorMessage={errors.name}
                        onChange={(val) => setPartnerCriteria({ ...partnerCriteria, name: val.target.value })}
                        className="mb-3"
                    />
                    <Input
                        label="Bobot"
                        name="weight"
                        placeholder="Bobot"
                        value={partnerCriteria?.weight.toString()}
                        errorMessage={errors.weight}
                        onChange={(val) => setPartnerCriteria({ ...partnerCriteria, weight: val.target.value })}
                        className="mb-3"
                    />
                    <Button value="Save" type="primary" className="mt-4" isSubmit />
                </form>
            </CustomOffcanvas>
        </AuthenticatedLayout >
    )
}
