import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { enUS } from 'date-fns/locale';
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import IndependentDashboardLayout from '../../../components/DashbaordLayout/Independent Dashbaord';
import { FaPlus } from "react-icons/fa6";
import { AddbreaksModal } from '../../../components/Modals/Modal';


const data = [
    {
        "day": "Monday",
        "isOpen": true,
        "openingTime": "09:00 AM",
        "closingTime": "08:00 PM",
        "breaks": []
    },
    {
        "day": "Tuesday",
        "isOpen": true,
        "openingTime": "09:00 AM",
        "closingTime": "08:00 PM",
        "breaks": []
    },
    {
        "day": "Wednesday",
        "isOpen": true,
        "openingTime": "09:00 AM",
        "closingTime": "08:00 PM",
        "breaks": []
    },
    {
        "day": "Thursday",
        "isOpen": true,
        "openingTime": "09:00 AM",
        "closingTime": "08:00 PM",
        "breaks": []
    },
    {
        "day": "Friday",
        "isOpen": true,
        "openingTime": "09:00 AM",
        "closingTime": "08:00 PM",
        "breaks": []
    },
    {
        "day": "Saturday",
        "isOpen": false,
        "openingTime": "10:00 AM",
        "closingTime": "06:00 PM",
        "breaks": []
    },
    {
        "day": "Sunday",
        "isOpen": false,
        "openingTime": "10:00 AM",
        "closingTime": "06:00 PM",
        "breaks": []
    }
]






const customLocale = {
    ...enUS,
    localize: {
        ...enUS.localize,
        day: (n) => ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][n],
    },
};

