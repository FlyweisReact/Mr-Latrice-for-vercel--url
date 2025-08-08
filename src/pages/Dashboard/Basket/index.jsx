import { useState } from "react";
import { CgNotes } from "react-icons/cg";
import { IoMdInformationCircle } from "react-icons/io";
import { TbCopy } from "react-icons/tb";


import img from '../../../assets/images/dashboard/img7.jpg'
import img1 from '../../../assets/images/dashboard/img29.png'
import img2 from '../../../assets/images/dashboard/img31.jpg'
import img3 from '../../../assets/images/dashboard/img32.jpg'
import { AddDateTimeModal, AddSelectTargetModal, AddServiceDetailsModal, AddServiceModal, AddSuccessModal, AddValidationModal, BasketEditDetailModal, BasketViewDetailModal, BasketViewOffersModal, CancelConfirmModal, CreateNewConfirmModal, DeclineConfirmModal, DeclineSuccessModal, DeleteConfirmModal, DeleteConfirmModal1, DeleteNotConfirmModal, DuplicateConfirmModal, PostAProject, RepostConfirmModal, WithdrawConfirmModal } from "../../../components/Modals/Modal";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosInformationCircle } from "react-icons/io";
import ClientDashboardLayout from "../../../components/DashbaordLayout/Client Dashbaord";






