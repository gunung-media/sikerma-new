import { User } from "./User"

export const Navbar = () => {
    return (
        <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
        >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0 d-xl-none" >
                <a className="nav-item nav-link px-0 me-xl-6" href="#" >
                    <i className="bx bx-menu bx-md"></i>
                </a>
            </div>

            <div
                className="navbar-nav-right d-flex align-items-center"
                id="navbar-collapse"
            >
                <div className="navbar-nav align-items-center">
                    <div className="nav-item navbar-search-wrapper mb-0">
                        <a
                            className="nav-item nav-link search-toggler px-0"
                            href="#"
                        ></a>
                    </div>
                </div>

                <ul className="navbar-nav flex-row align-items-center ms-auto">
                    <User />
                </ul>
            </div>

            <div className="navbar-search-wrapper search-input-wrapper d-none">
                <input
                    type="text"
                    className="form-control search-input container-xxl border-0"
                    placeholder="Search..."
                    aria-label="Search..."
                />
                <i className="bx bx-x bx-md search-toggler cursor-pointer"></i>
            </div>

        </nav>
    )
}
