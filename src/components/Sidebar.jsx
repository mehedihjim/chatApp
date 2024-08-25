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
        <section id='sidebar' className='w-[260px] h-screen pl-[32px] pr-[43px] py-[35px]'>
            <div className="w-full h-full bg-black rounded-[20px] pt-[38px] pb-[48px] flex flex-col justify-between">
                <img src={profile} alt="profile pic" className='w-[100px] h-[100px] rounded-full mx-auto' />
                <ul className=' flex flex-col items-center gap-[82px] text-[46px] text-gray-500 mt-[-78px]'>
                    <li className={`${isDashboardActive ? 'text-white' : ''}`}>
                        <Link to='/'><FaHome /></Link>
                    </li>
                    <li className={`${location.pathname === '/messages' ? 'text-white' : ''}`}>
                        <Link to='/messages'><FaInbox /></Link>
                    </li>
                    <li className={`${location.pathname === '/notifications' ? 'text-white' : ''}`}>
                        <Link to='/notifications'><FaBell /></Link>
                    </li>
                    <li className={`${location.pathname === '/settings' ? 'text-white' : ''}`}>
                        <Link to='/settings'><FaGear /></Link>
                    </li>
                </ul>
                <IoMdLogOut className='text-[46px] text-white mx-auto' />
            </div>
        </section>
    );
}

export default Sidebar;
