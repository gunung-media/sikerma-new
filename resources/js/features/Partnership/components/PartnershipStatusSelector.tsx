import { CustomSelect } from "@/components/Select";
import { FC, useEffect, useState } from "react";
import { App } from "@/types/enum"
import { kebabToTitle } from "@/utils/StringRalated";

type PartnershipStatusSelectorProps = {
    className?: string
    onChange: (value: string | any) => void
    error?: string
    value?: string
    description?: string
}

export const PartnershipStatusSelector: FC<PartnershipStatusSelectorProps> = ({ className, onChange, error, value, description }) => {
    const [status, setStatus] = useState<string[]>([]);

    useEffect(() => {
        setStatus(Object.values(App.Enums.PartnershipStatusEnum))
    }, [])

    return (
        <CustomSelect
            label="Status"
            options={status.map((type) => ({ value: type, label: kebabToTitle(type) }))}
            onChange={(value) => onChange(value)}
            value={value}
            className={className}
            errorMessage={error}
            description={description}
        />
    );
};
