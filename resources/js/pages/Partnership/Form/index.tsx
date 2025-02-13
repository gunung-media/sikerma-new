import { PartnershipDto, PartnershipStatusSelector, PartnershipType, PartnershipTypeSelector } from "@/features/Partnership";
import { AuthenticatedLayout } from "@/layouts/Authenticated";
import { PageProps } from "@/types";
import { errorToast, successToast } from "@/utils/Toast";
import { router } from "@inertiajs/react";
import axios, { AxiosError } from "axios";
import { FormEventHandler, useEffect, useState } from "react";
import { App } from "@/types/enum"
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { DatePicker } from "@/components/DatePicker";
import { TextArea } from "@/components/Textarea";
import { PartnerDto, PartnerForm } from "@/features/Partner";
import { ActivitySelector } from "@/features/FieldActivity";
import { Dropzone } from "@/components/Dropzone";
import { kebabToTitle } from "@/utils/StringRalated";
import { InstituteSelector } from "@/features/Institute";

export default function PartnershipForm({ partnership, isReadOnly }: PageProps & { partnership?: PartnershipType, isReadOnly: false }) {
    const [errors, setErrors] = useState<any>({})
    const defaultPartner: PartnerDto = {
        partnership_id: 0,
        agency_type: App.Enums.AgencyTypeEnum.COLAGE,
        agency_name: '',
        agency_address: '',
        signatory_name: '',
        signatory_position: '',
        responsible_name: null,
        responsible_position: null
    }

    const [data, setData] = useState<PartnershipDto>({
        type: App.Enums.PartnershipTypeEnum.MOU,
        document_number: '',
        document_fundamental: null,
        title: '',
        description: '',
        status: App.Enums.PartnershipStatusEnum.ACTIVE,
        start_date: new Date().toISOString(),
        end_date: new Date(new Date().getTime() + 60000).toISOString(),
        executor: null,
        partners: [defaultPartner],
        activities: [],
        institute_id: null,
        document_path: null,
    })
    const [selectedPartner, setSelectedPartner] = useState<number | null>(0)

    const isEditing = !!partnership

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        if (isEditing) {
            formData.append('_method', 'PUT')
        }

        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                //@ts-expect-error
                const value = data[key];

                if (Array.isArray(value)) {
                    value.forEach((item, index) => {
                        if (key === "activities" && item.file instanceof File) {
                            formData.append(`${key}[${index}][file]`, item.file);
                            for (const subKey in item) {
                                if (Object.hasOwnProperty.call(item, subKey)) {
                                    if (subKey === "activity_type" && item[subKey]) {
                                        formData.append(`${key}[${index}][${subKey}]`, item[subKey]?.toString());
                                    } else if (subKey !== "file") {
                                        formData.append(`${key}[${index}][${subKey}]`, item[subKey]?.toString());
                                    }
                                }
                            }
                        } else {
                            for (const subKey in item) {
                                if (Object.hasOwnProperty.call(item, subKey)) {
                                    formData.append(`${key}[${index}][${subKey}]`, item[subKey]?.toString());
                                }
                            }
                        }
                    });
                } else if (value instanceof File) {
                    formData.append(key, value);
                } else if (value !== null) {
                    formData.append(key, value.toString());
                }
            }
        }

        try {
            const response = await axios.post(
                isEditing ? route('partnerships.update', partnership.id) : route('partnerships.store'),
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            successToast(response.data.message);
            router.visit(route('partnerships.index'));

        } catch (error) {
            console.error(error);
            if (error instanceof AxiosError) {
                if (error.response?.status === 422) {
                    console.error(error.response?.data.errors);
                    setErrors(error.response?.data.errors);
                    errorToast("Data not valid!");
                } else {
                    errorToast(error.response?.data.error ?? "Something went wrong!");
                }
            } else {
                errorToast("Something went wrong!");
            }
        }
    };

    useEffect(() => {
        if (!isEditing) return

        setData({
            type: partnership.type,
            document_number: partnership.document_number,
            title: partnership.title,
            description: partnership.description,
            status: partnership.status,
            start_date: partnership.start_date,
            end_date: partnership.end_date,
            executor: partnership.executor,
            institute_id: partnership.institute_id,
            partners: partnership.partners,
            activities: partnership.activities,
            document_fundamental: partnership.document_fundamental,
            document_path: partnership.document_path
        })


    }, [partnership])

    return (
        <AuthenticatedLayout title={`${partnership ? 'Edit' : 'Tambah'} Kerjasama`}>
            <h4 className="mb-1">{partnership ? 'Edit' : 'Add'} Kerjasama</h4>
            <p className="mb-6">A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what user needs.</p>

            <form className="row" method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="col-12 ">
                    <div className="card">
                        <div className="card-header header-elements">
                            <h5 className="mb-0 me-2"></h5>

                            <div className="card-header-elements ms-auto">
                                <Button value="Simpan" icon="bx-save" isSubmit />
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <div className="card mb-4">
                                        <div className="card-header" style={{ borderBottom: "1px solid #e5e5e5", background: "#e5e5e5" }}>
                                            <strong>Data Perguruan Tinggi</strong>
                                        </div>
                                        <div className="card-body">
                                            <InstituteSelector
                                                className="mb-3 mt-3"
                                                value={data?.institute_id ?? undefined}
                                                onChange={(value) => setData({ ...data, institute_id: value })}
                                                error={errors.faculty_id}
                                                description="* Biarkan kosong jika pelaksana bukan dari Institusi "
                                            />
                                            <Input
                                                label="Lainnya"
                                                placeholder=' Masukkan "," jika pelaksana lebih dari satu'
                                                value={data.executor ?? undefined}
                                                onChange={(e) => setData({ ...data, executor: e.target.value })}
                                                description="* Inputan ini juga berfungsi apabila jika pelaksana bukan Fakultas / Prodi, Misal : Rektorat, UPT, dll"
                                            />
                                        </div>
                                    </div>

                                    <div className="card mb-4">
                                        <div className="card-header" style={{ borderBottom: "1px solid #e5e5e5", background: "#e5e5e5" }}>
                                            <strong>Masa Berlaku</strong>
                                        </div>
                                        <div className="card-body">
                                            <PartnershipStatusSelector
                                                className="mb-3 mt-3"
                                                value={data?.status.toString() ?? undefined}
                                                onChange={(value) => setData({ ...data, status: value })}
                                                error={errors.status}
                                            />
                                            <DatePicker
                                                label="Tanggal Awal"
                                                value={new Date(data.start_date)}
                                                onChange={(date) => setData({ ...data, start_date: date.toISOString() })}
                                                errorMessage={errors.start_date}
                                                className="mb-3"
                                                inline={false}
                                                maxDate={new Date(data.end_date)}
                                            />

                                            <DatePicker
                                                label="Tanggal Akhir"
                                                value={new Date(data.end_date)}
                                                onChange={(date) => setData({ ...data, end_date: date.toISOString() })}
                                                errorMessage={errors.end_date}
                                                className="mb-3"
                                                inline={false}
                                                minDate={new Date(data.start_date)}
                                            />
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header" style={{ borderBottom: "1px solid #e5e5e5", background: "#e5e5e5" }}>
                                            <strong>Dokumen</strong>
                                        </div>
                                        <div className="card-body">
                                            <Dropzone
                                                className="mt-5"
                                                value={typeof data.document_path === "string" ? data.document_path : null}
                                                onChange={(file) => {
                                                    setData({ ...data, document_path: file });
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-8">
                                    <PartnershipTypeSelector
                                        value={data?.type ?? undefined}
                                        onChange={(value) => setData({ ...data, type: value })}
                                        className="mb-3 "
                                    />
                                    {(data.type === App.Enums.PartnershipTypeEnum.MOA || data.type === App.Enums.PartnershipTypeEnum.IA) && (
                                        <Input
                                            label="Dasar Dokumen Kerjasama"
                                            value={data.document_fundamental ?? undefined}
                                            onChange={(e) => setData({ ...data, document_fundamental: e.target.value })}
                                            errorMessage={errors.document_fundamental}
                                            className="mb-3"
                                        />
                                    )}
                                    <Input
                                        label="Nomor Dokumen"
                                        value={data.document_number ?? undefined}
                                        onChange={(e) => setData({ ...data, document_number: e.target.value })}
                                        errorMessage={errors.document_number}
                                        className="mb-3"
                                    />
                                    <Input
                                        label="Judul"
                                        value={data.title ?? undefined}
                                        onChange={(e) => setData({ ...data, title: e.target.value })}
                                        errorMessage={errors.title}
                                        className="mb-3"
                                    />
                                    <TextArea
                                        label="Deskripsi"
                                        value={data.description ?? undefined}
                                        onChange={(e) => setData({ ...data, description: e })}
                                        height={500}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 row mt-8">
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0 me-2">
                                    <strong>Penggiat Kerjasama</strong>
                                </h5>
                            </div>

                            <div className="card-body">
                                {data.partners.map((partner, index) => (
                                    <PartnerForm
                                        key={index}
                                        index={index}
                                        partner={partner}
                                        selectedPartner={selectedPartner}
                                        errors={errors}
                                        setSelectedPartner={(value) => setSelectedPartner(value)}
                                        onChange={(index, value) => {
                                            const newPartners = [...data.partners];
                                            newPartners[index] = value;
                                            setData({ ...data, partners: newPartners });
                                        }}
                                    />
                                ))}

                                <Button
                                    className="mt-4"
                                    value="Tambah Penggiat"
                                    onClick={() => setData({ ...data, partners: [...data.partners, defaultPartner] })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0 me-2">
                                    <strong>Bentuk Kegiatan</strong>
                                </h5>
                            </div>

                            <div className="card-body">
                                <ActivitySelector
                                    onChange={(value, name) => {
                                        setData({
                                            ...data, activities: [...data.activities, {
                                                field_activity_id: value, partnership_id: name, field_activity: {
                                                    id: 0,
                                                    name: name
                                                }
                                            }]
                                        })
                                    }}
                                />

                                {data.activities.map((activity, index) => (
                                    <div className="card mt-5" key={index}>
                                        <div className="card-header header-elements" style={{ borderBottom: "1px solid #e5e5e5", background: "#e5e5e5" }}>
                                            <small>{kebabToTitle(activity.field_activity?.name ?? "")}</small>

                                            <div className="card-header-elements ms-auto">
                                                <Button
                                                    value="Delete"
                                                    icon="bx-trash"
                                                    isIcon
                                                    size="xs"
                                                    onClick={() => {
                                                        setData({
                                                            ...data,
                                                            activities: data.activities.filter((_, i) => i !== index)
                                                        });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="card-body mt-5">
                                            <Dropzone
                                                value={activity.document_path}
                                                onChange={(file) => {
                                                    const newActivities = [...data.activities];
                                                    newActivities[index] = { ...activity, file: file };
                                                    setData({ ...data, activities: newActivities });
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </form >
        </AuthenticatedLayout >
    )
}
