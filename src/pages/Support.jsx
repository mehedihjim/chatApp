import mhjim from '../assets/mhjim.png'
import { FaScrewdriverWrench } from "react-icons/fa6";
import { IoHelpCircleOutline } from "react-icons/io5";

const Support = () => {
    return (
        <div className="w-full overflow-hidden py-9 pr-[46px] flex flex-col">
            <div className="mx-auto w-[20%] opacity-80 mb-6">
                <img src={mhjim} alt="" />
            </div>
            <div className="">
                <h2 className='text-3xl font-semibold text-textColor flex gap-3 justify-center mb-8'><FaScrewdriverWrench className='my-auto' /> Support & Help Center</h2>
                <p className='flex w-full border border-slate-600 shadow-lg bg-slate-200 rounded-lg px-6 py-10 gap-1 '><IoHelpCircleOutline className=' text-textColor text-2xl' />
                    An open-source chat application designed for seamless real-time communication. Easily create chat rooms, connect with others, and enjoy a user-friendly interface. Built with simplicity and collaboration in mind, this app is perfect for developers and users looking for a lightweight, customizable chat solution.</p>
            </div>
        </div>
    )
}

export default Support
