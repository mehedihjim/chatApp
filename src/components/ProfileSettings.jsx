import { IoCameraReverseOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { AiOutlineEdit } from "react-icons/ai";
import { BiMessageSquareEdit } from "react-icons/bi";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";

const ProfileSettings = () => {

    let data = useSelector((state) => state.userInfo.value)
    return (
        <div className='bg-white shadow-md w-full h-[800px] py-[26px] px-[40px] rounded-2xl border border-textColor/20'>
            <h4 className='text-textColor text-xl font-semibold mb-12'>Profile Settings</h4>
            <div className="flex gap-[31px] items-center pb-[30px] border-b border-slate-300">
                <div className="w-[100px] h-[100px] rounded-full bg-red-100 relative overflow-hidden">
                    <img src={data.photoURL} alt="profile pic" className='w-full h-full' />
                    <div className="w-full h-full bg-black/40 absolute top-0 left-0 flex justify-center items-center text-2xl opacity-0 group-hover:opacity-100 duration-300">
                        <IoCameraReverseOutline />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className='text-textColor text-[25px] font-semibold'>{data.displayName}</h4>
                    <p className='text-xl'>Joy Bangla...</p>
                </div>
            </div>
            <div className="pt-[43px] pl-9">
                <ul className='flex flex-col gap-9'>
                    <li className='flex gap-9 items-center text-xl'><AiOutlineEdit className='text-[28px] font-bold text-textColor' />Edit Profile Name</li>
                    <li className='flex gap-9 items-center text-xl'><BiMessageSquareEdit className='text-[28px] font-bold text-textColor' />Edit Profile Status Info</li>
                    <li className='flex gap-9 items-center text-xl'><MdOutlineAddPhotoAlternate className='text-[28px] font-bold text-textColor' />Edit Profile Photo</li>
                    <li className='flex gap-9 items-center text-xl'><IoMdHelpCircleOutline className='text-[28px] font-bold text-textColor' />Help</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileSettings