import { RiSearch2Line } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { TbProgressHelp } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { CgGames } from "react-icons/cg";
import { BsCalendar4Event } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Searchbar = () => {
    return (
        <div className="w-[344px] h-[59px] flex flex-col gap-2">
            <div className="relative w-full mb-[25px] h-[59px]">
                <input type="text" placeholder="Search" className="w-full h-[59px] pl-[78px] pr-[24px] border border-textColor/20 shadow-lg outline-none rounded-[20px] placeholder:text-[#3D3D3D]/35 placeholder:text-[16px] placeholder:font-medium" />
                <RiSearch2Line className="text-xl absolute left-6 top-[50%] translate-y-[-50%]" />
                <CiMenuKebab className="absolute right-[22px] top-[50%] translate-y-[-50%] text-2xl" />
            </div>
            <ul className="flex flex-col my-auto text-textColor px-2 font-semibold text-lg">
                <li className="border-b  border-slate-300 py-4">
                    <Link to='/supports' className="flex gap-3">
                        <div className="w-[50px] h-[50px] p-3 rounded-full bg-[#D8DADF] flex items-center justify-center">
                            <TbProgressHelp className="text-2xl" />
                        </div>
                        <p className="my-auto">Support</p>
                    </Link>
                </li>
                <li className="border-b  border-slate-300 py-4">
                    <Link to='/fundraisers' className="flex gap-3">
                        <div className="w-[50px] h-[50px] p-3 rounded-full bg-[#D8DADF] flex items-center justify-center">
                            <GiReceiveMoney className="text-2xl" />
                        </div>
                        <p className="my-auto">Fundraiser</p>
                    </Link>
                </li>
                <li className="border-b  border-slate-300 py-4">
                    <Link to='/mini-games' className="flex gap-3">
                        <div className="w-[50px] h-[50px] p-3 rounded-full bg-[#D8DADF] flex items-center justify-center">
                            <CgGames className="text-2xl" />
                        </div>
                        <p className="my-auto">Mini Game</p>
                    </Link>
                </li>
                <li className="py-3">
                    <Link to='/mini-games' className="flex gap-4">
                        <div className="w-[50px] h-[50px] p-3 rounded-full bg-[#D8DADF] flex items-center justify-center">
                            <BsCalendar4Event className="text-2xl" />
                        </div>
                        <p className="my-auto">Events</p>
                    </Link>
                </li>
            </ul>


        </div>
    )
}

export default Searchbar
