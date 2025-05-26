import { CustomSelect } from "@/components/Select";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { StudyProgramType } from "../types";

type StudyProgramSelectorProps = {
    className?: string
    onChange: (value: string | any) => void
    error?: string
    value?: number
    description?: string
    disabled?: boolean
}

export const StudyProgramSelector: FC<StudyProgramSelectorProps> = ({ className, onChange, error, value, description, disabled }) => {
    const [studyPrograms, setStudyPrograms] = useState<StudyProgramType[]>([]);

    const getFaculties = async () => {
        const { data } = await axios.get(route('api.studyPrograms'))
        setStudyPrograms(data.studyPrograms)
    }

    useEffect(() => {
        getFaculties()
    }, [])

    return (
        <CustomSelect
            label="Prodi"
            options={studyPrograms.map((type) => ({ value: type.id, label: type.name }))}
            onChange={(value) => onChange(value)}
            value={value}
            className={className}
            errorMessage={error}
            description={description}
            disabled={disabled}
        />
    );
};
