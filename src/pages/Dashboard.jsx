import Friends from "../components/Friends";
import GroupList from "../components/GroupList";
import Searchbar from "../components/Searchbar";
import UserList from "../components/UserList";
import ItemHeading from "../components/ItemHeading";

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
                <Friends />
            </div>
            <div className="w-[365px] h-[451px] bg-white shadow-md rounded-[20px] p-5 text-center border border-gray-300 overflow-y-scroll">
                <UserList />
            </div>
            <div className="w-[365px] h-[451px] bg-white shadow-md rounded-[20px] p-5 text-center border border-gray-300">
                <GroupList />
            </div>
            <div className="w-[365px] h-[451px] bg-white shadow-md rounded-[20px] p-5 text-center border border-gray-300">
                <GroupList />
            </div>
            <div className="w-[365px] h-[451px] bg-white shadow-md rounded-[20px] p-5 text-center border border-gray-300">
                <GroupList />
            </div>
        </div>
    )
}

export default Dashboard