export default function Basket() {
  const [activeTab, setActiveTab] = useState('Pending');
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [isModalOpen3, setModalOpen3] = useState(false);
  const [isModalOpen4, setModalOpen4] = useState(false);
  const [isModalOpen5, setModalOpen5] = useState(false);
  const [isModalOpen6, setModalOpen6] = useState(false);
  const [isModalOpen8, setModalOpen8] = useState(false);
  const [isModalOpen9, setModalOpen9] = useState(false);
  const [isModalOpen10, setModalOpen10] = useState(false);
  const [isModalOpen11, setModalOpen11] = useState(false);
  const [isModalOpen12, setModalOpen12] = useState(false);
  const [isModalOpen13, setModalOpen13] = useState(false);
  const [isModalOpen14, setModalOpen14] = useState(false);
  const [isModalOpen15, setModalOpen15] = useState(false);
  const [isModalOpen16, setModalOpen16] = useState(false);
  const [isModalOpen17, setModalOpen17] = useState(false);
  const [isModalOpen18, setModalOpen18] = useState(false);
  const [isModalOpen19, setModalOpen19] = useState(false);
  const [isModalOpen20, setModalOpen20] = useState(false);
  const [isduplicate, setIsDuplicate] = useState(true);

  const navigate = useNavigate();

  const handleopenedit = () => {
    setModalOpen20(false)
    setModalOpen5(true)
  }

  const Pendingdata = [
    {
      "id": 1,
      "tip": 5,
      "providerResponse": "No provider response yet",
      "date": "Apr 5, 2025",
      "time": "10:30 AM",
      "service": "Senegalese Twist",
      "price": 80,
      "statusMessage": "Expires in: 45 min",
      "distance": "2.3 miles",
      "imageUrl": img,
      actions: [
        { label: "Edit", onClick: () => setModalOpen5(true) },
        { label: "Withdraw", onClick: () => setModalOpen16(true) },
        { label: "View Details", onClick: () => setModalOpen9(true) }
      ]

    },
    {
      "id": 2,
      "tip": 5,
      "providerResponse": "3 provider responded",
      "date": "Apr 5, 2025",
      "time": "10:30 AM",
      "service": "Senegalese Twist",
      "price": 80,
      "statusMessage": "Conform Provider: 12 min left",
      "distance": "2.3 miles",
      "imageUrl": img,
      actions: [
        { label: "View Offer(s)", onClick: () => setModalOpen10(true) },
        { label: "Withdraw", onClick: () => setModalOpen16(true) },
        { label: "View Details", onClick: () => setModalOpen9(true) }
      ]
    }
  ]
  const Accepteddata = [
    {
      "id": 1,
      "tip": 5,
      "status": "Accepted",
      "providerResponse": "Provider: Emily Styles",
      "date": "Apr 5, 2025",
      "fromtime": "10:30 AM",
      "totime": "1:00 PM",
      "service": "Senegalese Twist",
      "price": 80,
      "distance": "2.3 miles",
      "imageUrl": img,

      actions: [
        { label: "Msg Provider", onClick: () => navigate('/dashboard/chat') },
        { label: "Cancel", onClick: () => setModalOpen17(true) },
        { label: "View Appointment", onClick: () => navigate('/dashboard/appointments/current-bookings') }
      ]
    },
  ]
  const ExpiredData = [
    {
      "id": 1,
      "tip": 5,
      "status": "Expired",
      "date": "Apr 5, 2025",
      "fromtime": "10:30 AM",
      "service": "Senegalese Twist",
      "price": 80,
      "statusMessage": "No provider selected in time",
      "distance": "2.3 miles",
      "imageUrl": img,
      actions: [
        { label: "Repost", btnstatus: true, onClick: () => setModalOpen18(true) },
        { label: "Delete", btnstatus: true, onClick: () => setModalOpen19(true) },
        { label: "View Details", btnstatus: true, onClick: () => setModalOpen9(true) }
      ]
    },
    {
      "id": 2,
      "tip": 5,
      "status": "Canceled by Client (On Time)",
      "providerResponse": "Provider: Divine Spa",
      "date": "Apr 5, 2025",
      "fromtime": "10:30 AM",
      "service": "Scalp Massage",
      "price": 60,
      "statusMessage": "Canceled early: Full refund Issued",
      "distance": "2.3 miles",
      "isDisabled": true,
      "imageUrl": img2,
      actions: [
        { label: "View Details", btnstatus: true, onClick: () => setModalOpen9(true) },
        { label: "Delete", btnstatus: true, onClick: () => setModalOpen19(true) },
        { label: "Create New Request", btnstatus: true, onClick: () => setModalOpen20(true) }
      ]
    },
    {
      "id": 3,
      "tip": 5,
      "status": "Canceled by Provider (On Time)",
      "providerResponse": "Provider: Ashley’s Nails",
      "date": "Apr 10, 2025",
      "fromtime": "2:00 PM",
      "service": "Gel Manicure",
      "price": 75,
      "statusMessage": "Canceled early: Full refund Issued",
      "distance": "1.7 miles",
      "isDisabled": true,
      "imageUrl": img3,
      actions: [
        { label: "View Details", btnstatus: true, onClick: () => setModalOpen9(true) },
        { label: "Delete", btnstatus: false, onClick: () => setModalOpen13(true) },
        { label: "Create New Request", btnstatus: true, onClick: () => setModalOpen20(true) }
      ]
    },
  ]


  const handleStapfirst = () => {
    setModalOpen(false)
    setModalOpen1(true)
  }
  const handleBackStapfirst = () => {
    setModalOpen(true)
    setModalOpen1(false)
  }
  const handleStapSecond = () => {
    setModalOpen1(false)
    setModalOpen2(true)
  }
  const handleBackStapsecond = () => {
    setModalOpen1(true)
    setModalOpen2(false)
  }
  const handleStapThird = () => {
    setModalOpen2(false)
    setModalOpen3(true)
  }
  const handleBackStapThird = () => {
    setModalOpen2(true)
    setModalOpen3(false)
  }

  const handleStapForth = () => {
    setModalOpen3(false)
    setModalOpen4(true)
  }

  const handleBackStapForth = () => {
    setModalOpen3(true)
    setModalOpen4(false)
  }
  const handleStapFivth = () => {
    setModalOpen4(false)
    setModalOpen5(true)
  }

  const handleBackStapFivth = () => {
    setModalOpen4(true)
    setModalOpen5(false)
  }
  const handleStapSixed = () => {
    setModalOpen5(false)
    setModalOpen6(true)
  }
  const handleDuplicate = () => {
    setIsDuplicate(false)
    setModalOpen11(false)
  }

  const handleDeceline = () => {
    setModalOpen10(false)
    setModalOpen14(true)
  }
  const handleDecelineSuccess = () => {
    setModalOpen14(false)
    setModalOpen15(true)
  }

  return (
    <ClientDashboardLayout title="Basket"
      gpnumber='6'
      titleAction={
        <div className="flex w-full bg-[#D9D9D9] rounded-[34px] overflow-hidden px-1 py-0.5 max-w-xl">
          <button
            className={`flex-1 px-7 sm:text-[20px] text-[18px] font-[600] font-rasa rounded-[34px] flex gap-1  items-center justify-center  ${activeTab === 'Pending' ? 'bg-white text-[#000000]' : 'text-[#00000080]'
              }`}
            onClick={() => setActiveTab('Pending')}
          >

            Pending
            <IoMdInformationCircle color="#2F2F2F" />
          </button>
          <button
            className={`flex-1 px-7 sm:text-[20px] text-[18px] font-[600] font-rasa rounded-[34px] flex gap-1  items-center justify-center  ${activeTab === 'Accepted' ? 'bg-white text-[#000000]' : 'text-[#00000080]'
              }`}
            onClick={() => setActiveTab('Accepted')}
          >

            Accepted
            <IoMdInformationCircle color="#2F2F2F" />
          </button>
          <button
            className={`flex-1 px-7 sm:text-[20px] text-[18px] font-[600] font-rasa rounded-[34px] flex gap-1 items-center justify-center  ${activeTab === 'Expired' ? 'bg-white text-[#000000]' : 'text-[#00000080]'
              }`}
            onClick={() => setActiveTab('Expired')}
          >

            Expired
            <IoMdInformationCircle color="#2F2F2F" />
          </button>
        </div>
      }
      headerAction={
        <button
          className="bg-secondary sm:text-[20px] text-charcoal px-3.5 py-0.5 rounded-[17px] shadow-[0px_4px_4px_0px_#00000040] font-[600] font-rasa flex items-center gap-1"
          onClick={() => setModalOpen(true)}
        >
          <CgNotes />
          Post A Project
        </button>
      }
    >

      <PostAProject
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        handleStapfirst={handleStapfirst}
      />
      <AddServiceModal
        isOpen={isModalOpen1}
        onClose={() => setModalOpen1(false)}
        handleBackStapfirst={handleBackStapfirst}
        handleStapSecond={handleStapSecond}
      />
      <AddServiceDetailsModal
        isOpen={isModalOpen2}
        onClose={() => setModalOpen2(false)}
        handleStapThird={handleStapThird}
        handleBackStapsecond={handleBackStapsecond}
      />
      <AddDateTimeModal
        isOpen={isModalOpen3}
        onClose={() => setModalOpen3(false)}
        handleStapForth={handleStapForth}
        handleBackStapThird={handleBackStapThird}
      />
      <AddSelectTargetModal
        isOpen={isModalOpen4}
        onClose={() => setModalOpen4(false)}
        handleStapFivth={handleStapFivth}
        handleBackStapForth={handleBackStapForth}
      />
      <AddValidationModal
        isOpen={isModalOpen5}
        onClose={() => setModalOpen5(false)}
        handleStapSixed={handleStapSixed}
        handleBackStapFivth={handleBackStapFivth}
      />
      <AddSuccessModal
        isOpen={isModalOpen6}
        onClose={() => setModalOpen6(false)}
        handleStapSecond={handleStapSecond}
        handleBackStapFivth={handleBackStapFivth}
      />

      <BasketEditDetailModal
        isOpen={isModalOpen8}
        onClose={() => setModalOpen8(false)}
      />
      <BasketViewDetailModal
        isOpen={isModalOpen9}
        onClose={() => setModalOpen9(false)}
      />
      <BasketViewOffersModal
        isOpen={isModalOpen10}
        onClose={() => setModalOpen10(false)}
        handleDeceline={handleDeceline}
      />
      <DuplicateConfirmModal
        isOpen={isModalOpen11}
        onClose={() => setModalOpen11(false)}
        handleDuplicate={handleDuplicate}
      />
      <DeleteConfirmModal
        isOpen={isModalOpen12}
        onClose={() => setModalOpen12(false)}
      />
      <DeleteNotConfirmModal
        isOpen={isModalOpen13}
        onClose={() => setModalOpen13(false)}
      />
      <WithdrawConfirmModal
        isOpen={isModalOpen16}
        onClose={() => setModalOpen16(false)}
      />
      <CancelConfirmModal
        isOpen={isModalOpen17}
        onClose={() => setModalOpen17(false)}
      />
      <RepostConfirmModal
        isOpen={isModalOpen18}
        onClose={() => setModalOpen18(false)}
      />
      <DeleteConfirmModal1
        isOpen={isModalOpen19}
        onClose={() => setModalOpen19(false)}
      />
      <CreateNewConfirmModal
        isOpen={isModalOpen20}
        onClose={() => setModalOpen20(false)}
        handleopenedit={handleopenedit}
      />
      <DeclineConfirmModal
        isOpen={isModalOpen14}
        onClose={() => setModalOpen14(false)}
        handleDecelineSuccess={handleDecelineSuccess}
      />
      <DeclineSuccessModal
        isOpen={isModalOpen15}
        onClose={() => setModalOpen15(false)}
      />
      <div>
        {activeTab === 'Pending' &&
          <div className="flex flex-wrap gap-5 sm:flex-row flex-col mt-4">
            {Pendingdata.map((i, idx) => (
              <div key={idx} className="max-w-md rounded-[10px] border-4 border-[#FF827F] bg-white">
                {/* Header */}
                {isduplicate ? (
                  <div className="bg-[#D9D9D9] rounded-tl-[7px] rounded-tr-[7px] px-6 py-2 flex gap-0.5 items-center justify-end cursor-pointer" onClick={() => setModalOpen11(true)}>
                    <TbCopy color="#2F2F2F" />
                    <h6 className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal">Duplicate</h6>
                  </div>
                ) : (
                  <div className="bg-[#D9D9D9] rounded-tl-[7px] rounded-tr-[7px] px-6 py-2 flex gap-0.5 items-center justify-end cursor-pointer" onClick={() => setModalOpen12(true)}>
                    <RiDeleteBin6Line color="#2F2F2F" />
                    <h6 className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal">Delete</h6>
                  </div>
                )}

                <div className=" px-4 py-2">
                  {/* Image and Info */}
                  <div className="flex gap-2">
                    <img
                      src={i.imageUrl}
                      alt="Provider"
                      className="max-w-35 rounded-[10px] object-cover"
                    />
                    <div className="flex-1">
                      <h6 className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal text-end">+{i.tip} Tip</h6>
                      <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.providerResponse}</p>
                      <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.date} - {i.time}</p>
                      <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.service}: ${i.price}</p>
                      <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.statusMessage}</p>
                      <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0 flex items-center justify-between">
                        Distance : {i.distance}
                        <img src={img1} alt="" className='w-8 h-3  object-cover' />
                      </p>
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="flex items-center justify-between gap-1 mt-2">
                    {i.actions.map((i, idx) =>
                      <button
                        key={idx}
                        onClick={i.onClick}
                        className="min-w-[110px] bg-secondary text[#000000] font-[600] p-1.5 rounded-[10px] font-rasa sm:text-[18px] text-[12px]">
                        {i.label}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
        {activeTab === 'Accepted' &&
          <div className="flex flex-wrap gap-5 sm:flex-row flex-col mt-4">
            {Accepteddata.map((i, idx) => (
              <div key={idx} className="max-w-md rounded-[10px] border-4 border-[#FF827F] bg-white">
                {/* Header */}
                <div className="bg-[#D9D9D9] rounded-tl-[7px] rounded-tr-[7px] px-6 py-2 flex gap-0.5 items-center justify-end cursor-pointer">
                  <TbCopy color="#2F2F2F" />
                  <h6 className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal">Duplicate</h6>
                </div>

                <div className="px-4 py-2">
                  {/* Image and Info */}
                  <div className="flex gap-2">
                    <img
                      src={i.imageUrl}
                      alt="Provider"
                      className="max-w-35 rounded-[10px] object-cover"
                    />
                    <div className="flex-1">
                      <h6 className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal text-end">+{i.tip} Tip</h6>
                      <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.status}</p>
                      <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.providerResponse}</p>
                      <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.date} - {i.fromtime}-{i.totime}</p>
                      <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.service}: ${i.price}</p>
                      <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0 flex items-center justify-between">
                        Distance : {i.distance}
                        <img src={img1} alt="" className='w-8 h-3  object-cover' />
                      </p>
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="flex items-center justify-between gap-1 mt-2">
                    {i.actions.map((i, idx) =>
                      <button
                        key={idx}
                        onClick={i.onClick}
                        className="min-w-[110px] bg-secondary text[#000000] font-[600] p-1.5 rounded-[10px] font-rasa sm:text-[18px] text-[12px]">
                        {i.label}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
        {activeTab === 'Expired' &&
          <div className="flex flex-wrap gap-5 sm:flex-row flex-col mt-4">
            {ExpiredData.map((i, index) => (
              <div key={index} className={`max-w-md rounded-[10px] border-4 border-[#FF827F] bg-white ${i.isDisabled ? 'opacity-80 ' : 'opacity-100'}`}>
                {/* Header */}
                <div className="bg-[#D9D9D9] rounded-tl-[7px] rounded-tr-[7px] px-6 py-2 flex gap-0.5 items-center justify-end cursor-pointer">
                  <TbCopy color="#2F2F2F" />
                  <h6 className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal">Duplicate</h6>
                </div>

                <div className=" px-4 py-2">
                  {/* Image and Info */}
                  <div className="flex gap-2">
                    <img
                      src={i.imageUrl}
                      alt="Provider"
                      className="max-w-35 rounded-[10px] object-cover"
                    />
                    <div className="flex-1">
                      <h6 className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal text-end">+{i.tip} Tip</h6>
                      <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.status}</p>
                      <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.date} - {i.fromtime}</p>
                      <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.providerResponse}</p>
                      <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.service}: ${i.price}</p>
                      <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.statusMessage}</p>
                      <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0 flex items-center justify-between">
                        Distance : {i.distance}
                        <img src={img1} alt="" className='w-8 h-3  object-cover' />
                      </p>
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="flex items-center justify-between gap-1 mt-2">
                    {i.actions.map((i, idx) =>
                      <button
                        key={idx}
                        onClick={i.onClick}
                        className={`min-w-[110px] text-[#000000] font-[600] p-1.5 rounded-[10px] font-rasa sm:text-[18px] text-[12px] flex items-center justify-center gap-0.5
  ${i.btnstatus ? 'bg-secondary' : 'bg-[#757575] text-[#FFFFFF]'}`}>
                        {i.label}{!i.btnstatus && <IoIosInformationCircle color="#FFFFFF" />}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </ClientDashboardLayout>
  );
}