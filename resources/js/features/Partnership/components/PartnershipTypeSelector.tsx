import { CustomSelect } from "@/components/Select";
import { FC, useEffect, useState } from "react";
import { App } from "@/types/enum"

type PartnershipTypeSelectorProps = {
    className?: string
    onChange: (value: string | any) => void
    error?: string
    value?: string
    description?: string
    disabled?: boolean,
    isSuperAdmin?: boolean
}

export const PartnershipTypeSelector: FC<PartnershipTypeSelectorProps> = ({ className, onChange, error, value, description, disabled, isSuperAdmin }) => {
    const [status, setType] = useState<string[]>([]);

    useEffect(() => {
        setType(Object.values(App.Enums.PartnershipTypeEnum))

        if (!isSuperAdmin) {
            setType(Object.values(App.Enums.PartnershipTypeEnum).filter((type) => type !== App.Enums.PartnershipTypeEnum.MOU))
        }
    }, [])

    return (
        <CustomSelect
            label="Type"
            options={status.map((type) => ({ value: type, label: type }))}
            onChange={(value) => onChange(value)}
            value={value}
            className={className}
            errorMessage={error}
            description={description}
            disabled={disabled}
        />
    );
};
