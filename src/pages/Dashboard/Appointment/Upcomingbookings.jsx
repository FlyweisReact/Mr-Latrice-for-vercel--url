import { Link } from 'react-router-dom';
import RightDivAppointment from './RightDivAppointment';
import img from '../../../assets/images/dashboard/img28.jpg'
import { BookingDetailsModal, ChangeBookingDateTimeMOdal, ExtraMakepayment, ReshedulePaymenSuccessModal, ReviewandConfirmForReshedule } from '../../../components/Modals/Modal';
import { useState } from 'react';
import ClientDashboardLayout from '../../../components/DashbaordLayout/Client Dashbaord';

const data = [
    {
        photo: img, // Replace with actual image
        name: 'Giana Carder',
        service: 'Locs & Natural',
        date: '03/24/2025',
        time: '10:30 AM To 11:00 AM',
        price: '$300.00',
    },
];

const routeMapping = {
    'Current bookings': "/dashboard/appointments/current-bookings",
    'Upcoming bookings': "/dashboard/appointments/upcoming-bookings",
    "Past bookings": "/dashboard/appointments/past-bookings",
    'Cancellation': "/dashboard/appointments/cancellation-bookings",
    'Claim/Dispute': "/dashboard/appointments/claim/dispute-bookings",
};


export default function Upcomingbookings() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isModalOpen1, setModalOpen1] = useState(false);
    const [isModalOpen2, setModalOpen2] = useState(false);
    const [isModalOpen3, setModalOpen3] = useState(false);
    const [isModalOpen4, setModalOpen4] = useState(false);

    const handlopensecond = () => {
        setModalOpen(false)
        setModalOpen1(true)
    }
    const handlopenThird = () => {
        setModalOpen1(false)
        setModalOpen2(true)
    }
    const handlbacksecond = () => {
        setModalOpen2(false)
        setModalOpen1(true)
    }
    const handlopenforth = () => {
        setModalOpen2(false)
        setModalOpen3(true)
    }
    const handlbackthird = () => {
        setModalOpen3(false)
        setModalOpen2(true)
    }

    const handlopenfivth = () => {
        setModalOpen3(false)
        setModalOpen4(true)
    }

    return (
        <ClientDashboardLayout title="Appointment Scheduling"
        >
            <BookingDetailsModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                handlopensecond={handlopensecond}
            />
            <ChangeBookingDateTimeMOdal
                isOpen={isModalOpen1}
                onClose={() => setModalOpen1(false)}
                handlopenThird={handlopenThird}
            />
            <ReviewandConfirmForReshedule
                isOpen={isModalOpen2}
                onClose={() => setModalOpen2(false)}
                handlbacksecond={handlbacksecond}
                handlopenforth={handlopenforth}
            />
            <ExtraMakepayment
                isOpen={isModalOpen3}
                onClose={() => setModalOpen3(false)}
                handlbackthird={handlbackthird}
                handlopenfivth={handlopenfivth}
            />
            <ReshedulePaymenSuccessModal
                isOpen={isModalOpen4}
                onClose={() => setModalOpen4(false)}
                handlbackthird={handlbackthird}
            />
            <div className="flex flex-col lg:flex-row w-full gap-4">
                <div className="flex-1 overflow-auto">
                    {/* Tabs */}
                    <div className="flex flex-wrap w-full overflow-hidden justify-center sm:justify-between gap-2 sm:gap-1 mb-3">
                        {['Current bookings', 'Upcoming bookings', 'Past bookings', 'Cancellation', 'Claim/Dispute'].map((item, index) => (
                            <Link key={index} to={routeMapping[item]}>
                                <button
                                    className={`p-2 sm:px-6 text-[16px] sm:text-[20px] font-medium font-rasa rounded-[10px] border transition-all duration-200 ${item === 'Upcoming bookings'
                                        ? 'bg-[#123E41] text-[#FAF9F6] border-2 border-[#FAF9F6]'
                                        : 'text-[#2F2F2F] border-2 border-[#2F2F2F]'
                                        }`}
                                    style={{
                                        border: "1px solid red",
                                        borderColor: item === 'Upcoming bookings' ? '#FAF9F6' : '#2F2F2F',
                                    }}
                                >
                                    {item}
                                </button>
                            </Link>
                        ))}
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead className="">
                                <tr className="bg-[#123E41]">
                                    <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2 rounded-tl-2xl">PROVIDE PHOTO</th>
                                    <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2">PROVIDER NAME</th>
                                    <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2">SERVICE</th>
                                    <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2">DATE</th>
                                    <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2">TIME</th>
                                    <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2 rounded-tr-2xl">PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, idx) => (
                                    <tr key={idx} className="bg-white">
                                        <td className="p-2 border border-[#A8A8A84D] cursor-pointer" onClick={()=>setModalOpen(true)}>
                                            <img src={item.photo} alt="Provider" className="w-20 h-20 object-fit rounded" />
                                        </td>
                                        <td className="font-[700] font-rasa sm:text-[17px] text-[15px] text-[#464646] text-center border border-[#A8A8A84D]">{item.name}</td>
                                        <td className="font-[700] font-rasa sm:text-[17px] text-[15px] text-[#464646] text-center border border-[#A8A8A84D]">{item.service}</td>
                                        <td className="font-[700] font-rasa sm:text-[17px] text-[15px] text-[#464646] text-center border border-[#A8A8A84D]">{item.date}</td>
                                        <td className="font-[700] font-rasa sm:text-[17px] text-[15px] text-[#464646] text-center border border-[#A8A8A84D]">{item.time}</td>
                                        <td className="font-[700] font-rasa sm:text-[17px] text-[15px] text-[#464646] text-center border border-[#A8A8A84D]">{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="lg:w-fit w-full sm:max-w-1/3">
                    <RightDivAppointment />
                </div>
            </div>
        </ClientDashboardLayout>
    );
}