import { useState, cloneElement, isValidElement } from "react";

export const ConfirmModal = ({ children, text, onConfirm, confirmText }) => {
  const [showModal, setShowModal] = useState(false);

  const trigger = isValidElement(children) ? (
    cloneElement(children, {
      onClick: (e) => {
        if (children.props.onClick) children.props.onClick(e);
        setShowModal(true);
      },
    })
  ) : (
    <span
      style={{ display: "inline-block", width: "100%" }}
      onClick={() => setShowModal(true)}
    >
      {children}
    </span>
  );

  return (
    <>
      {trigger}
      {showModal && (
        <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
          <div className="bg-white rounded-[20px] w-full sm:max-w-xl max-w-md relative p-3 shadow-xl">
            <div className="modal2 text-center p-3">
              <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal  mt-5">
                {text || "Are you sure?"}
              </h6>
            </div>
            {/* Next Button */}
            <div className="mt-4 flex justify-center gap-3 mb-2">
              <button
                className="w-full bg-[#97E7EC] text-[#123E41] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#6cc8cf] transition"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                onClick={() => {
                  onConfirm();
                  setShowModal(false);
                }}
              >
                {confirmText || "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
