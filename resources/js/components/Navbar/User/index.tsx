import { PageProps } from "@/types"
import { usePage } from "@inertiajs/react"

export const User = () => {
    const { props: { auth: { user } } } = usePage<PageProps>()


    return (
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
                                <small className="text-muted">{user.roles?.[0]?.name || 'No role assigned'}</small>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <div className="dropdown-divider my-1"></div>
                </li>
                <li>
                    <a className="dropdown-item" href="pages-profile-user.html">
                        <i className="bx bx-user bx-md me-3"></i
                        ><span>My Profile</span>
                    </a>
                </li>
                <li>
                    <a
                        className="dropdown-item"
                        href="pages-account-settings-account.html"
                    >
                        <i className="bx bx-cog bx-md me-3"></i
                        ><span>Settings</span>
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
                        <i className="bx bx-power-off bx-md me-3"></i
                        ><span>Log Out</span>
                    </a>
                </li>
            </ul>
        </li>
    )
}
