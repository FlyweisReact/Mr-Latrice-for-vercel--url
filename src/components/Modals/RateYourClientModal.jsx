import { useState } from "react";
import {
  IoIosArrowBack,
  IoMdCloseCircleOutline,
  IoIosStar,
  IoIosWarning,
} from "react-icons/io";

export const RateYourClientModal = ({
  isOpen,
  onClose,
  handleBack,
  onSubmit,
}) => {
  // Each criterion gets its own rating
  const criteria = [
    "Punctual",
    "Clean & Well-Prepared",
    "Respected Instructions",
    "Respectful Behavior",
    "Clarity of Needs",
    "Stuck to Booked Service",
  ];
  const [ratings, setRatings] = useState(Array(criteria.length).fill(0));
  const [hovered, setHovered] = useState(Array(criteria.length).fill(0));
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleStar = (critIdx, star) => {
    const newRatings = [...ratings];
    newRatings[critIdx] = star;
    setRatings(newRatings);
  };
  const handleHover = (critIdx, star) => {
    const newHovered = [...hovered];
    newHovered[critIdx] = star;
    setHovered(newHovered);
  };
  const handleHoverOut = (critIdx) => {
    const newHovered = [...hovered];
    newHovered[critIdx] = 0;
    setHovered(newHovered);
  };

  return (
    <div className="fixed inset-0 bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-xl p-3 shadow-xl overflow-y-auto h-[80vh] relative flex flex-col">
        <div className="flex-1 overflow-auto">
          {/* Header with Back, Title, Close */}
          <div className="flex items-center justify-between mb-5 sticky top-0 bg-white z-10 pb-2">
            <IoIosArrowBack
              className="cursor-pointer text-2xl text-[#000000]"
              onClick={handleBack}
            />
            <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa flex-1">
              Rate Your Client
            </h2>
            <IoMdCloseCircleOutline
              className="cursor-pointer text-2xl text-[#000000]"
              onClick={onClose}
            />
          </div>
          {/* Name and Info (scrolls with content) */}
          <div className="flex flex-col items-start px-2 mb-2">
            <span className="font-bold text-[18px] text-[#222]">Tanya M.</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[15px] text-[#757575]">
                Deluxe Silk Press
              </span>
              <span className="text-xs text-[#757575] ml-2">Completed</span>
            </div>
            <span className="text-xs text-[#757575] mt-1">July 7, 2025</span>
          </div>
          <div className="px-2 pb-2">
            <p className="text-xs text-[#222] text-left mb-2">
              Please rate your client’s behavior during this appointment. Your
              responses are private and will only be used to maintain a
              respectful platform experience.
            </p>
          </div>
          <div className="space-y-2 mb-5 pr-2">
            {criteria.map((crit, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-2 border-b border-[#F0F0F0] last:border-b-0"
              >
                <span className="font-semibold text-[15px] text-[#222]">
                  {crit}
                </span>
                <div className="flex space-x-1 ml-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <IoIosStar
                      key={star}
                      size={22}
                      className="cursor-pointer transition"
                      color={
                        star <= (hovered[idx] || ratings[idx])
                          ? "#222"
                          : "#E0E0E0"
                      }
                      onClick={() => handleStar(idx, star)}
                      onMouseEnter={() => handleHover(idx, star)}
                      onMouseLeave={() => handleHoverOut(idx)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="px-2 pt-2 pb-1">
            <label className="block font-semibold text-[15px] text-[#222] mb-1">
              Optional Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Leave a note for yourself or for platform support (e.g., client was late, brought guests, etc.). This will not be visible to the client."
              className="w-full border border-[#00000033] rounded-[8px] p-2 text-xs focus:outline-none min-h-[60px] bg-white resize-y max-h-[120px] overflow-auto"
              style={{ overflow: "auto" }}
            />
            {/* Warning if any rating is 3 or below */}
            {ratings.some((r) => r > 0 && r <= 3) && (
              <div className="mt-2 border border-[#222] rounded-[8px] p-2 flex items-start gap-2 bg-[#fff]">
                <IoIosWarning className="text-[18px] text-[#222] mt-[2px] mr-1" />
                <span className="text-xs text-[#222]">
                  We noticed one or more of your ratings are below 3 stars.
                  Would you like to report a serious issue with this
                  appointment?{" "}
                  <button
                    className="underline font-semibold hover:text-blue-700"
                    type="button"
                    onClick={() => alert("Report issue flow here")}
                  >
                    Report This Issue
                  </button>
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="px-2 pt-2 pb-1 sticky bottom-0 bg-white z-10">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition opacity-60 cursor-not-allowed"
            onClick={onSubmit}
            disabled={false}
          >
            Submit Rating
          </button>
          <p className="font-[400] text-[#757575] sm:text-[13px] text-[10px] text-center mt-3">
            Ratings are confidential and used only to maintain platform quality.
            Clients do not see individual star ratings or notes.
          </p>
        </div>
      </div>
    </div>
  );
};
