import React from 'react';
import profile from '../assets/profile.png';
import { FaHome, FaBell } from "react-icons/fa";
import { FaInbox, FaGear } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const isDashboardActive = location.pathname === '/' || location.pathname === '/dashboard';

    return (
        <section id='sidebar' className='flex-shrink-0 w-[260px] h-screen pl-[32px] pr-[43px] py-[35px]'>
            <div className="w-full h-full bg-black rounded-[20px] pt-[38px] pb-[48px] flex flex-col justify-between">
                <img src={profile} alt="profile pic" className='w-[100px] h-[100px] rounded-full mx-auto' />
                <ul className='flex flex-col items-center gap-[82px] text-[46px] text-gray-500 mt-[-78px] relative'>
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
                <IoMdLogOut className='text-[46px] text-white mx-auto' />
            </div>
        </section>
    );
}

export default Sidebar;
