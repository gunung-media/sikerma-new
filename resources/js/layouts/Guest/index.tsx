import { SnackbarProvider } from 'notistack'
import './style.css'
import { FC, Fragment, ReactNode } from "react"
import { Head } from '@inertiajs/react'
import { Logo } from '@/components/Logo'

type LayoutProps = {
    title?: string
    children: ReactNode
}

export const GuestLayout: FC<LayoutProps> = ({ children, title = "Login" }) => {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="container-xxl">
                <div className="authentication-wrapper authentication-basic container-p-y">
                    <div className="authentication-inner">
                        <div className="card px-sm-6 px-0">
                            <div className="card-body">
                                <div className="app-brand justify-content-center">
                                    <a href="#" className="app-brand-link gap-2">
                                        <span className="app-brand-logo demo">
                                            <Logo />
                                        </span>
                                        <span className="app-brand-text demo text-heading fw-bold">SIKERMA</span>
                                    </a>
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SnackbarProvider maxSnack={3} autoHideDuration={3000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} />
        </Fragment>
    )
}
