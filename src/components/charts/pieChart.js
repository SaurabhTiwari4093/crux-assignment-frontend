import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData, colorMode }) {
    return (
        <div className={`rounded-lg w-full h-full p-4 ${colorMode === 'dark' ? "bg-gray-800 text-white" : "bg-white"}`}>
            <h2 className="text-center">Pie Chart</h2>
            <div className="w-full h-full flex justify-center items-center px-6">
                <Pie data={chartData}
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

export default PieChart;