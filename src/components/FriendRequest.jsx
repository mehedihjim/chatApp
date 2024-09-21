import defaultPic from '../assets/profile-pic/defaultProfilePic.png'
import { useEffect, useState } from "react";
import { friendRequest } from "../constant"
import ItemHeading from "./ItemHeading"
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import { useSelector } from "react-redux";
import moment from 'moment';
import { IoMdArrowDropdown, IoIosCloseCircle } from "react-icons/io";


const FriendRequest = () => {

    const db = getDatabase();
    // firebase imports

    let data = useSelector((state) => state.userInfo.value)

    let [requestList, setRequestList] = useState([])

    useEffect(() => {

        const friendRequestRef = ref(db, 'friendrequests/');
        onValue(friendRequestRef, (snapshot) => {
            let array = []
            snapshot.forEach((item) => {
                if (data.uid == item.val().receiveruid) {
                    array.push({ ...item.val(), key: item.key })
                }
                // console.log(item.val())
            })
            setRequestList(array)
        });
    }, [])


    let handleAcceptRequest = (item) => {
        set(push(ref(db, 'friendlist/')), {
            ...item,
        }).then(() => {
            remove(ref(db, 'friendrequests/' + item.key))
        })
    }

    let handleCancelRequest = (item) => {
        remove(ref(db, 'friendrequests/' + item.key))
    }

    return (
        <div className='w-full h-full flex flex-col'>
            <div className="flex-shrink-0">
                <ItemHeading title='Friend Request' />
            </div>
            <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-textColor/10 scrollbar-thumb-rounded-full scrollbar-track-transparent">
                <div className="flex flex-col gap-4">
                    {requestList.map((item, index) => (
                        <div key={index} className="flex justify-between pb-[14px] text-left border-b">
                            <div className="flex gap-[14px]">
                                <img src={item.senderimage} alt="profile" className="w-[70px] h-[70px] rounded-full border border-slate-400" />
                                <div className="flex flex-col my-auto">
                                    <h6 className="font-semibold text-lg text-textColor">{item.sendername}</h6>
                                    <p className='mt-[5px] font-medium text-[10px] text-black/50font-medium text-sm text-textOther'>Hello!</p>
                                </div>
                            </div>
                            <div className="my-auto flex flex-col gap-2">
                                <button onClick={() => handleAcceptRequest(item)} className='bg-black px-[18px] rounded-[5px] text-white my-auto'>Accept</button>
                                <button onClick={() => handleCancelRequest(item)} className='border border-slate-300 px-[21px] rounded-[5px] text-textColor my-auto'>Cancel</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default FriendRequest
