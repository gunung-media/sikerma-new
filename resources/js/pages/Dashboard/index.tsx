import PartnershipGrowthChart from "@/components/PartnershipGrowthChart";
import PartnershipStatusChart from "@/components/PartnershipStatusChart";
import { PartnershipType } from "@/features/Partnership";
import { AuthenticatedLayout } from "@/Layouts/Authenticated"
import { PageProps } from "@/types"
import { App } from "@/types/enum";
import { getSlug } from "@/utils/StringRalated";

export default function Dashboard({
    count,
    data
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

    return (
        <AuthenticatedLayout title="Dashboard">
            <div className="row">
                <div className="col-12 mb-6">
                    <div className="card">
                        <div className="card-widget-separator-wrapper">
                            <div className="card-body card-widget-separator">
                                <div className="row gy-4 gy-sm-1">
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="d-flex justify-content-between align-items-center card-widget-1 border-end pb-4 pb-sm-0">
                                            <div>
                                                <h4 className="mb-0">{count.user}</h4>
                                                <p className="mb-0">Users</p>
                                            </div>
                                            <div className="avatar me-sm-6">
                                                <span className="avatar-initial rounded bg-label-secondary text-heading">
                                                    <i className="bx bx-user bx-26px"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <hr className="d-none d-sm-block d-lg-none me-6" />
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="d-flex justify-content-between align-items-center card-widget-2 border-end pb-4 pb-sm-0">
                                            <div>
                                                <h4 className="mb-0">{count.faculty}</h4>
                                                <p className="mb-0">Fakultas</p>
                                            </div>
                                            <div className="avatar me-lg-6">
                                                <span className="avatar-initial rounded bg-label-secondary text-heading">
                                                    <i className="bx bx-file bx-26px"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <hr className="d-none d-sm-block d-lg-none" />
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="d-flex justify-content-between align-items-center border-end pb-4 pb-sm-0 card-widget-3">
                                            <div>
                                                <h4 className="mb-0">{count.studyProgram}</h4>
                                                <p className="mb-0">Prodi</p>
                                            </div>
                                            <div className="avatar me-sm-6">
                                                <span className="avatar-initial rounded bg-label-secondary text-heading">
                                                    <i className="bx bx-check-double bx-26px"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h4 className="mb-0">{count.partnership}</h4>
                                                <p className="mb-0">Kerjasama</p>
                                            </div>
                                            <div className="avatar">
                                                <span className="avatar-initial rounded bg-label-secondary text-heading">
                                                    <i className="bx bx-error-circle bx-26px"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4 mb-6">
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <h5 className="card-title m-0 me-2">
                                Status Kerjasama
                            </h5>
                        </div>
                        <div className="card-body">
                            <PartnershipStatusChart partnerships={data} />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-8 mb-6">
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <h5 className="card-title m-0 me-2">
                                Status Kerjasama
                            </h5>
                        </div>
                        <div className="card-body">
                            <PartnershipGrowthChart partnerships={data} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
