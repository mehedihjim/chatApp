import { RiSearch2Line } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";

const Dashboard = () => {
    return (
        <div className="w-full py-[35px]">
            <div className="w-1/3">
                <div className="relative">
                    <input type="text" placeholder="Search" className="max-w-[427px] h-[59px] pl-[78px] pr-[24px] border border-textColor/20 shadow-lg outline-none rounded-[20px] placeholder:text-[#3D3D3D]/35 placeholder:text-[16px] placeholder:font-medium" />
                    <RiSearch2Line className="text-xl absolute left-6 top-[50%] translate-y-[-50%]" />
                    <CiMenuKebab className="text-xl absolute right-[22px] top-[50%] translate-y-[-50%]" />
                </div>

            </div>
        </div>
    )
}

export default Dashboard
