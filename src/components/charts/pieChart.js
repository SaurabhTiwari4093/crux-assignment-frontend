import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
    return (
        <div className="w-full h-full">
            <h2 className="text-center">Pie Chart</h2>
            <div className="w-full h-full flex justify-center items-center">
                <Pie data={chartData} />
            </div>
        </div>
    );
}

export default PieChart;