import { CustomSelect } from "@/components/Select";
import { FC, useEffect, useState } from "react";
import { App } from "@/types/enum"

type ActivitySelectorProps = {
    className?: string
    onChange: (value: string | any) => void
    error?: string
    value?: string
    description?: string
}

export const ActivitySelector: FC<ActivitySelectorProps> = ({ className, onChange, error, value, description }) => {
    const [activities, setActivity] = useState<string[]>([]);

    useEffect(() => {
        setActivity(Object.values(App.Enums.PartnershipActivityTypeEnum))
    }, [])

    return (
        <CustomSelect
            label="Bentuk Kegiatan"
            options={activities.map((type) => ({ value: type, label: type }))}
            onChange={(value) => onChange(value)}
            value={value}
            className={className}
            errorMessage={error}
            description={description}
        />
    );
};
