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

const dates = [
  moment("2025-01-28"),
  moment("2025-01-29"),
  moment("2025-01-30"),
  moment("2025-01-31"),
];

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
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <div className="flex-1 overflow-auto">
          {/* Tabs */}
          <div className="flex flex-wrap w-full overflow-hidden justify-center sm:justify-between gap-2 sm:gap-1 mb-3">
            {[
              "Current bookings",
              "Upcoming bookings",
              "Past bookings",
              "Cancellation",
              "Claim/Dispute",
            ].map((item, index) => (
              <Link key={index} to={routeMapping[item]}>
                <button
                  className={`p-2 sm:px-6 text-[16px] sm:text-[20px] font-medium font-rasa rounded-[10px] border transition-all duration-200 ${
                    item === "Past bookings"
                      ? "bg-[#123E41] text-[#FAF9F6] border-2 border-[#FAF9F6]"
                      : "text-[#2F2F2F] border-2 border-[#2F2F2F]"
                  }`}
                  style={{
                    border: "1px solid red",
                    borderColor:
                      item === "Past bookings" ? "#FAF9F6" : "#2F2F2F",
                  }}
                >
                  {item}
                </button>
              </Link>
            ))}
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
              <thead className="bg-[#123E41]">
                <tr>
                  <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2 rounded-tl-2xl">
                    TIME
                  </th>
                  {dates.map((date, i) => (
                    <th
                      key={i}
                      className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2 last:rounded-tr-2xl"
                    >
                      {date.format("MMM DD YYYY")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white shadow">
                {times.map((time, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="border-b-1 border-[#A8A8A84D] font-rasa text-[#464646] font-[400] text-center text-[18px] py-2">
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
                      ];
                      const borderColor =
                        borderColors[colIndex % borderColors.length];

                      return (
                        <td
                          key={colIndex}
                          className="border border-[#A8A8A84D] h-20  relative"
                        >
                          {appointment ? (
                            <div
                              className="p-2 h-full cursor-pointer"
                              style={{ borderLeft: `4px solid ${borderColor}` }}
                              onClick={() => setModalOpen(true)}
                            >
                              <h6 className="font-[500] font-rasa sm:text-[18px] text-[15px] text-charcoal">
                                {appointment.title}
                              </h6>
                              <div className="font-[500] font-rasa sm:text-[18px] text-[15px] text-charcoal">
                                {appointment.location}
                              </div>
                              <div className="font-[400] font-rasa sm:text-[15px] text-[12px] text-charcoal">
                                {appointment.price}
                              </div>
                              <div className="font-[400] font-rasa sm:text-[12px] text-[10px] text-[#00000080]">
                                {appointment.time} to {appointment.endTime}
                                {appointment.status && (
                                  <span> ({appointment.status})</span>
                                )}
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
        <div className="lg:w-fit w-full sm:max-w-1/3">
          <RightDivAppointment />
        </div>
      </div>
    </ClientDashboardLayout>
  );
}
