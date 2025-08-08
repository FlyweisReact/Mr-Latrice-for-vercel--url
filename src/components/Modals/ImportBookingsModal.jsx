import { IoClose } from "react-icons/io5";

import thinkingImg from "../../assets/images/dashboard/thinking.png";

export function ImportBookingsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div
        className="bg-white rounded-md w-full max-w-xl min-h-[80vh] min-w-[380px] p-8 shadow-2xl overflow-y-auto max-h-[95vh] relative flex flex-col items-center justify-center"
        style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)" }}
      >
        <IoClose
          className="cursor-pointer text-xl text-[#000000] absolute right-4 top-4 p-0.5 rounded-full border hover:bg-gray-200"
          onClick={onClose}
        />
        <div className="flex flex-col items-center w-full mt-4 mb-2">
          <img
            src={thinkingImg}
            alt="Provider"
            className="max-h-52 max-w-52 object-contain mb-6"
          />
          <div className="font-[700] text-[22px] text-center mt-2 mb-4 font-rasa text-charcoal">
            Import Your bookings.
          </div>
          <div className="text-[16px] font-[400] text-center text-charcoal font-sansation mb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
        </div>
        <div className="flex w-full gap-6 mt-auto mb-2 justify-center">
          <button
            className="flex-1 bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-3 rounded-full shadow-md"
            onClick={onClose}
          >
            Import
          </button>
        </div>
      </div>
    </div>
  );
}
