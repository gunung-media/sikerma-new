export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="content-footer footer bg-footer-theme">
            <div className="container-xxl">
                <div
                    className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column"
                >
                    <div className="text-body">
                        ©{year} , made with ❤️ by &nbsp;
                        <a
                            href="https://github.com/Richie-Z"
                            target="_blank"
                            className="footer-link"
                        >Richie-Z</a >
                    </div>
                </div>
            </div>
        </footer>
    )
}
