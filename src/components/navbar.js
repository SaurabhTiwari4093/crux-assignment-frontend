import React from 'react';
import Setting from '../images/setting.svg';
import Home from "../images/home.svg"

export default function Navbar({setAddWidgets}) {

    const openAddWidgets=()=>{
        document.body.style.overflow="hidden";
        setAddWidgets(true);
    }

    return (
        <div className='bg-white w-screen h-16 border-b pl-16'>
            <div className='w-full h-full flex justify-end md:justify-between items-center p-4'>
                <div className='hidden md:flex gap-2'>
                    <img src={Home} height={30} width={30} alt='Setting' className='rounded p-1.5 hover:bg-gray-100 cursor-pointer' />
                    <button className='px-3 py-0.5 rounded border border-gray-200 text-sm text-gray-500'>Overview</button>
                    <button className='px-3 py-0.5 rounded border border-violet-200 text-sm bg-violet-50 text-violet-500'>Customers<span className='ml-2'>X</span></button>
                    <button className='px-3 py-0.5 rounded border border-gray-200 text-sm text-gray-500'>Products</button>
                    <button className='px-3 py-0.5 rounded border border-gray-200 text-sm text-gray-500'>Settings</button>
                    <button className='px-3 py-0.5 rounded border border-violet-200 text-lg bg-violet-50 text-violet-500'>+</button>
                </div>
                <div className='flex gap-2'>
                    <button className='bg-violet-50 text-violet-500 px-3 py-0.5 rounded border border-violet-200 text-sm' onClick={openAddWidgets}><span className='mr-2 text-lg'>+</span>Add Widget</button>
                    <img src={Setting} height={30} width={30} alt='Setting' className='rounded p-1.5 hover:bg-gray-100 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
