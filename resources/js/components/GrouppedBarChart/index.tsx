import { ApexOptions } from 'apexcharts';
import React from 'react';
import Chart from 'react-apexcharts';

interface GroupedBarChartProps {
    data: { label: string; values: number[] }[];
    categories: string[];
}

const GroupedBarChart: React.FC<GroupedBarChartProps> = ({ data, categories }) => {
    const series = data.map(item => ({
        name: item.label,
        data: item.values,
    }));

    const options: ApexOptions = {
        chart: {
            type: 'bar',
            height: 350,
        },
        plotOptions: {
            bar: {
                horizontal: true,
                columnWidth: '55%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: categories,
        },
        yaxis: {
            title: {
                text: 'Count',
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: (value: number) => `${value} items`,
            },
        },
    };

    return (
        <div>
            <Chart
                options={options} series={series} type="bar" />
        </div>
    );
};

export default GroupedBarChart;
