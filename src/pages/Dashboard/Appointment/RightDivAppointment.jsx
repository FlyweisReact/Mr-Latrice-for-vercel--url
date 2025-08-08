import AppointMentCalendar from "./AppointMentCalendar";
import AppointMentTime from "./AppointMentTime";
import { useEffect, useState } from "react";






export default function RightDivAppointment() {
    const [currentTime, setCurrentTime] = useState(getFormattedTime());


    function getFormattedTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${ampm}`;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getFormattedTime());
        }, 1000); // update every second

        return () => clearInterval(interval); // cleanup
    }, []);

    return (
        <div className="space-y-2">
            <div className="bg-[#2F2F2F] rounded-[8px]">
                <AppointMentCalendar />
            </div>
            <AppointMentTime />
            <div className="current-time">
                <h5>Current Time:</h5>
                <h6>{currentTime}</h6>
            </div>
        </div>
    );
}