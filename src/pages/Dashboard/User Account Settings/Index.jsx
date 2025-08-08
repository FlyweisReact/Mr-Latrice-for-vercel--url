import img from "../../../assets/images/dashboard/profileimg.jpg";
import img1 from "../../../assets/images/dashboard/img1.png";

import { RiEditFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { IoIosCopy } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";

import {
  ChangePasswordModal,
  AddAddressModal,
  DeleteUserAccountModal,
  DeleteBussinessAccountSuccesModal,
} from "../../../components/Modals/Modal";
import ClientDashboardLayout from "../../../components/DashbaordLayout/Client Dashbaord";

export default function UserAccountSettingPage() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSOSVisible, setIsSOSVisible] = useState(true);
  const [isOn, setIsOn] = useState(true);
  const options = ["Women", "Men", "Everyone"];
  const [selected, setSelected] = useState("Men");
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [isModalOpen3, setModalOpen3] = useState(false);

  const handleopendeletesuccesmodal = () => {
    setModalOpen2(false);
    setModalOpen3(true);
  };

  return (
    <ClientDashboardLayout
      title="Account Settings"
      headerAction={
        <button
          className="bg-[#FFE6D8] text-[#FF827F] font-bold text-lg px-5 py-2 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
          onClick={() => setModalOpen2(true)}
        >
          Delete Account
        </button>
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
      <DeleteUserAccountModal
        isOpen={isModalOpen2}
        onClose={() => setModalOpen2(false)}
        handleopendeletesuccesmodal={handleopendeletesuccesmodal}
      />
      <DeleteBussinessAccountSuccesModal
        isOpen={isModalOpen3}
        onClose={() => setModalOpen3(false)}
      />
      <div className="accountsetting-container">
        <h6 className="sm:text-[30px] text-[20px] font-[500] text-charcoal  font-rasa mb-2">
          Account Details
        </h6>
        <div className="mb-2">
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
            />
            <button className="text-[#2F2F2F80] text-[20px] font-sansation">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        {/* SOS */}
        {isSOSVisible && (
          <div className="mt-4">
            <button
              onClick={() => setIsFormVisible(!isFormVisible)}
              className="sm:w-[250px] w-full  bg-[#FFE6D8] mb-5 text-secondary font-medium py-2 rounded-[10px] hover:bg-[#FFD6D0] transition duration-300 text-[25px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] font-rasa"
            >
              {isFormVisible ? "- Add A SOS Member" : "+ Add A SOS Member"}
            </button>

            {isFormVisible && (
              <div className="">
                <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-1 text-charcoal">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter here..."
                  className="w-full mb-4 px-3 py-2 border rounded border-[#2F2F2F] outline-none"
                />
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-1 text-charcoal">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter here..."
                      className="w-full mb-4 px-3 py-2 border rounded border-[#2F2F2F] outline-none"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-1 text-charcoal">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter here..."
                      className="w-full mb-4 px-3 py-2 border rounded border-[#2F2F2F] outline-none"
                    />
                  </div>
                </div>
                <button
                  className="mt-4 px-6 py-2 bg-[#144341] text-white rounded-md block mx-auto"
                  onClick={() => setIsSOSVisible(false)}
                >
                  Add
                </button>
              </div>
            )}
          </div>
        )}
        {/* SOS details*/}
        {!isSOSVisible && (
          <div className="mt-4 mb-4">
            <div className="flex items-center justify-between">
              <h6 className="sm:text-[30px] text-[20px] font-[500] text-charcoal font-rasa">
                Your SOS Member Is “Terry Lubin”
              </h6>
              <div className="flex items-center gap-2 cursor-pointer">
                <RiEditFill
                  color="#000000"
                  size={25}
                  onClick={() => setIsSOSVisible(true)}
                />
                <span className="text-sm text-[#2F2F2F99] font-sansation font-[400]">
                  {isOn ? "On" : "Off"}
                </span>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      value={isOn}
                      onChange={(e) => setIsOn(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-[#D9D9D9] peer-checked:bg-[#123E41] rounded-full relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                  </label>
                </label>
              </div>
            </div>
          </div>
        )}
        {/* Gender */}
        <div className="mb-4">
          <label className="block text-[20px] font-bold font-sansation mb-1 text-charcoal">
            Show Me Services For:
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
            <div className="flex items-center gap-5 ">
              <span className="text-[20px] font-bold font-sansation text-charcoal">
                SMS
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
    </ClientDashboardLayout>
  );
}
