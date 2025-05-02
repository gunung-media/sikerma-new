import { InstituteType, InstituteDto } from "@/features/Institute"
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

export default function Institute({ data }: PageProps & {
    data: InstituteType[],
}) {
    const { errors } = usePage<PageProps>().props
    const [showForm, setShowForm] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [institute, setInstitute] = useState<InstituteDto>({
        name: '',
    })

    const cols = ["#", "Name", "Action"];

    const handleEdit = (index: number) => {
        setInstitute(data[index])
        setSelectedId(data[index].id)
        setShowForm(true);
    };

    const isEditing = selectedId !== null;

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        if (isEditing) {
            router.put(route('master.institutes.update', selectedId), institute, {
                onError: (errors) => {
                    errorToast(errors.error ? errors.error : 'Maaf, terjadi kesalahan.')
                },
                onSuccess: () => {
                    successToast('Berhasil mengubah data')
                    setSelectedId(null)
                    setShowForm(false)
                    router.visit(route('master.institutes.index'))
                }
            })
            return;
        }
        router.post(route('master.institutes.store'), institute, {
            onError: (errors) => {
                console.error(errors)
                basicErrorToast(errors)
            },
            onSuccess: () => {
                successToast('Berhasil menambahkan data')
                setShowForm(false)
                router.visit(route('master.institutes.index'))
            }
        })
    }

    const handleDelete = async (index: number) => {
        await confirmationDelete(() => {
            router.delete(route('master.institutes.destroy', data[index].id), {
                onSuccess: () => {
                    successToast('Berhasil menghapus data')
                    router.visit(route('master.institutes.index'))
                }
            })
        })
    }


    return (
        <AuthenticatedLayout title="Institusi">
            <h4 className="mb-1">List Institusi</h4>

            <p className="mb-6">List Institusi yang ada di aplikasi ini</p>

            <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <div className="card-title mb-0">
                    </div>
                    <Button value="Tambah Institusi" type="primary" icon="bx-plus" onClick={() => setShowForm(true)} />
                </div>
                <div className="card-datatable table-responsive">
                    <DataTable
                        className="datatables-basic table border-top"
                        data={data.map(({ name }, index) => [
                            index + 1, name, index
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
                    setInstitute({ name: '' })
                }}
                title={selectedId ? "Edit Institusi" : "Tambah Institusi"}
            >
                <form onSubmit={handleSubmit} method="post">
                    <Input
                        label="Name"
                        name="name"
                        placeholder="Institute Name"
                        value={institute?.name}
                        errorMessage={errors.name}
                        onChange={(val) => setInstitute({ ...institute, name: val.target.value })}
                        className="mb-3"
                    />
                    <Button value="Save" type="primary" className="mt-4" isSubmit />
                </form>
            </CustomOffcanvas>
        </AuthenticatedLayout >
    )
}
