import { useState } from "react";
import IndependentDashboardLayout from "../../../components/DashbaordLayout/Independent Dashbaord";
import { AddDateTimeModal, AddSelectTargetModal, AddServiceDetailsModal, AddServiceModal, AddSuccessModal, AddValidationModal, BasketEditDetailModal, BasketViewDetailModal, BasketViewOffersModal, DeclineConfirmModal, DeclineSuccessModal, DeleteConfirmModal, DeleteNotConfirmModal, DuplicateConfirmModal, IndependentBookingDetailsModal, IndependentPostAProject, CheckAvailabilityBookingModal, IndependentAcceptSuccessModal, IndependentHiringDetailsModal } from "../../../components/Modals/Modal";



import img from '../../../assets/images/dashboard/img42.jpg'
import img1 from '../../../assets/images/dashboard/img29.png'
import img2 from '../../../assets/images/dashboard/img31.jpg'
import img3 from '../../../assets/images/dashboard/img32.jpg'
import img4 from '../../../assets/images/dashboard/img43.jpg'
import img5 from '../../../assets/images/dashboard/img45.jpg'
import img6 from '../../../assets/images/dashboard/img44.jpg'
import img7 from '../../../assets/images/dashboard/img46.jpg'
import img8 from '../../../assets/images/dashboard/img47.jpg'
import img9 from '../../../assets/images/dashboard/img49.jpg'
import img10 from '../../../assets/images/dashboard/img48.jpg'
import img11 from '../../../assets/images/dashboard/img50.jpg'
import img12 from '../../../assets/images/dashboard/img51.jpg'
import img13 from '../../../assets/images/dashboard/img52.jpg'
import img14 from '../../../assets/images/dashboard/img53.jpg'
import img15 from '../../../assets/images/dashboard/img54.jpg'
import img16 from '../../../assets/images/dashboard/img55.jpg'
import img17 from '../../../assets/images/dashboard/img61.jpg'
import img18 from '../../../assets/images/dashboard/img64.jpg'
import img19 from '../../../assets/images/dashboard/img59.jpg'
import img20 from '../../../assets/images/dashboard/img62.jpg'
import img21 from '../../../assets/images/dashboard/img60.jpg'
import img22 from '../../../assets/images/dashboard/img57.jpg'
import img23 from '../../../assets/images/dashboard/img63.jpg'
import img24 from '../../../assets/images/dashboard/img56.jpg'
import img25 from '../../../assets/images/dashboard/img45.jpg'
import img26 from '../../../assets/images/dashboard/img58.jpg'

import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosInformationCircle } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { IoMdInformationCircle } from "react-icons/io";
import { TbCopy } from "react-icons/tb";
import { LuSettings2 } from "react-icons/lu";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { OfferFilters } from "../../../components/Service Filter/ServiceFilter";






