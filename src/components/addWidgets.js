import React from 'react';
import ModelHeader from "../images/model-header.svg";
import Clock from "../images/clock.svg";
import Chart1 from "../images/chart1.svg";
import Chart2 from "../images/chart2.svg";
import Chart3 from "../images/chart3.svg";

export default function AddWidgets({ setAddWidgets }) {

    const closeAddWidgets = () => {
        document.body.style.overflow = "auto";
        setAddWidgets(false);
    }

    return (
        <div className='absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50 p-4 z-10'>
            <div className='bg-white rounded-lg shadow w-full md:w-2/3 z-10'>
                <div className='p-4 pb-0 flex justify-end'>
                    <div className='hover:bg-gray-50 px-2 py-1 rounded text-gray-500 cursor-pointer' onClick={closeAddWidgets}>X</div>
                </div>
                <div className='w-full p-4 pt-0 border-b-2 md:flex justify-between items-end'>
                    <div className='flex gap-2'>
                        <img src={ModelHeader} height={50} width={50} alt={"Model Header"} className='rounded border p-3' />
                        <div>
                            <div className='text-violet-600 font-semibold text-lg'>Create Widget</div>
                            <div className='text-gray-500 text-sm'>Manage the glossary of terms of your Database.</div>
                        </div>
                    </div>
                    <input defaultValue="Reusability scores" type="text" className='w-full mt-4 md:mt-0 md:w-1/3 border py-1 px-2 rounded text-gray-500 outline-none' placeholder='Title of widget' />
                </div>
                <div className='w-full p-4 grid grid-cols-3 gap-4'>
                    <div className='col-span-3 md:col-span-2 h-[400px] rounded-lg bg-violet-50 border border-violet-100 flex justify-center items-center'>
                        <div className='rounded-lg bg-white h-60 w-60 border shadow'>

                        </div>
                    </div>
                    <div className='col-span-3 md:col-span-1 h-full flex flex-col justify-between'>
                        <div className='flex flex-col gap-2'>
                            <div className='text-gray-400'>Components</div>
                            <div className='border rounded-lg w-full p-2 px-3'>
                                <div className='font-medium'>Data</div>
                                <div className='text-gray-500 text-xs'>Random Description</div>
                            </div>
                            <div className='border rounded-lg w-full p-2 px-3'>
                                <div  className='font-medium'>Graph</div>
                                <div className='text-gray-500 text-xs'>Random Description</div>
                                <div className='flex gap-3 bg-gray-100 rounded w-fit p-1 mt-1'>
                                    <img src={Chart1} height={37} width={37} alt="chart1" className='px-3 py-0.5 hover:bg-white rounded'/>
                                    <img src={Chart2} height={37} width={37} alt="chart2" className='px-3 py-0.5 hover:bg-white rounded'/>
                                    <img src={Chart3} height={37} width={37} alt="chart3" className='px-3 py-0.5 hover:bg-white rounded'/>
                                </div>
                            </div>
                            <div className='border rounded-lg w-full p-2 px-3'>
                                <div  className='font-medium'>Summary</div>
                                <div className='text-gray-500 text-xs'>Random Description</div>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-4 md:mt-0'>
                            <button className='bg-violet-100 hover:bg-violet-200 border border-violet-200 px-3 py-2 rounded flex justify-center items-center w-36'>
                                <img src={Clock} height={20} width={20} alt={"Clock"}/>
                            </button>
                            <button className='w-full border hover:bg-gray-100 px-3 py-2 rounded' onClick={closeAddWidgets}>Cancel</button>
                            <button className='w-full bg-violet-600 border border-violet-700 hover:bg-violet-700 text-white px-3 py-2 rounded'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

