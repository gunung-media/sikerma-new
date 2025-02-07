import GroupedBarChart from "@/components/GrouppedBarChart";
import Heatmap from "@/components/Heatmap"
import PolarChart from "@/components/PolarChart";
import { PartnershipType } from "@/features/Partnership";
import { AuthenticatedLayout } from "@/Layouts/Authenticated"
import { PageProps } from "@/types"
import { App } from "@/types/enum";
import { getSlug } from "@/utils/StringRalated";

import DataTable from "datatables.net-react";
import { useEffect } from "react";

export default function Analytic({
    partnershipCalendar,
    dueDateCalendar,
    data,
    count
}: PageProps & {
    partnershipCalendar: { date: string, count: number }[],
    dueDateCalendar: { date: string, count: number }[],
    data: PartnershipType[],
    count: {
        user: number,
        faculty: number,
        studyProgram: number,
        partnership: number
    }
}) {

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

    useEffect(() => {
        const a = [
            { label: 'Aktif', values: seriesGenerator(App.Enums.PartnershipStatusEnum.ACTIVE) },
            { label: 'Tidak Aktif', values: seriesGenerator(App.Enums.PartnershipStatusEnum.INACTIVE, App.Enums.PartnershipStatusEnum.EXPIRED) },
            { label: 'Dalam Perpanjangan', values: seriesGenerator(App.Enums.PartnershipStatusEnum.IN_RENEWAL) },
        ]
        console.log(a)
    }, [])

    return (
        <AuthenticatedLayout title="Dashboard">
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
