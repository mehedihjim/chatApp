import { CiMenuKebab } from "react-icons/ci";
import ItemHeading from "./ItemHeading";
import { groupList } from "../constant";

const GroupList = () => {
    return (
        <div className="w-full h-full">
            <ItemHeading title='Group List' />
            <div className="flex flex-col gap-4">
                {groupList.map((group, index) => (
                    <div className="flex justify-between pb-[14px] text-left border-b  border-slate-300 last:border-none">
                        <div className="flex gap-[14px]">
                            <img src={group.img} alt="profile" className="w-[70px] h-[70px] rounded-full border border-slate-400" />
                            <div className="flex flex-col my-auto">
                                <h6 className="font-semibold text-lg text-textColor">{group.name}</h6>
                                <p className="font-medium text-sm text-textOther">{group.title}</p>
                            </div>
                        </div>
                        <button href="#" className="bg-black px-[22px] rounded-[5px] text-white my-auto">Join</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GroupList
