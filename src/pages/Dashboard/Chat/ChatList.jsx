import { IoSettingsOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { GiPlainCircle } from "react-icons/gi";

import img from '../../../assets/images/dashboard/img22.jpg'
import img1 from '../../../assets/images/dashboard/img33.png'
import img2 from '../../../assets/images/dashboard/img23.jpg'


const ChatList = ({ activeUser, setActiveUser }) => {
    const userData = [
        {
            id: 1,
            name: "Latrice",
            role: "Admin",
            time: "5m",
            message: "Lorem ipsum dolor sit amet",
            avatar: "", // Leave blank for initials
            initialsBg: "#FF827F"
        },
        {
            id: 2,
            name: "Latrice",
            role: "Admin",
            time: "5m",
            message: "Appointment rescheduling request.",
            avatar: "",
            initialsBg: "#FF827F"
        },
        {
            id: 3,
            name: "Omar Vaccaro",
            role: "Solon",
            time: "5m",
            message: "Lorem ipsum dolor sit amet",
            avatar: img
        },
        {
            id: 4,
            name: "Kathryn Murphy",
            role: "Solon",
            time: "5m",
            message: "Lorem ipsum dolor sit amet",
            avatar: img1
        },
        {
            id: 5,
            name: "Wade Warren",
            role: "Solon",
            time: "5m",
            message: "Lorem ipsum dolor sit amet",
            avatar: img2
        }
    ];


    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="flex tems-center gap-2 mb-1">
                    <h6 className="font-[400] font-rasa sm:text-[16px] text-[14px] text-[#555758]">Inbox</h6>
                    <div className="bg-charocal px-3 py-1 rounded-full h-[20px] flex items-center justify-center">
                        <span className="font-[400] font-rasa sm:text-[12px]  text-[#FAF9F6]">2 New</span>
                    </div>
                </div>
                <IoSettingsOutline color="#989BA1" size={25} />
            </div>

            <div className="w-full bg-white shadow-lg py-2.5 px-5 rounded-[100px] flex items-center gap-1">
                <FiSearch color="#989BA1" size={20} />
                <input
                    type="search"
                    placeholder="Search..."
                    className="flex-1 outline-none border-none font-[400] font-rasa sm:text-[16px] text-[14px] text-[#989BA1]"
                />
            </div>


            <div className="mt-3">
                {userData.map((user) => (
                    <div
                        key={user.id}
                        className={`group border-b border-[#D0D8D9] px-3 py-4 cursor-pointer 
                            ${activeUser?.id === user.id ? 'bg-[#123E41]' : 'hover:bg-[#123E41]'}`}
                        onClick={() => setActiveUser(user)}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <GiPlainCircle color="#123E41" size={8} />
                                <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center">
                                    {user.avatar ? (
                                        <img
                                            src={user.avatar}
                                            alt={user.name}
                                            className="object-cover rounded-full w-[45px] h-[45px]"
                                        />
                                    ) : (
                                        <div
                                            className={`w-[45px] h-[45px] rounded-full flex items-center justify-center`}
                                            style={{ backgroundColor: user.initialsBg }}
                                        >
                                            <h6 className="font-[600] font-rasa sm:text-[14px] text-[12px] text-[#123E41]">
                                                {user.name.split(" ")[0]}
                                            </h6>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h6 className={`font-[400] font-rasa sm:text-[17px] text-[14px]
                                     ${activeUser?.id === user.id ? 'text-[#FAF9F6]' : 'text-[#989BA1] group-hover:text-[#FAF9F6]'}
                                        `}>
                                        {user.name}
                                    </h6>
                                    <p className={`font-[400] font-rasa sm:text-[12px] text-[10px]
                                    ${activeUser?.id === user.id ? 'text-[#FAF9F6]' : 'text-[#989BA1] group-hover:text-[#FAF9F6]'}
                                        `}>
                                        {user.role}
                                    </p>
                                </div>
                            </div>
                            <span className={`font-[500] font-rasa sm:text-[13px] text-[10px] 
                            ${activeUser?.id === user.id ? 'text-[#FAF9F6]' : 'text-[#989BA1] group-hover:text-[#FAF9F6]'}
                                `}>
                                {user.time}
                            </span>
                        </div>
                        <h6 className={`font-[400] font-rasa sm:text-[13px] text-[10px]  mt-3 ml-4 
                        ${activeUser?.id === user.id ? 'text-[#FAF9F6]' : 'text-[#989BA1] group-hover:text-[#FAF9F6]'}
                            `}>
                            {user.message}
                        </h6>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ChatList;
