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

    let [response, setResponse] = useState(null)

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
        }).then(() => {
            setResponse(null)
        })
    }

    let handleCancelRequest = (item) => {
        remove(ref(db, 'friendrequests/' + item.key)).then(() => {
            setResponse(null)
        })
    }

    let handleResponse = (item) => {
        setResponse(item.key)
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
                                <img src={item ? item.senderimage : defaultPic} alt="profile" className="w-[70px] h-[70px] rounded-full border border-slate-400" />
                                <div className="flex flex-col my-auto">
                                    <h6 className="font-semibold text-lg text-textColor">{item.sendername}</h6>
                                    <p className='mt-[5px] font-medium text-[10px] text-black/50font-medium text-sm text-textOther'>Hello!</p>
                                </div>
                            </div>
                            <div className="relative my-auto">
                                <button href="#" onClick={() => handleResponse(item)} className="bg-black pl-[16px] pr-[5px] rounded-[5px] text-white flex gap-1">Response<IoMdArrowDropdown className='my-auto' /></button>
                                {response == item.key &&
                                    (
                                        <div className="absolute top-0 right-full bg-white border border-slate-300 rounded-md py-4 px-5 flex flex-col gap-2">
                                            <button onClick={() => handleAcceptRequest(item)} className='bg-transparent text-green-900 border border-green-900 px-[22px] rounded-[5px]'>Accept</button>
                                            <button onClick={() => handleCancelRequest(item)} className='bg-transparent text-red-500 border border-red-300 px-[22px] rounded-[5px]'>Cancel</button>
                                            <button onClick={() => (setResponse(null))} className='absolute right-[2px] top-[2px]'><IoIosCloseCircle /></button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default FriendRequest
