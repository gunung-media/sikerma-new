import { sidebarNavigation, SidebarNavigationItem } from "@/constants/navigation"
import { mergeClass } from "@/utils/UIRalated"
import { Logo } from "../Logo";
import { Link } from "@inertiajs/react";

export const Sidebar = () => {
    const compareUrl = (url: string) => route().current() === url

    const renderHeader = ({ label }: SidebarNavigationItem, index: number) => (
        <li className="menu-header small text-uppercase" key={index}>
            <span className="menu-header-text" data-i18n={label}>{label}</span>
        </li>
    );

    const renderSingle = (item: SidebarNavigationItem, index: number) => (
        <li className={mergeClass("menu-item", compareUrl(item.url!) ? "active" : "")} key={index}>
            <Link href={route(item.url!)} className="menu-link">
                <i className={mergeClass("menu-icon tf-icons bx", item.icon)}></i>
                <div data-i18n={item.label} className="text-truncate">{item.label}</div>
            </Link>
        </li>
    );

    const renderMultiple = (item: SidebarNavigationItem, index: number) => (
        <li className={mergeClass(
            "menu-item",
            (item.items ?? []).some((sub) => compareUrl(sub.url!)) ? "open active" : ""
        )} key={index}>
            <a href="#" className="menu-link menu-toggle">
                <i className={mergeClass("menu-icon tf-icons bx", item.icon)}></i>
                <div data-i18n={item.label} className="text-truncate">{item.label}</div>
            </a>
            <ul className="menu-sub">
                {(item.items ?? []).map((sub, idx) => (
                    <li className={mergeClass("menu-item", compareUrl(sub.url!) ? "active" : "")} key={idx}>
                        <Link href={route(sub.url)} className="menu-link">
                            <div className="text-truncate" data-i18n={sub.label}>{sub.label}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );

    return (
        <aside
            id="layout-menu"
            className="layout-menu menu-vertical menu bg-menu-theme"
        >
            <div className="app-brand demo">
                <a href={route("dashboard")} className="app-brand-link">
                    <span className="app-brand-logo demo"><Logo /></span>
                    <span className="app-brand-text demo menu-text fw-bold ms-2">sneat</span >
                </a>

                <a
                    href="#"
                    className="layout-menu-toggle menu-link text-large ms-auto"
                >
                    <i
                        className="bx bx-chevron-left bx-sm d-flex align-items-center justify-content-center"
                    ></i>
                </a>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">
                {sidebarNavigation.map((item, index) => {
                    switch (item.type) {
                        case "header":
                            return renderHeader(item, index);
                        case "single":
                            return renderSingle(item, index);
                        case "multiple":
                            return renderMultiple(item, index);
                        default:
                            return null;
                    }
                })}
            </ul>
        </aside>
    )
}
