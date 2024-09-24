import { useEffect, useState } from "react";
import { blocked } from "../constant"
import ItemHeading from "./ItemHeading"
import { getDatabase, onValue, ref } from "firebase/database";
import defaultImg from '../assets/profile-pic/defaultProfilePic.png'
import { useSelector } from "react-redux";
import moment from "moment";

const Blocked = () => {

    const db = getDatabase();
    // firebase imports

    let data = useSelector((state) => state.userInfo.value)

    let [blockList, setBlockList] = useState([])

    useEffect(() => {

        const blockListRef = ref(db, 'blocklist/');
        onValue(blockListRef, (snapshot) => {
            let array = []
            snapshot.forEach((item) => {
                if (data.uid == item.val().blockedbyuid) {
                    array.push({
                        blocked: item.val().blocked,
                        blockeduid: item.val().blockeduid,
                    });
                }
            });
            setBlockList(array)
        });
    }, [])

    let handleUnblock = (item) => {
        console.log('Clicked ' + item.blockeduid)
    }

    return (
        <div className='w-full h-full flex flex-col'>
            <div className="flex-shrink-0">
                <ItemHeading title='Blocked Users' />
            </div>
            <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-textColor/10 scrollbar-thumb-rounded-full scrollbar-track-transparent">
                <div className="flex flex-col gap-4">
                    {blockList.map((item, index) => (
                        <div key={index} className="flex justify-between pb-[14px] text-left border-b">
                            <div className="flex gap-[14px]">
                                <img src={defaultImg} alt="profile" className="w-[70px] h-[70px] rounded-full border border-slate-400" />
                                <div className="flex flex-col my-auto">
                                    <h6 className="font-semibold text-lg text-textColor">{item.blocked}</h6>
                                    <h6 className="font-semibold text-lg text-textColor">{item.blockedby}</h6>
                                    <p className="font-medium text-sm text-textOther">Don't text me~</p>
                                </div>
                            </div>
                            <button onClick={() => handleUnblock(item)} className="bg-black px-[18px] rounded-[5px] text-white my-auto">Unblock</button>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Blocked
