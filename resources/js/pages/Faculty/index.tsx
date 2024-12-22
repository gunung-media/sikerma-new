import { FacultyType, FacultyDto } from "@/features/Faculty"
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

export default function Faculty({ data }: PageProps & {
    data: FacultyType[],
}) {
    const { errors } = usePage<PageProps>().props
    const [showForm, setShowForm] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [faculty, setFaculty] = useState<FacultyDto>({
        name: '',
    })

    const cols = ["#", "Name", "Action"];

    const handleEdit = (index: number) => {
        setFaculty(data[index])
        setSelectedId(data[index].id)
        setShowForm(true);
    };

    const isEditing = selectedId !== null;

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        if (isEditing) {
            router.put(route('master.faculties.update', selectedId), faculty, {
                onError: (errors) => {
                    errorToast(errors.error ? errors.error : 'Something went wrong')
                },
                onSuccess: () => {
                    successToast('Berhasil mengubah data')
                    setSelectedId(null)
                    setShowForm(false)
                    setTimeout(() => router.visit(route('master.faculties.index')), 500)
                }
            })
            return;
        }
        router.post(route('master.faculties.store'), faculty, {
            onError: (errors) => {
                console.error(errors)
                basicErrorToast(errors)
            },
            onSuccess: () => {
                successToast('Berhasil menambahkan data')
                setShowForm(false)
                setTimeout(() => router.visit(route('master.faculties.index')), 500)
            }
        })
    }

    const handleDelete = async (index: number) => {
        await confirmationDelete(() => {
            router.delete(route('master.faculties.destroy', data[index].id), {
                onSuccess: () => {
                    successToast('Berhasil menghapus data')
                }
            })
        })
    }


    return (
        <AuthenticatedLayout title="Fakultas">
            <h4 className="mb-1">List Fakultas</h4>

            <p className="mb-6">List fakultas yang ada di aplikasi ini</p>

            <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <div className="card-title mb-0">
                    </div>
                    <Button value="Tambah Fakultas" type="primary" icon="bx-plus" onClick={() => setShowForm(true)} />
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
                                    <small className="emp_post text-truncate text-muted">
                                        {data[value]?.slug}
                                    </small>
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
                }}
                title={selectedId ? "Edit Fakultas" : "Tambah Fakultas"}
            >
                <form onSubmit={handleSubmit} method="post">
                    <Input
                        label="Name"
                        name="name"
                        placeholder="Faculty Name"
                        value={faculty?.name}
                        errorMessage={errors.name}
                        onChange={(val) => setFaculty({ ...faculty, name: val.target.value })}
                        className="mb-3"
                    />

                    <Button value="Save" type="primary" className="mt-4" isSubmit />
                </form>
            </CustomOffcanvas>
        </AuthenticatedLayout >
    )
}
