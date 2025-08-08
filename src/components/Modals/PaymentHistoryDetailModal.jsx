import React from "react";
import { IoMdClose } from "react-icons/io";

/**
 * PaymentHistoryDetailModal
 * @param {Object} props
 * @param {Object} props.payment - Payment details object
 * @param {Function} props.onClose - Close handler
 */
export function PaymentHistoryDetailModal({ payment = {}, onClose }) {
  if (!payment || !payment.type) {
    return null;
  }

  // Helper renderers for each type
  const renderIndependent = () => (
    <>
      <div className="flex items-center gap-2 mb-2">
        <button
          onClick={onClose}
          className="mr-2 p-1 rounded-full hover:bg-gray-200 focus:outline-none"
        >
          <IoMdClose size={36} className="text-gray-700" />
        </button>
        <span className="font-bold text-[22px] sm:text-[26px] text-[#222] font-rasa">
          LATRICE Client Receipt –{" "}
          <span className="font-mono font-bold text-[22px] sm:text-[26px]">
            {payment.receiptNo}
          </span>
        </span>
      </div>
      <div className="mt-1 text-[18px] sm:text-[20px] font-rasa text-left">
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">Client:</span>{" "}
          {payment.client}
        </div>
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">Service:</span>{" "}
          {payment.service}
        </div>
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">
            Provider:
          </span>{" "}
          {payment.provider} (Independent)
        </div>
        <div className="mb-3">
          <span className="font-bold text-[18px] sm:text-[20px]">
            Appointment Date:
          </span>{" "}
          {payment.appointmentDate}
        </div>
        <hr className="my-3 border-dashed border-gray-400" />
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">
            Base Price:
          </span>{" "}
          ${payment.basePrice?.toFixed(2)}
        </div>
        {payment.tip && (
          <div className="mb-2">
            <span className="font-bold text-[18px] sm:text-[20px]">Tip:</span> $
            {payment.tip?.toFixed(2)}
          </div>
        )}
        {payment.taxes && (
          <div className="mb-2">
            <span className="font-bold text-[18px] sm:text-[20px]">Taxes:</span>{" "}
            ${payment.taxes?.toFixed(2)}
          </div>
        )}
        {payment.platformFee && (
          <div className="mb-2">
            <span className="font-bold text-[18px] sm:text-[20px]">
              LATRICE Platform Fee:
            </span>{" "}
            ${payment.platformFee?.toFixed(2)}
          </div>
        )}
        <hr className="my-3 border-dashed border-gray-400" />
        <div className="flex justify-between items-center font-bold text-[22px] sm:text-[24px] mt-4 mb-4">
          <span>Total Paid:</span>
          <span>${payment.totalPaid?.toFixed(2)}</span>
        </div>
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">
            Payment Method:
          </span>{" "}
          {payment.paymentMethod}
        </div>
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">
            Transaction ID:
          </span>{" "}
          {payment.transactionId}
        </div>
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">
            Date Paid:
          </span>{" "}
          {payment.datePaid}
        </div>
      </div>
      <button className="w-full mt-8 bg-[#4FD12B] hover:bg-green-600 text-white font-bold font-rasa text-[20px] py-4 rounded-full shadow-md transition-all">
        Download Receipt
      </button>
    </>
  );

  const renderBusiness = () => (
    <>
      <div className="flex items-center gap-2 mb-2">
        <button
          onClick={onClose}
          className="mr-2 p-1 rounded-full hover:bg-gray-200 focus:outline-none"
        >
          <IoMdClose size={36} className="text-gray-700" />
        </button>
        <span className="font-bold text-[22px] sm:text-[26px] text-[#222] font-rasa">
          LATRICE Client Receipt –{" "}
          <span className="font-mono font-bold text-[22px] sm:text-[26px]">
            {payment.receiptNo}
          </span>
        </span>
      </div>
      <div className="mt-1 text-[18px] sm:text-[20px] font-rasa text-left">
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">Client:</span>{" "}
          {payment.client}
        </div>
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">Salon:</span>{" "}
          {payment.salon}
        </div>
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">
            Assigned Staff:
          </span>{" "}
          {payment.staff}
        </div>
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">Service:</span>{" "}
          {payment.service}
        </div>
        {payment.addons && (
          <div className="mb-2">
            <span className="font-bold text-[18px] sm:text-[20px]">
              Add-ons:
            </span>{" "}
            {payment.addons}
          </div>
        )}
        <div className="mb-3">
          <span className="font-bold text-[18px] sm:text-[20px]">
            Appointment Date:
          </span>{" "}
          {payment.appointmentDate}
        </div>
        <hr className="my-3 border-dashed border-gray-400" />
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">
            Base Price:
          </span>{" "}
          ${payment.basePrice?.toFixed(2)}
        </div>
        {payment.addonsTotal && (
          <div className="mb-2">
            <span className="font-bold text-[18px] sm:text-[20px]">
              Add-ons Total:
            </span>{" "}
            ${payment.addonsTotal?.toFixed(2)}
          </div>
        )}
        {payment.tip && (
          <div className="mb-2">
            <span className="font-bold text-[18px] sm:text-[20px]">Tip:</span> $
            {payment.tip?.toFixed(2)}
          </div>
        )}
        {payment.taxes && (
          <div className="mb-2">
            <span className="font-bold text-[18px] sm:text-[20px]">Taxes:</span>{" "}
            ${payment.taxes?.toFixed(2)}
          </div>
        )}
        {payment.platformFee && (
          <div className="mb-2">
            <span className="font-bold text-[18px] sm:text-[20px]">
              LATRICE Platform Fee:
            </span>{" "}
            ${payment.platformFee?.toFixed(2)}
          </div>
        )}
        <hr className="my-3 border-dashed border-gray-400" />
        <div className="flex justify-between items-center font-bold text-[22px] sm:text-[24px] mt-4 mb-4">
          <span>Total Paid:</span>
          <span>${payment.totalPaid?.toFixed(2)}</span>
        </div>
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">
            Payment Method:
          </span>{" "}
          {payment.paymentMethod}
        </div>
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">
            Transaction ID:
          </span>{" "}
          {payment.transactionId}
        </div>
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">
            Date Paid:
          </span>{" "}
          {payment.datePaid}
        </div>
      </div>
      <button className="w-full mt-8 bg-[#4FD12B] hover:bg-green-600 text-white font-bold font-rasa text-[20px] py-4 rounded-full shadow-md transition-all">
        Download Receipt
      </button>
    </>
  );

  const renderGiftCard = () => (
    <>
      <div className="flex items-center gap-2 mb-2">
        <button
          onClick={onClose}
          className="mr-2 p-1 rounded-full hover:bg-gray-200 focus:outline-none"
        >
          <IoMdClose size={36} className="text-gray-700" />
        </button>
        <span className="font-bold text-[22px] sm:text-[26px] text-[#222] font-rasa">
          LATRICE Gift Card Receipt –{" "}
          <span className="font-mono font-bold text-[22px] sm:text-[26px]">
            {payment.receiptNo}
          </span>
        </span>
      </div>
      <div className="mt-1 text-[18px] sm:text-[20px] font-rasa text-left">
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">Sender:</span>{" "}
          {payment.sender}
        </div>
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">
            Recipient:
          </span>{" "}
          {payment.recipient}
        </div>
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">
            Gift Card Type:
          </span>{" "}
          {payment.giftType} (${payment.amount?.toFixed(2)})
        </div>
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">Sent On:</span>{" "}
          {payment.sentOn}
        </div>
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">
            Expiration:
          </span>{" "}
          {payment.expiry}
        </div>
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">Status:</span>{" "}
          {payment.status}
        </div>
        <hr className="my-3 border-dashed border-gray-400" />
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">
            Payment Method:
          </span>{" "}
          {payment.paymentMethod}
        </div>
        <div className="mb-2">
          <span className="font-bold text-[18px] sm:text-[20px]">
            Transaction ID:
          </span>{" "}
          {payment.transactionId}
        </div>
      </div>
      <button className="w-full mt-8 bg-[#4FD12B] hover:bg-green-600 text-white font-bold font-rasa text-[20px] py-4 rounded-full shadow-md transition-all">
        Download Receipt
      </button>
    </>
  );

  // Main render logic
  let content;
  switch (payment.type) {
    case "independent":
      content = renderIndependent();
      break;
    case "business":
    case "addons_tip":
      content = renderBusiness();
      break;
    case "gift_card":
      content = renderGiftCard();
      break;
    default:
      content = <div>Unknown payment type</div>;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-md shadow-lg p-5 w-full max-w-md mx-auto">
        {content}
      </div>
    </div>
  );
}
