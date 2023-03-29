import React from "react";
import DustChart from "./Chart";

const chartData = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022"],

    datasets: [
        {
            label: "미세먼지",
            display: true,
            data: [44, 40, 42, 36, 38, 34],
            borderColor: "#36A2EB",
            borderDash: [],
            borderCapStyle: "butt",
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,12)",
            borderWidth: 3,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            tension: 0.1,
            backgroundColor: "#36A2EB",
        },
        {
            label: "초미세먼지",
            data: [25, 23, 25, 21, 20, 18],
            borderColor: "#FF6384",
            borderDash: [],
            borderCapStyle: "butt",
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,12)",
            borderWidth: 3,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            tension: 0.1,
            backgroundColor: "#FF6384",
        },
    ],
};

const options = {
    // responsive: false,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
        },
        title: {
            display: true,
            text: "서울시 미세먼지",
            font: {
                size: 18,
            },
            color: "black",
            padding: 30,
        },
        tooltip: {
            // 툴팁 스타일
            // enabled: true,
            padding: 8,
            backgroundColor: "#F5F5F5", // 툴팁배경
            titleColor: "#333",
            bodyColor: "#333",
            bodyFont: {
                font: {
                    family: "'Noto Sans KR', sans-serif",
                },
            },
        },
    },

    scales: {
        // x축과 y축 설정
        x: {
            grid: {
                // display: false,
            },
            ticks: {
                color: "#C4C4C4",
            },
        },

        y: {
            grid: {
                // display: false,
                color: "#E4E5E9",
            },
            ticks: {
                color: "#C4C4C4",
            },
        },
    },
};

const ChartCotainer = () => {
    return (
        <div>
            <DustChart data={chartData} options={options} />
        </div>
    );
};

export default ChartCotainer;
