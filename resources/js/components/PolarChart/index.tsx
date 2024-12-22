import { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface PolarChartProps {
    categories: string[];
    series: number[];
}

const PolarChart: React.FC<PolarChartProps> = ({ categories, series }) => {
    const options: ApexOptions = {
        chart: {
            type: 'polarArea',
        },
        labels: categories,
        stroke: {
            width: 2,
        },
        fill: {
            opacity: 0.6,
        },
        plotOptions: {
            radar: {
                size: 150,
                polygons: {
                    strokeColors: '#E0E0E0',
                },
            },
        },
    };

    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="polarArea"
            />
        </div>
    );
};

export default PolarChart;
