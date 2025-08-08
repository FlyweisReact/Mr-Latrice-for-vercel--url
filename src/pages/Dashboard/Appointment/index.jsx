import DashboardLayout from "../../../components/DashbaordLayout";
import AppointMentshowing from "./AppointMentshowing";
import AppointMentCalendar from "./AppointMentCalendar";
import AppointMentTime from "./AppointMentTime";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";






export default function AppointmentsPage() {
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

  const routeMapping = {
    'Current bookings': "/dashboard/appointments",
    'Upcoming bookings': "/dashboard/know-more/privacy-policy",
    "Past bookings": "/dashboard/know-more/terms-of-service",
    'Cancellation': "/dashboard/know-more/contact-us",
    'Claim/Dispute': "/dashboard/know-more/cookies",
  };

  return (
    <DashboardLayout title="Appointment Scheduling"
    >
      {/* Tabs */}

      <div className="flex gap-2 flex-wrap">
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap w-full overflow-hidden justify-center sm:justify-between gap-1 sm:gap-0">
            {['Current bookings', 'Upcoming bookings', 'Past bookings', 'Cancellation', 'Claim/Dispute'].map((item, index) => (
              <Link key={index} to={routeMapping[item]}>
                <button
                  className={`p-2 sm:px-7 text-[16px] sm:text-[20px] font-medium font-rasa rounded-[10px] border transition-all duration-200 ${item === 'Current bookings'
                    ? 'bg-[#123E41] text-[#FAF9F6] border-2 border-[#FAF9F6]'
                    : 'text-[#2F2F2F] border-2 border-[#2F2F2F]'
                    }`}
                  style={{
                    border: "1px solid red",
                    borderColor: item === 'Current bookings' ? '#FAF9F6' : '#2F2F2F',
                  }}
                >
                  {item}
                </button>
              </Link>
            ))}
          </div>
          <AppointMentshowing />
        </div>
        <div className="">
          <AppointMentCalendar />
          <AppointMentTime />
          <div className="current-time">
            <h5>Current Time:</h5>
            <h6>{currentTime}</h6>
          </div>
        </div>
      </div>


    </DashboardLayout>
  );
}