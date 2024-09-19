import mhjim from '../assets/mhjim.png'
import { FaScrewdriverWrench } from "react-icons/fa6";

const Support = () => {
    return (
        <div className="w-full overflow-hidden py-9 pr-[46px] flex flex-col">
            <div className="mx-auto w-[20%] opacity-80 mb-6">
                <img src={mhjim} alt="" />
            </div>
            <div className="text-3xl font-semibold text-textColor">
                <h2 className='flex gap-3 justify-center'><FaScrewdriverWrench className='my-auto' /> Support & Help Center</h2>
                <p></p>
            </div>
        </div>
    )
}

export default Support
