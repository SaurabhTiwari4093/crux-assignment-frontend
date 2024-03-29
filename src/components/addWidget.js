import { useState } from 'react';
import ModelHeader from "../images/model-header.svg";
import Clock from "../images/clock.svg";
import Chart1 from "../images/chart1.svg";
import Chart2 from "../images/chart2.svg";
import Chart3 from "../images/chart3.svg";
import ChartContainer from './chartContainer';

export default function AddWidget({ setAddWidget, widgetList, setWidgetList }) {
    const [chartType, setChartType] = useState("pie");
    const [colorMode, setColorMode] = useState("light");

    const closeAddWidget = () => {
        setAddWidget(false);
    }

    const addWidgetToList = () => {
        const newWidget = {
            "chartType": chartType,
            "colorMode": colorMode,
        }
        setWidgetList([...widgetList, newWidget]);
        setAddWidget(false);
    }

    return (
        <div className='absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50 p-4 z-20'>
            <div className='bg-white rounded-lg shadow w-full md:w-2/3 z-10'>
                <div className='p-4 pb-0 flex justify-end'>
                    <div className='hover:bg-gray-50 px-2 py-1 rounded text-gray-500 cursor-pointer' onClick={closeAddWidget}>X</div>
                </div>
                <div className='w-full p-4 pt-0 border-b-2 md:flex justify-between items-end'>
                    <div className='flex gap-2'>
                        <img src={ModelHeader} height={50} width={50} alt={"Model Header"} className='rounded border p-3' />
                        <div>
                            <div className='text-violet-600 font-semibold text-lg'>Create Widget</div>
                            <div className='text-gray-500 text-sm'>Manage the glossary of terms of your Database.</div>
                        </div>
                    </div>
                    <input defaultValue="Platform Orders" type="text" className='w-full mt-4 md:mt-0 md:w-1/3 border py-1 px-2 rounded text-gray-500 outline-none' placeholder='Title of widget' />
                </div>
                <div className='w-full p-4 grid grid-cols-3 gap-4'>
                    <div className='col-span-3 md:col-span-2 p-4 md:h-[400px] rounded-lg bg-violet-50 border border-violet-100 flex justify-center items-center relative'>
                        <ChartContainer chartType={chartType} colorMode={colorMode} />
                        <div className='absolute bottom-2 left-0 w-full flex justify-center items-center gap-2'>
                            <button className='h-5 w-5 bg-white border-2 border-gray-300 rounded-full' onClick={() => setColorMode('light')} />
                            <button className='h-5 w-5 bg-gray-800 border-2 border-gray-500 rounded-full' onClick={() => setColorMode('dark')} />
                        </div>
                    </div>
                    <div className='col-span-3 md:col-span-1 h-full flex flex-col justify-between'>
                        <div className='flex flex-col gap-2'>
                            <div className='text-gray-400'>Components</div>
                            <div className={`${chartType === 'table' ? 'border border-violet-500' : 'border'} hover:border-violet-500 rounded-lg w-full p-2 px-3 cursor-pointer`} onClick={() => setChartType('table')}>
                                <div className='font-medium'>Data</div>
                                <div className='text-gray-500 text-xs'>Random Description</div>
                            </div>
                            <div className='border rounded-lg w-full p-2 px-3'>
                                <div className='font-medium'>Graph</div>
                                <div className='text-gray-500 text-xs'>Random Description</div>
                                <div className='flex gap-3 bg-gray-100 rounded w-fit p-1 mt-1'>
                                    <img src={Chart1} height={45} width={45} alt="chart1" className={`${chartType === 'bar' ? 'bg-white' : ''} px-3 py-0.5 hover:bg-white rounded cursor-pointer`} onClick={() => setChartType('bar')} />
                                    <img src={Chart2} height={45} width={45} alt="chart2" className={`${chartType === 'line' ? 'bg-white' : ''} px-3 py-0.5 hover:bg-white rounded cursor-pointer`} onClick={() => setChartType('line')} />
                                    <img src={Chart3} height={45} width={45} alt="chart3" className={`${chartType === 'pie' ? 'bg-white' : ''} px-3 py-0.5 hover:bg-white rounded cursor-pointer`} onClick={() => setChartType('pie')} />
                                </div>
                            </div>
                            <div className={`${chartType === 'summary' ? 'border border-violet-500' : 'border'} hover:border-violet-500 rounded-lg w-full p-2 px-3 cursor-pointer`} onClick={() => setChartType('summary')}>
                                <div className='font-medium'>Summary</div>
                                <div className='text-gray-500 text-xs'>Random Description</div>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-4 md:mt-0'>
                            <button className='bg-violet-100 hover:bg-violet-200 border border-violet-200 px-3 py-2 rounded flex justify-center items-center w-36'>
                                <img src={Clock} height={20} width={20} alt={"Clock"} />
                            </button>
                            <button className='w-full border hover:bg-gray-100 px-3 py-2 rounded' onClick={closeAddWidget}>Cancel</button>
                            <button className='w-full bg-violet-600 border border-violet-700 hover:bg-violet-700 text-white px-3 py-2 rounded' onClick={addWidgetToList}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

