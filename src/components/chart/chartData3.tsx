import React from "react";
import DustChart from "./Chart";

const chartData = {
    labels: ["2017", "2018", "2019", "2020", "2021"],

    datasets: [
        {
            label: "경제환경",
            // display: true,
            // type: "bar",
            data: [5.35, 5.43, 5.5, 5.34, 5.5],
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
            label: "교육환경",
            // display: true,
            // type: "bar",
            data: [5.45, 5.57, 5.71, 5.69, 5.74],
            borderColor: "red",
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
            backgroundColor: "red",
        },
        {
            label: "사회환경",
            // display: true,
            // type: "bar",
            data: [5.75, 5.81, 6.0, 5.99, 6.07],
            borderColor: "green",
            borderDash: [],
            borderCapStyle: "butt",
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "green",
            borderWidth: 3,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "green",
            pointHoverBorderColor: "green",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            tension: 0.1,
            backgroundColor: "green",
        },
        {
            label: "주거환경",
            // display: true,
            // type: "bar",
            data: [6.19, 6.24, 6.39, 6.36, 6.41],
            borderColor: "puple",
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
            backgroundColor: "puple",
        },
    ],
};

const options = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
        },
        title: {
            display: true,
            text: "서울시 생활환경 만족도",
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
                display: false,
            },
            ticks: {
                color: "#C4C4C4",
            },
        },

        y: {
            grid: {
                display: false,
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
