import { useEffect, useState } from "react";
import { IoMdInformationCircle } from "react-icons/io";

import BusinessOwnerDashboardLayout from "../../../components/DashbaordLayout/Business Owner";
import { ClientsFormsCards, PersonalFormsCards } from "./FormsCards";
import {
  PreAppointmentFormModal,
  SendWaiverModal,
  SendWaiverConfirmModal,
  ViewDetailsWaiverModal,
} from "../../../components/Modals/Modal";
import { ViewDetailsPersonalViewModal } from "../../../components/Modals/ViewDetailsPersonalViewModal";

import img from "../../../assets/images/dashboard/img117.png";
import img1 from "../../../assets/images/dashboard/img116.png";
import img2 from "../../../assets/images/dashboard/img118.jpg";
import img3 from "../../../assets/images/dashboard/img119.jpg";
import { WaiverFormModal } from "../../../components/Modals/WaiverFormModal";
import { AppointmentFormModal } from "../../../components/Modals/AppointmentFormModal";

const appointments = [
  {
    id: 1,
    title: "Curly Hair Styling",
    client: "Dominique R.",
    date: "July 21, 2024",
    duration: "1hr 30 mins",
    status: "Active",
  },
  {
    id: 2,
    title: "Hair treatement",
    client: "Dominique R.",
    date: "July 11, 2024",
    duration: "2hrs",
    status: "Completed",
  },
];

const appointments1 = [
  {
    id: 1,
    provider: "Burt Nilson",
    service: "Deep Massage",
    date: "April 4, 2025",
    image: img2,
  },
  {
    id: 2,
    provider: "Advice Sale",
    service: "Silk Press",
    date: "July 9, 2025",
    image: img3,
  },
];

