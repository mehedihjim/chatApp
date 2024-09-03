import React, { useEffect } from 'react';
import { FaHome, FaBell } from "react-icons/fa";
import { FaInbox, FaGear } from "react-icons/fa6";
import { IoCameraReverseOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Sidebar = () => {
    const location = useLocation();
    const isDashboardActive = location.pathname === '/' || location.pathname === '/dashboard';

    let data = useSelector((state) => state.userInfo.value)


    return (
        <section id='sidebar' className='flex-shrink-0 w-[260px] h-screen pl-[32px] pr-[43px] py-[35px]'>
            <div className="w-full h-full bg-black rounded-[20px] pt-[38px] pb-[48px] flex flex-col justify-between">
                <div className="flex flex-col gap-4 mx-auto text-white items-center group cursor-pointer">
                    <div className="w-[100px] h-[100px] rounded-full bg-red-100 relative overflow-hidden">
                        <img src={data.photoURL} alt="profile pic" className='w-full h-full' />
                        <div className="w-full h-full bg-black/40 absolute top-0 left-0 flex justify-center items-center text-2xl opacity-0 group-hover:opacity-100 duration-300">
                            <IoCameraReverseOutline />
                        </div>
                    </div>
                    <h4 className='w-[80%] text-center text-lg'>{data.displayName}</h4>
                </div>
                <ul className='flex flex-col items-center gap-[70px] text-[42px] text-gray-500 mt-[-65px] relative'>
                    <li className="relative group">
                        <Link to='/' className={`${isDashboardActive ? 'text-white' : ''}`}>
                            <FaHome />
                        </Link>
                        <span className="absolute left-1/2 translate-x-[-50%] top-[-36px] bg-gray-700 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Dashboard
                        </span>
                    </li>
                    <li className="relative group">
                        <Link to='/messages' className={`${location.pathname === '/messages' ? 'text-white' : ''}`}>
                            <FaInbox />
                        </Link>
                        <span className="absolute left-1/2 translate-x-[-50%] top-[-36px] bg-gray-700 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Inbox
                        </span>
                    </li>
                    <li className="relative group">
                        <Link to='/notifications' className={`${location.pathname === '/notifications' ? 'text-white' : ''}`}>
                            <FaBell />
                        </Link>
                        <span className="absolute left-1/2 translate-x-[-50%] top-[-36px] bg-gray-700 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Notifications
                        </span>
                    </li>
                    <li className="relative group">
                        <Link to='/settings' className={`${location.pathname === '/settings' ? 'text-white' : ''}`}>
                            <FaGear />
                        </Link>
                        <span className="absolute left-1/2 translate-x-[-50%] top-[-36px] bg-gray-700 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Settings
                        </span>
                    </li>
                </ul>
                <div className="relative group text-[46px] text-white mx-auto">
                    <button>
                        <IoMdLogOut />
                    </button>
                    <span className="absolute left-1/2 translate-x-[-50%] top-[-36px] bg-gray-700 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Logout
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Sidebar;
