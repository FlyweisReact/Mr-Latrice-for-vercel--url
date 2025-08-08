import { useState, useEffect } from "react";
import { ReviewAndConfirmBookingModal } from "./ReviewAndConfirmBookingModal";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineAccessAlarms } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { RiInformationFill } from "react-icons/ri";

import img4 from "../../assets/images/dashboard/img12.png";

export const FinalizeYourAppointment = ({
  isOpen,
  onClose,
  handleContinue,
  handleBack,
}) => {
  const [selected, setSelected] = useState("");
  const [value, _setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const percentages = ["10%", "15%", "20%"];

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-30"
        style={{ pointerEvents: "auto" }}
      />
      {!showReviewModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-3 shadow-xl">
            {/* header  */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <IoArrowBack
                  color="#2F2F2F"
                  size={25}
                  className="cursor-pointer"
                  onClick={handleBack}
                />
                <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
                  Finalize your appointment
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-rasa text-[#121111] font-[600] sm:text-[18px] text-[15px]">
                  03:00
                </span>
                <MdOutlineAccessAlarms className="text-[#2F2F2F]" size={24} />
                <IoMdCloseCircleOutline
                  className="cursor-pointer text-xl text-[#000000]"
                  onClick={onClose}
                />
              </div>
            </div>
            {/* main */}
            <div className="mt-5 max-h-[50vh] overflow-y-auto pb-2">
              <div className="text-center mb-5">
                <h6 className="font-rasa font-[600] sm:text-[30px] text-[20px] text-charcoal">
                  February, Wednesday 26 2025
                </h6>
                <p className="font-rasa font-[400] sm:text-[30px] text-[20px] text-charcoal m-0">
                  10:30 AM - 12:00 PM (1hour 30min)
                </p>
                <span className="font-rasa font-[600] sm:text-[12px] text-[10px] text-[#757575] m-0">
                  Omar Vaccaro Barber Shop
                </span>
              </div>
              <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2">
                <div className="flex items-center justify-between">
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
                      <img
                        src={img4}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
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
                  <h6 className="text-[#121111] sm:text-[14px] text-[12px] font-[700] font-inter flex items-center gap-1">
                    Add Tip
                    <RiInformationFill className="text-[#FF827F] text-lg" />
                  </h6>
                  <p className="text-[#757575] sm:text-[14px] text-[12px] font-[400] font-inter">
                    Percentage of the service cost
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {percentages.map((percentage) => (
                    <div
                      key={percentage}
                      onClick={() => setSelected(percentage)}
                      className={`px-2 py-1 cursor-pointer rounded-md text-[#000000] sm:text-[15px] text-[12px] font-[700] font-inter transition-all duration-200
        ${
          selected === percentage
            ? "bg-[#FF827F]"
            : "border border-[#2F2F2F80] bg-white"
        }`}
                    >
                      {percentage}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-2">
                <div className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 flex items-center gap-2">
                  <span className=" text-[#000000] cursor-pointer">
                    <FaRegCommentDots />
                  </span>
                  <input
                    type="text"
                    placeholder="Leave a note (optional)"
                    className="outline-none border-none"
                  />
                </div>
              </div>
              <div className="mb-2">
                <div className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 flex items-center gap-2">
                  <span className=" text-[#000000] cursor-pointer">
                    <FaRegCommentDots />
                  </span>
                  <input
                    type="text"
                    placeholder="Apply gift card here (if any)"
                    className="outline-none border-none"
                  />
                </div>
              </div>
              {/* <div className="mb-2">
            <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-secondary flex items-center gap-1 mb-2">
              Special event? <RiInformationFill />
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1 cursor-pointer">
                <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                  Yes
                </span>
                <span className="relative w-4 h-4">
                  <input
                    type="radio"
                    name="yesno2"
                    className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                    checked={value === true}
                    onChange={() => setValue(true)}
                  />
                  <span
                    className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                      value === true ? "border-[#F67067]" : "border-[#2F2F2F]"
                    } border`}
                  ></span>
                </span>
              </label>

              <label className="flex items-center gap-1 cursor-pointer">
                <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                  No
                </span>
                <span className="relative w-4 h-4">
                  <input
                    type="radio"
                    name="yesno2"
                    className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                    checked={value2 === false}
                    onChange={() => setValue2(false)}
                  />
                  <span
                    className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                      value2 === false ? "border-[#F67067]" : "border-[#2F2F2F]"
                    } border`}
                  ></span>
                </span>
              </label>
            </div>
          </div> */}
              <div className="mb-2 p-2 rounded">
                <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-[#FF827F] flex items-center gap-1 mb-2">
                  Special event?{" "}
                  <RiInformationFill className="text-[#FF827F]" />
                </label>
                <div className="flex items-center gap-4 mb-2">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                      Yes
                    </span>
                    <span className="relative w-4 h-4">
                      <input
                        type="radio"
                        name="specialEvent"
                        className="appearance-none w-5 h-5 rounded-full checked:bg-[#FF827F] checked:border-4 checked:border-white focus:outline-none"
                        checked={value1 === true}
                        onChange={() => setValue1(true)}
                      />
                      <span
                        className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                          value1 === true
                            ? "border-[#FF827F]"
                            : "border-[#2F2F2F]"
                        } border`}
                      ></span>
                    </span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                      No
                    </span>
                    <span className="relative w-4 h-4">
                      <input
                        type="radio"
                        name="specialEvent"
                        className="appearance-none w-5 h-5 rounded-full checked:bg-[#FF827F] checked:border-4 checked:border-white focus:outline-none"
                        checked={value1 === false}
                        onChange={() => setValue1(false)}
                      />
                      <span
                        className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                          value1 === false
                            ? "border-[#FF827F]"
                            : "border-[#2F2F2F]"
                        } border`}
                      ></span>
                    </span>
                  </label>
                </div>
                {value1 === true && (
                  <>
                    <label className="block font-[700] font-sansation sm:text-[20px] text-[17px] text-charcoal mb-1">
                      Enter Special Event Tip
                    </label>
                    <div className="flex items-center rounded px-3 py-2 border border-[#2F2F2F] relative">
                      <input
                        type="text"
                        className="flex-grow outline-none text-[#757575]"
                        placeholder="Suggested tip: 20% for special event care"
                      />
                      <span className="px-3 py-2 bg-[#222] text-[#FAF9F6] absolute right-0 rounded-r">
                        $
                      </span>
                    </div>
                  </>
                )}
              </div>
              {/* New question: Do you want the service provider to drive to you? */}
              <div className="mb-2">
                <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-[#FF827F] flex items-center gap-1 mb-2">
                  Do you want the service provider to drive to you?{" "}
                  <RiInformationFill className="text-[#FF827F]" />
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                      Yes
                    </span>
                    <span className="relative w-4 h-4">
                      <input
                        type="radio"
                        name="driveToYou"
                        className="appearance-none w-5 h-5 rounded-full checked:bg-[#FF827F] checked:border-4 checked:border-white focus:outline-none"
                        checked={value === true}
                        onChange={() => _setValue(true)}
                      />
                      <span
                        className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                          value === true
                            ? "border-[#FF827F]"
                            : "border-[#2F2F2F]"
                        } border`}
                      ></span>
                    </span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                      No
                    </span>
                    <span className="relative w-4 h-4">
                      <input
                        type="radio"
                        name="driveToYou"
                        className="appearance-none w-5 h-5 rounded-full checked:bg-[#FF827F] checked:border-4 checked:border-white focus:outline-none"
                        checked={value === false}
                        onChange={() => _setValue(false)}
                      />
                      <span
                        className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                          value === false
                            ? "border-[#FF827F]"
                            : "border-[#2F2F2F]"
                        } border`}
                      ></span>
                    </span>
                  </label>
                </div>
              </div>
              {value && (
                <>
                  <div className="mb-2">
                    <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                      Enter the address where you’d like the service provider to
                      come, if it differs from the one listed in your account.
                    </label>
                    <div className="flex items-center rounded px-3 py-2 border border-[#2F2F2F] relative">
                      <input
                        type="text"
                        className="flex-grow outline-none text-[#2F2F2F80]"
                        placeholder="Enter here.."
                      />
                      <span className="px-3 py-2 bg-[#2F2F2F] text-[#FAF9F6] absolute right-0">
                        $
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-secondary flex items-center gap-1 mb-2">
                      Free parking spot?
                      <RiInformationFill className="text-[#FF827F] text-lg" />
                    </label>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-1 cursor-pointer">
                        <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                          Yes
                        </span>
                        <span className="relative w-4 h-4">
                          <input
                            type="radio"
                            name="yesno1"
                            className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                            checked={value1 === true}
                            onChange={() => setValue1(true)}
                          />
                          <span
                            className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                              value1 === true
                                ? "border-[#F67067]"
                                : "border-[#2F2F2F]"
                            } border`}
                          ></span>
                        </span>
                      </label>

                      <label className="flex items-center gap-1 cursor-pointer">
                        <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                          No
                        </span>
                        <span className="relative w-4 h-4">
                          <input
                            type="radio"
                            name="yesno1"
                            className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                            checked={value1 === false}
                            onChange={() => setValue1(false)}
                          />
                          <span
                            className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                              value1 === false
                                ? "border-[#F67067]"
                                : "border-[#2F2F2F]"
                            } border`}
                          ></span>
                        </span>
                      </label>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-col items-end justify-end mt-1">
              <div className="flex items-center">
                <span className="font-[500] text-[#121111] mr-1 sm:text-[18px] text-[15px]">
                  Total:
                </span>
                <span className="font-[700] text-[#121111] mr-1 sm:text-[30px] text-[25px] m-0">
                  $85.00
                </span>
              </div>
              <div className="pl-[50px] mt-1">
                <span className="font-[500] text-[#757575] mr-1 sm:text-[16px] text-[15px]">
                  1hour 30min
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                onClick={() => {
                  setShowReviewModal(true);
                }}
              >
                Review and Confirm
              </button>
            </div>
            <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      )}
      <ReviewAndConfirmBookingModal
        isOpen={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        bookingDetails={{
          category: "Hair Services",
          serviceName: "Gent's Standard",
          date: "February, Wednesday 26 2025",
          time: "10.30 AM",
          cost: 40,
          extras: [
            { name: "Undo hair", price: 45, duration: "+1hr" },
            { name: "Wash hair", price: 20, duration: "+20mins" },
          ],
          specialEvent: { enabled: true, price: 8 },
          freeParking: false,
          note: "N/A",
          providerDrive: false,
          tip: { percent: 10, amount: 4 },
          bookingFee: 4,
          total: 125,
        }}
        onMakePayment={() => {
          setShowReviewModal(false);
          handleContinue && handleContinue();
        }}
        handleEdit={() => setShowReviewModal(false)}
      />
    </>
  );
};
