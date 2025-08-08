import img4 from "../../assets/images/dashboard/img12.png";
import img21 from "../../assets/images/dashboard/img70.jpg";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegCommentDots } from "react-icons/fa";

export const ProfessionalBookingDetailsModal = ({
  isOpen,
  onClose,
  handleOpenSecond,
  handleOpenCancel,
  handleOpenHelp,
  showBlockOption = true,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 max-h-[90vh]  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-3 shadow-xl h-[80vh] overflow-auto">
        {/* header  */}
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Booking Details
          </h2>
          <div className="flex items-center gap-2 absolute right-0 top-0">
            <p
              className="sm:text-[20px] text-[15px] font-[600] text-charcoal font-rasa cursor-pointer underline!"
              onClick={handleOpenHelp}
            >
              Need Help?
            </p>
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        {/* main */}
        <div className="mt-2">
          <div className="text-center mb-5">
            <h6 className="font-rasa font-[600] sm:text-[30px] text-[20px] text-charcoal">
              February, Wednesday 26 2025
            </h6>
            <p className="font-rasa font-[400] sm:text-[30px] text-[20px] text-charcoal m-0">
              10:30 AM - 12:00 PM (1hour 30min)
            </p>
            <div
              className={`flex items-center ${
                showBlockOption ? "justify-between" : "justify-center"
              }`}
            >
              {showBlockOption && <div className=""></div>}
              <div className="flex items-center justify-center gap-2">
                <img src={img21} alt="" className="w-8 h-8 rounded-full" />
                <span className="font-rasa font-[600] sm:text-[12px] text-[10px] text-[#757575] m-0">
                  Maren Levin
                </span>
              </div>
              {showBlockOption && (
                <button
                  className="flex items-center gap-1 bg-[#D6EDFC] hover:bg-[#bfe3fa] text-[#144B7D] font-[700] sm:text-[16px] text-[12px] px-3 py-2 rounded-[12px] ml-2 transition-all duration-200 border-none outline-none"
                  style={{ boxShadow: "0 1px 4px 0 #0001" }}
                  type="button"
                  // onClick={handleBlockClient} // Uncomment and implement if needed
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 mr-1"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <line
                      x1="7"
                      y1="17"
                      x2="17"
                      y2="7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Block The Client
                </button>
              )}
            </div>
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2">
            <div className="flex justify-between">
              <div className="">
                <h3 className="font-[700]  text-[14px] font-gotu text-[#121111] mb-1">
                  Gent's Standard
                </h3>
                <p className="text-[14px] text-[#494948] font-inter font-[400] mb-2">
                  Professional consultation, haircut, hot lather neck shave,
                  shampoo and conditioner
                </p>

                <div className="flex items-center gap-1 text-[12px] text-[#494948] font-inter font-[400] mt-2">
                  Staff
                  <img src={img4} alt="" className="w-10 h-10 rounded-full" />
                  <h6 className="text-[#121111] sm:text-[14px] text-[10px] font-[700] font-inter">
                    Lydia Baptista
                  </h6>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <h6 className="text-[#121111] sm:text-[18px] text-[15px] font-[700] font-inter">
                  $40.00
                </h6>
                <p className="text-[#757575] sm:text-[14px] text-[15px] font-[400] font-inter">
                  {" "}
                  10:30 AM - 11:00 AM
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2 flex items-center justify-between">
            <div>
              <h6 className="text-[#121111] sm:text-[14px] text-[12px] font-[700] font-inter">
                Tip
              </h6>
              <p className="text-[#757575] sm:text-[14px] text-[12px] font-[400] font-inter">
                Percentage of the service cost
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-[#FF827F] px-2 py-1 rounded-md text-[#000000] sm:text-[15px] text-[12px] font-[700] font-inter transition-all duration-200">
                $4
              </button>
            </div>
          </div>
          <div>
            <div className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 flex items-center gap-2">
              <span className=" text-[#000000] cursor-pointer">
                <FaRegCommentDots />
              </span>
              <input
                type="text"
                placeholder="Leave a note (optional)"
                className="outline-none border-none flex-1"
                value="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                readOnly
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-8">
            <button className="bg-[#FFF0CB] text-[#FFCC4E] font-[700] text-lg px-5 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]">
              Mark Service Complete
            </button>
            <div className="flex flex-col items-end">
              <div className="flex items-center">
                <span className="font-[500] text-[#121111] mr-1 sm:text-[18px] text-[15px]">
                  Total:
                </span>
                <span className="font-[700] text-[#121111] mr-1 sm:text-[30px] text-[25px] m-0">
                  $44.00
                </span>
              </div>
              <div className="pl-[50px] mt-1">
                <span className="font-[500] text-[#757575] mr-1 sm:text-[16px] text-[15px]">
                  30min
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handleOpenCancel}
          >
            Cancel This Booking
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handleOpenSecond}
          >
            Reschedule
          </button>
        </div>
        <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};
