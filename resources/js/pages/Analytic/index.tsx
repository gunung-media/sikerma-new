import GroupedBarChart from "@/components/GrouppedBarChart";
import Heatmap from "@/components/Heatmap"
import PolarChart from "@/components/PolarChart";
import { PartnershipType } from "@/features/Partnership";
import { UserType } from "@/features/User";
import { AuthenticatedLayout } from "@/Layouts/Authenticated"
import { PageProps } from "@/types"
import { App } from "@/types/enum";
import { getSlug, kebabToTitle } from "@/utils/StringRalated";

import DataTable from "datatables.net-react";

export default function Analytic({
    partnershipCalendar,
    dueDateCalendar,
    data,
    roles,
}: PageProps & {
    partnershipCalendar: { date: string, count: number }[],
    dueDateCalendar: { date: string, count: number }[],
    data: PartnershipType[],
    roles: {
        name: string,
        users: UserType[]
    }[]
}) {

    const dataStudyProgram = data.filter((item) => item.type !== App.Enums.PartnershipTypeEnum.MOU && item.study_program_id)

    const categories = Object.values(App.Enums.PartnershipTypeEnum).map((item) => getSlug(item))

    const seriesGenerator = (status?: App.Enums.PartnershipStatusEnum, secondStatus?: App.Enums.PartnershipStatusEnum) =>
        data.reduce((acc, item) => {
            if ((status && item.status !== status && !!!secondStatus)) {
                return acc;
            }

            if (status && secondStatus && (item.status !== secondStatus)) {
                return acc;
            }

            switch (item.type) {
                case App.Enums.PartnershipTypeEnum.MOA:
                    acc[0] += 1;
                    break;
                case App.Enums.PartnershipTypeEnum.MOU:
                    acc[1] += 1;
                    break;
                case App.Enums.PartnershipTypeEnum.IA:
                    acc[2] += 1;
                    break;
                default:
                    break;
            }

            return acc;
        }, [0, 0, 0]);

    return (
        <AuthenticatedLayout title="Dashboard">
            <div className="row g-6 mb-10">
                {roles.map((role, index) => (
                    <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h6 className="fw-normal mb-0 text-body">Total {role.users?.length} users</h6>
                                    <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                                        {role.users?.slice(0, 3).map((user, index) => (
                                            <li
                                                key={index}
                                                data-bs-toggle="tooltip"
                                                data-popup="tooltip-custom"
                                                data-bs-placement="top"
                                                title={user.name}
                                                className="avatar pull-up">
                                                <img className="rounded-circle"
                                                    src={`https://ui-avatars.com/api/?rounded=true&name=${user.name}`}
                                                    alt="Avatar"
                                                />
                                            </li>
                                        ))}
                                        {(role.users?.length ?? 0) > 3 && (
                                            <li className="avatar">
                                                <span
                                                    className="avatar-initial rounded-circle pull-up"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="bottom"
                                                    title={`+${(role.users?.length ?? 0) - 3} more`}>
                                                    +{(role.users?.length ?? 0) - 3}</span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <div className="role-heading">
                                        <h5 className="mb-1">{kebabToTitle(role.name)}</h5>
                                    </div>
                                    <a href="#"><i className="bx bx-copy bx-md text-muted"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row mb-10">
                <div className="col-12" >
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h5 className="fw-bold mb-0 text-body">NILAI PERHITUNGAN IKU 6</h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-end">
                                <div className="role-heading">
                                    <table className="table">
                                        <tr>
                                            <th>Jumlah Kerja Sama</th>
                                            <th><strong>{data.length}</strong></th>
                                        </tr>
                                        <tr>
                                            <th>Jumlah Kerjasama Program Studi</th>
                                            <th><strong>{dataStudyProgram.length}</strong></th>
                                        </tr>
                                        <tr>
                                            <th>Jumlah Nilai Bobot Mitra</th>
                                            <th><strong>{dataStudyProgram.reduce((total, item) => total + item.partner_criteria?.weight, 0)}</strong></th>
                                        </tr>
                                        <tr>
                                            <th>Nilai IKU Kerjasama Program Studi</th>
                                            <th><strong>{(dataStudyProgram.reduce((total, item) => total + item.partner_criteria?.weight, 0) ?? 1 / dataStudyProgram.length) * 100}%</strong></th>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-lg-8 mb-6">
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <h5 className="card-title m-0 me-2">Kalendar Kerjasama</h5>
                        </div>
                        <div className="card-body">
                            <Heatmap
                                data={partnershipCalendar}
                            />
                        </div>
                    </div>

                    <div className="card mt-5">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <h5 className="card-title m-0 me-2">Due Date Kerjasama</h5>
                        </div>
                        <div className="card-body">
                            <Heatmap
                                data={dueDateCalendar}
                                isDanger
                            />

                            <DataTable
                                className="datatables-basic table border-top"
                                data={data.map((item, index) => [
                                    index + 1, item.title, item.end_date
                                ])}
                                options={{
                                    responsive: true,
                                    paging: false,
                                    searching: false
                                }}
                                slots={{
                                    2: (data: string) => <span className="text-danger">{new Date(data).toLocaleDateString()}</span>
                                }}
                            >
                                <thead>
                                    <tr>{['#', 'Judul', 'Deadline'].map((col, index) => <th key={index}>{col}</th>)}</tr>
                                </thead>
                            </DataTable>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4 mb-6">
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <h5 className="card-title m-0 me-2">MoU vs MoA vs IA</h5>
                        </div>
                        <div className="card-body">
                            <PolarChart
                                categories={categories}
                                series={seriesGenerator()}
                            />
                        </div>
                    </div>

                    <div className="card mt-5">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <h5 className="card-title m-0 me-2">Sebaran Dokumen</h5>
                        </div>
                        <div className="card-body">
                            <GroupedBarChart
                                categories={categories}
                                data={[
                                    { label: 'Aktif', values: seriesGenerator(App.Enums.PartnershipStatusEnum.ACTIVE) },
                                    { label: 'Tidak Aktif', values: seriesGenerator(App.Enums.PartnershipStatusEnum.INACTIVE, App.Enums.PartnershipStatusEnum.EXPIRED) },
                                    { label: 'Dalam Perpanjangan', values: seriesGenerator(App.Enums.PartnershipStatusEnum.IN_RENEWAL) },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
