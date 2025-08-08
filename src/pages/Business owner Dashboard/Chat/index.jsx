import { useState } from "react";
import ChatBox from "./ChatBox";
import ChatList from "./ChatList";
import UserDetails from "./UserDetails";

import img from '../../../assets/images/dashboard/img22.jpg'
import img1 from '../../../assets/images/dashboard/profileimg.jpg'
import BusinessOwnerDashboardLayout from "../../../components/DashbaordLayout/Business Owner";


export default function BusinessChat() {
    const [activeUser, setActiveUser] = useState(null);
    const [chatMessages, setChatMessages] = useState([
        {
            id: 1,
            sender: "left",
            avatar: img,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu et at bibendum suspendisse. Feugiat mi eu, rhoncus diam consectetur libero morbi pharetra. Id tristique mi eget eget tristique orci.",
            time: "10:15 pm",
            date: "August 21"
        },
        {
            id: 2,
            sender: "right",
            avatar: img1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse.",
            time: "12:15 pm",
            date: "August 21"
        }
    ]);

    return (
        <BusinessOwnerDashboardLayout title="Chat">
            <div className="flex flex-col md:flex-row h-screen bg-gray-50">
                {/* Chat List - Hidden on mobile when chat is open */}
                <div className={`w-full md:w-1/4 p-4 overflow-y-auto ${activeUser ? 'hidden md:block' : 'block'}`}>
                    <ChatList
                        activeUser={activeUser}
                        setActiveUser={setActiveUser}
                    />
                </div>

                {/* Chat Box - Full width on mobile when user selected */}
                <div className={`${activeUser ? 'block' : 'hidden'} md:block w-full md:w-2/4 p-4 flex flex-col`}>
                    {activeUser ? (
                        <>
                            <ChatBox
                                user={activeUser}
                                messages={chatMessages}
                                setMessages={setChatMessages}
                            />
                        </>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-gray-500">Select a chat to start messaging</p>
                        </div>
                    )}
                </div>

                {/* User Details - Hidden on mobile when chat is open */}
                <div className={`${activeUser ? 'hidden' : 'hidden'} md:block w-full md:w-1/4 p-4`}>
                    {activeUser ? (
                        <UserDetails user={activeUser} />
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-gray-500">User details will appear here</p>
                        </div>
                    )}
                </div>
            </div>
        </BusinessOwnerDashboardLayout>
    );
}