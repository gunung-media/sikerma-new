import { FieldActivityType, FieldActivityDto } from "@/features/FieldActivity"
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

export default function FieldActivity({ data }: PageProps & {
    data: FieldActivityType[],
}) {
    const { errors } = usePage<PageProps>().props
    const [showForm, setShowForm] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [faculty, setFieldActivity] = useState<FieldActivityDto>({
        name: '',
    })

    const cols = ["#", "Name", "Action"];

    const handleEdit = (index: number) => {
        setFieldActivity(data[index])
        setSelectedId(data[index].id)
        setShowForm(true);
    };

    const isEditing = selectedId !== null;

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        if (isEditing) {
            router.put(route('master.field-activities.update', selectedId), faculty, {
                onError: (errors) => {
                    errorToast(errors.error ? errors.error : 'Maaf, terjadi kesalahan.')
                },
                onSuccess: () => {
                    successToast('Berhasil mengubah data')
                    setSelectedId(null)
                    setShowForm(false)
                    setTimeout(() => router.visit(route('master.field-activities.index')), 500)
                }
            })
            return;
        }
        router.post(route('master.field-activities.store'), faculty, {
            onError: (errors) => {
                console.error(errors)
                basicErrorToast(errors)
            },
            onSuccess: () => {
                successToast('Berhasil menambahkan data')
                setShowForm(false)
                setTimeout(() => router.visit(route('master.field-activities.index')), 500)
            }
        })
    }

    const handleDelete = async (index: number) => {
        await confirmationDelete(() => {
            router.delete(route('master.field-activities.destroy', data[index].id), {
                onSuccess: () => {
                    successToast('Berhasil menghapus data')
                }
            })
        })
    }


    return (
        <AuthenticatedLayout title="Bentuk Kegiatan">
            <h4 className="mb-1">List Bentuk Kegiatan</h4>

            <p className="mb-6">List bentuk kegiatan yang ada di aplikasi ini</p>

            <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <div className="card-title mb-0">
                    </div>
                    <Button value="Tambah Bentuk Kegiatan" type="primary" icon="bx-plus" onClick={() => setShowForm(true)} />
                </div>
                <div className="card-datatable table-responsive">
                    <DataTable
                        className="datatables-basic table border-top"
                        data={data.map((item, index) => [
                            index + 1, index, index
                        ])}
                        options={{
                            responsive: true,
                        }}
                        slots={{
                            1: (value: number) => (
                                <div className="d-flex flex-column">
                                    <span className="emp_name text-truncate">{data[value]?.name}</span>
                                </div>
                            ),
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
                    setFieldActivity({ name: '' })
                }}
                title={selectedId ? "Edit Bentuk Kegiatan" : "Tambah Bentuk Kegiatan"}
            >
                <form onSubmit={handleSubmit} method="post">
                    <Input
                        label="Nama"
                        name="name"
                        placeholder="Bentuk Kegiatan"
                        value={faculty?.name}
                        errorMessage={errors.name}
                        onChange={(val) => setFieldActivity({ ...faculty, name: val.target.value })}
                        className="mb-3"
                    />

                    <Button value="Save" type="primary" className="mt-4" isSubmit />
                </form>
            </CustomOffcanvas>
        </AuthenticatedLayout >
    )
}
