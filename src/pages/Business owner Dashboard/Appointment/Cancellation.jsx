import { Link } from 'react-router-dom';
import RightDivAppointment from './RightDivAppointment';
import img from '../../../assets/images/dashboard/img11.jpg'
import ClientDashboardLayout from '../../../components/DashbaordLayout/Client Dashbaord';
import BusinessOwnerDashboardLayout from '../../../components/DashbaordLayout/Business Owner';

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
    'Current bookings': "/business-owner/dashboard/appointments/current-bookings",
    'Upcoming bookings': "/business-owner/dashboard/appointments/upcoming-bookings",
    "Past bookings": "/business-owner/dashboard/appointments/past-bookings",
    'Cancellation': "/business-owner/dashboard/appointments/cancellation-bookings",
    'Claim/Dispute': "/business-owner/dashboard/appointments/claim/dispute-bookings",
};


export default function BusinessCancellation() {

    return (

        <BusinessOwnerDashboardLayout title="Appointment Scheduling"
        >
            <div className="flex flex-col lg:flex-row w-full gap-4">
                <div className="flex-1 overflow-auto">
                    {/* Tabs */}
                    <div className="flex flex-wrap w-full overflow-hidden justify-center sm:justify-between gap-2 sm:gap-1 mb-3">
                        {['Current bookings', 'Upcoming bookings', 'Past bookings', 'Cancellation', 'Claim/Dispute'].map((item, index) => (
                            <Link key={index} to={routeMapping[item]}>
                                <button
                                    className={`p-2 sm:px-6 text-[16px] sm:text-[20px] font-medium font-rasa rounded-[10px] border transition-all duration-200 ${item === 'Cancellation'
                                        ? 'bg-[#123E41] text-[#FAF9F6] border-2 border-[#FAF9F6]'
                                        : 'text-[#2F2F2F] border-2 border-[#2F2F2F]'
                                        }`}
                                    style={{
                                        border: "1px solid red",
                                        borderColor: item === 'Cancellation' ? '#FAF9F6' : '#2F2F2F',
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
                                <div className="flex flex-col gap-3 pl-5 space-y-1">
                                    <h2 className="font-[700] sm:text-[18px] text-[15px] text-[#121111]">{a.title}</h2>

                                    <div className="flex items-center gap-2">
                                        <img
                                            src={a.shopImg}
                                            alt={a.shopName}
                                            className="w-9 h-9 rounded-full object-cover"
                                        />
                                        <span className="font-[700] sm:text-[16px] text-[15px] text-[#121111]">
                                            {a.shopName}
                                        </span>
                                    </div>

                                    <button className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                                    >
                                        Cancel
                                    </button>
                                </div>

                                {/* Right side */}
                                <div className="border-l border-[#2F2F2F33] h-full pt-5 pb-5 pl-10 pr-10 rounded-tl-[10px] rounded-bl-[10px] text-center flex sm:flex-col flex-row gap-2">
                                    <p className="font-[500] sm:text-[16px] text-[15px] text-[#121111">{a.dayLabel}</p>
                                    <p className="font-[400] sm:text-[48px] text-[15px] text-[#121111">{a.date}</p>
                                    <p className="font-[500] sm:text-[16px] text-[15px] text-[#121111">{a.time}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="lg:w-fit w-full sm:max-w-1/3">
                    <RightDivAppointment />
                </div>
            </div>
        </BusinessOwnerDashboardLayout>
    );
}