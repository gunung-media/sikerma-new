import { CustomSelect } from "@/components/Select";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { FacultyType } from "../types";

type FacultySelectorProps = {
    className?: string
    onChange: (value: string | any) => void
    error?: string
    value?: number
    description?: string
}

export const FacultySelector: FC<FacultySelectorProps> = ({ className, onChange, error, value, description }) => {
    const [faculties, setFaculties] = useState<FacultyType[]>([]);

    const getFaculties = async () => {
        const { data } = await axios.get(route('api.faculties'))
        setFaculties(data.faculties)
    }

    useEffect(() => {
        getFaculties()
    }, [])

    return (
        <CustomSelect
            label="Fakultas"
            options={faculties.map((type) => ({ value: type.id, label: type.name }))}
            onChange={(value) => onChange(value)}
            value={value}
            className={className}
            errorMessage={error}
            description={description}
        />
    );
};
