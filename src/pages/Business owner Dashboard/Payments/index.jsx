import React, { useState } from "react";
import img from "../../../assets/images/dashboard/img25.png";
import img1 from "../../../assets/images/dashboard/img24.png";
import { AddCardModal } from "../../../components/Modals/Modal";
import BusinessOwnerDashboardLayout from "../../../components/DashbaordLayout/Business Owner";
import { PaymentCard } from "../../../components/PaymentCard";
import { PaymentHistoryCard } from "../../../components/PaymentHistoryCard";
import { PaymentHistoryDetailModal } from "../../../components/Modals/PaymentHistoryDetailModal";

const historyData = [
  {
    type: "independent",
    service: "Silk Press",
    amount: 85.0,
    date: "Sept 10, 2025",
    provider: "Kayla M.",
    method: "Visa",
    includesTip: true,
    client: "Danielle Brooks",
    appointmentDate: "September 10, 2025",
    basePrice: 75.0,
    tip: 10.0,
    taxes: 6.75,
    platformFee: 3.0,
    totalPaid: 94.75,
    paymentMethod: "Visa ending in 2456",
    transactionId: "TXN-87543",
    datePaid: "September 9, 2025",
    receiptNo: "RCT-54321",
  },
  {
    type: "business",
    service: "Loc Retwist",
    amount: 105.0,
    date: "Sept 12, 2025",
    salon: "Luxe Lounge",
    staff: "Aaliyah T.",
    method: "Apple Pay",
    includesAddons: true,
    client: "Danielle Brooks",
    appointmentDate: "September 10, 2025",
    basePrice: 75.0,
    addons: "Blow Dry ($15), Undo Hair ($15)",
    addonsTotal: 30.0,
    tip: 10.0,
    taxes: 8.4,
    platformFee: 4.0,
    totalPaid: 127.4,
    paymentMethod: "Visa ending in 2456",
    transactionId: "TXN-87544",
    datePaid: "September 10, 2025",
    receiptNo: "RCT-76588",
  },
  {
    type: "independent",
    service: "Knotless Braids",
    amount: 105.0,
    date: "Sept 6, 2025",
    provider: "Kayla M.",
    method: "Visa",
    includesTip: true,
    payer: "Brianna Lewis",
    recipient: "Jasmine Carter",
    appointmentDate: "September 6, 2025",
    basePrice: 85.0,
    tip: 10.0,
    taxes: 7.65,
    platformFee: 3.0,
    totalPaid: 105.65,
    paymentMethod: "Visa ending in 5672",
    transactionId: "TXN-94821",
    datePaid: "September 6, 2025",
    receiptNo: "RCT-54321",
  },
  {
    type: "addons_tip",
    service: "Loc Retwist",
    amount: 125.0,
    date: "Sept 9, 2025",
    provider: "Jasmine Carter",
    providerType: "Business",
    method: "Apple Pay",
    salon: "Luxe Lounge",
    staff: "Aaliyah T.",
    includesTip: false,
    includesAddons: true,
    payer: "Brianna Lewis",
    recipient: "Jasmine Carter",
    appointmentDate: "September 9, 2025",
    basePrice: 90.0,
    addons: "Blow Dry ($15)",
    addonsTotal: 15.0,
    tip: 10.0,
    taxes: 8.8,
    platformFee: 4.0,
    totalPaid: 127.8,
    paymentMethod: "Visa ending in 2456",
    transactionId: "TXN-94822",
    datePaid: "September 9, 2025",
    receiptNo: "RCT-76588",
  },
  {
    type: "gift_card",
    amount: 75.0,
    to: "Destiny Williams",
    date: "June 1, 2025",
    giftType: "Fixed Amount",
    expiry: "September 1, 2025 (90 days)",
    sender: "Brianna Lewis",
    recipient: "Destiny Williams",
    status: "Not Redeemed",
    paymentMethod: "Visa ending in 1234",
    transactionId: "TXN-845932",
    sentOn: "June 1, 2025",
    receiptNo: "GC-48293",
  },
];

const BusinessPayments = () => {
  const [activeTab, setActiveTab] = useState("methods");
  const [isModalOpen, setModalOpen] = useState(false);
  const [ispaymentcard, setPaymentCard] = useState(false);
  const [historyDetailModal, setHistoryDetailModal] = useState({
    open: false,
    payment: null,
  });

  const handleshowpaymentcard = () => {
    setModalOpen(false);
    setPaymentCard(true);
  };

  return (
    <BusinessOwnerDashboardLayout
      title="Payments"
      headerAction={
        ispaymentcard && (
          <button
            className="bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-6 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={() => setModalOpen(true)}
          >
            Add Card
          </button>
        )
      }
    >
      <AddCardModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        handleshowpaymentcard={handleshowpaymentcard}
      />
      <div className="w-full mt-4 text-center">
        {/* Tabs */}
        <div className="flex w-full bg-[#D9D9D9] rounded-[80px] overflow-hidden mb-6 p-1 max-w-4xl h-[60px]">
          <button
            className={`flex-1 py-2 sm:text-[30px] text-[20px] font-[500] font-rasa rounded-[80px]  ${
              activeTab === "methods"
                ? "bg-white text-charcoal"
                : "text-[#2F2F2F80]"
            }`}
            onClick={() => setActiveTab("methods")}
          >
            Payment methods
          </button>
          <button
            className={`flex-1 py-2 sm:text-[30px] text-[20px] font-[500] font-rasa rounded-[80px]  ${
              activeTab === "history"
                ? "bg-white text-charcoal"
                : "text-[#2F2F2F80]"
            }`}
            onClick={() => setActiveTab("history")}
          >
            Payment history
          </button>
        </div>

        {/* Content */}
        {activeTab === "methods" ? (
          ispaymentcard ? (
            <div>
              <PaymentCard />
            </div>
          ) : (
            <div className="flex flex-col items-center text-center px-4 py-6">
              <div className="mb-4">
                <img
                  src={img}
                  alt="Barber tools illustration"
                  className="w-full max-w-xs mx-auto"
                />
              </div>
              <h6 className="font-[500] sm:text-[30px] text-[25px] text-charcoal font-rasa">
                No Payment Method Added
              </h6>
              <p className="text-charcoal sm:text-[18px] text-[15px] font-[500] leading-relaxed text-center max-w-lg font-rasa">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <div className="mt-6 flex justify-center">
                <button
                  className="bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-4 py-3 sm:w-[400px] rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                  onClick={() => setModalOpen(true)}
                >
                  Add Card
                </button>
              </div>
            </div>
          )
        ) : ispaymentcard ? (
          <div className="flex flex-wrap gap-4">
            {historyData.map((payment, idx) => (
              <PaymentHistoryCard
                key={idx}
                payment={payment}
                onSeeDetails={() =>
                  setHistoryDetailModal({ open: true, payment })
                }
              />
            ))}
            {historyDetailModal.open && (
              <PaymentHistoryDetailModal
                payment={historyDetailModal.payment}
                onClose={() =>
                  setHistoryDetailModal({ open: false, payment: null })
                }
              />
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center text-center px-4 py-6">
            <div className="mb-4">
              <img
                src={img1}
                alt="Barber tools illustration"
                className="w-full max-w-xs mx-auto"
              />
            </div>
            <h6 className="font-[500] sm:text-[30px] text-[25px] text-charcoal font-rasa">
              Your Receipts
            </h6>
            <p className="text-charcoal sm:text-[18px] text-[15px] font-[500] leading-relaxed text-center max-w-lg font-rasa">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        )}
      </div>
    </BusinessOwnerDashboardLayout>
  );
};

export default BusinessPayments;
