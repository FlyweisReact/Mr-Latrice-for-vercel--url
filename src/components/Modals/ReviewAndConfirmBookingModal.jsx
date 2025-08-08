import { IoArrowBack } from "react-icons/io5";
import img6 from "../../assets/images/dashboard/img6.png";

export const ReviewAndConfirmBookingModal = ({
  isOpen,
  onClose,
  bookingDetails,
  onMakePayment,
  handleEdit,
}) => {
  if (!isOpen) return null;

  // Example bookingDetails structure, fallback to demo data if not provided
  const details = bookingDetails || {
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
  };

  return (
    <div className="fixed inset-0 bg-opacity-40 z-40 flex items-center justify-center">
      <div className="bg-white rounded-md h-full sm:max-h-[90vh] w-full sm:max-w-xl relative p-3 shadow-xl flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <IoArrowBack
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
          <h2 className="sm:text-3xl text-lg font-[600] text-center text-charcoal font-rasa">
            Review and confirm
          </h2>
          <div className=""></div>
        </div>
        <div className="space-y-4 text-xl font-sansation text-charcoal">
          <div className="flex items-center justify-between gap-2">
            <span>
              <b>Category:</b> {details.category}
            </span>
            <img
              src={img6}
              alt="edit"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleEdit && handleEdit("category")}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>
              <b>Service Name:</b> {details.serviceName}
            </span>
            <img
              src={img6}
              alt="edit"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleEdit && handleEdit("serviceName")}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>
              <b>Date:</b> {details.date}
            </span>
            <img
              src={img6}
              alt="edit"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleEdit && handleEdit("date")}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>
              <b>Time:</b> {details.time}
            </span>
            <img
              src={img6}
              alt="edit"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleEdit && handleEdit("time")}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>
              <b>Cost:</b> ${details.cost.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>
              <b>Extras:</b>{" "}
              {details.extras && details.extras.length > 0
                ? details.extras
                    .map((e) => `${e.name} ($${e.price}, ${e.duration})`)
                    .join(", ")
                : "None"}
            </span>
            <img
              src={img6}
              alt="edit"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleEdit && handleEdit("extras")}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>
              <b>Special Event:</b>{" "}
              {details.specialEvent && details.specialEvent.enabled
                ? `Yes ($${details.specialEvent.price})`
                : "No"}
            </span>
            <img
              src={img6}
              alt="edit"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleEdit && handleEdit("specialEvent")}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>
              <b>Free parking spot:</b> {details.freeParking ? "Yes" : "No"}
            </span>
            <img
              src={img6}
              alt="edit"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleEdit && handleEdit("freeParking")}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>
              <b>Note:</b> {details.note}
            </span>
            <img
              src={img6}
              alt="edit"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleEdit && handleEdit("note")}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>
              <b>Provider drive to you?:</b>{" "}
              {details.providerDrive ? "Yes" : "No"}
            </span>
            <img
              src={img6}
              alt="edit"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleEdit && handleEdit("providerDrive")}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>
              <b>Tip:</b>{" "}
              {details.tip
                ? `${details.tip.percent}% ($${details.tip.amount})`
                : "N/A"}
            </span>
            <img
              src={img6}
              alt="edit"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleEdit && handleEdit("tip")}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>
              <b>Booking Fee:</b> $
              {details.bookingFee ? details.bookingFee.toFixed(2) : "0.00"}
            </span>
            <img
              src={img6}
              alt="edit"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleEdit && handleEdit("bookingFee")}
            />
          </div>
          <div className="font-extrabold text-2xl mt-4 flex items-center justify-between gap-2">
            <span>Total: ${details.total}</span>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 w-full px-3 pb-3 bg-white flex items-center justify-end z-10">
          <button
            className="bg-[#FFE6D8] text-[#FF827F] font-medium px-6 text-lg py-3 rounded-full shadow hover:bg-[#fbbcb5] transition w-full"
            onClick={onMakePayment}
          >
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};
