import { UserType, UserDto } from "@/features/User"
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
import { FacultySelector } from "@/features/Faculty";
import { StudyProgramSelector } from "@/features/StudyProgram";
import { App } from "@/types/enum";

export default function User({ roles, data }: PageProps & {
    data: UserType[],
    roles: {
        name: string,
        users: UserType[]
    }[]
}) {
    const { errors } = usePage<PageProps>().props
    const [showForm, setShowForm] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [user, setUser] = useState<UserDto>({
        name: '',
        role: App.Enums.RoleEnum.SUPER_ADMIN,
        username: '',
        password: '',
    })

    const cols = ["#", "Name", "Username", "Role", "Action"];

    const handleEdit = (index: number) => {
        // @ts-expect-error
        setUser(data[index])
        setSelectedId(data[index].id)
        setShowForm(true);
    };

    const isEditing = selectedId !== null;

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        if (isEditing) {
            router.put(route('master.users.update', selectedId), user, {
                onError: (errors) => {
                    errorToast(errors.error ? errors.error : 'Something went wrong')
                },
                onSuccess: () => {
                    successToast('Berhasil mengubah data')
                    setSelectedId(null)
                    setShowForm(false)
                }
            })
            return;
        }
        router.post(route('master.users.store'), user, {
            onError: (errors) => {
                console.error(errors)
                basicErrorToast(errors)
            },
            onSuccess: () => {
                successToast('Berhasil menambahkan data')
                setShowForm(false)
                setTimeout(() => router.visit(route('master.users.index')), 500)
            }
        })
    }

    const handleDelete = async (index: number) => {
        await confirmationDelete(() => {
            router.delete(route('master.users.destroy', data[index].id), {
                onSuccess: () => {
                    successToast('User deleted successfully')
                }
            })
        })
    }


    return (
        <AuthenticatedLayout title="User">
            <h4 className="mb-1">Users List</h4>

            <p className="mb-6">A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what user needs.</p>

            <div className="row g-6">
                {roles.map((role, index) => (
                    <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h6 className="fw-normal mb-0 text-body">Total {role.users?.length} users</h6>
                                    <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                                        {role.users?.slice(0, 3).map((user, index) => (
                                            <li
                                                key={index}
                                                data-bs-toggle="tooltip"
                                                data-popup="tooltip-custom"
                                                data-bs-placement="top"
                                                title={user.name}
                                                className="avatar pull-up">
                                                <img className="rounded-circle"
                                                    src={`https://ui-avatars.com/api/?rounded=true&name=${user.name}`}
                                                    alt="Avatar"
                                                />
                                            </li>
                                        ))}
                                        {(role.users?.length ?? 0) > 3 && (
                                            <li className="avatar">
                                                <span
                                                    className="avatar-initial rounded-circle pull-up"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="bottom"
                                                    title={`+${(role.users?.length ?? 0) - 3} more`}>
                                                    +{(role.users?.length ?? 0) - 3}</span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <div className="role-heading">
                                        <h5 className="mb-1">{role.name}</h5>
                                    </div>
                                    <a href="#"><i className="bx bx-copy bx-md text-muted"></i></a>
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
                    <Button value="Tambah User" type="primary" icon="bx-plus" onClick={() => setShowForm(true)} />
                </div>
                <div className="card-datatable table-responsive">
                    <DataTable
                        className="datatables-basic table border-top"
                        data={data.map((item, index) => [
                            index + 1, item.name, item.username, index, index
                        ])}
                        options={{
                            responsive: true,
                        }}
                        slots={{
                            3: (value: number) => (
                                <div className="d-flex flex-column">
                                    <span className="emp_name text-truncate">{data[value]?.role ?? ""}</span>
                                    <small className="emp_post text-truncate text-muted">
                                        {data[value]?.faculty_id ? data[value].faculty?.name : ""}
                                        {data[value]?.study_program_id ? data[value].studyProgram?.name : ""}
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
                title={selectedId ? "Edit Room" : "Add New Room"}
            >
                <form onSubmit={handleSubmit} method="post">
                    <Input
                        label="Name"
                        name="name"
                        placeholder="User Name"
                        value={user?.name}
                        errorMessage={errors.name}
                        onChange={(val) => setUser({ ...user, name: val.target.value })}
                        className="mb-3"
                    />

                    <Input
                        label="Username"
                        name="username"
                        placeholder="Username "
                        value={user?.username}
                        errorMessage={errors.username}
                        onChange={(val) => setUser({ ...user, username: val.target.value })}
                        className="mb-3"
                    />

                    <Input
                        type="password"
                        label="Password"
                        name="password"
                        placeholder="*******"
                        value={user?.password}
                        errorMessage={errors.password}
                        onChange={(val) => setUser({ ...user, password: val.target.value })}
                        className="mb-3"
                    />

                    <CustomSelect
                        label="Role"
                        onChange={(val) => setUser({ ...user, role: val as App.Enums.RoleEnum })}
                        className="mb-3"
                        options={roles.map((role) => ({ value: role.name.toLowerCase().replace(' ', '-'), label: role.name }))}
                        errorMessage={errors.role}
                        value={user?.role}
                    />

                    {user?.role === App.Enums.RoleEnum.FACULTY_ADMIN && (
                        <FacultySelector
                            className="mb-3"
                            onChange={(val) => setUser({ ...user, faculty_id: val })}
                            value={user?.faculty_id}
                            error={errors.faculty_id}
                        />
                    )}

                    {user?.role === App.Enums.RoleEnum.STUDY_PROGRAM_ADMIN && (
                        <StudyProgramSelector
                            className="mb-3"
                            onChange={(val) => setUser({ ...user, study_program_id: val })}
                            value={user?.study_program_id}
                            error={errors.study_program_id}
                        />
                    )}

                    <Button value="Save" type="primary" className="mt-4" isSubmit />
                </form>
            </CustomOffcanvas>
        </AuthenticatedLayout >
    )
}
