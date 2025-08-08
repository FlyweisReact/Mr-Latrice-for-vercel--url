import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ChooseDatePicker = ({ selectedDate, onSelectDate }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [visibleDates, setVisibleDates] = useState([]);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        generateVisibleDates(currentMonth);
    }, [currentMonth]);

    const generateVisibleDates = (date) => {
        const dates = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Generate next 7 days
        for (let i = 0; i < 7; i++) {
            const newDate = new Date(today);
            newDate.setDate(today.getDate() + i);
            dates.push(newDate);
        }

        setVisibleDates(dates);
    };

    const navigateWeek = (direction) => {
        const newDate = new Date(currentMonth);
        if (direction === 'prev') {
            newDate.setDate(newDate.getDate() - 7);
        } else {
            newDate.setDate(newDate.getDate() + 7);
        }
        setCurrentMonth(newDate);
    };

    const formatMonth = (date) => {
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    };

    const getDayName = (date) => {
        return date.toLocaleDateString('en-US', { weekday: 'short' });
    };

    const isToday = (date) => {
        const today = new Date();
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    };

    const isSelectedDate = (date) => {
        if (!selectedDate) return false;
        return date.getDate() === selectedDate.getDate() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getFullYear() === selectedDate.getFullYear();
    };

    const isDayDisabled = (date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };


    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth / 2;

            if (direction === 'left') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="w-full">
            <div className="flex items-center justify-center gap-1 mb-4">
                <button
                    onClick={() => navigateWeek('prev')}
                    className="p-2 rounded-full font-[600] text-[#2F2F2F] hover:bg-[#2F2F2F] hover:text-white"
                    aria-label="Previous week"
                >
                    <IoIosArrowBack size={20} />
                </button>
                <h2 className="text-lg font-medium text-gray-800">{formatMonth(currentMonth)}</h2>
                <button
                    onClick={() => navigateWeek('next')}
                    className="p-2 rounded-full font-[600] text-[#2F2F2F] hover:bg-[#2F2F2F] hover:text-white"
                    aria-label="Next week"
                >
                    <IoIosArrowForward size={20} />
                </button>
            </div>
            <div className="relative">
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10  rounded-full p-1 focus:outline-none"
                    aria-label="Scroll left"
                >
                    <IoIosArrowBack color='#000000' size={25} />
                </button>
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto py-2 gap-2 no-scrollbar w-[90%] m-auto"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {visibleDates.map((date, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`
              flex-shrink-0 w-24 h-24 rounded-lg flex flex-col items-center justify-center transition-all 
              ${isSelectedDate(date) ? 'bg-[#FF827F]' : 'bg-red-200'}
              ${!isSelectedDate(date) && !isDayDisabled(date) ? 'hover:bg-[#FF827F]' : ''}
              ${isDayDisabled(date) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
                            disabled={isDayDisabled(date)}
                            onClick={() => !isDayDisabled(date) && onSelectDate(date)}
                        >
                            <span className="font-rasa font-[600] text-charcoal text-[20px]">{getDayName(date)}</span>
                            <span className="font-rasa font-[600] text-charcoal text-[25px]">{date.getDate()}</span>
                            {isSelectedDate(date) && (
                                <div className="h-1 w-8 bg-[#2EE25E] rounded-full  border border-[#FAF9F6]"></div>
                            )}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10rounded-full p-1 focus:outline-none"
                    aria-label="Scroll right"
                >
                    <IoIosArrowForward color='#000000' size={25} />
                </button>
            </div>
        </div>
    );
};

export default ChooseDatePicker;