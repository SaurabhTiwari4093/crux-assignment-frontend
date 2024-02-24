import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../data/data";
import PieChart from "./charts/pieChart";
import BarChart from "./charts/barChart";
import LineChart from "./charts/lineChart";

Chart.register(CategoryScale);

export default function ChartContainer() {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained ",
                data: Data.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    });

    return (
        <div>
            <PieChart chartData={chartData} />
        </div>
    );
}
