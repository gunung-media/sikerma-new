import { Footer } from "@/Components/Footer"
import { Navbar } from "@/Components/Navbar"
import { Sidebar } from "@/Components/Sidebar"
import { Head } from "@inertiajs/react"
import { SnackbarProvider } from "notistack"
import { FC, Fragment, ReactNode, useEffect } from "react"

type LayoutProps = {
    title: string,
    children: ReactNode
}

export const AuthenticatedLayout: FC<LayoutProps> = ({ title, children }) => {
    useEffect(() => {
        document.dispatchEvent(new Event("reactRendered"));
    }, []);

    return (
        <Fragment>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Sidebar />

                    <div className="layout-page">
                        <Navbar />

                        <div className="content-wrapper">

                            <div className="container-xxl flex-grow-1 container-p-y">
                                {children}
                            </div>
                        </div>

                        <Footer />
                        <div className="content-backdrop fade"></div>
                    </div>
                </div>

                <div className="layout-overlay layout-menu-toggle"></div>
                <div className="drag-target"></div>
            </div>
            <SnackbarProvider maxSnack={3} autoHideDuration={3000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} />
        </Fragment>
    )
}
