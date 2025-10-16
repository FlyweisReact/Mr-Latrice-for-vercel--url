import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
// import img6 from "../../assets/images/dashboard/img6.png"; // Ensure this path matches your project
import img6 from "../../../assets/images/dashboard/img6.png"; // Adjust the path as necessary
import { IoMdCloseCircleOutline } from "react-icons/io";

const ReviewAndConfirmModal = ({
  isOpen,
  onClose,
  bookingDetails,
  onRequestPayment,
  handleEdit,
}) => {
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

  // Fallback to demo data if bookingDetails is not provided
  const details = bookingDetails || {
    category: "Hair Services",
    serviceName: "Gent's Standard",
    date: "February, Wednesday 26 2025",
    time: "10:30 AM",
    cost: 40,
    extras: [],
    specialEvent: { enabled: false, price: 0, tip: "" },
    freeParking: false,
    note: "N/A",
    providerDrive: false,
    address: "",
    bookingFee: 4,
  };

  // Calculate total
  const total =
    details.cost +
    (details.extras.reduce((sum, e) => sum + e.price, 0) || 0) +
    (details.specialEvent.enabled ? details.specialEvent.price : 0) +
    (details.specialEvent.tip ? parseFloat(details.specialEvent.tip) || 0 : 0) +
    details.bookingFee;

  return (
    <div className="fixed inset-0 bg-opacity-40 z-40 flex items-center justify-center">
      <div className="bg-white rounded-md h-full sm:max-h-[90vh] w-full sm:max-w-xl relative p-3 shadow-xl flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <IoArrowBack
            onClick={handleEdit}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
          <h2 className="sm:text-3xl text-lg font-[600] text-center text-charcoal font-rasa">
            Review and confirm
          </h2>
          <IoMdCloseCircleOutline
            className="cursor-pointer text-xl text-[#000000]"
            onClick={onClose}
          />
        </div>
        <div className="space-y-4 text-xl font-sansation text-charcoal overflow-y-auto">
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
            <img
              src={img6}
              alt="edit"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleEdit && handleEdit("cost")}
            />
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
                ? `Yes ($${details.specialEvent.price}${
                    details.specialEvent.tip ? ` + $${details.specialEvent.tip}` : ""
                  })`
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
              <b>Provider drive to you?:</b> {details.providerDrive ? "Yes" : "No"}
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
              {details.specialEvent.tip
                ? `$${parseFloat(details.specialEvent.tip).toFixed(2)}`
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
            <span>Total: ${total.toFixed(2)}</span>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 w-full px-3 pb-3 bg-white flex items-center justify-end z-10">
          <button
            className="bg-[#FFE6D8] text-[#FF827F] font-medium px-6 text-lg py-3 rounded-full shadow hover:bg-[#fbbcb5] transition w-full"
            onClick={onRequestPayment}
          >
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewAndConfirmModal;