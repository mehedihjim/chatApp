import ItemHeading from './ItemHeading';
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { FiUserPlus, FiUserCheck } from "react-icons/fi";
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import defaultPic from '../assets/profile-pic/defaultProfilePic.png'

const UserList = () => {

    const db = getDatabase();
    // Firebase Import

    let data = useSelector((state) => state.userInfo.value)

    let [userList, setUserList] = useState([])
    let [requestList, setRequestList] = useState([])


    useEffect(() => {

        const userListRef = ref(db, 'users/');
        onValue(userListRef, (snapshot) => {
            let array = []
            snapshot.forEach((item) => {
                if (data.uid != item.key) {
                    array.push({ ...item.val(), uid: item.key })
                }
            })
            setUserList(array)
        });

    }, [])

    useEffect(() => {

        const friendRequestRef = ref(db, 'friendrequests/');
        onValue(friendRequestRef, (snapshot) => {
            let array = []
            snapshot.forEach((item) => {
                array.push(item.val().senderuid + item.val().receiveruid)
            })
            setRequestList(array)
        });
    }, [])

    let handleRequests = (item) => {
        set(push(ref(db, 'friendrequests/')), {
            sendername: data.displayName,
            senderemail: data.email,
            senderuid: data.uid,
            senderimage: data.photoURL,
            receivername: item.username,
            receiveremail: item.email,
            receiveruid: item.uid,
            receiverimage: item.profilePic,
        })
    }


    return (
        <div className='w-full h-full flex flex-col'>
            <div className="flex-shrink-0">
                <ItemHeading title='Users List' />
            </div>
            <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-textColor/10 scrollbar-thumb-rounded-full scrollbar-track-transparent">
                <div className="flex flex-col gap-4">
                    {userList.map((item, index) => (
                        <div key={index} className="flex justify-between pb-[14px] text-left border-b">
                            <div className="flex gap-[14px]">
                                <img src={item ? item.profilePic : defaultPic} alt="profile" className="w-[70px] h-[70px] rounded-full border border-slate-400" />
                                <div className="flex flex-col my-auto">
                                    <h6 className="font-semibold text-lg text-textColor">{item.username}</h6>
                                    <p className='mt-[5px] font-medium text-[10px] text-black/50'>
                                        <span>Last </span>
                                        {moment(item.time, "YYYYMMDDhh:mm").fromNow()}
                                    </p>
                                </div>
                            </div>

                            {requestList.includes(data.uid + item.uid) || requestList.includes(item.uid + data.uid) ?
                                <button href="#" className="bg-black p-[8px] rounded-[5px] text-white my-auto">
                                    <FiUserCheck />
                                </button>
                                :
                                <button href="#" onClick={() => handleRequests(item)} className="bg-black p-[8px] rounded-[5px] text-white my-auto">
                                    <FiUserPlus />
                                </button>
                            }


                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default UserList;