const BusinessCustomerForms = () => {
  const [iscustomercard, setCustimerCard] = useState(false);
  const [activeTab, setActiveTab] = useState("Your Clients");
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [isModalOpen3, setModalOpen3] = useState(false);
  const [isModalOpen4, setModalOpen4] = useState(false);
  const [isModalOpen5, setModalOpen5] = useState(false);
  const [waiverOpen, setWaiverOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCustimerCard(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenWaiver = () => {
    setModalOpen1(false);
    setModalOpen2(true);
  };

  const handleOpenWaiverConfirm = () => {
    setModalOpen3(false);
    setModalOpen1(true);
  };

  const handleOpenAppointmentform = () => {
    setModalOpen4(false);
    setModalOpen5(true);
  };

  const handleOpenWaiverForm = () => {
    setModalOpen(false);
    setWaiverOpen(true);
  };

  return (
    <BusinessOwnerDashboardLayout
      title="Customer Forms"
      gpnumber="2"
      titleAction={
        <div className="flex gap-5">
          <IoMdInformationCircle color="#2F2F2F" size={30} />
        </div>
      }
    >
      <PreAppointmentFormModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
      <SendWaiverConfirmModal
        isOpen={isModalOpen1}
        onClose={() => setModalOpen1(false)}
        handleOpenWaiver={handleOpenWaiver}
      />
      <SendWaiverModal
        isOpen={isModalOpen2}
        onClose={() => setModalOpen2(false)}
      />
      <ViewDetailsWaiverModal
        isOpen={isModalOpen3}
        onClose={() => setModalOpen3(false)}
        handleOpenWaiverForm={handleOpenWaiverForm}
        handleOpenWaiverConfirm={handleOpenWaiverConfirm}
      />
      <ViewDetailsPersonalViewModal
        isOpen={isModalOpen4}
        onClose={() => setModalOpen4(false)}
        handleOpenAppointmentform={handleOpenAppointmentform}
      />
      <WaiverFormModal
        isOpen={waiverOpen}
        onClose={() => setWaiverOpen(false)}
      />
      <AppointmentFormModal
        isOpen={isModalOpen5}
        onClose={() => setModalOpen5(false)}
      />
      <div className="w-full mt-2">
        {/* Tabs */}
        <div className="flex w-full bg-[#D9D9D9] rounded-[80px] overflow-hidden mb-2 p-1 max-w-4xl h-[60px]">
          <button
            className={`flex-1 py-2 sm:text-[30px] text-[20px] font-[500] font-rasa rounded-[80px]  ${
              activeTab === "Your Clients"
                ? "bg-white text-charcoal"
                : "text-[#2F2F2F80]"
            }`}
            onClick={() => setActiveTab("Your Clients")}
          >
            Your Clients
          </button>
          <button
            className={`flex-1 py-2 sm:text-[30px] text-[20px] font-[500] font-rasa rounded-[80px]  ${
              activeTab === "Personal View"
                ? "bg-white text-charcoal"
                : "text-[#2F2F2F80]"
            }`}
            onClick={() => setActiveTab("Personal View")}
          >
            Personal View
          </button>
        </div>
        {activeTab === "Your Clients" ? (
          iscustomercard ? (
            <div className="">
              <h2 className="sm:text-[30px] text-[20px] font-[600] text-charcoal font-rasa">
                Client Name
              </h2>

              <div className="flex flex-wrap gap-4">
                {appointments.map((appt) => (
                  <ClientsFormsCards
                    key={appt.id}
                    data={appt}
                    showmodal={() => setModalOpen(true)}
                    showmodal1={() => setModalOpen1(true)}
                    showmodal3={() => setModalOpen3(true)}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className=" max-w-md border border-[#2F2F2F80] shadow-[0px_4px_4px_0px_#00000040] bg-white rounded-[40px] px-10 py-8 flex flex-col items-center justify-center gap-2">
              <img src={img1} alt="" />
              <h6 className="sm:text-[30px] text-[20px] font-[600] text-charcoal font-rasa">
                No Forms or
                <br /> Waivers Sent Yet
              </h6>
              <p className="sm:text-[18px] text-[15px] font-[500] text-charcoal text-center font-rasa">
                You’ll be able to send pre- appointment forms and and waivers to
                clients once they’ve booked a service with you.
              </p>
              <p className="sm:text-[18px] text-[15px] font-[500] text-charcoal text-center font-rasa">
                Use forms to gather preferences and service related details. Use
                waivers to cover important agreements like liability or media
                consent.
              </p>

              <div className="w-full cursor-pointer mt-5 border-2 border-[#2F2F2F] px-2.5 py-4 rounded-[16px] sm:text-[20px] text-[15px] font-[600] text-charcoal text-center font-rasa underline">
                Heed help? Learn how
              </div>
            </div>
          )
        ) : iscustomercard ? (
          <div className="mt-4">
            <div className="flex flex-wrap gap-4 ">
              {appointments1.map((appt) => (
                <PersonalFormsCards
                  key={appt.id}
                  data={appt}
                  showmodal={() => setModalOpen4(true)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className=" max-w-md border border-[#2F2F2F80] shadow-[0px_4px_4px_0px_#00000040] bg-white rounded-[40px] px-10 py-8 flex flex-col items-center justify-center gap-2">
            <img src={img} alt="" />
            <h6 className="sm:text-[30px] text-[20px] font-[600] text-charcoal font-rasa">
              No Forms or
              <br /> Waivers Sent Yet
            </h6>
            <p className="sm:text-[18px] text-[15px] font-[500] text-charcoal text-center font-rasa">
              When you book services with other professionals on Latrice, any
              required forms or waivers will appear here.
            </p>
            <p className="sm:text-[18px] text-[15px] font-[500] text-charcoal text-center font-rasa">
              You’ll be able to responds to there questions or sing waivers
              before you session.
            </p>

            <div className="w-full cursor-pointer mt-5 border-2 border-[#2F2F2F] px-2.5 py-4 rounded-[16px] sm:text-[20px] text-[15px] font-[600] text-charcoal text-center font-rasa ">
              Browse Professionals
            </div>
          </div>
        )}
      </div>
    </BusinessOwnerDashboardLayout>
  );
};

export default BusinessCustomerForms;
