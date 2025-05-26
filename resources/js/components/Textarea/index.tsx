import { FC, ReactNode } from "react";
import ReactQuill from "react-quill";

type TextAreaType = {
    className?: string;
    value?: string;
    name?: string;
    id?: string;
    placeholder?: string;
    label?: string;
    errorMessage?: string;
    description?: string;
    isRequired?: boolean;
    onChange?: (value: string) => void;
    children?: ReactNode;
    height?: string | number;
    disabled?: boolean
};

export const TextArea: FC<TextAreaType> = ({
    className,
    value = "",
    name,
    id,
    placeholder,
    label,
    errorMessage,
    description,
    isRequired,
    onChange,
    height,
    disabled
}) => {
    return (
        <div className={className}>
            {label && <label className="form-label" htmlFor={id}>{label}</label>}
            <ReactQuill
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{ height: `${height}px`, maxHeight: `${height}px!important`, overflowY: "auto", }}
                className={`${errorMessage ? "is-invalid" : ""}`}
                id={id || name}
                readOnly={disabled}
            />
            {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
            {description && <div className="form-text">{description}</div>}
        </div>
    );
};
