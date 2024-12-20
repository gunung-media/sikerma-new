import CreatableSelect from 'react-select/creatable';
import { FC, useEffect, useState } from "react";
import { App } from '@/types/enum';

type PartnerSelectorProps = {
    className?: string
    typeValue?: App.Enums.AgencyTypeEnum,
    value?: string
    onChangeType: (value: string) => void
    onChangeValue: (value: string | any) => void
    error?: string
    description?: string
}

export const PartnerSelector: FC<PartnerSelectorProps> = ({
    className,
    typeValue,
    value,
    onChangeType,
    onChangeValue,
    error,
    description
}) => {
    const [types, setTypes] = useState<string[]>([])

    useEffect(() => {
        setTypes(Object.values(App.Enums.AgencyTypeEnum))
    }, [])

    return (
        <div className={className}>
            <label className="form-label" >Nama Instansi</label>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <select
                    value={typeValue}
                    onChange={(e) => onChangeType(e.target.value)}
                    style={{
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        backgroundColor: '#f0f0f0',
                        marginRight: '0',
                        flexShrink: 0,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                    }}
                >
                    {types.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>

                <div style={{ flex: 1, marginLeft: '-1px' }}>
                    <CreatableSelect
                        value={value ? { label: value, value } : null} // Set the selected value
                        onChange={(newVal: any) => onChangeValue(newVal ? newVal.value : null)} // Handle the change
                        onCreateOption={(newValue: string) => onChangeValue(newValue)} // Handle the creation of new value
                        options={[]} // You can add predefined options here
                        placeholder="Select or type to create"
                        styles={{
                            control: (provided) => ({
                                ...provided,
                                borderRadius: '0 4px 4px 0',
                                border: '1px solid #ccc',
                            }),
                        }}
                    />
                </div>

            </div>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};
