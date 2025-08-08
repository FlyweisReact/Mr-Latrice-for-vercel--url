import { Link } from 'react-router-dom';
import RightDivAppointment from './RightDivAppointment';
import img from '../../../assets/images/dashboard/img11.jpg'
import img1 from '../../../assets/images/dashboard/img29.png'
import { useState } from 'react';
import { ClaimBookingModal, ClaimBookingSuccessModal } from '../../../components/Modals/Modal';
import ClientDashboardLayout from '../../../components/DashbaordLayout/Client Dashbaord';

const appointments = [
    {
        title: '(specialty haircut) skin Fade/textured cuts',
        shopName: 'Luxx Barber Shop',
        shopImg: img,
        dayLabel: 'Today',
        date: '26',
        time: '10:30 AM',
    },
    {
        title: '(specialty haircut) skin Fade/textured cuts',
        shopName: 'Luxx Barber Shop',
        shopImg: img,
        dayLabel: 'March',
        date: '03',
        time: '11:30 AM',
    },
];

const routeMapping = {
    'Current bookings': "/dashboard/appointments/current-bookings",
    'Upcoming bookings': "/dashboard/appointments/upcoming-bookings",
    "Past bookings": "/dashboard/appointments/past-bookings",
    'Cancellation': "/dashboard/appointments/cancellation-bookings",
    'Claim/Dispute': "/dashboard/appointments/claim/dispute-bookings",
};


export default function ClaimDispute() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isModalOpen1, setModalOpen1] = useState(false);
    const [reason, setReason] = useState(false)

    const handlopensecond = () => {
        setModalOpen(false)
        setModalOpen1(true)
        setReason(true)
    }


    return (

        <ClientDashboardLayout title="Appointment Scheduling"
        >
            <ClaimBookingModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                handlopensecond={handlopensecond}

            />
            <ClaimBookingSuccessModal
                isOpen={isModalOpen1}
                onClose={() => setModalOpen1(false)}
            />
            <div className="flex flex-col lg:flex-row w-full gap-4">
                <div className="flex-1 overflow-auto">
                    {/* Tabs */}
                    <div className="flex flex-wrap w-full overflow-hidden justify-center sm:justify-between gap-2 sm:gap-1 mb-3">
                        {['Current bookings', 'Upcoming bookings', 'Past bookings', 'Cancellation', 'Claim/Dispute'].map((item, index) => (
                            <Link key={index} to={routeMapping[item]}>
                                <button
                                    className={`p-2 sm:px-6 text-[16px] sm:text-[20px] font-medium font-rasa rounded-[10px] border transition-all duration-200 ${item === 'Claim/Dispute'
                                        ? 'bg-[#123E41] text-[#FAF9F6] border-2 border-[#FAF9F6]'
                                        : 'text-[#2F2F2F] border-2 border-[#2F2F2F]'
                                        }`}
                                    style={{
                                        border: "1px solid red",
                                        borderColor: item === 'Claim/Dispute' ? '#FAF9F6' : '#2F2F2F',
                                    }}
                                >
                                    {item}
                                </button>
                            </Link>
                        ))}
                    </div>
                    <div className="min-h-screen mt-5">
                        {appointments.map((a, idx) => (
                            <div
                                key={idx}
                                className="flex flex-wrap justify-between items-center bg-[#FAF9F6] border border-[#2F2F2F33] rounded-[10px] mb-4 cancelbookings"
                            >
                                {/* Left side */}
                                <div className="px-4">
                                    <div className="flex gap-3 mb-2 pt-4">
                                        <img
                                            src={a.shopImg}
                                            alt={a.shopName}
                                            className="w-9 h-9 rounded-full object-cover"
                                        />
                                        <div className='space-y-0.5'>
                                            <p className="font-[600] sm:text-[18px] text-[15px] text-[#121111]">Client Late Cancel</p>
                                            <p className="font-[600] sm:text-[18px] text-[15px] text-[#121111]">
                                                Provider: Emily Styles
                                            </p>
                                            <p className="font-[600] sm:text-[18px] text-[15px] text-[#121111]">Apr 5, 2025 - 10:30 AM</p>
                                            <p className="font-[600] sm:text-[18px] text-[15px] text-[#121111]">{a.title} - $80</p>
                                            <p className="font-[600] sm:text-[18px] text-[15px] text-[#121111]">50% Refunded - Late Cancellation</p>
                                            <p className="font-[600] sm:text-[18px] text-[15px] text-[#121111] flex items-center justify-between">
                                                Distance: 2.3 miles
                                                <img src={img1} alt="" className='w-9 h-9  object-cover' />
                                            </p>
                                        </div>
                                    </div>
                                    {/* Buttons */}
                                    <div className="flex gap-3 mt-4 flex-wrap pb-4">
                                        <button className="bg-[#FFE6D8] text-[#FF827F] text-sm font-semibold px-4 py-2 rounded-[6px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5]">
                                            View Details
                                        </button>
                                        <button className="bg-[#FFE6D8] text-[#FF827F] text-sm font-semibold px-4 py-2 rounded-[6px] shadow-[0px_4px_4px_0px_#00000040]" onClick={() => setModalOpen(true)}>
                                            {reason ? "View Uploaded Reason" : "Submit Reason - 3 days left"}
                                        </button>
                                    </div>
                                </div>

                                {/* Right side */}
                                <div className="border-l border-[#2F2F2F33] h-auto px-10 sm:py-15 py-4 rounded-tl-[10px] rounded-bl-[10px] flex sm:flex-col flex-row gap-3 sm:gap-0 items-center justify-center">
                                    <p className="font-[500] sm:text-[16px] text-[15px] text-[#121111">{reason ? "Resolved" : "Ongoing"}</p>
                                    <p className="font-[400] sm:text-[30px] text-[15px] text-[#121111">{reason ? "May 26, 25" : a.date}</p>
                                    <p className="font-[500] sm:text-[16px] text-[15px] text-[#121111">{a.time}</p>
                                    {reason &&
                                        <p className="font-[500] sm:text-[16px] text-[15px] text-[#121111">Dispute Closed</p>
                                    }
                                </div>
                            </div>

                        ))}

                    </div>
                </div>
                <div className="lg:w-fit w-full sm:max-w-1/3">
                    <RightDivAppointment />
                </div>
            </div>
        </ClientDashboardLayout>
    );
}