import defaultPic from '../assets/profile-pic/defaultProfilePic.png'
import { useEffect, useState } from "react";
import { friendRequest } from "../constant"
import ItemHeading from "./ItemHeading"
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";

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
                    array.push(item.val())
                }
            })
            setRequestList(array)
        });
    }, [])

    return (
        <div className='w-full h-full flex flex-col'>
            <div className="flex-shrink-0">
                <ItemHeading title='Friend Request' />
            </div>
            <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-textColor/70 scrollbar-thumb-rounded scrollbar-track-transparent mt-4">
                <div className="flex flex-col gap-4">
                    {requestList.map((item, index) => (
                        <div key={index} className="flex justify-between pb-[14px] text-left border-b">
                            <div className="flex gap-[14px]">
                                <img src={item ? item.profilePic : defaultPic} alt="profile" className="w-[70px] h-[70px] rounded-full border border-slate-400" />
                                <div className="flex flex-col my-auto">
                                    <h6 className="font-semibold text-lg text-textColor">{item.name}</h6>
                                    <p className="font-medium text-sm text-textOther">{item.title}</p>
                                </div>
                            </div>
                            <button href="#" className="bg-black px-[22px] rounded-[5px] text-white my-auto">Accept</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FriendRequest
