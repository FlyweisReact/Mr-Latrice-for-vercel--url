import { Link } from "react-router-dom";
import RightDivAppointment from "./RightDivAppointment";
import img from "../../../assets/images/dashboard/img71.jpg";
import img1 from "../../../assets/images/dashboard/img29.png";

import { useState } from "react";
import {
  ClaimBookingModal,
  ClaimBookingSuccessModal,
} from "../../../components/Modals/Modal";
import { DisputeDetailsModal } from "../../../components/Modals/DisputeDetailsModal";
import BusinessOwnerDashboardLayout from "../../../components/DashbaordLayout/Business Owner";

import { TiArrowSortedDown } from "react-icons/ti";
import { FaPlus, FaFlag } from "react-icons/fa";

import img2 from "../../../assets/images/dashboard/img113.png";

const appointments = [
  {
    title: "(specialty haircut) skin Fade/textured cuts",
    shopName: "Luxx Barber Shop",
    shopImg: img,
    dayLabel: "Today",
    date: "26",
    time: "10:30 AM",
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

export default function BusinessClaimDispute() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [reason, setReason] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Customer Bookings");
  const [showflaghistory, setShowFlagHistory] = useState(false);
  const [isDisputeDetailsOpen, setDisputeDetailsOpen] = useState(false);

  const locations = ["Customer Bookings", "Personal Bookings"];

  const handlopensecond = () => {
    setModalOpen(false);
    setModalOpen1(true);
    setReason(true);
  };

  const handleShowFlagHistory = () => {
    setShowFlagHistory(!showflaghistory);
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
            <div className="absolute mt-2 z-10 sm:w-[240px] w-[200px] bg-[#FAF9F6] border border-[#2F2F2F] rounded-[10px]">
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
      <ClaimBookingModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        handlopensecond={handlopensecond}
      />
      <ClaimBookingSuccessModal
        isOpen={isModalOpen1}
        onClose={() => setModalOpen1(false)}
      />
      <DisputeDetailsModal
        isOpen={isDisputeDetailsOpen}
        onClose={() => setDisputeDetailsOpen(false)}
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
                    item === "Claim/Dispute"
                      ? "bg-[#123E41] text-[#FAF9F6] border-2 border-[#FAF9F6]"
                      : "text-[#2F2F2F] border-2 border-[#2F2F2F]"
                  }`}
                  style={{
                    border: "1px solid red",
                    borderColor:
                      item === "Claim/Dispute" ? "#FAF9F6" : "#2F2F2F",
                  }}
                >
                  {item}
                </button>
              </Link>
            ))}
          </div>

          <div className="min-h-screen mt-5 bg-[#FFFFFF] shadow-[0px_8.81px_52.86px_0px_#0000001A] w-full m-auto px-3 py-3 space-y-4">
            <h6 className="font-rasa font-[700] sm:text-[18px] text-[15px] text-[#2F2F2F] leading-[18.95px] tracking-[0.018em] align-middle uppercase">
              Report any service issue so our support team can review the
              details and work toward a quick resolution.
            </h6>
            <div className="flex flex-col gap-2 bg-[#FAF9F6] border border-[#2F2F2F33] rounded-[10px] px-5 py-5 w-full">
              <div className="flex justify-between items-center sm:w-[80%] w-full">
                <div className="flex items-center gap-2">
                  <img src={img2} alt="" className="w-9 h-9 object-cover" />
                  <h6 className="font-rasa font-bold text-[16px] sm:text-[18px] text-[#121111] leading-[18px] flex items-center gap-1">
                    Flag History
                    <FaPlus
                      size={12}
                      onClick={handleShowFlagHistory}
                      className={`cursor-pointer transform transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </h6>
                </div>
                <div>
                  <h6 className="font-rasa font-bold text-[16px] sm:text-[18px] text-[#121111] leading-[18px]">
                    Count(s): 1
                  </h6>
                </div>
              </div>
              {showflaghistory && (
                <div className="flex justify-between items-center  m:w-[70%] w-full pt-2">
                  <ul className="list-disc pl-5">
                    <li className="font-rasa font-bold text-[16px] sm:text-[18px] text-[#121111] leading-[18px] align-middle">
                      Mar 21, 2025
                    </li>
                  </ul>
                  <div className="flex gap-2">
                    <div className="border border-[#2F2F2F]!important px-2.5 py-1.5 font-rasa font-bold text-[16px] sm:text-[18px] text-[#121111] leading-[18px] flex items-center gap-1 hover:bg-gray-100">
                      View Reasons
                    </div>
                    <div className="border border-[##2F2F2F] px-3 py-1 font-rasa font-bold text-[16px] sm:text-[18px] text-[#121111] leading-[18px] flex items-center gap-1 hover:bg-gray-100">
                      Appeal
                    </div>
                  </div>
                </div>
              )}
            </div>

            {appointments.map((a, idx) => (
              <div
                key={idx}
                className="flex flex-wrap justify-between items-center bg-[#FAF9F6] border border-[#2F2F2F33] rounded-[10px] cancelbookings"
              >
                {/* Left side */}
                <div className="px-4">
                  <div className="flex gap-3 mb-2 pt-4">
                    <img
                      src={a.shopImg}
                      alt={a.shopName}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div className="space-y-0.5">
                      <p className="font-[600] sm:text-[18px] text-[15px] text-[#121111]">
                        Late Cancel by Provider - Ongoing
                      </p>
                      <p className="font-[600] sm:text-[18px] text-[15px] text-[#121111]">
                        Client: Jasmine M.
                      </p>
                      <p className="font-[600] sm:text-[18px] text-[15px] text-[#121111]">
                        Apr 10, 2025 - 1:00 PM
                      </p>
                      <p className="font-[600] sm:text-[18px] text-[15px] text-[#121111]">
                        Loc Retwist - $70
                      </p>
                      <p className="font-[600] sm:text-[18px] text-[15px] text-[#121111]">
                        Under Review by Latrice Team
                      </p>
                      <p className="font-[600] sm:text-[18px] text-[15px] text-[#121111] flex items-center justify-between">
                        Distance: 2.3 miles
                        <img
                          src={img1}
                          alt=""
                          className="w-9 h-9  object-cover"
                        />
                      </p>
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="flex gap-3 mt-4 flex-wrap pb-4">
                    <button
                      className="bg-[#FFE6D8] text-[#FF827F] text-sm font-semibold px-4 py-2 rounded-[6px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5]"
                      onClick={() => setDisputeDetailsOpen(true)}
                    >
                      View Details
                    </button>
                    <button
                      className="bg-[#FFE6D8] text-[#FF827F] text-sm font-semibold px-4 py-2 rounded-[6px] shadow-[0px_4px_4px_0px_#00000040]"
                      onClick={() => setModalOpen(true)}
                    >
                      {reason
                        ? "View Uploaded Reason"
                        : "Submit Reason - 3 days left"}
                    </button>
                  </div>
                </div>

                {/* Right side */}
                <div className="border-l border-[#2F2F2F33] h-auto px-10 sm:py-15 py-4 rounded-tl-[10px] rounded-bl-[10px] flex sm:flex-col flex-row gap-3 sm:gap-0 items-center justify-center">
                  <p className="font-[500] sm:text-[16px] text-[15px] text-[#121111">
                    {reason ? "Resolved" : "Ongoing"}
                  </p>
                  <p className="font-[400] sm:text-[30px] text-[15px] text-[#121111">
                    {reason ? "May 26, 25" : a.date}
                  </p>
                  <p className="font-[500] sm:text-[16px] text-[15px] text-[#121111">
                    {a.time}
                  </p>
                  {reason && (
                    <p className="font-[500] sm:text-[16px] text-[15px] text-[#121111">
                      Dispute Closed
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Blocked Clients */}
            <div className="flex flex-col gap-2 bg-[#FAF9F6] border border-[#2F2F2F33] rounded-[10px] px-5 py-5 w-full">
              <button className="border! border-gray-500 rounded-md px-2 py-0.5 font-semibold w-fit mb-2 text-lg">
                Blocked Clients
              </button>
              <ul className="pl-4">
                {[{ name: "Dominque Artina" }, { name: "Cecilia Maroon" }].map(
                  (client, index) => (
                    <li
                      key={index}
                      className="mb-2 relative pl-6 flex items-center justify-between"
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 size-1.5 bg-black rounded-full"></div>
                      <span className="font-semibold">{client.name}</span>
                      <button className="border! text-red-500 border-red-500 rounded-md px-3 py-1 font-semibold ml-4">
                        Unblock
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:w-fit w-full sm:max-w-1/3">
          <RightDivAppointment />
        </div>
      </div>
    </BusinessOwnerDashboardLayout>
  );
}