const IndependentShopManageTime = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isModalOpen, setModalOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [value1, setValue1] = useState(null);

    const navigate = useNavigate();


    const [openDays, setOpenDays] = useState({
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: false,
        Sunday: false,
    });



    return (
        <IndependentDashboardLayout
            titleAction={
                <div className="flex items-center gap-2">
                    <HiOutlineArrowLeft color='#000000' size={30} className='cursor-pointer' onClick={() => navigate(-1)} />
                    <div className="sm:text-[40px] text-2xl font-[600] font-rasa whitespace-nowrap text-charcoal">
                        Shop No.1 Availability Management
                    </div>
                </div>
            }
        >
            <AddbreaksModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}

            />
            <div className=''>
                <div className='mb-5'>
                    <h6 className='block ont-sansation font-[700] sm:text-[25px] text-[20px] text-charcoal mb-5'>Set Salon Operating Days & Hours</h6>
                    <div className="overflow-x-auto">
                        <table className="min-w-full  rounded-lg overflow-hidden border-collapse">
                            <thead className="bg-[#123E41] text-white text-center">
                                <tr>
                                    <th className="p-2 font-[700] font-rasa sm:text-[20px] text-[15px] text-[#FFFFFF]">DAY</th>
                                    <th className="p-2 font-[700] font-rasa sm:text-[20px] text-[15px] text-[#FFFFFF]">OPEN?</th>
                                    <th className="p-2 font-[700] font-rasa sm:text-[20px] text-[15px] text-[#FFFFFF]">OPENING TIME</th>
                                    <th className="p-2 font-[700] font-rasa sm:text-[20px] text-[15px] text-[#FFFFFF]">CLOSING TIME</th>
                                    <th className="p-2 font-[700] font-rasa sm:text-[20px] text-[15px] text-[#FFFFFF]">ADD BREAKS</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white shadow-2xl">
                                {data.map((data, index) => (
                                    <tr
                                        key={index}
                                        className="shadow"
                                    >
                                        <td className="p-3 font-[700] font-rasa sm:text-[20px] text-[15px] text-[#464646] leading-[18.95px] text-center">{data.day}</td>
                                        <td className="p-3 flex items-center justify-center">
                                            <input
                                                type="checkbox"
                                                className="peer hidden"
                                                checked={openDays[data.day]}
                                                onChange={() =>
                                                    setOpenDays((prev) => ({
                                                        ...prev,
                                                        [data.day]: !prev[data.day],
                                                    }))
                                                }
                                            />
                                            <div
                                                className={`w-[28px] h-[28px] rounded-sm flex items-center justify-center transition-colors duration-300
      ${openDays[data.day] ? 'bg-[#FF827F]' : 'bg-[#D9D9D9] border border-[#2F2F2F]'}`}
                                            >
                                                {openDays[data.day] && (
                                                    <svg
                                                        className="w-4 h-4 text-black"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="3"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                        </td>

                                        <td className="p-3 font-[700] font-rasa sm:text-[20px] text-[15px] text-[#464646] leading-[18.95px] text-center">{data.openingTime}</td>
                                        <td className="p-3 font-[700] font-rasa sm:text-[20px] text-[15px] text-[#464646] leading-[18.95px] text-center">{data.closingTime}</td>
                                        <td className="p-3 font-[700] font-rasa sm:text-[20px] text-[15px] flex items-center justify-center cursor-pointer">
                                            <FaPlus color='#000000' onClick={() => setModalOpen(true)}/>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='mb-4'>
                    <h6 className='font-sansation font-[700] sm:text-[25px] text-[20px] text-charcoal mb-2'>Set Salon Vacation / Off-Day</h6>
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <div className='mangertimedate w-full max-w-[400px] mx-auto lg:mx-0'>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                inline
                                calendarClassName="custom-calendar"
                                locale={customLocale}
                                dayClassName={(date) =>
                                    date.toDateString() === selectedDate.toDateString()
                                        ? 'selected-day'
                                        : 'default-day'
                                }
                            />
                        </div>

                        <div className='flex-1'>
                            <div className="flex flex-wrap gap-4 mb-6">
                                <div className='flex items-center gap-2.5'>
                                    <label className="font-sansation font-[700] sm:text-[25px] text-[20px] text-charcoal">
                                        Single Day
                                    </label>
                                    <span className="relative w-4 h-4">
                                        <input
                                            type="radio"
                                            name="yesno"
                                            className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                                            checked={value === true}
                                            onChange={() => setValue(true)}
                                        />
                                        <span
                                            className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${value === true ? "border-[#F67067]" : "border-[#2F2F2F]"
                                                } border`}
                                        ></span>
                                    </span>
                                </div>
                                <div className='flex items-center gap-2.5'>
                                    <label className="flex items-center gap-2  font-sansation font-[700] sm:text-[25px] text-[20px] text-charcoal">
                                        Multiple Days
                                    </label>
                                    <span className="relative w-4 h-4">
                                        <input
                                            type="radio"
                                            name="yesno"
                                            className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                                            checked={value1 === true}
                                            onChange={() => setValue1(true)}
                                        />
                                        <span
                                            className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${value1 === true ? "border-[#F67067]" : "border-[#2F2F2F]"
                                                } border`}
                                        ></span>
                                    </span>
                                </div>
                            </div>
                            {value ? (
                                <div className='space-y-4'>
                                    <label className="block font-sansation font-bold text-sm sm:text-base text-charcoal">
                                        Enter your vacation date
                                    </label>
                                    <div className='flex flex-col sm:flex-row gap-3'>
                                        <input
                                            type="date"
                                            className='flex-1 border border-gray-300 bg-white rounded-lg px-4 py-2 focus:border-[#123E41] focus:outline-none'
                                        />
                                        <button className='px-6 py-2 border border-transparent bg-[#FF827F] rounded-lg font-sansation font-bold text-white hover:bg-[#e57370] transition'>
                                            + Add
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className='space-y-4'>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                                        <div>
                                            <label className="block font-sansation font-bold text-sm sm:text-base text-charcoal mb-2">
                                                Start date
                                            </label>
                                            <input
                                                type="date"
                                                className='w-full border border-gray-300 bg-white rounded-lg px-4 py-2 focus:border-[#123E41] focus:outline-none'
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-sansation font-bold text-sm sm:text-base text-charcoal mb-2">
                                                End date
                                            </label>
                                            <input
                                                type="date"
                                                className='w-full border border-gray-300 bg-white rounded-lg px-4 py-2 focus:border-[#123E41] focus:outline-none'
                                            />
                                        </div>
                                    </div>
                                    <button className='w-full sm:w-auto px-6 py-2 border border-transparent bg-[#FF827F] rounded-lg font-sansation font-bold text-white hover:bg-[#e57370] transition'>
                                        + Add
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                </div>


                <div className=" flex justify-center w-[50%] m-auto mt-8">
                    <button className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                    >
                        Save
                    </button>
                </div>
            </div>
        </IndependentDashboardLayout >
    )
}

export default IndependentShopManageTime