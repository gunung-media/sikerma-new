import { PartnershipType } from "@/features/Partnership";
import React from "react";
import Chart from "react-apexcharts";

interface PartnershipChartProps {
    partnerships: PartnershipType[];
}

const PartnershipGrowthChart: React.FC<PartnershipChartProps> = ({ partnerships }) => {
    const years = Array.from(new Set(partnerships.map((p) => p.year))).sort();
    const types = ["Memorandum of Understanding", "Memorandum of Agreement", "Implementation Agreement"];

    const series = types.map((type) => ({
        name: type === "Memorandum of Understanding" ? "MoU" : type === "Memorandum of Agreement" ? "MoA" : "IA",
        data: years.map((year) => partnerships.filter((p) => p.year === year && p.type === type).length),
    }));

    const options: ApexCharts.ApexOptions = {
        chart: {
            type: "line",
            height: 350,
            toolbar: { show: false },
        },
        xaxis: {
            categories: years,
            title: { text: "Year" },
        },
        yaxis: {
            title: { text: "Number of Partnerships" },
        },
        stroke: {
            width: 2,
            curve: "smooth",
        },
        markers: {
            size: 4,
        },
        colors: ["#206bc4", "#f08c00", "#2fb344"],
        legend: {
            position: "top",
            horizontalAlign: "left",
        },
    };

    return (
        <Chart options={options} series={series} type="line" height={350} />
    );
};

export default PartnershipGrowthChart;
