


import React, { useState } from "react";
import {
  AcceptMemberModal,
  AddaMember,
  DeactivateMemberModal,
  DeclineMemberModal,
  MakePaymentModal,
  SalonDetailsPaymenSuccessModal,
} from "../../../components/Modals/Modal";
import img from "../../../assets/images/dashboard/img4.png";
import FamilyCards from "./FamilyCards";
import IndependentDashboardLayout from "../../../components/DashbaordLayout/Independent Dashbaord";

const data = {
  connectedMembers: [
    {
      id: 1,
      name: "Audrey Smith",
      status: "Connected",
      timeRemaining: "",
      service: "",
      paymentStatus: "",
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

const BusinessFamilyandFriends = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeactivateModalOpen, setDeactivateModalOpen] = useState(false);
  const [isAcceptModalOpen, setAcceptModalOpen] = useState(false);
  const [isDeclineModalOpen, setDeclineModalOpen] = useState(false);
  const [isMakePaymentModalOpen, setMakePaymentModalOpen] = useState(false);
  const [isPaymentSuccessModalOpen, setPaymentSuccessModalOpen] = useState(false);
  const [isfamilycard, setFamilyCard] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleshowfamilycard = () => {
    setModalOpen(false);
    setFamilyCard(true);
  };

  const handleDeactivateClick = (member) => {
    setSelectedMember(member);
    setDeactivateModalOpen(true);
  };

  const handleAcceptClick = (member) => {
    setSelectedMember(member);
    setAcceptModalOpen(true);
  };

  const handleDeclineClick = (member) => {
    setSelectedMember(member);
    setDeclineModalOpen(true);
  };

  const handleMakePaymentClick = () => {
    setMakePaymentModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    setMakePaymentModalOpen(false);
    setPaymentSuccessModalOpen(true);
  };

  const handleCloseModal = () => {
    setDeactivateModalOpen(false);
    setAcceptModalOpen(false);
    setDeclineModalOpen(false);
    setMakePaymentModalOpen(false);
    setPaymentSuccessModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <IndependentDashboardLayout
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

      {isfamilycard ? (
        <>
          <div className="mt-2">
            <h6 className="sm:text-[40px] text-2xl font-[600] text-charcoal font-rasa whitespace-nowrap">
              Connected Members
            </h6>
            <div className="grid grid-cols-2 gap-5 mt-2">
              {data.connectedMembers.map((member) => (
                <FamilyCards
                  key={member.id}
                  data={member}
                  showmodal={() => setModalOpen(true)}
                  showmodal1={() => handleDeactivateClick(member)}
                  showmodal2={handleMakePaymentClick}
                  showmodal5={() => handleDeclineClick(member)}
                  showmodal6={() => handleAcceptClick(member)}
                />
              ))}
            </div>
          </div>

          <div className="mt-5">
            <h6 className="sm:text-[40px] text-2xl font-[600] text-charcoal font-rasa whitespace-nowrap">
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
                  showmodal5={() => handleDeclineClick(invitation)}
                  showmodal6={() => handleAcceptClick(invitation)}
                  showmodal2={handleMakePaymentClick}
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

      <DeactivateMemberModal
        isOpen={isDeactivateModalOpen}
        onClose={handleCloseModal}
        memberName={selectedMember?.name}
      />
      <AcceptMemberModal
        isOpen={isAcceptModalOpen}
        onClose={handleCloseModal}
        memberName={selectedMember?.name}
      />
      <DeclineMemberModal
        isOpen={isDeclineModalOpen}
        onClose={handleCloseModal}
        memberName={selectedMember?.name}
      />
      <MakePaymentModal
        isOpen={isMakePaymentModalOpen}
        onClose={handleCloseModal}
        onPay={handlePaymentSuccess}
        showFamilyAndFriends={true}
      />
      <SalonDetailsPaymenSuccessModal
        isOpen={isPaymentSuccessModalOpen}
        onClose={handleCloseModal}
        handlshowgiftcard={handleshowfamilycard}
      />
    </IndependentDashboardLayout>
  );
};

export default BusinessFamilyandFriends;