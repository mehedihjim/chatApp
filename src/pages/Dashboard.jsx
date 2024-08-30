import Friends from "../components/Friends";
import GroupList from "../components/GroupList";
import Searchbar from "../components/Searchbar";
import UserList from "../components/UserList";
import ItemHeading from "../components/ItemHeading";
import FriendRequest from "../components/FriendRequest";
import MyGroups from "../components/MyGroups";
import Blocked from "../components/Blocked";
import Ad from "../assets/ad.webp"

const Dashboard = () => {
    return (
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
    )
}

export default Dashboard
