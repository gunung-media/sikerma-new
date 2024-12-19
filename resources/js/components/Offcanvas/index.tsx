import { FC, ReactNode } from "react"
import { Offcanvas } from "react-bootstrap"
import { OffcanvasPlacement } from "react-bootstrap/esm/Offcanvas"

type CustomOffcanvasProps = {
    show: boolean,
    placement?: OffcanvasPlacement,
    title: string
    handleClose: () => void,
    children: ReactNode
}

export const CustomOffcanvas: FC<CustomOffcanvasProps> = ({
    show,
    placement = "end",
    title,
    handleClose,
    children
}) => {
    return (
        <Offcanvas show={show} onHide={handleClose} placement={placement}>
            <Offcanvas.Header closeButton style={{ borderBottom: "1px solid #e0e0e0" }}>
                <Offcanvas.Title>{title}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
                {children}
            </Offcanvas.Body>
        </Offcanvas>
    )
}
