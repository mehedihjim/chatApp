import React from 'react'
import { CiMenuKebab } from 'react-icons/ci'
import { RiSearch2Line } from 'react-icons/ri'
import ProfileSettings from '../components/ProfileSettings'
import AccountSettings from '../components/AccountSettings'

const Settings = () => {
    return (
        <div className='w-full py-9 pr-[46px] '>
            <div className="">
                <div className="relative w-full mb-[25px] h-[59px]">
                    <input type="text" placeholder="Search" className="w-full h-[59px] pl-[78px] pr-[24px] border border-textColor/20 shadow-lg outline-none rounded-[20px] placeholder:text-[#3D3D3D]/35 placeholder:text-[16px] placeholder:font-medium" />
                    <RiSearch2Line className="text-xl absolute left-6 top-[50%] translate-y-[-50%]" />
                    <CiMenuKebab className="absolute right-[22px] top-[50%] translate-y-[-50%] text-2xl" />
                </div>
            </div>
            <div className="flex gap-9">
                <ProfileSettings />
                <AccountSettings />
            </div>
        </div>
    )
}

export default Settings