export default function IndependentBasket() {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [activeTab1, setActiveTab1] = useState('Hiring Request (s)');
    const [activeTab2, setActiveTab2] = useState('Pending');
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
    const [showOfferFilter, setShowOfferFilter] = useState(false);
    const [isduplicate, setIsDuplicate] = useState(true);

    const navigate = useNavigate();

    const DashboardhiringPendingData = [
        {
            "id": 1,
            "tip": 5,
            "providerResponse": "No provider response yet",
            "date": "Apr 5, 2025",
            "fromtime": "10:30 AM",
            "totime": "1:00 PM",
            "service": "Senegalese Twist",
            "price": 50,
            "Hiring": '¼ of the job',
            "statusMessage": "Expires in: 50 min",
            "distance": "1.8 miles",
            "imageUrl": img,
            actions: [
                { label: "Edit", onClick: () => setModalOpen8(true) },
                { label: "Withdraw" },
                { label: "View Details", onClick: () => setModalOpen9(true) }
            ]

        },
        {
            "id": 2,
            "tip": 5,
            "providerResponse": "3 provider responded",
            "date": "Apr 5, 2025",
            "fromtime": "10:30 AM",
            "totime": "1:00 PM",
            "service": "Senegalese Twist",
            "price": 80,
            "Hiring": '¼ of the job',
            "statusMessage": "Conform Provider: 12 min left",
            "distance": "2.3 miles",
            "imageUrl": img4,
            actions: [
                { label: "View Offer(s)", onClick: () => setModalOpen10(true) },
                { label: "Withdraw" },
                { label: "View Details", onClick: () => setModalOpen9(true) }
            ]
        }
    ]
    const DashboardhiringAcceptedData = [
        {
            "id": 1,
            "tip": 5,
            "status": "Accepted",
            "date": "Apr 6, 2025",
            "fromtime": "9:30 AM",
            "totime": "12:00 PM",
            "Hired": "Ashley M.",
            "service": "Senegalese Twist",
            "price": 50,
            "Hiring": '¼ of the job',
            "distance": "1.8 miles",
            "imageUrl": img5,

            actions: [
                { label: "Msg Provider", onClick: () => navigate('/business-owner/dashboard/chat') },
                { label: "Cancel" },
                { label: "View Appointment", onClick: () => navigate('/business-owner/dashboard/appointments/current-bookings') }
            ]
        },
    ]
    const DashboardhiringExpiredData = [
        {
            "id": 1,
            "tip": 5,
            "status": "Expired",
            "date": "Apr 6, 2025",
            "fromtime": "9:30 AM",
            "totime": "12:00 PM",
            "service": "Senegalese Twist",
            "price": 50,
            "Hiring": '¼ of the job',
            "providerResponse": "No provider selected in time",
            "distance": "2.3 miles",
            "imageUrl": img7,
            actions: [
                { label: "Repost", btnstatus: true, },
                { label: "Delete", btnstatus: true, onClick: () => setModalOpen12(true) },
                { label: "View Details", btnstatus: true, onClick: () => setModalOpen9(true) }
            ]
        },
        {
            "id": 2,
            "tip": 1,
            "status": "Canceled by Client (On Time)",
            "providerResponse": "Provider: Ashley’s Nails",
            "date": "Apr 10, 2025",
            "fromtime": "9:30 AM",
            "totime": "2:00 PM",
            "service": "Gel Manicure",
            "price": 75,
            "statusMessage": "Canceled early: Full refund Issued",
            "distance": "2.3 miles",
            "isDisabled": true,
            "imageUrl": img2,
            actions: [
                { label: "View Details", btnstatus: true, onClick: () => setModalOpen9(true) },
                { label: "Delete", btnstatus: true, onClick: () => setModalOpen12(true) },
                { label: "Create New Request", btnstatus: true, }
            ]
        },
        {
            "id": 3,
            "tip": 1,
            "status": "Canceled by Provider (On Time)",
            "providerResponse": "Provider: Ashley’s Nails",
            "date": "Apr 10, 2025",
            "fromtime": "9:30 AM",
            "totime": "12:00 PM",
            "service": "Gel Manicure",
            "price": 75,
            "statusMessage": "Canceled early: Full refund Issued",
            "distance": "1.7 miles",
            "isDisabled": true,
            "imageUrl": img2,
            actions: [
                { label: "View Details", btnstatus: true, onClick: () => setModalOpen9(true) },
                { label: "Delete", btnstatus: false, onClick: () => setModalOpen13(true) },
                { label: "Create New Request", btnstatus: true, }
            ]
        },
        {
            "id": 4,
            "tip": 1,
            "status": "Late Cancel by Hired Provider",
            "providerResponse": "Provider: Bella Hair Studio",
            "date": "Apr 10, 2025",
            "fromtime": "9:30 AM",
            "totime": "12:00 PM",
            "service": "Silk Press",
            "price": 75,
            "statusMessage": "Canceled early: Full refund Issued",
            "distance": "1.7 miles",
            "isDisabled": true,
            "imageUrl": img6,
            actions: [
                { label: "View Details", btnstatus: true, onClick: () => setModalOpen9(true) },
                { label: "Delete", btnstatus: false, onClick: () => setModalOpen13(true) },
                { label: "Create New Request", btnstatus: true, }
            ]
        },
    ]

    const DashboardpersonalPendingData = [
        {
            "id": 1,
            "tip": 5,
            "providerResponse": "No provider response yet",
            "date": "Apr 7, 2025",
            "fromtime": "4:00 PM",
            "service": "Scalp Massage",
            "price": 60,
            "Hiring": '¼ of the job',
            "statusMessage": "Expires in: 38 min",
            "distance": "1.8 miles",
            "imageUrl": img8,
            actions: [
                { label: "Edit", onClick: () => setModalOpen8(true) },
                { label: "Withdraw" },
                { label: "View Details", onClick: () => setModalOpen9(true) }
            ]

        },
        {
            "id": 2,
            "tip": 5,
            "providerResponse": "3 provider responded",
            "date": "Apr 5, 2025",
            "fromtime": "4:00 PM",
            "service": "Scalp Massage",
            "price": 60,
            "Hiring": '¼ of the job',
            "statusMessage": "Confirm Provider: 13 min left",
            "distance": "1.8 miles",
            "imageUrl": img9,
            actions: [
                { label: "View Offer(s)", onClick: () => setModalOpen10(true) },
                { label: "Withdraw" },
                { label: "View Details", onClick: () => setModalOpen9(true) }
            ]
        }
    ]
    const DashboardpersonalAcceptedData = [
        {
            "id": 1,
            "tip": 5,
            "status": "Accepted",
            "date": "Apr 7, 2025",
            "fromtime": "4:00 PM",
            "Hired": "Ashley M.",
            "service": "Scalp Massage",
            "price": 60,
            "distance": "2.0 miles",
            "imageUrl": img10,

            actions: [
                { label: "Msg Provider", onClick: () => navigate('/business-owner/dashboard/chat') },
                { label: "Cancel" },
                { label: "View Appointment", onClick: () => navigate('/business-owner/dashboard/appointments/current-bookings') }
            ]
        },
    ]
    const DashboardpersonalExpiredData = [
        {
            "id": 1,
            "tip": 5,
            "status": "Expired",
            "date": "Apr 7, 2025",
            "fromtime": "4:00 PM",
            "service": "Scalp Massage",
            "price": 60,
            "statusMessage": "No provider selected in time",
            "distance": "2.3 miles",
            "imageUrl": img11,
            actions: [
                { label: "Repost", btnstatus: true, },
                { label: "Delete", btnstatus: true, onClick: () => setModalOpen12(true) },
                { label: "View Details", btnstatus: true, onClick: () => setModalOpen9(true) }
            ]
        },
        {
            "id": 2,
            "tip": 1,
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
                { label: "Delete", btnstatus: true, onClick: () => setModalOpen12(true) },
                { label: "Create New Request", btnstatus: true, }
            ]
        },
        {
            "id": 3,
            "tip": 1,
            "status": "Canceled by Provider (On Time)",
            "providerResponse": "Provider: Ashley’s Nails",
            "date": "Apr 10, 2025",
            "fromtime": "2:00 AM",
            "service": "Gel Manicure",
            "price": 75,
            "statusMessage": "Canceled early: Full refund Issued",
            "distance": "1.7 miles",
            "isDisabled": true,
            "imageUrl": img3,
            actions: [
                { label: "View Details", btnstatus: true, onClick: () => setModalOpen9(true) },
                { label: "Delete", btnstatus: false, onClick: () => setModalOpen13(true) },
                { label: "Create New Request", btnstatus: true, }
            ]
        },
    ]
    const SelectionStageData = [
        {
            "id": 1,
            "status": "Selection Stage",
            "statusMessage": "Waiting for decision...",
            "date": "Apr 10, 2025",
            "fromtime": "02:00 PM",
            "service": "Silk Press 8 Treatment",
            "price": 90,
            "distance": "1.8",
            "imageUrl": img12,
            actions: [
                { label: "Withdraw Request", btnstatus: true, },
                { label: "View Details", btnstatus: true, onClick: () => setModalOpen9(true) },
            ]
        },
        {
            "id": 2,
            "status": "Selection Stage",
            "statusMessage": "Basket Offer accepted by client",
            "date": "Apr 10, 2025",
            "fromtime": "02:00 PM",
            "service": "Silk Press 8 Treatment",
            "price": 90,
            "distance": "1.8",
            "imageUrl": img14,
            actions: [
                { label: "View Appointment", onClick: () => navigate('/business-owner/dashboard/appointments/current-bookings') },
                { label: "View Details", btnstatus: true, onClick: () => setModalOpen9(true) },
            ]
        },
        {
            "id": 3,
            "status": "Selection Stage",
            "statusMessage": "Basket Offer rejected by client",
            "date": "Apr 10, 2025",
            "fromtime": "02:00 PM",
            "service": "Silk Press 8 Treatment",
            "price": 90,
            "distance": "1.8",
            "imageUrl": img13,
            actions: [
                { label: "Delete", btnstatus: false, onClick: () => setModalOpen12(true) },
                { label: "View Details", btnstatus: true, onClick: () => setModalOpen9(true) },
            ]
        },
        {
            "id": 4,
            "status": "Selection Stage",
            "statusMessage": "Basket Offer expired",
            "date": "Apr 10, 2025",
            "fromtime": "02:00 PM",
            "service": "Silk Press 8 Treatment",
            "price": 90,
            "distance": "1.8",
            "imageUrl": img15,
            actions: [
                { label: "Delete", btnstatus: false, onClick: () => setModalOpen12(true) },
                { label: "View Details", btnstatus: true, onClick: () => setModalOpen9(true) },
            ]
        },
    ]

    const OfferData = [
        {
            "date": "February, Wednesday 26 2025",
            "time": "10:30 AM",
            "price": "$50",
            "service": "Senegalese Twist",
            "distance": "2.3 miles away",
            "tip": "+$5 Tip",
            "image": img16,
            "borderColor": "#FF827F"
        },
        {
            "date": "February, Wednesday 26 2025",
            "time": "10:30 AM",
            "price": "$50",
            "service": "Senegalese Twist",
            "distance": "2.3 miles away",
            "tip": "+$5 Tip",
            "status": "HIRING",
            "image": img17,
            "borderColor": "#123E41"
        },
        {
            "date": "February, Wednesday 26 2025",
            "time": "10:30 AM",
            "price": "$50",
            "service": "Senegalese Twist",
            "distance": "2.3 miles away",
            "image": img18,
            "borderColor": "#FF827F"
        },
        {
            "date": "February, Wednesday 26 2025",
            "time": "10:30 AM",
            "price": "$50",
            "service": "Senegalese Twist",
            "distance": "2.3 miles away",
            "image": img19,
            "borderColor": "#FF827F"
        },
        {
            "date": "February, Wednesday 26 2025",
            "time": "10:30 AM",
            "price": "$50",
            "service": "Senegalese Twist",
            "distance": "2.3 miles away",
            "status": "HIRING",
            "image": img20,
            "borderColor": "#FFCC4E"
        },
        {
            "date": "February, Wednesday 26 2025",
            "time": "10:30 AM",
            "price": "$50",
            "service": "Senegalese Twist",
            "distance": "2.3 miles away",
            "status": "HIRING",
            "image": img21,
            "borderColor": "#123E41"
        },
        {
            "date": "February, Wednesday 26 2025",
            "time": "10:30 AM",
            "price": "$50",
            "service": "Senegalese Twist",
            "distance": "2.3 miles away",
            "status": "HIRING",
            "image": img22,
            "borderColor": "#123E41"
        },
        {
            "date": "February, Wednesday 26 2025",
            "time": "10:30 AM",
            "price": "$50",
            "service": "Senegalese Twist",
            "distance": "2.3 miles away",
            "status": "HIRING",
            "image": img23,
            "borderColor": "#FF827F"
        },
        {
            "date": "February, Wednesday 26 2025",
            "time": "10:30 AM",
            "price": "$50",
            "service": "Senegalese Twist",
            "distance": "2.3 miles away",
            "image": img24,
            "borderColor": "#FF827F"
        },
        {
            "date": "February, Wednesday 26 2025",
            "time": "10:30 AM",
            "price": "$50",
            "service": "Senegalese Twist",
            "distance": "2.3 miles away",
            "image": img25,
            "borderColor": "#FF827F"
        },
        {
            "date": "February, Wednesday 26 2025",
            "time": "10:30 AM",
            "price": "$50",
            "service": "Senegalese Twist",
            "distance": "2.3 miles away",
            "status": "HIRING",
            "image": img26,
            "borderColor": "#FFCC4E"
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
    const handleAvailabilityBookingModal = () => {
        setModalOpen16(false)
        setModalOpen19(false)
        setModalOpen17(true)
    }
    const handlesuccesmodal = () => {
        setModalOpen17(false)
        setModalOpen18(true)
    }

    const handleback = () => {
        setModalOpen17(false)
        setModalOpen16(true)
        setModalOpen19(true)
    }

    const handlesuccesmodal1 = () => {
        setModalOpen16(false)
        setModalOpen19(false)
        setModalOpen18(true)
    }


    return (
        <IndependentDashboardLayout title="Basket"
            gpnumber='6'
            titleAction={
                <div className="flex items-center gap-3">
                    <div className="flex bg-[#D9D9D9] rounded-[34px] overflow-hidden px-1 py-0.5 max-w-xl">
                        <button
                            className={`flex-1 px-7 sm:text-[20px] text-[18px] font-[600] font-rasa rounded-[34px] flex gap-1  items-center justify-center  ${activeTab === 'Dashboard' ? 'bg-white text-[#000000]' : 'text-[#00000080]'
                                }`}
                            onClick={() => setActiveTab('Dashboard')}
                        >

                            Dashboard
                            <IoMdInformationCircle className={` ${activeTab === 'Dashboard' ? 'text-[#2F2F2F]' : 'text-[#2F2F2F80]'}`} />
                        </button>
                        <button
                            className={`flex-1 px-7 sm:text-[20px] text-[18px] font-[600] font-rasa rounded-[34px] flex gap-1  items-center justify-center  ${activeTab === 'Offers' ? 'bg-white text-[#000000]' : 'text-[#00000080]'
                                }`}
                            onClick={() => setActiveTab('Offers')}
                        >

                            Offers
                            <IoMdInformationCircle className={` ${activeTab === 'Offers' ? 'text-[#2F2F2F]' : 'text-[#2F2F2F80]'}`} />
                        </button>
                    </div>
                    {activeTab === 'Dashboard' && activeTab1 === 'Hiring Request (s)' && activeTab2 === 'Pending' &&
                        <div className={`cursor-pointer  px-7 border sm:text-[20px] text-[18px] font-[600] font-rasa rounded-[34px] flex gap-1  items-center justify-center  ${activeTab === 'Selection Stage' ? 'bg-[#123E41] text-[#FAF9F6]' : 'bg-[#FAF9F6] text-[#2F2F2F] border-[#D9D9D9] '}`}
                            onClick={() => setActiveTab('Selection Stage')}>
                            Selection Stage
                            <IoMdInformationCircle className={` ${activeTab === 'Selection Stage' ? 'text-[#FAF9F6]' : 'text-[#2F2F2F]'}`} />
                        </div>
                    }
                    {activeTab === 'Selection Stage' &&
                        <div className={`cursor-pointer  px-7 border sm:text-[20px] text-[18px] font-[600] font-rasa rounded-[34px] flex gap-1  items-center justify-center  ${activeTab === 'Selection Stage' ? 'bg-[#123E41] text-[#FAF9F6]' : 'bg-[#FAF9F6] text-[#2F2F2F] border-[#D9D9D9] '}`}
                            onClick={() => setActiveTab('Selection Stage')}>
                            Selection Stage
                            <IoMdInformationCircle className={` ${activeTab === 'Selection Stage' ? 'text-[#FAF9F6]' : 'text-[#2F2F2F]'}`} />
                        </div>
                    }
                    {activeTab === 'Offers' && (
                        <select name="" id="" className='sm:w-[268px] w-full py-2 px-3.5 bg-white shadow-[0px_0px_4px_0px_#00000040] rounded-[17px] font-[400] font-rasa sm:tex-[20px] text-[15px] text-charcoal outline-none'>
                            <option value="">Sort By</option>
                            <option value="">All</option>
                            <option value="">Price -- Low to High</option>
                            <option value="">Price -- High to Low</option>
                            <option value="">Newest First</option>
                            <option value="">Drive to You</option>
                            <option value="">Drive to Client</option>
                        </select>
                    )}
                    {activeTab === 'Offers' && (
                        <div className='sm:w-[100px] w-full flex items-center justify-center cursor-pointer gap-2 px-3.5 bg-white shadow-[0px_0px_4px_0px_#00000040] rounded-[17px] ' onClick={() => setShowOfferFilter(true)}>
                            <LuSettings2 color="#000000" size={20} />
                            <p className="font-[400] font-rasa sm:text-[20px] text-[15px] text-charcoal m-0">Filter</p>
                        </div>
                    )}
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

            <IndependentPostAProject
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
            <DeclineConfirmModal
                isOpen={isModalOpen14}
                onClose={() => setModalOpen14(false)}
                handleDecelineSuccess={handleDecelineSuccess}
            />
            <DeclineSuccessModal
                isOpen={isModalOpen15}
                onClose={() => setModalOpen15(false)}
            />
            <IndependentBookingDetailsModal
                isOpen={isModalOpen16}
                onClose={() => setModalOpen16(false)}
                handleAvailabilityBookingModal={handleAvailabilityBookingModal}
                handlesuccesmodal1={handlesuccesmodal1}
            />
            <CheckAvailabilityBookingModal
                isOpen={isModalOpen17}
                onClose={() => setModalOpen17(false)}
                handlesuccesmodal={handlesuccesmodal}
                handleback={handleback}
            />
            <IndependentAcceptSuccessModal
                isOpen={isModalOpen18}
                onClose={() => setModalOpen18(false)}
            />
            <IndependentHiringDetailsModal
                isOpen={isModalOpen19}
                onClose={() => setModalOpen19(false)}
                handleAvailabilityBookingModal={handleAvailabilityBookingModal}
                handlesuccesmodal1={handlesuccesmodal1}
            />
            <OfferFilters
                showOfferFilter={showOfferFilter}
                setShowOfferFilter={setShowOfferFilter}
            />
            {activeTab === 'Dashboard' &&
                <div>
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div
                                className={`px-3 py-2 sm:text-[20px] text-[18px] font-[500] font-rasa rounded-[10px] flex gap-1  items-center justify-center  cursor-pointer  ${activeTab1 === 'Hiring Request (s)' ? 'bg-[#123E41] text-[#FAF9F6] border border-[#FAF9F6]' : 'bg-[#FAF9F6]  text-[#2F2F2F] border border-[#2F2F2F]'
                                    }`}
                                onClick={() => setActiveTab1('Hiring Request (s)')}
                            >

                                Hiring Request (s)
                                <IoMdInformationCircle className={` ${activeTab1 === 'Hiring Request (s)' ? 'text-[#FAF9F6]' : 'text-[#2F2F2F]'}`} />
                            </div>
                            <div
                                className={`px-3 py-2  sm:text-[20px] text-[18px] font-[500] font-rasa rounded-[10px] flex gap-1  items-center justify-center cursor-pointer  ${activeTab1 === 'Personal Request (s)' ? 'bg-[#123E41] text-[#FAF9F6] border border-[#FAF9F6]' : 'bg-[#FAF9F6]  text-[#2F2F2F] border border-[#2F2F2F]'
                                    }`}
                                onClick={() => setActiveTab1('Personal Request (s)')}
                            >

                                Personal Request (s)
                                <IoMdInformationCircle className={` ${activeTab1 === 'Personal Request (s)' ? 'text-[#FAF9F6]' : 'text-[#2F2F2F]'}`} />
                            </div>
                        </div>
                        <h6 className="font-rasa font-[500] sm:text-[25px] text-[20px] text-charcoal mb-2">These are the requests you’ve submitted to hire other professionals for your business.</h6>
                        <div className="flex w-full bg-[#D9D9D9] rounded-[34px] overflow-hidden px-1 py-0.5 max-w-xl">
                            <button
                                className={`flex-1 px-7 sm:text-[20px] text-[18px] font-[600] font-rasa rounded-[34px] flex gap-1  items-center justify-center  ${activeTab2 === 'Pending' ? 'bg-white text-[#000000]' : 'text-[#00000080]'
                                    }`}
                                onClick={() => setActiveTab2('Pending')}
                            >

                                Pending
                                <IoMdInformationCircle color="#2F2F2F" />
                            </button>
                            <button
                                className={`flex-1 px-7 sm:text-[20px] text-[18px] font-[600] font-rasa rounded-[34px] flex gap-1  items-center justify-center  ${activeTab2 === 'Accepted' ? 'bg-white text-[#000000]' : 'text-[#00000080]'
                                    }`}
                                onClick={() => setActiveTab2('Accepted')}
                            >

                                Accepted
                                <IoMdInformationCircle color="#2F2F2F" />
                            </button>
                            <button
                                className={`flex-1 px-7 sm:text-[20px] text-[18px] font-[600] font-rasa rounded-[34px] flex gap-1 items-center justify-center  ${activeTab2 === 'Expired' ? 'bg-white text-[#000000]' : 'text-[#00000080]'
                                    }`}
                                onClick={() => setActiveTab2('Expired')}
                            >

                                Expired
                                <IoMdInformationCircle color="#2F2F2F" />
                            </button>
                        </div>
                    </div>

                    {activeTab === 'Dashboard' && activeTab1 === 'Hiring Request (s)' && activeTab2 === 'Pending' &&
                        <div className="flex flex-wrap gap-5 sm:flex-row flex-col mt-4">
                            {DashboardhiringPendingData.map((i, idx) => (
                                <div key={idx} className="max-w-md rounded-[10px] border-4 border-[#FFCC4E] bg-white">
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
                                            <div className="h-[180px] w-[130px]">
                                                <img
                                                    src={i.imageUrl}
                                                    alt="Provider"
                                                    className="h-full w-full rounded-[10px] object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal text-end">+{i.tip} Tip</h6>
                                                <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.providerResponse}</p>
                                                <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.date} - {i.fromtime}-{i.totime}</p>
                                                <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.service}: ${i.price}</p>
                                                <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">Hiring help for: {i.Hiring}</p>
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
                    {activeTab === 'Dashboard' && activeTab1 === 'Hiring Request (s)' && activeTab2 === 'Accepted' &&
                        <div className="flex flex-wrap gap-5 sm:flex-row flex-col mt-4">
                            {DashboardhiringAcceptedData.map((i, idx) => (
                                <div key={idx} className="max-w-md rounded-[10px] border-4 border-[#FFCC4E] bg-white">
                                    {/* Header */}
                                    <div className="bg-[#D9D9D9] rounded-tl-[7px] rounded-tr-[7px] px-6 py-2 flex gap-0.5 items-center justify-end cursor-pointer">
                                        <TbCopy color="#2F2F2F" />
                                        <h6 className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal">Duplicate</h6>
                                    </div>

                                    <div className="px-4 py-2">
                                        {/* Image and Info */}
                                        <div className="flex gap-2">
                                            <div className="h-[180px] w-[130px]">
                                                <img
                                                    src={i.imageUrl}
                                                    alt="Provider"
                                                    className="h-full w-full rounded-[10px] object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal text-end">+{i.tip} Tip</h6>
                                                <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.status}</p>
                                                <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.date} - {i.fromtime}-{i.totime}</p>
                                                <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">Hired: {i.Hired}</p>
                                                <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.service}: ${i.price}</p>
                                                <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">Hiring help for: {i.Hiring}</p>
                                                <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0 flex items-center justify-between">
                                                    Distance: {i.distance}
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
                    {activeTab === 'Dashboard' && activeTab1 === 'Hiring Request (s)' && activeTab2 === 'Expired' &&
                        <div className="flex flex-wrap gap-5 sm:flex-row flex-col mt-4">
                            {DashboardhiringExpiredData.map((i, index) => (
                                <div key={index} className={`max-w-md rounded-[10px] border-4 border-[#FFCC4E] bg-white`}>
                                    {/* Header */}
                                    <div className="bg-[#D9D9D9] rounded-tl-[7px] rounded-tr-[7px] px-6 py-2 flex gap-0.5 items-center justify-end cursor-pointer">
                                        <TbCopy color="#2F2F2F" />
                                        <h6 className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal">Duplicate</h6>
                                    </div>

                                    <div className=" px-4 py-2">
                                        {/* Image and Info */}
                                        <div className="flex gap-2">
                                            <div className="h-[180px] w-[130px]">
                                                <img
                                                    src={i.imageUrl}
                                                    alt="Provider"
                                                    className="h-full w-full rounded-[10px] object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal text-end">+{i.tip} Tip</h6>
                                                <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.status}</p>
                                                <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.date} - {i.fromtime}-{i.totime}</p>
                                                <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.providerResponse}</p>
                                                <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.service}: ${i.price}</p>
                                                <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.statusMessage}</p>{i.Hiring &&
                                                    <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">Hiring help for: {i.Hiring}</p>}
                                                <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0 flex items-center justify-between">
                                                    Distance: {i.distance}
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
                    {activeTab === 'Dashboard' && activeTab1 === 'Personal Request (s)' && activeTab2 === 'Pending' &&
                        <div className="flex flex-wrap gap-5 sm:flex-row flex-col mt-4">
                            {DashboardpersonalPendingData.map((i, idx) => (
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
                                            <div className="h-[180px] w-[130px]">
                                                <img
                                                    src={i.imageUrl}
                                                    alt="Provider"
                                                    className="h-full w-full rounded-[10px] object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal text-end">+{i.tip} Tip</h6>
                                                <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.providerResponse}</p>
                                                <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.date} - {i.fromtime}</p>
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
                    {activeTab === 'Dashboard' && activeTab1 === 'Personal Request (s)' && activeTab2 === 'Accepted' &&
                        <div className="flex flex-wrap gap-5 sm:flex-row flex-col mt-4">
                            {DashboardpersonalAcceptedData.map((i, idx) => (
                                <div key={idx} className="max-w-md rounded-[10px] border-4 border-[#FF827F] bg-white">
                                    {/* Header */}
                                    <div className="bg-[#D9D9D9] rounded-tl-[7px] rounded-tr-[7px] px-6 py-2 flex gap-0.5 items-center justify-end cursor-pointer">
                                        <TbCopy color="#2F2F2F" />
                                        <h6 className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal">Duplicate</h6>
                                    </div>

                                    <div className="px-4 py-2">
                                        {/* Image and Info */}
                                        <div className="flex gap-2">
                                            <div className="h-[180px] w-[130px]">
                                                <img
                                                    src={i.imageUrl}
                                                    alt="Provider"
                                                    className="h-full w-full rounded-[10px] object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal text-end">+{i.tip} Tip</h6>
                                                <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.status}</p>
                                                <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">Provider: Divine Spa</p>
                                                <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.date} - {i.fromtime}</p>
                                                <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.service}: ${i.price}</p>
                                                <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">Hiring help for: {i.Hiring}</p>
                                                <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0 flex items-center justify-between">
                                                    Distance: {i.distance}
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
                    {activeTab === 'Dashboard' && activeTab1 === 'Personal Request (s)' && activeTab2 === 'Expired' &&
                        <div className="flex flex-wrap gap-5 sm:flex-row flex-col mt-4">
                            {DashboardpersonalExpiredData.map((i, index) => (
                                <div key={index} className={`max-w-md rounded-[10px] border-4 border-[#FF827F] bg-white`}>
                                    {/* Header */}
                                    <div className="bg-[#D9D9D9] rounded-tl-[7px] rounded-tr-[7px] px-6 py-2 flex gap-0.5 items-center justify-end cursor-pointer">
                                        <TbCopy color="#2F2F2F" />
                                        <h6 className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal">Duplicate</h6>
                                    </div>

                                    <div className=" px-4 py-2">
                                        {/* Image and Info */}
                                        <div className="flex gap-2">
                                            <div className="h-[180px] w-[130px]">
                                                <img
                                                    src={i.imageUrl}
                                                    alt="Provider"
                                                    className="h-full w-full rounded-[10px] object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal text-end">+{i.tip} Tip</h6>
                                                <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.status}</p>
                                                <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.date} - {i.fromtime}</p>
                                                <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.providerResponse}</p>
                                                <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.service}: ${i.price}</p>
                                                <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.statusMessage}</p>
                                                <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0 flex items-center justify-between">
                                                    Distance: {i.distance}
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
            }
            {activeTab === 'Offers' &&
                <div className="flex flex-wrap gap-5 sm:flex-row flex-col mt-4">
                    {OfferData.map((i, idx) => (
                        <div key={idx} className="max-w-md rounded-[10px] border-4 bg-white cursor-pointer"
                            style={{ borderColor: i.borderColor }}
                            onClick={() => {
                                if (i.status) {
                                    setModalOpen19(true);  // open one modal
                                } else {
                                    setModalOpen16(true);  // open the other
                                }
                            }}

                        >
                            <div className=" px-4 py-2">
                                {/* Image and Info */}
                                <div className="flex gap-2 h-[122]">
                                    <div className="h-[150px] w-[130px]">
                                        <img
                                            src={i.image}
                                            alt="Provider"
                                            className="h-full w-full rounded-[10px] object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <h6 className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.status}</h6>
                                            <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0 flex items-center justify-end gap-1.5">
                                                <span className="text-[#34A853]">{i.tip}</span>
                                                <IoIosInformationCircle color="#2F2F2F" />
                                            </p>
                                        </div>
                                        <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.date}</p>
                                        <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.time}</p>
                                        <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.price} {i.service}</p>
                                        <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.distance}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="flex gap-6 items-center justify-center py-6">
                        {/* PREV Button */}
                        <div className="flex flex-col items-center">
                            <button className="w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center shadow-[0px_4px_4px_0px_#00000040;]">
                                <FaArrowLeft className="text-[#FAF9F6] text-[30px]" />
                            </button>
                            <span className="font-rasa font-[600] sm:text-[25px] text-[20px] text-gray-600 mt-2">PREV</span>
                        </div>

                        {/* NEXT Button */}
                        <div className="flex flex-col items-center">
                            <button className="w-20 h-20 rounded-full bg-[#2F2F2F] flex items-center justify-center shadow-[0px_4px_4px_0px_#00000040;]">
                                <FaArrowRight className="text-[#FAF9F6] text-[30px]" />
                            </button>
                            <span className="font-rasa font-[600] sm:text-[25px] text-[20px] text-charcoal mt-2">NEXT</span>
                        </div>
                    </div>
                </div>
            }
            {activeTab === 'Selection Stage' &&
                <div>
                    <div className="flex flex-wrap gap-5 sm:flex-row flex-col mt-4">
                        {SelectionStageData.map((i, idx) => (
                            <div key={idx} className="max-w-md rounded-[10px] border-4 border-[#FFCC4E] bg-white">
                                <div className=" px-4 py-2">
                                    {/* Image and Info */}
                                    <div className="flex gap-2 h-[122]">
                                        <div className="h-[122px] w-[130px]">
                                            <img
                                                src={i.imageUrl}
                                                alt="Provider"
                                                className="h-full w-full rounded-[10px] object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.status}</p>
                                            <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.statusMessage}</p>
                                            <p className="font-rasa font-[600] sm:text-[17px] text-[15px] text-charcoal m-0">{i.date} - {i.fromtime}</p>
                                            <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0">{i.service}: ${i.price}</p>
                                            <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-charcoal m-0 flex items-center justify-between">
                                                Distance: {i.distance}
                                                <img src={img1} alt="" className='w-8 h-3  object-cover' />
                                            </p>
                                        </div>
                                    </div>
                                    {/* Buttons */}
                                    <div className="flex items-center  gap-2 mt-2">
                                        {i.actions.map((i, idx) =>
                                            <button
                                                key={idx}
                                                onClick={i.onClick}
                                                className="min-w-[170px] bg-secondary text[#000000] font-[600] p-1.5 rounded-[10px] font-rasa sm:text-[18px] text-[12px]">
                                                {i.label}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </IndependentDashboardLayout>
    );
}