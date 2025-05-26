import { mergeClass } from "@/utils/UIRalated";
import { FC } from "react";
import Select, { ActionMeta, SingleValue } from 'react-select'

type SelectOption = { value: string | number; label: string };

type SelectProps = {
    label?: string;
    name?: string;
    value?: string | number | null;
    options: SelectOption[];
    onChange: (value: string | number | null, actionMeta: ActionMeta<SelectOption>) => void;
    errorMessage?: string;
    description?: string;
    className?: string;
    disabled?: boolean
};

export const CustomSelect: FC<SelectProps> = ({ label, name, value, options, onChange, errorMessage, description, className, disabled }) => {

    const selectedOption = options.find((option) => option.value === value) || null;

    const handleChange = (
        selected: SingleValue<SelectOption>,
        actionMeta: ActionMeta<SelectOption>
    ) => {
        onChange(selected ? selected.value : null, actionMeta);
    };
    return (
        <div className={className}>
            {label && <label className="form-label" >{label}</label>}
            <Select
                options={options}
                isSearchable
                isClearable
                name={name}
                value={selectedOption}
                onChange={handleChange}
                className={mergeClass(errorMessage ? 'is-invalid' : '')}
                isDisabled={disabled}
                menuPortalTarget={document.body}
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
            />
            {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
            {description && <div className="form-text">{description}</div>}
        </div>
    )

}
