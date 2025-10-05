import { useEffect, useState } from "react";
import img from "../../../assets/images/dashboard/img26.png";
import ClientDashboardLayout from "../../../components/DashbaordLayout/Client Dashbaord";
import { IoMdInformationCircle } from "react-icons/io";
import FormsCards from "./FormsCards";
import { AppointmentFormModal } from "../../../components/Modals/AppointmentFormModal";
import { ViewDetailsPersonalViewModal } from "../../../components/Modals/ViewDetailsPersonalViewModal";
import { WaiverFormModal } from "../../../components/Modals/WaiverFormModal";

const data = {
  forms: [
    {
      id: 1,
      providerName: "Burt Nilson",
      service: "Deep Massage",
      date: "April 4, 2025",
      status: "Response Sent",
      img: "img36.jpg",
      appointmentFormAnswers: {
        goal: "Relieve muscle tension",
        allergies: "No",
        sensitive: "No",
        washed: "Yes",
        pregnant: "No",
        upload: "inspiration_photo.jpg",
      },
      waiverFormAnswers: {
        consent: "Agreed",
        signature: "Theophile Fomo",
      },
    },
    {
      id: 2,
      providerName: "Audrey Sila",
      service: "Silk Press",
      date: "July 9, 2025",
      status: "Awaiting Your Response",
      img: "img37.jpg",
      appointmentFormAnswers: {},
      waiverFormAnswers: {},
    },
  ],
};

const CustomerForms = () => {
  const [iscustomercard, setCustimerCard] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [waiverOpen, setWaiverOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCustimerCard(true);
    }, 1000);

    // Cleanup when component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleOpenAppointmentform = (form) => {
    setSelectedForm(form);
    if (form.status === "Response Sent") {
      setModalOpen(true); // Open read-only view
    } else {
      setModalOpen1(true); // Open editable appointment form
    }
  };

  const handleOpenWaiverForm = (form) => {
    setSelectedForm(form);
    if (form.status === "Response Sent") {
      setModalOpen(true); // Open read-only view
    } else {
      setWaiverOpen(true); // Open editable waiver form
    }
  };

  return (
    <ClientDashboardLayout
      title="Customer Forms"
      gpnumber="2"
      titleAction={
        <div className="flex gap-5">
          <IoMdInformationCircle color="#2F2F2F" size={30} />
        </div>
      }
    >
      <ViewDetailsPersonalViewModal
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedForm(null);
        }}
        handleOpenAppointmentform={() => handleOpenAppointmentform(selectedForm)}
        handleOpenWaiverForm={() => handleOpenWaiverForm(selectedForm)}
        formData={selectedForm}
        readOnly={selectedForm?.status === "Response Sent"}
      />

      <AppointmentFormModal
        isOpen={isModalOpen1}
        onClose={() => {
          setModalOpen1(false);
          setSelectedForm(null);
        }}
        formData={selectedForm}
      />

      <WaiverFormModal
        isOpen={waiverOpen}
        onClose={() => {
          setWaiverOpen(false);
          setSelectedForm(null);
        }}
        formData={selectedForm}
      />

      {/* <BookingCalendarModal
        isOpen={isModalOpen2}
        onClose={() => setModalOpen2(false)}
        handleopengofirst={handlebackfirst}
        handleopenSecondmodal={handleopenThirdmodal}
        handleopenwaiting={handleopenwaiting}
      /> */}
      {/* <SalonDetailsReviewandConfirm
        isOpen={isModalOpen3}
        onClose={() => setModalOpen3(false)}
        handleopenthirdmodal={handleopenforthmodal}
        handlebacksecondmodal={handlebackthirdmodal}
      /> */}
      {/* <SalonDetailsMakepayment
        isOpen={isModalOpen4}
        onClose={() => setModalOpen4(false)}
        handleopentforthmodal={handleopenfivthhmodal}
        handlebackthirdmodal={handlebackforthmodal}
      /> */}
      {/* <SalonDetailsPaymenSuccessModal
        isOpen={isModalOpen5}
        onClose={() => setModalOpen5(false)}
      /> */}
      {/* <WaitingBookingFormModal
        isOpen={isModalOpen6}
        onClose={() => setModalOpen6(false)}
        // handlebackloginmodal={handlebackloginmodal}
      /> */}
      {iscustomercard ? (
        <div className="grid grid-cols-2 gap-5 mt-2">
          {data.forms.map((form) => (
            <FormsCards
              key={form.id}
              data={form}
              isPending={form.status === "Awaiting Your Response"}
              showmodal={() => {
                setSelectedForm(form);
                setModalOpen(true);
              }}
              handleOpenAppointmentform={() => handleOpenAppointmentform(form)}
              handleOpenWaiverForm={() => handleOpenWaiverForm(form)}
            />
          ))}
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
            You didn’t have any forms yet
          </h6>
          <p className="text-charcoal sm:text-[18px] text-[15px] font-[500] leading-relaxed text-center max-w-lg font-rasa">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      )}
    </ClientDashboardLayout>
  );
};

export default CustomerForms;
