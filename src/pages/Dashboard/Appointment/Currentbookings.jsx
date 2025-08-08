import moment from "moment";
import { Link } from "react-router-dom";
import RightDivAppointment from "./RightDivAppointment";
import { useState } from "react";
import {
  BookingDetailsModal,
  ChangeBookingDateTimeMOdal,
  ExtraMakepayment,
  ReshedulePaymenSuccessModal,
  ReviewandConfirmForReshedule,
  ShowQRModal,
  AppointmentCanceledSuccessModal,
  AcceptedNewAppoitmentDateSuccessModal,
  AddServiceDetailsModal,
  AddDateTimeModal,
  AddSelectTargetModal,
  AddSuccessModal,
  CalendarModal,
  TimeModal,
  SalonsLinstModal,
  CreatedNewAppointmentSuccessModal,
  AppointmentDeclineConfirmModal,
} from "../../../components/Modals/Modal";
import ClientDashboardLayout from "../../../components/DashbaordLayout/Client Dashbaord";
import { ProfessionalNeedHelpBookingDetailsModal } from "../../../components/Modals/ProfessionalNeedHelpModal";
import { MakePaymentModal } from "../../../components/Modals/MakePaymentModal";

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
  moment("2025-02-25"),
  moment("2025-02-26"),
  moment("2025-02-27"),
  moment("2025-02-28"),
];

const appointments = [
  {
    date: "2025-02-26",
    time: "10:30 AM",
    title: "Hair Cut",
    location: "At Omar Vaccaro Salon",
    price: "$46.00",
    endTime: "11:00 AM",
    modalstatus: "QR",
  },
  {
    date: "2025-02-27",
    time: "09:30 AM",
    title: "Hair Cut",
    location: "At Omar Vaccaro Salon",
    price: "$46.00",
    endTime: "10:00 AM",
    status: "Provider rescheduled their appointment",
    modalstatus: "rescheduled",
  },
  {
    date: "2025-02-28",
    time: "10:30 AM",
    title: "Hair Cut",
    location: "At Omar Vaccaro Salon",
    price: "$46.00",
    endTime: "11:00 AM",
    status: "Pending...",
    modalstatus: "pending",
  },
];

const routeMapping = {
  "Current bookings": "/dashboard/appointments/current-bookings",
  "Upcoming bookings": "/dashboard/appointments/upcoming-bookings",
  "Past bookings": "/dashboard/appointments/past-bookings",
  Cancellation: "/dashboard/appointments/cancellation-bookings",
  "Claim/Dispute": "/dashboard/appointments/claim/dispute-bookings",
};

