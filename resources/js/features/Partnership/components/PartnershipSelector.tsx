import { CustomSelect } from "@/components/Select";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { PartnershipType } from "../types";

type PartnershipSelectorProps = {
    className?: string
    onChange: (value: string | any) => void
    error?: string
    value?: string
    description?: string
}

export const PartnershipSelector: FC<PartnershipSelectorProps> = ({ className, onChange, error, value, description }) => {
    const [partnerships, setPartnerships] = useState<PartnershipType[]>([]);

    const getPartnerships = async () => {
        const { data: { partnerships } } = await axios.get<{ partnerships: PartnershipType[] }>(route('api.partnerships'))
        setPartnerships(partnerships)
    }

    useEffect(() => {
        getPartnerships()
    }, [])

    return (
        <CustomSelect
            label="Dasar Dokumen Kerjasama"
            options={partnerships.map((partnership) => ({ value: partnership.document_number, label: partnership.document_number }))}
            onChange={(value) => onChange(value)}
            value={value}
            className={className}
            errorMessage={error}
            description={description}
        />
    );
};
