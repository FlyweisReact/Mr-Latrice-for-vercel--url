import BusinessOwnerDashboardLayout from "../../../components/DashbaordLayout/Business Owner";
import {
  ChangePasswordModal,
  AddAddressModal,
  LicenseVerificationModal,
  AddSuccessVerificationModal,
  AddBusinessInformationModal,
  AddTaxpayerIdentificationModal,
  AddUploadRequirementsModal,
  AddIDVerificationsModal,
  ShowQRModal,
  AddNewPolicyModal,
  CloseBussinessModal,
  DeleteBussinessAccountModal,
  DeleteBussinessAccountSuccesModal,
} from "../../../components/Modals/Modal";

import img from "../../../assets/images/dashboard/img40.jpg";
import img2 from "../../../assets/images/dashboard/img41.jpg";
import img1 from "../../../assets/images/dashboard/img1.png";

import { RiEditFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { IoIosCopy } from "react-icons/io";
import { PiPuzzlePieceBold } from "react-icons/pi";
import { PiWheelchairDuotone } from "react-icons/pi";
import { MdBlock } from "react-icons/md";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import { FaShuttleVan } from "react-icons/fa";
import { LiaUserClockSolid } from "react-icons/lia";
import { IoGitPullRequestSharp } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";

import { LuCalendarArrowUp } from "react-icons/lu";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import PolicyTable from "./ShopPolicyTable";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosCloudyNight } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";

