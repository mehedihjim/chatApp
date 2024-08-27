import { ImSpinner9 } from "react-icons/im";

const MiniGames = () => {
    return (
        <div className='py-[35px] flex justify-center items-center w-full font-medium text-textColor text-6xl'>
            <div className="flex gap-4"><ImSpinner9 className="my-auto animate-spin" /><h2>Coming Soon...</h2></div>
        </div>
    )
}

export default MiniGames
