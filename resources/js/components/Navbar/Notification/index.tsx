export const Notification = () => {
    return (
        <li
            className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2"
        >
            <a
                className="nav-link dropdown-toggle hide-arrow"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
            >
                <span className="position-relative">
                    <i className="bx bx-bell bx-md"></i>
                    <span
                        className="badge rounded-pill bg-danger badge-dot badge-notifications border"
                    ></span>
                </span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end p-0">
                <li className="dropdown-menu-header border-bottom">
                    <div
                        className="dropdown-header d-flex align-items-center py-3"
                    >
                        <h6 className="mb-0 me-auto">Notification</h6>
                        <div className="d-flex align-items-center h6 mb-0">
                            <span className="badge bg-label-primary me-2">8 New</span>
                            <a
                                href="#"
                                className="dropdown-notifications-all p-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Mark all as read"
                            ><i className="bx bx-envelope-open text-heading"></i
                            ></a>
                        </div>
                    </div>
                </li>
                <li
                    className="dropdown-notifications-list scrollable-container"
                >
                    <ul className="list-group list-group-flush">
                        <li
                            className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read"
                        >
                            <div className="d-flex">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar">
                                        <span
                                            className="avatar-initial rounded-circle bg-label-success"
                                        ><i className="bx bx-pie-chart-alt"></i
                                        ></span>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="small mb-0">
                                        Monthly report is generated
                                    </h6>
                                    <small className="mb-1 d-block text-body"
                                    >July monthly financial report is generated
                                    </small>
                                    <small className="text-muted">3 days ago</small>
                                </div>
                                <div
                                    className="flex-shrink-0 dropdown-notifications-actions"
                                >
                                    <a
                                        href="#"
                                        className="dropdown-notifications-read"
                                    ><span className="badge badge-dot"></span
                                    ></a>
                                    <a
                                        href="#"
                                        className="dropdown-notifications-archive"
                                    ><span className="bx bx-x"></span
                                    ></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="border-top">
                    <div className="d-grid p-4">
                        <a
                            className="btn btn-primary btn-sm d-flex"
                            href="#"
                        >
                            <small className="align-middle"
                            >View all notifications</small
                            >
                        </a>
                    </div>
                </li>
            </ul>
        </li>
    )
}
