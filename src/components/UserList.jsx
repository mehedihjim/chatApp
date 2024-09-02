import ItemHeading from './ItemHeading';
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import { FiUserPlus } from "react-icons/fi";

const UserList = () => {

    const db = getDatabase();
    // Firebase Import

    let [userList, setUserList] = useState([])

    useEffect(() => {

        const userListRef = ref(db, 'users/');
        onValue(userListRef, (snapshot) => {
            let array = []
            snapshot.forEach((item) => {
                array.push(item.val())
            })
            setUserList(array)
        });

    }, [])

    return (
        <div className='w-full h-full flex flex-col'>
            <div className="flex-shrink-0">
                <ItemHeading title='Users List' />
            </div>
            <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-textColor/70 scrollbar-thumb-rounded scrollbar-track-transparent">
                <div className="flex flex-col gap-4">
                    {userList.map((item) => (
                        <div className="flex justify-between pb-[14px] text-left border-b">
                            <div className="flex gap-[14px]">
                                <img src={item.profilePic} alt="profile" className="w-[70px] h-[70px] rounded-full border border-slate-400" />
                                <div className="flex flex-col my-auto">
                                    <h6 className="font-semibold text-lg text-textColor">{item.username}</h6>
                                    <p className='mt-[5px] font-medium text-[10px] text-black/50'>21 Jan 2023</p>
                                </div>
                            </div>
                            <button href="#" className="bg-black p-[8px] rounded-[5px] text-white my-auto"><FiUserPlus /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserList;
