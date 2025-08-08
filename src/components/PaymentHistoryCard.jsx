import img1 from "../assets/images/dashboard/paymenthistory.png";

/**
 * PaymentCard component
 * @param {Object} props
 * @param {Object} props.payment - Payment details object
 * @returns JSX.Element
 */
export function PaymentHistoryCard({ payment = {}, onSeeDetails }) {
  // payment.type: 'independent' | 'business' | 'addons_tip' | 'gift_card'
  // payment: { ...fields depending on type }

  // Helper renderers for each type
  const renderServiceIndependent = () => (
    <>
      <div className="font-[600] text-[15px] sm:text-[20px] text-[#000000] font-rasa">
        {payment.service} – ${payment.amount}
      </div>
      <div className="text-[15px] font-rasa">{payment.date}</div>
      <div className="text-[15px] font-rasa">
        {payment.provider} (Independent)
      </div>
      <div className="text-[15px] font-rasa">Paid via {payment.method}</div>
      {payment.includesTip && (
        <div className="text-[15px] font-rasa">Includes Tip</div>
      )}
    </>
  );

  const renderServiceBusiness = () => (
    <>
      <div className="font-[600] text-[15px] sm:text-[20px] text-[#000000] font-rasa">
        {payment.service} – ${payment.amount}
      </div>
      <div className="text-[15px] font-rasa">{payment.date}</div>
      <div className="text-[15px] font-rasa">
        {payment.salon} (Staff: {payment.staff})
      </div>
      <div className="text-[15px] font-rasa">Paid via {payment.method}</div>
      {payment.includesAddons && (
        <div className="text-[15px] font-rasa">Includes Add-ons</div>
      )}
    </>
  );

  const renderAddonsTip = () => (
    <>
      <div className="font-[600] text-[15px] sm:text-[20px] text-[#000000] font-rasa">
        {payment.service} – ${payment.amount}
      </div>
      <div className="text-[15px] font-rasa">{payment.date}</div>
      <div className="text-[15px] font-rasa">
        {payment.provider} ({payment.providerType})
      </div>
      <div className="text-[15px] font-rasa">Paid via {payment.method}</div>
      {payment.includesTip && (
        <div className="text-[15px] font-rasa">Includes Tip</div>
      )}
      {payment.includesAddons && (
        <div className="text-[15px] font-rasa">Includes Add-ons</div>
      )}
    </>
  );

  const renderGiftCard = () => (
    <>
      <div className="font-[600] text-[15px] sm:text-[20px] text-[#000000] font-rasa">
        Gift Card Sent – ${payment.amount}
      </div>
      <div className="text-[15px] font-rasa">To: {payment.to}</div>
      <div className="text-[15px] font-rasa">Sent on {payment.date}</div>
      <div className="text-[15px] font-rasa">Type: {payment.giftType}</div>
      <div className="text-[15px] font-rasa">Expires: {payment.expiry}</div>
    </>
  );

  // Guard for missing or invalid payment prop
  if (!payment || !payment.type) {
    return (
      <div className="bg-white border border-[#2F2F2F80] shadow-[0px_4px_4px_0px_#00000040] rounded-[20px] p-4 flex flex-col gap-4 max-w-sm">
        <div className="text-red-600 font-bold">Invalid payment data</div>
      </div>
    );
  }

  // Main render logic
  let content;
  switch (payment.type) {
    case "independent":
      content = renderServiceIndependent();
      break;
    case "business":
      content = renderServiceBusiness();
      break;
    case "addons_tip":
      content = renderAddonsTip();
      break;
    case "gift_card":
      content = renderGiftCard();
      break;
    default:
      content = <div>Unknown payment type</div>;
  }

  return (
    <div className="bg-white border border-[#2F2F2F80] shadow-[0px_4px_4px_0px_#00000040] rounded-[20px] p-4 flex flex-col gap-4 max-w-sm">
      <div className="flex items-start gap-2">
        <div className="space-y-1 flex flex-col items-start">{content}</div>
        <div className="flex flex-col justify-end h-full">
          <img src={img1} alt="Receipt" className="w-20 h-20 object-contain" />
        </div>
      </div>
      <div className="flex gap-3">
        <button className="bg-[#4FD12B] hover:bg-green-600 text-[#121712] font-bold font-rasa text-[16px] py-2 px-4 rounded-full">
          Download Receipt
        </button>
        <button
          className="bg-[#FFD34E] hover:bg-yellow-400 text-[#121712] font-bold font-rasa text-[16px] py-2 px-4 rounded-full"
          onClick={onSeeDetails}
        >
          See Details
        </button>
      </div>
    </div>
  );
}
