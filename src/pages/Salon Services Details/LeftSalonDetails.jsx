import { useEffect, useState } from "react";
import {
  SalonDetailsSelectServiceModal,
  SalonDetailsPaymenSuccessModal,
  RequestFormModal,
  RequestFormSuccessModal,
  LogOrCreateAccountModal,
  BookingCalendarModal,
  WaitingBookingFormModal,
} from "../../components/Modals/Modal";
import ClientReviews from "../Business owner Dashboard/Reviews/ClientReviews";
import YourReviews from "../Business owner Dashboard/Reviews/YourReviews";

import img1 from "../../assets/images/dashboard/img9.jpg";
import img2 from "../../assets/images/dashboard/img10.jpg";
import img3 from "../../assets/images/dashboard/img11.jpg";

import { IoIosStarOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import { PiWheelchairDuotone } from "react-icons/pi";
import { PiPuzzlePieceBold } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { MakePaymentModal } from "../../components/Modals/MakePaymentModal";
import { FinalizeYourAppointment } from "../../components/Modals/FinalizeYourAppointment";

const LeftSalonDetails = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [isModalOpen3, setModalOpen3] = useState(false);
  const [isModalOpen4, setModalOpen4] = useState(false);
  const [isModalOpen5, setModalOpen5] = useState(false);
  const [isModalOpen6, setModalOpen6] = useState(false);
  const [isModalOpen7, setModalOpen7] = useState(false);
  const [isModalOpen8, setModalOpen8] = useState(false);

  const [user, setUser] = useState(null);
  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  const services = [
    {
      title: "Gent’s Standard",
      booked: 1,
      price: 57,
      duration: "30 min",
      description:
        "Professional consultation, haircut, hot lather neck shave, shampoo and conditioner",
      rating: "5.0",
      reviews: "252",
      img: [{ img: img3 }],
    },
    {
      title: "The Executive",
      booked: 2,
      price: 72,
      duration: "45 min",
      description:
        "Professional consultation, haircut, hot lather Neck Shave, shampoo and conditioner, Scalp massage, etc.",
      rating: "5.0",
      reviews: "64",
      img: [{ img: img1 }, { img: img2 }],
    },
  ];

  const services1 = [
    {
      title: "30 Min Massage",
      price: 50,
      duration: "30 min",
    },
    {
      title: "All Over Color",
      price: 0,
      description: "Give your color a full reset with all over color change.",
      duration: "2 hr 0 min",
    },
    {
      title: "Beard oil",
      price: 39,
      duration: "45 min",
    },
  ];

  const [activeTab, setActiveTab] = useState("Client Reviews");

  const handleopenfirst = () => {
    setModalOpen(false);
    setModalOpen1(true);
  };

  const handleopengofirst = () => {
    setModalOpen1(false);
    setModalOpen(true);
  };

  const handleopenSecondmodal = () => {
    setModalOpen1(false);
    setModalOpen2(true);
  };
  const handleopenthirdmodal = () => {
    setModalOpen2(false);
    setModalOpen3(true);
  };
  const handleopentforthmodal = () => {
    setModalOpen3(false);
    setModalOpen4(true);
  };
  const handleopensuccessmodal = () => {
    setModalOpen5(false);
    setModalOpen6(true);
  };

  const handlebacksecondmodal = () => {
    setModalOpen2(false);
    setModalOpen1(true);
  };

  const handlebackthirdmodal = () => {
    setModalOpen3(false);
    setModalOpen2(true);
  };

  const handleopenloginmodal = () => {
    setModalOpen1(false);
    setModalOpen5(false);
    setModalOpen7(true);
  };
  const handlebackloginmodal = () => {
    setModalOpen7(false);
    setModalOpen1(true);
  };

  const handleopenwaiting = () => {
    setModalOpen1(false);
    setModalOpen8(true);
  };

  const renderCheckbox = (label, key, Icon) => (
    <div className="flex items-center gap-2 bg-[#123E41] rounded-[10px] p-[10px]">
      {Icon && <Icon size={20} color="#FAF9F6" />}
      <span className="font-[600] font-sansation sm:text-[15px] text-[15px] text-[#FAF9F6]">
        {label}
      </span>
    </div>
  );

  return (
    <>
      <SalonDetailsSelectServiceModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        services={[
          {
            title: "Gent’s Standard",
            booked: 1,
            price: 57,
            duration: "30 min",
            description:
              "Professional consultation, haircut, hot lather neck shave, shampoo and conditioner",
            rating: "5.0",
            reviews: "252",
            img: [{ img: img3 }],
          },
          {
            title: "The Executive",
            booked: 2,
            price: 72,
            duration: "45 min",
            description:
              "Professional consultation, haircut, hot lather Neck Shave, shampoo and conditioner, Scalp massage, etc.",
            rating: "5.0",
            reviews: "64",
            img: [{ img: img1 }, { img: img2 }],
          },
          {
            title: "Gent’s Standard",
            booked: 1,
            price: 57,
            duration: "30 min",
            description:
              "Professional consultation, haircut, hot lather neck shave, shampoo and conditioner",
            rating: "5.0",
            reviews: "252",
            img: [{ img: img3 }],
          },
          {
            title: "The Executive",
            booked: 2,
            price: 72,
            duration: "45 min",
            description:
              "Professional consultation, haircut, hot lather Neck Shave, shampoo and conditioner, Scalp massage, etc.",
            rating: "5.0",
            reviews: "64",
            img: [{ img: img1 }, { img: img2 }],
          },
        ]}
        handleopenfirst={handleopenfirst}
      />
      <BookingCalendarModal
        isOpen={isModalOpen1}
        onClose={() => setModalOpen1(false)}
        handleopengofirst={handleopengofirst}
        handleopenSecondmodal={
          user ? handleopenSecondmodal : handleopenloginmodal
        }
        handleopenwaiting={user ? handleopenwaiting : handleopenloginmodal}
      />
      <FinalizeYourAppointment
        isOpen={isModalOpen2}
        onClose={() => setModalOpen2(false)}
        handleContinue={handleopenthirdmodal}
        handleBack={handlebacksecondmodal}
      />

      <MakePaymentModal
        isOpen={isModalOpen3}
        onClose={() => setModalOpen3(false)}
        onPay={handleopentforthmodal}
        handleBack={handlebackthirdmodal}
        showFamilyAndFriends
      />
      <SalonDetailsPaymenSuccessModal
        isOpen={isModalOpen4}
        onClose={() => setModalOpen4(false)}
      />
      <RequestFormModal
        isOpen={isModalOpen5}
        onClose={() => setModalOpen5(false)}
        handleopensuccessmodal={
          user ? handleopensuccessmodal : handleopenloginmodal
        }
      />
      <RequestFormSuccessModal
        isOpen={isModalOpen6}
        onClose={() => setModalOpen6(false)}
      />
      <LogOrCreateAccountModal
        isOpen={isModalOpen7}
        onClose={() => setModalOpen7(false)}
        handlebackloginmodal={handlebackloginmodal}
      />

      <WaitingBookingFormModal
        isOpen={isModalOpen8}
        onClose={() => setModalOpen8(false)}
        handlebackloginmodal={handlebackloginmodal}
      />

      <div className="">
        <div className="flex items-center justify-center gap-3 mb-5">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] font-sansation sm:text-[20px] text-[15px] px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={() => setModalOpen(true)}
          >
            Book Now
          </button>
          <button
            className="w-full bg-[#D9D9D9] text-[#2F2F2F] font-[700] font-sansation sm:text-[20px] text-[15px] px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={() => setModalOpen5(true)}
          >
            Set Custom Booking
          </button>
        </div>
        <div className="flex items-center justify-between mb-5">
          <h6 className="text-charcoal font-rasa sm:text-[30px] text-[20px] font-[600]">
            Top Services
          </h6>
          <div className="bg-[#FAF9F6] border border-[#2F2F2F33] h-[40px] rounded-[10px] flex items-center px-2 w-[60%]">
            <input
              type="search"
              placeholder="Search for a service.. "
              className="flex-1 outline-none"
            />
            <IoMdSearch />
          </div>
        </div>
        <div className="bg-[#FAF9F6] shadow-[0px_0px_4px_0px_#00000040] rounded-[10px] px-3 py-2 mb-5">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2"
            >
              <div className="flex items-center justify-between">
                <div className="w-[60%]">
                  <h3 className="font-[700] text-[14px] font-gotu text-[#121111] mb-1">
                    {service.title}
                  </h3>
                  <div className="text-[11.63px] text-[#494948] font-inter font-[400] mb-2">
                    #{service.booked} booked • ${service.price} •{" "}
                    {service.duration}
                  </div>
                  <p className="text-[12px] text-[#494948] font-inter font-[400] mb-2">
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
                  className="text-[#FFFFFF] text-[12px] px-3.5 py-2.5 rounded-[4px] bg-charocal font-[700]"
                  onClick={() => setModalOpen1(true)}
                >
                  Set Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-2 mb-5">
          <h2 className="font-rasa font-[600] text-[30px] text-charcoal">
            Services
          </h2>
          <div className="bg-[#FAF9F6] shadow-[0px_0px_4px_0px_#00000040] rounded-[10px] px-3 py-2">
            {services1.map((service, idx) => (
              <div
                key={idx}
                className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2"
              >
                <div className="flex items-center justify-between">
                  <div className="w-[60%]">
                    <h3 className="font-[700] text-[14px] font-gotu text-[#121111] mb-1.5">
                      {service.title}
                    </h3>
                    <div className="text-[11.63px] text-[#494948] font-inter font-[400] mb-2 flex items-center gap-5">
                      ${service.price}
                      <p>{service.duration}</p>
                    </div>
                    <p className="text-[12px] text-[#494948] font-inter font-[400] mb-2">
                      {service.description}
                    </p>
                  </div>
                  <button className="text-[#FFFFFF] text-[12px] px-3.5 py-2.5 rounded-[4px] bg-charocal font-[700]">
                    Set Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 justify-end font-rasa font-[700] text-[14px] text-[#121111] cursor-pointer">
            View All
            <IoIosArrowDown />
          </div>
        </div>
        <div className="space-y-2 mb-5">
          <h2 className="font-rasa font-[600] text-[30px] text-charcoal">
            Haircuts
          </h2>
          <div className="bg-[#FAF9F6] shadow-[0px_0px_4px_0px_#00000040] rounded-[10px] px-3 py-2">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2"
              >
                <div className="flex items-center justify-between">
                  <div className="w-[60%]">
                    <h3 className="font-[700] text-[14px] font-gotu text-[#121111] mb-1">
                      {service.title}
                    </h3>
                    <div className="text-[11.63px] text-[#494948] font-inter font-[400] mb-2">
                      #{service.booked} booked • ${service.price} •{" "}
                      {service.duration}
                    </div>
                    <p className="text-[12px] text-[#494948] font-inter font-[400] mb-2">
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
                  <button className="text-[#FFFFFF] text-[12px] px-3.5 py-2.5 rounded-[4px] bg-charocal font-[700]">
                    Set Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 justify-end font-rasa font-[700] text-[14px] text-[#121111] cursor-pointer">
            View All
            <IoIosArrowDown />
          </div>
        </div>
        <div className="space-y-2 mb-5">
          <h2 className="font-rasa font-[600] text-[30px] text-charcoal">
            Beard Care
          </h2>
          <div className="bg-[#FAF9F6] shadow-[0px_0px_4px_0px_#00000040] rounded-[10px] px-3 py-2">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2"
              >
                <div className="flex items-center justify-between">
                  <div className="w-[60%]">
                    <h3 className="font-[700] text-[14px] font-gotu text-[#121111] mb-1">
                      {service.title}
                    </h3>
                    <div className="text-[11.63px] text-[#494948] font-inter font-[400] mb-2">
                      #{service.booked} booked • ${service.price} •{" "}
                      {service.duration}
                    </div>
                    <p className="text-[12px] text-[#494948] font-inter font-[400] mb-2">
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
                  <button className="text-[#FFFFFF] text-[12px] px-3.5 py-2.5 rounded-[4px] bg-charocal font-[700]">
                    Set Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 justify-end font-rasa font-[700] text-[14px] text-[#121111] cursor-pointer">
            View All
            <IoIosArrowDown />
          </div>
        </div>

        <div className="space-y-2 mb-5">
          <h2 className="font-rasa font-[600] text-[30px] text-charcoal">
            Specialty Services
          </h2>
          <div className="bg-[#FAF9F6] shadow-[0px_0px_4px_0px_#00000040] rounded-[10px] px-3 py-2">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="border border-[#2F2F2F33] rounded-[10px] p-2 mb-2"
              >
                <div className="flex items-center justify-between">
                  <div className="w-[60%]">
                    <h3 className="font-[700] text-[14px] font-gotu text-[#121111] mb-1">
                      {service.title}
                    </h3>
                    <div className="text-[11.63px] text-[#494948] font-inter font-[400] mb-2">
                      #{service.booked} booked • ${service.price} •{" "}
                      {service.duration}
                    </div>
                    <p className="text-[12px] text-[#494948] font-inter font-[400] mb-2">
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
                  <button className="text-[#FFFFFF] text-[12px] px-3.5 py-2.5 rounded-[4px] bg-charocal font-[700]">
                    Set Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 justify-end font-rasa font-[700] text-[14px] text-[#121111] cursor-pointer">
            View All
            <IoIosArrowDown />
          </div>
        </div>
        <div className="space-y-1 mb-5">
          <h2 className="font-rasa font-[600] text-[30px] text-charcoal">
            Amenities
          </h2>
          <div className="bg-[#FAF9F6] shadow-[0px_0px_4px_0px_#00000040] rounded-[10px] px-3 py-2">
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 bg-[#FFFFFF] rounded-[10px] border border-[#2F2F2F33] px-3 py-2">
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
                "Child-Friendly",
                "Child-Friendly",
                PiPuzzlePieceBold
              )}
              {renderCheckbox(
                "Accessible For People With Disabilities",
                "notapplication",
                PiWheelchairDuotone
              )}
            </div>
          </div>
        </div>
        <div className="space-y-2 mb-5">
          <h2 className="font-rasa font-[600] text-[30px] text-charcoal">
            Ratings & Reviews
          </h2>
          <div className="bg-[#FAF9F6] shadow-[0px_0px_4px_0px_#00000040] rounded-[10px] px-3 py-2">
            <div className="">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`px-8 py-2 sm:text-[20px] text-[15px] font-[600] font-rasa rounded-[10px] flex items-center justify-center  cursor-pointer  ${
                    activeTab === "Client Reviews"
                      ? "bg-[#123E41] text-[#FAF9F6] border border-[#FAF9F6]"
                      : " text-[#2F2F2F]"
                  }`}
                  onClick={() => setActiveTab("Client Reviews")}
                >
                  Client Reviews
                </div>
                {/* <div
                  className={`px-8 py-2  sm:text-[20px] text-[15px] font-[500] font-rasa rounded-[10px] flex items-center justify-center cursor-pointer  ${activeTab === 'Your Reviews' ? 'bg-[#123E41] text-[#FAF9F6] border border-[#FAF9F6]' : 'text-[#2F2F2F]'
                    }`}
                  onClick={() => setActiveTab('Your Reviews')}
                >

                  Your Reviews
                </div> */}
              </div>

              {activeTab === "Client Reviews" ? (
                <ClientReviews />
              ) : (
                <YourReviews />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSalonDetails;
