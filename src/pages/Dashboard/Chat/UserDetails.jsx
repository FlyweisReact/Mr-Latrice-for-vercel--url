import img from '../../../assets/images/dashboard/img22.jpg'
import { IoMdStar } from "react-icons/io";
const hours = [
    { day: "Sunday", time: "Closed" },
    { day: "Monday", time: "9:00 AM– 7:45 PM" },
    { day: "Tuesday", time: "9:00 AM– 7:00 PM", underline: true },
    { day: "Wednesday", time: "9:00 AM– 7:00 PM" },
    { day: "Thursday", time: "Closed" },
    { day: "Friday", time: "9:00 AM– 7:45 PM" },
    { day: "Saturday", time: "9:00 AM– 6:00 PM" },
];


const UserDetails = ({ user }) => {
    return (
        <div className="text-center">
            {user.avatar ? (
                <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-25 h-25 mx-auto rounded-full border-5 border-[#123E41]"
                />
            ) : (
                <div 
                    className="w-25 h-25 mx-auto rounded-full border-5 border-[#123E41] flex items-center justify-center"
                    style={{ backgroundColor: user.initialsBg }}
                >
                    <span className="text-2xl font-bold text-white">
                        {user.name.split(" ").map(n => n[0]).join("")}
                    </span>
                </div>
            )}
            <h3 className="font-[400] font-rasa sm:text-[20px] text-[15px] text-[#555758]">{user.name}</h3>
            <p className="font-[400] font-rasa sm:text-[15px] text-[10px] text-[#989BA1]">{user.role}</p>

            <p className="font-[400] font-rasa sm:text-[15px] text-[10px] text-[#555758] m-0 flex items-center gap-1 justify-center">
                <IoMdStar color='#FF353F' size={15} />
                4.7 (Rating)
            </p>

            <div className="mt-4">
                <iframe
                    className="w-full  rounded-tl-[10px] rounded-tr-[10px]"
                    src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                    title="map"
                />
            </div>

            <div className="text-left mt-2">
                <h4 className="font-[700] font-rasa sm:text-[20px] text-[15px] text-[#121111]">Location</h4>
                <p className="font-[400] font-rasa sm:text-[16px] text-[15px] text-[#2F2F2F] underline">New York, NY 10001</p>

                <h4 className="font-[700] font-rasa sm:text-[20px] text-[15px] text-[#121111] mt-4">Hours of Operation</h4>
                <div className="">
                    {hours.map((item, index) => (
                        <div key={index} className="flex justify-between py-1 text-gray-800">
                            <span className="font-[500] font-rasa sm:text-[16px] text-[15px] text-[#494948]">{item.day}:</span>
                            <span
                                className="font-[500] font-rasa sm:text-[16px] text-[15px] text-[#494948]"
                            >
                                {item.time}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default UserDetails;
