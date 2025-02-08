import { PartnershipType } from "@/features/Partnership";
import React from "react";
import Chart from "react-apexcharts";

interface PartnershipStatusChartProps {
    partnerships: PartnershipType[];
}

const PartnershipStatusChart: React.FC<PartnershipStatusChartProps> = ({
    partnerships,
}) => {
    const statusCounts = partnerships.reduce(
        (acc, partnership) => {
            acc[partnership.status] = (acc[partnership.status] || 0) + 1;
            return acc;
        },
        {
            active: 0,
            "dalam-perpanjangan": 0,
            expired: 0,
            "non-aktif": 0,
        } as Record<string, number>
    );

    const labels = ["Aktif", "Dalam Perpanjangan", "Kadaluarsa"];
    const data = [
        statusCounts["active"],
        statusCounts["dalam-perpanjangan"],
        statusCounts["expired"] + statusCounts["non-aktif"],
    ];

    const options: ApexCharts.ApexOptions = {
        chart: {
            type: "donut",
        },
        labels,
        colors: ["#7DA3C8", "#4CAF50", "#E4863A"],
        legend: {
            position: "bottom",
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    return (
        <Chart options={options} series={data} type="donut" height={300} />
    );
};

export default PartnershipStatusChart;
