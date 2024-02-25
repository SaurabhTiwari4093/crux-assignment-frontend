import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData, colorMode }) {
    return (
        <div className={`rounded-lg w-full h-full p-4 ${colorMode === 'dark' ? "bg-gray-800 text-white" : "bg-white"}`}>
            <h2 className="text-center">Bar Chart</h2>
            <div className="w-full h-full flex justify-center items-center">
                <Bar data={chartData}
                    options={{
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            x: {
                                ticks: {
                                    color: colorMode === 'dark' ? 'white' : 'rgb(75,85,99)',
                                },
                                grid: {
                                    color: 'rgb(156,163,175)',
                                }
                            },
                            y: {
                                ticks: {
                                    color: colorMode === 'dark' ? 'white' : 'rgb(75,85,99)',
                                },
                                grid: {
                                    color: 'rgb(156,163,175)',
                                }
                            }
                        }
                    }} />
            </div>
        </div>
    );
}

export default BarChart;
