import { CustomSelect } from "@/components/Select";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { PartnerCriteriaType } from "../types";

type PartnerCriteriaSelectorProps = {
    className?: string
    onChange: (value: string | any) => void
    error?: string
    value?: number
    description?: string
}

export const PartnerCriteriaSelector: FC<PartnerCriteriaSelectorProps> = ({ className, onChange, error, value, description }) => {
    const [partnerCriterias, setPartnerCriterias] = useState<PartnerCriteriaType[]>([]);

    const getInstitutes = async () => {
        const { data } = await axios.get(route('api.partnerCriterias'));
        setPartnerCriterias(data.partnerCriterias);
    }

    useEffect(() => {
        getInstitutes()
    }, [])

    return (
        <CustomSelect
            label="Kriteria Partner"
            options={partnerCriterias.map((institute) => ({ value: institute.id, label: institute.name }))}
            onChange={(value) => onChange(value)}
            value={value}
            className={className}
            errorMessage={error}
            description={description}
        />
    );
};
