import { CustomSelect } from "@/components/Select";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { InstituteType } from "../types";

type InstituteSelectorProps = {
    className?: string
    onChange: (value: string | any) => void
    error?: string
    value?: number
    description?: string
}

export const InstituteSelector: FC<InstituteSelectorProps> = ({ className, onChange, error, value, description }) => {
    const [institutes, setInstitutes] = useState<InstituteType[]>([]);

    const getInstitutes = async () => {
        const { data } = await axios.get(route('api.institutes'))
        setInstitutes(data.institutes)
    }

    useEffect(() => {
        getInstitutes()
    }, [])

    return (
        <CustomSelect
            label="Institusi"
            options={institutes.map((institute) => ({ value: institute.id, label: institute.name }))}
            onChange={(value) => onChange(value)}
            value={value}
            className={className}
            errorMessage={error}
            description={description}
        />
    );
};
