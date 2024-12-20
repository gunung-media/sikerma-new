import { PartnershipDto, PartnershipStatusSelector, PartnershipType, PartnershipTypeSelector } from "@/features/Partnership";
import { AuthenticatedLayout } from "@/layouts/Authenticated";
import { PageProps } from "@/types";
import { errorToast, successToast } from "@/utils/Toast";
import { router, usePage } from "@inertiajs/react";
import axios, { AxiosError } from "axios";
import { FormEventHandler, useState } from "react";
import { App } from "@/types/enum"
import { FacultySelector } from "@/features/Faculty";
import { Button } from "@/components/Button";
import { StudyProgramSelector } from "@/features/StudyProgram";
import { Input } from "@/components/Input";
import { DatePicker } from "@/components/DatePicker";
import { TextArea } from "@/components/Textarea";
import { PartnerDto, PartnerForm } from "@/features/Partner";
import { ActivitySelector } from "@/features/PartnershipActivity";
import { Dropzone } from "@/components/Dropzone";

export default function PartnershipForm({ partnership, isReadOnly }: PageProps & { partnership?: PartnershipType, isReadOnly: false }) {
    const { errors } = usePage<PageProps>().props
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
        title: '',
        description: '',
        status: App.Enums.PartnershipStatusEnum.ACTIVE,
        start_date: new Date().toISOString(),
        end_date: new Date(new Date().getTime() + 60000).toISOString(),
        executor: null,
        faculty_id: null,
        study_program_id: null,
        partners: [defaultPartner],
        activities: []
    })
    const [selectedPartner, setSelectedPartner] = useState<number | null>(0)

    const isEditing = !!partnership

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault()

        try {
            const response = await axios[isEditing ? 'put' : 'post'](
                route('partnerships.store'),
                data
            )

            if (response.status === 200) {
                successToast(response.data.message)
                router.visit(route('partnerships.index'))
            }

        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 422) {
                    errorToast("Data not valid!");
                } else {
                    errorToast(error.response?.data.error ?? "Something went wrong!");
                }
            } else {
                errorToast("Something went wrong!");
            }
        }
    }

    return (
        <AuthenticatedLayout title={`${partnership ? 'Edit' : 'Tambah'} Kerjasama`}>
            <h4 className="mb-1">{partnership ? 'Edit' : 'Add'} Kerjasama</h4>
            <p className="mb-6">A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what user needs.</p>

            <form className="row" method="POST" onSubmit={handleSubmit}>
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
                                            <FacultySelector
                                                className="mb-3 mt-3"
                                                value={data?.faculty_id ?? undefined}
                                                onChange={(value) => setData({ ...data, faculty_id: value })}
                                                error={errors.faculty_id}
                                                description="* Biarkan kosong jika pelaksana bukan Fakultas "
                                            />
                                            <StudyProgramSelector
                                                value={data?.study_program_id ?? undefined}
                                                onChange={(value) => setData({ ...data, study_program_id: value })}
                                                error={errors.study_program_id}
                                                description="* Biarkan kosong jika pelaksana bukan Prodi"
                                                className="mb-3"
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

                                    <div className="card">
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
                                </div>

                                <div className="col-12 col-md-8">
                                    <PartnershipTypeSelector
                                        value={data?.type ?? undefined}
                                        onChange={(value) => setData({ ...data, type: value })}
                                        className="mb-3 "
                                    />
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
                                    onChange={(value) => {
                                        setData({ ...data, activities: [...data.activities, { activity_type: value, partnership_id: 0 }] })
                                    }}
                                />

                                {data.activities.map((activity, index) => (
                                    <div className="card mt-5" key={index}>
                                        <div className="card-header" style={{ borderBottom: "1px solid #e5e5e5", background: "#e5e5e5" }}>
                                            <small>{activity.activity_type}</small>
                                        </div>
                                        <div className="card-body mt-5">
                                            <Dropzone
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
