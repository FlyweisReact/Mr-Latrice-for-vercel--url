import React, { useRef, useState, useEffect } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { IoClose } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { IoCloudUploadSharp } from "react-icons/io5";
import { PiPuzzlePieceBold } from "react-icons/pi";
import { TbMoodKid } from "react-icons/tb";
import { PiWheelchairDuotone } from "react-icons/pi";
import { MdBlock } from "react-icons/md";
import { RiInformationFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { PiStarFill } from "react-icons/pi";
import { IoIosRadioButtonOn } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineAccessAlarms } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { IoIosCopy } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { TiUpload } from "react-icons/ti";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import { FaArrowDown } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";

import img from "../../assets/images/dashboard/img5.png";
import img1 from "../../assets/images/dashboard/img6.png";
import img2 from "../../assets/images/dashboard/img7.jpg";
import img3 from "../../assets/images/dashboard/img8.gif";
import img4 from "../../assets/images/dashboard/img12.png";
import img5 from "../../assets/images/dashboard/img13.png";
import img6 from "../../assets/images/dashboard/img14.png";
import img7 from "../../assets/images/dashboard/img15.png";
import img8 from "../../assets/images/dashboard/img16.png";
import img9 from "../../assets/images/dashboard/img17.png";
import img10 from "../../assets/images/dashboard/img18.png";
import img11 from "../../assets/images/dashboard/img19.png";
import img12 from "../../assets/images/dashboard/img20.png";
import img13 from "../../assets/images/dashboard/img21.png";
import img14 from "../../assets/images/dashboard/img30.png";
import img15 from "../../assets/images/dashboard/img33.png";
import img16 from "../../assets/images/dashboard/img34.jpg";
import img17 from "../../assets/images/dashboard/img35.jpg";
import img18 from "../../assets/images/dashboard/img29.png";
import img19 from "../../assets/images/dashboard/img39.png";
import img20 from "../../assets/images/dashboard/img42.png";
import img21 from "../../assets/images/dashboard/img70.jpg";
import img22 from "../../assets/images/dashboard/img74.png";
import img23 from "../../assets/images/dashboard/img90.jpg";
import img24 from "../../assets/images/dashboard/img91.jpg";
import img25 from "../../assets/images/dashboard/img75.jpg";
import img26 from "../../assets/images/dashboard/img22.jpg";
import img27 from "../../assets/images/dashboard/img76.png";
import img28 from "../../assets/images/dashboard/img107.jpg";
import img29 from "../../assets/images/dashboard/img108.jpg";
import img30 from "../../assets/images/dashboard/img40.jpg";
import img31 from "../../assets/images/dashboard/profileimg.jpg";
import img32 from "../../assets/images/dashboard/img86.jpg";
import img33 from "../../assets/images/dashboard/img33.png";
import img34 from "../../assets/images/dashboard/img34.jpg";
import img35 from "../../assets/images/dashboard/img120.jpg";

import {
  TimePicker,
  TimePicker1,
  TimeSlotSelector,
  ChairSelector,
  TimePickerForModal,
  TimePicker2,
} from "../Date Time Picker/TimePicker";
import ChooseDatePicker from "../Date Time Picker/DatePicker";

import DatePicker from "react-datepicker";
import { enUS } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";

const ChangePasswordModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-[#FFFFFF] rounded-[20px] w-full max-w-lg  relative shadow-xl">
        <div className="flex items-center justify-between p-3 border-b border-[#123E41]">
          <h2 className="sm:text-xl text-[20px] font-semibold text-charcoal">
            Change Password
          </h2>
          <IoClose
            onClick={onClose}
            color="#2F2F2F"
            size={20}
            className="cursor-pointer"
          />
        </div>
        <div className="p-4">
          {/* Password Inputs */}
          <div className="space-y-2">
            <div>
              <label className="block font-[500] mb-1 font-rasa text-charcoal sm:text-[20px] text-[15px]">
                New Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="enter your password here"
                  className="w-full border border-[#123E41] rounded-[6px] px-4 py-2 pr-10 outline-none"
                />
                <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">
                  <FaRegEye />
                </span>
              </div>
              <p className="text-right text-[12px] text-[#123E41]">
                e.g. P@ssw0rd2024!
              </p>
            </div>

            <div>
              <label className="block font-[500] mb-1 font-rasa text-charcoal sm:text-[20px] text-[15px]">
                Re-enter Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="enter your password here"
                  className="w-full border border-[#123E41] rounded-md px-4 py-2 pr-10"
                />
                <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">
                  <FaRegEye />
                </span>
              </div>
              <p className="text-right text-[12px] text-[#123E41]">
                e.g. P@ssw0rd2024!
              </p>
            </div>
          </div>
          {/* Password Rules */}
          <div className="text-sm mt-6 text-gray-700">
            <p className="font-rasa text-charcoal sm:text-[18px] text-[15px]">
              <strong className="font-[600]">Length:</strong> Minimum 8
              characters, maximum 20 characters.
            </p>
            <p className="mt-1 font-rasa text-charcoal sm:text-[18px] text-[15px]">
              <strong className="font-[600]">Complexity:</strong> Must include
              at least one of each:
              <ul className="list-disc list-inside ml-2">
                <li>Uppercase Letter (A-Z)</li>
                <li>Lowercase Letter (a-z)</li>
                <li>Number (0-9)</li>
                {/* <li>Special Character (!@#$%^&*()_-+=<>?/{}[]~)</li>     */}
              </ul>
            </p>
          </div>
          {/* Save Button */}
          <div className="mt-6 flex justify-center">
            <button className="bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition w-[150px]">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddAddressModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-[#FFFFFF] rounded-[20px] w-full max-w-lg  relative shadow-xl">
        <div className="flex items-center justify-between p-3 border-b border-[#123E41]">
          <h2 className="sm:text-xl text-[20px] font-semibold text-charcoal">
            Enter Address
          </h2>
          <IoClose
            onClick={onClose}
            color="#2F2F2F"
            size={20}
            className="cursor-pointer"
          />
        </div>
        <div className="p-4">
          {/* Password Inputs */}
          <div className="space-y-2">
            <div>
              <label className="block font-[500] mb-1 font-rasa text-charcoal sm:text-[20px] text-[15px]">
                Street & Number
              </label>
              <input
                type="text"
                placeholder="enter here"
                className="w-full border border-[#123E41] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
            <div>
              <label className="block font-[500] mb-1 font-rasa text-charcoal sm:text-[20px] text-[15px]">
                Apartment or Suite Number (optional)
              </label>
              <input
                type="text"
                placeholder="enter here"
                className="w-full border border-[#123E41] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
            <div>
              <label className="block font-[500] mb-1 font-rasa text-charcoal sm:text-[20px] text-[15px]">
                City
              </label>
              <input
                type="text"
                placeholder="enter here"
                className="w-full border border-[#123E41] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
            <div>
              <label className="block font-[500] mb-1 font-rasa text-charcoal sm:text-[20px] text-[15px]">
                Zip Code
              </label>
              <input
                type="text"
                placeholder="enter here"
                className="w-full border border-[#123E41] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
          </div>
          {/* Save Button */}
          <div className="mt-6 flex">
            <button className="bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition w-full">
              Save your address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostAProject = ({ isOpen, onClose, handleStapfirst }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl">
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Post A Project
          </h2>
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer absolute top-0 right-0"
          />
        </div>

        {/* Subheading */}
        <p className="sm:text-[25px] text-[20px] font-[600] text-charcoal font-rasa mt-2">
          Welcome to the Latrice Service Cart – Share Your Request, Get Expert
          Responses!
        </p>

        {/* Image */}
        <div className="flex justify-center mb-4 mt-2">
          <img
            src={img} // <-- Replace with actual image path
            alt="Latrice Service"
            className="max-h-80 object-contain"
          />
        </div>

        {/* Description */}
        <p className="sm:text-[20px] text-[18px] font-[600] mb-8 text-charcoal font-rasa">
          Fill out the form below to describe the service you need. Your request
          will be shared with experienced professionals, allowing you to receive
          tailored responses and find the perfect provider for your needs!…..
        </p>

        {/* Next Button */}
        <div className="text-right mb-4">
          <button
            className="bg-[#FFE6D8] text-[#FF827F] font-medium text-sm px-6 py-2 rounded-full shadow hover:bg-[#fbbcb5] transition"
            onClick={handleStapfirst}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const AddServiceModal = ({
  isOpen,
  onClose,
  handleBackStapfirst,
  handleStapSecond,
}) => {
  if (!isOpen) return null;
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

  const renderCheckbox = (label, key) => (
    <label className="flex items-center space-x-2" key={key}>
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
      <span className="font-[700] font-sansation sm:text-[17px] text-[15px] text-charcoal">
        {label}
      </span>
    </label>
  );

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl">
        <div className="flex items-center justify-between">
          <IoArrowBack
            onClick={handleBackStapfirst}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Add Service
          </h2>
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
        </div>

        {/* Progress stepper */}
        <div className="mb-6 relative">
          {/* Progress bar background */}
          <div className="h-1.5 bg-[#D9D9D9] rounded-full w-full absolute top-4"></div>

          {/* Active progress */}
          <div className="h-1.5 bg-secondary rounded-full w-1/5 absolute top-4"></div>

          {/* Step indicators */}
          <div className="flex justify-between relative">
            {/* Step 1 - Account (Active) */}
            <div className="text-center">
              <div className="w-10 h-10  bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-[700] font-sansation">
                1
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Add service
              </p>
            </div>

            {/* Step 2 - Validation */}
            <div className="text-center">
              <div className="w-10 h-10 bg-[#D9D9D9]  rounded-full flex items-center justify-center mx-auto font-[700] font-sansation text-charcoal">
                2
              </div>
              <p className="mt-1 text-charcoal font-sansation font-[400] m-0 sm:text-[18px] text-[15px]">
                Service details
              </p>
            </div>

            {/* Step 3 - Started */}
            <div className="text-center">
              <div className="w-10 h-10 bg-[#D9D9D9]  rounded-full flex items-center justify-center mx-auto font-[700] font-sansation text-charcoal">
                3
              </div>
              <p className="mt-1 text-charcoal font-sansation font-[400] m-0 sm:text-[18px] text-[15px]">
                Date & time
              </p>
            </div>

            {/* Step 4 - Started */}
            <div className="text-center">
              <div className="w-10 h-10 bg-[#D9D9D9]  rounded-full flex items-center justify-center mx-auto font-[700] font-sansation text-charcoal">
                4
              </div>
              <p className="mt-1 text-charcoal font-sansation font-[400] m-0 sm:text-[18px] text-[15px]">
                Select target
              </p>
            </div>

            {/* Step 5 - Started */}
            <div className="text-center">
              <div className="w-10 h-10 bg-[#D9D9D9]  rounded-full flex items-center justify-center mx-auto font-[700] font-sansation text-charcoal">
                5
              </div>
              <p className="mt-1 text-charcoal font-sansation font-[400] m-0 sm:text-[18px] text-[15px]">
                Validation
              </p>
            </div>
          </div>
        </div>

        <form className="space-y-4 h-[40vh] overflow-auto modal2">
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Select Category *
            </label>
            <select className="w-full border border-[#2F2F2F] rounded px-3 py-2 mt-1 outline-none text-[#2F2F2F80]">
              <option>Select a category</option>
            </select>
          </div>
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Select Size *
            </label>
            <select className="w-full border border-[#2F2F2F] rounded px-3 py-2 mt-1 outline-none text-[#2F2F2F80]">
              <option>Select service size/Length</option>
            </select>
          </div>
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Service Name *
            </label>
            <input
              type="text"
              className="w-full border border-[#2F2F2F] rounded px-3 py-2 mt-1 outline-none text-[#2F2F2F80]"
              placeholder="Select or type your service name"
            />
          </div>
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Add Additional Service
            </label>
            <div className="flex items-center justify-between">
              {renderCheckbox("Undo hair", "undoHair")}
              {renderCheckbox("Wash hair", "washHair")}
              {renderCheckbox("Blow dry hair", "blowDryHair")}
            </div>
          </div>
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Proposed Price *
            </label>
            <div className="flex items-center rounded px-3 py-2 border border-[#2F2F2F] relative">
              <input
                type="text"
                className="flex-grow outline-none text-[#2F2F2F80]"
                placeholder="Proposed price"
              />
              <span className="px-3 py-2 bg-[#2F2F2F] text-[#FAF9F6] absolute right-0">
                $
              </span>
            </div>
          </div>
        </form>

        {/* Next Button */}
        <div className="flex items-center justify-end p-3">
          <button
            className="bg-[#FFE6D8] text-[#FF827F] font-medium text-sm px-6 py-2 rounded-full shadow hover:bg-[#fbbcb5] transition"
            onClick={handleStapSecond}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const AddServiceDetailsModal = ({
  isOpen,
  onClose,
  handleBackStapsecond,
  handleStapThird,
}) => {
  if (!isOpen) return null;
  const [services, setServices] = useState({
    undoHair: false,
    washHair: false,
    blowDryHair: false,
  });

  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (key) => {
    setServices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const renderCheckbox = (label, key, Icon) => (
    <label className="flex items-center justify-between" key={key}>
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

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl">
        <div className="flex items-center justify-between">
          <IoArrowBack
            onClick={handleBackStapsecond}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Service Details
          </h2>
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
        </div>

        {/* Progress stepper */}
        <div className="mb-6 relative">
          {/* Progress bar background */}
          <div className="h-1.5 bg-[#D9D9D9] rounded-full w-full absolute top-4"></div>

          {/* Active progress */}
          <div className="h-1.5 bg-secondary rounded-full w-2/5 absolute top-4"></div>

          {/* Step indicators */}
          <div className="flex justify-between relative">
            {/* Step 1 - Account (Active) */}
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Add service
              </p>
            </div>

            {/* Step 2 - Validation */}
            <div className="text-center">
              <div className="w-10 h-10  bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-[700] font-sansation">
                2
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Service details
              </p>
            </div>

            {/* Step 3 - Started */}
            <div className="text-center">
              <div className="w-10 h-10 bg-[#D9D9D9]  rounded-full flex items-center justify-center mx-auto font-[700] font-sansation text-charcoal">
                3
              </div>
              <p className="mt-1 text-charcoal font-sansation font-[400] m-0 sm:text-[18px] text-[15px]">
                Date & time
              </p>
            </div>

            {/* Step 4 - Started */}
            <div className="text-center">
              <div className="w-10 h-10 bg-[#D9D9D9]  rounded-full flex items-center justify-center mx-auto font-[700] font-sansation text-charcoal">
                4
              </div>
              <p className="mt-1 text-charcoal font-sansation font-[400] m-0 sm:text-[18px] text-[15px]">
                Select target
              </p>
            </div>

            {/* Step 5 - Started */}
            <div className="text-center">
              <div className="w-10 h-10 bg-[#D9D9D9]  rounded-full flex items-center justify-center mx-auto font-[700] font-sansation text-charcoal">
                5
              </div>
              <p className="mt-1 text-charcoal font-sansation font-[400] m-0 sm:text-[18px] text-[15px]">
                Validation
              </p>
            </div>
          </div>
        </div>

        <form className="space-y-4 h-[40vh] overflow-auto modal2">
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Service details *
            </label>
            <textarea
              className="w-full border border-[#2F2F2F] rounded px-3 py-2 mt-1 outline-none text-[#2F2F2F80] h-[150px]"
              placeholder="Please describe the hairstyle or service you’re looking for..."
            />
          </div>
          <div>
            <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal flex items-center gap-1">
              <RiInformationFill /> This step is optional
            </label>
            <div
              className="w-full border border-[#2F2F2F] rounded px-3 py-4 mt-1 flex flex-col items-center justify-center cursor-pointer h-30"
              onClick={handleClick}
            >
              <p className="font-[400] font-sansation text-secondary text-center">
                Upload an illustration image
              </p>
              <IoCloudUploadSharp color="#FF827F" size={35} />
            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />

            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm mb-2">Preview:</p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-full h-auto rounded border"
                />
              </div>
            )}
          </div>
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Select Any That Apply
            </label>
            <div className="flex flex-col space-y-2">
              {renderCheckbox("Kid Service", "undoHair", PiPuzzlePieceBold)}
              {renderCheckbox("Kid-Friendly", "washHair", TbMoodKid)}
              {renderCheckbox(
                "Wheelchair Accessible",
                "blowDryHair",
                PiWheelchairDuotone
              )}
              {renderCheckbox("Not Application", "notapplication", MdBlock)}
            </div>
          </div>
        </form>

        {/* Next Button */}
        <div className="flex items-center justify-end p-3">
          <button
            className="bg-[#FFE6D8] text-[#FF827F] font-medium text-sm px-6 py-2 rounded-full shadow hover:bg-[#fbbcb5] transition"
            onClick={handleStapThird}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const AddDateTimeModal = ({
  isOpen,
  onClose,
  handleBackStapThird,
  handleStapForth,
}) => {
  if (!isOpen) return null;
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl">
        <div className="flex items-center justify-between">
          <IoArrowBack
            onClick={handleBackStapThird}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Date & Time
          </h2>
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
        </div>

        {/* Progress stepper */}
        <div className="mb-6 relative">
          {/* Progress bar background */}
          <div className="h-1.5 bg-[#D9D9D9] rounded-full w-full absolute top-4"></div>

          {/* Active progress */}
          <div className="h-1.5 bg-secondary rounded-full w-3/5 absolute top-4"></div>

          {/* Step indicators */}
          <div className="flex justify-between relative">
            {/* Step 1 - Account (Active) */}
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Add service
              </p>
            </div>

            {/* Step 2 - Validation */}
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Service details
              </p>
            </div>

            {/* Step 3 - Started */}
            <div className="text-center">
              <div className="w-10 h-10  bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-[700] font-sansation">
                3
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Date & time
              </p>
            </div>

            {/* Step 4 - Started */}
            <div className="text-center">
              <div className="w-10 h-10 bg-[#D9D9D9]  rounded-full flex items-center justify-center mx-auto font-[700] font-sansation text-charcoal">
                4
              </div>
              <p className="mt-1 text-charcoal font-sansation font-[400] m-0 sm:text-[18px] text-[15px]">
                Select target
              </p>
            </div>

            {/* Step 5 - Started */}
            <div className="text-center">
              <div className="w-10 h-10 bg-[#D9D9D9]  rounded-full flex items-center justify-center mx-auto font-[700] font-sansation text-charcoal">
                5
              </div>
              <p className="mt-1 text-charcoal font-sansation font-[400] m-0 sm:text-[18px] text-[15px]">
                Validation
              </p>
            </div>
          </div>
        </div>

        <form
          className="space-y-4 h-[40vh] overflow-auto modal2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-secondary flex items-center gap-1">
              Select a date * <RiInformationFill />
            </label>
            <ChooseDatePicker
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
            />
          </div>
          <div>
            <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-secondary flex items-center gap-1">
              What Time ? * <RiInformationFill />
            </label>
            <TimePicker
              selectedTime={selectedTime}
              onSelectTime={setSelectedTime}
            />
          </div>
        </form>

        {/* Next Button */}
        <div className="flex items-center justify-end p-3">
          <button
            className="bg-[#FFE6D8] text-[#FF827F] font-medium text-sm px-6 py-2 rounded-full shadow hover:bg-[#fbbcb5] transition"
            onClick={handleStapForth}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const AddSelectTargetModal = ({
  isOpen,
  onClose,
  handleBackStapForth,
  handleStapFivth,
}) => {
  if (!isOpen) return null;
  const [selectedOption, setSelectedOption] = useState("");
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);

  const options = [
    {
      label: "Independent",
      icon: (
        <FaUser
          size={30}
          color={selectedOption === "Independent" ? "#F67067" : "#2F2F2F"}
        />
      ),
    },
    {
      label: "Salon",
      icon: (
        <FaBagShopping
          size={30}
          color={selectedOption === "Salon" ? "#F67067" : "#2F2F2F"}
        />
      ),
    },
    {
      label: "Both",
      icon: (
        <PiStarFill
          size={30}
          color={selectedOption === "Both" ? "#F67067" : "#2F2F2F"}
        />
      ),
    },
  ];

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl">
        <div className="flex items-center justify-between">
          <IoArrowBack
            onClick={handleBackStapForth}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Select Target
          </h2>
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
        </div>

        {/* Progress stepper */}
        <div className="mb-6 relative">
          {/* Progress bar background */}
          <div className="h-1.5 bg-[#D9D9D9] rounded-full w-full absolute top-4"></div>

          {/* Active progress */}
          <div className="h-1.5 bg-secondary rounded-full w-4/5 absolute top-4"></div>

          {/* Step indicators */}
          <div className="flex justify-between relative">
            {/* Step 1 - Account (Active) */}
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Add service
              </p>
            </div>

            {/* Step 2 - Validation */}
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Service details
              </p>
            </div>

            {/* Step 3 - Started */}
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Date & time
              </p>
            </div>

            {/* Step 4 - Started */}
            <div className="text-center">
              <div className="w-10 h-10  bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-[700] font-sansation">
                4
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Select target
              </p>
            </div>

            {/* Step 5 - Started */}
            <div className="text-center">
              <div className="w-10 h-10 bg-[#D9D9D9]  rounded-full flex items-center justify-center mx-auto font-[700] font-sansation text-charcoal">
                5
              </div>
              <p className="mt-1 text-charcoal font-sansation font-[400] m-0 sm:text-[18px] text-[15px]">
                Validation
              </p>
            </div>
          </div>
        </div>

        <form
          className="space-y-4 h-[40vh] overflow-auto modal2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-secondary flex items-center gap-1 mb-2">
              Select Target <RiInformationFill />
            </label>
            <div className="flex items-center gap-2 sm:gap-4">
              {options.map((option) => (
                <div
                  key={option.label}
                  className={`bg-[#FAF9F6] w-full flex flex-col items-center justify-center gap-2 sm:h-[150px] h-fit p-3 sm:p-0 rounded-[10px] cursor-pointer border-4 relative ${
                    selectedOption === option.label
                      ? "border-[#FF827F]"
                      : "border-[#2F2F2F66]"
                  }`}
                  onClick={() => setSelectedOption(option.label)}
                >
                  {option.icon}
                  <h6
                    className={`font-sansation font-[700] sm:text-[20px] text-[15px] ${
                      selectedOption === option.label
                        ? "text-[#F67067]"
                        : "text-charcoal"
                    }`}
                  >
                    {option.label}
                  </h6>
                  {selectedOption === option.label && (
                    <div className="absolute top-2 right-4">
                      <IoIosRadioButtonOn color="#FF827F" size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-secondary flex items-center gap-1 mb-2">
              Do you want the service provider to drive to you?{" "}
              <RiInformationFill />
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1 cursor-pointer">
                <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                  Yes
                </span>
                <span className="relative w-4 h-4">
                  <input
                    type="radio"
                    name="yesno"
                    className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                    checked={value === true}
                    onChange={() => setValue(true)}
                  />
                  <span
                    className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                      value === true ? "border-[#F67067]" : "border-[#2F2F2F]"
                    } border`}
                  ></span>
                </span>
              </label>

              <label className="flex items-center gap-1 cursor-pointer">
                <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                  No
                </span>
                <span className="relative w-4 h-4">
                  <input
                    type="radio"
                    name="yesno"
                    className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                    checked={value === false}
                    onChange={() => setValue(false)}
                  />
                  <span
                    className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                      value === false ? "border-[#F67067]" : "border-[#2F2F2F]"
                    } border`}
                  ></span>
                </span>
              </label>
            </div>
          </div>
          {value && (
            <>
              <div>
                <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                  Enter the address where you’d like the service provider to
                  come, if it differs from the one listed in your account.
                </label>
                <div className="flex items-center rounded px-3 py-2 border border-[#2F2F2F] relative">
                  <input
                    type="text"
                    className="flex-grow outline-none text-[#2F2F2F80]"
                    placeholder="Enter here.."
                  />
                  <span className="px-3 py-2 bg-[#2F2F2F] text-[#FAF9F6] absolute right-0">
                    $
                  </span>
                </div>
              </div>
              <div>
                <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                  Traveling expenses
                </label>
                <div className="flex items-center rounded px-3 py-2 border border-[#2F2F2F] relative">
                  <input
                    type="text"
                    className="flex-grow outline-none text-[#2F2F2F80]"
                    placeholder="Min amount $20"
                  />
                  <span className="px-3 py-2 bg-[#2F2F2F] text-[#FAF9F6] absolute right-0">
                    $
                  </span>
                </div>
              </div>
              <div>
                <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-secondary flex items-center gap-1 mb-2">
                  Free parking spot?
                  <RiInformationFill className="text-[#FF827F] text-lg" />
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                      Yes
                    </span>
                    <span className="relative w-4 h-4">
                      <input
                        type="radio"
                        name="yesno1"
                        className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                        checked={value1 === true}
                        onChange={() => setValue1(true)}
                      />
                      <span
                        className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                          value1 === true
                            ? "border-[#F67067]"
                            : "border-[#2F2F2F]"
                        } border`}
                      ></span>
                    </span>
                  </label>

                  <label className="flex items-center gap-1 cursor-pointer">
                    <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                      No
                    </span>
                    <span className="relative w-4 h-4">
                      <input
                        type="radio"
                        name="yesno1"
                        className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                        checked={value1 === false}
                        onChange={() => setValue1(false)}
                      />
                      <span
                        className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                          value1 === false
                            ? "border-[#F67067]"
                            : "border-[#2F2F2F]"
                        } border`}
                      ></span>
                    </span>
                  </label>
                </div>
              </div>
            </>
          )}
          <div>
            <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-secondary flex items-center gap-1 mb-2">
              Special event? <RiInformationFill />
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1 cursor-pointer">
                <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                  Yes
                </span>
                <span className="relative w-4 h-4">
                  <input
                    type="radio"
                    name="yesno2"
                    className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                    checked={value2 === true}
                    onChange={() => setValue2(true)}
                  />
                  <span
                    className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                      value2 === true ? "border-[#F67067]" : "border-[#2F2F2F]"
                    } border`}
                  ></span>
                </span>
              </label>

              <label className="flex items-center gap-1 cursor-pointer">
                <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                  No
                </span>
                <span className="relative w-4 h-4">
                  <input
                    type="radio"
                    name="yesno2"
                    className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                    checked={value2 === false}
                    onChange={() => setValue2(false)}
                  />
                  <span
                    className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                      value2 === false ? "border-[#F67067]" : "border-[#2F2F2F]"
                    } border`}
                  ></span>
                </span>
              </label>
            </div>
          </div>
          {value2 && (
            <div>
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                Enter Special event tip
              </label>
              <div className="flex items-center rounded px-3 py-2 border border-[#2F2F2F] relative">
                <input
                  type="text"
                  className="flex-grow outline-none text-[#2F2F2F80]"
                  placeholder="Min amount $50"
                />
                <span className="px-3 py-2 bg-[#2F2F2F] text-[#FAF9F6] absolute right-0">
                  $
                </span>
              </div>
            </div>
          )}
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal flex items-center gap-2">
              Add Tip
              <RiInformationFill className="text-[#FF827F] text-lg" />
            </label>
            <div className="flex items-center rounded px-3 py-2 border border-[#2F2F2F] relative">
              <input
                type="text"
                className="flex-grow outline-none text-[#2F2F2F80]"
                placeholder="$0.00"
              />
              <span className="px-3 py-2 bg-[#2F2F2F] text-[#FAF9F6] absolute right-0">
                $
              </span>
            </div>
          </div>
        </form>

        {/* Next Button */}
        <div className="flex items-center justify-end p-3">
          <button
            className="bg-[#FFE6D8] text-[#FF827F] font-medium text-sm px-6 py-2 rounded-full shadow hover:bg-[#fbbcb5] transition"
            onClick={handleStapFivth}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const AddValidationModal = ({
  isOpen,
  onClose,
  handleBackStapFivth,
  handleStapSixed,
  handleBackStapsecond,
  handleBackStapThird,
  handleBackStapForth,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl">
        <div className="flex items-center justify-between">
          <IoArrowBack
            onClick={handleBackStapFivth}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Validation
          </h2>
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
        </div>

        {/* Progress stepper */}
        <div className="mb-6 relative">
          {/* Progress bar background */}
          <div className="h-1.5 bg-[#D9D9D9] rounded-full w-full absolute top-4"></div>

          {/* Active progress */}
          <div className="h-1.5 bg-secondary rounded-full w-5/5 absolute top-4"></div>

          {/* Step indicators */}
          <div className="flex justify-between relative">
            {/* Step 1 - Account (Active) */}
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Add service
              </p>
            </div>

            {/* Step 2 - Validation */}
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Service details
              </p>
            </div>

            {/* Step 3 - Started */}
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Date & time
              </p>
            </div>

            {/* Step 4 - Started */}
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Select target
              </p>
            </div>

            {/* Step 5 - Started */}
            <div className="text-center">
              <div className="w-10 h-10  bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-[700] font-sansation">
                5
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Validation
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 h-[40vh] overflow-auto modal2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Category:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Hair Services
              </p>
            </div>
            <img
              src={img1}
              alt=""
              className="cursor-pointer"
              onClick={handleBackStapsecond}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Service Name:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                ABC Service
              </p>
            </div>
            <img
              src={img1}
              alt=""
              className="cursor-pointer"
              onClick={handleBackStapsecond}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Service you need help with:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Full job (Entire service)
              </p>
            </div>
            <img
              src={img1}
              alt=""
              className="cursor-pointer"
              onClick={handleBackStapsecond}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Proposed Price:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                $100.00
              </p>
            </div>
            <img
              src={img1}
              alt=""
              className="cursor-pointer"
              onClick={handleBackStapsecond}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Size:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Micro + Shoulder length
              </p>
            </div>
            <img
              src={img1}
              alt=""
              className="cursor-pointer"
              onClick={handleBackStapsecond}
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block font-[700] font-sansation sm:text-[20px] text-[15px] text-charcoal ">
                Service details:
              </label>
              <img
                src={img1}
                alt=""
                className="cursor-pointer"
                onClick={handleBackStapThird}
              />
            </div>
            <div className="w-full h-auto p-3 border border-[#2F2F2F] rounded-[5px]">
              <p className="font-[400] text-[16px] font-sansation text-charcoal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full border border-[#2F2F2F] rounded-[5px] h-[100px] flex items-center justify-center">
              <img src={img2} alt="" className="h-full w-auto object-contain" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Date & Time:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                26 Feb 2025 at 10:00 am
              </p>
            </div>
            <img
              src={img1}
              alt=""
              className="cursor-pointer"
              onClick={handleBackStapForth}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Target:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Both
              </p>
            </div>
            <img
              src={img1}
              alt=""
              className="cursor-pointer"
              onClick={handleBackStapFivth}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Do you want the service provider to drive to you?:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                No
              </p>
            </div>
            <img
              src={img1}
              alt=""
              className="cursor-pointer"
              onClick={handleBackStapFivth}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Special event?:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                No
              </p>
            </div>
            <img
              src={img1}
              alt=""
              className="cursor-pointer"
              onClick={handleBackStapFivth}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Subtotal:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                $150
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Taxes:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                $13
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Fees:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                $2.4
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Tips:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                $5
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[25px] text-[15px] font-sansation text-charcoal">
                Total:
              </span>
              <p className="font-[700] sm:text-[25px] text-[15px] font-sansation text-charcoal">
                $170.4
              </p>
            </div>
          </div>

          <p className="font-[400] sm:text-[18px] text-[15px] font-sansation text-charcoal">
            100% of your tip goes to your provider, If you claimed to have a
            free parking spot, you may be responsible if their vehicle is{" "}
            <span className="font-[700]">towed</span> due to unavailable parking
            at this time of the service
          </p>
        </div>

        {/* Next Button */}
        <div className="flex items-center justify-end p-3">
          <button
            className="bg-[#FFE6D8] text-[#FF827F] font-medium text-sm px-6 py-2 rounded-full shadow hover:bg-[#fbbcb5] transition"
            onClick={handleStapSixed}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const AddSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm sm:max-w-xl p-3 shadow-xl overflow-y-auto h-130 ">
        <div className="flex items-center flex-col justify-center">
          <img src={img3} alt="" className="w-[150px] h-[150px]" />
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            You have successfully submitted
            <br /> your post.
          </h6>
          <p className="font-rasa font-[500]sm:text-[20px] text-[18px] text-charcoal text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>

        {/* Next Button */}
        <div className="mt-20 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-medium text-lg px-6 py-3 rounded-full shadow hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

const SelectServiceModal = ({
  isOpen,
  onClose,
  services = [],
  handleopenfirst,
}) => {
  if (!isOpen) return null;

  const [search, setSearch] = useState("");

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center overflow-y-auto">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-2 shadow-xl max-h-[90vh] overflow-y-auto overflow-x-hidden">
        <div className="mb-3">
          <div className="flex items-center justify-between">
            <h2 className="font-rasa font-[600] text-[30px] text-charcoal">
              Enter Amount
            </h2>
            <IoMdCloseCircleOutline
              onClick={onClose}
              color="#2F2F2F"
              size={28}
              className="cursor-pointer"
            />
          </div>
          <div className="mb-2 flex items-center gap-2">
            <div className="w-full bg-[#FAF9F6] border border-[#2F2F2F] flex items-center gap-2 rounded-[6px] h-[40px] px-3">
              <FaDollarSign size={20} />
              <input
                type="text"
                placeholder="e.g 500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none border-none w-full bg-transparent placeholder:text-[#014F8680]"
              />
            </div>
            <button
              className="text-[#FFFFFF] text-[12px] px-5 h-[40px] rounded-[4px] bg-charocal font-[700]"
              onClick={handleopenfirst}
            >
              Next
            </button>
          </div>
          <div className="flex items-center w-full">
            <div className="flex-1 relative border-t border-black">
              <span className="absolute right-0 -top-1 rotate-[50deg] border-t-2 border-r-2 border-black w-2 h-2"></span>
            </div>
            <span className="mx-4 font-rasa text-[#121111] font-[700] sm:text-[16px] text-[15px]">
              Or
            </span>
            <div className="flex-1 relative border-t border-black">
              <span className="absolute left-0 -top-1 rotate-[220deg] border-t-2 border-r-2 border-black w-2 h-2"></span>
            </div>
          </div>
        </div>

        <div className="max-h-[70vh] overflow-y-auto pr-2">
          <div className="w-full bg-[#FAF9F6] border border-[#2F2F2F] flex items-center gap-2 rounded-[6px] h-[50px] px-3  mr-1">
            <IoSearchSharp size={20} />
            <input
              type="search"
              placeholder="Search for service or salon"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none border-none w-full bg-transparent placeholder:text-[#014F8680]"
            />
          </div>
          {/* Header */}
          <h2 className="mb-1 font-rasa font-[600] text-[30px] text-charcoal">
            Services
          </h2>
          {/* Services List */}
          {filteredServices.map((service, idx) => (
            <div
              key={idx}
              className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2"
            >
              <div className="flex items-center justify-between">
                <div className="w-[80%]">
                  <h3 className="font-[700]  text-[14px] font-gotu text-[#121111] mb-1">
                    {service.title}
                  </h3>
                  <div className="text-[11.63px] text-[#494948] font-inter font-[400] mb-2">
                    #{service.booked} booked • ${service.price} •{" "}
                    {service.duration}
                  </div>
                  <p className="text-[14px] text-[#494948] font-inter font-[400] mb-2">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-1 text-[12px]  text-[#494948] font-inter font-[400]">
                    <IoIosStarOutline />
                    {service.rating} ({service.reviews})
                    <div className="flex gap-2">
                      {service.img.map((image, idx) => (
                        <img
                          key={idx}
                          src={image.img}
                          alt=""
                          className="w-10 h-10 rounded-[4px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  className="text-[#FFFFFF] text-[12px] px-4 py-1 rounded-[4px] bg-charocal font-[700]"
                  onClick={handleopenfirst}
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AddBeneficiaryDetails = ({ isOpen, onClose, handleopensecond }) => {
  if (!isOpen) return null;
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    birthday: "",
  });

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center overflow-y-auto">
      <div className="bg-white w-full sm:max-w-2xl max-w-md rounded-xl p-6 relative shadow-xl">
        {/* Header */}
        <div className="relative mb-4">
          <h2 className="font-rasa text-charcoal font-[600] sm:text-[30px] text-[20px] text-center">
            Add Beneficiary Details
          </h2>
          <div className="flex items-center gap-2 absolute right-0 top-2">
            <span className="font-rasa text-[#121111] font-[600] sm:text-[18px] text-[15px]">
              03:00
            </span>
            <MdOutlineAccessAlarms className="text-[#2F2F2F]" size={24} />
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>

        <p className="font-rasa text-charcoal font-[500] sm:text-[28px] text-[20px]">
          Add beneficiary from family & friends list
        </p>
        <form className="space-y-4 overflow-auto modal2">
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Family & Friends
            </label>
            <select className="w-full border border-[#2F2F2F] rounded px-3 py-2 mt-1 outline-none text-[#2F2F2F80]">
              <option>Select from here...</option>
            </select>
          </div>
          <p className="font-rasa text-charcoal font-[500] sm:text-[28px] text-[20px]">
            Or enter manually
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
            <div>
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
            <div>
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
            <div>
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                Email Address
              </label>
              <input
                type="text"
                className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
              Birthday
            </label>
            <input
              type="text"
              placeholder="(YYYY-MM-DD)"
              className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
            />
          </div>
        </form>
        <div className="mt-6 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleopensecond}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

const AddGiftCardDateandTime = ({
  isOpen,
  onClose,
  handleopengofirst,
  handleopenthird,
  handleopenpayment,
}) => {
  if (!isOpen) return null;

  const SERVICE_OPTIONS = [
    { key: "undoHair", label: "Undo hair ($45, +1hr)", price: 45, time: 60 },
    { key: "washHair", label: "Wash hair ($20, +20mins)", price: 20, time: 20 },
    {
      key: "blowDryHair",
      label: "Blow dry hair ($15, +20mins)",
      price: 15,
      time: 20,
    },
  ];
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [services, setServices] = useState({});
  const [showAdditionalServices, setShowAdditionalServices] = useState(false);

  const handleChange = (key) => {
    setServices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const basePrice = 40;
  const baseTime = 30;

  const handleToggleService = (key) => {
    setServices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  const totalPrice =
    basePrice +
    SERVICE_OPTIONS.reduce(
      (sum, item) => (services[item.key] ? sum + item.price : sum),
      0
    );
  const totalTime =
    baseTime +
    SERVICE_OPTIONS.reduce(
      (sum, item) => (services[item.key] ? sum + item.time : sum),
      0
    );

  const formatTime = (mins) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h > 0 ? `${h}hr` : ""}${m > 0 ? ` ${m}min` : ""}`.trim();
  };

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl">
        <div className="flex items-center gap-2 absolute right-2 top-4">
          <span className="font-rasa text-[#121111] font-[600] sm:text-[18px] text-[15px]">
            03:00
          </span>
          <MdOutlineAccessAlarms className="text-[#2F2F2F]" size={24} />
          <IoMdCloseCircleOutline
            className="cursor-pointer text-xl text-[#000000]"
            onClick={onClose}
          />
        </div>
        <div
          className="space-y-4 h-[80vh] overflow-auto modal2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <ChooseDatePicker
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
            />
          </div>
          <div>
            <TimeSlotSelector />
          </div>
          <div>
            <TimePicker1
              selectedTime={selectedTime}
              onSelectTime={setSelectedTime}
            />
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2">
            <div className="flex items-center justify-between">
              <div className="">
                <h3 className="font-[700]  text-[14px] font-gotu text-[#121111] mb-1">
                  Gent's Standard
                </h3>
                <p className="text-[14px] text-[#494948] font-inter font-[400] mb-2">
                  Professional consultation, haircut, hot lather neck shave,
                  shampoo and conditioner
                </p>

                <div className="flex items-center gap-1 text-[12px] text-[#494948] font-inter font-[400] mt-2">
                  Staff
                  <img src={img4} alt="" className="w-10 h-10 rounded-full" />
                  <h6 className="text-[#121111] sm:text-[14px] text-[10px] font-[700] font-inter">
                    Lydia Baptista
                  </h6>
                </div>
              </div>
              <div className="flex items-end flex-col">
                <h6 className="text-[#121111] sm:text-[18px] text-[15px] font-[700] font-inter">
                  $40.00
                </h6>
                <p className="text-[#757575] sm:text-[14px] text-[15px] font-[400] font-inter">
                  10:30 AM - 11:00 AM
                </p>
              </div>
            </div>
          </div>
          {/* Toggle additional services */}
          <div className="flex  justify-between">
            <div>
              <div
                onClick={() =>
                  setShowAdditionalServices(!showAdditionalServices)
                }
                className="flex items-center gap-2 cursor-pointer"
              >
                {showAdditionalServices ? (
                  <FaMinus className="text-[#014F86] sm:text-[20px] text-[15px]" />
                ) : (
                  <FaPlus className="text-[#014F86] sm:text-[20px] text-[15px]" />
                )}
                <h6 className="font-rasa text-[#014F86] sm:text-[27px] text-[20px] font-[600]">
                  {showAdditionalServices
                    ? "Remove additional service"
                    : "Add additional service"}
                </h6>
              </div>
              {showAdditionalServices && (
                <div className="flex flex-col space-y-2 mt-2">
                  {SERVICE_OPTIONS.map(({ key, label }) => (
                    <label className="flex items-center gap-2" key={key}>
                      <input
                        type="checkbox"
                        className="peer hidden"
                        checked={services[key]}
                        onChange={() => handleToggleService(key)}
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
                      <span className="font-[700] font-sansation sm:text-[17px] text-[15px] text-[#121111]">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
            <div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleopengofirst}
              >
                <FaPlus className="text-[#014F86] sm:text-[20px] text-[15px]" />
                <h6 className="font-rasa text-[#014F86] sm:text-[27px] text-[20px] font-[600]">
                  Add another service
                </h6>
              </div>

              <div className="flex flex-col items-end justify-end mt-8">
                <div className="flex items-center">
                  <span className="font-[500] text-[#121111] mr-1 sm:text-[18px] text-[15px]">
                    Total:
                  </span>
                  <span className="font-[700] text-[#121111] mr-1 sm:text-[30px] text-[25px] m-0">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="pl-[50px] mt-1">
                  <span className="font-[500] text-[#757575] mr-1 sm:text-[16px] text-[15px]">
                    {formatTime(totalTime)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-5">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handleopenpayment}
          >
            Skip
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handleopenthird}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
const ReviewandConfirm = ({
  isOpen,
  onClose,
  handleopenfouth,
  handlebackthird,
}) => {
  if (!isOpen) return null;

  const [selected, setSelected] = useState("");

  const persantages = ["10%", "15%", "20%"];

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-3 shadow-xl">
        {/* hearder  */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <IoArrowBack
              color="#2F2F2F"
              size={25}
              className="cursor-pointer"
              onClick={handlebackthird}
            />
            <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
              Review and confirm
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-rasa text-[#121111] font-[600] sm:text-[18px] text-[15px]">
              03:00
            </span>
            <MdOutlineAccessAlarms className="text-[#2F2F2F]" size={24} />
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        {/* main */}
        <div className="mt-5">
          <div className="text-center mb-5">
            <h6 className="font-rasa font-[600] sm:text-[30px] text-[20px] text-charcoal">
              February, Wednesday 26 2025
            </h6>
            <p className="font-rasa font-[400] sm:text-[30px] text-[20px] text-charcoal m-0">
              10:30 AM - 12:00 PM (1hour 30min)
            </p>
            <span className="font-rasa font-[600] sm:text-[12px] text-[10px] text-[#757575] m-0">
              Omar Vaccaro Barber Shop
            </span>
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2">
            <div className="flex items-center justify-between">
              <div className="">
                <h3 className="font-[700]  text-[14px] font-gotu text-[#121111] mb-1">
                  Gent's Standard
                </h3>
                <p className="text-[14px] text-[#494948] font-inter font-[400] mb-2">
                  Professional consultation, haircut, hot lather neck shave,
                  shampoo and conditioner
                </p>

                <div className="flex items-center gap-1 text-[12px] text-[#494948] font-inter font-[400] mt-2">
                  Staff
                  <img src={img4} alt="" className="w-10 h-10 rounded-full" />
                  <h6 className="text-[#121111] sm:text-[14px] text-[10px] font-[700] font-inter">
                    Lydia Baptista
                  </h6>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <h6 className="text-[#121111] sm:text-[18px] text-[15px] font-[700] font-inter">
                  $40.00
                </h6>
                <p className="text-[#757575] sm:text-[14px] text-[15px] font-[400] font-inter">
                  {" "}
                  10:30 AM - 11:00 AM
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2 flex items-center justify-between">
            <div>
              <h6 className="text-[#121111] sm:text-[14px] text-[12px] font-[700] font-inter flex items-center">
                Add Tip
                <RiInformationFill className="text-[#FF827F] text-lg" />
              </h6>
              <p className="text-[#757575] sm:text-[14px] text-[12px] font-[400] font-inter">
                Percentage of the service cost
              </p>
            </div>
            <div className="flex items-center gap-2">
              {persantages.map((persantage) => (
                <button
                  key={persantage}
                  onClick={() => setSelected(persantage)}
                  className={`px-2 py-1 rounded-md text-[#000000] sm:text-[15px] text-[12px] font-[700] font-inter transition-all duration-200
        ${
          selected === persantage
            ? "bg-[#FF827F]"
            : "border border-[#2F2F2F80] bg-white"
        }`}
                >
                  {persantage}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 flex items-center gap-2">
              <span className=" text-[#000000] cursor-pointer">
                <FaRegCommentDots />
              </span>
              <input
                type="text"
                placeholder="Leave a note (optional)"
                className="outline-none border-none"
              />
            </div>
          </div>
          <div className="flex flex-col items-end justify-end mt-8">
            <div className="flex items-center">
              <span className="font-[500] text-[#121111] mr-1 sm:text-[18px] text-[15px]">
                Total:
              </span>
              <span className="font-[700] text-[#121111] mr-1 sm:text-[30px] text-[25px] m-0">
                $85.00
              </span>
            </div>
            <div className="pl-[50px] mt-1">
              <span className="font-[500] text-[#757575] mr-1 sm:text-[16px] text-[15px]">
                1hour 30min
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleopenfouth}
          >
            Make Payment
          </button>
        </div>
        <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};

const Makepayment = ({ isOpen, onClose, handleopenfivth, handlebackfouth }) => {
  if (!isOpen) return null;

  const [selected, setSelected] = useState("Credit/Debit Cards");
  const paymentOptions = ["Credit/Debit Cards", "UPI", "PayPal", "Wallets"];

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-3 shadow-xl">
        {/* hearder  */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <IoArrowBack
              color="#2F2F2F"
              size={25}
              className="cursor-pointer"
              onClick={handlebackfouth}
            />
            <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
              Make payment
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-rasa text-[#121111] font-[600] sm:text-[18px] text-[15px]">
              03:00
            </span>
            <MdOutlineAccessAlarms className="text-[#2F2F2F]" size={24} />
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        {/* main */}
        <div className="mt-5">
          <div className="text-center mb-5">
            <h6 className="font-rasa font-[600] sm:text-[30px] text-[20px] text-charcoal">
              February, Wednesday 26 2025
            </h6>
            <p className="font-rasa font-[400] sm:text-[30px] text-[20px] text-charcoal m-0">
              10:30 AM - 12:00 PM (1hour 30min)
            </p>
            <span className="font-rasa font-[600] sm:text-[12px] text-[10px] text-[#757575] m-0">
              Omar Vaccaro Barber Shop
            </span>
            <div className="flex items-center justify-center">
              <span className="font-[500] text-[#121111]  sm:text-[18px] text-[15px]">
                Total:
              </span>
              <span className="font-[700] text-[#121111]  sm:text-[30px] text-[25px] m-0">
                $85.00
              </span>
            </div>
          </div>

          <div>
            <h6 className="font-rasa text-charcoal font-[600] sm:text-[30px] text-[25] text-center mb-2">
              Your Payment Options
            </h6>
            <div className="w-full max-w-2xl mx-auto">
              {/* Tabs */}
              <div className="flex items-center justify-between mb-3">
                {paymentOptions.map((option) => (
                  <div
                    key={option}
                    onClick={() => setSelected(option)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      className={`w-[28px] h-[28px] rounded-full
                                        ${
                                          selected === option
                                            ? "bg-[#34A853]"
                                            : "bg-[#D9D9D9]"
                                        }`}
                    ></div>
                    <p className="sm:text-[17px] text-[15px] text-[#121111] font-[500]">
                      {option}
                    </p>
                  </div>
                ))}
              </div>

              {/* Conditional Fields */}
              {selected === "Credit/Debit Cards" && (
                <div className="space-y-2">
                  <div>
                    <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                      Card Number
                    </label>
                    <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center">
                      <input
                        type="text"
                        placeholder="1234 1234 1234 1234"
                        className="outline-none border-none flex-1"
                      />
                      <div className="flex items-center space-x-2">
                        <img src={img5} alt="Visa" className="h-8" />
                        <img src={img6} alt="Discover" className="h-8" />
                        <img src={img7} alt="Amex" className="h-8" />
                        <img src={img8} alt="Mastercard" className="h-8" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 items-center gap-1">
                    <div>
                      <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                        Expiration Date
                      </label>
                      <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="outline-none border-none flex-1"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                        Security Code
                      </label>
                      <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center">
                        <input
                          type="text"
                          placeholder="CVC"
                          className="outline-none border-none flex-1"
                        />
                        <div className="">
                          <img src={img9} alt="Visa" className="h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                      Country
                    </label>
                    <select
                      name=""
                      id=""
                      className="w-full border border-[#2F2F2F] px-3 py-2 rounded outline-none"
                    >
                      <option value="">United States Of America</option>
                    </select>
                  </div>
                </div>
              )}

              {selected === "UPI" && (
                <div className="space-y-3">
                  <div>
                    <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                      Google Pay
                    </label>
                    <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center gap-1">
                      <div className="flex items-center space-x-2">
                        <img src={img10} alt="Visa" className="h-8" />
                      </div>
                      <input
                        type="text"
                        placeholder="Bank name*****123"
                        className="outline-none border-none flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold">Amazon Pay</label>
                    <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center gap-1">
                      <div className="flex items-center space-x-2">
                        <img src={img11} alt="Visa" className="h-8" />
                      </div>
                      <input
                        type="text"
                        placeholder="Bank name*****123"
                        className="outline-none border-none flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold">Apple Pay</label>
                    <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center gap-1">
                      <div className="flex items-center space-x-2">
                        <img src={img12} alt="Visa" className="h-8" />
                      </div>
                      <input
                        type="text"
                        placeholder="Bank name*****123"
                        className="outline-none border-none flex-1"
                      />
                    </div>
                  </div>
                </div>
              )}

              {selected === "PayPal" && (
                <div>
                  <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                    PayPal
                  </label>
                  <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center gap-1">
                    <div className="flex items-center space-x-2">
                      <img src={img13} alt="Visa" className="h-8" />
                    </div>
                    <input
                      type="text"
                      placeholder="Bank name*****123"
                      className="outline-none border-none flex-1"
                    />
                  </div>
                </div>
              )}

              {selected === "Wallets" && (
                <div className="mt-2">
                  <h6 className="font-sansation font-[700] sm:text-[20px] text-[18px] text-charcoal mb-2">
                    Your wallet balance is $500.00
                  </h6>
                  <p className="font-sansation font-[400] sm:text-[12px] text-[10px] text-[#757575]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-start">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>

        <div className="mt-3 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleopenfivth}
          >
            Pay
          </button>
        </div>
        <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};

const AddPaymenSuccessModal = ({ isOpen, handlshowgiftcard }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm sm:max-w-xl p-3 shadow-xl overflow-y-auto h-130">
        <div className="flex items-center flex-col justify-center">
          <img src={img3} alt="" className="w-[200px] h-[200px]" />
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            A Gift Card Created And Sent Successfully
          </h6>
          <p className="font-rasa font-[500]sm:text-[20px] text-[18px] text-charcoal text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>

        {/* Next Button */}
        <div className="mt-20 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handlshowgiftcard}
          >
            Go Back To Gift Card
          </button>
        </div>
      </div>
    </div>
  );
};

const AddaMember = ({ isOpen, onClose, handleshowfamilycard }) => {
  if (!isOpen) return null;
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    birthday: "",
  });

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center overflow-y-auto">
      <div className="bg-white w-full sm:max-w-2xl max-w-md rounded-xl p-6 relative shadow-xl">
        {/* Header */}
        <div className="relative mb-4">
          <h2 className="font-rasa text-charcoal font-[600] sm:text-[30px] text-[20px] text-center">
            Add a Member
          </h2>
          <div className="flex items-center gap-2 absolute right-0 top-2">
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        <form className="space-y-4 overflow-auto modal2">
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Relation
            </label>
            <select className="w-full border border-[#2F2F2F] rounded px-3 py-2 mt-1 outline-none text-[#2F2F2F80]">
              <option>Friend</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
            <div>
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
            <div>
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
            <div>
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                Email Address
              </label>
              <input
                type="text"
                className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
              Birthday
            </label>
            <input
              type="text"
              placeholder="(YYYY-MM-DD)"
              className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h6 className="sm:text-[20px] text-[18px] font-[700] text-charcoal font-sansation">
                Send Invitation to Member
              </h6>
              <p className="sm:text-[12px] text-[10px] font-[400] text-[#757575] font-rasa">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-[#D9D9D9] peer-checked:bg-[#123E41] rounded-full relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </label>
            </div>
          </div>
          <div className="mb-2">
            <h6 className="sm:text-[20px] text-[18px] font-[700] text-charcoal font-sansation">
              Your Invitation Link
            </h6>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold font-sansation text-charcoal">
                git clone https://git.latrice.org/project/dummy_link.git cd
                dummy_link
              </span>
              <div className="flex items-center gap-0.5 cursor-pointer">
                <span className="text-sm  font-sansation text-[#757575]">
                  Copy link
                </span>
                <IoIosCopy color="#2F2F2F" />
              </div>
            </div>
          </div>
        </form>
        <div className="mt-6 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleshowfamilycard}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const BookingDetailsModal = ({
  isOpen,
  onClose,
  handlopensecond,
  handlopenQR,
  bookingStatus,
  handlopenpaymentype,
  handleopenCanceledsuccessmodal,
  handleopenAcceptsuccessmodal,
  handleopenpostProjectmodal,
  handleOpenNewdate,
  handleOpenNeedHelp,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-3 shadow-xl">
        {/* hearder  */}
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            {bookingStatus === "rescheduled"
              ? "New Rescheduled Date & Time"
              : "Booking Details"}
          </h2>
          <div className="flex items-center gap-2 absolute right-0 top-15">
            <p
              className="sm:text-[20px] text-[15px] font-[600] text-charcoal font-rasa cursor-pointer hover:underline"
              onClick={handleOpenNeedHelp}
            >
              Need Help?
            </p>
          </div>
          <div className="flex items-center gap-2 absolute right-0 top-0">
            <span className="font-rasa text-[#121111] font-[600] sm:text-[18px] text-[15px]">
              03:00
            </span>
            <MdOutlineAccessAlarms className="text-[#2F2F2F]" size={24} />
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        {/* main */}
        <div className="mt-2">
          <div className="text-center mb-5">
            <h6 className="font-rasa font-[600] sm:text-[30px] text-[20px] text-charcoal">
              February, Wednesday 26 2025
            </h6>
            <p className="font-rasa font-[400] sm:text-[30px] text-[20px] text-charcoal m-0">
              10:30 AM - 12:00 PM (1hour 30min)
            </p>
            <span className="font-rasa font-[600] sm:text-[12px] text-[10px] text-[#757575] m-0">
              Omar Vaccaro Barber Shop
            </span>
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2">
            <div className="flex justify-between">
              <div className="">
                <h3 className="font-[700]  text-[14px] font-gotu text-[#121111] mb-1">
                  Gent's Standard
                </h3>
                <p className="text-[14px] text-[#494948] font-inter font-[400] mb-2">
                  Professional consultation, haircut, hot lather neck shave,
                  shampoo and conditioner
                </p>

                <div className="flex items-center gap-1 text-[12px] text-[#494948] font-inter font-[400] mt-2">
                  Staff
                  <img src={img4} alt="" className="w-10 h-10 rounded-full" />
                  <h6 className="text-[#121111] sm:text-[14px] text-[10px] font-[700] font-inter">
                    Lydia Baptista
                  </h6>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <h6 className="text-[#121111] sm:text-[18px] text-[15px] font-[700] font-inter">
                  $40.00
                </h6>
                <p className="text-[#757575] sm:text-[14px] text-[15px] font-[400] font-inter">
                  {" "}
                  10:30 AM - 11:00 AM
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2 flex items-center justify-between">
            <div>
              <h6 className="text-[#121111] sm:text-[14px] text-[12px] font-[700] font-inter">
                Tip
              </h6>
              <p className="text-[#757575] sm:text-[14px] text-[12px] font-[400] font-inter">
                Percentage of the service cost
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-[#FF827F] px-2 py-1 rounded-md text-[#000000] sm:text-[15px] text-[12px] font-[700] font-inter transition-all duration-200">
                $4
              </button>
            </div>
          </div>
          <div>
            <div className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 flex items-center gap-2">
              <span className=" text-[#000000] cursor-pointer">
                <FaRegCommentDots />
              </span>
              <input
                type="text"
                placeholder="Leave a note (optional)"
                className="outline-none border-none flex-1"
                value="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                readOnly
              />
            </div>
          </div>
          {bookingStatus === "pending" ? (
            <div className="flex flex-col items-end justify-end mt-8">
              <div className="flex items-center">
                <span className="font-[500] text-[#121111] mr-1 sm:text-[18px] text-[15px]">
                  Total:
                </span>
                <span className="font-[700] text-[#121111] mr-1 sm:text-[30px] text-[25px] m-0">
                  $44.00
                </span>
              </div>
              <div className="pl-[50px] mt-1">
                <span className="font-[500] text-[#757575] mr-1 sm:text-[16px] text-[15px]">
                  Payment pending...
                </span>
              </div>
            </div>
          ) : bookingStatus === "rescheduled" ? (
            <div className="flex flex-col items-end justify-end mt-8">
              <div className="flex items-center">
                <span className="font-[500] text-[#121111] mr-1 sm:text-[18px] text-[15px]">
                  Total:
                </span>
                <span className="font-[700] text-[#121111] mr-1 sm:text-[30px] text-[25px] m-0">
                  $44.00
                </span>
              </div>
              <div className="pl-[50px] mt-1">
                <span className="font-[500] text-[#757575] mr-1 sm:text-[16px] text-[15px]">
                  30min
                </span>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <button
                className="bg-[#97E7EC] text-[#123E41] font-semibold sm:text-[20px] text-lg px-8 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#6cc8cf] transition"
                onClick={handlopenQR}
              >
                Show QR to Salon
              </button>
              <div className="flex flex-col items-end justify-end mt-8">
                <div className="flex items-center">
                  <span className="font-[500] text-[#121111] mr-1 sm:text-[18px] text-[15px]">
                    Total:
                  </span>
                  <span className="font-[700] text-[#121111] mr-1 sm:text-[30px] text-[25px] m-0">
                    $44.00
                  </span>
                </div>
                <div className="pl-[50px] mt-1">
                  <span className="font-[500] text-[#757575] mr-1 sm:text-[16px] text-[15px]">
                    30min
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {bookingStatus === "pending" ? (
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              className="w-full bg-[#97E7EC] text-[#123E41] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
              onClick={handleopenCanceledsuccessmodal}
            >
              Cancel The Appointment
            </button>
            <button
              className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
              onClick={handlopenpaymentype}
            >
              Change The Payment Type
            </button>
          </div>
        ) : bookingStatus === "rescheduled" ? (
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
              onClick={handleopenAcceptsuccessmodal}
            >
              Accept
            </button>
            <button
              className="w-full bg-[#FFF7D1] text-[#FFCC4E] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] flex items-center justify-center gap-2"
              onClick={handleopenpostProjectmodal}
            >
              Post A Project
              <IoMdInformationCircle size={22} />
            </button>
            <button
              className="w-full bg-[#97E7EC] text-[#123E41] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
              onClick={handleOpenNewdate}
            >
              Decline
            </button>
          </div>
        ) : (
          <div className="mt-6 flex justify-center">
            <button
              className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-3 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
              onClick={handlopensecond}
            >
              Change Date & Time
            </button>
          </div>
        )}
        <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};
const ChangeBookingDateTimeMOdal = ({ isOpen, onClose, handlopenThird }) => {
  if (!isOpen) return null;

  const SERVICE_OPTIONS = [
    { key: "undoHair", label: "Undo hair ($45, +1hr)", price: 45, time: 60 },
    { key: "washHair", label: "Wash hair ($20, +20mins)", price: 20, time: 20 },
    {
      key: "blowDryHair",
      label: "Blow dry hair ($15, +20mins)",
      price: 15,
      time: 20,
    },
  ];
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [services, setServices] = useState({});

  const basePrice = 40;
  const baseTime = 30;

  const totalPrice =
    basePrice +
    SERVICE_OPTIONS.reduce(
      (sum, item) => (services[item.key] ? sum + item.price : sum),
      0
    );
  const totalTime =
    baseTime +
    SERVICE_OPTIONS.reduce(
      (sum, item) => (services[item.key] ? sum + item.time : sum),
      0
    );

  const formatTime = (mins) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h > 0 ? `${h}hr` : ""}${m > 0 ? ` ${m}min` : ""}`.trim();
  };

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl h-[70vh] overflow-auto">
        <div className="flex items-center gap-2 absolute right-2 top-4">
          <span className="font-rasa text-[#121111] font-[600] sm:text-[18px] text-[15px]">
            03:00
          </span>
          <MdOutlineAccessAlarms className="text-[#2F2F2F]" size={24} />
          <IoMdCloseCircleOutline
            className="cursor-pointer text-xl text-[#000000]"
            onClick={onClose}
          />
        </div>
        <div className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <ChooseDatePicker
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
            />
          </div>
          <div>
            <TimeSlotSelector />
          </div>
          <div>
            <TimePicker1
              selectedTime={selectedTime}
              onSelectTime={setSelectedTime}
            />
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2">
            <div className="flex justify-between">
              <div className="">
                <h3 className="font-[700]  text-[14px] font-gotu text-[#121111] mb-1">
                  Gent's Standard
                </h3>
                <p className="text-[14px] text-[#494948] font-inter font-[400] mb-2">
                  Professional consultation, haircut, hot lather neck shave,
                  shampoo and conditioner
                </p>

                <div className="flex items-center gap-1 text-[12px] text-[#494948] font-inter font-[400] mt-2">
                  Staff
                  <img src={img4} alt="" className="w-10 h-10 rounded-full" />
                  <h6 className="text-[#121111] sm:text-[14px] text-[10px] font-[700] font-inter">
                    Lydia Baptista
                  </h6>
                </div>
              </div>
              <div className="flex items-end flex-col">
                <h6 className="text-[#121111] sm:text-[18px] text-[15px] font-[700] font-inter">
                  $40.00
                </h6>
                <p className="text-[#757575] sm:text-[14px] text-[15px] font-[400] font-inter">
                  10:30 AM - 11:00 AM
                </p>
              </div>
            </div>
          </div>
          {/* Toggle additional services */}
          <div className="flex flex-col items-end justify-end mt-8">
            <div className="flex items-center">
              <span className="font-[500] text-[#121111] mr-1 sm:text-[18px] text-[15px]">
                Total:
              </span>
              <span className="font-[700] text-[#121111] mr-1 sm:text-[30px] text-[25px] m-0">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="pl-[50px] mt-1">
              <span className="font-[500] text-[#757575] mr-1 sm:text-[16px] text-[15px]">
                {formatTime(totalTime)}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-3 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handlopenThird}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
const ReviewandConfirmForReshedule = ({
  isOpen,
  onClose,
  handlopenforth,
  handlbacksecond,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-3 shadow-xl">
        {/* hearder  */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <IoArrowBack
              color="#2F2F2F"
              size={25}
              className="cursor-pointer"
              onClick={handlbacksecond}
            />
            <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
              Review and confirm
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-rasa text-[#121111] font-[600] sm:text-[18px] text-[15px]">
              03:00
            </span>
            <MdOutlineAccessAlarms className="text-[#2F2F2F]" size={24} />
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        {/* main */}
        <div className="mt-5">
          <div className="text-center mb-5">
            <h6 className="font-rasa font-[600] sm:text-[30px] text-[20px] text-charcoal">
              February, Wednesday 26 2025
            </h6>
            <p className="font-rasa font-[400] sm:text-[30px] text-[20px] text-charcoal m-0">
              10:30 AM - 12:00 PM (1hour 30min)
            </p>
            <span className="font-rasa font-[600] sm:text-[12px] text-[10px] text-[#757575] m-0">
              Omar Vaccaro Barber Shop
            </span>
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2">
            <div className="flex justify-between">
              <div className="">
                <h3 className="font-[700]  text-[14px] font-gotu text-[#121111] mb-1">
                  Gent's Standard
                </h3>
                <p className="text-[14px] text-[#494948] font-inter font-[400] mb-2">
                  Professional consultation, haircut, hot lather neck shave,
                  shampoo and conditioner
                </p>

                <div className="flex items-center gap-1 text-[12px] text-[#494948] font-inter font-[400] mt-2">
                  Staff
                  <img src={img4} alt="" className="w-10 h-10 rounded-full" />
                  <h6 className="text-[#121111] sm:text-[14px] text-[10px] font-[700] font-inter">
                    Lydia Baptista
                  </h6>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <h6 className="text-[#121111] sm:text-[18px] text-[15px] font-[700] font-inter">
                  $40.00
                </h6>
                <p className="text-[#757575] sm:text-[14px] text-[15px] font-[400] font-inter">
                  {" "}
                  10:30 AM - 11:00 AM
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2 flex items-center justify-between">
            <div>
              <h6 className="text-[#121111] sm:text-[14px] text-[12px] font-[700] font-inter">
                Your Appointment Scheduling Fee
              </h6>
              <p className="text-[#757575] sm:text-[14px] text-[12px] font-[400] font-inter">
                Percentage of the service cost
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 rounded-md text-[#000000] sm:text-[15px] text-[12px] font-[700] font-inter transition-all duration-200">
                10%
              </button>
            </div>
          </div>
          <div>
            <div className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 flex items-center gap-2">
              <span className=" text-[#000000] cursor-pointer">
                <FaRegCommentDots />
              </span>
              <input
                type="text"
                placeholder="Leave a note (optional)"
                className="outline-none border-none"
              />
            </div>
          </div>
          <div className="flex flex-col items-end justify-end mt-8">
            <div className="flex items-center">
              <span className="font-[500] text-[#121111] mr-1 sm:text-[18px] text-[15px]">
                Total:
              </span>
              <span className="font-[700] text-[#121111] mr-1 sm:text-[30px] text-[25px] m-0">
                $44.00
              </span>
            </div>
            <div className="pl-[50px] mt-1">
              <span className="font-[500] text-[#757575] mr-1 sm:text-[16px] text-[15px]">
                30min
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handlopenforth}
          >
            Make Your Extra $4 Payment
          </button>
        </div>
        <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};

const ExtraMakepayment = ({
  isOpen,
  onClose,
  handlopenfivth,
  handlbackthird,
}) => {
  if (!isOpen) return null;

  const [selected, setSelected] = useState("Credit/Debit Cards");
  const paymentOptions = ["Credit/Debit Cards", "NFC", "PayPal", "Wallets"];

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-3 shadow-xl">
        {/* hearder  */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <IoArrowBack
              color="#2F2F2F"
              size={25}
              className="cursor-pointer"
              onClick={handlbackthird}
            />
            <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
              Make payment
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-rasa text-[#121111] font-[600] sm:text-[18px] text-[15px]">
              03:00
            </span>
            <MdOutlineAccessAlarms className="text-[#2F2F2F]" size={24} />
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        {/* main */}
        <div className="mt-5">
          <div className="text-center mb-5">
            <h6 className="font-rasa font-[600] sm:text-[30px] text-[20px] text-charcoal">
              February, Wednesday 28 2025
            </h6>
            <p className="font-rasa font-[400] sm:text-[30px] text-[20px] text-charcoal m-0">
              10:30 AM - 11:00 AM (30min)
            </p>
            <span className="font-rasa font-[600] sm:text-[12px] text-[10px] text-[#757575] m-0">
              Omar Vaccaro Barber Shop
            </span>
            <div className="flex items-center justify-center">
              <span className="font-[500] text-[#121111]  sm:text-[18px] text-[15px]">
                Total:
              </span>
              <span className="font-[700] text-[#121111]  sm:text-[30px] text-[25px] m-0">
                $4.00
              </span>
            </div>
          </div>

          <div>
            <h6 className="font-rasa text-charcoal font-[600] sm:text-[30px] text-[25] text-center mb-2">
              Your Payment Options
            </h6>
            <div className="w-full max-w-2xl mx-auto">
              {/* Tabs */}
              <div className="flex items-center justify-between mb-3">
                {paymentOptions.map((option) => (
                  <div
                    key={option}
                    onClick={() => setSelected(option)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      className={`w-[28px] h-[28px] rounded-full
                                        ${
                                          selected === option
                                            ? "bg-[#34A853]"
                                            : "bg-[#D9D9D9]"
                                        }`}
                    ></div>
                    <p className="sm:text-[17px] text-[15px] text-[#121111] font-[500]">
                      {option}
                    </p>
                  </div>
                ))}
              </div>

              {/* Conditional Fields */}
              {selected === "Credit/Debit Cards" && (
                <div className="space-y-2">
                  <div>
                    <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                      Card Number
                    </label>
                    <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center">
                      <input
                        type="text"
                        placeholder="1234 1234 1234 1234"
                        className="outline-none border-none flex-1"
                      />
                      <div className="flex items-center space-x-2">
                        <img src={img5} alt="Visa" className="h-8" />
                        <img src={img6} alt="Discover" className="h-8" />
                        <img src={img7} alt="Amex" className="h-8" />
                        <img src={img8} alt="Mastercard" className="h-8" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 items-center gap-1">
                    <div>
                      <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                        Expiration Date
                      </label>
                      <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="outline-none border-none flex-1"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                        Security Code
                      </label>
                      <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center">
                        <input
                          type="text"
                          placeholder="CVC"
                          className="outline-none border-none flex-1"
                        />
                        <div className="">
                          <img src={img9} alt="Visa" className="h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                      Country
                    </label>
                    <select
                      name=""
                      id=""
                      className="w-full border border-[#2F2F2F] px-3 py-2 rounded outline-none"
                    >
                      <option value="">United States Of America</option>
                    </select>
                  </div>
                </div>
              )}

              {selected === "NFC" && (
                <div className="space-y-3">
                  <div>
                    <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                      Google Pay
                    </label>
                    <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center gap-1">
                      <div className="flex items-center space-x-2">
                        <img src={img10} alt="Visa" className="h-8" />
                      </div>
                      <input
                        type="text"
                        placeholder="Bank name*****123"
                        className="outline-none border-none flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold">Amazon Pay</label>
                    <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center gap-1">
                      <div className="flex items-center space-x-2">
                        <img src={img11} alt="Visa" className="h-8" />
                      </div>
                      <input
                        type="text"
                        placeholder="Bank name*****123"
                        className="outline-none border-none flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold">Apple Pay</label>
                    <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center gap-1">
                      <div className="flex items-center space-x-2">
                        <img src={img12} alt="Visa" className="h-8" />
                      </div>
                      <input
                        type="text"
                        placeholder="Bank name*****123"
                        className="outline-none border-none flex-1"
                      />
                    </div>
                  </div>
                </div>
              )}

              {selected === "PayPal" && (
                <div>
                  <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                    PayPal
                  </label>
                  <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center gap-1">
                    <div className="flex items-center space-x-2">
                      <img src={img13} alt="Visa" className="h-8" />
                    </div>
                    <input
                      type="text"
                      placeholder="Bank name*****123"
                      className="outline-none border-none flex-1"
                    />
                  </div>
                </div>
              )}

              {selected === "Wallets" && (
                <div className="mt-2">
                  <h6 className="font-sansation font-[700] sm:text-[20px] text-[18px] text-charcoal mb-2">
                    Your wallet balance is $500.00
                  </h6>
                  <p className="font-sansation font-[400] sm:text-[12px] text-[10px] text-[#757575]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-start">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>

        <div className="mt-3 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handlopenfivth}
          >
            Pay
          </button>
        </div>
        <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};
const ReshedulePaymenSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm sm:max-w-xl p-3 shadow-xl overflow-y-auto h-130 ">
        <div className="flex items-center flex-col justify-center">
          <img src={img3} alt="" className="w-[200px] h-[200px]" />
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            Appointment Confirmed
          </h6>
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            10:30 AM - 11:00 AM (30min)
          </h6>
          <p className="font-rasa font-[500]sm:text-[20px] text-[18px] text-charcoal text-center">
            You’re done! We’ll send you a text reminder before your appointment
          </p>
        </div>

        {/* Next Button */}
        <div className="mt-20 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Show In Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

const AppointmentCanceledSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm sm:max-w-xl p-3 shadow-xl overflow-y-auto h-130 ">
        <div className="flex items-center flex-col justify-center">
          <img src={img3} alt="" className="w-[200px] h-[200px]" />
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            Your Appointment Canceled Successfully
          </h6>
          <p className="font-rasa font-[500]sm:text-[20px] text-[18px] text-charcoal text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>

        {/* Next Button */}
        <div className="mt-20 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
const AcceptedNewAppoitmentDateSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm sm:max-w-xl p-3 shadow-xl overflow-y-auto h-130 ">
        <div className="flex items-center flex-col justify-center">
          <img src={img3} alt="" className="w-[200px] h-[200px]" />
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            You Accepted The New Appointment Date
          </h6>
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            10:30 AM - 11:00 AM (30min)
          </h6>
          <p className="font-rasa font-[500]sm:text-[20px] text-[18px] text-charcoal text-center">
            You’re done! We’ll send you a text reminder before your appointment
          </p>
        </div>

        {/* Next Button */}
        <div className="mt-20 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Show In Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

const CreatedNewAppointmentSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm sm:max-w-xl p-3 shadow-xl overflow-y-auto h-130 ">
        <div className="flex items-center flex-col justify-center">
          <img src={img3} alt="" className="w-[200px] h-[200px]" />
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            You Successfully Created A New Appointment
          </h6>
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            10:30 AM - 11:00 AM (30min)
          </h6>
          <p className="font-rasa font-[500]sm:text-[20px] text-[18px] text-charcoal text-center">
            You’re done! We’ll send you a text reminder before your appointment
          </p>
        </div>

        {/* Next Button */}
        <div className="mt-20 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Show In Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

const PastBookingDetailsModal = ({ isOpen, onClose, handlopensecond }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-2xl p-3 shadow-xl overflow-y-auto h-150">
        {/* hearder  */}
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Booking Details
          </h2>
          <div className="flex items-center gap-2 absolute right-0 top-0">
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        {/* main */}
        <div className="mt-2">
          <div className="text-center mb-5">
            <h6 className="font-rasa font-[600] sm:text-[30px] text-[20px] text-charcoal">
              January, Tuesday 28 2025
            </h6>
            <p className="font-rasa font-[400] sm:text-[30px] text-[20px] text-charcoal m-0">
              10:30 AM - 11:00 AM (30min)
            </p>
            <span className="font-rasa font-[600] sm:text-[12px] text-[10px] text-[#757575] m-0">
              Omar Vaccaro Barber Shop
            </span>
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2">
            <div className="flex justify-between">
              <div className="">
                <h3 className="font-[700]  text-[14px] font-gotu text-[#121111] mb-1">
                  Gent's Standard
                </h3>
                <p className="text-[14px] text-[#494948] font-inter font-[400] mb-2">
                  Professional consultation, haircut, hot lather neck shave,
                  shampoo and conditioner
                </p>

                <div className="flex items-center gap-1 text-[12px] text-[#494948] font-inter font-[400] mt-2">
                  Staff
                  <img src={img4} alt="" className="w-10 h-10 rounded-full" />
                  <h6 className="text-[#121111] sm:text-[14px] text-[10px] font-[700] font-inter">
                    Lydia Baptista
                  </h6>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <h6 className="text-[#121111] sm:text-[18px] text-[15px] font-[700] font-inter">
                  $40.00
                </h6>
                <p className="text-[#757575] sm:text-[14px] text-[15px] font-[400] font-inter">
                  {" "}
                  10:30 AM - 11:00 AM
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2 flex items-center justify-between">
            <div>
              <h6 className="text-[#121111] sm:text-[14px] text-[12px] font-[700] font-inter">
                Tip
              </h6>
              <p className="text-[#757575] sm:text-[14px] text-[12px] font-[400] font-inter">
                Percentage of the service cost
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-[#FF827F] px-2 py-1 rounded-md text-[#000000] sm:text-[15px] text-[12px] font-[700] font-inter transition-all duration-200">
                10%
              </button>
            </div>
          </div>
          <div>
            <div className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 flex items-center gap-2">
              <span className=" text-[#000000] cursor-pointer">
                <FaRegCommentDots />
              </span>
              <input
                type="text"
                placeholder="Leave a note (optional)"
                className="outline-none border-none flex-1"
                value="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                readOnly
              />
            </div>
          </div>
          <div className="flex items-center justify-end gap-5">
            <img src={img14} alt="" className="w-52 h-52 object-fit" />
            <div className="flex flex-col items-end justify-end mt-8">
              <div className="flex items-center">
                <span className="font-[500] text-[#121111] mr-1 sm:text-[18px] text-[15px]">
                  Total:
                </span>
                <span className="font-[700] text-[#121111] mr-1 sm:text-[30px] text-[25px] m-0">
                  $44.00
                </span>
              </div>
              <div className="pl-[50px] mt-1">
                <span className="font-[500] text-[#757575] mr-1 sm:text-[16px] text-[15px]">
                  30min
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-3 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handlopensecond}
          >
            Give A Review
          </button>
        </div>
        <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};

const PastBookingReviewModal = ({
  isOpen,
  onClose,
  handlopenThird,
  handlbackfirst,
}) => {
  if (!isOpen) return null;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [images, setImages] = useState([null, null, null, null, null]);

  const handleImageChange = (e, index) => {
    const newImages = [...images];
    newImages[index] = e.target.files[0];
    setImages(newImages);
  };

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-2xl p-3 shadow-xl overflow-y-auto h-150 relative">
        {/* hearder  */}
        <div className="flex items-center justify-between">
          <IoIosArrowBack
            className="cursor-pointer text-2xl text-[#000000]"
            onClick={handlbackfirst}
          />
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Give A Review
          </h2>
          <IoMdCloseCircleOutline
            className="cursor-pointer text-2xl text-[#000000]"
            onClick={onClose}
          />
        </div>
        {/* main */}
        <div className="mt-2">
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2">
            <div className="flex justify-between">
              <div className="">
                <h3 className="font-[700]  text-[14px] font-gotu text-[#121111] mb-1">
                  Gent's Standard
                </h3>
                <p className="text-[14px] text-[#494948] font-inter font-[400] mb-2">
                  Professional consultation, haircut, hot lather neck shave,
                  shampoo and conditioner
                </p>

                <div className="flex items-center gap-1 text-[12px] text-[#494948] font-inter font-[400] mt-2">
                  Staff
                  <img src={img4} alt="" className="w-10 h-10 rounded-full" />
                  <h6 className="text-[#121111] sm:text-[14px] text-[10px] font-[700] font-inter">
                    Lydia Baptista
                  </h6>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <h6 className="text-[#121111] sm:text-[18px] text-[15px] font-[700] font-inter">
                  $40.00
                </h6>
                <p className="text-[#757575] sm:text-[14px] text-[15px] font-[400] font-inter">
                  {" "}
                  10:30 AM - 11:00 AM
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-4 w-full">
            <div className="flex justify-between items-start">
              <label className="font-[700] sm:text-[14px] text-[12px] text-[#121111] mb-2">
                Write a review
              </label>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => {
                  const starValue = i + 1;
                  return (
                    <IoIosStar
                      key={i}
                      size={22}
                      className="cursor-pointer transition"
                      color={
                        starValue <= (hover || rating) ? "#FFC107" : "#E0E0E0"
                      }
                      onClick={() => setRating(starValue)}
                      onMouseEnter={() => setHover(starValue)}
                      onMouseLeave={() => setHover(0)}
                    />
                  );
                })}
              </div>
            </div>

            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Type your review..."
              className="w-full bg-[#FAF9F6] border border-[#00000033] rounded-[10px] p-3 text-sm resize-none focus:outline-none"
              rows={2}
            />

            <div className="flex gap-2 mt-1 flex-wrap">
              {images.map((img, index) => (
                <label
                  key={index}
                  className="w-[60px] h-[60px] border border-dashed border-[#00000033] flex flex-col justify-center items-center text-center text-xs rounded-[8px] cursor-pointer hover:bg-gray-500"
                >
                  {img ? (
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : (
                    <>
                      <span className="text-xl text-[#123E41] font-[700]">
                        +
                      </span>
                      <spa className="font-[700] text-[10px] font-sansation text-charcoal hover:text-white">
                        Add Image
                      </spa>
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageChange(e, index)}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-center absolute bottom-2 ">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handlopenThird}
          >
            Submit
          </button>
          <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </div>
  );
};
const PastBookingReviewSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm sm:max-w-xl p-3 shadow-xl overflow-y-auto h-130 ">
        <div className="flex items-center flex-col justify-center">
          <img src={img3} alt="" className="w-[200px] h-[200px]" />
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            Your Review Has Been Successfully Submitted
          </h6>
          <p className="font-rasa font-[500]sm:text-[20px] text-[18px] text-charcoal text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>

        {/* Next Button */}
        <div className="mt-20 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const ClaimBookingModal = ({ isOpen, onClose, handlopensecond }) => {
  if (!isOpen) return null;
  const [images, setImages] = useState([null, null, null]);

  const handleImageChange = (e, index) => {
    const newImages = [...images];
    newImages[index] = e.target.files[0];
    setImages(newImages);
  };

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-2xl p-3 shadow-xl overflow-y-auto h-150 relative">
        {/* hearder  */}
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Claim
          </h2>
          <div className="absolute right-0 top-0">
            <IoMdCloseCircleOutline
              className="cursor-pointer text-2xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>

        {/* main */}
        <div className="mt-2">
          <div className="flex flex-col gap-2 mb-5">
            <label className="font-[700] sm:text-[18px] text-[15px] text-[#121111] ">
              Add your disputed pictures
            </label>
            <div className="flex gap-2 mt-1 flex-wrap">
              {images.map((img, index) => (
                <label
                  key={index}
                  className="w-[100px] h-[100px] border-2 border-dashed border-[#2F2F2F] flex flex-col justify-center items-center text-center text-xs rounded-[8px] cursor-pointer hover:bg-gray-500"
                >
                  {img ? (
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : (
                    <>
                      <span className="text-2xl text-[#123E41] font-[700]">
                        +
                      </span>
                      <spa className="font-[700] text-[13px] font-sansation text-charcoal hover:text-white">
                        Add Image
                      </spa>
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageChange(e, index)}
                  />
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-[700] sm:text-[18px] text-[15px] text-[#121111] ">
              Add your comment
            </label>
            <div className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 flex items-start gap-2 bg-white">
              <span className="text-[#000000] mt-1">
                <FaRegCommentDots />
              </span>
              <textarea
                placeholder="Leave a note"
                rows={4}
                className="w-full text-black placeholder:text-[#014F8680] placeholder:font-medium resize-none focus:outline-none bg-transparent"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 left-0 w-full px-4">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handlopensecond}
          >
            Submit Dispute
          </button>
        </div>
      </div>
    </div>
  );
};

const ClaimBookingSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm sm:max-w-xl p-3 shadow-xl overflow-y-auto h-130 ">
        <div className="flex items-center flex-col justify-center">
          <img src={img3} alt="" className="w-[200px] h-[200px]" />
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            Your Dispute Claim Has Been Submitted Successfully.
          </h6>
        </div>

        {/* Next Button */}
        <div className="mt-20 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

const BasketEditDetailModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl">
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Edit
          </h2>
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer absolute right-0 top-0"
          />
        </div>

        <div className="space-y-4 h-[40vh] overflow-auto modal2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Category:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Hair Services
              </p>
            </div>
            <img src={img1} alt="" className="cursor-pointer" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Service Name:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                ABC Service
              </p>
            </div>
            <img src={img1} alt="" className="cursor-pointer" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Service you need help with:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Full job (Entire service)
              </p>
            </div>
            <img src={img1} alt="" className="cursor-pointer" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Proposed Price:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                $100.00
              </p>
            </div>
            <img src={img1} alt="" className="cursor-pointer" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Size:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Micro + Shoulder length
              </p>
            </div>
            <img src={img1} alt="" className="cursor-pointer" />
          </div>
          <div>
            <label className="block font-[700] font-sansation sm:text-[20px] text-[15px] text-charcoal mb-2">
              Service details:
            </label>
            <div className="w-full h-auto p-3 border border-[#2F2F2F] rounded-[5px]">
              <p className="font-[400] text-[16px] font-sansation text-charcoal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full border border-[#2F2F2F] rounded-[5px] h-[100px] flex items-center justify-center">
              <img src={img2} alt="" className="h-full w-auto object-contain" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Date & Time:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                26 Feb 2025 at 10:00 am
              </p>
            </div>
            <img src={img1} alt="" className="cursor-pointer" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Target:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Both
              </p>
            </div>
            <img src={img1} alt="" className="cursor-pointer" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Do you want the service provider to drive to you?:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                No
              </p>
            </div>
            <img src={img1} alt="" className="cursor-pointer" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Special event?:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                No
              </p>
            </div>
            <img src={img1} alt="" className="cursor-pointer" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Subtotal:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                $150
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Taxes:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                $13
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Fees:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                $2.4
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Tips:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                $5
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[25px] text-[15px] font-sansation text-charcoal">
                Total:
              </span>
              <p className="font-[700] sm:text-[25px] text-[15px] font-sansation text-charcoal">
                $170.4
              </p>
            </div>
          </div>

          <p className="font-[400] sm:text-[18px] text-[15px] font-sansation text-charcoal">
            100% of your tip goes to your provider, If you claimed to have a
            free parking spot, you may be responsible if their vehicle is{" "}
            <span className="font-[700]">towed</span> due to unavailable parking
            at this time of the service
          </p>
        </div>

        {/* Next Button */}
        <div className="mt-20 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-full shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
const BasketViewDetailModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl">
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            View Details
          </h2>
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer absolute right-0 top-0"
          />
        </div>

        <div className="space-y-4 h-[40vh] overflow-auto modal2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Category:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Hair Services
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Service Name:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                ABC Service
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Service you need help with:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Full job (Entire service)
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Proposed Price:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                $100.00
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Size:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Micro + Shoulder length
              </p>
            </div>
          </div>
          <div>
            <label className="block font-[700] font-sansation sm:text-[20px] text-[15px] text-charcoal mb-2">
              Service details:
            </label>
            <div className="w-full h-auto p-3 border border-[#2F2F2F] rounded-[5px]">
              <p className="font-[400] text-[16px] font-sansation text-charcoal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full border border-[#2F2F2F] rounded-[5px] h-[100px] flex items-center justify-center">
              <img src={img2} alt="" className="h-full w-auto object-contain" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Date & Time:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                26 Feb 2025 at 10:00 am
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Target:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Both
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Do you want the service provider to drive to you?:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                No
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Special event?:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                No
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Subtotal:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                $150
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Taxes:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                $13
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Fees:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                $2.4
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                Tips:
              </span>
              <p className="font-[400] sm:text-[20px] text-[15px] font-sansation text-charcoal">
                $5
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="font-[700] sm:text-[25px] text-[15px] font-sansation text-charcoal">
                Total:
              </span>
              <p className="font-[700] sm:text-[25px] text-[15px] font-sansation text-charcoal">
                $170.4
              </p>
            </div>
          </div>

          <p className="font-[400] sm:text-[18px] text-[15px] font-sansation text-charcoal">
            100% of your tip goes to your provider, If you claimed to have a
            free parking spot, you may be responsible if their vehicle is{" "}
            <span className="font-[700]">towed</span> due to unavailable parking
            at this time of the service
          </p>
        </div>

        {/* Next Button */}
        <div className="mt-20 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-full shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
const BasketViewOffersModal = ({ isOpen, onClose, handleDeceline }) => {
  if (!isOpen) return null;

  const providers = [
    {
      id: 1,
      name: "Bri’s Hair Studio",
      duration: "2h 45m",
      price: "$75",
      distance: "3.0 miles",
      rating: 4.8,
      reviews: 64,
      image: img15,
    },
    {
      id: 2,
      name: "Emily Styles",
      duration: "2h 15m",
      price: "$80",
      distance: "2.3 miles",
      rating: 4.9,
      reviews: 112,
      image: img16,
    },
    {
      id: 3,
      name: "Luxe Braids by Amira",
      duration: "3h",
      price: "$90",
      distance: "1.8 miles",
      rating: 4.6,
      reviews: 86,
      image: img17,
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl">
        <div className="relative mb-5">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            View Offers
          </h2>
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer absolute right-0 top-0"
          />
        </div>

        <div className="space-y-4 h-[40vh] overflow-auto modal2">
          <div className="font-sansation font-[400] sm:text-[18px] text-[15px] text-charcoal">
            {providers.length} providers responded to your request
            <br />
            Choose 1 before the offer expires in: 11m 42s
          </div>

          {providers.map((provider, index) => (
            <div key={provider.id}>
              <h6 className="font-sansation font-[700] sm:text-[18px] text-[15px] text-charcoal mb-0.5">
                Offer {index + 1}
              </h6>

              <div className="border border-[#2F2F2F] rounded-[7px] px-2.5 py-3 shadow-sm flex flex-col sm:flex-row gap-4">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-[146px] h-[151px] object-cover rounded-lg"
                />

                <div className="flex-1">
                  <div className="font-rasa font-[600] sm:text-[18px] text-[15px] text-charcoal">
                    {provider.name}
                  </div>
                  <div className="font-rasa font-[600] sm:text-[18px] text-[15px] text-charcoal">
                    Estimated Duration: {provider.duration}
                  </div>
                  <div className="font-rasa font-[600] sm:text-[18px] text-[15px] text-charcoal">
                    Price: {provider.price}
                  </div>
                  <div className="font-rasa font-[400] sm:text-[18px] text-[15px] text-charcoal flex items-center gap-5">
                    Distance: {provider.distance}
                    <img src={img18} alt="" className="w-9 h-9 object-cover" />
                  </div>
                  <div className="font-rasa font-[400] sm:text-[18px] text-[15px] text-charcoal flex items-center gap-1">
                    <IoIosStar className="text-[#FFCC4E]" size={25} />
                    <span>{provider.rating}</span>
                    <span>({provider.reviews} reviews)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 justify-center">
                  <button
                    onClick={() => navigate("/services-details")}
                    className="bg-secondary text-[#000000] font-[600] p-1.5 rounded-[10px] font-rasa sm:text-[18px] text-[12px] text-center"
                  >
                    View Profile
                  </button>
                  <button className="bg-secondary text-[#000000] font-[600] p-1.5 rounded-[10px] font-rasa sm:text-[18px] text-[12px] text-center">
                    Select Provider
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="mt-20 flex justify-center gap-3">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-full shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleDeceline}
          >
            Decline All
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-full shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
const DuplicateConfirmModal = ({ isOpen, onClose, handleDuplicate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[20px] w-full sm:max-w-lg max-w-md relative p-3 shadow-xl">
        <div className="modal2 text-center p-3">
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal  mt-5">
            This action will duplicate your <br /> offer.
          </h6>
        </div>
        {/* Next Button */}
        <div className="mt-4 flex justify-center gap-3 mb-2">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#6cc8cf] transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleDuplicate}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
const DeleteConfirmModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[20px] w-full sm:max-w-lg max-w-md relative p-3 shadow-xl">
        <div className="modal2 text-center p-3">
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal  mt-5">
            Confirm you want to delete, then
            <br /> delete.{" "}
          </h6>
        </div>
        {/* Next Button */}
        <div className="mt-4 flex justify-center gap-3">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#6cc8cf] transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
const DeleteNotConfirmModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[20px] w-full sm:max-w-lg max-w-md relative p-3 shadow-xl">
        <div className="modal2 text-center p-3">
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal  mt-5">
            You can not delete this post right <br /> now because there is an
            ongoing dispute.
          </h6>
        </div>
        {/* Next Button */}
        <div className="mt-4 flex justify-center gap-3 mb-2">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const CancelConfirmModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[20px] w-full sm:max-w-lg max-w-md relative p-3 shadow-xl">
        <div className="modal2 text-center p-3">
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal  mt-5">
            Are you sure you want to cancel <br /> this appointment?
          </h6>
        </div>
        {/* Next Button */}
        <div className="mt-4 flex justify-center gap-3 mb-2">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#6cc8cf] transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const WithdrawConfirmModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[20px] w-full sm:max-w-lg max-w-md relative p-3 shadow-xl">
        <div className="modal2 text-center p-3">
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal  mt-5">
            Are you sure you want to withdraw
            <br /> this project?
          </h6>
        </div>
        {/* Next Button */}
        <div className="mt-4 flex justify-center gap-3 mb-2">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#6cc8cf] transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const RepostConfirmModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[20px] w-full sm:max-w-lg max-w-md relative p-3 shadow-xl">
        <div className="modal2 text-center p-3">
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal  mt-5">
            Your request put it back in the
            <br /> basket and that it will appear <br /> under pending.
          </h6>
        </div>
        {/* Next Button */}
        <div className="mt-4 flex justify-center gap-3 mb-2">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#6cc8cf] transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
const DeleteConfirmModal1 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[20px] w-full sm:max-w-lg max-w-md relative p-3 shadow-xl">
        <div className="modal2 text-center p-3">
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal  mt-5">
            Are you sure you want to delete <br /> this project?
          </h6>
        </div>
        {/* Next Button */}
        <div className="mt-4 flex justify-center gap-3 mb-2">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#6cc8cf] transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
const CreateNewConfirmModal = ({ isOpen, onClose, handleopenedit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[20px] w-full sm:max-w-lg max-w-md relative p-3 shadow-xl">
        <div className="modal2 text-center p-3">
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal  mt-5">
            This allow you to edit your request before reposting it back in the
            basket (visible to other providers) & it will appear under pending.
            When you confirm, you can edit your request, You need to save it,
            then it appears under pending.
          </h6>
        </div>
        {/* Next Button */}
        <div className="mt-4 flex justify-center gap-3 mb-2">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#6cc8cf] transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleopenedit}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
const AddCardModal = ({
  isOpen,
  onClose,
  handleopenfivth,
  handleshowpaymentcard,
}) => {
  if (!isOpen) return null;

  const [selected, setSelected] = useState("Credit/Debit Cards");
  const paymentOptions = ["Credit/Debit Cards", "NFC", "PayPal", "Wallets"];

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-3 shadow-xl">
        {/* hearder  */}
        <div className="flex items-center justify-end">
          <IoMdCloseCircleOutline
            className="cursor-pointer text-xl text-[#000000]"
            onClick={onClose}
          />
        </div>
        {/* main */}
        <div className="mt-5">
          <div className="text-center mb-5">
            <h6 className="font-rasa font-[600] sm:text-[30px] text-[20px] text-charcoal">
              Add a Card
            </h6>
            <p className="font-rasa font-[400] sm:text-[14px] text-[12px] text-[#757575] m-0">
              Lorem Ipsu is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div>
            <div className="w-full max-w-2xl mx-auto">
              {/* Conditional Fields */}
              <div className="space-y-2">
                <div>
                  <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                    Card Number
                  </label>
                  <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center">
                    <input
                      type="text"
                      placeholder="1234 1234 1234 1234"
                      className="outline-none border-none flex-1"
                    />
                    <div className="flex items-center space-x-2">
                      <img src={img5} alt="Visa" className="h-8" />
                      <img src={img6} alt="Discover" className="h-8" />
                      <img src={img7} alt="Amex" className="h-8" />
                      <img src={img8} alt="Mastercard" className="h-8" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center gap-1">
                  <div>
                    <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                      Expiration Date
                    </label>
                    <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="outline-none border-none flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                      Security Code
                    </label>
                    <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center">
                      <input
                        type="text"
                        placeholder="CVC"
                        className="outline-none border-none flex-1"
                      />
                      <div className="">
                        <img src={img9} alt="Visa" className="h-6" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                    Country
                  </label>
                  <select
                    name=""
                    id=""
                    className="w-full border border-[#2F2F2F] px-3 py-2 rounded outline-none"
                  >
                    <option value="">United States Of America</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-start mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>

        <div className="mt-3 flex justify-center">
          {handleshowpaymentcard ? (
            <button
              className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
              onClick={handleshowpaymentcard}
            >
              Add Card
            </button>
          ) : (
            <button
              className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
              onClick={handleopenfivth}
            >
              Add Card
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const DeclineConfirmModal = ({ isOpen, onClose, handleDecelineSuccess }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl">
        <div className="relative mb-5">
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer absolute right-0 top-0"
          />
        </div>

        <div className="space-y-4 overflow-auto modal2 text-center">
          <div className="flex items-center justify-center">
            <img
              src={img19}
              alt=""
              className="w-70 h-70 object-cover text-center"
            />
          </div>
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal m-0">
            Are you sure you want to decline all offers?
          </h6>
          <p className="font-rasa font-[500] sm:text-[20px] text-[15px] text-charcoal tex-center">
            Declining all offers will reset your request to ‘No provider
            response yet’, allowing other providers to still respond if the
            request hasn’t expired. This action cannot be undone.
          </p>
        </div>

        {/* Next Button */}
        <div className="mt-20 flex justify-center gap-3">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-full shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-full shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleDecelineSuccess}
          >
            Confirm Decline
          </button>
        </div>
      </div>
    </div>
  );
};

const DeclineSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm sm:max-w-xl p-3 shadow-xl overflow-y-auto h-130 ">
        <div className="flex items-center flex-col justify-center">
          <img src={img3} alt="" className="w-[200px] h-[200px]" />
          <h6 className="font-rasa font-[600] sm:text-[25px] text-[25px] text-charcoal text-center">
            This action will reset your offer <br /> status to No Response Yet.
          </h6>
          <p className="font-rasa font-[500] sm:text-[20px] text-[15px] text-charcoal text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>

        {/* Next Button */}
        <div className="mt-20 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const NotificationDetailsModal = ({ isOpen, onClose, notification }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-md max-w-md relative p-3 shadow-xl">
        <div className="flex items-center justify-between border-b border-[#2F2F2F] p-2">
          <h2 className="sm:text-[20px] text-[15px] font-[500]  text-charcoal font-rasa">
            {notification.title}
          </h2>
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer "
          />
        </div>

        <div className="space-y-4 p-2 overflow-auto modal2">
          <p className="font-[500] sm:text-[15px] text-[12px] font-rasa text-charcoal">
            {notification.message}
          </p>
        </div>
      </div>
    </div>
  );
};

const LicenseVerificationModal = ({
  isOpen,
  onClose,
  handleopensecondmodal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-xl max-w-md relative p-3 shadow-xl">
        <div className="flex items-end justify-end">
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer "
          />
        </div>

        <h2 className="sm:text-[25px] text-[20px] font-[600] text-charcoal font-rasa">
          Complete your verification to boost trust and meet service
          regulations.
        </h2>

        <div className="space-y-4 p-2 h-[40vh] overflow-auto modal2">
          <p className="font-[400] sm:text-[20px] text-[15px] font-rasa text-charcoal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="font-[400] sm:text-[20px] text-[15px] font-rasa text-charcoal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* Next Button */}
        <div className="text-right mb-4 pt-3">
          <button
            className="bg-[#FFE6D8] text-[#FF827F] font-[600] sm:text-[20px] text-[15px] px-10 py-2 rounded-[100px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleopensecondmodal}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const AddBusinessInformationModal = ({
  isOpen,
  onClose,
  handleopenthirdmodal,
  handlebackfirstmodal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl">
        <div className="flex items-center justify-between">
          <IoArrowBack
            onClick={handlebackfirstmodal}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Business Information
          </h2>
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
        </div>

        {/* Progress stepper */}
        <div className="mb-6 relative">
          {/* Progress bar background */}
          <div className="h-1.5 bg-[#D9D9D9] rounded-full w-full absolute top-4"></div>

          {/* Active progress */}
          <div className="h-1.5 bg-secondary rounded-full w-1/4 absolute top-4"></div>

          {/* Step indicators */}
          <div className="flex justify-between relative">
            {/* Step 1 - Account (Active) */}
            <div className="text-center">
              <div className="w-10 h-10  bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-[700] font-sansation">
                1
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Business Information
              </p>
            </div>

            {/* Step 2 - Validation */}
            <div className="text-center">
              <div className="w-10 h-10 bg-[#D9D9D9]  rounded-full flex items-center justify-center mx-auto font-[700] font-sansation text-charcoal">
                2
              </div>
              <p className="mt-1 text-charcoal font-sansation font-[400] m-0 sm:text-[18px] text-[15px]">
                Taxpayer Identification
              </p>
            </div>

            {/* Step 3 - Started */}
            <div className="text-center">
              <div className="w-10 h-10 bg-[#D9D9D9]  rounded-full flex items-center justify-center mx-auto font-[700] font-sansation text-charcoal">
                3
              </div>
              <p className="mt-1 text-charcoal font-sansation font-[400] m-0 sm:text-[18px] text-[15px]">
                Upload Requirements
              </p>
            </div>

            {/* Step 4 - Started */}
            <div className="text-center">
              <div className="w-10 h-10 bg-[#D9D9D9]  rounded-full flex items-center justify-center mx-auto font-[700] font-sansation text-charcoal">
                4
              </div>
              <p className="mt-1 text-charcoal font-sansation font-[400] m-0 sm:text-[18px] text-[15px]">
                ID Verification
              </p>
            </div>
          </div>
        </div>

        <form className="space-y-4 h-[40vh] overflow-auto modal2">
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Employer Identification Number (EIN)
            </label>
            <input
              type="text"
              className="w-full border border-[#2F2F2F] rounded px-3 py-2 mt-1 outline-none text-[#2F2F2F80]"
              placeholder="Enter your EIN number."
            />
          </div>
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Field labeled Employer Identification Number (EIN)
            </label>
            <input
              type="text"
              className="w-full border border-[#2F2F2F] rounded px-3 py-2 mt-1 outline-none text-[#2F2F2F80]"
              placeholder="Enter your EIN number"
            />
            <p className="font-[400] font-sansation sm:text-[15px] text-[15px] text-[#000000] m-0 mt-1">
              Enter your EIN if applicable. Sole proprietors without an EIN may
              leave this blank.
            </p>
          </div>
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Doing Business As (DBA) Name
            </label>
            <input
              type="text"
              className="w-full border border-[#2F2F2F] rounded px-3 py-2 mt-1 outline-none text-[#2F2F2F80]"
              placeholder="Enter your DBA name."
            />
          </div>
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Field labeled Doing Business As (DBA) Name
            </label>
            <input
              type="text"
              className="w-full border border-[#2F2F2F] rounded px-3 py-2 mt-1 outline-none text-[#2F2F2F80]"
              placeholder="Enter your DBA name."
            />
            <p className="font-[400] font-sansation sm:text-[15px] text-[15px] text-[#000000] m-0 mt-1">
              Enter your DBA name if you operate under a different name than
              your legal business name.
            </p>
          </div>
        </form>

        {/* Next Button */}
        <div className="text-right mb-4 pt-3">
          <button
            className="bg-[#FFE6D8] text-[#FF827F] font-[600] sm:text-[20px] text-[15px] px-10 py-2 rounded-[100px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleopenthirdmodal}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const AddTaxpayerIdentificationModal = ({
  isOpen,
  onClose,
  handlebacksecondmodal,
  handleopenforthmodal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl">
        <div className="flex items-center justify-between">
          <IoArrowBack
            onClick={handlebacksecondmodal}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Taxpayer Identification
          </h2>
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
        </div>

        {/* Progress stepper */}
        <div className="mb-6 relative">
          {/* Progress bar background */}
          <div className="h-1.5 bg-[#D9D9D9] rounded-full w-full absolute top-4"></div>

          {/* Active progress */}
          <div className="h-1.5 bg-secondary rounded-full w-2/4 absolute top-4"></div>

          {/* Step indicators */}
          <div className="flex justify-between relative">
            {/* Step 1 - Account (Active) */}
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Business Information
              </p>
            </div>

            {/* Step 2 - Validation */}
            <div className="text-center">
              <div className="w-10 h-10  bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-[700] font-sansation">
                2
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Taxpayer Identification
              </p>
            </div>

            {/* Step 3 - Started */}
            <div className="text-center">
              <div className="w-10 h-10 bg-[#D9D9D9]  rounded-full flex items-center justify-center mx-auto font-[700] font-sansation text-charcoal">
                3
              </div>
              <p className="mt-1 text-charcoal font-sansation font-[400] m-0 sm:text-[18px] text-[15px]">
                Upload Requirements
              </p>
            </div>

            {/* Step 4 - Started */}
            <div className="text-center">
              <div className="w-10 h-10 bg-[#D9D9D9]  rounded-full flex items-center justify-center mx-auto font-[700] font-sansation text-charcoal">
                4
              </div>
              <p className="mt-1 text-charcoal font-sansation font-[400] m-0 sm:text-[18px] text-[15px]">
                ID Verification
              </p>
            </div>
          </div>
        </div>

        <form className="space-y-4 h-[40vh] overflow-auto modal2">
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Social Security Number (SSN) or Individual Taxpayer Identification
              Number (ITIN)
            </label>
            <input
              type="text"
              className="w-full border border-[#2F2F2F] rounded px-3 py-2 mt-1 outline-none text-[#2F2F2F80]"
              placeholder="Enter your SSN/ITIN number."
            />
          </div>
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Field labeled SSN or ITIN
            </label>
            <input
              type="text"
              className="w-full border border-[#2F2F2F] rounded px-3 py-2 mt-1 outline-none text-[#2F2F2F80]"
              placeholder="Enter your SSN/ITIN number."
            />
            <p className="font-[400] font-sansation sm:text-[15px] text-[15px] text-[#000000] m-0 mt-1">
              Enter your full 9-digit SSN or ITIN. This is mandatory for
              identity verification and tax reporting purposes.
            </p>
          </div>
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Security Assurance
            </label>
            <p className="font-[400] font-sansation sm:text-[15px] text-[15px] text-[#000000] m-0 mt-1">
              Your SSN/ITIN is securely stored and used solely for identity
              verification and payment processing, in compliance with federal
              regulations.
            </p>
          </div>
        </form>

        {/* Next Button */}
        <div className="text-right mb-4 pt-3">
          <button
            className="bg-[#FFE6D8] text-[#FF827F] font-[600] sm:text-[20px] text-[15px] px-10 py-2 rounded-[100px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleopenforthmodal}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
const AddUploadRequirementsModal = ({
  isOpen,
  onClose,
  handlebackthirdmodal,
  handleopenfivthhmodal,
}) => {
  if (!isOpen) return null;

  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl">
        <div className="flex items-center justify-between">
          <IoArrowBack
            onClick={handlebackthirdmodal}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Upload Requirements
          </h2>
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
        </div>

        {/* Progress stepper */}
        <div className="mb-6 relative">
          {/* Progress bar background */}
          <div className="h-1.5 bg-[#D9D9D9] rounded-full w-full absolute top-4"></div>

          {/* Active progress */}
          <div className="h-1.5 bg-secondary rounded-full w-3/4 absolute top-4"></div>

          {/* Step indicators */}
          <div className="flex justify-between relative">
            {/* Step 1 - Account (Active) */}
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Business Information
              </p>
            </div>

            {/* Step 2 - Validation */}
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Taxpayer Identification
              </p>
            </div>

            {/* Step 3 - Started */}
            <div className="text-center">
              <div className="w-10 h-10  bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-[700] font-sansation">
                3
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Upload Requirements
              </p>
            </div>

            {/* Step 4 - Started */}
            <div className="text-center">
              <div className="w-10 h-10 bg-[#D9D9D9]  rounded-full flex items-center justify-center mx-auto font-[700] font-sansation text-charcoal">
                4
              </div>
              <p className="mt-1 text-charcoal font-sansation font-[400] m-0 sm:text-[18px] text-[15px]">
                ID Verification
              </p>
            </div>
          </div>
        </div>

        <form className="space-y-4 h-[40vh] overflow-auto modal2">
          <div>
            <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Business License ( optional)
            </label>
            <div
              className="w-full border border-[#2F2F2F] rounded  py-5 mt-1 flex flex-col items-center justify-center cursor-pointer h-30"
              onClick={handleClick}
            >
              <p className="font-[400] font-sansation text-secondary text-center">
                Upload an image
              </p>
              <IoCloudUploadSharp color="#FF827F" size={35} />
            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />

            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm mb-2">Preview:</p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-full h-auto rounded border"
                />
              </div>
            )}
          </div>
          <div>
            <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Proof of Insurance (optional)
            </label>
            <div
              className="w-full border border-[#2F2F2F] rounded  py-5 mt-1 flex flex-col items-center justify-center cursor-pointer h-30"
              onClick={handleClick}
            >
              <p className="font-[400] font-sansation text-secondary text-center">
                Upload an image
              </p>
              <IoCloudUploadSharp color="#FF827F" size={35} />
            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />

            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm mb-2">Preview:</p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-full h-auto rounded border"
                />
              </div>
            )}
          </div>
          <div>
            <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Health & Safety Permits (optional)
            </label>
            <div
              className="w-full border border-[#2F2F2F] rounded  py-5 mt-1 flex flex-col items-center justify-center cursor-pointer h-30"
              onClick={handleClick}
            >
              <p className="font-[400] font-sansation text-secondary text-center">
                Upload an image
              </p>
              <IoCloudUploadSharp color="#FF827F" size={35} />
            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />

            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm mb-2">Preview:</p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-full h-auto rounded border"
                />
              </div>
            )}
          </div>
          <div>
            <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Cosmetolgy License (optional)
            </label>
            <div
              className="w-full border border-[#2F2F2F] rounded  py-5 mt-1 flex flex-col items-center justify-center cursor-pointer h-30"
              onClick={handleClick}
            >
              <p className="font-[400] font-sansation text-secondary text-center">
                Upload an image
              </p>
              <IoCloudUploadSharp color="#FF827F" size={35} />
            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />

            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm mb-2">Preview:</p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-full h-auto rounded border"
                />
              </div>
            )}
          </div>
        </form>

        {/* Next Button */}
        <div className="text-right mb-4 pt-3">
          <button
            className="bg-[#FFE6D8] text-[#FF827F] font-[600] sm:text-[20px] text-[15px] px-10 py-2 rounded-[100px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleopenfivthhmodal}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const AddIDVerificationsModal = ({
  isOpen,
  onClose,
  handlebackforthmodal,
  handleopensixthhmodal,
}) => {
  if (!isOpen) return null;

  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl">
        <div className="flex items-center justify-between">
          <IoArrowBack
            onClick={handlebackforthmodal}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            ID Verification
          </h2>
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
        </div>

        {/* Progress stepper */}
        <div className="mb-6 relative">
          {/* Progress bar background */}
          <div className="h-1.5 bg-[#D9D9D9] rounded-full w-full absolute top-4"></div>

          {/* Active progress */}
          <div className="h-1.5 bg-secondary rounded-full w-4/4 absolute top-4"></div>

          {/* Step indicators */}
          <div className="flex justify-between relative">
            {/* Step 1 - Account (Active) */}
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Business Information
              </p>
            </div>

            {/* Step 2 - Validation */}
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Taxpayer Identification
              </p>
            </div>

            {/* Step 3 - Started */}
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                Upload Requirements
              </p>
            </div>

            {/* Step 4 - Started */}
            <div className="text-center">
              <div className="w-10 h-10  bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-[700] font-sansation">
                4
              </div>
              <p className="mt-1 text-secondary font-[700] font-sansation m-0 sm:text-[18px] text-[15px]">
                ID Verification
              </p>
            </div>
          </div>
        </div>

        <form className="space-y-4 h-[40vh] overflow-auto modal2">
          <div>
            <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
              Driver’s license
            </label>
            <div
              className="w-full border border-[#2F2F2F] rounded  py-5 mt-1 flex flex-col items-center justify-center cursor-pointer h-30"
              onClick={handleClick}
            >
              <p className="font-[400] font-sansation text-secondary text-center">
                Upload an image
              </p>
              <IoCloudUploadSharp color="#FF827F" size={35} />
            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />

            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm mb-2">Preview:</p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-full h-auto rounded border"
                />
              </div>
            )}
          </div>
          <div>
            <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
              Passport
            </label>
            <div
              className="w-full border border-[#2F2F2F] rounded  py-5 mt-1 flex flex-col items-center justify-center cursor-pointer h-30"
              onClick={handleClick}
            >
              <p className="font-[400] font-sansation text-secondary text-center">
                Upload an image
              </p>
              <IoCloudUploadSharp color="#FF827F" size={35} />
            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />

            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm mb-2">Preview:</p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-full h-auto rounded border"
                />
              </div>
            )}
          </div>
          <p className="font-[400] font-sansation sm:text-[15px] text-[15px] text-[#000000] m-0 mt-1">
            Ensure the ID is valid and the image is clear for verification
            purposes.
          </p>
        </form>

        {/* Next Button */}
        <div className="text-right mb-4 pt-3">
          <button
            className="bg-[#FFE6D8] text-[#FF827F] font-[600] sm:text-[20px] text-[15px] px-10 py-2 rounded-[100px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleopensixthhmodal}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const AddSuccessVerificationModal = ({ isOpen, onClose, onclick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl">
        <div className="flex items-center h-[50vh] flex-col justify-center">
          <img src={img3} alt="" className="w-[200px] h-[200px]" />
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            You Successfully Submitted Your <br /> Verification Details.
          </h6>
          <p className="font-rasa font-[500] sm:text-[20px] text-[15px] text-charcoal text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>

        {/* Next Button */}
        <div className="mt-1 pb-5">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[600] sm:text-[20px] text-[15px] px-10 py-2 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onclick}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const ShowQRModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="bg-white rounded-[10px] w-full sm:max-w-[250px]  max-w-[250px] relative shadow-xl">
        <div className="flex items-center p-2 flex-col justify-center">
          <img src={img20} alt="" className="w-[200px] h-[200px]" />
        </div>
      </div>
    </div>
  );
};

const AddNewPolicyModal = ({ isOpen, onClose, edit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[20px] w-full sm:max-w-xl max-w-md relative p-2 shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="sm:text-[19px] text-[15px] font-[700] text-center text-charcoal font-poppins">
            {edit ? "Edit" : "Add New"} Policy
          </h2>
          <IoClose
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
        </div>
        <form className="space-y-2  overflow-auto modal2 mt-2">
          <div className="flex items-center gap-2">
            <div className="">
              <label className="block font-[600] font-poppins sm:text-[12px] text-[12px] text-[#343A40] mb-2">
                Policy ICON
              </label>
              <div className="px-3 py-3 border border-[#56678942] rounded-[8px] font-[400] text-[11px] text-[#343A40] flex items-center justify-center">
                {edit ? <FaRegClock size={15} /> : "Upload icon"}
              </div>
            </div>
            <div className="flex-1">
              <label className="block font-[600] font-poppins sm:text-[12px] text-[12px] text-[#343A40] mb-2">
                Policy Title
              </label>
              <input
                type="text"
                value={edit ? "Grace Period" : null}
                className="w-full border border-[#56678942] rounded-[8px] px-3 py-2 mt-1 outline-none text-[#343A40] font-poppins font-[600] text-[12px]"
                placeholder="enter title here..."
              />
            </div>
          </div>
          <div className="">
            <label className="block font-[600] font-poppins sm:text-[12px] text-[12px] text-[#343A40]">
              Description
            </label>
            <input
              type="text"
              value={edit ? " 15 minutes after start" : null}
              className="w-full border border-[#56678942] rounded-[8px] px-3 py-2 mt-1 outline-none text-[#343A40] font-poppins font-[600] text-[12px]"
              placeholder="add description here..."
            />
          </div>
        </form>

        {/* Next Button */}
        <div className="text-center mt-5 mb-2">
          <button
            className="w-[250px] bg-[#2F2F2F] text-[#FFFFFF] font-[600] sm:text-[14px] text-[12px] px-11 py-2.5 rounded-[100px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#444444] transition-all duration-300"
            onClick={onClose}
          >
            {edit ? "Save" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

const AddStaff = ({ isOpen, onClose, handleshowfamilycard }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center overflow-y-auto">
      <div className="bg-white w-full sm:max-w-2xl max-w-md rounded-xl p-6 relative shadow-xl">
        {/* Header */}
        <div className="relative mb-4">
          <h2 className="font-rasa text-charcoal font-[600] sm:text-[30px] text-[20px] text-center">
            Add a Staff
          </h2>
          <div className="flex items-center gap-2 absolute right-0 top-2">
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        <form className="space-y-4 overflow-auto modal2">
          <div className="flex items-center gap-1">
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Add Staff’s Profile Picture
            </label>
            <div className="border border-[#2F2F2F] bg-white px-8 py-4 rounded-[7px] flex items-center justify-center gap-1 cursor-pointer">
              <TiUpload color="#FF827F" size={20} />
              <p className="font-rasa font-[600] sm:text-[18px] text-[15px] text-secondary">
                Click here to upload the image or drag & drop the image
              </p>
            </div>
          </div>
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Experience In
            </label>
            <select className="w-full border border-[#2F2F2F] rounded px-3 py-2 mt-1 outline-none text-[#2F2F2F80]">
              <option>Hair Service</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
            <div>
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
            <div>
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
            <div>
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                Email Address
              </label>
              <input
                type="text"
                className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
              Birthday
            </label>
            <input
              type="text"
              placeholder="(YYYY-MM-DD)"
              className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
            />
          </div>
        </form>
        <div className="mt-6 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleshowfamilycard}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const AddManager = ({ isOpen, onClose, handleshowfamilycard }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center overflow-y-auto">
      <div className="bg-white w-full sm:max-w-2xl max-w-md rounded-xl p-6 relative shadow-xl">
        {/* Header */}
        <div className="relative mb-4">
          <h2 className="font-rasa text-charcoal font-[600] sm:text-[30px] text-[20px] text-center">
            Add a Manager
          </h2>
          <div className="flex items-center gap-2 absolute right-0 top-2">
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        <form className="space-y-4 overflow-auto modal2">
          <div className="flex items-center gap-1">
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Add Manager Profile Picture
            </label>
            <div className="border border-[#2F2F2F] bg-white px-8 py-4 rounded-[7px] flex items-center justify-center gap-1 cursor-pointer">
              <TiUpload color="#FF827F" size={20} />
              <p className="font-rasa font-[600] sm:text-[18px] text-[15px] text-secondary">
                Click here to upload the image or drag & drop the image
              </p>
            </div>
          </div>
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
              Experience In
            </label>
            <select className="w-full border border-[#2F2F2F] rounded px-3 py-2 mt-1 outline-none text-[#2F2F2F80]">
              <option>Hair Service</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
            <div>
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
            <div>
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
            <div>
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                Email Address
              </label>
              <input
                type="text"
                className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
              Birthday
            </label>
            <input
              type="text"
              placeholder="(YYYY-MM-DD)"
              className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
            />
          </div>
        </form>
        <div className="mt-6 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleshowfamilycard}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const CancelThisbookingModal = ({ isOpen, onClose, handlopenbackCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-3 shadow-xl h-[70vh] overflow-auto">
        {/* hearder  */}
        <div className="flex items-center justify-between mb-5">
          <IoIosArrowBack
            className="cursor-pointer text-2xl text-[#000000]"
            onClick={handlopenbackCancel}
          />
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Cancel this booking
          </h2>
          <IoMdCloseCircleOutline
            className="cursor-pointer text-2xl text-[#000000]"
            onClick={onClose}
          />
        </div>
        {/* main */}
        <div className="mt-2">
          <div className="text-center mb-5">
            <h6 className="font-rasa font-[600] sm:text-[30px] text-[20px] text-charcoal">
              February, Wednesday 26 2025
            </h6>
            <p className="font-rasa font-[400] sm:text-[30px] text-[20px] text-charcoal m-0">
              10:30 AM - 12:00 PM (1hour 30min)
            </p>
            <div className="flex items-center justify-center gap-2">
              <img src={img21} alt="" className="w-8 h-8 rounded-full" />
              <span className="font-rasa font-[600] sm:text-[12px] text-[10px] text-[#757575] m-0">
                Maren Levin
              </span>
            </div>
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-15">
            <div className="flex justify-between">
              <div className="">
                <h3 className="font-[700]  text-[14px] font-gotu text-[#121111] mb-1">
                  Gent's Standard
                </h3>
                <p className="text-[14px] text-[#494948] font-inter font-[400] mb-2">
                  Professional consultation, haircut, hot lather neck shave,
                  shampoo and conditioner
                </p>

                <div className="flex items-center gap-1 text-[12px] text-[#494948] font-inter font-[400] mt-2">
                  Staff
                  <img src={img4} alt="" className="w-10 h-10 rounded-full" />
                  <h6 className="text-[#121111] sm:text-[14px] text-[10px] font-[700] font-inter">
                    Lydia Baptista
                  </h6>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <h6 className="text-[#121111] sm:text-[18px] text-[15px] font-[700] font-inter">
                  $40.00
                </h6>
                <p className="text-[#757575] sm:text-[14px] text-[15px] font-[400] font-inter">
                  {" "}
                  10:30 AM - 11:00 AM
                </p>
              </div>
            </div>
          </div>

          <div>
            <h6 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
              if You exceed a certain numbers of
              <br /> cancellation You will be flagged.
            </h6>
          </div>
        </div>

        <div className="mt-15 flex items-center justify-center gap-3">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handlopenbackCancel}
          >
            Cancel
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={onClose}
          >
            Confirm
          </button>
        </div>
        <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};
const BussinessChangeBookingDateTimeMOdal = ({
  isOpen,
  onClose,
  handlopenThird,
}) => {
  if (!isOpen) return null;

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-3 shadow-xl h-[70vh] overflow-auto relative">
        <div className="flex items-center gap-2 absolute right-2 top-4">
          <IoMdCloseCircleOutline
            className="cursor-pointer text-xl text-[#000000]"
            onClick={onClose}
          />
        </div>
        <div className="space-y-4 modal2" onSubmit={(e) => e.preventDefault()}>
          <div>
            <ChooseDatePicker
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
            />
          </div>
          <div>
            <TimeSlotSelector />
          </div>
          <div>
            <TimePicker1
              selectedTime={selectedTime}
              onSelectTime={setSelectedTime}
            />
          </div>
        </div>

        <div className="w-[98%] mt-6 absolute bottom-2">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handlopenThird}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

const BussinessResheduleSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm sm:max-w-xl p-3 shadow-xl overflow-y-auto h-[80vh] rounded-[10px]">
        <div className="flex items-center flex-col justify-center">
          <img src={img3} alt="" className="w-[200px] h-[200px]" />
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            A Rescheduling Request Sent Successfully
          </h6>
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            February, Friday 28 2025
          </h6>
          <p className="font-rasa font-[400] sm:text-[25px] text-[18px] text-charcoal text-center">
            10:30 AM
          </p>
          <p className="font-rasa font-[500] sm:text-[18px] text-[15px] text-charcoal text-center">
            You’re done! We’ll send the customer a text reminder before the
            appointment
          </p>
        </div>

        {/* Next Button */}
        <div className="mt-20 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const BussinessPastBookingDetailsModal = ({
  isOpen,
  onClose,
  handlopensecond,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-2xl p-3 shadow-xl h-[80vh] overflow-auto">
        {/* hearder  */}
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Booking Details
          </h2>
          <div className="flex items-center gap-2 absolute right-0 top-0">
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        {/* main */}
        <div className="mt-2">
          <div className="text-center mb-5">
            <h6 className="font-rasa font-[600] sm:text-[30px] text-[20px] text-charcoal">
              February, Wednesday 26 2025
            </h6>
            <p className="font-rasa font-[400] sm:text-[30px] text-[20px] text-charcoal m-0">
              10:30 AM - 11:00 AM (30min)
            </p>
            <div className="flex items-center justify-center gap-2">
              <img src={img21} alt="" className="w-8 h-8 rounded-full" />
              <span className="font-rasa font-[600] sm:text-[12px] text-[10px] text-[#757575] m-0">
                Maren Levin
              </span>
            </div>
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2">
            <div className="flex justify-between">
              <div className="">
                <h3 className="font-[700]  text-[14px] font-gotu text-[#121111] mb-1">
                  Gent's Standard
                </h3>
                <p className="text-[14px] text-[#494948] font-inter font-[400] mb-2">
                  Professional consultation, haircut, hot lather neck shave,
                  shampoo and conditioner
                </p>

                <div className="flex items-center gap-1 text-[12px] text-[#494948] font-inter font-[400] mt-2">
                  Staff
                  <img src={img4} alt="" className="w-10 h-10 rounded-full" />
                  <h6 className="text-[#121111] sm:text-[14px] text-[10px] font-[700] font-inter">
                    Lydia Baptista
                  </h6>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <h6 className="text-[#121111] sm:text-[18px] text-[15px] font-[700] font-inter">
                  $40.00
                </h6>
                <p className="text-[#757575] sm:text-[14px] text-[15px] font-[400] font-inter">
                  {" "}
                  10:30 AM - 11:00 AM
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2 flex items-center justify-between">
            <div>
              <h6 className="text-[#121111] sm:text-[14px] text-[12px] font-[700] font-inter">
                Tip
              </h6>
              <p className="text-[#757575] sm:text-[14px] text-[12px] font-[400] font-inter">
                Percentage of the service cost
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-[#FF827F] px-2 py-1 rounded-md text-[#000000] sm:text-[15px] text-[12px] font-[700] font-inter transition-all duration-200">
                $4
              </button>
            </div>
          </div>
          <div>
            <div className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 flex items-center gap-2">
              <span className=" text-[#000000] cursor-pointer">
                <FaRegCommentDots />
              </span>
              <input
                type="text"
                placeholder="Leave a note (optional)"
                className="outline-none border-none flex-1"
                value="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                readOnly
              />
            </div>
          </div>
          <div className="flex items-center justify-end gap-5">
            <img src={img14} alt="" className="w-52 h-52 object-fit" />
            <div className="flex flex-col items-end justify-end mt-8">
              <div className="flex items-center">
                <span className="font-[500] text-[#121111] mr-1 sm:text-[18px] text-[15px]">
                  Total:
                </span>
                <span className="font-[700] text-[#121111] mr-1 sm:text-[30px] text-[25px] m-0">
                  $44.00
                </span>
              </div>
              <div className="pl-[50px] mt-1">
                <span className="font-[500] text-[#757575] mr-1 sm:text-[16px] text-[15px]">
                  30min
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-4 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handlopensecond}
          >
            Give A Review
          </button>
        </div>
        <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};

const AddSolonProfileImageModal = ({
  isOpen,
  onClose,
  handleopensecondmodal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-2xl p-3 shadow-xl h-[70vh] overflow-auto relative">
        {/* hearder  */}
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Profile Image
          </h2>
          <div className="flex items-center gap-2 absolute right-0 top-0">
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        {/* main */}
        <form className="space-y-4 overflow-auto modal2">
          <div className="">
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
              Add Staff’s Profile Picture
            </label>
            <div className="border-2 border-dashed border-[#FF827F]  bg-white px-8 py-8 rounded-[20px] flex items-center justify-center gap-1 cursor-pointer">
              <TiUpload color="#FF827F" size={20} />
              <p className="font-rasa font-[600] sm:text-[18px] text-[15px] text-secondary">
                Click here or drag & drop your new photo
              </p>
            </div>
          </div>
          <div className="">
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
              Upload A Cover Photo
            </label>
            <div className="border-2 border-dashed border-[#FF827F]  bg-white px-8 py-8 rounded-[20px] flex items-center justify-center gap-1 cursor-pointer">
              <TiUpload color="#FF827F" size={20} />
              <p className="font-rasa font-[600] sm:text-[18px] text-[15px] text-secondary">
                Click here or drag & drop your new photo
              </p>
            </div>
          </div>
        </form>
        <div className="mt-18 flex items-center justify-center gap-3 ">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={onClose}
          >
            Skip
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handleopensecondmodal}
          >
            Next Step
          </button>
        </div>
        <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};
const AddSolonePlaceModal = ({ isOpen, onClose, handleopenthirdmodal }) => {
  if (!isOpen) return null;
  const [radius, setRadius] = useState(17);

  const handleRadiusChange = (e) => {
    const value = e.target.value;
    setRadius(value);
    e.target.style.setProperty("--fill-percent", `${value}%`);
  };

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-2xl p-3 shadow-xl h-[70vh] overflow-auto relative">
        {/* hearder  */}
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Place of Business
          </h2>
          <div className="flex items-center gap-2 absolute right-0 top-0">
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        {/* main */}
        <form className="space-y-4 overflow-auto modal2">
          <div className="">
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
              Name of your business*
            </label>
            <input
              type="text"
              className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
            />
          </div>
          <div className="">
            <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
              Location
            </label>

            <div className="relative w-full h-35 rounded-[7px] overflow-hidden border border-[#2F2F2F]">
              <img
                src={img22}
                alt="location"
                className="w-full h-full object-cover"
              />

              <input
                type="text"
                className="absolute top-2 left-2 right-2 bg-[#FAF9F6] border border-[#2F2F2F] rounded-[10px] px-4 py-2 outline-none placeholder:text-sm text-[#2F2F2F] font-sansation font-[400]"
                placeholder="Enter the location where you operate your business..."
              />
            </div>
          </div>

          <div className="flex gap-5">
            <label className="text-[20px] font-bold font-sansation mb-1.5 text-charcoal">
              Service Radius
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
        </form>
        <div className="absolute bottom-2">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handleopenthirdmodal}
          >
            Next
          </button>
          <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </div>
  );
};
const AddSoloneAmenitiesModal = ({ isOpen, onClose, handleopenforthmodal }) => {
  if (!isOpen) return null;

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

  const renderCheckbox = (label, key, Icon) => (
    <label className="flex items-center justify-between" key={key}>
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

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-2xl p-3 shadow-xl h-[70vh] overflow-auto relative">
        {/* hearder  */}
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Add Amenities
          </h2>
          <div className="flex items-center gap-2 absolute right-0 top-0">
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        {/* main */}
        <form className="space-y-4 overflow-auto modal2">
          <div className="mb-4">
            <div className="flex flex-col gap-5">
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
        </form>
        <div className="absolute bottom-2">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handleopenforthmodal}
          >
            Next
          </button>
          <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </div>
  );
};
const AddSoloneYourCategoriesModal = ({
  isOpen,
  onClose,
  handleopenfivthmodal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-2xl p-3 shadow-xl h-[70vh] overflow-auto relative">
        {/* hearder  */}
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Enter Your Categories
          </h2>
          <div className="flex items-center gap-2 absolute right-0 top-0">
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        {/* main */}
        <form className="space-y-4 mt-5 modal2 ">
          <div>
            <select className="w-full border border-[#123E41] rounded-[6px] px-4 py-2 pr-10 outline-none text-[#2F2F2F]">
              <option value="">Select or type your categories</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        </form>
        <div className="absolute bottom-2">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handleopenfivthmodal}
          >
            Next
          </button>
          <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </div>
  );
};

const AddSoloneSuccessfullyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm sm:max-w-xl p-3 shadow-xl overflow-y-auto h-[80vh] rounded-[10px]">
        <div className="flex items-center flex-col justify-center">
          <img src={img3} alt="" className="w-[200px] h-[200px]" />
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            A New Salon Added Successfully
          </h6>
          <p className="font-rasa font-[500] sm:text-[18px] text-[15px] text-charcoal text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>

        {/* Next Button */}
        <div className="mt-20 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const IndependentPostAProject = ({ isOpen, onClose, handleStapfirst }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl">
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Post A Project
          </h2>
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer absolute top-0 right-0"
          />
        </div>

        {/* Subheading */}
        <p className="sm:text-[25px] text-[20px] font-[600] text-charcoal font-rasa mt-2">
          Welcome to the Latrice Service Cart – Share Your Request, Get Expert
          Responses!
        </p>

        {/* Image */}
        <div className="flex items-center gap-2 mb-4 mt-2 pl-5 pr-5">
          <div
            className="cursor-pointer max-w-sm rounded-[20px] overflow-hidden border border-[#2F2F2F] bg-[#123E41] p-2"
            onClick={handleStapfirst}
          >
            <div className="relative">
              <img
                src={img23}
                alt="Shop"
                className="w-full h-50 rounded-[10px] object-cover"
              />
            </div>

            {/* Info Section */}
            <div className="py-1 px-1">
              <p className="text-[#FAF9F6] font-rasa sm:text-[28px] text-[25px] font-[600] text-center">
                Hiring Request
              </p>
            </div>
          </div>
          <div
            className="cursor-pointer max-w-sm rounded-[20px] overflow-hidden border border-[#2F2F2F]  bg-[#123E41] p-2"
            onClick={handleStapfirst}
          >
            <div className="relative">
              <img
                src={img24}
                alt="Shop"
                className="w-full h-50 rounded-[10px] object-cover"
              />
            </div>

            {/* Info Section */}
            <div className="py-1 px-1">
              <div>
                <p className="text-[#FAF9F6] font-rasa sm:text-[28px] text-[25px] font-[600] text-center">
                  Personal Request
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="sm:text-[20px] text-[18px] font-[600] mb-8 text-charcoal font-rasa">
          Fill out the form below to describe the service you need. Your request
          will be shared with experienced professionals, allowing you to receive
          tailored responses and find the perfect provider for your needs!…..
        </p>
      </div>
    </div>
  );
};

const IndependentBookingDetailsModal = ({
  isOpen,
  onClose,
  handleAvailabilityBookingModal,
  handlesuccesmodal1,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-3 shadow-xl h-[80vh] overflow-auto">
        {/* hearder  */}
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Booking Details
          </h2>
          <div className="flex items-center gap-2 absolute right-0 top-0">
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
          <div className="flex flex-col items-center  border border-[#2F2F2F33] bg-[#FFFFFF] rounded-[10px] px-1 py-1 absolute right-0 top-10">
            <IoMdEye
              className="cursor-pointer text-xl text-[#FF827F]"
              onClick={onClose}
            />
            <p className="font-rasa font-[600] sm:text-[18px] text-[15px] text-charcoal m-0">
              5 Views
            </p>
          </div>
        </div>
        {/* main */}
        <div className="mt-2">
          <div className="text-center mb-5">
            <h6 className="font-rasa font-[600] sm:text-[30px] text-[20px] text-charcoal">
              February, Wednesday 26 2025
            </h6>
            <p className="font-rasa font-[400] sm:text-[30px] text-[20px] text-charcoal m-0">
              10:30 AM - 12:00 PM (1hour 30min)
            </p>
            <div className="flex items-center justify-center gap-2">
              <img src={img21} alt="" className="w-8 h-8 rounded-full" />
              <span className="font-rasa font-[600] sm:text-[12px] text-[10px] text-[#757575] m-0">
                Maren Levin
              </span>
            </div>
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2">
            <div className="flex justify-between">
              <div className="w-[50%]">
                <h3 className="font-[700]  text-[14px] font-gotu text-[#121111] mb-1">
                  Gent's Standard
                </h3>
                <p className="text-[14px] text-[#494948] font-inter font-[400] mb-2">
                  Professional consultation, haircut, hot lather neck shave,
                  shampoo and conditioner
                </p>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <h6 className="text-[#121111] sm:text-[18px] text-[15px] font-[700] font-inter">
                  $40.00
                </h6>
                <p className="text-[#757575] sm:text-[14px] text-[15px] font-[400] font-inter">
                  {" "}
                  10:30 AM
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2 flex items-center justify-between">
            <div>
              <h6 className="text-[#121111] sm:text-[14px] text-[12px] font-[700] font-inter">
                Tip
              </h6>
              <p className="text-[#757575] sm:text-[14px] text-[12px] font-[400] font-inter">
                Percentage of the service cost
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-[#FF827F] px-2 py-1 rounded-md text-[#000000] sm:text-[15px] text-[12px] font-[700] font-inter transition-all duration-200">
                $4
              </button>
            </div>
          </div>
          <div>
            <div className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 flex items-center gap-2">
              <span className=" text-[#000000] cursor-pointer">
                <FaRegCommentDots />
              </span>
              <input
                type="text"
                placeholder="Leave a note (optional)"
                className="outline-none border-none flex-1"
                value="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                readOnly
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <button
              className="bg-[#123E41] p-[8px] rounded-[10px] font-[700] text-[#FAF9F6] sm:text-[14px] text-[12px]"
              onClick={handleAvailabilityBookingModal}
            >
              Check Your Availability
            </button>
            <IoMdInformationCircle color="#2F2F2F" size={25} />
          </div>
          <div className="flex flex-row items-center justify-between mt-8">
            <div className="flex-grow ">
              <div className="flex items-center gap-2 mb-2">
                <label className="block font-[700] font-sansation sm:text-[14px] text-[12px] text-[#121111]">
                  Enter End Time.
                </label>
                <IoMdInformationCircle color="#2F2F2F" size={20} />
              </div>
              <input
                type="time"
                className="w-[50%] border border-[#2F2F2F33] bg-[#FFFFFF] rounded-[10px]  px-2 py-2"
                placeholder="Enter here.."
              />
            </div>
            <div className="flex items-center">
              <span className="font-[500] text-[#121111] mr-1 sm:text-[18px] text-[15px]">
                Total:
              </span>
              <span className="font-[700] text-[#121111] mr-1 sm:text-[30px] text-[25px] m-0">
                $44.00
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={onClose}
          >
            Reject
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handlesuccesmodal1}
          >
            Accept
          </button>
        </div>
        <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};
const CheckAvailabilityBookingModal = ({
  isOpen,
  onClose,
  handlesuccesmodal,
  handleback,
}) => {
  if (!isOpen) return null;
  const times = [
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
  ];

  const dates = [
    moment("2025-02-25"),
    moment("2025-02-26"),
    moment("2025-02-27"),
    moment("2025-02-28"),
  ];

  const appointments = [
    {
      date: "2025-02-25",
      time: "08:30 AM",
      title: "Hair Cut",
      location: "Customer Name",
      price: "$46.00",
      endTime: "09:00 AM",
    },
    {
      date: "2025-02-26",
      time: "10:30 AM",
      title: "Hair Cut",
      location: "Customer Name",
      price: "$46.00",
      endTime: "11:00 AM",
    },
    {
      date: "2025-02-25",
      time: "12:30 PM",
      title: "Hair Cut",
      location: "Customer Name",
      price: "$46.00",
      endTime: "01:00 PM",
    },
    {
      date: "2025-02-27",
      time: "11:30 AM",
      title: "Hair Cut",
      location: "Customer Name",
      price: "$46.00",
      endTime: "12:00 PM",
    },
  ];

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-3 shadow-xl h-[80vh] overflow-auto">
        {/* hearder  */}
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            February, Wednesday 26 2025
          </h2>
          <div className="flex items-center gap-2 absolute right-0 top-0">
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        {/* main */}
        <div className="mt-2 h-[50vh] overflow-y-scroll">
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
              {/* <thead className="bg-[#123E41]">
                                <tr>
                                    <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2 rounded-tl-2xl">TIME</th>
                                    {dates.map((date, i) => (
                                        <th key={i} className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2 last:rounded-tr-2xl">
                                            {date.format('MMM DD YYYY')}
                                        </th>
                                    ))}
                                </tr>
                            </thead> */}
              <tbody className="bg-white shadow">
                {times.map((time, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="border-b-1 border-[#A8A8A84D] font-rasa text-[#464646] font-[400] text-center text-[18px] py-2">
                      {time}
                    </td>
                    {dates.map((date, colIndex) => {
                      const appointment = appointments.find(
                        (appt) =>
                          appt.date === date.format("YYYY-MM-DD") &&
                          appt.time === time
                      );
                      const borderColors = [
                        "#123E41",
                        "#FF827F",
                        "#FFCC4E",
                        "#123E41",
                      ];
                      const borderColor =
                        borderColors[colIndex % borderColors.length];

                      return (
                        <td
                          key={colIndex}
                          className="border border-[#A8A8A84D] h-20  relative"
                        >
                          {appointment ? (
                            <div
                              className="p-2 h-full cursor-pointer"
                              style={{ borderLeft: `4px solid ${borderColor}` }}
                              onClick={() => setModalOpen(true)}
                            >
                              <h6 className="font-[500] font-rasa sm:text-[18px] text-[15px] text-charcoal">
                                {appointment.title}
                              </h6>
                              <div className="font-[500] font-rasa sm:text-[18px] text-[15px] text-charcoal">
                                {appointment.location}
                              </div>
                              <div className="font-[400] font-rasa sm:text-[15px] text-[12px] text-charcoal">
                                {appointment.price}
                              </div>
                              <div className="font-[400] font-rasa sm:text-[12px] text-[10px] text-[#00000080]">
                                {appointment.time} to {appointment.endTime}
                                {appointment.status && (
                                  <span> ({appointment.status})</span>
                                )}
                              </div>
                            </div>
                          ) : (
                            <div
                              className="w-full h-full"
                              style={{ borderLeft: `4px solid ${borderColor}` }}
                            ></div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handleback}
          >
            Back
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handlesuccesmodal}
          >
            Accept
          </button>
        </div>
        <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};

const IndependentAcceptSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navigate = useNavigate();

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="relative bg-white w-full max-w-sm sm:max-w-xl p-3 shadow-xl overflow-y-auto h-[80vh] rounded-[10px]">
        {/* close button */}

        <buttom className="absolute top-2 right-2">
          <IoClose
            onClick={onClose}
            color="#2F2F2F"
            size={20}
            className="cursor-pointer"
          />
        </buttom>

        <div className="flex items-center flex-col justify-center">
          <img src={img3} alt="" className="w-[200px] h-[200px]" />
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            Appointment Accepted Successfully
          </h6>
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            February, Wednesday 26 2025
          </h6>
          <p className="font-rasa font-[400] sm:text-[25px] text-[18px] text-charcoal text-center">
            10:30 AM
          </p>
          <p className="font-rasa font-[500] sm:text-[18px] text-[15px] text-charcoal text-center">
            You’re done! We’ll send the customer a text reminder before the
            appointment
          </p>
        </div>

        {/* Next Button */}
        <div className="mt-20 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={() =>
              navigate("/independent/dashboard/appointments/current-bookings")
            }
          >
            Show Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

const IndependentHiringDetailsModal = ({
  isOpen,
  onClose,
  handleAvailabilityBookingModal,
  handlesuccesmodal1,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-3 shadow-xl h-[80vh] overflow-auto">
        {/* hearder  */}
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Hiring Details
          </h2>
          <div className="flex items-center gap-2 absolute right-0 top-0">
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
          <div className="flex flex-col items-center  border border-[#2F2F2F33] bg-[#FFFFFF] rounded-[10px] px-1 py-1 absolute right-0 top-10">
            <IoMdEye
              className="cursor-pointer text-xl text-[#FF827F]"
              onClick={onClose}
            />
            <p className="font-rasa font-[600] sm:text-[18px] text-[15px] text-charcoal m-0">
              5 Views
            </p>
          </div>
        </div>
        {/* main */}
        <div className="mt-2">
          <div className="text-center mb-5">
            <h6 className="font-rasa font-[600] sm:text-[30px] text-[20px] text-charcoal">
              February, Wednesday 26 2025
            </h6>
            <p className="font-rasa font-[400] sm:text-[30px] text-[20px] text-charcoal m-0">
              10:30 AM - 12:00 PM (1hour 30min)
            </p>
            <div className="flex items-center justify-center gap-2">
              <img src={img21} alt="" className="w-8 h-8 rounded-full" />
              <span className="font-rasa font-[600] sm:text-[12px] text-[10px] text-[#757575] m-0">
                Maren Levin
              </span>
            </div>
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2">
            <div className="flex justify-between">
              <div className="w-[50%]">
                <h3 className="font-[700]  text-[14px] font-gotu text-[#121111] mb-1">
                  Gent's Standard
                </h3>
                <p className="text-[14px] text-[#494948] font-inter font-[400] mb-2">
                  Professional consultation, haircut, hot lather neck shave,
                  shampoo and conditioner
                </p>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <h6 className="text-[#121111] sm:text-[18px] text-[15px] font-[700] font-inter">
                  $40.00
                </h6>
                <p className="text-[#757575] sm:text-[14px] text-[15px] font-[400] font-inter">
                  {" "}
                  10:30 AM
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2 flex items-center justify-between">
            <div>
              <h6 className="text-[#121111] sm:text-[14px] text-[12px] font-[700] font-inter">
                Tip
              </h6>
              <p className="text-[#757575] sm:text-[14px] text-[12px] font-[400] font-inter">
                Percentage of the service cost
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-[#FF827F] px-2 py-1 rounded-md text-[#000000] sm:text-[15px] text-[12px] font-[700] font-inter transition-all duration-200">
                $4
              </button>
            </div>
          </div>
          <div>
            <div className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 flex items-center gap-2">
              <span className=" text-[#000000] cursor-pointer">
                <FaRegCommentDots />
              </span>
              <input
                type="text"
                placeholder="Leave a note (optional)"
                className="outline-none border-none flex-1"
                value="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                readOnly
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              <button
                className="bg-[#123E41] p-[8px] rounded-[10px] font-[700] text-[#FAF9F6] sm:text-[14px] text-[12px]"
                onClick={handleAvailabilityBookingModal}
              >
                Check Your Availability
              </button>
              <IoMdInformationCircle color="#2F2F2F" size={25} />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <span className="font-[500] text-[#121111] mr-1 sm:text-[18px] text-[15px]">
                  Total:
                </span>
                <span className="font-[700] text-[#121111] mr-1 sm:text-[30px] text-[25px] m-0">
                  $44.00
                </span>
              </div>
              <div className="pl-[50px] mt-1">
                <span className="font-[500] text-[#757575] mr-1 sm:text-[16px] text-[15px]">
                  30min
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={onClose}
          >
            Reject
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handlesuccesmodal1}
          >
            Accept
          </button>
        </div>
        <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};

const SalonDetailsSelectServiceModal = ({
  isOpen,
  onClose,
  services = [],
  handleopenfirst,
}) => {
  if (!isOpen) return null;

  const [search, setSearch] = useState("");

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center overflow-y-auto">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-5 shadow-xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between gap-2 mb-4">
          <div className="flex-1 relative bg-[#FAF9F6] shadow-md rounded-[20px] overflow-hidden">
            <img
              src={img25}
              alt="Banner"
              className="w-full h-40 object-cover"
            />
            <div className="absolute top-6 left-4 flex items-center space-x-7">
              <img
                src={img26}
                alt="Avatar"
                className="sm:w-30 sm:h-30 w-20 h-20 rounded-full object-cover"
              />
              <div className="">
                <h2 className="text-[#FAF9F6] font-be-vietnam-pro sm:text-[20px] text-[15px] font-[800] mb-2">
                  Omar Vaccaro
                </h2>
                <p className="text-[#FAF9F6] font-be-vietnam-pro sm:text-[14px] text-[12px] font-[500] mb-2">
                  Larkfield Cte, Santa Rosa CA, 95403
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-[#123E41] w-[82px] h-[24px] rounded-[100px] flex items-center justify-center gap-1 text-[#FAF9F6] font-be-vietnam-pro sm:text-[12px] text-[12px] font-[700] m-0">
                    <img
                      src={img27}
                      alt=""
                      className="w-5 h-5 object-contain"
                    />
                    Top Pro
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-[#FAF9F6] font-be-vietnam-pro sm:text-[14px] text-[12px] font-[400] m-0">
                      <IoIosStar />
                      <span>5.0</span>
                      (417)
                    </div>
                    <div className="text-[#FAF9F6] font-be-vietnam-pro sm:text-[13.78px] text-[12px] font-[400] m-0">
                      1K+ booked
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <IoIosStar color="#FFCC4E" size={25} />
                  <IoIosStar color="#FFCC4E" size={25} />
                  <IoIosStar color="#FFCC4E" size={25} />
                  <IoIosStar color="#FFCC4E" size={25} />
                  <IoIosStar color="#FFCC4E" size={25} />
                </div>
              </div>
            </div>

            <div className="absolute top-2 right-2 flex items-center gap-2">
              <div className="backdrop-blur-lg  bg-[#1A1A1A33]  rounded-full flex items-center justify-center w-[40px] h-[40px] cursor-pointer">
                <FaHeart className="text-white  hover:text-[#FF0000] transition-colors text-xl" />
              </div>
              <div className="backdrop-blur-lg  bg-[#1A1A1A33]  rounded-full flex items-center justify-center w-[40px] h-[40px] cursor-pointer">
                <FiShare className="text-white  transition-colors text-xl" />
              </div>
            </div>
          </div>
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={28}
            className="cursor-pointer"
          />
        </div>

        <div className="w-full bg-[#FAF9F6] border border-[#2F2F2F] flex items-center gap-2 rounded-[6px] h-[50px] px-3  mr-1">
          <IoSearchSharp size={20} />
          <input
            type="search"
            placeholder="Search for service or salon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none border-none w-full bg-transparent"
          />
        </div>
        {/* Header */}
        <h2 className="mb-1 font-rasa font-[600] text-[30px] text-charcoal">
          Services
        </h2>

        {/* Services List */}
        {filteredServices.map((service, idx) => (
          <div
            key={idx}
            className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2"
          >
            <div className="flex items-center justify-between">
              <div className="w-[50%]">
                <h3 className="font-[700]  text-[14px] font-gotu text-[#121111] mb-1">
                  {service.title}
                </h3>
                <div className="text-[11.63px] text-[#494948] font-inter font-[400] mb-2">
                  #{service.booked} booked • ${service.price} •{" "}
                  {service.duration}
                </div>
                <p className="text-[14px] text-[#494948] font-inter font-[400] mb-2">
                  {service.description}
                </p>

                <div className="flex items-center gap-1 text-[12px]  text-[#494948] font-inter font-[400]">
                  <IoIosStarOutline />
                  {service.rating} ({service.reviews})
                  <div className="flex gap-2">
                    {service.img.map((image, idx) => (
                      <img
                        key={idx}
                        src={image.img}
                        alt=""
                        className="w-10 h-10 rounded-[4px]"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <button
                className="text-[#FFFFFF] text-[12px] px-4 py-1 rounded-[4px] bg-charocal font-[700]"
                onClick={handleopenfirst}
              >
                See Appointment Time
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SalonDetailsDateandTime = ({
  isOpen,
  onClose,
  handleopengofirst,
  handleopenSecondmodal,
}) => {
  if (!isOpen) return null;

  const SERVICE_OPTIONS = [
    { key: "undoHair", label: "Undo hair ($45, +1hr)", price: 45, time: 60 },
    { key: "washHair", label: "Wash hair ($20, +20mins)", price: 20, time: 20 },
    {
      key: "blowDryHair",
      label: "Blow dry hair ($15, +20mins)",
      price: 15,
      time: 20,
    },
  ];
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [services, setServices] = useState({});
  const [showAdditionalServices, setShowAdditionalServices] = useState(false);

  const basePrice = 40;
  const baseTime = 30;

  const handleToggleService = (key) => {
    setServices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  const totalPrice =
    basePrice +
    SERVICE_OPTIONS.reduce(
      (sum, item) => (services[item.key] ? sum + item.price : sum),
      0
    );
  const totalTime =
    baseTime +
    SERVICE_OPTIONS.reduce(
      (sum, item) => (services[item.key] ? sum + item.time : sum),
      0
    );

  const formatTime = (mins) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h > 0 ? `${h}hr` : ""}${m > 0 ? ` ${m}min` : ""}`.trim();
  };

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md max-h-[80vh] relative p-3 shadow-xl overflow-y-auto">
        <div className="flex items-center gap-2 absolute right-2 top-4">
          <span className="font-rasa text-[#121111] font-[600] sm:text-[18px] text-[15px]">
            03:00
          </span>
          <MdOutlineAccessAlarms className="text-[#2F2F2F]" size={24} />
          <IoMdCloseCircleOutline
            className="cursor-pointer text-xl text-[#000000]"
            onClick={onClose}
          />
        </div>
        <div
          className="space-y-4 overflow-auto modal2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <ChooseDatePicker
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
            />
          </div>
          <div>
            <TimeSlotSelector />
          </div>
          <div>
            <TimePicker1
              selectedTime={selectedTime}
              onSelectTime={setSelectedTime}
            />
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2">
            <div className="flex items-center justify-between">
              <div className="">
                <h3 className="font-[700]  text-[14px] font-gotu text-[#121111] mb-1">
                  Gent's Standard
                </h3>
                <p className="text-[14px] text-[#494948] font-inter font-[400] mb-2">
                  Professional consultation, haircut, hot lather neck shave,
                  shampoo and conditioner
                </p>

                <div className="flex items-center gap-1 text-[12px] text-[#494948] font-inter font-[400] mt-2">
                  Staff
                  <img src={img4} alt="" className="w-10 h-10 rounded-full" />
                  <h6 className="text-[#121111] sm:text-[14px] text-[10px] font-[700] font-inter">
                    Lydia Baptista
                  </h6>
                </div>
              </div>
              <div className="flex items-end flex-col">
                <h6 className="text-[#121111] sm:text-[18px] text-[15px] font-[700] font-inter">
                  $40.00
                </h6>
                <p className="text-[#757575] sm:text-[14px] text-[15px] font-[400] font-inter">
                  10:30 AM - 11:00 AM
                </p>
              </div>
            </div>
          </div>
          {/* Toggle additional services */}
          <div className="flex  justify-between">
            <div>
              <div
                onClick={() =>
                  setShowAdditionalServices(!showAdditionalServices)
                }
                className="flex items-center gap-2 cursor-pointer"
              >
                {showAdditionalServices ? (
                  <FaMinus className="text-[#014F86] sm:text-[20px] text-[15px]" />
                ) : (
                  <FaPlus className="text-[#014F86] sm:text-[20px] text-[15px]" />
                )}
                <h6 className="font-rasa text-[#014F86] sm:text-[27px] text-[20px] font-[600]">
                  {showAdditionalServices ? "Remove extras" : "Add extras"}
                </h6>
              </div>
              {showAdditionalServices && (
                <div className="flex flex-col space-y-2 mt-2">
                  {SERVICE_OPTIONS.map(({ key, label }) => (
                    <label className="flex items-center gap-2" key={key}>
                      <input
                        type="checkbox"
                        className="peer hidden"
                        checked={services[key]}
                        onChange={() => handleToggleService(key)}
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
                      <span className="font-[700] font-sansation sm:text-[17px] text-[15px] text-[#121111]">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
            <div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleopengofirst}
              >
                <FaPlus className="text-[#014F86] sm:text-[20px] text-[15px]" />
                <h6 className="font-rasa text-[#014F86] sm:text-[27px] text-[20px] font-[600]">
                  Add another service
                </h6>
              </div>

              <div className="flex flex-col items-end justify-end mt-8">
                <div className="flex items-center">
                  <span className="font-[500] text-[#121111] mr-1 sm:text-[18px] text-[15px]">
                    Total:
                  </span>
                  <span className="font-[700] text-[#121111] mr-1 sm:text-[30px] text-[25px] m-0">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="pl-[50px] mt-1">
                  <span className="font-[500] text-[#757575] mr-1 sm:text-[16px] text-[15px]">
                    {formatTime(totalTime)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleopenSecondmodal}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

const SalonDetailsPaymenSuccessModal = ({ isOpen, handlshowgiftcard }) => {
  if (!isOpen) return null;

  const navigate = useNavigate();

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm sm:max-w-xl p-3 shadow-xl ">
        <div className="flex items-center flex-col justify-center">
          <img src={img3} alt="" className="w-[200px] h-[200px]" />
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            Appointment Confirmed
          </h6>
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            10:30 AM - 12:00 PM (1hour 30min)
          </h6>
          <p className="font-rasa font-[500]sm:text-[20px] text-[18px] text-charcoal text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>

        {/* Next Button */}
        <div className="mt-20 mb-20 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={() =>
              navigate(
                "/business-owner/dashboard/appointments/current-bookings"
              )
            }
          >
            Show Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

const RequestFormModal = ({ isOpen, onClose, handleopensuccessmodal }) => {
  if (!isOpen) return null;

  const SERVICE_OPTIONS = [
    { key: "undoHair", label: "Undo hair ($45, +1hr)", price: 45, time: 60 },
    { key: "washHair", label: "Wash hair ($20, +20mins)", price: 20, time: 20 },
    {
      key: "blowDryHair",
      label: "Blow dry hair ($15, +20mins)",
      price: 15,
      time: 20,
    },
  ];
  const [selectedDate, setSelectedDate] = useState(null);
  const [services, setServices] = useState({});
  const [showAdditionalServices, setShowAdditionalServices] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleService = (key) => {
    setServices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center overflow-y-auto">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-5 shadow-xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between gap-2 mb-2">
          <div className="flex-1 relative bg-[#FAF9F6] shadow-md rounded-[20px] overflow-hidden">
            <img
              src={img25}
              alt="Banner"
              className="w-full h-40 object-cover"
            />
            <div className="absolute top-6 left-4 flex items-center space-x-7">
              <img
                src={img26}
                alt="Avatar"
                className="sm:w-30 sm:h-30 w-20 h-20 rounded-full object-cover"
              />
              <div className="">
                <h2 className="text-[#FAF9F6] font-be-vietnam-pro sm:text-[20px] text-[15px] font-[800] mb-2">
                  Omar Vaccaro
                </h2>
                <p className="text-[#FAF9F6] font-be-vietnam-pro sm:text-[14px] text-[12px] font-[500] mb-2">
                  Larkfield Cte, Santa Rosa CA, 95403
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-[#123E41] w-[82px] h-[24px] rounded-[100px] flex items-center justify-center gap-1 text-[#FAF9F6] font-be-vietnam-pro sm:text-[12px] text-[12px] font-[700] m-0">
                    <img
                      src={img27}
                      alt=""
                      className="w-5 h-5 object-contain"
                    />
                    Top Pro
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-[#FAF9F6] font-be-vietnam-pro sm:text-[14px] text-[12px] font-[400] m-0">
                      <IoIosStar />
                      <span>5.0</span>
                      (417)
                    </div>
                    <div className="text-[#FAF9F6] font-be-vietnam-pro sm:text-[13.78px] text-[12px] font-[400] m-0">
                      1K+ booked
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <IoIosStar color="#FFCC4E" size={25} />
                  <IoIosStar color="#FFCC4E" size={25} />
                  <IoIosStar color="#FFCC4E" size={25} />
                  <IoIosStar color="#FFCC4E" size={25} />
                  <IoIosStar color="#FFCC4E" size={25} />
                </div>
              </div>
            </div>

            <div className="absolute top-2 right-2 flex items-center gap-2">
              <div className="backdrop-blur-lg  bg-[#1A1A1A33]  rounded-full flex items-center justify-center w-[40px] h-[40px] cursor-pointer">
                <FaHeart className="text-white  hover:text-[#FF0000] transition-colors text-xl" />
              </div>
              <div className="backdrop-blur-lg  bg-[#1A1A1A33]  rounded-full flex items-center justify-center w-[40px] h-[40px] cursor-pointer">
                <FiShare className="text-white  transition-colors text-xl" />
              </div>
            </div>
          </div>
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#2F2F2F"
            size={28}
            className="cursor-pointer"
          />
        </div>

        <div className="">
          <div className="flex items-center justify-between">
            <h6 className="font-rasa sm:text-[25px] text-[20px] font-[600] text-charcoal">
              Request Form
            </h6>
            <div className="flex items-center gap-2">
              <span className="font-rasa text-[#121111] font-[600] sm:text-[18px] text-[15px]">
                03:00
              </span>
              <MdOutlineAccessAlarms className="text-[#2F2F2F]" size={24} />
            </div>
          </div>

          <form className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-full">
                <label className="block font-[600] font-rasa sm:text-[20px] text-[15px] text-[#014F86] mb-1">
                  Similar to
                </label>
                <select className="bg-[#FAF9F6] w-full border border-[#2F2F2F80] rounded-[10px] px-3 py-3 outline-none text-[#014F8680]">
                  <option> Select service name</option>
                </select>
              </div>
              <div className="w-full">
                <label className="flex items-center gap-1 font-[600] font-rasa sm:text-[20px] text-[15px] text-[#014F86] mb-1">
                  What size would you like
                  <IoMdInformationCircle />
                </label>
                <select className="bg-[#FAF9F6] w-full border border-[#2F2F2F80] rounded-[10px] px-3 py-3 outline-none text-[#014F8680]">
                  <option> Select service name</option>
                </select>
              </div>
            </div>

            <div className="w-full">
              <label className="block font-[600] font-rasa sm:text-[20px] text-[15px] text-[#014F86] mb-1">
                Service details
              </label>
              <textarea
                placeholder="Please enter your service details.."
                className="bg-[#FAF9F6] w-full border border-[#2F2F2F80] rounded-[10px] px-3 py-3 outline-none text-[#014F8680]"
                rows={5}
              />
            </div>

            <div className="w-full">
              <label className="block font-[600] font-rasa sm:text-[20px] text-[15px] text-[#014F86] mb-1">
                Send a photo
              </label>
              <div className="border-1 border-dashed border-[#2F2F2F80F]  bg-white px-2 py-2  flex items-center justify-center gap-1 cursor-pointer">
                <TiUpload color="#FF827F" size={20} />
                <p className="font-rasa font-[600] sm:text-[18px] text-[15px] text-secondary">
                  Click here or drag & drop your new photo
                </p>
              </div>
            </div>

            <div>
              <div
                onClick={() =>
                  setShowAdditionalServices(!showAdditionalServices)
                }
                className="flex items-center gap-2 cursor-pointer"
              >
                {showAdditionalServices ? (
                  <FaMinus className="text-[#014F86] sm:text-[20px] text-[15px]" />
                ) : (
                  <FaPlus className="text-[#014F86] sm:text-[20px] text-[15px]" />
                )}
                <h6 className="font-rasa text-[#014F86] sm:text-[27px] text-[20px] font-[600]">
                  {showAdditionalServices ? "Remove extras" : "Add extras"}
                </h6>
              </div>
              {showAdditionalServices && (
                <div className="flex flex-col space-y-2 mt-2">
                  {SERVICE_OPTIONS.map(({ key, label }) => (
                    <label className="flex items-center gap-2" key={key}>
                      <input
                        type="checkbox"
                        className="peer hidden"
                        checked={services[key]}
                        onChange={() => handleToggleService(key)}
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
                      <span className="font-[700] font-sansation sm:text-[17px] text-[15px] text-[#121111]">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="w-full">
              <label className="flex items-center gap-1 font-[600] font-rasa sm:text-[20px] text-[15px] text-[#014F86] mb-1">
                With Which Chair
                <IoMdInformationCircle />
              </label>
              <div>
                <ChairSelector />
              </div>
            </div>

            <div className="w-full">
              <label className="block font-[600] font-rasa sm:text-[20px] text-[15px] text-[#014F86] mb-1">
                For What date?
              </label>
              <div>
                <ChooseDatePicker
                  selectedDate={selectedDate}
                  onSelectDate={setSelectedDate}
                />
              </div>
            </div>

            <div className="w-full">
              <label className="block font-[600] font-rasa sm:text-[20px] text-[15px] text-[#014F86] mb-1">
                What time of the day?
              </label>
              <div>
                <TimeSlotSelector />
              </div>
            </div>

            <div className="">
              <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-secondary flex items-center gap-1 mb-2">
                Special event? <RiInformationFill />
              </label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-1 cursor-pointer">
                  <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                    Yes
                  </span>
                  <span className="relative w-4 h-4">
                    <input
                      type="radio"
                      name="yesno2"
                      className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                      checked={value === true}
                      onChange={() => setValue(true)}
                    />
                    <span
                      className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                        value === true ? "border-[#F67067]" : "border-[#2F2F2F]"
                      } border`}
                    ></span>
                  </span>
                </label>

                <label className="flex items-center gap-1 cursor-pointer">
                  <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                    No
                  </span>
                  <span className="relative w-4 h-4">
                    <input
                      type="radio"
                      name="yesno2"
                      className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                      checked={value === false}
                      onChange={() => setValue(false)}
                    />
                    <span
                      className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                        value === false
                          ? "border-[#F67067]"
                          : "border-[#2F2F2F]"
                      } border`}
                    ></span>
                  </span>
                </label>
              </div>
            </div>
            <div className="">
              <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-secondary flex items-center gap-1 mb-2">
                Do you want the service provider to drive to you?{" "}
                <RiInformationFill />
              </label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-1 cursor-pointer">
                  <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                    Yes
                  </span>
                  <span className="relative w-4 h-4">
                    <input
                      type="radio"
                      name="yesno2"
                      className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                      checked={value1 === true}
                      onChange={() => setValue1(true)}
                    />
                    <span
                      className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                        value1 === true
                          ? "border-[#F67067]"
                          : "border-[#2F2F2F]"
                      } border`}
                    ></span>
                  </span>
                </label>

                <label className="flex items-center gap-1 cursor-pointer">
                  <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                    No
                  </span>
                  <span className="relative w-4 h-4">
                    <input
                      type="radio"
                      name="yesno2"
                      className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                      checked={value1 === false}
                      onChange={() => setValue1(false)}
                    />
                    <span
                      className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                        value1 === false
                          ? "border-[#F67067]"
                          : "border-[#2F2F2F]"
                      } border`}
                    ></span>
                  </span>
                </label>
              </div>
            </div>
            {value && (
              <>
                <div className="">
                  <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                    Enter the address where you’d like the service provider to
                    come, if it differs from the one listed in your account.
                  </label>
                  <div className="flex items-center rounded px-3 py-2 border border-[#2F2F2F] relative">
                    <input
                      type="text"
                      className="flex-grow outline-none text-[#2F2F2F80]"
                      placeholder="Enter here.."
                    />
                    <span className="px-3 py-2 bg-[#2F2F2F] text-[#FAF9F6] absolute right-0">
                      $
                    </span>
                  </div>
                </div>
                <div>
                  <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-secondary flex items-center gap-1 mb-2">
                    Free parking spot?
                    <RiInformationFill className="text-[#FF827F] text-lg" />
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-1 cursor-pointer">
                      <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                        Yes
                      </span>
                      <span className="relative w-4 h-4">
                        <input
                          type="radio"
                          name="yesno1"
                          className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                          checked={value2 === true}
                          onChange={() => setValue2(true)}
                        />
                        <span
                          className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                            value2 === true
                              ? "border-[#F67067]"
                              : "border-[#2F2F2F]"
                          } border`}
                        ></span>
                      </span>
                    </label>

                    <label className="flex items-center gap-1 cursor-pointer">
                      <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                        No
                      </span>
                      <span className="relative w-4 h-4">
                        <input
                          type="radio"
                          name="yesno1"
                          className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                          checked={value2 === false}
                          onChange={() => setValue2(false)}
                        />
                        <span
                          className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                            value2 === false
                              ? "border-[#F67067]"
                              : "border-[#2F2F2F]"
                          } border`}
                        ></span>
                      </span>
                    </label>
                  </div>
                </div>
              </>
            )}
            <div className="w-full">
              <label className="block font-[600] font-rasa sm:text-[20px] text-[15px] text-[#014F86] mb-1">
                Price Offer
              </label>
              <input
                type="text"
                placeholder="Type your offer"
                className="bg-[#FAF9F6] w-full border border-[#2F2F2F80] rounded-[10px] px-3 py-3 outline-none text-[#014F8680]"
              />
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="peer hidden"
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
              />
              <div
                className={`w-[20px] h-[20px] rounded-sm flex items-center justify-center transition-colors duration-300 ${
                  isChecked
                    ? "bg-[#FF827F]"
                    : "bg-[#D9D9D9] border border-[#2F2F2F]"
                }`}
              >
                {isChecked && (
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
              <span className="font-medium font-rasa sm:text-[17px] text-[15px] text-charcoal">
                You are agreeing to review the provider's work.
              </span>
            </label>
          </form>
          <div className="mt-6 flex justify-center">
            <button
              className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
              onClick={handleopensuccessmodal}
            >
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RequestFormSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm sm:max-w-xl p-3 shadow-xl">
        <div className="flex items-center flex-col justify-center">
          <img src={img3} alt="" className="w-[200px] h-[200px]" />
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            Your Request Has Been Submitted Successfully{" "}
          </h6>
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
            10:30 AM - 11:00 AM (30min)
          </h6>
          <p className="font-rasa font-[500]sm:text-[20px] text-[18px] text-charcoal text-center">
            Please check your chat box for more information
          </p>
        </div>

        {/* Next Button */}
        <div className="mt-20 mb-20 flex justify-center">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const ImageShowModal = ({ isOpen, onClose, images = [] }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-lg w-full max-w-3xl max-h-[500px] shadow-lg relative">
        <div className="absolute top-5 right-8 z-1">
          <IoMdCloseCircleOutline
            onClick={onClose}
            color="#000000"
            size={28}
            className="cursor-pointer"
          />
        </div>

        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          dynamicHeight={true}
          emulateTouch
        >
          {images.map((imgSrc, index) => (
            <div key={index} className="flex justify-center w-full">
              <img
                src={imgSrc}
                alt={`Slide ${index + 1}`}
                className="rounded-lg max-h-[500px] object-cover  w-full"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const LogOrCreateAccountModal = ({ isOpen, onClose, handlebackloginmodal }) => {
  if (!isOpen) return null;

  const navigate = useNavigate();

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative max-h-[80vh] overflow-y-auto p-3 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IoArrowBack
              color="#2F2F2F"
              size={25}
              className="cursor-pointer"
              onClick={handlebackloginmodal}
            />
            <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
              Please Log In or Create an Account to continue{" "}
            </h2>
          </div>
          <IoMdCloseCircleOutline
            className="cursor-pointer text-2xl text-[#000000]"
            onClick={onClose}
          />
        </div>
        {/* Image */}
        <div className="flex items-center gap-8 pb-18 pt-10  pl-5 pr-5">
          <div
            className="cursor-pointer max-w-sm rounded-[20px] overflow-hidden border border-[#2F2F2F] bg-[#123E41] p-2"
            onClick={() => navigate("/signin")}
          >
            <div className="relative">
              <img
                src={img28}
                alt="Shop"
                className="w-full h-50 rounded-[10px] object-cover"
              />
            </div>

            {/* Info Section */}
            <div className="py-1 px-1">
              <p className="text-[#FAF9F6] font-rasa sm:text-[28px] text-[25px] font-[600] text-center">
                Log In
              </p>
            </div>
          </div>
          <div
            className="cursor-pointer max-w-sm rounded-[20px] overflow-hidden border border-[#2F2F2F]  bg-[#123E41] p-2"
            onClick={() => navigate("/account-type")}
          >
            <div className="relative">
              <img
                src={img29}
                alt="Shop"
                className="w-full h-50 rounded-[10px] object-cover"
              />
            </div>

            {/* Info Section */}
            <div className="py-1 px-1">
              <div>
                <p className="text-[#FAF9F6] font-rasa sm:text-[28px] text-[25px] font-[600] text-center">
                  Create an Account
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FullyBookedWarningModal = ({
  isOpen,
  onClose,
  handleopensecondmodal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-xl max-w-md p-4 shadow-xl">
        <div className="flex items-center justify-end">
          <IoMdCloseCircleOutline
            className="cursor-pointer text-2xl text-[#000000]"
            onClick={onClose}
          />
        </div>
        <h6 className="text-[#2F2F2F] font-rasa sm:text-[25px] text-[20px] font-[600] text-center">
          This salon is fully booked at the selected time. If you would like to
          request this service during that time, please click the "Continue"
          button and provide your name, phone number, and email address. This
          information will allow us to notify you in case the salon cancels its
          ongoing appointment.
        </h6>
        <div className="flex items-center justify-center gap-5 mt-5">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-sansation font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-sansation font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handleopensecondmodal}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

const FullyBookedRequestFormModal = ({
  isOpen,
  onClose,
  handleopenthirdmodal,
}) => {
  if (!isOpen) return null;

  const [days, setDays] = useState({
    morning: false,
    afternoon: false,
    evening: false,
  });

  const handleChangeDays = (key) => {
    setDays((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderCheckboxDays = (label, key) => (
    <label className="flex items-center sm:gap-5" key={key}>
      <input
        type="checkbox"
        className="peer hidden"
        checked={days[key]}
        onChange={() => handleChangeDays(key)}
      />
      <div
        className={`w-[24px] h-[24px] rounded-sm flex items-center justify-center transition-colors duration-300
            ${
              days[key]
                ? "bg-[#FF827F]"
                : "bg-[#D9D9D9] border border-[#2F2F2F]"
            }`}
      >
        {days[key] && (
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
      <span className="font-[400] font-sansation sm:text-[17px] text-[15px] text-charcoal">
        {label}
      </span>
    </label>
  );

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-xl max-w-lg p-4 max-h-[80vh] overflow-y-auto shadow-xl">
        <div className="flex items-center justify-between mb-5">
          <h2 className="sm:text-[25px] text-[20px] font-[600] text-center text-charcoal font-rasa leading-tight ">
            Notify Me when Omar Vacaro has an Update
          </h2>
          <div className="flex items-center gap-2">
            <span className="font-rasa text-[#121111] font-[600] sm:text-[18px] text-[15px]">
              03:00
            </span>
            <MdOutlineAccessAlarms className="text-[#2F2F2F]" size={24} />
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        <h2 className="sm:text-[25px] text-[20px] font-[600] text-charcoal font-rasa leading-tight ">
          FREE
        </h2>

        <form className="space-y-4 mt-2">
          <div className="flex items-center gap-2">
            <div className="w-full">
              <label className="block font-[600] font-rasa sm:text-[20px] text-[15px] text-[#014F86] mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter here..."
                className="bg-[#FAF9F6] w-full border border-[#2F2F2F80] rounded-[10px] px-3 py-3 outline-none placeholder:text-[#014F8680]"
              />
            </div>
            <div className="w-full">
              <label className="block font-[600] font-rasa sm:text-[20px] text-[15px] text-[#014F86] mb-1">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter here..."
                className="bg-[#FAF9F6] w-full border border-[#2F2F2F80] rounded-[10px] px-3 py-3 outline-none placeholder:text-[#014F8680]"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="block font-[600] font-rasa sm:text-[20px] text-[15px] text-[#014F86] mb-2">
              Pick a time (select all that apply)
            </label>
            <div className="flex  flex-col gap-2  mb-4">
              {renderCheckboxDays("morning", "morning")}
              {renderCheckboxDays("afternoon", "afternoon")}
              {renderCheckboxDays("evening", "evening")}
            </div>
          </div>
          <div className="w-full mt-5">
            <div className="flex flex-wrap sm:items-center justify-between sm:flex-row flex-col mb-4">
              {renderCheckboxDays(
                "Yes send me promotional offers. View our Privacy & Terms",
                "morning"
              )}
            </div>
          </div>
        </form>

        <div className="flex flex-col items-center justify-center mt-5">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-sansation font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handleopenthirdmodal}
          >
            Submit
          </button>
          <p className="font-[400] font-sansation sm:text-[16px] text-[15px] text-[#2F2F2F] mt-1">
            By clicking submit you agree to receive appointment updated.
          </p>
        </div>
      </div>
    </div>
  );
};

const FullyBookedRequestFormSuccesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-xl max-w-md p-4 shadow-xl">
        <div className="flex items-center justify-end">
          <IoMdCloseCircleOutline
            className="cursor-pointer text-2xl text-[#000000]"
            onClick={onClose}
          />
        </div>

        <div className="flex items-center flex-col justify-center">
          <img src={img3} alt="" className="w-[180px] h-[180px]" />
          <h6 className="font-rasa font-[600] sm:text-[28px] text-[25px] text-charcoal text-center">
            Your request has been successfully submitted.{" "}
          </h6>
        </div>

        <div className="flex items-center justify-center gap-5 mt-5">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-sansation font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const CloseBussinessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [selectedClosure, setSelectedClosure] = useState("");

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-2xl p-3 shadow-xl overflow-y-auto h-[70vh] relative">
        <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa mb-4">
          Close The Business
        </h2>
        <div className="absolute top-5 right-8">
          <IoMdCloseCircleOutline
            className="cursor-pointer text-2xl text-[#000000]"
            onClick={onClose}
          />
        </div>
        <div className="flex items-center justify-center gap-2 mb-5">
          <img src={img30} alt="" className="w-20 h-20 rounded-full" />
          <span className="font-rasa font-[600] sm:text-[30px] text-[25px] text-[#757575] m-0">
            Sexy Braids
          </span>
        </div>

        <div className="mb-5">
          <div className="mb-2">
            <label className="block font-[700] sm:text-[17px] text-[15px] text-[#121111] mb-2">
              Closure Type
            </label>
            <select
              value={selectedClosure}
              onChange={(e) => setSelectedClosure(e.target.value)}
              className="bg-[#FAF9F6] w-full border border-[#00000033] rounded-[10px] px-3 py-3 outline-none text-[#121111] font-[700]"
            >
              <option>Select your closure type...</option>
              <option>Temporary Closure</option>
              <option>Permanent Closure</option>
            </select>
          </div>
          {selectedClosure === "Temporary Closure" && (
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className=" block sm:text-[16px] text-[12px] font-bold font-sansation mb-2 text-charcoal">
                  From
                </label>
                <input
                  type="date"
                  className="w-full border border-[#2F2F2F] rounded px-2 py-2 outline-none bg-transparent text-charcoal font-sansation"
                />
              </div>
              <div>
                <label className="block sm:text-[16px] text-[15px] font-bold font-sansation mb-2 text-charcoal">
                  To
                </label>
                <input
                  type="date"
                  className="w-full border border-[#2F2F2F] rounded px-2 py-2 outline-none bg-transparent text-charcoal font-sansation"
                />
              </div>
            </div>
          )}
          {selectedClosure === "Permanent Closure" && (
            <p className="sm:text-[16px] text-[12px] font-bold font-sansation mb-2 text-charcoal">
              The business is marked as permanently closed, but data remains on
              the system for 90 days. During this time, If you still change your
              mind and click “Resume Business” you will be able to continue with
              your account.
            </p>
          )}
        </div>

        <div className="absolute bottom-2 right-2 left-2">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-4 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Close The Business
          </button>
          <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </div>
  );
};

const DeleteBussinessAccountModal = ({
  isOpen,
  onClose,
  handleopendeletesuccesmodal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-2xl p-3 shadow-xl overflow-y-auto h-[50vh] relative">
        <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa mb-4">
          Delete Account
        </h2>
        <div className="absolute top-5 right-8">
          <IoMdCloseCircleOutline
            className="cursor-pointer text-2xl text-[#000000]"
            onClick={onClose}
          />
        </div>
        <div className="flex items-center justify-center gap-2 mb-5">
          <img src={img30} alt="" className="w-20 h-20 rounded-full" />
          <span className="font-rasa font-[600] sm:text-[30px] text-[25px] text-[#757575] m-0">
            Sexy Braids
          </span>
        </div>

        <div className="mb-5 text-center">
          <p className="sm:text-[20px] text-[15px] font-bold font-sansation mb-2 text-[#121111] leading-tight">
            This account manages multiple salons. Deleting the account will
            permanently remove all salons associated with it. Are you sure you
            want to proceed?
          </p>
        </div>

        <div className="absolute bottom-6 right-2 left-2">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-4 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleopendeletesuccesmodal}
          >
            Delete This Account
          </button>
        </div>
      </div>
    </div>
  );
};

const DeleteBussinessAccountSuccesModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        navigate("/");
        onClose();
        localStorage.removeItem("user");
      }, 3000);

      return () => clearTimeout(timeout); // Cleanup on unmount or modal close
    }
  }, [isOpen, navigate]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-xl max-w-md p-4 shadow-xl">
        <div className="flex items-center flex-col justify-center">
          <img src={img3} alt="" className="w-[180px] h-[180px]" />
          <h6 className="font-rasa font-[700] sm:text-[28px] text-[25px] text-[#121111] text-center">
            Your account successfully deleted.
          </h6>
        </div>
      </div>
    </div>
  );
};

const DeleteManagerModal = ({ isOpen, onClose, handlehidefamilycard }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-xl p-3 shadow-xl h-[35vh] overflow-auto relative">
        <div className="mb-8 text-center px-2 py-5">
          <p className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal">
            Are you sure you want to delete your manager?
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={onClose}
          >
            No
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handlehidefamilycard}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

const AddbreaksModal = ({ isOpen, onClose, handlehidefamilycard }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-xl p-3 shadow-xl h-[45vh] overflow-auto relative">
        <div className="flex items-center justify-between">
          <h2 className="sm:text-[25px] text-[20px] font-[600] text-center text-charcoal font-rasa leading-tight ">
            ADD BREAKS
          </h2>
          <IoMdCloseCircleOutline
            className="cursor-pointer text-2xl text-[#000000]"
            onClick={onClose}
          />
        </div>

        <form className="space-y-4 mt-2">
          <div className="w-full">
            <label className="block font-[600] font-rasa sm:text-[20px] text-[15px] text-[#2F2F2F] mb-1">
              Start Time
            </label>
            <input
              type="time"
              placeholder="Enter here..."
              className="bg-[#FFFFFF00] w-full border border-[#2F2F2F] rounded-[10px] px-3 py-3 outline-none placeholder:text-[#014F8680]"
            />
          </div>
          <div className="w-full">
            <label className="block font-[600] font-rasa sm:text-[20px] text-[15px] text-[#2F2F2F] mb-1">
              End Time
            </label>
            <input
              type="time"
              placeholder="Enter here..."
              className="bg-[#FFFFFF00] w-full border border-[#2F2F2F] rounded-[10px] px-3 py-3 outline-none placeholder:text-[#014F8680]"
            />
          </div>
        </form>

        <div className="flex items-center justify-center gap-3 mt-5">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handlehidefamilycard}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

const DeleteUserAccountModal = ({
  isOpen,
  onClose,
  handleopendeletesuccesmodal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-2xl p-3 shadow-xl overflow-y-auto h-[50vh] relative">
        <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa mb-4">
          Delete Account
        </h2>
        <div className="absolute top-5 right-8">
          <IoMdCloseCircleOutline
            className="cursor-pointer text-2xl text-[#000000]"
            onClick={onClose}
          />
        </div>
        <div className="flex items-center justify-center gap-2 mb-5">
          <img src={img31} alt="" className="w-20 h-20 rounded-full" />
          <span className="font-rasa font-[600] sm:text-[30px] text-[25px] text-[#757575] m-0">
            Wilson George
          </span>
        </div>

        <div className="mb-5 text-center">
          <p className="sm:text-[20px] text-[15px] font-bold font-sansation mb-2 text-[#121111] leading-tight">
            Deleting your account is permanent. You will lose all access and
            data associated with this account.
          </p>
        </div>

        <div className="absolute bottom-6 right-2 left-2">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-4 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleopendeletesuccesmodal}
          >
            Delete The Account
          </button>
        </div>
      </div>
    </div>
  );
};

const CalendarModal = ({ isOpen, onClose, handleOpenNewTime }) => {
  if (!isOpen) return null;
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-xl max-w-md p-3 shadow-xl h-[90vh] overflow-auto">
        {/* hearder  */}
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Select A New Date
          </h2>
          <div className="flex items-center gap-2 absolute right-0 top-0">
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        {/* main */}
        <div className="mt-2">
          <div className="mangertimedate1">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              locale={enUS}
              inline
              calendarClassName="custom-calendar"
              dayClassName={(date) =>
                date.getDate() >= 6 &&
                date.getDate() <= 12 &&
                date?.getMonth() === 5
                  ? "highlight-range"
                  : ""
              }
            />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handleOpenNewTime}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const TimeModal = ({ isOpen, onClose, handleOpenSalonList }) => {
  if (!isOpen) return null;
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-xl max-w-md p-3 shadow-xl h-[74vh] overflow-auto">
        {/* hearder  */}
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Select A New Time
          </h2>
          <div className="flex items-center gap-2 absolute right-0 top-0">
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        {/* main */}
        <div className="mt-2 space-y-6">
          <div className="">
            <h6 className="sm:text-[30px] text-[20px] font-[600] text-start text-charcoal font-rasa ml-4">
              Morning
            </h6>
            <TimePickerForModal selectedTime={selectedTime} />
          </div>
          <div className="">
            <h6 className="sm:text-[30px] text-[20px] font-[600] text-start text-charcoal font-rasa ml-4">
              Afternoon
            </h6>
            <TimePickerForModal />
          </div>
          <div className="">
            <h6 className="sm:text-[30px] text-[20px] font-[600] text-start text-charcoal font-rasa ml-4">
              Evening
            </h6>
            <TimePickerForModal />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handleOpenSalonList}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const SalonsLinstModal = ({
  isOpen,
  onClose,
  handleOpenCreatenewappoitmentsuccess,
}) => {
  if (!isOpen) return null;
  const salons = [
    {
      id: 1,
      name: "Latrica Hair Salon",
      rating: 3.8,
      vehicle: "Mercedes Vito",
      location: "NY 10003, USA",
      services: [
        { title: "Braids", time: "150 Mins", price: "$100" },
        { title: "Box Braids", time: "480 Mins", price: "$200" },
        { title: "Crochet", time: "240 Mins", price: "$180" },
      ],
      image: img32,
    },
    {
      id: 2,
      name: "Jakob Hair Salon",
      rating: 3.8,
      vehicle: "Mercedes Vito",
      location: "NY 10003, USA",
      services: [
        { title: "Braids", time: "150 Mins", price: "$100" },
        { title: "Box Braids", time: "480 Mins", price: "$200" },
        { title: "Crochet", time: "240 Mins", price: "$180" },
      ],
      image: img33,
    },
    {
      id: 3,
      name: "Nolan Hair Salon",
      rating: 3.8,
      vehicle: "Mercedes Vito",
      location: "NY 10003, USA",
      services: [
        { title: "Braids", time: "150 Mins", price: "$100" },
        { title: "Box Braids", time: "480 Mins", price: "$200" },
        { title: "Crochet", time: "240 Mins", price: "$180" },
      ],
      image: img34,
    },
  ];

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-3 shadow-xl ">
        {/* hearder  */}
        <div className="relative">
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Recommended Salons
          </h2>
          <div className="flex items-center gap-2 absolute right-0 top-0">
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        {/* main */}
        <div className="space-y-4 h-[54vh] overflow-auto  pr-2 mb-5">
          {salons.map((salon) => (
            <div
              key={salon.id}
              className="w-full cursor-pointer bg-[#FFFFFF] flex flex-col gap-2 md:flex-row  rounded-[20px] overflow-hidden shadow-[0px_4px_4px_0px_#00000040] px-2.5 py-3 hover:bg-[#97FFB3]"
            >
              <img
                src={salon.image}
                alt={salon.name}
                className="w-full md:w-40 h-40 rounded-[20px] object-cover"
              />
              <div className="flex flex-col w-full space-y-2">
                <div className="space-y-2">
                  <h3 className="font-poppins font-[800] sm:text-[17px] text-[15px] text-[#3E4958]">
                    {salon.name}
                  </h3>
                  <div className="flex items-center font-poppins font-[300] sm:text-[15px] text-[15px] text-[#3E4958] gap-1">
                    <FaStar size={16} className="text-yellow-400" />
                    {salon.rating} <span className="mx-1">·</span>{" "}
                    {salon.vehicle}
                  </div>
                  <p className=" font-poppins font-[300] sm:text-[15px] text-[15px] text-[#3E4958]">
                    {salon.location}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div
                    className="bg-[#2F2F2F] cursor-pointer border border-[#2F2F2F] rounded-[30px] px-2.5 py-2 font-[800] font-poppins sm:text-[12px] text-[12px] text-[#FAF9F6]"
                    onClick={() => navigate("/services-details")}
                  >
                    See All Services
                  </div>
                  {salon.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="border border-[#2F2F2F] rounded-[30px] px-2.5 py-2 font-poppins sm:text-[12px] text-[12px] text-[#3E4958]"
                    >
                      {service.title} · {service.time} · {service.price}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pb-6 flex items-center justify-center gap-3">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handleOpenCreatenewappoitmentsuccess}
          >
            Set Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

const BookingCalendarModal = ({
  isOpen,
  onClose,
  handleopengofirst,
  handleopenSecondmodal,
  handleopenwaiting,
}) => {
  if (!isOpen) return null;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isWaitlistDate, setIsWaitlistDate] = useState(false);

  const SERVICE_OPTIONS = [
    { key: "undoHair", label: "Undo hair ($45, +1hr)", price: 45, time: 60 },
    { key: "washHair", label: "Wash hair ($20, +20mins)", price: 20, time: 20 },
    {
      key: "blowDryHair",
      label: "Blow dry hair ($15, +20mins)",
      price: 15,
      time: 20,
    },
  ];
  const [selectedTime, setSelectedTime] = useState(null);
  const [services, setServices] = useState({});
  const [showAdditionalServices, setShowAdditionalServices] = useState(false);

  const basePrice = 40;
  const baseTime = 30;

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const day = date.getDate();
    const waitinglist = [1, 2]; // Your waitlist days
    setIsWaitlistDate(waitinglist.includes(day));
  };

  const handleToggleService = (key) => {
    setServices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const totalPrice =
    basePrice +
    SERVICE_OPTIONS.reduce(
      (sum, item) => (services[item.key] ? sum + item.price : sum),
      0
    );
  const totalTime =
    baseTime +
    SERVICE_OPTIONS.reduce(
      (sum, item) => (services[item.key] ? sum + item.time : sum),
      0
    );

  const formatTime = (mins) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h > 0 ? `${h}hr` : ""}${m > 0 ? ` ${m}min` : ""}`.trim();
  };

  return (
    <div className="fixed inset-0 bg-opacity-40 z-30 flex items-center justify-center">
      <div className="relative bg-white rounded-[10px] w-full sm:max-w-xl max-w-md p-3 shadow-xl">
        {/* header */}
        <div className="flex items-center gap-2 absolute right-2 top-4">
          <span className="font-rasa text-[#121111] font-[600] sm:text-[18px] text-[15px]">
            03:00
          </span>
          <MdOutlineAccessAlarms className="text-[#2F2F2F]" size={24} />
          <IoMdCloseCircleOutline
            className="cursor-pointer text-xl text-[#000000]"
            onClick={onClose}
          />
        </div>

        {/* main */}
        <div className="mt-8 max-h-[60vh] overflow-y-auto">
          <div className="mangertimedate2">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
              dayClassName={(date) => {
                if (!date || isNaN(date.getTime())) return "";
                const day = date.getDate();
                const month = date.getMonth();
                const year = date.getFullYear();

                const isCurrentMonth =
                  month === selectedDate.getMonth() &&
                  year === selectedDate.getFullYear();
                const bookedDays = [23, 24];
                const indicatorDays = [9, 21];
                const waitinglist = [1, 2];

                let className = "";

                if (isCurrentMonth && bookedDays.includes(day)) {
                  className += "react-datepicker__day--booked ";
                }
                if (isCurrentMonth && indicatorDays.includes(day)) {
                  className += "react-datepicker__day--has-indicator ";
                }
                if (isCurrentMonth && waitinglist.includes(day)) {
                  className += "react-datepicker__day--has-waitinglist ";
                }

                return className.trim();
              }}
            />
          </div>
          <div className="flex items-center gap-2 ml-5 mb-2">
            <div className="bg-[#EC9301] w-[30px] h-[6px] rounded-[4px]"></div>
            <p className="font-rasa text-[#000000] font-[400] sm:text-[18px] text-[15px]">
              Limited Slots - Book Now!
            </p>
          </div>
          <div className="mb-3">
            <TimeSlotSelector />
          </div>
          <div className="mb-3">
            <TimePicker2
              selectedTime={selectedTime}
              onSelectTime={setSelectedTime}
            />
          </div>
          <div className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2">
            <div className="flex items-center justify-between">
              <div className="">
                <h3 className="font-[700] text-[14px] font-gotu text-[#121111] mb-1">
                  Gent's Standard
                </h3>
                <p className="text-[14px] text-[#494948] font-inter font-[400] mb-2">
                  Professional consultation, haircut, hot lather neck shave,
                  shampoo and conditioner
                </p>
                <div className="flex items-center gap-1 text-[12px] text-[#494948] font-inter font-[400] mt-2">
                  Staff
                  <img src={img4} alt="" className="w-10 h-10 rounded-full" />
                  <h6 className="text-[#121111] sm:text-[14px] text-[10px] font-[700] font-inter">
                    Lydia Baptista
                  </h6>
                </div>
              </div>
              <div className="flex items-end flex-col">
                <h6 className="text-[#121111] sm:text-[18px] text-[15px] font-[700] font-inter">
                  $40.00
                </h6>
                <p className="text-[#757575] sm:text-[14px] text-[15px] font-[400] font-inter">
                  10:30 AM - 11:00 AM
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <div
                onClick={() =>
                  setShowAdditionalServices(!showAdditionalServices)
                }
                className="flex items-center gap-2 cursor-pointer"
              >
                {showAdditionalServices ? (
                  <FaMinus className="text-[#014F86] sm:text-[20px] text-[15px]" />
                ) : (
                  <FaPlus className="text-[#014F86] sm:text-[20px] text-[15px]" />
                )}
                <h6 className="font-rasa text-[#014F86] sm:text-[27px] text-[20px] font-[600]">
                  {showAdditionalServices ? "Remove extras" : "Add extras"}
                </h6>
              </div>
              {showAdditionalServices && (
                <div className="flex flex-col space-y-2 mt-2">
                  {SERVICE_OPTIONS.map(({ key, label }) => (
                    <label className="flex items-center gap-2" key={key}>
                      <input
                        type="checkbox"
                        className="peer hidden"
                        checked={services[key]}
                        onChange={() => handleToggleService(key)}
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
                      <span className="font-[700] font-sansation sm:text-[17px] text-[15px] text-[#121111]">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
            <div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleopengofirst}
              >
                <FaPlus className="text-[#014F86] sm:text-[20px] text-[15px]" />
                <h6 className="font-rasa text-[#014F86] sm:text-[27px] text-[20px] font-[600]">
                  Add another service
                </h6>
              </div>
              <div className="flex flex-col items-end justify-end mt-8">
                <div className="flex items-center">
                  <span className="font-[500] text-[#121111] mr-1 sm:text-[18px] text-[15px]">
                    Total:
                  </span>
                  <span className="font-[700] text-[#121111] mr-1 sm:text-[30px] text-[25px] m-0">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="pl-[50px] mt-1">
                  <span className="font-[500] text-[#757575] mr-1 sm:text-[16px] text-[15px]">
                    {formatTime(totalTime)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-center">
          <button
            className="w-full flex items-center justify-center gap-3 bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-4 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={isWaitlistDate ? handleopenwaiting : handleopenSecondmodal}
          >
            {isWaitlistDate && <GiSandsOfTime size={22} />}
            {isWaitlistDate ? "Join Waitlist" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

const WaitingBookingFormModal = ({ isOpen, onClose, handleopenthirdmodal }) => {
  if (!isOpen) return null;

  const [days, setDays] = useState({
    morning: false,
    afternoon: false,
    evening: false,
  });

  const handleChangeDays = (key) => {
    setDays((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderCheckboxDays = (label, key) => (
    <label className="flex items-center sm:gap-5" key={key}>
      <input
        type="checkbox"
        className="peer hidden"
        checked={days[key]}
        onChange={() => handleChangeDays(key)}
      />
      <div
        className={`w-[24px] h-[24px] rounded-sm flex items-center justify-center transition-colors duration-300
            ${
              days[key]
                ? "bg-[#FF827F]"
                : "bg-[#D9D9D9] border border-[#2F2F2F]"
            }`}
      >
        {days[key] && (
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
      <span className="font-[400] font-sansation sm:text-[17px] text-[15px] text-charcoal">
        {label}
      </span>
    </label>
  );

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-xl max-w-lg p-4 max-h-[80vh] overflow-y-auto shadow-xl">
        <div className="flex items-center justify-between mb-5">
          <h2 className="sm:text-[25px] text-[20px] font-[600] text-center text-charcoal font-rasa leading-tight ">
            Join the Waitlist of Omar to get notified
          </h2>
          <div className="flex items-center gap-2">
            <span className="font-rasa text-[#121111] font-[600] sm:text-[18px] text-[15px]">
              03:00
            </span>
            <MdOutlineAccessAlarms className="text-[#2F2F2F]" size={24} />
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        <h2 className="sm:text-[25px] text-[20px] font-[600] text-charcoal font-rasa leading-tight ">
          FREE
        </h2>

        <form className="space-y-4 mt-2">
          <div className="flex items-center gap-2">
            <div className="w-full">
              <label className="block font-[600] font-rasa sm:text-[20px] text-[15px] text-[#014F86] mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter here..."
                className="bg-[#FAF9F6] w-full border border-[#2F2F2F80] rounded-[10px] px-3 py-3 outline-none placeholder:text-[#014F8680]"
              />
            </div>
            <div className="w-full">
              <label className="block font-[600] font-rasa sm:text-[20px] text-[15px] text-[#014F86] mb-1">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter here..."
                className="bg-[#FAF9F6] w-full border border-[#2F2F2F80] rounded-[10px] px-3 py-3 outline-none placeholder:text-[#014F8680]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h6 className="sm:text-[25px] text-[20px] font-[400] text-charcoal font-rasa leading-tight">
              Optional
            </h6>
            <div className="flex items-center justify-between border-b-2 border-[#2F2F2F] pb-5">
              <p className="sm:text-[18px] text-[15px] font-[500] text-charcoal font-rasa leading-tight">
                Place a Priority Bid
              </p>
              <div className="flex items-center gap-2">
                <IoInformationCircleOutline color="#2F2F2F" size={15} />
                <div className="bg-[#FDE8E3] border border-[#2F2F2F] rounded-[10px] px-2 py-2 sm:text-[18px] text-[15px] font-[600] text-charcoal font-rasa leading-tight">
                  Pay $1.5
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="sm:text-[18px] text-[15px] font-[500] text-charcoal font-rasa leading-tight">
                Secure top spot instantly
              </p>
              <div className="flex items-center gap-2">
                <IoInformationCircleOutline color="#2F2F2F" size={15} />
                <div className="bg-[#FDE8E3] border border-[#2F2F2F] rounded-[10px] px-2 py-2 sm:text-[18px] text-[15px] font-[600] text-charcoal font-rasa leading-tight">
                  Pay $15
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-10">
            <div className="flex flex-wrap sm:items-center justify-between sm:flex-row flex-col mb-4">
              {renderCheckboxDays(
                "Yes send me promotional offers. View our Privacy & Terms",
                "morning"
              )}
            </div>
          </div>
        </form>

        <div className="flex flex-col items-center justify-center mt-5">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-sansation font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={onClose}
          >
            Submit
          </button>
          <p className="font-[400] font-sansation sm:text-[16px] text-[15px] text-[#2F2F2F] mt-1">
            By clicking submit you agree to receive appointment updated.
          </p>
        </div>
      </div>
    </div>
  );
};

const BussinessVerificationAppointmentwModal = ({
  isOpen,
  onClose,
  handlopenThird,
  handlbackfirst,
}) => {
  if (!isOpen) return null;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [images, setImages] = useState([null, null]);

  const handleImageChange = (e, index) => {
    const newImages = [...images];
    newImages[index] = e.target.files[0];
    setImages(newImages);
  };

  const Reviewdata = [
    "Clean customer",
    "Punctual customer",
    "Respected instructions",
    "Respectful customer",
    "Clarity in specified needs",
  ];

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-2xl p-3 shadow-xl overflow-y-auto h-[80vh] relative">
        <div className="flex items-center justify-between mb-5">
          <IoIosArrowBack
            className="cursor-pointer text-2xl text-[#000000]"
            onClick={handlbackfirst}
          />
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Latrice
          </h2>
          <IoMdCloseCircleOutline
            className="cursor-pointer text-2xl text-[#000000]"
            onClick={onClose}
          />
        </div>
        <div className="space-y-2 h-[60vh] overflow-auto mb-5 pr-2">
          <div className="w-[70%] m-auto py-6 px-2.5 border-2 border-[#2F2F2F] rounded-[20px] sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa mb-6">
            Scan QR Code
          </div>

          <h2 className="sm:text-[45px] text-[30px] font-[600] text-center text-charcoal font-rasa mb-2">
            Verification of
            <br /> appointment
          </h2>
          <p className="sm:text-[30px] text-[20px] font-[500] text-center text-charcoal font-rasa mb-1">
            Enter the 5-digit appointment code
          </p>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Appointment Code"
              maxLength="5"
              className="w-[98%] px-4 py-3 border border-[#2F2F2F] rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#34A8535C]"
            />
          </div>

          <div className="flex items-center pl-2 mb-5">
            <input
              id="confirm"
              type="checkbox"
              className="mr-2 w-[20px] h-[20px]"
            />
            <label
              htmlFor="confirm"
              className="sm:text-[25px] text-[18px] font-[500] text-center text-charcoal font-rasa"
            >
              I confirm this appointment took place as scheduled
            </label>
          </div>
        </div>

        <div className="absolute bottom-2 ">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-3 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handlopenThird}
          >
            Next
          </button>
          <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </div>
  );
};

const PreAppointmentFormModal = ({
  isOpen,
  onClose,
  handlopenforth,
  handlbacksecond,
}) => {
  if (!isOpen) return null;

  const initialFormQuestions = [
    {
      id: "goal",
      text: "Goals / Expectations for this service",
      required: true,
      optional: false,
      answerType: "select",
    },
    {
      id: "allergies",
      text: "Do you have any allergies or sensitivities?",
      required: false,
      optional: true,
      answerType: "yesno",
    },
    {
      id: "sensitive",
      text: "Are you tender-headed or sensitive to tension",
      required: false,
      optional: false,
      answerType: "yesno",
    },
    {
      id: "washed",
      text: "Will you arrive with hair pre-washed and detangles?",
      required: false,
      optional: true,
      answerType: "yesno",
    },
    {
      id: "pregnant",
      text: "Are you pregnant or nursing?",
      required: false,
      optional: true,
      answerType: "yesno",
    },
    {
      id: "upload",
      text: "Upload Inspiration photo",
      required: false,
      optional: true,
      answerType: "upload",
    },
  ];

  const availableQuestions = [
    {
      id: 1,
      category: "Hair Service",
      text: [
        "What is your current hair routine?",
        "Are you using any oils, serums, or treatments?",
      ],
    },
    {
      id: 2,
      category: "Skincare & Spa",
      text: [
        "Do you have any skin conditions (eczema, et.?)",
        "Have you had any recent treatments or facials?",
      ],
    },
    {
      id: 3,
      category: "Glam & Meakeup",
      text: [
        "Is this service for an event or photoshoot?",
        "Do you prefer a matte, dewy, or natural finish? ",
      ],
    },
    {
      id: 4,
      category: "Universal Preferences?",
      text: [
        "Is anyone accompanying you?",
        "Do you have fragrance sensitivity?",
        "Any tension or discomfort areas to avoid?",
      ],
    },
  ];

  const [formQuestions, setFormQuestions] = useState(initialFormQuestions);
  const [search, setSearch] = useState("");
  const [yesNoAnswers, setYesNoAnswers] = useState({}); // 🗝️ stores answers for each yes/no

  const addQuestion = (itemText) => {
    setFormQuestions([
      ...formQuestions,
      {
        id: Date.now() + Math.random(),
        text: itemText,
        required: false,
        answerType: "text",
      },
    ]);
  };

  const removeQuestion = (id) => {
    setFormQuestions(formQuestions.filter((q) => q.id !== id));
  };

  const filteredAvailable = availableQuestions.filter((q) =>
    q.text.some((item) => item.toLowerCase().includes(search.toLowerCase()))
  );

  const handleYesNoChange = (id, value) => {
    setYesNoAnswers({ ...yesNoAnswers, [id]: value });
  };

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-2xl p-3 shadow-xl overflow-y-auto h-[80vh] relative">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <IoClose
            className="cursor-pointer text-4xl text-[#000000]"
            onClick={onClose}
          />
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-charcoal font-rasa">
            Build Your Pre-Appointment Form
          </h2>
        </div>
        <p className="mb-4 sm:text-[20px] text-[15px] font-[400] text-charcoal font-sansation">
          Easily customize questions to suit your service. Required questions
          are locked. Optional ones can be removed or added.
        </p>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Left: Selected Questions */}
          <div className="md:col-span-2">
            <div className="border border-[#2F2F2F] rounded-[10px] p-4">
              {formQuestions.map((q) => (
                <div key={q.id} className="mb-5 flex items-start gap-1">
                  <IoClose
                    className="cursor-pointer text-2xl text-[#000000]"
                    onClick={() => removeQuestion(q.id)}
                  />
                  <div>
                    <p className="sm:text-[17px] text-[15px] font-[700] leading-[20px] text-charcoal font-sansation">
                      {q.text}{" "}
                      {q.required && (
                        <span className="font-[400]">(Required)</span>
                      )}
                      {q.optional && (
                        <span className="font-[400]">(Optional)</span>
                      )}
                    </p>

                    {q.answerType === "select" && (
                      <select className="mt-2 border border-[#2F2F2F] p-2 rounded-[6px] w-full">
                        <option>Select...</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                      </select>
                    )}

                    {q.answerType === "yesno" && (
                      <div className="flex space-x-6 mt-2">
                        {["Yes", "No"].map((opt) => (
                          <label
                            key={opt}
                            className="flex items-center gap-1 font-[500] font-inter sm:text-[16px] text-[14px] text-[#2F2F2F] cursor-pointer"
                          >
                            <input
                              type="radio"
                              name={q.id}
                              value={opt}
                              checked={yesNoAnswers[q.id] === opt}
                              onChange={() => handleYesNoChange(q.id, opt)}
                              className="accent-teal-800 "
                            />
                            {opt}
                          </label>
                        ))}
                      </div>
                    )}

                    {q.answerType === "upload" && (
                      <div className="mt-2">
                        <div className="flex itmes-center justify-center gap-2 cursor-pointer border border-[#2F2F2F] bg-[#FFFFFF] px-3 py-1 rounded-[6px] sm:text-[16px] text-[12px] font-[700] leading-[20px] text-charcoal font-sansation">
                          <FaRegImage />
                          Upload
                        </div>
                      </div>
                    )}

                    {q.answerType === "text" && (
                      <input
                        type="text"
                        placeholder="Answer here..."
                        className="mt-2 border p-2 rounded w-full"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 gap-2">
              <div className="border border-[#2F2F2F] bg-[#FFFFFF] cursor-pointer sm:text-[16px] text-[14px] font-[700] text-charcoal font-sansation  px-5 py-3 rounded-[6px]">
                Preview
              </div>
              <div className="border border-[#2F2F2F] bg-[#FFFFFF] cursor-pointer sm:text-[16px] text-[14px] font-[700] text-charcoal font-sansation  px-5 py-3 rounded-[6px]">
                Save Template
              </div>
              <div className="border border-[#2F2F2F] bg-[#FFFFFF] cursor-pointer sm:text-[16px] text-[14px] font-[700] text-charcoal font-sansation  px-5 py-3 rounded-[6px]">
                Send Form
              </div>
            </div>
          </div>

          {/* Right: Available Questions */}
          <div className="border rounded p-4">
            <h3 className="sm:text-[16px] text-[15px] font-[700] text-charcoal font-sansation mb-2">
              Add More Questions to Your Form:
            </h3>
            <div className="space-y-2 mb-2">
              {filteredAvailable.map((q) => (
                <div key={q.id}>
                  <h6 className="sm:text-[15px] text-[14px] font-[700] text-charcoal font-sansation mb-1">
                    {q.category}
                  </h6>
                  {q.text.map((item, index) => (
                    <div
                      key={index}
                      className="sm:text-[13px] text-[12px] font-[700] leading-[20px] text-charcoal font-sansation flex items-center gap-1 mb-1"
                    >
                      <LuPlus
                        color="#000000CC"
                        size={20}
                        onClick={() => addQuestion(item)}
                        className="cursor-pointer"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="border-1 border-[#2F2F2F] rounded-[6px] flex items-center h-[34px] ">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-[90%] pl-2 outline-none"
              />
              <div className="border-l border-[#2F2F2F80] h-[34px] flex items-center justify-center p-1">
                <FaArrowDown color="#00000080" size={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SendWaiverConfirmModal = ({ isOpen, onClose, handleOpenWaiver }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-xl p-3 shadow-xl h-[45vh]  relative">
        <div className="flex items-center gap-5">
          <IoMdCloseCircleOutline
            className="cursor-pointer text-2xl text-[#000000]"
            onClick={onClose}
          />
          <h2 className="sm:text-[25px] text-[20px] font-[600] text-center text-charcoal font-rasa leading-tight">
            Appointment Details
          </h2>
        </div>

        <div className="space-y-4 mt-5">
          <div className="space-y-1">
            <h6 className="sm:text-[20px] text-[20px] font-[700] text-charcoal font-sansation leading-[20px]">
              Deluxe Silk Press
            </h6>
            <p className="sm:text-[18px] text-[20px] font-[400] text-charcoal font-sansation leading-[20px]">
              Service
            </p>
          </div>
          <div className="space-y-1">
            <h6 className="sm:text-[20px] text-[20px] font-[700] text-charcoal font-sansation leading-[20px]">
              Dominiqwe R.
            </h6>
            <p className="sm:text-[18px] text-[20px] font-[400] text-charcoal font-sansation leading-[20px]">
              Date : July 21, 2024
            </p>
            <p className="sm:text-[18px] text-[20px] font-[400] text-charcoal font-sansation leading-[20px]">
              Duration : 1hr 30 mins
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-5">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={onClose}
          >
            Send Form
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={handleOpenWaiver}
          >
            Send Waiver
          </button>
        </div>
      </div>
    </div>
  );
};

const SendWaiverModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [customWaiver, setCustomWaiver] = useState("");
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

  const templates = [
    {
      id: "general",
      title: "General Liability Waiver",
      description: "Limits liability in case of harm or reactions.",
    },
    {
      id: "chemical",
      title: "Chemical Service Risk Waiver",
      description: "Clarifies risks of dyes, relaxers, etc.",
    },
    {
      id: "photo",
      title: "Photo & Video Consent",
      description: "Authorizes use of client image.",
    },
  ];

  const renderCheckbox = (label, key) => (
    <label className="flex items-center space-x-2" key={key}>
      <input
        type="checkbox"
        className="peer hidden"
        checked={services[key]}
        onChange={() => handleChange(key)}
      />
      <div
        className={`w-[24px] h-[24px] rounded-full flex items-center justify-center transition-colors duration-300
            ${
              services[key]
                ? "bg-[#2F2F2F]"
                : "bg-[#D9D9D9] border border-[#2F2F2F]"
            }`}
      >
        {services[key] && (
          <svg
            className="w-4 h-4 text-[#FAF9F6]"
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
      <div>
        <span className="font-[700] font-sansation sm:text-[18px] text-[16px] text-charcoal leading-[20px]">
          {label}
        </span>
        <p className="font-[400] font-sansation sm:text-[15px] text-[14px] text-charcoal leading-[20px] mt-1">
          {label}
        </p>
      </div>
    </label>
  );

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-xl p-3 shadow-xl h-[70vh] overflow-auto relative">
        <div className="flex items-center gap-5">
          <IoMdCloseCircleOutline
            className="cursor-pointer text-2xl text-[#000000]"
            onClick={onClose}
          />
          <h2 className="sm:text-[25px] text-[20px] font-[600] text-center text-charcoal font-rasa leading-tight ">
            Send Waiver
          </h2>
        </div>

        <div className="space-y-4 mt-3">
          <p className="sm:text-[20px] text-[15px] font-[400] text-charcoal font-sansation leading-[20px]">
            Please select or build a waiver for the client to sign.
          </p>
          <h3 className="sm:text-[22px] text-[17px] font-[700] text-charcoal font-sansation leading-[20px] mb-3">
            TEMPLATES
          </h3>
          <div className="space-y-2 mb-4">
            {templates.map((template) => (
              <label
                key={template.id}
                className="bg-[#FFFFFF] flex flex-col border border-[#2F2F2F] rounded-[10px] p-3 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  {renderCheckbox(
                    template.title,
                    template.description,
                    "undoHair"
                  )}
                </div>
              </label>
            ))}
          </div>
          <h3 className="sm:text-[20px] text-[17px] font-[700] text-charcoal font-sansation leading-[20px] mb-2">
            CUSTOM WAIVER
          </h3>
          <p className="sm:text-[18px] text-[16px] font-[400] text-charcoal font-sansation leading-[20px] mb-2">
            Waiver Text
          </p>
          <textarea
            value={customWaiver}
            onChange={(e) => setCustomWaiver(e.target.value)}
            placeholder="Waiver Text"
            className="w-full border border-[#2F2F2F] rounded-[10px] p-2 text-sm"
            rows={4}
          ></textarea>
        </div>

        <div className="flex items-center justify-center gap-3 mt-5">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={onClose}
          >
            Send to client
          </button>
        </div>
      </div>
    </div>
  );
};

const ViewDetailsWaiverModal = ({
  isOpen,
  onClose,
  handleOpenWaiverConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50"></div>
      <div className="fixed top-0 left-0 md:left-[260px] w-full md:w-[calc(100%-260px)] h-full flex items-center justify-center z-60">
        <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-xl p-3 shadow-xl h-[70vh] overflow-auto relative">
          <div className="flex items-center gap-2">
            <IoClose
              className="cursor-pointer text-2xl text-[#000000]"
              onClick={onClose}
            />
            <h2 className="sm:text-[25px] text-[20px] font-[600] text-center text-charcoal font-rasa leading-tight">
              View Details
            </h2>
          </div>

          <div className="space-y-4 mt-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="sm:text-[25px] text-[18px] font-[700] text-charcoal font-rasa leading-[20px] mb-1">
                  Dominique R.
                </p>
                <p className="sm:text-[20px] text-[15px] font-[700] text-charcoal font-rasa leading-[20px] mb-1">
                  Curly Hair Styling
                </p>
                <p className="sm:text-[20px] text-[15px] font-[400] text-charcoal font-rasa leading-[20px]">
                  July 21, 2024 &nbsp; 1:00 PM - 2:30 PM
                </p>
              </div>
              <span className="text-sm px-4.5 py-1 rounded-[10px] bg-[#EDEDED] sm:text-[18px] text-[15px] font-[700] text-charcoal text-center font-sansation">
                Active
              </span>
            </div>
            <div className="border-t border-b border-[#2F2F2F] py-4">
              <p className="sm:text-[25px] text-[18px] font-[700] text-charcoal font-rasa leading-[20px] mb-2">
                Pre-Appointment Form
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaCircle color="#FFCC4E" />
                  <p className="sm:text-[20px] text-[15px] font-[400] text-charcoal font-rasa leading-[20px]">
                    Awaiting Response
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="border border-[#2F2F2F] bg-[#FAF9F6] text-sm px-4.5 py-1 rounded-[10px]  sm:text-[18px] text-[15px] font-[700] text-charcoal text-center font-sansation">
                    Nudge
                  </div>
                  <div className="border border-[#2F2F2F] bg-[#FAF9F6] text-sm px-4.5 py-1 rounded-[10px] sm:text-[18px] text-[15px] font-[700] text-charcoal text-center font-sansation">
                    Resend
                  </div>
                </div>
              </div>
            </div>
            {/* Waiver Forms */}
            <div>
              <h3 className="sm:text-[25px] text-[18px] font-[700] text-charcoal font-rasa leading-[20px] mb-2">
                Waiver Forms
              </h3>

              <div className="space-y-2">
                {/* Mode Release */}
                <div>
                  <p className="sm:text-[20px] text-[15px] font-[700] text-charcoal font-rasa leading-[20px] mb-3">
                    1. Mode Release
                    <span className="sm:text-[18px] text-[15px] float-right">
                      Signed
                    </span>
                  </p>
                  <p className="sm:text-[20px] text-[15px] font-[400] text-charcoal font-rasa leading-[20px]">
                    Sent July 20, 2024
                  </p>
                </div>

                {/* Photo Release */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="sm:text-[20px] text-[15px] font-[700] text-charcoal font-rasa leading-[20px] mb-3">
                      2. Photo Release
                    </p>
                    <p className="sm:text-[20px] text-[15px] font-[400] text-charcoal font-rasa leading-[20px]">
                      Sent July 18, 2024
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <div className="border border-[#2F2F2F] bg-[#FAF9F6] text-sm px-4.5 py-1 rounded-[10px]  sm:text-[18px] text-[15px] font-[700] text-charcoal text-center font-sansation">
                        Resend
                      </div>
                      <div className="border border-[#2F2F2F] bg-[#FAF9F6] text-sm px-4.5 py-1 rounded-[10px] sm:text-[18px] text-[15px] font-[700] text-charcoal text-center font-sansation">
                        Cancel
                      </div>
                    </div>
                    <p className="sm:text-[14px] text-[10px] font-[700] text-charcoal font-rasa leading-[20px] text-end">
                      Awaiting signature
                    </p>
                  </div>
                </div>

                {/* General Liability */}
                <div>
                  <p className="sm:text-[20px] text-[15px] font-[700] text-charcoal font-rasa leading-[20px] mb-3">
                    3. General Liability
                    <span className="sm:text-[18px] text-[15px] float-right">
                      Sent
                    </span>
                  </p>
                  <p className="sm:text-[20px] text-[15px] font-[400] text-charcoal font-rasa leading-[20px]">
                    Sent July 10, 2024
                  </p>
                </div>
              </div>

              {/* Attachments */}
              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <h4 className="sm:text-[20px] text-[15px] font-[400] text-charcoal font-rasa leading-[20px] mb-1">
                    Attachments
                  </h4>
                  <div
                    onClick={handleOpenWaiverConfirm}
                    className="cursor-pointer border border-[#2F2F2F] bg-[#FAF9F6] text-sm px-4.5 py-1 rounded-[10px]  sm:text-[18px] text-[15px] font-[700] text-charcoal text-center font-sansation"
                  >
                    +Send New Waiver
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[134px] h-[60px] rounded-[10px]">
                    <img
                      src={img35}
                      alt="Inspiration"
                      className="w-full h-full object-cover rounded-[10px]"
                    />
                  </div>
                  <span className="sm:text-[20px] text-[15px] font-[400] text-charcoal font-rasa leading-[20px]">
                    Inspiration Photo
                  </span>
                </div>
              </div>
            </div>

            {/* Provider Notes */}
            <div className="border border-[#2F2F2F] rounded-[10px] bg-[#FFFFFF] px-2 py-2">
              <h6 className="block sm:text-[20px] text-[15px] font-[700] text-charcoal font-rasa leading-[20px] mb-1">
                Provider Notes
              </h6>
              <p className="sm:text-[20px] text-[15px] font-[400] text-charcoal font-rasa leading-[20px]">
                Add notes about this client or appointment. Visible only to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NotificationOffercanceledModal = ({
  isOpen,
  onClose,
  handleOpenSelectTargetModal,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50"></div>
      <div
        className="fixed top-0 left-0 md:left-[260px] w-full md:w-[calc(100%-260px)] h-full flex items-center justify-center z-60"
        onClick={onClose}
      >
        <div className="bg-[#FAF9F6] rounded-[20px] w-full max-w-sm sm:max-w-2xl shadow-xl  relative">
          <div className="flex items-center justify-between border-b border-[#2F2F2F] p-3">
            <h2 className="sm:text-[20px] text-[15px] font-[500] text-charcoal font-rasa">
              Your custom offer has been canceled.
            </h2>
            <IoClose
              className="cursor-pointer text-2xl text-[#2F2F2F]"
              onClick={onClose}
            />
          </div>

          <div className="p-3">
            <p className="sm:text-[18px] text-[15px] font-[500] text-charcoal font-rasa">
              Your custom style request was declined, but you can repost it to
              the Basket so other stylists can see and respond.
            </p>
            <h6 className="sm:text-[18px] text-[15px] font-[700] text-charcoal font-rasa">
              Try again now!
            </h6>
            <div className="flex  items-center justify-center gap-3 mt-4 mb-2">
              <button
                className="w-full bg-[#97E7EC] text-[#123E41] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
                onClick={handleOpenSelectTargetModal}
              >
                Post as a project
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NotificationPaymentReceiveddModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navigate = useNavigate();

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50"></div>
      <div
        className="fixed top-0 left-0 md:left-[260px] w-full md:w-[calc(100%-260px)] h-full flex items-center justify-center z-60"
        onClick={onClose}
      >
        <div className="bg-[#FAF9F6] rounded-[20px] w-full max-w-sm sm:max-w-2xl shadow-xl  relative">
          <div className="flex items-center justify-between border-b border-[#2F2F2F] p-3">
            <h2 className="sm:text-[20px] text-[15px] font-[500] text-charcoal font-rasa">
              Payment Received – Appointment Confirmed
            </h2>
            <IoClose
              className="cursor-pointer text-2xl text-[#2F2F2F]"
              onClick={onClose}
            />
          </div>

          <div className="p-3">
            <p className="sm:text-[18px] text-[15px] font-[500] text-charcoal font-rasa">
              The payment for your appointment has been successfully completed
              by ....(enter name of family member or friend)Your appointment is
              now confirmed! We look forward to seeing you soon. You can view or
              manage your appointment details in your account.
            </p>
            <div className="flex  items-center justify-center gap-3 mt-4 mb-2">
              <button
                className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
                onClick={() =>
                  navigate("/dashboard/appointments/current-bookings")
                }
              >
                View Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NotificationRequestedtoPayModal = ({
  isOpen,
  onClose,
  handleOpenPaymentModal,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50"></div>
      <div
        className="fixed top-0 left-0 md:left-[260px] w-full md:w-[calc(100%-260px)] h-full flex items-center justify-center z-60"
        onClick={onClose}
      >
        <div className="bg-[#FAF9F6] rounded-[20px] w-full max-w-sm sm:max-w-2xl shadow-xl  relative">
          <div className="flex items-center justify-between border-b border-[#2F2F2F] p-3">
            <h2 className="sm:text-[20px] text-[15px] font-[500] text-charcoal font-rasa">
              You’ve Been Requested to Pay for a Loved One’s Appointment.
            </h2>
            <IoClose
              className="cursor-pointer text-2xl text-[#2F2F2F]"
              onClick={onClose}
            />
          </div>

          <div className="p-3">
            <p className="sm:text-[18px] text-[15px] font-[500] text-charcoal font-rasa mb-4">
              Wilson George has booked a service on Latrice and selected you to
              complete the payment on their behalf.
            </p>
            <h6 className="sm:text-[18px] text-[15px] font-[700] text-charcoal font-rasa mb-2">
              Service: Gent's Standard
            </h6>
            <h6 className="sm:text-[18px] text-[15px] font-[700] text-charcoal font-rasa mb-2">
              Provider: Omar Vaccaro Barber Shop
            </h6>
            <h6 className="sm:text-[18px] text-[15px] font-[700] text-charcoal font-rasa mb-2">
              Date & Time: February, Wednesday 26, 2025 at 10:30 AM
            </h6>
            <h6 className="sm:text-[18px] text-[15px] font-[700] text-charcoal font-rasa mb-2">
              Total Amount: $44.00
            </h6>
            <p className="sm:text-[18px] text-[15px] font-[500] text-charcoal font-rasa">
              Please complete the payment to confirm their appointment. The
              booking will remain on hold until payment is received.
            </p>
            <div className="flex  items-center justify-center gap-3 mt-4 mb-2">
              <button
                className="w-full bg-[#97E7EC] text-[#123E41] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
                onClick={onClose}
              >
                Deny Request
              </button>
              <button
                className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
                onClick={handleOpenPaymentModal}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NotificationPaymentRequestDeniedModal = ({
  isOpen,
  onClose,
  handleOpenPaymentModal,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50"></div>
      <div
        className="fixed top-0 left-0 md:left-[260px] w-full md:w-[calc(100%-260px)] h-full flex items-center justify-center z-60"
        onClick={onClose}
      >
        <div className="bg-[#FAF9F6] rounded-[20px] w-full max-w-sm sm:max-w-2xl shadow-xl  relative">
          <div className="flex items-center justify-between border-b border-[#2F2F2F] p-3">
            <h2 className="sm:text-[20px] text-[15px] font-[500] text-charcoal font-rasa">
              Payment Request Denied
            </h2>
            <IoClose
              className="cursor-pointer text-2xl text-[#2F2F2F]"
              onClick={onClose}
            />
          </div>

          <div className="p-3">
            <p className="sm:text-[18px] text-[15px] font-[500] text-charcoal font-rasa mb-4">
              Unfortunately, ....(enter family or friend name)has declined to
              pay for your upcoming appointment.
            </p>
            <h6 className="sm:text-[18px] text-[15px] font-[700] text-charcoal font-rasa mb-2">
              Appointment Status: On Hold
            </h6>
            <p className="sm:text-[18px] text-[15px] font-[500] text-charcoal font-rasa">
              To move forward, please choose how you'd like to proceed:
            </p>
            <div className="flex  items-center justify-center gap-3 mt-4 mb-2">
              <button
                className="w-full bg-[#97E7EC] text-[#123E41] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
                onClick={onClose}
              >
                Cancel Appointment
              </button>
              <button
                className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
                onClick={handleOpenPaymentModal}
              >
                Change Payment Method
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AddSelectTargetNotificationModal = ({
  isOpen,
  onClose,
  handleOpenSuccessModal,
}) => {
  if (!isOpen) return null;
  const [selectedOption, setSelectedOption] = useState("");

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

  const [value2, setValue2] = useState(null);

  const options = [
    {
      label: "Independent",
      icon: (
        <FaUser
          size={30}
          color={selectedOption === "Independent" ? "#F67067" : "#2F2F2F"}
        />
      ),
    },
    {
      label: "Salon",
      icon: (
        <FaBagShopping
          size={30}
          color={selectedOption === "Salon" ? "#F67067" : "#2F2F2F"}
        />
      ),
    },
    {
      label: "Both",
      icon: (
        <PiStarFill
          size={30}
          color={selectedOption === "Both" ? "#F67067" : "#2F2F2F"}
        />
      ),
    },
  ];

  const renderCheckbox = (label, key, Icon) => (
    <label className="flex items-center justify-between" key={key}>
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

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50"></div>
      <div className="fixed top-0 left-0 md:left-[260px] w-full md:w-[calc(100%-260px)] h-full flex items-center justify-center z-60 ">
        <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl  ">
          <div className="flex items-center justify-between">
            <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
              Select Target
            </h2>
            <IoMdCloseCircleOutline
              onClick={onClose}
              color="#2F2F2F"
              size={25}
              className="cursor-pointer"
            />
          </div>

          <form
            className="space-y-4 h-[70vh] overflow-auto modal2 pb-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-secondary flex items-center gap-1 mb-2">
                Select Target <RiInformationFill />
              </label>
              <div className="flex items-center gap-2 sm:gap-4">
                {options.map((option) => (
                  <div
                    key={option.label}
                    className={`bg-[#FAF9F6] w-full flex flex-col items-center justify-center gap-2 sm:h-[150px] h-fit p-3 sm:p-0 rounded-[10px] cursor-pointer border-4 relative ${
                      selectedOption === option.label
                        ? "border-[#FF827F]"
                        : "border-[#2F2F2F66]"
                    }`}
                    onClick={() => setSelectedOption(option.label)}
                  >
                    {option.icon}
                    <h6
                      className={`font-sansation font-[700] sm:text-[20px] text-[15px] ${
                        selectedOption === option.label
                          ? "text-[#F67067]"
                          : "text-charcoal"
                      }`}
                    >
                      {option.label}
                    </h6>
                    {selectedOption === option.label && (
                      <div className="absolute top-2 right-4">
                        <IoIosRadioButtonOn color="#FF827F" size={20} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-secondary flex items-center gap-1 mb-2">
                Special event? <RiInformationFill />
              </label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-1 cursor-pointer">
                  <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                    Yes
                  </span>
                  <span className="relative w-4 h-4">
                    <input
                      type="radio"
                      name="yesno2"
                      className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                      checked={value2 === true}
                      onChange={() => setValue2(true)}
                    />
                    <span
                      className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                        value2 === true
                          ? "border-[#F67067]"
                          : "border-[#2F2F2F]"
                      } border`}
                    ></span>
                  </span>
                </label>

                <label className="flex items-center gap-1 cursor-pointer">
                  <span className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                    No
                  </span>
                  <span className="relative w-4 h-4">
                    <input
                      type="radio"
                      name="yesno2"
                      className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                      checked={value2 === false}
                      onChange={() => setValue2(false)}
                    />
                    <span
                      className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${
                        value2 === false
                          ? "border-[#F67067]"
                          : "border-[#2F2F2F]"
                      } border`}
                    ></span>
                  </span>
                </label>
              </div>
            </div>
            {value2 && (
              <div>
                <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal">
                  Enter your price
                </label>
                <div className="flex items-center rounded px-3 py-2 border border-[#2F2F2F] relative">
                  <input
                    type="text"
                    className="flex-grow outline-none text-[#2F2F2F80]"
                    placeholder="$0.00"
                  />
                  <span className="px-3 py-2 bg-[#2F2F2F] text-[#FAF9F6] absolute right-0">
                    $
                  </span>
                </div>
              </div>
            )}
            <div>
              <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal flex gap-1 items-center">
                Add Tip
                <RiInformationFill className="text-[#FF827F] text-lg" />
              </label>
              <div className="flex items-center rounded px-3 py-2 border border-[#2F2F2F] relative">
                <input
                  type="text"
                  className="flex-grow outline-none text-[#2F2F2F80]"
                  placeholder="$0.00"
                />
                <span className="px-3 py-2 bg-[#2F2F2F] text-[#FAF9F6] absolute right-0">
                  $
                </span>
              </div>
            </div>
            <div>
              <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-1">
                Select Any That Apply
              </label>
              <div className="flex flex-col space-y-3">
                {renderCheckbox("Kid Service", "undoHair", PiPuzzlePieceBold)}
                {renderCheckbox("Kid-Friendly", "washHair", TbMoodKid)}
                {renderCheckbox(
                  "Wheelchair Accessible",
                  "blowDryHair",
                  PiWheelchairDuotone
                )}
                {renderCheckbox("Not Application", "notapplication", MdBlock)}
              </div>
            </div>
          </form>

          <div className="flex  items-center justify-end gap-3 mt-4 mb-2">
            <button
              className=" bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-10 py-2 rounded-full shadow-[0px_4px_4px_0px_#00000040]"
              onClick={handleOpenSuccessModal}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const NotificationMakepayment = ({
  isOpen,
  onClose,
  handleOpenPaymentSuccessModal,
}) => {
  if (!isOpen) return null;

  const [selected, setSelected] = useState("Credit/Debit Cards");
  const paymentOptions = ["Credit/Debit Cards", "NFC", "PayPal", "Wallets"];

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50"></div>
      <div className="fixed top-0 left-0 md:left-[260px] w-full md:w-[calc(100%-260px)] h-full flex items-center justify-center z-60  ">
        <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md p-3 shadow-xl">
          {/* hearder  */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
                Make payment
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-rasa text-[#121111] font-[600] sm:text-[18px] text-[15px]">
                03:00
              </span>
              <MdOutlineAccessAlarms className="text-[#2F2F2F]" size={24} />
              <IoMdCloseCircleOutline
                className="cursor-pointer text-xl text-[#000000]"
                onClick={onClose}
              />
            </div>
          </div>
          {/* main */}
          <div className="mt-5">
            <div className="text-center mb-5">
              <h6 className="font-rasa font-[600] sm:text-[30px] text-[20px] text-charcoal">
                February, Wednesday 26 2025
              </h6>
              <p className="font-rasa font-[400] sm:text-[30px] text-[20px] text-charcoal m-0">
                10:30 AM
              </p>
              <span className="font-rasa font-[600] sm:text-[12px] text-[10px] text-[#757575] m-0">
                Omar Vaccaro Barber Shop
              </span>
              <div className="flex items-center justify-center">
                <span className="font-[500] text-[#121111]  sm:text-[18px] text-[15px]">
                  Total:
                </span>
                <span className="font-[700] text-[#121111]  sm:text-[30px] text-[25px] m-0">
                  $44.00
                </span>
              </div>
            </div>

            <div>
              <h6 className="font-rasa text-charcoal font-[600] sm:text-[30px] text-[25] text-center mb-2">
                Your Payment Options
              </h6>
              <div className="w-full max-w-2xl mx-auto">
                {/* Tabs */}
                <div className="flex items-center justify-between mb-3">
                  {paymentOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => setSelected(option)}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <div
                        className={`w-[28px] h-[28px] rounded-full
                                        ${
                                          selected === option
                                            ? "bg-[#34A853]"
                                            : "bg-[#D9D9D9]"
                                        }`}
                      ></div>
                      <p className="sm:text-[17px] text-[15px] text-[#121111] font-[500]">
                        {option}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Conditional Fields */}
                {selected === "Credit/Debit Cards" && (
                  <div className="space-y-2">
                    <div>
                      <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                        Card Number
                      </label>
                      <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center">
                        <input
                          type="text"
                          placeholder="1234 1234 1234 1234"
                          className="outline-none border-none flex-1"
                        />
                        <div className="flex items-center space-x-2">
                          <img src={img5} alt="Visa" className="h-8" />
                          <img src={img6} alt="Discover" className="h-8" />
                          <img src={img7} alt="Amex" className="h-8" />
                          <img src={img8} alt="Mastercard" className="h-8" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-1">
                      <div>
                        <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                          Expiration Date
                        </label>
                        <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center">
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="outline-none border-none flex-1"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                          Security Code
                        </label>
                        <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center">
                          <input
                            type="text"
                            placeholder="CVC"
                            className="outline-none border-none flex-1"
                          />
                          <div className="">
                            <img src={img9} alt="Visa" className="h-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                        Country
                      </label>
                      <select
                        name=""
                        id=""
                        className="w-full border border-[#2F2F2F] px-3 py-2 rounded outline-none"
                      >
                        <option value="">United States Of America</option>
                      </select>
                    </div>
                  </div>
                )}

                {selected === "NFC" && (
                  <div className="space-y-3">
                    <div>
                      <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                        Google Pay
                      </label>
                      <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center gap-1">
                        <div className="flex items-center space-x-2">
                          <img src={img10} alt="Visa" className="h-8" />
                        </div>
                        <input
                          type="text"
                          placeholder="Bank name*****123"
                          className="outline-none border-none flex-1"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-semibold">Amazon Pay</label>
                      <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center gap-1">
                        <div className="flex items-center space-x-2">
                          <img src={img11} alt="Visa" className="h-8" />
                        </div>
                        <input
                          type="text"
                          placeholder="Bank name*****123"
                          className="outline-none border-none flex-1"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-semibold">Apple Pay</label>
                      <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center gap-1">
                        <div className="flex items-center space-x-2">
                          <img src={img12} alt="Visa" className="h-8" />
                        </div>
                        <input
                          type="text"
                          placeholder="Bank name*****123"
                          className="outline-none border-none flex-1"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {selected === "PayPal" && (
                  <div>
                    <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                      PayPal
                    </label>
                    <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center gap-1">
                      <div className="flex items-center space-x-2">
                        <img src={img13} alt="Visa" className="h-8" />
                      </div>
                      <input
                        type="text"
                        placeholder="Bank name*****123"
                        className="outline-none border-none flex-1"
                      />
                    </div>
                  </div>
                )}

                {selected === "Wallets" && (
                  <div className="mt-2">
                    <h6 className="font-sansation font-[700] sm:text-[20px] text-[18px] text-charcoal mb-2">
                      Your wallet balance is $500.00
                    </h6>
                    <p className="font-sansation font-[400] sm:text-[12px] text-[10px] text-[#757575]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>

          <div className="mt-3 flex justify-center">
            <button
              className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-3 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
              onClick={handleOpenPaymentSuccessModal}
            >
              Pay
            </button>
          </div>
          <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-center mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </>
  );
};

const NotificationMakepaymentSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50"></div>
      <div
        className="fixed top-0 left-0 md:left-[260px] w-full md:w-[calc(100%-260px)] h-full flex items-center justify-center z-60"
        onClick={onClose}
      >
        <div className="bg-white w-full max-w-sm sm:max-w-xl p-3 shadow-xl overflow-y-auto h-130 ">
          <div className="flex items-center flex-col justify-center">
            <img src={img3} alt="" className="w-[200px] h-[200px]" />
            <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
              Appointment Confirmed
            </h6>
            <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal text-center">
              10:30 AM
            </h6>
            <p className="font-rasa font-[500]sm:text-[20px] text-[18px] text-charcoal text-center">
              You’re done! We’ll send you a text reminder within 5 to 10
              minutes.
            </p>
          </div>

          {/* Next Button */}
          <div className="mt-20 flex justify-center">
            <button
              className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const ChatOfferAcceptSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50"></div>
      <div
        className="fixed top-0 left-0 md:left-[260px] w-full md:w-[calc(100%-260px)] h-full flex items-center justify-center z-60"
        onClick={onClose}
      >
        <div className="bg-white w-full max-w-sm sm:max-w-xl p-3 shadow-xl h-[70vh] overflow-y-auto  rounded-[10px] ">
          <div className="flex items-center flex-col justify-center">
            <img src={img3} alt="" className="w-[200px] h-[200px]" />
            <h6 className="font-rasa font-[600] sm:text-[25px] text-[25px] text-charcoal text-center">
              You successfully accepted the offer given by the provider. Your
              appointment section updated soon.
            </h6>
            <p className="font-rasa font-[500]sm:text-[18px] text-[18px] text-charcoal text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
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
    </>
  );
};

const ChatCounterPriceOfferModal = ({ isOpen, onClose, handleShowSend }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50"></div>
      <div className="fixed top-0 left-0 md:left-[260px] w-full md:w-[calc(100%-260px)] h-full flex items-center justify-center z-60">
        <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-xl p-3 shadow-xl h-[30vh] overflow-auto relative">
          <div className="space-y-4 mt-3">
            <div>
              <label className="block font-rasa font-[600] sm:text-[24px] text-[20px] text-charcoal mb-1">
                Enter your preferred price
              </label>
              <div className="border border-[#2F2F2F80] rounded-[10px] bg-[#FAF9F6] px-2 flex items-center h-[50px]">
                <FaDollarSign color="#014F86" />
                <input
                  type="text"
                  placeholder="Type your offer"
                  className="outline-none border-none flex-1 placeholder:text-[#014F8680]"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
              <button
                className="w-full bg-[#97E7EC] text-[#123E41] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
                onClick={handleShowSend}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ChatCounterTimeOfferModal = ({ isOpen, onClose, handleShowSend }) => {
  if (!isOpen) return null;

  const SERVICE_OPTIONS = [
    { key: "undoHair", label: "Undo hair ($45, +1hr)", price: 45, time: 60 },
    { key: "washHair", label: "Wash hair ($20, +20mins)", price: 20, time: 20 },
    {
      key: "blowDryHair",
      label: "Blow dry hair ($15, +20mins)",
      price: 15,
      time: 20,
    },
  ];
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [services, setServices] = useState({});

  const basePrice = 40;
  const baseTime = 30;

  const totalPrice =
    basePrice +
    SERVICE_OPTIONS.reduce(
      (sum, item) => (services[item.key] ? sum + item.price : sum),
      0
    );
  const totalTime =
    baseTime +
    SERVICE_OPTIONS.reduce(
      (sum, item) => (services[item.key] ? sum + item.time : sum),
      0
    );

  const formatTime = (mins) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h > 0 ? `${h}hr` : ""}${m > 0 ? ` ${m}min` : ""}`.trim();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50"></div>
      <div className="fixed top-0 left-0 md:left-[260px] w-full md:w-[calc(100%-260px)] h-full flex items-center justify-center z-60">
        <div className="bg-white rounded-[10px] w-full sm:max-w-2xl max-w-md relative p-3 shadow-xl h-[60vh] overflow-auto">
          <div className="">
            <label className="block font-rasa font-[600] sm:text-[24px] text-[20px] text-charcoal mb-1">
              Enter your preferred date & time
            </label>
          </div>
          <div className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <ChooseDatePicker
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
              />
            </div>
            <div>
              <TimeSlotSelector />
            </div>
            <div>
              <TimePicker1
                selectedTime={selectedTime}
                onSelectTime={setSelectedTime}
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-3 mt-5">
            <button
              className="w-full bg-[#97E7EC] text-[#123E41] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
              onClick={handleShowSend}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const ChatCounterOfferSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50"></div>
      <div
        className="fixed top-0 left-0 md:left-[260px] w-full md:w-[calc(100%-260px)] h-full flex items-center justify-center z-60"
        onClick={onClose}
      >
        <div className="bg-white w-full max-w-sm sm:max-w-xl p-3 shadow-xl h-[70vh] overflow-y-auto  rounded-[10px] ">
          <div className="flex items-center flex-col justify-center">
            <img src={img3} alt="" className="w-[200px] h-[200px]" />
            <h6 className="font-rasa font-[600] sm:text-[25px] text-[25px] text-charcoal text-center">
              Your counteroffer successfully send to the provider.
            </h6>
            <p className="font-rasa font-[500]sm:text-[18px] text-[18px] text-charcoal text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
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
    </>
  );
};

const ChatRejectOfferSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50"></div>
      <div
        className="fixed top-0 left-0 md:left-[260px] w-full md:w-[calc(100%-260px)] h-full flex items-center justify-center z-60"
        onClick={onClose}
      >
        <div className="bg-white w-full max-w-sm sm:max-w-xl p-3 shadow-xl h-[70vh] overflow-y-auto  rounded-[10px] ">
          <div className="flex items-center flex-col justify-center">
            <img src={img3} alt="" className="w-[200px] h-[200px]" />
            <h6 className="font-rasa font-[600] sm:text-[25px] text-[25px] text-charcoal text-center">
              You Successfully Rejected This offer. You Got Your Full Refund
              Very Soon.
            </h6>
            <p className="font-rasa font-[500]sm:text-[18px] text-[18px] text-charcoal text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
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
    </>
  );
};

const AppointmentDeclineConfirmModal = ({
  isOpen,
  onClose,
  handleOpenNewdate1,
  handleopenCanceledsuccessmodal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[20px] w-full sm:max-w-xl max-w-md relative p-3 shadow-xl">
        <div className="modal2 text-center p-3">
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal  mt-5">
            Are you sure you want to decline the new
            <br /> appointment date & time?
          </h6>
        </div>
        {/* Next Button */}
        <div className="mt-4 flex justify-center gap-3 mb-2">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#6cc8cf] transition"
            onClick={handleopenCanceledsuccessmodal}
          >
            Cancel Appointment
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={handleOpenNewdate1}
          >
            Select New Date
          </button>
        </div>
      </div>
    </div>
  );
};

const DeactivateMemberConfirmModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[20px] w-full sm:max-w-xl max-w-md relative p-3 shadow-xl">
        <div className="modal2 text-center p-3">
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal  mt-5">
            Are you sure you want to <br /> deactivate Audrey Smith?
          </h6>
        </div>
        {/* Next Button */}
        <div className="mt-4 flex justify-center gap-3 mb-2">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#6cc8cf] transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const PaymentRequestConfirmModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[20px] w-full sm:max-w-xl max-w-md relative p-3 shadow-xl">
        <div className="modal2 text-center p-3">
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal  mt-5">
            Are you sure you want to cancel <br /> this payment request?
          </h6>
        </div>
        {/* Next Button */}
        <div className="mt-4 flex justify-center gap-3 mb-2">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#6cc8cf] transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
const DeclineRequestConfirmModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[20px] w-full sm:max-w-xl max-w-md relative p-3 shadow-xl">
        <div className="modal2 text-center p-3">
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal  mt-5">
            Are you sure you want to decline <br /> this request?
          </h6>
        </div>
        {/* Next Button */}
        <div className="mt-4 flex justify-center gap-3 mb-2">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#6cc8cf] transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const AcceptRequestConfirmModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[20px] w-full sm:max-w-xl max-w-md relative p-3 shadow-xl">
        <div className="modal2 text-center p-3">
          <h6 className="font-rasa font-[600] sm:text-[30px] text-[25px] text-charcoal  mt-5">
            Are you sure you want to Accept <br /> this request?
          </h6>
        </div>
        {/* Next Button */}
        <div className="mt-4 flex justify-center gap-3 mb-2">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#6cc8cf] transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold sm:text-[20px] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={onClose}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export {
  ChangePasswordModal,
  AddAddressModal,
  PostAProject,
  AddServiceModal,
  AddServiceDetailsModal,
  AddDateTimeModal,
  AddSelectTargetModal,
  AddValidationModal,
  AddSuccessModal,
  SelectServiceModal,
  AddBeneficiaryDetails,
  AddGiftCardDateandTime,
  ReviewandConfirm,
  Makepayment,
  AddPaymenSuccessModal,
  AddaMember,
  BookingDetailsModal,
  ChangeBookingDateTimeMOdal,
  ReviewandConfirmForReshedule,
  ExtraMakepayment,
  ReshedulePaymenSuccessModal,
  PastBookingDetailsModal,
  PastBookingReviewModal,
  PastBookingReviewSuccessModal,
  ClaimBookingModal,
  ClaimBookingSuccessModal,
  BasketViewDetailModal,
  BasketEditDetailModal,
  BasketViewOffersModal,
  DuplicateConfirmModal,
  DeleteConfirmModal,
  DeleteNotConfirmModal,
  AddCardModal,
  DeclineConfirmModal,
  DeclineSuccessModal,
  NotificationDetailsModal,
  LicenseVerificationModal,
  AddBusinessInformationModal,
  AddTaxpayerIdentificationModal,
  AddUploadRequirementsModal,
  AddIDVerificationsModal,
  AddSuccessVerificationModal,
  ShowQRModal,
  AddNewPolicyModal,
  AddStaff,
  AddManager,
  BussinessChangeBookingDateTimeMOdal,
  BussinessResheduleSuccessModal,
  BussinessPastBookingDetailsModal,
  AddSolonProfileImageModal,
  AddSolonePlaceModal,
  AddSoloneAmenitiesModal,
  AddSoloneYourCategoriesModal,
  AddSoloneSuccessfullyModal,
  IndependentPostAProject,
  IndependentBookingDetailsModal,
  CheckAvailabilityBookingModal,
  IndependentAcceptSuccessModal,
  IndependentHiringDetailsModal,
  SalonDetailsSelectServiceModal,
  SalonDetailsDateandTime,
  SalonDetailsPaymenSuccessModal,
  RequestFormModal,
  RequestFormSuccessModal,
  ImageShowModal,
  LogOrCreateAccountModal,
  FullyBookedWarningModal,
  FullyBookedRequestFormModal,
  FullyBookedRequestFormSuccesModal,
  CloseBussinessModal,
  DeleteBussinessAccountModal,
  DeleteBussinessAccountSuccesModal,
  DeleteManagerModal,
  CancelThisbookingModal,
  AddbreaksModal,
  DeleteUserAccountModal,
  AppointmentCanceledSuccessModal,
  AcceptedNewAppoitmentDateSuccessModal,
  CalendarModal,
  TimeModal,
  SalonsLinstModal,
  CreatedNewAppointmentSuccessModal,
  BookingCalendarModal,
  WaitingBookingFormModal,
  WithdrawConfirmModal,
  CancelConfirmModal,
  RepostConfirmModal,
  DeleteConfirmModal1,
  CreateNewConfirmModal,
  BussinessVerificationAppointmentwModal,
  PreAppointmentFormModal,
  SendWaiverConfirmModal,
  SendWaiverModal,
  ViewDetailsWaiverModal,
  NotificationOffercanceledModal,
  NotificationPaymentReceiveddModal,
  NotificationRequestedtoPayModal,
  NotificationPaymentRequestDeniedModal,
  AddSelectTargetNotificationModal,
  NotificationMakepayment,
  NotificationMakepaymentSuccessModal,
  ChatOfferAcceptSuccessModal,
  ChatCounterPriceOfferModal,
  ChatCounterTimeOfferModal,
  ChatCounterOfferSuccessModal,
  ChatRejectOfferSuccessModal,
  AppointmentDeclineConfirmModal,
  DeactivateMemberConfirmModal,
  PaymentRequestConfirmModal,
  DeclineRequestConfirmModal,
  AcceptRequestConfirmModal,
};
