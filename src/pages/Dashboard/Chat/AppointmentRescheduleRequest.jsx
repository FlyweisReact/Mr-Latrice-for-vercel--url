import { useState } from "react";
import { RiInformationFill } from "react-icons/ri";
import {
  ChatOfferAcceptSuccessModal,
  ChatRejectOfferSuccessModal,
} from "../../../components/Modals/Modal";
import { AnotherMatchesModal } from "../../../components/Modals/AnotherMatchesModal";
import { PostToBasketModal } from "../../../components/Modals/PostToBasketModal";

export function AppointmentRescheduleRequest(user) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen4, setModalOpen4] = useState(false);
  const [isAnotherMatchOpen, setAnotherMatchOpen] = useState(false);
  const [isPostToBasketOpen, setPostToBasketOpen] = useState(false);

  // Demo data for matches
  const matches = [
    {
      name: "Bri's Hair Studio",
      duration: "2h 45m",
      price: "$75",
      distance: "3.0 miles",
      icon: "/car-icon.png", // Replace with actual icon path if needed
      rating: 4.8,
      reviews: 64,
      image: "/profile1.jpg", // Replace with actual image path
    },
    {
      name: "Emily Styles",
      duration: "2h 15m",
      price: "$80",
      distance: "2.3 miles",
      icon: "/car-icon.png",
      rating: 4.9,
      reviews: 112,
      image: "/profile2.jpg",
    },
    {
      name: "Luxe Braids by Amira",
      duration: "3h",
      price: "$90",
      distance: "1.8 miles",
      icon: "/car-icon.png",
      rating: 4.7,
      reviews: 86,
      image: "/profile3.jpg",
    },
  ];

  return (
    <>
      <ChatOfferAcceptSuccessModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
      <ChatRejectOfferSuccessModal
        isOpen={isModalOpen4}
        onClose={() => setModalOpen4(false)}
      />
      <AnotherMatchesModal
        isOpen={isAnotherMatchOpen}
        onClose={() => setAnotherMatchOpen(false)}
        matches={matches}
      />
      <PostToBasketModal
        isOpen={isPostToBasketOpen}
        onClose={() => setPostToBasketOpen(false)}
      />
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-[#989BA1]"></div>
          <span className="px-3 font-[400] font-rasa sm:text-[15px] text-[15px] text-[#989BA1]">
            August 21
          </span>
          <div className="flex-1 border-t border-[#989BA1]"></div>
        </div>
        <div className="flex justify-end gap-1">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: "#FF827F" }}
            >
              <span className="text-[#123E41] font-medium text-sm">
                {user.name}
              </span>
            </div>
          </div>
          <div>
            <div className="border border-[#123E41] rounded-[5px] p-4 bg-white shadow-md max-w-lg">
              <p className="font-[700] font-sansation sm:text-[15px] text-[12px] text-[#555758] mb-2">
                Sabina wants to change the date and/or the time of the
                appointment
              </p>
              <p className="font-[700] font-sansation sm:text-[15px] text-[12px] text-[#555758] italic mb-2">
                Your Offered Date & Time.
              </p>
              <p className="font-[400] font-sansation sm:text-[15px] text-[12px] text-[#555758] mb-2">
                Date: February, Wednesday 26 2025
              </p>
              <p className="font-[400] font-sansation sm:text-[15px] text-[12px] text-[#555758] mb-2">
                Time: 10:30 AM
              </p>
              <p className="font-[700] font-sansation sm:text-[15px] text-[12px] text-[#555758] italic mb-2">
                Sabina’s Offered Date & Time.
              </p>
              <p className="font-[400] font-sansation sm:text-[15px] text-[12px] text-[#555758] mb-2">
                Date: February, Friday 28 2025
              </p>
              <p className="font-[400] font-sansation sm:text-[15px] text-[12px] text-[#555758] mb-2">
                Time: 10:30 AM
              </p>
            </div>
            <span
              className={`text-xs text-[#989BA1] mt-1 text-right"
              }`}
            >
              10:15 pm
            </span>
            <div className="flex flex-wrap gap-3 mt-2">
              <button
                onClick={() => setModalOpen4(true)}
                className="flex items-center gap-2 bg-[#FF827F] hover:bg-[#ff6f6b] transition-colors w-fit font-[700] font-sansation sm:text-[16px] text-[15px] text-[#2F2F2F] py-3 px-4 rounded-[5px] shadow-md"
              >
                Reject Fully
                <RiInformationFill className="text-[#123E41] text-lg" />
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-2 bg-[#123E41] hover:bg-[#0e2d2e] transition-colors w-fit font-[700] font-sansation sm:text-[16px] text-[15px] text-[#FAF9F6] py-3 px-4 rounded-[5px] shadow-md"
              >
                Accept
                <RiInformationFill className="text-white text-lg" />
              </button>
              <button
                onClick={() => setAnotherMatchOpen(true)}
                className="flex items-center gap-2 bg-[#FF827F] hover:bg-[#ff6f6b] transition-colors w-fit font-[700] font-sansation sm:text-[16px] text-[15px] text-[#2F2F2F] py-3 px-4 rounded-[5px] shadow-md"
              >
                Get Another Match
                <RiInformationFill className="text-[#123E41] text-lg" />
              </button>
              <button
                onClick={() => setPostToBasketOpen(true)}
                className="flex items-center gap-2 bg-[#123E41] hover:bg-[#0e2d2e] transition-colors w-fit font-[700] font-sansation sm:text-[16px] text-[15px] text-[#FAF9F6] py-3 px-4 rounded-[5px] shadow-md"
              >
                Post to Basket
                <RiInformationFill className="text-white text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
