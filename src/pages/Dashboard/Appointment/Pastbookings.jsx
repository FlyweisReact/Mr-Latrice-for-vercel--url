import moment from "moment";
import { Link } from "react-router-dom";
import RightDivAppointment from "./RightDivAppointment";
import { useState } from "react";
import {
  PastBookingDetailsModal,
  BussinessVerificationAppointmentwModal,
  PastBookingReviewSuccessModal,
} from "../../../components/Modals/Modal";
import ClientDashboardLayout from "../../../components/DashbaordLayout/Client Dashbaord";
import { ClientRateAppointmentModal } from "../../../components/Modals/ClientRateAppointmentModal";

const times = [
  "08:30 AM",
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
];

// ✅ 7 days (1 week) dynamically generated
const startDate = moment("2025-01-28");
const dates = Array.from({ length: 7 }, (_, i) =>
  moment(startDate).add(i, "days")
);

const appointments = [
  {
    date: "2025-01-28",
    time: "08:30 AM",
    title: "Hair Cut",
    location: "At Omar Vaccaro Salon",
    price: "$46.00",
    endTime: "09:00 AM",
  },
];

const routeMapping = {
  "Current bookings": "/dashboard/appointments/current-bookings",
  "Upcoming bookings": "/dashboard/appointments/upcoming-bookings",
  "Past bookings": "/dashboard/appointments/past-bookings",
  Cancellation: "/dashboard/appointments/cancellation-bookings",
  "Claim/Dispute": "/dashboard/appointments/claim/dispute-bookings",
};

export default function Pastbookings() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [isModalOpen3, setModalOpen3] = useState(false);

  const handlopensecond = () => {
    setModalOpen(false);
    setModalOpen1(true);
  };
  const handlbackfirst = () => {
    setModalOpen1(false);
    setModalOpen(true);
  };
  const handlopenThird = () => {
    setModalOpen1(false);
    setModalOpen3(true);
  };
  const handlbacksecond = () => {
    setModalOpen1(true);
    setModalOpen3(false);
  };
  const handlopenforth = () => {
    setModalOpen3(false);
    setModalOpen2(true);
  };

  return (
    <ClientDashboardLayout title="Appointment Scheduling">
      <PastBookingDetailsModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        handlopensecond={handlopensecond}
      />
      <BussinessVerificationAppointmentwModal
        isOpen={isModalOpen1}
        onClose={() => setModalOpen1(false)}
        handlbackfirst={handlbackfirst}
        handlopenThird={handlopenThird}
      />
      <ClientRateAppointmentModal
        isOpen={isModalOpen3}
        onClose={() => setModalOpen3(false)}
        handleBack={handlbacksecond}
        onSubmit={handlopenforth}
      />
      <PastBookingReviewSuccessModal
        isOpen={isModalOpen2}
        onClose={() => setModalOpen2(false)}
      />

      <div className="flex flex-col lg:flex-row w-full gap-4 max-w-full">
        {/* Main Table Section */}
        <div className="flex-1 overflow-x-auto lg:max-w-[calc(100%-400px)]">
          {/* Tabs */}
          <div className="flex flex-wrap w-full justify-center sm:justify-between gap-2 sm:gap-1 mb-3">
            {Object.keys(routeMapping).map((item, index) => (
              <Link key={index} to={routeMapping[item]}>
                <button
                  className={`p-2 sm:px-6 text-[16px] sm:text-[20px] font-medium font-rasa rounded-[10px] border transition-all duration-200 ${
                    item === "Past bookings"
                      ? "bg-[#123E41] text-[#FAF9F6] border-2 border-[#FAF9F6]"
                      : "text-[#2F2F2F] border-2 border-[#2F2F2F]"
                  }`}
                  style={{
                    borderColor:
                      item === "Past bookings" ? "#FAF9F6" : "#2F2F2F",
                  }}
                >
                  {item}
                </button>
              </Link>
            ))}
          </div>

          {/* Scrollable Table */}
          <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <table className="w-full table-auto border-collapse lg:min-w-0">
              <thead className="bg-[#123E41]">
                <tr>
                  <th className="font-[700] font-rasa text-[15px] sm:text-[18px] text-[#FAF9F6] p-2 rounded-tl-2xl sticky left-0 bg-[#123E41] z-10 min-w-[80px]">
                    TIME
                  </th>
                  {dates.map((date, i) => (
                    <th
                      key={i}
                      className="font-[700] font-rasa text-[15px] sm:text-[18px] text-[#FAF9F6] p-2 whitespace-nowrap min-w-[100px]"
                    >
                      {date.format("MMM DD YYYY")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {times.map((time, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="border border-[#A8A8A84D] text-center text-[16px] py-2 font-rasa font-[400] text-[#464646] sticky left-0 bg-white z-10 min-w-[80px]">
                      {time}
                    </td>
                    {dates.map((date, colIndex) => {
                      const appointment = appointments.find(
                        (appt) =>
                          appt.date === date.format("YYYY-MM-DD") &&
                          appt.time === time
                      );
                      const borderColors = [
                        "#123E41",
                        "#FF827F",
                        "#FFCC4E",
                        "#123E41",
                        "#2F4858",
                        "#F39C12",
                        "#27AE60",
                      ];
                      const borderColor =
                        borderColors[colIndex % borderColors.length];

                      return (
                        <td
                          key={colIndex}
                          className="border border-[#A8A8A84D] h-20 min-w-[100px]"
                        >
                          {appointment ? (
                            <div
                              className="p-2 h-full cursor-pointer"
                              style={{ borderLeft: `4px solid ${borderColor}` }}
                              onClick={() => setModalOpen(true)}
                            >
                              <h6 className="font-[500] font-rasa text-[15px] sm:text-[18px] text-charcoal">
                                {appointment.title}
                              </h6>
                              <div className="font-[500] font-rasa text-[14px] sm:text-[16px] text-charcoal">
                                {appointment.location}
                              </div>
                              <div className="font-[400] font-rasa text-[13px] text-charcoal">
                                {appointment.price}
                              </div>
                              <div className="font-[400] font-rasa text-[12px] text-[#00000080]">
                                {appointment.time} to {appointment.endTime}
                              </div>
                            </div>
                          ) : (
                            <div
                              className="w-full h-full"
                              style={{ borderLeft: `4px solid ${borderColor}` }}
                            ></div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-[280px] w-full sm:max-w-[280px] flex-shrink-0">
          <RightDivAppointment appointments={appointments} />
        </div>
      </div>
    </ClientDashboardLayout>
  );
}