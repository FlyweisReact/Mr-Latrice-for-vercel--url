import { useState, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { RiInformationFill } from "react-icons/ri";

const extrasOptions = [
  { name: "Undo hair", price: 45, duration: "+1hr" },
  { name: "Wash hair", price: 20, duration: "+20mins" },
  { name: "Blow dry hair", price: 15, duration: "+20mins" },
];

const BookRegularAppointment = ({
  isOpen,
  onClose,
  handleContinue,
  handleBack,
  selectedDate,
  selectedTime,
}) => {
  const [clientName, setClientName] = useState("");
  const [service, setService] = useState("");
  const [specialEvent, setSpecialEvent] = useState(false);
  const [driveToYou, setDriveToYou] = useState(false);
  const [address, setAddress] = useState("");
  const [freeParking, setFreeParking] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [showExtras, setShowExtras] = useState(false);
  const [specialEventTip, setSpecialEventTip] = useState("");

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

  const toggleExtra = (name) => {
    if (selectedExtras.includes(name)) {
      setSelectedExtras(selectedExtras.filter((item) => item !== name));
    } else {
      setSelectedExtras([...selectedExtras, name]);
    }
  };

  const getBookingDetails = () => {
    const extras = selectedExtras.map((name) =>
      extrasOptions.find((opt) => opt.name === name)
    );
    const cost = 40; // Assuming base cost $40
    const specialEventPrice = specialEvent ? 8 : 0;
    return {
      category: "Hair Services",
      serviceName: service || "Gent's Standard",
      date: selectedDate,
      time: selectedTime,
      cost,
      extras,
      specialEvent: { enabled: specialEvent, price: specialEventPrice, tip: specialEventTip },
      freeParking,
      note: "N/A",
      providerDrive: driveToYou,
      address,
      bookingFee: 4,
    };
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-30"
        style={{ pointerEvents: "auto" }}
      />
      <div className="fixed inset-0 z-40 flex items-center justify-center">
        <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-3 shadow-xl overflow-y-auto max-h-[80vh]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-30">
              <IoArrowBack
                color="#2F2F2F"
                size={25}
                className="cursor-pointer"
                onClick={handleBack}
              />
              <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
                Book a regular appointment
              </h2>
            </div>
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
          <div className="text-center mb-3">
            <h6 className="font-rasa font-[600] sm:text-[30px] text-[20px] text-charcoal">
              {selectedDate}
            </h6>
            <p className="font-rasa font-[400] sm:text-[30px] text-[20px] text-charcoal m-0">
              {selectedTime}
            </p>
          </div>
          <div className="mb-2">
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
              Client's Name
            </label>
            <input
              type="text"
              placeholder="enter client's name here"
              className="w-full border border-[#2F2F2F] rounded px-3 py-2 outline-none"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <div className="flex gap-4 mb-2">
            <div className="flex-1">
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                Date
              </label>
              <input
                type="text"
                value={selectedDate.split(", ")[1]}
                className="w-full border border-[#2F2F2F] rounded px-3 py-2 outline-none bg-gray-100"
                disabled
              />
            </div>
            <div className="flex-1">
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                Time
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={selectedTime.split(" ")[0]}
                  className="w-full border border-[#2F2F2F] rounded-l px-3 py-2 outline-none bg-gray-100"
                  disabled
                />
                <span className="bg-gray-100 border border-[#2F2F2F] border-l-0 rounded-r px-3 py-2">
                  {selectedTime.split(" ")[1]}
                </span>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
              Select Service
            </label>
            <select
              className="w-full border border-[#2F2F2F] rounded px-3 py-2 outline-none appearance-none"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option>select service...</option>
              <option>Gent's Standard</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-[#FF827F] flex items-center gap-1 mb-2">
              Special event? <RiInformationFill className="text-[#FF827F]" />
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1 cursor-pointer">
                <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                  Yes
                </span>
                <span className="relative w-5 h-5">
                  <input
                    type="radio"
                    name="specialEvent"
                    className="appearance-none w-5 h-5 rounded-full checked:bg-[#FF827F] checked:border-4 checked:border-white focus:outline-none"
                    checked={specialEvent === true}
                    onChange={() => setSpecialEvent(true)}
                  />
                  <span
                    className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none border ${specialEvent === true ? "border-[#FF827F]" : "border-[#2F2F2F]"}`}
                  ></span>
                </span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                  No
                </span>
                <span className="relative w-5 h-5">
                  <input
                    type="radio"
                    name="specialEvent"
                    className="appearance-none w-5 h-5 rounded-full checked:bg-[#FF827F] checked:border-4 checked:border-white focus:outline-none"
                    checked={specialEvent === false}
                    onChange={() => setSpecialEvent(false)}
                  />
                  <span
                    className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none border ${specialEvent === false ? "border-[#FF827F]" : "border-[#2F2F2F]"}`}
                  ></span>
                </span>
              </label>
            </div>
            {specialEvent && (
              <div className="mt-2">
                <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                  Enter special event tip
                </label>
                <input
                  type="text"
                  placeholder="Enter tip amount"
                  className="w-full border border-[#2F2F2F] rounded px-3 py-2 outline-none"
                  value={specialEventTip}
                  onChange={(e) => setSpecialEventTip(e.target.value)}
                />
              </div>
            )}
          </div>
          <div className="mb-2">
            <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-[#FF827F] flex items-center gap-1 mb-2 cursor-pointer"
              onClick={() => setShowExtras(!showExtras)}>
              - Add extras <RiInformationFill className="text-[#FF827F]" />
            </label>
            {showExtras && (
              <div>
                {extrasOptions.map((extra) => (
                  <div key={extra.name} className="flex items-center gap-2 mb-1">
                    <input
                      type="checkbox"
                      className="w-5 h-5 appearance-none border border-gray-300 checked:bg-gray-200"
                      checked={selectedExtras.includes(extra.name)}
                      onChange={() => toggleExtra(extra.name)}
                    />
                    <label className="font-[400] font-inter text-[14px] text-charcoal">
                      {extra.name} (${extra.price}, {extra.duration})
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mb-2">
            <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-[#FF827F] flex items-center gap-1 mb-2">
              Do you want the service provider to drive to you?{" "}
              <RiInformationFill className="text-[#FF827F]" />
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1 cursor-pointer">
                <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                  Yes
                </span>
                <span className="relative w-5 h-5">
                  <input
                    type="radio"
                    name="driveToYou"
                    className="appearance-none w-5 h-5 rounded-full checked:bg-[#FF827F] checked:border-4 checked:border-white focus:outline-none"
                    checked={driveToYou === true}
                    onChange={() => setDriveToYou(true)}
                  />
                  <span
                    className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none border ${driveToYou === true ? "border-[#FF827F]" : "border-[#2F2F2F]"}`}
                  ></span>
                </span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                  No
                </span>
                <span className="relative w-5 h-5">
                  <input
                    type="radio"
                    name="driveToYou"
                    className="appearance-none w-5 h-5 rounded-full checked:bg-[#FF827F] checked:border-4 checked:border-white focus:outline-none"
                    checked={driveToYou === false}
                    onChange={() => setDriveToYou(false)}
                  />
                  <span
                    className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none border ${driveToYou === false ? "border-[#FF827F]" : "border-[#2F2F2F]"}`}
                  ></span>
                </span>
              </label>
            </div>
          </div>
          {driveToYou && (
            <>
              <div className="mb-2">
                <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                  Enter the address where you'd like the service provider to come, if it differs from the one listed in your account. ($2 per miles)
                </label>
                <input
                  type="text"
                  placeholder="1 E 2nd St, New York, NY 10003, USA"
                  className="w-full border border-[#2F2F2F] rounded px-3 py-2 outline-none"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-[#FF827F] flex items-center gap-1 mb-2">
                  Free parking spot? <RiInformationFill className="text-[#FF827F]" />
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                      Yes
                    </span>
                    <span className="relative w-5 h-5">
                      <input
                        type="radio"
                        name="freeParking"
                        className="appearance-none w-5 h-5 rounded-full checked:bg-[#FF827F] checked:border-4 checked:border-white focus:outline-none"
                        checked={freeParking === true}
                        onChange={() => setFreeParking(true)}
                      />
                      <span
                        className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none border ${freeParking === true ? "border-[#FF827F]" : "border-[#2F2F2F]"}`}
                      ></span>
                    </span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                      No
                    </span>
                    <span className="relative w-5 h-5">
                      <input
                        type="radio"
                        name="freeParking"
                        className="appearance-none w-5 h-5 rounded-full checked:bg-[#FF827F] checked:border-4 checked:border-white focus:outline-none"
                        checked={freeParking === false}
                        onChange={() => setFreeParking(false)}
                      />
                      <span
                        className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none border ${freeParking === false ? "border-[#FF827F]" : "border-[#2F2F2F]"}`}
                      ></span>
                    </span>
                  </label>
                </div>
              </div>
            </>
          )}
          <div className="mt-4 flex justify-center">
            <button
              className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
              onClick={() => {
                onClose(); // Close the current modal
                handleContinue(getBookingDetails());
              }}
            >
              Review and confirm
            </button>
          </div>
          <p className="font-[400] text-[#757575] sm:text-[13px] text-[10px] text-center mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </>
  );
};

export default BookRegularAppointment;