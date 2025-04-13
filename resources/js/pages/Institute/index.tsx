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
import { CustomSelect } from "@/components/Select";
import { App } from "@/types/enum";

export default function Institute({ data }: PageProps & {
    data: InstituteType[],
}) {
    const { errors } = usePage<PageProps>().props
    const [showForm, setShowForm] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [institute, setInstitute] = useState<InstituteDto>({
        name: '',
        type: '',
        is_active: true
    })

    const cols = ["#", "Name", "MoU", "MoA", "IA", "Total", "Action"];

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
                    setTimeout(() => router.visit(route('master.institutes.index')), 500)
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
                setTimeout(() => router.visit(route('master.institutes.index')), 500)
            }
        })
    }

    const handleDelete = async (index: number) => {
        await confirmationDelete(() => {
            router.delete(route('master.institutes.destroy', data[index].id), {
                onSuccess: () => {
                    successToast('Berhasil menghapus data')
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
                        data={data.map((_, index) => [
                            index + 1, index, index, index, index, index, index
                        ])}
                        options={{
                            responsive: true,
                        }}
                        slots={{
                            1: (value: number) => (
                                <div className="d-flex flex-column">
                                    <span className="emp_name text-truncate">{data[value]?.name}</span>
                                    <small className="emp_post text-truncate text-muted">
                                        {data[value]?.type}
                                    </small>
                                </div>
                            ),
                            2: (value: number) => (
                                <span>{data[value]?.partnerships?.filter((item) => item.type === App.Enums.PartnershipTypeEnum.MOU).length ?? 0}</span>
                            ),
                            3: (value: number) => (
                                <span>{data[value]?.partnerships?.filter((item) => item.type === App.Enums.PartnershipTypeEnum.MOA).length ?? 0}</span>

                            ),
                            4: (value: number) => (
                                <span>{data[value]?.partnerships?.filter((item) => item.type === App.Enums.PartnershipTypeEnum.IA).length ?? 0}</span>
                            ),
                            5: (value: number) => (
                                <span>{data[value]?.partnerships?.length}</span>
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
                    setInstitute({ name: '', type: '', is_active: true })
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
                    <CustomSelect
                        label="Tipe"
                        name="type"
                        value={institute?.type}
                        options={[
                            { value: 'Fakultas', label: 'Fakultas' },
                            { value: 'Program Studi', label: 'Program Studi' },
                            { value: 'Rektorat', label: 'Rektorat' }
                        ]}
                        onChange={(val) => setInstitute({ ...institute, type: val as string ?? "Institusi" })}
                        errorMessage={errors.type}
                        className="mb-3"
                    />
                    <Input
                        label="Alamat"
                        placeholder="Alamat"
                        value={institute?.address}
                        errorMessage={errors.address}
                        onChange={(val) => setInstitute({ ...institute, address: val.target.value })}
                        className="mb-3"
                    />
                    <Input
                        type="number"
                        label="Nomor Telepon"
                        placeholder="Nomor Telepon"
                        value={institute?.phone}
                        errorMessage={errors.phone}
                        onChange={(val) => setInstitute({ ...institute, phone: val.target.value })}
                        className="mb-3"
                    />
                    <Input
                        label="Email"
                        placeholder="Email"
                        value={institute?.email}
                        errorMessage={errors.email}
                        onChange={(val) => setInstitute({ ...institute, email: val.target.value })}
                        className="mb-3"
                    />
                    <Input
                        label="Website"
                        placeholder="Website"
                        value={institute?.website}
                        errorMessage={errors.website}
                        onChange={(val) => setInstitute({ ...institute, website: val.target.value })}
                        className="mb-3"
                    />
                    <Button value="Save" type="primary" className="mt-4" isSubmit />
                </form>
            </CustomOffcanvas>
        </AuthenticatedLayout >
    )
}
