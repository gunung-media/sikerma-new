import { CustomSelect } from "@/components/Select";
import { FC, useEffect, useState } from "react";
import { App } from "@/types/enum"

type PartnershipTypeSelectorProps = {
    className?: string
    onChange: (value: string | any) => void
    error?: string
    value?: string
    description?: string
}

export const PartnershipTypeSelector: FC<PartnershipTypeSelectorProps> = ({ className, onChange, error, value, description }) => {
    const [status, setType] = useState<string[]>([]);

    useEffect(() => {
        setType(Object.values(App.Enums.PartnershipTypeEnum))
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
        />
    );
};