export default function Currentbookings() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [isModalOpen3, setModalOpen3] = useState(false);
  const [isModalOpen4, setModalOpen4] = useState(false);
  const [isModalOpen5, setModalOpen5] = useState(false);
  const [isModalOpen6, setModalOpen6] = useState(false);
  const [isModalOpen7, setModalOpen7] = useState(false);
  const [isModalOpen8, setModalOpen8] = useState(false);
  const [isModalOpen9, setModalOpen9] = useState(false);
  const [isModalOpen10, setModalOpen10] = useState(false);
  const [isModalOpen11, setModalOpen11] = useState(false);
  const [isModalOpen12, setModalOpen12] = useState(false);
  const [isModalOpen13, setModalOpen13] = useState(false);
  const [isModalOpen14, setModalOpen14] = useState(false);
  const [isModalOpen15, setModalOpen15] = useState(false);
  const [isModalOpen16, setModalOpen16] = useState(false);
  const [isModalOpen17, setModalOpen17] = useState(false);
  const [isModalOpen18, setModalOpen18] = useState(false);

  const [bookingStatus, setBookingStatus] = useState("");

  const handlopensecond = () => {
    setModalOpen(false);
    setModalOpen1(true);
  };
  const handlopenThird = () => {
    setModalOpen1(false);
    setModalOpen2(true);
  };
  const handlbacksecond = () => {
    setModalOpen2(false);
    setModalOpen1(true);
  };
  const handlopenforth = () => {
    setModalOpen2(false);
    setModalOpen3(true);
  };
  const handlbackthird = () => {
    setModalOpen3(false);
    setModalOpen2(true);
  };

  const handlopenfivth = () => {
    setModalOpen3(false);
    setModalOpen4(true);
    setModalOpen6(false);
  };

  const handlopenQR = () => {
    setModalOpen5(true);
  };

  const handleOpenBookingdetails = (status) => {
    setModalOpen(true);
    setBookingStatus(status);
  };

  const handlopenpaymentype = () => {
    setModalOpen(false);
    setModalOpen6(true);
  };

  const handlebackthirdmodal = () => {
    setModalOpen6(false);
    setModalOpen(true);
  };

  const handleopenCanceledsuccessmodal = () => {
    setModalOpen7(true);
    setModalOpen(false);
    setModalOpen18(false);
  };

  const handleopenAcceptsuccessmodal = () => {
    setModalOpen8(true);
    setModalOpen(false);
  };

  const handleopenpostProjectmodal = () => {
    setModalOpen9(true);
    setModalOpen(false);
  };

  const handleStapThird = () => {
    setModalOpen9(false);
    setModalOpen10(true);
  };

  const handleBackStapsecond = () => {
    setModalOpen9(false);
    setModalOpen(true);
  };

  const handleStapForth = () => {
    setModalOpen10(false);
    setModalOpen11(true);
  };

  const handleBackStapThird = () => {
    setModalOpen10(false);
    setModalOpen9(true);
  };

  const handleStapFivth = () => {
    setModalOpen11(false);
    setModalOpen12(true);
  };

  const handleBackStapForth = () => {
    setModalOpen11(false);
    setModalOpen10(true);
  };

  const handleOpenNewdate = () => {
    setModalOpen(false);
    setModalOpen18(true);
  };

  const handleOpenNewdate1 = () => {
    setModalOpen18(false);
    setModalOpen13(true);
  };

  const handleOpenNewTime = () => {
    setModalOpen13(false);
    setModalOpen14(true);
  };

  const handleOpenSalonList = () => {
    setModalOpen14(false);
    setModalOpen15(true);
  };

  const handleOpenCreatenewappoitmentsuccess = () => {
    setModalOpen15(false);
    setModalOpen16(true);
  };

  const handleOpenNeedHelp = () => {
    setModalOpen(false);
    setModalOpen17(true);
  };

  const handlebacknhelp = () => {
    setModalOpen(true);
    setModalOpen17(false);
  };

  return (
    <ClientDashboardLayout title="Appointment Scheduling">
      <BookingDetailsModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        handlopensecond={handlopensecond}
        handlopenQR={handlopenQR}
        bookingStatus={bookingStatus}
        handlopenpaymentype={handlopenpaymentype}
        handleopenCanceledsuccessmodal={handleopenCanceledsuccessmodal}
        handleopenAcceptsuccessmodal={handleopenAcceptsuccessmodal}
        handleopenpostProjectmodal={handleopenpostProjectmodal}
        handleOpenNewdate={handleOpenNewdate}
        handleOpenNeedHelp={handleOpenNeedHelp}
      />
      <ChangeBookingDateTimeMOdal
        isOpen={isModalOpen1}
        onClose={() => setModalOpen1(false)}
        handlopenThird={handlopenThird}
      />
      <ReviewandConfirmForReshedule
        isOpen={isModalOpen2}
        onClose={() => setModalOpen2(false)}
        handlbacksecond={handlbacksecond}
        handlopenforth={handlopenforth}
      />
      <ExtraMakepayment
        isOpen={isModalOpen3}
        onClose={() => setModalOpen3(false)}
        handlbackthird={handlbackthird}
        handlopenfivth={handlopenfivth}
      />
      <ReshedulePaymenSuccessModal
        isOpen={isModalOpen4}
        onClose={() => setModalOpen4(false)}
        handlbackthird={handlbackthird}
      />
      <ShowQRModal isOpen={isModalOpen5} onClose={() => setModalOpen5(false)} />
      <MakePaymentModal
        isOpen={isModalOpen6}
        onClose={() => setModalOpen6(false)}
        handleBack={handlebackthirdmodal}
        onPay={handlopenfivth}
      />

      <AppointmentCanceledSuccessModal
        isOpen={isModalOpen7}
        onClose={() => setModalOpen7(false)}
      />
      <AcceptedNewAppoitmentDateSuccessModal
        isOpen={isModalOpen8}
        onClose={() => setModalOpen8(false)}
      />
      <AddServiceDetailsModal
        isOpen={isModalOpen9}
        onClose={() => setModalOpen9(false)}
        handleBackStapsecond={handleBackStapsecond}
        handleStapThird={handleStapThird}
      />
      <AddDateTimeModal
        isOpen={isModalOpen10}
        onClose={() => setModalOpen10(false)}
        handleBackStapThird={handleBackStapThird}
        handleStapForth={handleStapForth}
      />
      <AddSelectTargetModal
        isOpen={isModalOpen11}
        onClose={() => setModalOpen11(false)}
        handleBackStapForth={handleBackStapForth}
        handleStapFivth={handleStapFivth}
      />
      <AddSuccessModal
        isOpen={isModalOpen12}
        onClose={() => setModalOpen12(false)}
      />
      <CalendarModal
        isOpen={isModalOpen13}
        onClose={() => setModalOpen13(false)}
        handleOpenNewTime={handleOpenNewTime}
      />
      <TimeModal
        isOpen={isModalOpen14}
        onClose={() => setModalOpen14(false)}
        handleOpenSalonList={handleOpenSalonList}
      />
      <SalonsLinstModal
        isOpen={isModalOpen15}
        onClose={() => setModalOpen15(false)}
        handleOpenCreatenewappoitmentsuccess={
          handleOpenCreatenewappoitmentsuccess
        }
      />
      <CreatedNewAppointmentSuccessModal
        isOpen={isModalOpen16}
        onClose={() => setModalOpen16(false)}
      />
      <ProfessionalNeedHelpBookingDetailsModal
        isOpen={isModalOpen17}
        onClose={() => setModalOpen17(false)}
        handleBack={handlebacknhelp}
      />
      <AppointmentDeclineConfirmModal
        isOpen={isModalOpen18}
        onClose={() => setModalOpen18(false)}
        handleOpenNewdate1={handleOpenNewdate1}
        handleopenCanceledsuccessmodal={handleopenCanceledsuccessmodal}
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
                    item === "Current bookings"
                      ? "bg-[#123E41] text-[#FAF9F6] border-2 border-[#FAF9F6]"
                      : "text-[#2F2F2F] border-2 border-[#2F2F2F]"
                  }`}
                  style={{
                    border: "1px solid red",
                    borderColor:
                      item === "Current bookings" ? "#FAF9F6" : "#2F2F2F",
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
                              onClick={() =>
                                handleOpenBookingdetails(
                                  appointment.modalstatus
                                )
                              }
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
