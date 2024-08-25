import { RiSearch2Line } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import GroupList from "../components/GroupList";

const Dashboard = () => {
    return (
        <div className="w-full py-[35px]">
            <div className="w-1/3">
                <div className="relative mb-[43px]">
                    <input type="text" placeholder="Search" className="w-[427px] h-[59px] pl-[78px] pr-[24px] border border-textColor/20 shadow-lg outline-none rounded-[20px] placeholder:text-[#3D3D3D]/35 placeholder:text-[16px] placeholder:font-medium" />
                    <RiSearch2Line className="text-xl absolute left-6 top-[50%] translate-y-[-50%]" />
                    <CiMenuKebab className="absolute right-[155px] top-[50%] translate-y-[-50%] text-2xl" />
                </div>
                <GroupList />
            </div>
        </div>
    )
}

export default Dashboard
