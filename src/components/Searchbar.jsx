import { RiSearch2Line } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { TbProgressHelp } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { CgGames } from "react-icons/cg";
import { Link } from 'react-router-dom';


const Searchbar = () => {
    return (
        <div className="mt-[35px] w-full h-[59px] flex justify-between">
            <div className="relative mb-[43px] h-[59px]">
                <input type="text" placeholder="Search" className="w-[427px] h-[59px] pl-[78px] pr-[24px] border border-textColor/20 shadow-lg outline-none rounded-[20px] placeholder:text-[#3D3D3D]/35 placeholder:text-[16px] placeholder:font-medium" />
                <RiSearch2Line className="text-xl absolute left-6 top-[50%] translate-y-[-50%]" />
                <CiMenuKebab className="absolute right-[22px] top-[50%] translate-y-[-50%] text-2xl" />
            </div>
            <ul className="flex gap-[16px] px-[80px] my-auto text-textColor">
                <li className="relative group">
                    <Link to='/supports'>
                        <div className="w-[50px] h-[50px] p-3 rounded-full bg-[#D8DADF] flex items-center justify-center">
                            <TbProgressHelp className="text-2xl" />
                        </div>
                    </Link>
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm">Support</span>
                    </div>
                </li>
                <li className="relative group">
                    <Link to='/fundraisers'>
                        <div className="w-[50px] h-[50px] p-3 rounded-full bg-[#D8DADF] flex items-center justify-center">
                            <GiReceiveMoney className="text-2xl" />
                        </div>
                    </Link>
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm">Fundraisers</span>
                    </div>
                </li>
                <li className="relative group">
                    <Link to='/mini-games'>
                        <div className="w-[50px] h-[50px] p-3 rounded-full bg-[#D8DADF] flex items-center justify-center">
                            <CgGames className="text-2xl" />
                        </div>
                    </Link>
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm">Games</span>
                    </div>
                </li>
            </ul>


        </div>
    )
}

export default Searchbar
