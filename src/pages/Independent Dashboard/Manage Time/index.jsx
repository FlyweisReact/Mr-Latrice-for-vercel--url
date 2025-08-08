import React, { useState } from 'react'
import BusinessOwnerDashboardLayout from '../../../components/DashbaordLayout/Business Owner';
import { IoArrowBack } from "react-icons/io5";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { enUS } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowLeft } from "react-icons/hi";


const daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const customLocale = {
    ...enUS,
    localize: {
        ...enUS.localize,
        day: (n) => ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][n],
    },
};
const ManageTime = () => {
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [value, setValue] = useState(null);
    const [value1, setValue1] = useState(null);

    const navigate = useNavigate();

    return (
        <BusinessOwnerDashboardLayout
            titleAction={
                <div className="flex items-center gap-2">
                    <HiOutlineArrowLeft color='#000000' size={30} className='cursor-pointer' onClick={() => navigate(-1)} />
                    <div className="sm:text-[40px] text-2xl font-[600] font-rasa whitespace-nowrap text-charcoal">
                        Manage Time
                    </div>
                </div>
            }
        >
            <div className=''>
                <div className='mb-8'>
                    <h6 className='font-sansation font-[700] sm:text-[25px] text-[20px] text-charcoal mb-2'>Add Staff’s Availability</h6>
                    <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3'>
                        {daysOfWeek.map(day => (
                            <div key={day}
                                onClick={() => setSelectedDay(day)}
                                className={`cursor-pointer border p-[10px] rounded-[10px] transition font-sansation font-[700] sm:text-[20px] text-[20px] text-center  ${selectedDay === day
                                    ? "bg-[#123E41] text-[#FAF9F6]"
                                    : "bg-[#FAF9F6] text-[#123E41] border-[#2F2F2F]"
                                    }`}
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
                    <div className=''>
                        <label htmlFor="" className='block font-sansation font-[700] sm:text-[20px] text-[15px] text-charcoal mb-2'>Start Time</label>
                        <input type="time" className='w-full border border-[#2F2F2F] bg-white rounded-[7px] px-8.5 py-3' />
                    </div>
                    <div className=''>
                        <label htmlFor="" className='block font-sansation font-[700] sm:text-[20px] text-[15px] text-charcoal mb-2'>End Time</label>
                        <input type="time" className='w-full border border-[#2F2F2F] bg-white rounded-[7px] px-8.5 py-3' />
                    </div>
                    <div className=''>
                        <label htmlFor="" className='block font-sansation font-[700] sm:text-[20px] text-[15px] text-charcoal mb-2'>Break Time</label>
                        <input type="time" className='w-full border border-[#2F2F2F] bg-white rounded-[7px] px-8.5 py-3' />
                    </div>
                </div>
                <div className='mb-8'>
                    <h6 className='font-sansation font-[700] sm:text-[25px] text-[20px] text-charcoal mb-2'>Mark unavailable days or vacations on this calendar or enter manually</h6>
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
        </BusinessOwnerDashboardLayout >
    )
}

export default ManageTime