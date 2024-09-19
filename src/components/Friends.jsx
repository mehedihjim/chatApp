import React, { useEffect, useState } from 'react'
import ItemHeading from './ItemHeading'
import { friends } from "../constant";
import { useSelector } from 'react-redux';
import { getDatabase, onValue, ref } from 'firebase/database';
import moment from 'moment';
import defaultImg from '../assets/profile-pic/defaultProfilePic.png'

const Friends = () => {

    const db = getDatabase();
    // firebase imports

    let data = useSelector((state) => state.userInfo.value)

    let [friendList, setFriendList] = useState([])

    useEffect(() => {

        const friendListRef = ref(db, 'friendlist/');
        onValue(friendListRef, (snapshot) => {
            let array = []
            snapshot.forEach((item) => {
                if (data.uid == item.val().senderuid || data.uid == item.val().receiveruid) {

                    array.push({ ...item.val(), key: item.key })
                }
            })
            setFriendList(array)
        });
    }, [])


    return (
        <div className='w-full h-full flex flex-col'>
            <div className="flex-shrink-0">
                <ItemHeading title='Friends' />
            </div>
            <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-textColor/10 scrollbar-thumb-rounded-full scrollbar-track-transparent">
                <div className="flex flex-col gap-4">
                    {friendList.map((item, index) => (
                        <div key={index} className="flex justify-between pb-[14px] text-left border-b">
                            <div className="flex gap-[14px]">
                                {data.uid == item.senderuid ?
                                    <img src={item.receiverimage} alt="profile" className="w-[70px] h-[70px] rounded-full border border-slate-400" />
                                    :
                                    <img src={item.senderimage} alt="profile" className="w-[70px] h-[70px] rounded-full border border-slate-400" />
                                }
                                <div className="flex flex-col my-auto">
                                    {data.uid == item.senderuid ?
                                        <h6 className="font-semibold text-lg text-textColor">{item.receivername}</h6>
                                        :
                                        <h6 className="font-semibold text-lg text-textColor">{item.sendername}</h6>
                                    }
                                    <p className="font-medium text-sm text-textOther">Hello</p>
                                    {/* <p className='mt-[5px] font-medium text-[10px] text-black/50'>
                                        <span>Last </span>
                                        {moment(item.time, "YYYYMMDDhh:mm").fromNow()}
                                    </p> */}
                                </div>
                            </div>
                            <div className="my-auto flex flex-col gap-2">
                                <button className="bg-black px-[18px] rounded-[5px] text-white my-auto">Message</button>
                                <button className="border border-slate-300 px-[21px] rounded-[5px] text-textColor my-auto">Block</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Friends
