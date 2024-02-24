import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
    return (
        <div className="w-full h-full">
            <h2 className="text-center">Bar Chart</h2>
            <div className="w-full h-full flex justify-center items-center">
            <Bar data={chartData}
                options={{
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }} />
            </div>
        </div>
    );
}

export default BarChart;
