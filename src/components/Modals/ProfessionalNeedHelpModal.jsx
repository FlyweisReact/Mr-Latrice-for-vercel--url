import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";

const options = [
  "I’m here, but provider is not",
  "I feel unsafe or uncomfortable",
  "I can’t find the location",
  "Provider is not responding",
  "Something else happened",
];

export const ProfessionalNeedHelpBookingDetailsModal = ({
  isOpen,
  onClose,
  handleBack,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const navigate = useNavigate();
  if (!isOpen) return null;

  const closeModal = () => {
    onClose();
    navigate("/business-owner/dashboard/appointments/claim/dispute-bookings");
  };

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-3 shadow-xl h-[80vh] overflow-auto">
        {/* header  */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IoIosArrowBack
              className="cursor-pointer text-xl text-[#000000]"
              onClick={handleBack}
            />
            <h2 className="sm:text-[30px] text-[20px] font-[600] text-charcoal font-rasa">
              Need Help?
            </h2>
          </div>
          <IoMdCloseCircleOutline
            className="cursor-pointer text-2xl text-[#000000]"
            onClick={onClose}
          />
        </div>
        {/* main */}
        <div className="mt-2">
          <h6 className="sm:text-[35px] text-[25px] font-[600] text-charcoal font-rasa">
            What seems to be the issue?
          </h6>
          <div className="space-y-3">
            {options.map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-5 cursor-pointer"
              >
                <span className="relative w-4 h-4">
                  <input
                    type="radio"
                    name="yesno2"
                    className="appearance-none w-5 h-5 rounded-full checked:bg-[#F67067] checked:border-4 checked:border-white focus:outline-none"
                    checked={selectedOption === opt}
                    onChange={() => setSelectedOption(opt)}
                  />
                  <span
                    className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none border ${
                      selectedOption === opt
                        ? "border-[#F67067]"
                        : "border-[#2F2F2F]"
                    }`}
                  ></span>
                </span>
                <span className="font-[400] font-sansation sm:text-[25px] text-[20px] text-charcoal">
                  {opt}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col justify-center gap-2">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={onClose}
          >
            Contact Support
          </button>
          {selectedOption && (
            <>
              <p className="font-[400] font-rasa sm:text-[20px] text-[15px] text-charcoal m-0 text-center">
                We’ll log this immediately and notify support.
              </p>
              <p className="text-xl mt-2">Need to escalate?</p>
              <div className="flex justify-between">
                <p className="font-[400] font-rasa sm:text-[20px] text-[15px] text-charcoal m-0 underline">
                  Contact Support
                </p>
                <h6
                  onClick={closeModal}
                  className="font-[700] font-rasa sm:text-[20px] text-[15px] text-charcoal m-0 underline cursor-pointer"
                >
                  Submit a Dispute
                </h6>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
