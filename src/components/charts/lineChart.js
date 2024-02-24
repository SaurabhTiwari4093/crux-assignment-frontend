import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
    return (
        <div className="w-full h-full">
            <h2 className="text-center">Line Chart</h2>
            <div className="w-full h-full flex justify-center items-center">
                <Line data={chartData}
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

export default LineChart;