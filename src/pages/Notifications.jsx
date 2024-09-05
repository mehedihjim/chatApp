import { CiMenuKebab } from 'react-icons/ci'
import { RiSearch2Line } from 'react-icons/ri'
import { IoMdNotifications } from "react-icons/io";
import { GoKebabHorizontal } from "react-icons/go";
import { notifications } from '../constant';
import { useState } from 'react';

const Notifications = () => {

    return (
        <div className='w-full py-9 pr-[46px]'>
            <div className="">
                <div className="relative w-full mb-[25px] h-[59px]">
                    <input type="text" placeholder="Search" className="w-full h-[59px] pl-[78px] pr-[24px] border border-textColor/20 shadow-lg outline-none rounded-[20px] placeholder:text-[#3D3D3D]/35 placeholder:text-[16px] placeholder:font-medium" />
                    <RiSearch2Line className="text-xl absolute left-6 top-[50%] translate-y-[-50%]" />
                    <CiMenuKebab className="absolute right-[22px] top-[50%] translate-y-[-50%] text-2xl" />
                </div>
            </div>
            <div className="w-full h-[800px] border border-textColor/20 shadow-lg rounded-[18px] pl-[41px] pr-10 overflow-y-auto scrollbar-thin scrollbar-thumb-textColor/70 scrollbar-thumb-rounded scrollbar-track-transparent">
                {notifications.map((notifications, index) => (

                    <ul key={index} className='text-base font-medium'>
                        <li className='w-full flex gap-1 items-center py-9 pr-9 border-b border-slate-300'>
                            <div className="w-[42px] text-3xl"><IoMdNotifications /></div>
                            <div className="w-full pr-10">
                                {notifications.text}
                            </div>
                            <button><GoKebabHorizontal className='text-xl' /></button>
                        </li>
                    </ul>

                ))}
            </div>
        </div>
    )
}

export default Notifications
