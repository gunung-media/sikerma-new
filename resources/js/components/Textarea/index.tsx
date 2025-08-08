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
    withToolbar?: boolean;
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
    disabled,
    withToolbar = true
}) => {
    return (
        <div className={className}>
            {label && <label className="form-label" htmlFor={id}>{label}</label>}
            {withToolbar ? (
                <ReactQuill
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    style={{ height: `${height}px`, maxHeight: `${height}px!important`, overflowY: "auto", }}
                    className={`${errorMessage ? "is-invalid" : ""}`}
                    id={id || name}
                    readOnly={disabled}
                />
            ) : (
                <textarea
                    className={`form-control ${errorMessage ? "is-invalid" : ""}`}
                    name={name}
                    id={id || name}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    required={isRequired}
                    disabled={disabled}
                    style={{ height: `${height}px`, resize: "vertical" }}
                />
            )}
            {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
            {description && <div className="form-text">{description}</div>}
        </div>
    );
};
