import { useEffect, useState } from "react";
import AppointMentCalendar from "./AppointMentCalendar";
import AppointMentTime from "./AppointMentTime";
import { ImportBookingsModal } from "../../../components/Modals/ImportBookingsModal";
import { ConnectCalendarModal } from "../../../components/Modals/ConnectCalendarModal";

export default function RightDivAppointment() {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());
  const [isImportModalOpen, setImportModalOpen] = useState(false);
  const [isConnectCalendarModalOpen, setConnectCalendarModalOpen] =
    useState(false);

  function getFormattedTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )} ${ampm}`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000); // update every second

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <>
      <div className="space-y-2">
        <div className="bg-[#2F2F2F] rounded-[8px]">
          <AppointMentCalendar />
        </div>
        <div className="bg-[#2F2F2F] rounded-[8px]">
          <div className="bg-[#FF827F] p-[8px] rounded-tl-[8px] rounded-tr-[8px]">
            <h6 className="font-roboto font-medium text-[14px] leading-[138%] tracking-normal text-center align-middle [font-variant-numeric:lining-nums tabular-nums] text-[#2F2F2F]">
              Import All Your Appointment
            </h6>
          </div>
          <AppointMentCalendar />
          <div className="space-y-2 pb-3 w-[80%] m-auto">
            <button
              className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-2  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
              onClick={() => setImportModalOpen(true)}
            >
              Import Bookings
            </button>
            <button
              className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-2  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
              onClick={() => setConnectCalendarModalOpen(true)}
            >
              Connect A Calendar
            </button>
          </div>
        </div>
        <div className="current-time">
          <h5>Current Time:</h5>
          <h6>{currentTime}</h6>
        </div>
      </div>
      <ImportBookingsModal
        isOpen={isImportModalOpen}
        onClose={() => setImportModalOpen(false)}
      />
      <ConnectCalendarModal
        isOpen={isConnectCalendarModalOpen}
        onClose={() => setConnectCalendarModalOpen(false)}
      />
    </>
  );
}
