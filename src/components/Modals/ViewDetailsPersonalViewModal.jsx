import img36 from "../../assets/images/dashboard/img118.jpg";

import { PiWarningCircleFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export const ViewDetailsPersonalViewModal = ({
  isOpen,
  onClose,
  handleOpenAppointmentform,
  handleOpenWaiverForm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute w-full h-full bg-black/50 z-50"></div>
      <div className="w-full md:w-[calc(100%-260px)] h-full flex items-center justify-center z-60">
        <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-xl p-3 shadow-xl h-[70vh] overflow-auto relative">
          <div className="flex items-center gap-2">
            <IoClose
              className="cursor-pointer text-2xl text-[#000000]"
              onClick={onClose}
            />
            <h2 className="sm:text-[25px] text-[20px] font-[600] text-center text-charcoal font-rasa leading-tight">
              View Details
            </h2>
          </div>

          <div className="space-y-4 mt-3">
            <div className="flex items-start mb-5">
              <img
                src={img36}
                alt="user image"
                className="w-30 h-30 rounded-full object-cover mr-4"
              />
              <div className="pt-4">
                <p className="sm:text-[25px] text-[15px] font-[600] text-charcoal leading-[20px] font-rasa mb-3">
                  Provider Name: Burt Nilson
                </p>
                <p className="sm:text-[22px] text-[15px] font-[600] text-charcoal leading-[20px] font-rasa mb-1">
                  Deep Massage
                </p>
                <p className="sm:text-[22px] text-[15px] font-[600] text-charcoal leading-[20px] font-rasa mb-1">
                  April 4, 2025
                </p>
                <p className="sm:text-[22px] text-[15px] font-[600] text-charcoal leading-[20px] font-rasa mb-1">
                  Duration : 2hrs 30 mins
                </p>
              </div>
            </div>
            <h6 className="sm:text-[25px] text-[15px] font-[600] text-charcoal leading-[20px] font-rasa text-center mb-6">
              Once you submit your response, you won’t be able to change it.
            </h6>

            <div className="flex flex-col items-center justify-center gap-3 mb-8">
              <button
                className="w-full bg-[#97E7EC] text-[#123E41] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] flex items-center justify-center gap-2"
                onClick={handleOpenAppointmentform}
              >
                See Appointment Form
                <PiWarningCircleFill size={23} />
              </button>
              <button
                className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] flex items-center justify-center gap-2"
                onClick={handleOpenWaiverForm}
              >
                See Waiver Form
                <PiWarningCircleFill size={23} />
              </button>
            </div>
            <div className="flex justify-center">
              {" "}
              <Link
                to="/dashboard/appointments/current-bookings"
                className="cursor-pointer sm:text-[25px] text-[15px] font-[600] text-charcoal leading-[20px] font-rasa text-center! underline!"
              >
                See appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
