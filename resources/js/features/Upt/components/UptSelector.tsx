import { CustomSelect } from "@/components/Select";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { UptType } from "../types";

type UptSelectorProps = {
    className?: string
    onChange: (value: string | any) => void
    error?: string
    value?: number
    description?: string
}

export const UptSelector: FC<UptSelectorProps> = ({ className, onChange, error, value, description }) => {
    const [upts, setUpts] = useState<UptType[]>([]);

    const getUpts = async () => {
        const { data } = await axios.get(route('api.upts'))
        setUpts(data.upts)
    }

    useEffect(() => {
        getUpts()
    }, [])

    return (
        <CustomSelect
            label="UPT"
            options={upts.map((institute) => ({ value: institute.id, label: institute.name }))}
            onChange={(value) => onChange(value)}
            value={value}
            className={className}
            errorMessage={error}
            description={description}
        />
    );
};
