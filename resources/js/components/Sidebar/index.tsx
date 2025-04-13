import { sidebarNavigation, SidebarNavigationItem } from "@/constants/navigation"
import { mergeClass } from "@/utils/UIRalated"
import { Logo } from "../Logo";
import { Link, usePage } from "@inertiajs/react";
import { PageProps } from "@/types";

export const Sidebar = () => {
    const { props: { auth: { user } } } = usePage<PageProps>();
    const compareUrl = (url: string) => route().current() === url

    const renderHeader = (item: SidebarNavigationItem, index: number) => {
        if (user.is_supervisor && !item.canSupervisionAccess) {
            return null;
        }

        if (!user.is_supervisor && !user.is_super_admin && item.isSuperAdmin) {
            return null;
        }
        return (
            <li className="menu-header small text-uppercase" key={index}>
                <span className="menu-header-text" data-i18n={item.label}>{item.label}</span>
            </li>
        );
    };

    const renderSingle = (item: SidebarNavigationItem, index: number) => {
        if (user.is_supervisor && !item.canSupervisionAccess) {
            return null;
        }

        if (!user.is_supervisor && !user.is_super_admin && item.isSuperAdmin) {
            return null;
        }

        return (
            <li className={mergeClass("menu-item", compareUrl(item.url!) ? "active" : "")} key={index}>
                <Link href={route(item.url!)} className="menu-link">
                    <i className={mergeClass("menu-icon tf-icons bx", item.icon)}></i>
                    <div data-i18n={item.label} className="text-truncate">{item.label}</div>
                </Link>
            </li>
        );
    };

    const renderMultiple = (item: SidebarNavigationItem, index: number) => {
        if (user.is_supervisor && !item.canSupervisionAccess) {
            return null;
        }

        if (!user.is_supervisor && !user.is_super_admin && item.isSuperAdmin) {
            return null;
        }
        return (
            <li className={mergeClass(
                "menu-item",
                (item.items ?? []).some((sub) => compareUrl(sub.url!)) ? "open active" : ""
            )} key={index}>
                <a href="#" className="menu-link menu-toggle">
                    <i className={mergeClass("menu-icon tf-icons bx", item.icon)}></i>
                    <div data-i18n={item.label} className="text-truncate">{item.label}</div>
                </a>
                <ul className="menu-sub">
                    {(item.items ?? []).map((sub, idx) => {
                        if (sub.isSuperAdmin && sub.isSuperAdmin !== user?.is_super_admin) {
                            return null
                        }
                        return (
                            <li className={mergeClass("menu-item", compareUrl(sub.url!) ? "active" : "")} key={idx}>
                                <Link href={route(sub.url)} className="menu-link">
                                    <div className="text-truncate" data-i18n={sub.label}>{sub.label}</div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </li>
        )
    };

    return (
        <aside
            id="layout-menu"
            className="layout-menu menu-vertical menu bg-menu-theme"
            style={{ zIndex: 9999 }}
        >
            <div className="app-brand demo">
                <a href={route("dashboard")} className="app-brand-link">
                    <span className="app-brand-logo demo"><Logo /></span>
                    <span className="app-brand-text demo menu-text fw-bold ms-2">SIKERMA</span >
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
