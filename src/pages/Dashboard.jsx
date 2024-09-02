import Friends from "../components/Friends";
import GroupList from "../components/GroupList";
import Searchbar from "../components/Searchbar";
import UserList from "../components/UserList";
import ItemHeading from "../components/ItemHeading";
import FriendRequest from "../components/FriendRequest";
import MyGroups from "../components/MyGroups";
import Blocked from "../components/Blocked";
import Ad from "../assets/ad.webp"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loggedinUserInfo } from '../slices/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Dashboard = () => {
    const auth = getAuth();
    // Firebase Import

    let data = useSelector((state) => state.userInfo.value)
    let navigate = useNavigate()
    let [verify, setVerify] = useState(false)
    let dispatch = useDispatch()

    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(loggedinUserInfo(user));
            localStorage.setItem("user", JSON.stringify(user))
        } else {
            navigate('/login')
            setVerify(false)
        }
    });

    useEffect(() => {

        if (!data) {
            navigate('/login')
        } else if (!data.emailVerified) {
            setVerify(false)
        } else {
            setVerify(true)
        }

    }, [data, navigate])




    return (
        <>
            {verify ?

                <div className="flex flex-wrap gap-7 py-[35px]">
                    <div className="w-[365px] h-[451px]">
                        <Searchbar />
                    </div>
                    <div className="w-[365px] h-[451px] bg-white shadow-md rounded-[20px] p-5 text-center border border-gray-300">
                        <GroupList />
                    </div>
                    <div className="w-[365px] h-[451px] bg-white shadow-md rounded-[20px] p-5 text-center border border-gray-300">
                        <UserList />
                    </div>
                    <div className="w-[365px] h-[451px]">
                        <a href="https://10ms.io/ug9dhN"><img src={Ad} alt="" className="w-full h-full" /></a>
                    </div>
                    <div className="w-[365px] h-[451px] bg-white shadow-md rounded-[20px] p-5 text-center border border-gray-300">
                        <Friends />
                    </div>
                    <div className="w-[365px] h-[451px] bg-white shadow-md rounded-[20px] p-5 text-center border border-gray-300">
                        <FriendRequest />
                    </div>
                    <div className="w-[365px] h-[451px] bg-white shadow-md rounded-[20px] p-5 text-center border border-gray-300">
                        <MyGroups />
                    </div>
                    <div className="w-[365px] h-[451px] bg-white shadow-md rounded-[20px] p-5 text-center border border-gray-300">
                        <Blocked />
                    </div>
                </div>

                :

                <div className="w-full h-full bg-transparent backdrop-blur-sm absolute top-0 left-0 flex justify-center items-center">
                    <div className="w-[460px] h-[280px] bg-black border border-slate-300 rounded-lg shadow-md flex justify-center items-center">
                        <h4 className="text-xl text-white cursor-pointer">Please, Verify Your Account</h4>
                    </div>
                </div>
            }
        </>
    )
}

export default Dashboard
