import { mergeClass } from "@/utils/UIRalated";
import { FC } from "react";
import Flatpickr from "react-flatpickr";

type DatePickerProps = {
    value: Date,
    onChange: (date: Date) => void,
    enableTime?: boolean,
    label?: string,
    inline?: boolean
    className?: string,
    minDate?: Date;
    maxDate?: Date;
    errorMessage?: string,
    disabled?: boolean
}

export const DatePicker: FC<DatePickerProps> = ({
    value,
    onChange,
    enableTime = false,
    label,
    inline = true,
    className,
    minDate,
    maxDate,
    errorMessage,
    disabled
}) => {
    return (
        <div className={className}>
            {label && <label className="form-label" >{label}</label>}
            <Flatpickr
                value={value}
                onChange={([date]) => onChange(date)}
                options={{
                    inline: inline,
                    dateFormat: inline ? "Y-m-d" : "Y-m-d",
                    enableTime: enableTime,
                    minDate: minDate,
                    maxDate: maxDate
                }}
                className={mergeClass(!inline ? "form-control" : "", errorMessage && "is-invalid")}
                disabled={disabled}
            />

            <style>
                {inline && `.flatpickr-input { display: none; }`}
            </style>
            {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
        </div>
    )
}
