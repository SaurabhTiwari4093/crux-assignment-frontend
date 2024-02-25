import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData, colorMode }) {
    return (
        <div className={`rounded-lg w-full h-full p-4 ${colorMode === 'dark' ? "bg-gray-800 text-white" : "bg-white"}`}>
            <h2 className="text-center">Line Chart</h2>
            <div className="w-full h-full flex justify-center items-center">
                <Line data={chartData}
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
                        },
                        borderColor: colorMode === 'dark' ? 'white' : 'rgb(75,85,99)'
                    }} />
            </div>
        </div>
    );
}

export default LineChart;