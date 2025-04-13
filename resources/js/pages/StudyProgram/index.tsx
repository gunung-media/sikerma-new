import { StudyProgramType, StudyProgramDto } from "@/features/StudyProgram"
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
import { FacultySelector } from "@/features/Faculty";

export default function StudyProgram({ data }: PageProps & {
    data: StudyProgramType[],
}) {
    const { errors } = usePage<PageProps>().props
    const [showForm, setShowForm] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [studyProgram, setStudyProgram] = useState<StudyProgramDto>({
        name: '',
        faculty_id: 0,
        weight: '0'
    })

    const cols = ["#", "Name", "Fakultas", "Action"];

    const handleEdit = (index: number) => {
        setStudyProgram(data[index])
        setSelectedId(data[index].id)
        setShowForm(true);
    };

    const isEditing = selectedId !== null;

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        if (isEditing) {
            router.put(route('master.study-programs.update', selectedId), studyProgram, {
                onError: (errors) => {
                    errorToast(errors.error ? errors.error : 'Maaf, terjadi kesalahan')
                },
                onSuccess: () => {
                    successToast('Berhasil mengubah data')
                    setSelectedId(null)
                    setShowForm(false)
                    setTimeout(() => router.visit(route('master.study-programs.index')), 500)
                }
            })
            return;
        }
        router.post(route('master.study-programs.store'), studyProgram, {
            onError: (errors) => {
                console.error(errors)
                basicErrorToast(errors)
            },
            onSuccess: () => {
                successToast('Berhasil menambahkan data')
                setShowForm(false)
                setTimeout(() => router.visit(route('master.study-programs.index')), 500)
            }
        })
    }

    const handleDelete = async (index: number) => {
        await confirmationDelete(() => {
            router.delete(route('master.study-programs.destroy', data[index].id), {
                onSuccess: () => {
                    successToast('Berhasil menghapus data')
                }
            })
        })
    }


    return (
        <AuthenticatedLayout title="Prodi">
            <h4 className="mb-1">List Prodi</h4>

            <p className="mb-6">List prodi yang ada di aplikasi ini</p>

            <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <div className="card-title mb-0">
                    </div>
                    <Button value="Tambah Prodi" type="primary" icon="bx-plus" onClick={() => setShowForm(true)} />
                </div>
                <div className="card-datatable table-responsive">
                    <DataTable
                        className="datatables-basic table border-top"
                        data={data.map((item, index) => [
                            index + 1, item.name, item.faculty.name, index
                        ])}
                        options={{
                            responsive: true,
                        }}
                        slots={{
                            2: (value: any) => <p>{value ?? 0}</p>,
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
                    setStudyProgram({ name: '', faculty_id: 0, weight: "0" })
                }}
                title={selectedId ? "Edit Fakultas" : "Tambah Fakultas"}
            >
                <form onSubmit={handleSubmit} method="post">
                    <Input
                        label="Name"
                        name="name"
                        placeholder="Nama Prodi"
                        value={studyProgram?.name}
                        errorMessage={errors.name}
                        onChange={(val) => setStudyProgram({ ...studyProgram, name: val.target.value })}
                        className="mb-3"
                    />

                    <FacultySelector
                        error={errors.faculty_id}
                        value={studyProgram.faculty_id}
                        onChange={(val) => setStudyProgram({ ...studyProgram, faculty_id: val })}
                    />

                    <Button value="Save" type="primary" className="mt-4" isSubmit />
                </form>
            </CustomOffcanvas>
        </AuthenticatedLayout >
    )
}
