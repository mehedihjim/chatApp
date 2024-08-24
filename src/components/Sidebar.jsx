import React from 'react'
import profile from '../assets/profile.png'
import { FaHome, FaBell } from "react-icons/fa";
import { FaInbox, FaGear } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';



const Sidebar = () => {
    return (
        <section id='sidebar' className='w-[260px] h-screen bg-gray-50 pl-[32px] pr-[43px] py-[35px]'>
            <div className="w-full h-full bg-black rounded-[20px] pt-[38px] pb-[48px] flex flex-col justify-between">
                <img src={profile} alt="profile pic" className='w-[100px] h-[100px] rounded-full mx-auto' />
                <ul className=' flex flex-col items-center gap-[82px] text-[46px] text-gray-500 mt-[-78px]'>
                    <li className=''><Link to='/dashboard'><FaHome /></Link></li>
                    <li><Link to='/messages'><FaInbox /></Link></li>
                    <li><Link to='/notifications'><FaBell /></Link></li>
                    <li><Link to='/settings'><FaGear /></Link></li>
                </ul>
                <IoMdLogOut className='text-[46px] text-white mx-auto' />
            </div>
        </section>
    )
}

export default Sidebar
