import img3 from "../../assets/images/dashboard/img8.gif";

export const SuccessModal = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;

  // Prevent click inside dialog from closing modal
  const handleDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 z-50" onClick={onClose}></div>
      {/* Dialog */}
      <div
        className="relative z-60 h-full sm:max-h-[90vh] w-full sm:max-w-xl flex items-center justify-center"
        style={{ pointerEvents: "none" }}
      >
        <div
          className="bg-white w-full max-w-lg p-3 shadow-xl h-[70vh] overflow-y-auto rounded-[10px] flex flex-col justify-between"
          style={{ pointerEvents: "auto" }}
          onClick={handleDialogClick}
        >
          <div className="flex items-center flex-col justify-center">
            <img src={img3} alt="" className="w-[200px] h-[200px]" />
            <h6 className="font-rasa font-[600] sm:text-[25px] text-[25px] text-charcoal text-center">
              {message}
            </h6>
            <p className="font-rasa font-[500] sm:text-[18px] text-[18px] text-charcoal text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          {/* Next Button */}
          <div className="mt-20 flex justify-center">
            <button
              className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-3 rounded-full shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
