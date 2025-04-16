import { mergeClass } from "@/Utils/UIRalated"
import { FC, HTMLInputTypeAttribute, ReactNode } from "react"
import InputMask from "react-input-mask";

type InputType = {
    className?: string
    value?: string
    type?: HTMLInputTypeAttribute
    name?: string
    id?: string
    placeholder?: string
    ariaDescribedBy?: string
    label?: string
    errorMessage?: string,
    description?: string,
    isGroup?: boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    isRequired?: boolean
    children?: ReactNode,
    mask?: string | RegExp[]
}

export const Input: FC<InputType> = ({
    className,
    value,
    type = "text",
    name,
    id,
    placeholder,
    ariaDescribedBy,
    label,
    errorMessage,
    description,
    isGroup,
    onChange,
    isRequired,
    children,
    mask,
}
) => {
    const input = mask ? (
        <InputMask
            mask={mask}
            className={mergeClass(
                "form-control",
                className,
                errorMessage && "is-invalid"
            )}
            id={id || name}
            name={name}
            placeholder={placeholder}
            aria-describedby={ariaDescribedBy}
            required={isRequired}
            onChange={onChange}
        />
    ) : (
        <input
            className={mergeClass(
                "form-control",
                errorMessage && "is-invalid"
            )}
            type={type}
            id={id || name}
            name={name}
            placeholder={placeholder}
            aria-describedby={ariaDescribedBy}
            value={value}
            onChange={(e) => onChange && onChange(e)}
            required={isRequired}
        />
    );

    return (
        <div className={className}>
            {label && <label className="form-label" htmlFor={id}>{label} {isRequired && <span className="text-danger">*</span>}</label>}
            {isGroup ? <div className="input-group input-group-merge">
                {input}
                {children}
            </div> : input}
            {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
            {description && <div className="form-text">{description}</div>}
        </div>
    )
}
