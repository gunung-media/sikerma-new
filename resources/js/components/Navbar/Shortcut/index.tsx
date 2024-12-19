export const Shortcut = () => {
    return (
        <li
            className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0"
        >
            <a
                className="nav-link dropdown-toggle hide-arrow"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
            >
                <i className="bx bx-grid-alt bx-md"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-end p-0">
                <div className="dropdown-menu-header border-bottom">
                    <div
                        className="dropdown-header d-flex align-items-center py-3"
                    >
                        <h6 className="mb-0 me-auto">Shortcuts</h6>
                        <a
                            href="."
                            className="dropdown-shortcuts-add py-2"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Add shortcuts"
                        ><i className="bx bx-plus-circle text-heading"></i
                        ></a>
                    </div>
                </div>
                <div className="dropdown-shortcuts-list scrollable-container">
                    <div className="row row-bordered overflow-visible g-0">
                        <div className="dropdown-shortcuts-item col">
                            <span
                                className="dropdown-shortcuts-icon rounded-circle mb-3"
                            >
                                <i className="bx bx-calendar bx-26px text-heading"></i>
                            </span>
                            <a href="app-calendar.html" className="stretched-link"
                            >Calendar</a
                            >
                            <small>Appointments</small>
                        </div>
                        <div className="dropdown-shortcuts-item col">
                            <span
                                className="dropdown-shortcuts-icon rounded-circle mb-3"
                            >
                                <i className="bx bx-food-menu bx-26px text-heading"></i>
                            </span>
                            <a href="app-invoice-list.html" className="stretched-link"
                            >Invoice App</a
                            >
                            <small>Manage Accounts</small>
                        </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                        <div className="dropdown-shortcuts-item col">
                            <span
                                className="dropdown-shortcuts-icon rounded-circle mb-3"
                            >
                                <i className="bx bx-user bx-26px text-heading"></i>
                            </span>
                            <a href="app-user-list.html" className="stretched-link"
                            >User App</a
                            >
                            <small>Manage Users</small>
                        </div>
                        <div className="dropdown-shortcuts-item col">
                            <span
                                className="dropdown-shortcuts-icon rounded-circle mb-3"
                            >
                                <i
                                    className="bx bx-check-shield bx-26px text-heading"
                                ></i>
                            </span>
                            <a href="app-access-roles.html" className="stretched-link"
                            >Role Management</a
                            >
                            <small>Permission</small>
                        </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                        <div className="dropdown-shortcuts-item col">
                            <span
                                className="dropdown-shortcuts-icon rounded-circle mb-3"
                            >
                                <i
                                    className="bx bx-pie-chart-alt-2 bx-26px text-heading"
                                ></i>
                            </span>
                            <a href="index-2.html" className="stretched-link"
                            >Dashboard</a
                            >
                            <small>User Dashboard</small>
                        </div>
                        <div className="dropdown-shortcuts-item col">
                            <span
                                className="dropdown-shortcuts-icon rounded-circle mb-3"
                            >
                                <i className="bx bx-cog bx-26px text-heading"></i>
                            </span>
                            <a
                                href="pages-account-settings-account.html"
                                className="stretched-link"
                            >Setting</a
                            >
                            <small>Account Settings</small>
                        </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                        <div className="dropdown-shortcuts-item col">
                            <span
                                className="dropdown-shortcuts-icon rounded-circle mb-3"
                            >
                                <i
                                    className="bx bx-help-circle bx-26px text-heading"
                                ></i>
                            </span>
                            <a href="pages-faq.html" className="stretched-link"
                            >FAQs</a
                            >
                            <small>FAQs & Articles</small>
                        </div>
                        <div className="dropdown-shortcuts-item col">
                            <span
                                className="dropdown-shortcuts-icon rounded-circle mb-3"
                            >
                                <i
                                    className="bx bx-window-open bx-26px text-heading"
                                ></i>
                            </span>
                            <a href="modal-examples.html" className="stretched-link"
                            >Modals</a
                            >
                            <small>Useful Popups</small>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}
