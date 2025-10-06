import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import moment from 'moment';
import { ConnectCalendarModal } from "../../../components/Modals/ConnectCalendarModal";
import { ImportBookingsModal } from "../../../components/Modals/ImportBookingsModal";

const RightDivAppointment = ({ appointments = [], importedAppointments = [] }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 1, 1));
  const [isImportModalOpen, setImportModalOpen] = useState(false);
  const [isConnectCalendarModalOpen, setConnectCalendarModalOpen] = useState(false);

  // Debug prop values
  console.log('Appointments:', appointments);
  console.log('ImportedAppointments:', importedAppointments);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const renderCalendar = (events, highlightColor) => {
    const days = [];
    const totalCells = Math.ceil((daysInMonth + startingDayOfWeek) / 7) * 7;

    for (let i = 0; i < totalCells; i++) {
      const dayNumber = i - startingDayOfWeek + 1;
      const isValidDay = dayNumber > 0 && dayNumber <= daysInMonth;
      const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayNumber);
      const dayStr = moment(dayDate).format("YYYY-MM-DD");
      const isHighlighted = Array.isArray(events) && events.some(e => e && e.date === dayStr);

      days.push(
        <div
          key={i}
          className={`flex items-center justify-center h-8 text-sm font-medium ${isValidDay ? 'text-white' : ''} ${isHighlighted ? `bg-${highlightColor} rounded-full` : ''}`}
        >
          {isValidDay ? dayNumber : ''}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="w-full max-w-[280px] space-y-4">
      <div className="bg-[#2F3333] rounded-2xl p-4">
        <h3 className="text-white font-medium text-base mb-2">Latrice Calendar</h3>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigateMonth(-1)}
            className="text-white hover:bg-[#3F4343] rounded p-1"
          >
            <ChevronLeft size={20} />
          </button>
          <h3 className="text-white font-medium text-base">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button
            onClick={() => navigateMonth(1)}
            className="text-white hover:bg-[#3F4343] rounded p-1"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-2">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
            <div
              key={day}
              className="text-[#888888] text-[10px] font-medium text-center"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 mb-4">{renderCalendar(appointments, 'red-400')}</div>
      </div>
      <div className="">
        <div className="">
          <button className="w-full bg-[#FF827F] text-white py-3 rounded-t-xl font-medium text-sm hover:bg-[#FF6F6C] transition-colors">
            Import All Your Appointment
          </button>
        </div>
        <div className="bg-[#2F3333] rounded-b-2xl p-4">
          <h3 className="text-white font-medium text-base mb-2">Imported Calendar</h3>
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigateMonth(-1)}
              className="text-white hover:bg-[#3F4343] rounded p-1"
            >
              <ChevronLeft size={20} />
            </button>
            <h3 className="text-white font-medium text-base">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <button
              onClick={() => navigateMonth(1)}
              className="text-white hover:bg-[#3F4343] rounded p-1"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 mb-2">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
              <div
                key={day}
                className="text-[#888888] text-[10px] font-medium text-center"
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {renderCalendar(importedAppointments, 'blue-400')}
          </div>
          <div className="space-y-3">
            <button
              className="w-full bg-[#FFE6D8] text-[#FF5534] py-3 rounded-lg font-medium text-sm hover:bg-[#FFB89A] transition-colors"
              onClick={() => setImportModalOpen(true)}
            >
              Import Bookings
            </button>
            <button
              className="w-full bg-[#FFE6D8] text-[#FF5534] py-3 rounded-lg font-medium text-sm hover:bg-[#FFB89A] transition-colors"
              onClick={() => setConnectCalendarModalOpen(true)}
            >
              Connect A Calendar
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#2F3333] rounded-2xl p-4">
        <h5 className="text-white font-medium mb-4">Upcoming Appointments</h5>
        <ul className="space-y-3">
          {Array.isArray(appointments) && appointments.length > 0 ? (
            appointments
              .filter((appt) => new Date(appt.date + ' ' + appt.time) > new Date())
              .sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + a.time))
              .map((appt, idx) => (
                <li key={idx} className="text-white text-sm font-medium">
                  {appt.time} · {appt.title} – {appt.client} (with {appt.stylist})
                </li>
              ))
          ) : (
            <li className="text-white text-sm font-medium">No upcoming appointments</li>
          )}
        </ul>
      </div>
      <ImportBookingsModal
        isOpen={isImportModalOpen}
        onClose={() => setImportModalOpen(false)}
      />
      <ConnectCalendarModal
        isOpen={isConnectCalendarModalOpen}
        onClose={() => setConnectCalendarModalOpen(false)}
      />
    </div>
  );
};

export default RightDivAppointment;