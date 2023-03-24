import React from "react";
import { Line } from "react-chartjs-2";
// import { useMediaQuery } from 'react-responsive';
import {
    registerables,
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    ...registerables,
);

type Props = {
    data: any;
    options: any;
};

const DustChart = (props: Props) => {
    return (
        <div
            className="chart-container"
            style={{ position: "relative", height: "450px", width: "100%" }}
        >
            <Line
                data={props.data}
                options={props.options}
                style={{ width: "100%" }}
            />
        </div>
    );
};

export default DustChart;
