import { Button } from "@/components/Button";
import { FC, useState } from "react";
import { PartnerDto } from "../dtos";
import { PartnerSelector } from "./PartnerSelector";
import { Collapse } from "react-bootstrap";
import { Input } from "@/components/Input";

type PartnerFormProps = {
    index: number,
    partner: PartnerDto
    selectedPartner: number | null
    setSelectedPartner: (value: number | null) => void,
    onChange: (index: number, value: PartnerDto) => void
    onDelete: (index: number) => void
    errors?: any
}


export const PartnerForm: FC<PartnerFormProps> = ({
    index,
    partner,
    selectedPartner,
    setSelectedPartner,
    onChange,
    onDelete,
    errors,
}) => {
    return (
        <div className="card mb-5" key={index}>
            <div className="card-header header-elements" style={{ borderBottom: "1px solid #e5e5e5", background: "#e5e5e5" }}>
                <p className="mb-0 me-2">Pihak {`${index + 1} (${partner.agency_type})`}</p>

                <div className="card-header-elements ms-auto">
                    {index !== 0 && (
                        <Button
                            value="Delete"
                            icon="bx-trash"
                            isIcon
                            size="xs"
                            onClick={() => onDelete(index)}
                        />
                    )}
                    <Button
                        value="Collapse"
                        icon={selectedPartner === index ? "bx-chevron-up" : "bx-chevron-down"}
                        isIcon
                        size="xs"
                        onClick={() => setSelectedPartner(selectedPartner === index ? null : index)}
                    />
                </div>
            </div>

            <Collapse in={selectedPartner === index}>
                <div id={`collapse-card-${index}`}>
                    <div className="card-body">
                        <PartnerSelector
                            className="mb-3"
                            typeValue={partner.agency_type}
                            error={errors?.[`partners.${index}.agency_name`]}
                            onChangeType={(value) => {
                                onChange(index, { ...partner, agency_type: value as App.Enums.AgencyTypeEnum })
                            }}
                            value={partner.agency_name ?? undefined}
                            onChangeValue={(value) => {
                                onChange(index, { ...partner, agency_name: value })
                            }}
                        />
                        <Input
                            label="Alamat"
                            placeholder="Alamat"
                            value={partner.agency_address ?? undefined}
                            onChange={(e) => {
                                onChange(index, { ...partner, agency_address: e.target.value })
                            }}
                            errorMessage={errors?.[`partners.${index}.agency_address`]}
                        />
                        <hr />
                        <h6 className="mb-0">Penandatangan</h6>
                        <small className="mt-0 text-xs">Pejabat yang menandatangani dokumen</small>
                        <Input
                            label="Nama"
                            placeholder="Nama Pejabat"
                            value={partner.signatory_name ?? undefined}
                            onChange={(e) => {
                                onChange(index, { ...partner, signatory_name: e.target.value })
                            }}
                            className="mt-4"
                            errorMessage={errors?.[`partners.${index}.signatory_name`]}
                        />

                        <Input
                            label="Jabatan"
                            placeholder="Jabatan Pejabat"
                            value={partner.signatory_position ?? undefined}
                            onChange={(e) => {
                                onChange(index, { ...partner, signatory_position: e.target.value })
                            }}
                            className="mt-4"
                            errorMessage={errors?.[`partners.${index}.signatory_position`]}
                        />
                        <hr />
                        <h6 className="mb-0">Penanggung Jawab (Jika Ada)
                            <i
                                className={`bx  ml-8 ${partner.responsible_name !== null ? "bx-chevron-down" : "bx-chevron-up"}`}
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    onChange(index, { ...partner, responsible_name: partner.responsible_name === null ? "" : null })
                                }}
                            />
                        </h6>

                        <Collapse in={partner.responsible_name !== null}>
                            <div>
                                <Input
                                    label="Nama"
                                    placeholder="Nama Pejabat"
                                    value={partner.responsible_name ?? undefined}
                                    onChange={(e) => {
                                        onChange(index, { ...partner, responsible_name: e.target.value })
                                    }}
                                    className="mt-4"
                                />

                                <Input
                                    label="Jabatan"
                                    placeholder="Jabatan Pejabat"
                                    value={partner.responsible_position ?? undefined}
                                    onChange={(e) => {
                                        onChange(index, { ...partner, responsible_position: e.target.value })
                                    }}
                                    className="mt-4"
                                />
                            </div>
                        </Collapse>

                    </div>
                </div>
            </Collapse>
        </div>
    )
}
