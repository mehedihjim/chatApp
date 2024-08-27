import React from 'react'
import ItemHeading from './ItemHeading'
import { friends } from "../constant";

const Friends = () => {
    return (
        <div className='w-full h-full'>
            <ItemHeading title='Friends' />
            <div className="flex flex-col gap-4">
                {friends.map((friend, index) => (
                    <div className="flex justify-between pb-[14px] text-left border-b  border-slate-300 last:border-none">
                        <div className="flex gap-[14px]">
                            <img src={friend.img} alt="profile" className="w-[70px] h-[70px] rounded-full border border-slate-400" />
                            <div className="flex flex-col my-auto">
                                <h6 className="font-semibold text-lg text-textColor">{friend.name}</h6>
                                <p className="font-medium text-sm text-textOther">{friend.title}</p>
                            </div>
                        </div>
                        <p className='mt-[5px] font-medium text-[10px] text-black/50'>{friend.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Friends
