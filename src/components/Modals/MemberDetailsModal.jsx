import { IoArrowBack } from "react-icons/io5";

export const MemberDetailsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-md h-full w-full sm:max-w-xl sm:max-h-[90vh] relative p-3 shadow-xl">
        <div className="flex items-center justify-between mb-2">
          <IoArrowBack
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
          <h2 className="sm:text-[22px] text-[18px] font-[600] text-center text-charcoal font-rasa">
            Details
          </h2>
          <div className=""></div>
        </div>
        <div className="space-y-2 text-lg font-sansation text-charcoal">
          <div>
            <b>Category:</b> Hair Services
          </div>
          <div>
            <b>Service Name:</b> ABC Service
          </div>
          <div>
            <b>Proposed Price:</b> $100.00
          </div>
          <div>
            <b>Size:</b> Micro + Shoulder length
          </div>
          <div>
            <b>Service details:</b>
            <div className="border rounded p-2 mt-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="my-2 border rounded p-2">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=200&h=200"
              alt="Service"
              className="mx-auto rounded w-[120px] h-[120px] object-cover border"
            />
          </div>
          <div>
            <b>Date & Time:</b> 26 Feb 2025 at 10:00 am
          </div>
          <div>
            <b>Target:</b> Both
          </div>
          <div>
            <b>Do you want the service provider to drive to you?:</b> No
          </div>
        </div>
        {/* Spacer to push the button to the bottom */}
        <div className="flex-1" />
        <div className="fixed left-0 right-0 bottom-0 sm:static sm:mt-4 flex items-center justify-center sm:justify-end bg-white sm:bg-transparent p-4 sm:p-0 z-40">
          <button className="bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-10 py-3 rounded-full shadow-lg hover:bg-[#fbbcb5] transition w-full sm:w-auto">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};