export default function BusinessOwnerAccountSettingPage() {
  const options = [
    "24 hours before appointment",
    "48 hours before appointment",
    "72 hours before appointment",
  ];
  const options1 = ["Within 1 week", "Within 2 weeks", "Same calendar month"];
  const options3 = ["Women", "Men", "Everyone"];
  const options2 = [
    "Deposit applies to all reschedules",
    "Deposit applies only to 1st reschedule",
    "New deposit required for every reschedule",
  ];
  const [selected, setSelected] = useState("Men");
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [isModalOpen3, setModalOpen3] = useState(false);
  const [isModalOpen4, setModalOpen4] = useState(false);
  const [isModalOpen5, setModalOpen5] = useState(false);
  const [isModalOpen6, setModalOpen6] = useState(false);
  const [isModalOpen7, setModalOpen7] = useState(false);
  const [isModalOpen8, setModalOpen8] = useState(false);
  const [isModalOpen9, setModalOpen9] = useState(false);
  const [isModalOpen10, setModalOpen10] = useState(false);
  const [isModalOpen11, setModalOpen11] = useState(false);
  const [isModalOpen12, setModalOpen12] = useState(false);
  const [edit, setEdit] = useState(false);
  const [showpolicy, setShowPolicy] = useState(false);
  const [showlicencestatus, setLincenceStatus] = useState(false);

  const [radius, setRadius] = useState(17);

  const [timeRanges, setTimeRanges] = useState([
    {
      id: Date.now(),
      days: {
        monday: false,
        tuesday: false,
        wednesday: false,
        Thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      },
      startTime: "",
      endTime: "",
    },
  ]);

  const handleChangeDays = (index, key) => {
    setTimeRanges((prev) =>
      prev.map((range, i) =>
        i === index
          ? {
              ...range,
              days: {
                ...range.days,
                [key]: !range.days[key],
              },
            }
          : range
      )
    );
  };
  const handleTimeChange = (index, field, value) => {
    setTimeRanges((prev) =>
      prev.map((range, i) =>
        i === index ? { ...range, [field]: value } : range
      )
    );
  };

  const addTimeRange = () => {
    setTimeRanges((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        days: {
          monday: false,
          tuesday: false,
          wednesday: false,
          Thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
        },
        startTime: "",
        endTime: "",
      },
    ]);
  };

  const removeTimeRange = (index) => {
    setTimeRanges((prev) => prev.filter((_, i) => i !== index));
  };

  const [selectedOptions, setSelectedOptions] = useState({
    undoHair: "No",
    washHair: "No",
    blowDryHair: "No",
  });

  const [sliderStates, setSliderStates] = useState({
    undoHair: false,
    washHair: false,
    blowDryHair: false,
    Overnightbooking: true,
  });

  const [services, setServices] = useState({
    undoHair: false,
    washHair: false,
    blowDryHair: false,
  });

  const handleChange = (key) => {
    setServices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleRadiusChange = (e) => {
    const value = e.target.value;
    setRadius(value);
    e.target.style.setProperty("--fill-percent", `${value}%`);
  };

  const renderCheckbox = (label, key, Icon) => (
    <label className="flex items-center sm:gap-8 justify-between" key={key}>
      <div className="flex items-center gap-1">
        {Icon && <Icon size={25} color="#000000" />}
        <span className="font-[700] font-sansation sm:text-[17px] text-[15px] text-charcoal">
          {label}
        </span>
      </div>

      <input
        type="checkbox"
        className="peer hidden"
        checked={services[key]}
        onChange={() => handleChange(key)}
      />
      <div
        className={`w-[28px] h-[28px] rounded-sm flex items-center justify-center transition-colors duration-300
            ${
              services[key]
                ? "bg-[#FF827F]"
                : "bg-[#D9D9D9] border border-[#2F2F2F]"
            }`}
      >
        {services[key] && (
          <svg
            className="w-4 h-4 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
    </label>
  );
  const renderSlider = (label, key, Icon, showValue) => (
    <label className="flex items-center justify-between" key={key}>
      <div className="flex items-center gap-1">
        {Icon && <Icon size={25} color="#000000" />}
        <span className="font-[700] font-sansation sm:text-[17px] text-[15px] text-charcoal">
          {label}
        </span>
      </div>

      {/* Switch */}
      <div className="flex items-center gap-2">
        {showValue && (
          <p className="sm:text-[15px] text-[15px] font-[400] font-sansation text-[#2F2F2F]">
            {sliderStates[key] ? "Yes" : "No"}
          </p>
        )}
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={sliderStates[key]} // reflect state
            onChange={() =>
              setSliderStates((prev) => ({
                ...prev,
                [key]: !prev[key],
              }))
            }
          />
          <div className="w-11 h-6 bg-[#D9D9D9] peer-checked:bg-[#123E41] rounded-full relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
        </label>
      </div>
    </label>
  );
  const renderCheckboxDays = (label, key, index) => (
    <label className="flex items-center sm:gap-5 justify-between" key={key}>
      <input
        type="checkbox"
        className="peer hidden"
        checked={timeRanges[index].days[key]}
        onChange={() => handleChangeDays(index, key)}
      />
      <div
        className={`w-[28px] h-[28px] rounded-sm flex items-center justify-center transition-colors duration-300
      ${
        timeRanges[index].days[key]
          ? "bg-primary"
          : "bg-[#D9D9D9] border border-[#2F2F2F]"
      }`}
      >
        {timeRanges[index].days[key] && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <span className="font-[700] font-sansation sm:text-[17px] text-[15px] text-charcoal">
        {label}
      </span>
    </label>
  );

  const renderOption = (label, key, Icon) => (
    <div className="flex items-center justify-between" key={key}>
      <div className="flex items-center gap-1">
        {Icon && <Icon size={25} color="#000000" />}
        <span className="font-[700] font-sansation sm:text-[17px] text-[15px] text-charcoal">
          {label}
        </span>
      </div>

      {/* Toggle Group */}
      <div className="flex items-center bg-[#FFFFFF] rounded-[36px] p-[2px] border border-[#123E41]">
        {["No", "Only", "Yes"].map((opt) => (
          <button
            key={opt}
            className={`px-3 py-1 text-sm rounded-full transition-all font-sansation  ${
              selectedOptions[key] === opt
                ? "bg-[#F4E1B7] text-[#123E41] font-[600]"
                : "text-[#123E41]"
            }`}
            onClick={() =>
              setSelectedOptions((prev) => ({ ...prev, [key]: opt }))
            }
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  const handleopensecondmodal = () => {
    setModalOpen2(false);
    setModalOpen3(true);
  };

  const handleopenthirdmodal = () => {
    setModalOpen3(false);
    setModalOpen4(true);
  };

  const handleopenforthmodal = () => {
    setModalOpen4(false);
    setModalOpen5(true);
  };

  const handleopenfivthhmodal = () => {
    setModalOpen5(false);
    setModalOpen6(true);
  };

  const handleopensixthhmodal = () => {
    setModalOpen6(false);
    setModalOpen7(true);
  };

  const handlebackfirstmodal = () => {
    setModalOpen3(false);
    setModalOpen2(true);
  };

  const handlebacksecondmodal = () => {
    setModalOpen4(false);
    setModalOpen3(true);
  };

  const handlebackthirdmodal = () => {
    setModalOpen5(false);
    setModalOpen4(true);
  };

  const handlebackforthmodal = () => {
    setModalOpen6(false);
    setModalOpen5(true);
  };

  const handleopenEditmodal = () => {
    setModalOpen9(true);
    setEdit(true);
  };

  const handleopenAddmodal = () => {
    setModalOpen9(true);
    setEdit(false);
  };
  const handleopendeletesuccesmodal = () => {
    setModalOpen11(false);
    setModalOpen12(true);
  };

  const handleshowpolicy = () => {
    setShowPolicy(!showpolicy);
  };

  const showLicenceStatus = () => {
    setModalOpen7(false);
    setLincenceStatus(true);
  };

  return (
    <BusinessOwnerDashboardLayout
      title="Account Settings"
      headerAction={
        <div className="flex items-center gap-2">
          <button
            className="bg-[#97E7EC]  text-[#123E41] font-bold text-lg px-5 py-2 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#7dd9e0] transition"
            onClick={() => setModalOpen10(true)}
          >
            Close the Business
          </button>
          <button
            className="bg-[#FFE6D8] text-[#FF827F] font-bold text-lg px-5 py-2 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={() => setModalOpen11(true)}
          >
            Delete Account
          </button>
        </div>
      }
    >
      <ChangePasswordModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
      <AddAddressModal
        isOpen={isModalOpen1}
        onClose={() => setModalOpen1(false)}
      />
      <LicenseVerificationModal
        isOpen={isModalOpen2}
        onClose={() => setModalOpen2(false)}
        handleopensecondmodal={handleopensecondmodal}
      />
      <AddBusinessInformationModal
        isOpen={isModalOpen3}
        onClose={() => setModalOpen3(false)}
        handleopenthirdmodal={handleopenthirdmodal}
        handlebackfirstmodal={handlebackfirstmodal}
      />
      <AddTaxpayerIdentificationModal
        isOpen={isModalOpen4}
        onClose={() => setModalOpen4(false)}
        handleopenforthmodal={handleopenforthmodal}
        handlebacksecondmodal={handlebacksecondmodal}
      />
      <AddUploadRequirementsModal
        isOpen={isModalOpen5}
        onClose={() => setModalOpen5(false)}
        handleopenfivthhmodal={handleopenfivthhmodal}
        handlebackthirdmodal={handlebackthirdmodal}
      />
      <AddIDVerificationsModal
        isOpen={isModalOpen6}
        onClose={() => setModalOpen6(false)}
        handlebackforthmodal={handlebackforthmodal}
        handleopensixthhmodal={handleopensixthhmodal}
      />
      <AddSuccessVerificationModal
        isOpen={isModalOpen7}
        onClose={() => setModalOpen7(false)}
        onclick={showLicenceStatus}
      />
      <ShowQRModal isOpen={isModalOpen8} onClose={() => setModalOpen8(false)} />
      <AddNewPolicyModal
        isOpen={isModalOpen9}
        onClose={() => setModalOpen9(false)}
        edit={edit}
      />
      <CloseBussinessModal
        isOpen={isModalOpen10}
        onClose={() => setModalOpen10(false)}
      />
      <DeleteBussinessAccountModal
        isOpen={isModalOpen11}
        onClose={() => setModalOpen11(false)}
        handleopendeletesuccesmodal={handleopendeletesuccesmodal}
      />
      <DeleteBussinessAccountSuccesModal
        isOpen={isModalOpen12}
        onClose={() => setModalOpen12(false)}
      />

      <div className="accountsetting-container">
        <h6 className="sm:text-[30px] text-[20px] font-[500] text-charcoal  font-rasa mb-2">
          Account Details
        </h6>
        <div className="mb-2 flex items-center gap-5">
          <div className="w-full">
            <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-1 text-charcoal">
              Profile Photo
            </label>
            <div className="relative w-full h-20 bg-gray-200 rounded overflow-hidden border border-[#2F2F2F]">
              <img
                src={img}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-7 right-9">
                <RiEditFill color="#FAF9F6" size={25} />
              </button>
            </div>
          </div>
          <div className="w-full">
            <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-1 text-charcoal">
              Cover Photo
            </label>
            <div className="relative w-full h-20 bg-gray-200 rounded overflow-hidden border border-[#2F2F2F]">
              <img
                src={img2}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-7 right-9">
                <RiEditFill color="#FAF9F6" size={25} />
              </button>
            </div>
          </div>
        </div>

        {/* Business Name */}
        <div className="mb-2">
          <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-1 text-charcoal">
            Business Name
          </label>
          <div className="flex items-center border border-[#2F2F2F] rounded px-3 py-2">
            <input
              type="text"
              value="Sexy Braids"
              className="flex-1 outline-none bg-transparent text-charcoal font-sansation"
              readOnly
            />
            <button className="text-[#2F2F2F80] text-[15px] font-sansation">
              Change
            </button>
          </div>
        </div>

        {/* Full Name */}
        <div className="mb-2">
          <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-1 text-charcoal">
            Full Name
          </label>
          <div className="flex items-center border border-[#2F2F2F] rounded px-3 py-2">
            <input
              type="text"
              value="Wilson George"
              className="flex-1 outline-none bg-transparent text-charcoal font-sansation"
              readOnly
            />
            <button className="text-[#2F2F2F80] text-1xl">✕</button>
          </div>
        </div>

        {/* Email */}
        <div className="mb-2">
          <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-1 text-charcoal">
            Email
          </label>
          <div className="flex items-center border border-[#2F2F2F] rounded px-3 py-2">
            <input
              type="email"
              value="wilson.george@gmail.com"
              className="flex-1 outline-none bg-transparent text-charcoal font-sansation"
              readOnly
            />
            <button className="text-[#2F2F2F80] text-[15px] font-sansation">
              Change
            </button>
          </div>
        </div>

        {/* Phone Number */}
        <div className="mb-2">
          <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-1 text-charcoal">
            Phone Number
          </label>
          <div className="flex items-center border border-[#2F2F2F] rounded px-3 py-2">
            <input
              type="text"
              value="(778) 745 2369"
              className="flex-1 outline-none bg-transparent text-charcoal font-sansation"
              readOnly
            />
            <button className="text-[#2F2F2F80] text-[15px] font-sansation">
              Change
            </button>
          </div>
        </div>

        {/* Birthday */}
        <div className="mb-4">
          <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-1 text-charcoal">
            Birthday <span className="text-[#2F2F2F80]">(MM-DD-YYYY)</span>
          </label>
          <div className="flex items-center border border-[#2F2F2F] rounded px-3 py-2">
            <input
              type="date"
              value="1990-05-12"
              className="flex-1 outline-none bg-transparent text-charcoal font-sansation"
              readOnly
            />
            <button className="text-[#2F2F2F80] text-1xl">✕</button>
          </div>
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-1 text-charcoal">
            Password
          </label>
          <div
            className="flex items-center border border-[#2F2F2F] rounded px-3 py-2"
            onClick={() => setModalOpen(true)}
          >
            <input
              type="text"
              value="Change Password"
              className="flex-1 outline-none bg-transparent text-charcoal font-sansation"
              readOnly
            />
            <button className="text-[#2F2F2F80] text-[20px] font-sansation">
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* Licence & Verification */}
        {showlicencestatus ? (
          <>
            <div className="mb-2">
              <button className="flex items-center gap-2 bg-primary text-primary font-medium py-2 px-4 rounded-[10px] sm:text-[25px] text-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] font-rasa">
                Licence & Verification Status
                <IoMdInformationCircle color="#FFF" size={30} />
              </button>
            </div>
            <div className="slider-wrapper11 mb-2">
              <input
                type="range"
                min="1"
                max="100"
                value={radius}
                onChange={handleRadiusChange}
                className="slider1"
                style={{ "--fill-percent": `${radius}%` }}
              />
              <div className="slider-value">Pending</div>
            </div>
          </>
        ) : (
          <div className="mb-2">
            <button
              className="flex items-center gap-2 bg-primary text-primary font-medium py-2 px-4 rounded-[10px] sm:text-[25px] text-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] font-rasa"
              onClick={() => setModalOpen2(true)}
            >
              Licence & Verification
              <IoMdInformationCircle color="#FFF" size={30} />
            </button>
          </div>
        )}
        {/* QR */}
        <div className="mb-4">
          <button
            className="bg-primary  text-primary font-medium py-2 px-4 rounded-[10px] sm:text-[25px] text-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] font-rasa"
            onClick={() => setModalOpen8(true)}
          >
            Show Your QR
          </button>
        </div>

        <div className="mb-4">
          <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-1 text-charcoal">
            Your Amenities
          </label>
          <div className="flex flex-wrap sm:items-center gap-8 sm:flex-row flex-col">
            {renderCheckbox(
              "Parking Space",
              "undoHair",
              MdOutlineDirectionsCarFilled
            )}
            {renderCheckbox("Wi-Fi", "washHair", FaWifi)}
            {renderCheckbox(
              "Credit Cards Accepted",
              "blowDryHair",
              IoCardOutline
            )}
            {renderCheckbox(
              "Accessible For People With Disabilities",
              "notapplication",
              PiWheelchairDuotone
            )}
            {renderCheckbox(
              "Child-Friendly",
              "Child-Friendly",
              PiPuzzlePieceBold
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-col space-y-5">
            {renderOption(
              "Is this a mobile salon service?",
              "undoHair",
              FaShuttleVan
            )}
            {renderSlider(
              "Do you accept custom style requests?",
              "washHair",
              IoGitPullRequestSharp,
              true
            )}
            {renderSlider(
              "Do you accept same-day appointments for each  service?",
              "blowDryHair",
              LiaUserClockSolid,
              true
            )}
            {renderSlider(
              "Set recurring overnight hours by weekday",
              "Overnightbooking",
              IoIosCloudyNight
            )}
          </div>
        </div>
        {sliderStates.Overnightbooking && (
          <div className="mb-4">
            {timeRanges.map((range, index) => (
              <div key={range.id} className="mb-5">
                <div className="flex flex-wrap sm:items-center gap-8 sm:flex-row flex-col mb-2">
                  {renderCheckboxDays("Sunday", "monday", index)}
                  {renderCheckboxDays("Monday", "tuesday", index)}
                  {renderCheckboxDays("Tuesday", "wednesday", index)}
                  {renderCheckboxDays("Wednesday", "Thursday", index)}
                  {renderCheckboxDays("Thursday", "friday", index)}
                  {renderCheckboxDays("Friday", "saturday", index)}
                  {renderCheckboxDays("Saturday", "sunday", index)}
                </div>

                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div>
                    <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-2 text-charcoal">
                      Start Time
                    </label>
                    <input
                      type="time"
                      value={range.startTime}
                      onChange={(e) =>
                        handleTimeChange(index, "startTime", e.target.value)
                      }
                      className="w-full border border-[#2F2F2F] rounded px-2 py-2 outline-none bg-transparent text-charcoal font-sansation"
                    />
                  </div>
                  <div>
                    <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-2 text-charcoal">
                      End Time
                    </label>
                    <input
                      type="time"
                      value={range.endTime}
                      onChange={(e) =>
                        handleTimeChange(index, "endTime", e.target.value)
                      }
                      className="w-full border border-[#2F2F2F] rounded px-2 py-2 outline-none bg-transparent text-charcoal font-sansation"
                    />
                  </div>
                </div>

                {index === 1 && (
                  <div
                    className="flex items-center gap-1.5 cursor-pointer"
                    onClick={() => removeTimeRange(index)}
                  >
                    <FaMinus color="#2F2F2F" size={20} />
                    <h6 className="sm:text-[20px] text-[15px] font-bold font-sansation text-charcoal">
                      Remove time range
                    </h6>
                  </div>
                )}
              </div>
            ))}
            <div
              className="flex items-center gap-1.5 cursor-pointer"
              onClick={addTimeRange}
            >
              <FaPlus color="#2F2F2F" size={20} />
              <h6 className="sm:text-[20px] text-[15px] font-bold font-sansation text-charcoal">
                Add another time range
              </h6>
            </div>
          </div>
        )}
        {/* cancellation policy */}
        <div className="mb-4">
          <label className="text-[20px] font-bold font-sansation mb-1.5 text-charcoal flex items-center gap-1">
            <MdBlock />
            Choose your cancellation policy option.
          </label>

          <div className="flex flex-wrap gap-0.5">
            {options.map((label) => (
              <div
                key={label}
                onClick={() => setSelected(label)}
                className={`sm:min-w-[200px] sm:min-h-[40px] px-4 py-3 rounded-[7px] transition-all text-center focus:outline-none cursor-pointer
                                    ${
                                      selected === label
                                        ? "bg-[#123E41] text-[#FAF9F6] border border-[#FAF9F6] font-[700] text-[17px]"
                                        : "bg-transparent text-[#2F2F2F] border border-[#2F2F2F] font-[400] text-[17px]"
                                    }`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
        {/* rescheduling */}
        <div className="mb-4">
          {renderSlider(
            "Choose your rescheduling window",
            "blowDryHair",
            LuCalendarArrowUp
          )}

          <div className="flex flex-wrap gap-0.5 mt-2">
            {options1.map((label) => (
              <div
                key={label}
                onClick={() => setSelected(label)}
                className={`sm:min-w-[200px] sm:min-h-[40px] px-4 py-3 rounded-[7px] transition-all text-center focus:outline-none cursor-pointer
                                    ${
                                      selected === label
                                        ? "bg-[#123E41] text-[#FAF9F6] border border-[#FAF9F6] font-[700] text-[17px]"
                                        : "bg-transparent text-[#2F2F2F] border border-[#2F2F2F] font-[400] text-[17px]"
                                    }`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
        {/* deposit behavior  */}
        <div className="mb-4">
          <label className="text-[20px] font-bold font-sansation mb-1.5 text-charcoal flex items-center gap-1">
            <FaHandHoldingDollar />
            Choose deposit behavior on reschedule
          </label>

          <div className="flex flex-wrap gap-0.5">
            {options2.map((label) => (
              <div
                key={label}
                onClick={() => setSelected(label)}
                className={`sm:min-w-[200px] sm:min-h-[40px] px-4 py-3 rounded-[7px] transition-all text-center focus:outline-none cursor-pointer
                                    ${
                                      selected === label
                                        ? "bg-[#123E41] text-[#FAF9F6] border border-[#FAF9F6] font-[700] text-[17px]"
                                        : "bg-transparent text-[#2F2F2F] border border-[#2F2F2F] font-[400] text-[17px]"
                                    }`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
        {/* Policy  */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <button className="bg-[#FFE6D8] mb-5 text-secondary font-medium py-1 px-4 rounded-[10px] hover:bg-[#FFD6D0] transition duration-300 text-[25px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] font-rasa">
              Shop Policy
            </button>
            <div className="flex items-center gap-2">
              <div
                className="bg-secondary w-[41px] h-[41px] rounded-full flex items-center justify-center cursor-pointer"
                onClick={handleopenAddmodal}
              >
                <FaPlus color="white" size={20} />
              </div>
              <div
                className="bg-secondary w-[41px] h-[41px] rounded-full flex items-center justify-center cursor-pointer"
                onClick={handleshowpolicy}
              >
                {showpolicy ? (
                  <IoIosArrowUp color="white" size={20} />
                ) : (
                  <IoIosArrowDown color="white" size={20} />
                )}
              </div>
            </div>
          </div>
          {showpolicy && (
            <div className="w-full">
              <PolicyTable handleopenEditmodal={handleopenEditmodal} />
            </div>
          )}
        </div>

        <div className="mb-4 flex gap-5">
          <label className="text-[20px] font-bold font-sansation mb-1.5 text-charcoal">
            Change your service radius
          </label>
          <div className="slider-wrapper">
            <input
              type="range"
              min="1"
              max="100"
              value={radius}
              onChange={handleRadiusChange}
              className="slider"
              style={{ "--fill-percent": `${radius}%` }}
            />
            <div className="slider-value">{radius} miles</div>
          </div>
        </div>
        <div className="mb-4">
          <label className="text-[20px] font-bold font-sansation mb-1.5 text-charcoal">
            Show Services To:
          </label>

          <div className="flex flex-wrap gap-0.5">
            {options3.map((label) => (
              <div
                key={label}
                onClick={() => setSelected(label)}
                className={`sm:min-w-[200px] sm:min-h-[40px] px-4 py-3 rounded-[7px] transition-all text-center focus:outline-none cursor-pointer
                                    ${
                                      selected === label
                                        ? "bg-[#123E41] text-[#FAF9F6] border border-[#FAF9F6] font-[700] text-[17px]"
                                        : "bg-transparent text-[#2F2F2F] border border-[#2F2F2F] font-[400] text-[17px]"
                                    }`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
        {/* Address */}
        <div className="mb-2">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="w-full">
              <h6 className="sm:text-[30px] text-[20px] font-[500] text-charcoal font-rasa">
                Address
              </h6>
              <label className="block sm:text-[20px] text-[15px] font-bold font-sansation text-charcoal mb-2">
                Your Address
              </label>
              <p className="text-[16px] font-medium text-charcoal font-rasa m-0 mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <button
                className="w-full bg-[#FFE6D8] mb-5 text-secondary font-medium py-3 rounded-[10px] hover:bg-[#FFD6D0] transition duration-300 text-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] font-rasa"
                onClick={() => setModalOpen1(true)}
              >
                Enter Your Location
              </button>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <img
                src={img1}
                alt="Location illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
        {/* Settings */}
        <div className="mb-5">
          <h6 className="sm:text-[30px] text-[20px] font-[500] text-charcoal font-rasa flex items-center gap-2">
            <MdEmail color="#000000" />
            Appointment Notifications
          </h6>
          <label className="block sm:text-[20px] text-[15px] font-bold font-sansation text-charcoal mb-2">
            IF APPOINTMENT STATUS CHANGES, NOTIFY ME BY
          </label>
          <div className="flex items-center gap-10 mt-3">
            <div className="flex items-center gap-5">
              <span className="text-[20px] font-bold font-sansation text-charcoal">
                Email
              </span>

              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-[#D9D9D9] peer-checked:bg-[#123E41] rounded-full relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </label>
            </div>
            <div className="flex items-center gap-5 ">
              <span className="text-[20px] font-bold font-sansation text-charcoal">
                Phone Number
              </span>

              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-[#D9D9D9] peer-checked:bg-[#123E41] rounded-full relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </label>
            </div>
          </div>
        </div>
        <div className="mb-2">
          <h6 className="sm:text-[30px] text-[20px] font-[500] text-charcoal font-rasa flex items-center gap-2">
            <MdEmail color="#000000" />
            Referral Program
            <AiFillInfoCircle color="#2F2F2F" size={20} />
          </h6>
          <label className="block sm:text-[20px] text-[15px] font-bold font-sansation text-charcoal mb-2">
            INVITE YOUR FRIENDS AND EARN REWARDS!
          </label>
        </div>
        {/* Invitation Link */}
        <div className="mb-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-sm font-bold font-sansation text-charcoal">
              git clone https://git.latrice.org/project/dummy_link.git cd
              dummy_link
            </span>
            <div className="flex items-center gap-0.5 cursor-pointer border border-[#2F2F2F] bg-white rounded-[10px] p-2">
              <span className="text-sm  font-sansation text-[#757575]">
                Copy link
              </span>
              <IoIosCopy color="#2F2F2F" />
            </div>
          </div>
        </div>
      </div>
    </BusinessOwnerDashboardLayout>
  );
}
