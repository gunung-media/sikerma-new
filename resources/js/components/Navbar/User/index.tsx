import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { CustomOffcanvas } from "@/components/Offcanvas"
import { PageProps } from "@/types"
import { basicErrorToast, successToast } from "@/utils/Toast"
import { router, usePage } from "@inertiajs/react"
import { FormEventHandler, useState } from "react"

export const User = () => {
    const { props: { auth: { user }, errors } } = usePage<PageProps>()
    const [data, setData] = useState<{ current_password: string, new_password: string }>({
        current_password: '',
        new_password: ''
    })
    const [showSetting, setShowSetting] = useState(false)

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        router.post(route('auth.changePassword'), data, {
            onError: (errors) => {
                console.error(errors)
                basicErrorToast(errors)
            },
            onSuccess: () => {
                successToast('Berhasil menambahkan data')
                setShowSetting(false)
            }
        })
    }


    return (
        <>
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
                <a
                    className="nav-link dropdown-toggle hide-arrow p-0"
                    href="#"
                    data-bs-toggle="dropdown"
                >
                    <div className="avatar avatar-online">
                        <img
                            src={`https://ui-avatars.com/api/?rounded=true&name=${user?.name ?? 'Admin'}`}
                            className="w-px-40 h-auto rounded-circle"
                        />
                    </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                        <a
                            className="dropdown-item"
                            href="pages-account-settings-account.html"
                        >
                            <div className="d-flex">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar avatar-online">
                                        <img
                                            src={`https://ui-avatars.com/api/?rounded=true&name=${user?.name ?? 'Admin'}`}
                                            className="w-px-40 h-auto rounded-circle"
                                        />
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="mb-0">{user.name}</h6>
                                    <small className="text-muted">{user.role || 'No role assigned'}</small>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <div className="dropdown-divider my-1"></div>
                    </li>
                    <li>
                        <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => setShowSetting(true)}
                        >
                            <i className="bx bx-cog bx-md me-3"></i
                            ><span>Pengaturan</span>
                        </a>
                    </li>
                    <li>
                        <div className="dropdown-divider my-1"></div>
                    </li>
                    <li>
                        <a
                            className="dropdown-item"
                            href={route('auth.logout')}
                        >
                            <i className="bx bx-power-off bx-md me-3"></i>
                            <span>Log Out</span>
                        </a>
                    </li>
                </ul>
            </li>

            <CustomOffcanvas
                show={showSetting}
                handleClose={() => {
                    setShowSetting(false)
                }}
                title={"Ganti Password"}
            >
                <form onSubmit={handleSubmit} method="post">
                    <Input
                        label="Password Lama"
                        type="password"
                        placeholder="Masukan Password Lama"
                        value={data.current_password}
                        errorMessage={errors.current_password}
                        onChange={(val) => setData({ ...data, current_password: val.target.value })}
                        className="mb-3"
                    />

                    <Input
                        label="Password Baru"
                        type="password"
                        placeholder="Masukan Password Baru"
                        value={data.new_password}
                        errorMessage={errors.new_password}
                        onChange={(val) => setData({ ...data, new_password: val.target.value })}
                        className="mb-3"
                    />

                    <Button value="Save" type="primary" className="mt-4" isSubmit />
                </form>
            </CustomOffcanvas>
        </>
    )
}
