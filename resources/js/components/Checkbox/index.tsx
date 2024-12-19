import { mergeClass } from "@/utils/UIRalated";
import { FC } from "react";

type CheckBoxProps = {
    label: string;
    checked?: boolean;
    id?: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

export const Checkbox: FC<CheckBoxProps> = ({ label, id, onChange, checked, name, className }) => {
    const formattedId = id ? id : label.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className={mergeClass("form-check mb-0 ms-2", className)}>
            <input
                className="form-check-input"
                type="checkbox"
                name={name}
                id={formattedId}
                checked={checked}
                onChange={onChange}
            />
            <label className="form-check-label" htmlFor={formattedId}>
                {label}
            </label>
        </div>
    );
};
