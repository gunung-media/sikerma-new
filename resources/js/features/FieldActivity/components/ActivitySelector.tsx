import { CustomSelect } from "@/components/Select";
import { FC, useEffect, useState } from "react";
import { kebabToTitle } from "@/utils/StringRalated";
import axios from "axios";
import { FieldActivityType } from "../types";

type ActivitySelectorProps = {
    className?: string
    onChange: (value: string | any, name: string) => void
    error?: string
    value?: string
    description?: string
}

export const ActivitySelector: FC<ActivitySelectorProps> = ({ className, onChange, error, value, description }) => {
    const [activities, setActivity] = useState<FieldActivityType[]>([]);

    const getActivity = async () => {
        const { data } = await axios.get(route('api.activities'))
        setActivity(data.activities)
    }

    useEffect(() => {
        getActivity()
    }, [])

    return (
        <CustomSelect
            label="Bentuk Kegiatan"
            options={activities.map((type) => ({ value: type.id, label: kebabToTitle(type.name) }))}
            onChange={(value) => onChange(value, activities.filter((val) => val.id === value)[0].name)}
            value={value}
            className={className}
            errorMessage={error}
            description={description}
        />
    );
};
