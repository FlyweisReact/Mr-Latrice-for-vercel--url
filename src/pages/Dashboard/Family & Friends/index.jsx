import React from "react";
import { useState } from "react";
import {
  AddaMember,
  DeactivateMemberConfirmModal,
  DeclineRequestConfirmModal,
  NotificationMakepayment,
  NotificationMakepaymentSuccessModal,
  PaymentRequestConfirmModal,
  AcceptRequestConfirmModal,
} from "../../../components/Modals/Modal";
import img from "../../../assets/images/dashboard/img4.png";
import FamilyCards from "./FamilyCards";
import ClientDashboardLayout from "../../../components/DashbaordLayout/Client Dashbaord";
import { MemberDetailsModal } from "../../../components/Modals/MemberDetailsModal";

const data = {
  connectedMembers: [
    {
      id: 1,
      name: "Audrey Smith",
      status: "remaining",
      timeRemaining: "27:45",
      service: "Hair Service",
      paymentStatus: "Pending Payment",
      btn1: "Change Payment Method",
      btn2: "Cancel Payment Request",
    },
    {
      id: 2,
      name: "Audrey Smith",
      status: "remaining",
      timeRemaining: "27:45",
      service: "Hair Service",
      paymentStatus: "Pending Payment",
      btn1: "Pay Now",
      btn2: "Decline Request",
    },
    {
      id: 3,
      name: "Audrey Smith",
      status: "Connected",
      timeRemaining: "",
      service: "",
      paymentStatus: "",
    },
  ],
  pendingInvitations: [
    {
      id: 1,
      name: "Danial Brown",
      status: "Invited by you",
      timeRemaining: "",
      service: "",
    },
    {
      id: 2,
      name: "Christina Davis",
      status: "Invited by you",
      timeRemaining: "",
      service: "",
    },
    {
      id: 3,
      name: "Nicole White",
      status: "Invited you to pay her hair service",
      timeRemaining: "27:45",
      service: "Hair Service",
    },
  ],
};

const FamilyandFriends = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [isModalOpen3, setModalOpen3] = useState(false);
  const [isModalOpen4, setModalOpen4] = useState(false);
  const [isModalOpen5, setModalOpen5] = useState(false);
  const [isModalOpen6, setModalOpen6] = useState(false);
  const [isfamilycard, setFamilyCard] = useState(false);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);

  const handleshowfamilycard = () => {
    setModalOpen(false);
    setFamilyCard(true);
  };

  const handleOpenMakePaymentSuccesModal = () => {
    setModalOpen2(false);
    setModalOpen3(true);
  };

  return (
    <ClientDashboardLayout
      title="Family & Friends"
      headerAction={
        isfamilycard && (
          <button
            className="bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-6 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
            onClick={() => setModalOpen(true)}
          >
            Add Members
          </button>
        )
      }
    >
      <AddaMember
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        handleshowfamilycard={handleshowfamilycard}
      />
      <DeactivateMemberConfirmModal
        isOpen={isModalOpen1}
        onClose={() => setModalOpen1(false)}
      />
      <NotificationMakepayment
        isOpen={isModalOpen2}
        onClose={() => setModalOpen2(false)}
        handleOpenPaymentSuccessModal={handleOpenMakePaymentSuccesModal}
      />

      <NotificationMakepaymentSuccessModal
        isOpen={isModalOpen3}
        onClose={() => setModalOpen3(false)}
      />

      <PaymentRequestConfirmModal
        isOpen={isModalOpen4}
        onClose={() => setModalOpen4(false)}
      />
      <DeclineRequestConfirmModal
        isOpen={isModalOpen5}
        onClose={() => setModalOpen5(false)}
      />
      <AcceptRequestConfirmModal
        isOpen={isModalOpen6}
        onClose={() => setModalOpen6(false)}
      />
      <MemberDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setDetailsModalOpen(false)}
      />
      {isfamilycard ? (
        <>
          <div className="mt-2">
            <h6 className="sm:text-[30px] text-2xl font-[600] text-charcoal font-rasa whitespace-nowrap">
              Connected Members
            </h6>
            <div className="grid grid-cols-2 gap-5 mt-2">
              {data.connectedMembers.map((member) => (
                <FamilyCards
                  key={member.id}
                  data={member}
                  showmodal={() => {
                    setDetailsModalOpen(true);
                  }}
                  showmodal1={() => setModalOpen1(true)}
                  showmodal2={() => setModalOpen2(true)}
                  showmodal4={() => setModalOpen4(true)}
                  showmodal5={() => setModalOpen5(true)}
                />
              ))}
            </div>
          </div>

          <div className="mt-5">
            <h6 className="sm:text-[30px] text-2xl font-[600] text-charcoal font-rasa whitespace-nowrap">
              Pending Invitations
            </h6>
            <p className="sm:text-[20px] text-[15px] font-[600] text-charcoal font-rasa whitespace-nowrap">
              All connected members must have Latrice account.
            </p>
            <div className="grid grid-cols-2 gap-5 mt-2">
              {data.pendingInvitations.map((invitation) => (
                <FamilyCards
                  key={invitation.id}
                  data={invitation}
                  isPending
                  showmodal={() => setModalOpen(true)}
                  showmodal5={() => setModalOpen5(true)}
                  showmodal6={() => setModalOpen6(true)}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center text-center px-4 py-6">
          <div className="mb-4">
            <img
              src={img}
              alt="Barber tools illustration"
              className="w-full max-w-xs mx-auto"
            />
          </div>
          <h6 className="font-[500] text-[40px] text-charcoal font-rasa">
            Add Your Family & Friends
          </h6>
          <p className="text-charcoal sm:text-[20px] text-[15px] font-[500] leading-relaxed max-w-md font-rasa">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="mt-6 flex justify-center">
            <button
              className="bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-4 py-3 sm:w-[400px] rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
              onClick={() => setModalOpen(true)}
            >
              Add Members
            </button>
          </div>
        </div>
      )}
    </ClientDashboardLayout>
  );
};

export default FamilyandFriends;
