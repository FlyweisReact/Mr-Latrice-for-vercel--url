import { useState } from "react";
import { IoIosArrowBack, IoMdCloseCircleOutline } from "react-icons/io";
import { RxStarFilled } from "react-icons/rx";

export const ClientRateAppointmentModal = ({
  isOpen,
  onClose,
  onSubmit,
  handleBack,
}) => {
  const [rating, setRating] = useState(0);
  const [selectedTip, setSelectedTip] = useState(null);
  const [hover, setHover] = useState(null);

  const tipOptions = [
    { percent: 10, amount: 5.0 },
    { percent: 15, amount: 7.5 },
    { percent: 20, amount: 10.0 },
  ];

  const [services, setServices] = useState({
    Unsafe: false,
    Noisy: false,
    Slow: false,
    Late: false,
    Exceeded: false,
    needs: false,
    Constantly: false,
    blowDryHair: false,
    Rude: false,
    Unclean: false,
  });

  if (!isOpen) return null;

  const handleChange = (key) => {
    setServices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderCheckbox = (label, key) => (
    <label className="flex items-center space-x-2" key={key}>
      <input
        type="checkbox"
        className="peer hidden"
        checked={services[key]}
        onChange={() => handleChange(key)}
      />
      <div
        className={`w-[28px] h-[28px] rounded-sm flex items-center justify-center transition-colors duration-300
            ${
              services[key]
                ? "bg-[#123E41]"
                : "bg-[#fff] border border-[#2F2F2F]"
            }`}
      >
        {services[key] && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <span className="font-[700] font-sansation sm:text-[17px] text-[15px] text-charcoal">
        {label}
      </span>
    </label>
  );

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-2xl p-3 shadow-xl overflow-y-auto h-[80vh] relative">
        <div className="flex items-center justify-between mb-5">
          <IoIosArrowBack
            className="cursor-pointer text-2xl text-[#000000]"
            onClick={handleBack}
          />
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            How would you rate this appointment
          </h2>
          <IoMdCloseCircleOutline
            className="cursor-pointer text-2xl text-[#000000]"
            onClick={onClose}
          />
        </div>
        <div className="space-y-2 h-[60vh] overflow-auto mb-5 pr-2 pb-5">
          {/* Stars */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, index) => {
              const starNumber = index + 1;
              return (
                <RxStarFilled
                  key={index}
                  onClick={() => setRating(starNumber)}
                  onMouseEnter={() => setHover(starNumber)}
                  onMouseLeave={() => setHover(null)}
                  className={`w-12 h-12 cursor-pointer ${
                    starNumber <= (hover || rating)
                      ? "text-[#2F2F2F]"
                      : "text-[#D9D9D9]"
                  }`}
                />
              );
            })}
          </div>
          {/* options */}
          {rating <= 3 ? (
            <div className="mb-2">
              <h2 className="sm:text-[28px] text-[20px] font-[600] text-center text-charcoal font-rasa mb-2">
                What could have been better
              </h2>
              <div className="flex justify-between mb-5">
                <div className="flex flex-col gap-2">
                  {renderCheckbox(
                    "Exceeded time indicated for service",
                    "Exceeded"
                  )}
                  {renderCheckbox("Late start", "Late")}
                  {renderCheckbox("Slow service", "Slow")}
                  {renderCheckbox("Noisy and disturbed", "Noisy")}
                  {renderCheckbox("Unsafe place", "Unsafe")}
                </div>
                <div className="flex flex-col gap-2">
                  {renderCheckbox("Rude behavior", "Rude")}
                  {renderCheckbox("Unclean space", "Unclean")}
                  {renderCheckbox("Unprofessional", "blowDryHair")}
                  {renderCheckbox(
                    "Constantly stopped the service",
                    "Constantly"
                  )}
                  {renderCheckbox("Didn’t listen to my needs", "needs")}
                </div>
              </div>
              <div className="flex flex-col items-start">
                <label
                  htmlFor="confirm"
                  className="sm:text-[25px] text-[18px] font-[500] text-center text-charcoal font-rasa"
                >
                  Want to share more? Tell us about your exprience.
                </label>
                <input
                  type="text"
                  placeholder="write..."
                  maxLength="5"
                  className="w-[98%] px-4 py-3 border border-[#2F2F2F] rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#34A8535C]"
                />
              </div>
            </div>
          ) : (
            <div className="mb-2">
              <h2 className="sm:text-[28px] text-[20px] font-[600] text-center text-charcoal font-rasa mb-2">
                What do you love about the service?
              </h2>
              <div className="flex justify-between mb-5">
                <div className="flex flex-col gap-2">
                  {renderCheckbox("Excellent service", "Exceeded")}
                  {renderCheckbox("Very professional/focused", "Late")}
                  {renderCheckbox("Punctual start", "Slow")}
                  {renderCheckbox("Highly recommended", "Noisy")}
                  {renderCheckbox("Welcoming throughout the sesion", "Unsafe")}
                </div>
                <div className="flex flex-col gap-2">
                  {renderCheckbox("Talented stylist", "Rude")}
                  {renderCheckbox("Punctual start", "Unclean")}
                  {renderCheckbox("Highly recommended", "blowDryHair")}
                  {renderCheckbox(
                    "Pay attention to customer needs",
                    "Constantly"
                  )}
                  {renderCheckbox("Service done as desired", "needs")}
                </div>
              </div>
              <div className="flex flex-col items-start">
                <label
                  htmlFor="confirm"
                  className="sm:text-[25px] text-[18px] font-[500] text-center text-charcoal font-rasa"
                >
                  Want to share more? Tell us about your exprience.
                </label>
                <input
                  type="text"
                  placeholder="write..."
                  maxLength="5"
                  className="w-[98%] px-4 py-3 border border-[#2F2F2F] rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#34A8535C]"
                />
              </div>
            </div>
          )}

          {/* Question */}
          <h2 className="sm:text-[28px] text-[20px] font-[600] text-center text-charcoal font-rasa mb-4">
            Would you like to leave a tip?
          </h2>

          {/* Tip options */}
          <div className="flex items-center justify-between  mb-4">
            {tipOptions.map((tip) => (
              <div
                key={tip.percent}
                onClick={() => setSelectedTip(tip.percent)}
                className={`flex flex-col items-center cursor-pointer`}
              >
                <div
                  className={`w-22 h-22 border-2  rounded-full flex items-center justify-center sm:text-[28px] text-[20px] font-[600] text-center  font-rasa
                ${
                  selectedTip === tip.percent
                    ? "bg-[#123E41] text-white border-[#123E41]"
                    : "border-[#2F2F2F] text-charcoal"
                }`}
                >
                  {tip.percent}%
                </div>
                <span className="sm:text-[20px] text-[15px] font-[600] text-center text-charcoal font-rasa">
                  = ${tip.amount.toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Custom amount */}
          <div className="flex flex-col items-start">
            <label
              htmlFor="confirm"
              className="sm:text-[25px] text-[18px] font-[500] text-center text-charcoal font-rasa"
            >
              Or enter a custom amount:
            </label>
            <input
              type="text"
              placeholder="$0.00"
              maxLength="5"
              className="w-[98%] px-4 py-3 border border-[#2F2F2F] rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#34A8535C]"
            />
          </div>
        </div>

        <div className="absolute bottom-1 w-[97%] m-auto">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-3 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onSubmit}
          >
            Submit Review & Tip
          </button>
          {rating <= 3 ? (
            <p className="mt-2 font-[400] sm:text-[13px] text-[10px]">
              We noticed that your ratings are below 3 stars. Would you like to
              report a serious issue with this appointment?
              <span className="underline ml-2 font-bold cursor-pointer">
                Report This Issue
              </span>
            </p>
          ) : (
            <p className="mt-2 font-[400] sm:text-[13px] text-[10px]">
              Thanks for supporting your provider! Your review helps others book
              with confidence. Need help with something else?
              <span className="underline ml-2 font-bold">Contact Support</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
