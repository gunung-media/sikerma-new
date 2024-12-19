import { mergeClass } from "@/Utils/UIRalated"
import { FC } from "react"

type ButtonProps = {
    value: string,
    type?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'dark',
    size?: 'xs' | 'sm' | 'md' | 'lg',
    isRounded?: boolean,
    isLabel?: boolean
    isActive?: boolean,
    isSubmit?: boolean
    className?: string
    icon?: string
    isIcon?: boolean
    onClick?: () => void
}

export const Button: FC<ButtonProps> = ({
    value,
    type = 'primary',
    size,
    isLabel,
    isRounded,
    isActive,
    isSubmit,
    className,
    icon,
    isIcon,
    onClick,
}) => {
    return (
        <button
            type={isSubmit ? 'submit' : 'button'}
            className={
                mergeClass(
                    "btn",
                    typeof isLabel === "undefined" && `btn-${type}`,
                    size && `btn-${size}`,
                    isLabel && `btn-label-${type}`,
                    isRounded && 'rounded-pill',
                    isActive && 'active',
                    isIcon && 'btn-icon',
                    className
                )
            }
            onClick={onClick}
        >
            {!isIcon && icon && <span className={`tf-icons bx bx-18px me-2 ${icon}`}></span>}
            {!isIcon && <span>{value}</span>}
            {isIcon && icon && <i className={`bx ${icon} bx-md`}></i>}
        </button>
    )
}
