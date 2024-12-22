import React from "react";
import CalendarHeatmap, { ReactCalendarHeatmapValue } from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

interface HeatmapProps {
    data: { date: string; count: number }[];
    startDate?: string;
    endDate?: string;
    isDanger?: boolean;  // Added prop to indicate whether to use danger color
}

const Heatmap: React.FC<HeatmapProps> = ({ data, startDate, endDate, isDanger }) => {
    const classForValue = (value: ReactCalendarHeatmapValue<string> | undefined): string => {
        if (!value || !value.count) return "color-empty";

        // Apply red scale if isDanger is true, else apply normal scale
        if (isDanger) {
            if (value.count <= 2) return "color-danger-1";
            if (value.count <= 4) return "color-danger-2";
            if (value.count <= 6) return "color-danger-3";
            return "color-danger-4";
        }

        // Default color scale
        if (value.count <= 2) return "color-scale-1";
        if (value.count <= 4) return "color-scale-2";
        if (value.count <= 6) return "color-scale-3";
        return "color-scale-4";
    };

    const tooltipDataAttrs = (value: ReactCalendarHeatmapValue<string> | undefined): { [key: string]: string } => {
        if (!value || !value.date) {
            return {
                'data-bs-toggle': 'tooltip',
                'data-bs-placement': 'top',
                'data-bs-html': 'true',
                'data-bs-original-title': `<i class='bx bx-trending-up bx-xs'></i> Tidak ada Kerjasama</span>`,
            };
        }
        return {
            'data-bs-toggle': 'tooltip',
            'data-bs-placement': 'top',
            'data-bs-html': 'true',
            'data-bs-original-title': `<span>${value.count} Kerjasama di ${value.date}</span>`,
        };
    };

    const now = new Date();

    return (
        <div>
            <CalendarHeatmap
                startDate={startDate ?? new Date(now.getFullYear(), 0, 1)}
                endDate={endDate ?? new Date(now.getFullYear(), 11, 31)}
                values={data}
                classForValue={classForValue}
                tooltipDataAttrs={tooltipDataAttrs}
                gutterSize={3}
            />
            <style>
                {`
                .color-empty {
                    fill: #eee;
                }
                .color-scale-1 {
                    fill: #d6e685;
                }
                .color-scale-2 {
                    fill: #8cc665;
                }
                .color-scale-3 {
                    fill: #44a340;
                }
                .color-scale-4 {
                    fill: #1e6823;
                }
                .color-danger-1 {
                    fill: #ffcccc;
                }
                .color-danger-2 {
                    fill: #ff6666;
                }
                .color-danger-3 {
                    fill: #ff3333;
                }
                .color-danger-4 {
                    fill: #cc0000;
                }
                .react-calendar-heatmap .react-calendar-heatmap-week > rect:hover {
                    stroke: #555;
                    stroke-width: 1px;
                }
                `}
            </style>
        </div>
    );
};

export default Heatmap;
