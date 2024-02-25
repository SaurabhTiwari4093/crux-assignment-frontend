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

export default function ChartContainer({ chartType, colorMode }) {
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
        <div className="rounded-lg h-72 w-72 md:h-64 md:w-64 border shadow">
            {chartType === 'pie' && <PieChart chartData={chartData} colorMode={colorMode}/>}
            {chartType === 'bar' && <BarChart chartData={chartData} colorMode={colorMode}/>}
            {chartType === 'line' && <LineChart chartData={chartData} colorMode={colorMode}/>}
            {chartType === 'summary' && <SummaryChart data={Data} colorMode={colorMode}/>}
            {chartType === 'table' && <TableChart data={Data} colorMode={colorMode}/>}
        </div>
    );
}
