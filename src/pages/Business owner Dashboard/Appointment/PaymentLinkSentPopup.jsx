const PaymentLinkSentPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-rasa">
      <div className="bg-white rounded-[10px] p-3 shadow-xl text-center max-w-xl">
        <p className="text-[30px]  font-[400] text-charcoal mb-4">
          A payment link has been sent to the client's email. The client has 15 minutes to complete the payment and secure the booking.
        </p>
        <button
          className="bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-30 py-2 rounded-md hover:bg-[#fbbcb5] transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PaymentLinkSentPopup;