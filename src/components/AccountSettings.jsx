import { FaKey } from "react-icons/fa";
import { RiExchangeFundsLine, RiDeleteBin4Line } from "react-icons/ri";

const AccountSettings = () => {
    return (
        <div className='bg-white shadow-md w-full h-[800px] py-[26px] px-[40px] rounded-2xl border border-textColor/20'>
            <h4 className='text-textColor text-xl font-semibold mb-10'>Profile Settings</h4>
            <div className="pl-9">
                <ul className='flex flex-col gap-9'>
                    <li className='flex gap-9 items-center text-xl'><FaKey className='text-[28px] font-bold text-textColor' />Change Password</li>
                    <li className='flex gap-9 items-center text-xl'><RiExchangeFundsLine className='text-[28px] font-bold text-textColor' />Theme</li>
                    <li className='flex gap-9 items-center text-xl'><RiDeleteBin4Line className='text-[28px] font-bold text-textColor' />Delete Account</li>
                </ul>
            </div>
        </div>
    )
}

export default AccountSettings