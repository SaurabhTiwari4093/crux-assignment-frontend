import React from 'react'

export default function Home({widgetList}) {
    return (
        <div className="pl-16 pt-16 h-full overflow-auto">
            <div className="p-4 flex gap-4 flex-wrap">
                {widgetList.map((value,key)=>(
                    <div className='rounded-lg bg-white h-60 w-60 border shadow p-4' key={key}>
                        {value}
                    </div>
                ))}
            </div>
        </div>
    )
}
