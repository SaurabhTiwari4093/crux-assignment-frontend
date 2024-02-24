import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../data/data";
import PieChart from "./charts/pieChart";
import BarChart from "./charts/barChart";
import LineChart from "./charts/lineChart";
import SummaryChart from "./charts/summaryChart";
import TableChart from "./charts/tableChart";

Chart.register(CategoryScale);

export default function ChartContainer({ chartType }) {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.platform),
        datasets: [
            {
                label: "Orders",
                data: Data.map((data) => data.noOfOrder),
                backgroundColor: [
                    "#FB8282",
                    "#5E5ADB",
                    "#F2E144",
                    "#54D787",
                ]
            }
        ]
    });

    return (
        <div className="rounded-lg bg-white h-80 w-80 border shadow p-4">
            {chartType === 'pie' && <PieChart chartData={chartData} />}
            {chartType === 'bar' && <BarChart chartData={chartData} />}
            {chartType === 'line' && <LineChart chartData={chartData} />}
            {chartType === 'summary' && <SummaryChart data={Data} />}
            {chartType === 'table' && <TableChart data={Data} />}
        </div>
    );
}
