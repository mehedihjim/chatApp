import ItemHeading from './ItemHeading';
import { userList } from "../constant";

const UserList = () => {
    return (
        <div className='w-full h-full flex flex-col'>
            <div className="flex-shrink-0">
                <ItemHeading title='Users List' />
            </div>
            <div className="flex-grow overflow-y-auto mt-4">
                <div className="flex flex-col gap-4">
                    {userList.map((users, index) => (
                        <div key={index} className="flex justify-between pb-[14px] text-left border-b">
                            <div className="flex gap-[14px]">
                                <img src={users.img} alt="profile" className="w-[70px] h-[70px] rounded-full border border-slate-400" />
                                <div className="flex flex-col my-auto">
                                    <h6 className="font-semibold text-lg text-textColor">{users.name}</h6>
                                    <p className="font-medium text-sm text-textOther">{users.title}</p>
                                </div>
                            </div>
                            <p className='mt-[5px] font-medium text-[10px] text-black/50'>{users.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserList;
