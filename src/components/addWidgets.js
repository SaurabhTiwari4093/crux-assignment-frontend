import React from 'react'

export default function AddWidgets({setAddWidgets}) {

    const closeAddWidgets=()=>{
        document.body.style.overflow="auto";
        setAddWidgets(false);
    }

    return (
        <div className='absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50 p-4 z-10'>
            <div className='bg-white rounded-lg shadow relative p-4 md:p-6 w-full md:w-2/3 z-10'>
                <div className='absolute right-4 top-4 hover:bg-gray-50 px-2 py-1 rounded text-gray-500 cursor-pointer' onClick={closeAddWidgets}>X</div>
                <div>

                </div>
            </div>
        </div>
    )
}

