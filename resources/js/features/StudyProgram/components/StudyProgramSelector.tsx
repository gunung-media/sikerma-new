import { CustomSelect } from "@/components/Select";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { StudyProgramType } from "../types";

type StudyProgramSelectorProps = {
    className?: string
    onChange: (value: string | any) => void
    error?: string
    value?: string
}

export const StudyProgramSelector: FC<StudyProgramSelectorProps> = ({ className, onChange, error, value }) => {
    const [faculties, setFaculties] = useState<StudyProgramType[]>([]);

    const getFaculties = async () => {
        const { data } = await axios.get(route('api.faculties'))
        setFaculties(data.faculties)
    }

    useEffect(() => {
        getFaculties()
    }, [])

    return (
        <CustomSelect
            label="Prodi"
            options={faculties.map((type) => ({ value: type.id, label: type.name }))}
            onChange={(value) => onChange(value)}
            value={value}
            className={className}
            errorMessage={error}
        />
    );
};
