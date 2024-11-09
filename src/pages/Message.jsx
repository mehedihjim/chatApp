import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { CiMenuKebab } from 'react-icons/ci'
import MyGroups from '../components/MyGroups';
import Friends from "../components/Friends";

import Ad from "../assets/ad.webp"
import { GrSend } from "react-icons/gr";
import { BsEmojiWink } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import Searchbar from '../components/Searchbar';

const Message = () => {
    return (
        <div className='py-[35px] flex gap-7'>
            <div className="">
                <div className="relative w-full mb-[25px] h-[59px]">
                    <Searchbar />
                </div>
                <div className="flex flex-col gap-6">
                    {/* <div className="w-[365px] h-[425px] rounded-md overflow-hidden">
                        <a href="https://10ms.io/ug9dhN"><img src={Palestine} alt="" className="w-full h-full" /></a>
                    </div> */}
                </div>
            </div>
            <div className="w-[689px] h-[910px] rounded-2xl shadow-md pl-[54px] pr-[33px] pt-[24px] pb-[34px] flex flex-col justify-between">
                {/* Messege Box */}
                <div className="flex justify-between border-b border-slate-300">
                    {/* Head */}
                    <div className="mb-6 flex gap-[33px] my-auto">
                        <div className="relative">
                            <img src={Ad} alt="" className='w-[75px] rounded-full shadow-lg border border-slate-300' />
                            <div className="w-3 h-3 rounded-full bg-green-400 border-[2px] border-white shadow-2xl absolute bottom-[5px] right-[6px]"></div>
                        </div>
                        <div className="my-auto">
                            <h3 className='font-semibold text-2xl'>Swathi Dutta</h3>
                            <p className='text-sm'>Online</p>
                        </div>
                    </div>
                    <CiMenuKebab className="text-2xl cursor-pointer text-[32px] my-auto" />
                </div>
                <div className="pt-[35px] border-t border-slate-300 flex justify-between">
                    <div className="relative w-[537px]">
                        <input type="text" className='w-full h-[45px] rounded-md bg-gray-200 outline-none px-3' />
                        <div className="text-[15px] text-[#707070] flex gap-[13px] absolute right-[15px] top-[50%] -translate-y-[50%]">
                            <BsEmojiWink />
                            <ImAttachment />
                        </div>
                    </div>
                    <button className='w-fit p-[15px] bg-black rounded-md'><GrSend className='text-lg text-white' /></button>
                </div>
            </div>
            <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-6">
                    <div className="w-[365px] h-[425px] bg-white shadow-md rounded-[20px] p-5 text-center border border-gray-300">
                        <MyGroups />
                    </div>
                    <div className="w-[365px] h-[425px] bg-white shadow-md rounded-[20px] p-5 text-center border border-gray-300">
                        <Friends />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
