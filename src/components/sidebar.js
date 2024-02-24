import React from 'react';
import Avatar from "../images/avatar.svg";
import Crux from "../images/crux.svg";
import Nav1 from "../images/nav1.svg";
import Nav2 from "../images/nav2.svg";
import Nav3 from "../images/nav3.svg";
import Nav4 from "../images/nav4.svg";

export default function Sidebar() {
  return (
    <div className='h-screen bg-white absolute left-0 top-0 w-16 border-r flex flex-col justify-between p-4'>
        <div className='flex flex-col gap-4'>
            <img src={Crux} height={30} width={30} alt='Header' className='cursor-pointer'/>
            <img src={Nav1} height={30} width={30} alt='Nav1' className='rounded p-1.5 hover:bg-gray-100 cursor-pointer'/>
            <img src={Nav2} height={30} width={30} alt='Nav2' className='rounded p-1.5 hover:bg-gray-100 cursor-pointer'/>
            <img src={Nav3} height={30} width={30} alt='Nav3' className='rounded p-1.5 hover:bg-gray-100 cursor-pointer'/>
            <img src={Nav4} height={30} width={30} alt='Nav4' className='rounded p-1.5 bg-gray-100 cursor-pointer'/>
        </div>
        <img src={Avatar} height={30} width={30} alt='Avatar' className='border rounded-full cursor-pointer'/>
    </div>
  )
}
