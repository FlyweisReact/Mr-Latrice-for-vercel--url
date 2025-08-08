import { Link } from "react-router-dom";
import RightDivAppointment from "./RightDivAppointment";
import img from "../../../assets/images/dashboard/img28.jpg";
import {
  BussinessChangeBookingDateTimeMOdal,
  BussinessResheduleSuccessModal,
} from "../../../components/Modals/Modal";
import { useState } from "react";
import BusinessOwnerDashboardLayout from "../../../components/DashbaordLayout/Business Owner";
import { TiArrowSortedDown } from "react-icons/ti";
import { ProfessionalBookingDetailsModal } from "../../../components/Modals/ProfessionalBookingDetailsModal";

const data = [
  {
    photo: img, // Replace with actual image
    name: "Giana Carder",
    service: "Locs & Natural",
    date: "03/24/2025",
    time: "10:30 AM To 11:00 AM",
    price: "$300.00",
    staff: "Lydia",
  },
];

const routeMapping = {
  "Current bookings": "/business-owner/dashboard/appointments/current-bookings",
  "Upcoming bookings":
    "/business-owner/dashboard/appointments/upcoming-bookings",
  "Past bookings": "/business-owner/dashboard/appointments/past-bookings",
  "Claim/Dispute":
    "/business-owner/dashboard/appointments/claim/dispute-bookings",
};

export default function BusinessUpcomingbookings() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Customer Bookings");

  const locations = ["Customer Bookings", "Personal Bookings"];

  const handlopensecond = () => {
    setModalOpen(false);
    setModalOpen1(true);
  };
  const handlopenThird = () => {
    setModalOpen1(false);
    setModalOpen2(true);
  };

  return (
    <BusinessOwnerDashboardLayout
      title="Appointment Scheduling"
      gpnumber="8"
      titleAction={
        <div className="relative inline-block text-center border border-[#2F2F2F] bg-[#FAF9F6] rounded-[10px]">
          {/* Selected location and icon */}
          <div
            className="flex items-center gap-1 cursor-pointer px-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="font-rasa font-[600] sm:text-[28px] text-[20px] text-[#2F2F2F]">
              {selectedLocation}
            </p>
            <TiArrowSortedDown
              size={20}
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              color="#2F2F2F"
            />
          </div>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute mt-2 z-10 w-[240px] bg-[#FAF9F6] border border-[#2F2F2F] rounded-[10px]">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="px-2  font-rasa font-[600] sm:text-[28px] text-[20px] text-[#2F2F2F] cursor-pointer"
                  onClick={() => {
                    setSelectedLocation(location);
                    setIsOpen(false);
                  }}
                >
                  {location}
                </div>
              ))}
            </div>
          )}
        </div>
      }
    >
      <ProfessionalBookingDetailsModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        handleOpenSecond={handlopensecond}
        showBlockOption={selectedLocation === "Customer Bookings"}
      />
      <BussinessChangeBookingDateTimeMOdal
        isOpen={isModalOpen1}
        onClose={() => setModalOpen1(false)}
        handlopenThird={handlopenThird}
      />
      <BussinessResheduleSuccessModal
        isOpen={isModalOpen2}
        onClose={() => setModalOpen2(false)}
      />
      <div className="flex flex-col lg:flex-row w-full gap-4 mt-4">
        <div className="flex-1 overflow-auto">
          {/* Tabs */}
          <div className="flex flex-wrap w-full overflow-hidden justify-center sm:justify-between gap-2 sm:gap-1 mb-3">
            {[
              "Current bookings",
              "Upcoming bookings",
              "Past bookings",
              "Claim/Dispute",
            ].map((item, index) => (
              <Link key={index} to={routeMapping[item]}>
                <button
                  className={`p-2 sm:px-6 text-[16px] sm:text-[20px] font-medium font-rasa rounded-[10px] border transition-all duration-200 ${
                    item === "Upcoming bookings"
                      ? "bg-[#123E41] text-[#FAF9F6] border-2 border-[#FAF9F6]"
                      : "text-[#2F2F2F] border-2 border-[#2F2F2F]"
                  }`}
                  style={{
                    border: "1px solid red",
                    borderColor:
                      item === "Upcoming bookings" ? "#FAF9F6" : "#2F2F2F",
                  }}
                >
                  {item}
                </button>
              </Link>
            ))}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="">
                <tr className="bg-[#123E41]">
                  <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2 rounded-tl-2xl">
                    CLIENT PHOTO
                  </th>
                  <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2">
                    Client NAME
                  </th>
                  <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2">
                    SERVICE
                  </th>
                  <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2">
                    DATE
                  </th>
                  <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2">
                    TIME
                  </th>
                  <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2">
                    PRICE
                  </th>
                  <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2 rounded-tr-2xl">
                    STAFF
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => (
                  <tr key={idx} className="bg-white">
                    <td
                      className="p-2 border border-[#A8A8A84D] cursor-pointer"
                      onClick={() => setModalOpen(true)}
                    >
                      <img
                        src={item.photo}
                        alt="Provider"
                        className="w-20 h-20 object-fit rounded"
                      />
                    </td>
                    <td className="font-[700] font-rasa sm:text-[17px] text-[15px] text-[#464646] text-center border border-[#A8A8A84D]">
                      {item.name}
                    </td>
                    <td className="font-[700] font-rasa sm:text-[17px] text-[15px] text-[#464646] text-center border border-[#A8A8A84D]">
                      {item.service}
                    </td>
                    <td className="font-[700] font-rasa sm:text-[17px] text-[15px] text-[#464646] text-center border border-[#A8A8A84D]">
                      {item.date}
                    </td>
                    <td className="font-[700] font-rasa sm:text-[17px] text-[15px] text-[#464646] text-center border border-[#A8A8A84D]">
                      {item.time}
                    </td>
                    <td className="font-[700] font-rasa sm:text-[17px] text-[15px] text-[#464646] text-center border border-[#A8A8A84D]">
                      {item.price}
                    </td>
                    <td className="font-[700] font-rasa sm:text-[17px] text-[15px] text-[#464646] text-center border border-[#A8A8A84D]">
                      {item.staff}
                    </td>
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
    </BusinessOwnerDashboardLayout>
  );
}
