import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FullyBookedWarningModal, FullyBookedRequestFormModal, FullyBookedRequestFormSuccesModal } from '../Modals/Modal';
import { FaCircle } from "react-icons/fa6";
import { FaConciergeBell } from "react-icons/fa";


const TimePicker = ({ selectedTime, onSelectTime }) => {
    const [timeSlots, setTimeSlots] = useState([]);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        generateTimeSlots();
    }, []);

    const generateTimeSlots = () => {
        const slots = [];
        const startTime = new Date();
        startTime.setHours(8, 0, 0, 0); // Start at 8:00 AM

        const endTime = new Date();
        endTime.setHours(20, 0, 0, 0); // End at 8:00 PM

        const timeSlotDuration = 15; // 15 minutes

        let currentTime = new Date(startTime);

        while (currentTime <= endTime) {
            slots.push(formatTime(currentTime));
            currentTime.setMinutes(currentTime.getMinutes() + timeSlotDuration);
        }

        setTimeSlots(slots);
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
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
            <p className="text-center text-charcoal mb-4">Select A Start Time</p>

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
                    {timeSlots.map((time, index) => (
                        <button
                            type="button"
                            key={index}
                            className={`
                        flex-shrink-0 py-2 px-4 rounded-lg focus:outline-none transition-all font-rasa font-[700]  text-[20px]
                        ${selectedTime === time
                                    ? 'bg-[#FF827F] text-white'
                                    : 'bg-red-200 text-charcoal'}
                      `}
                            onClick={() => onSelectTime(time)}
                        >
                            {time}
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



const TimePicker1 = ({ selectedTime, onSelectTime }) => {
    const [timeSlots, setTimeSlots] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isModalOpen1, setModalOpen1] = useState(false);
    const [isModalOpen2, setModalOpen2] = useState(false);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        generateTimeSlots();
    }, []);

    const generateTimeSlots = () => {
        const slots = [];
        const startTime = new Date();
        startTime.setHours(8, 0, 0, 0); // 8:00 AM

        const endTime = new Date();
        endTime.setHours(20, 0, 0, 0); // 8:00 PM

        const now = new Date();
        const timeSlotDuration = 15; // 15 minutes
        let currentTime = new Date(startTime);

        while (currentTime <= endTime) {
            slots.push({
                time: formatTime(currentTime),
                disabled: currentTime < now
            });
            currentTime.setMinutes(currentTime.getMinutes() + timeSlotDuration);
        }

        setTimeSlots(slots);
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    };


    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (!container) return;
        const scrollAmount = container.clientWidth / 2;
        container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    };

    const handleopensecondmodal = () => {
        setModalOpen(false);
        setModalOpen1(true)
    }

    const handleopenthirdmodal = () => {
        setModalOpen1(false);
        setModalOpen2(true)
    }

    return (
        <>
            <FullyBookedWarningModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                handleopensecondmodal={handleopensecondmodal}
            />
            <FullyBookedRequestFormModal
                isOpen={isModalOpen1}
                onClose={() => setModalOpen1(false)}
                handleopenthirdmodal={handleopenthirdmodal}
            />
            <FullyBookedRequestFormSuccesModal
                isOpen={isModalOpen2}
                onClose={() => setModalOpen2(false)}
            />
            <div className="w-full">
                <div className="relative">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-1 focus:outline-none"
                        aria-label="Scroll left"
                    >
                        <IoIosArrowBack color="#000000" size={25} />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto py-2 gap-2 no-scrollbar w-[90%] m-auto"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {timeSlots.map(({ time, disabled }, index) => (
                            <div
                                key={index}
                                className={`
            flex-shrink-0 py-1 px-4 rounded-[6px] transition-all font-rasa font-[700] text-[20px]
            flex items-center justify-center border cursor-pointer
            ${disabled
                                        ? 'border-[#014F86] text-[#014F86] bg-[#FAF9F6] opacity-40'
                                        : selectedTime === time
                                            ? 'bg-[#014F86] text-[#FAF9F6]'
                                            : 'border-[#014F86] text-[#014F86] bg-[#FAF9F6]'
                                    }
        `}
                                onClick={() => {
                                    if (disabled) {
                                        setModalOpen(true);
                                    } else {
                                        onSelectTime(time);
                                    }
                                }}
                            >
                                {time}
                            </div>
                        ))}

                    </div>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-1 focus:outline-none"
                        aria-label="Scroll right"
                    >
                        <IoIosArrowForward color="#000000" size={25} />
                    </button>
                </div>
            </div>
        </>
    );
};



const TimeSlotSelector = () => {
    const [selected, setSelected] = useState("Morning");

    const timeSlots = ["Morning", "Afternoon", "Evening"];

    return (
        <div className="flex items-center gap-4 px-5">
            {timeSlots.map((slot) => (
                <div
                    key={slot}
                    onClick={() => setSelected(slot)}
                    className={`p-1 rounded-[10px] w-full 
        ${selected === slot
                            ? "border-2 border-[#014F86] border-dashed"
                            : "border-2 border-[#2F2F2F80] bg-[#FAF9F6]"
                        }`}
                >
                    <div
                        className={` cursor-pointer px-5 py-1 rounded-[6px] font-[600] transition-all duration-200 font-rasa sm:text-[18px] text-[15px] flex items-center justify-center
          ${selected === slot
                                ? "bg-[#014F86] text-[#FAF9F6]"
                                : "bg-[#FFFFFF] text-charcoal border border-[#2F2F2F80]"
                            }`}
                    >
                        {slot}
                    </div>
                </div>
            ))}
        </div>

    );
};

const ChairSelector = () => {
    const [selected, setSelected] = useState("Any");

    const timeSlots = ["Any", "Availability"];

    return (
        <div className="flex gap-4 justify-start">
            {timeSlots.map((slot) => (
                <div
                    key={slot}
                    onClick={() => setSelected(slot)}
                    className={`p-1 rounded-[10px] 
        ${selected === slot
                            ? "border-2 border-[#014F86] border-dashed"
                            : "border-2 border-[#2F2F2F80] bg-[#FAF9F6]"
                        }`}
                >
                    <div
                        className={` cursor-pointer px-5 py-1 rounded-[6px] font-[600] transition-all duration-200 font-rasa sm:text-[18px] text-[15px]
          ${selected === slot
                                ? "bg-[#014F86] text-[#FAF9F6]"
                                : "bg-[#FFFFFF] text-charcoal border border-[#2F2F2F80]"
                            }`}
                    >
                        {slot}
                    </div>
                </div>
            ))}
        </div>

    );
};

const TimePickerForModal = ({ selectedTime, onSelectTime }) => {
    const [timeSlots, setTimeSlots] = useState([]);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        generateTimeSlots();
    }, []);

    const generateTimeSlots = () => {
        const slots = [];
        const startTime = new Date();
        startTime.setHours(8, 0, 0, 0); // Start at 8:00 AM

        const endTime = new Date();
        endTime.setHours(20, 0, 0, 0); // End at 8:00 PM

        const timeSlotDuration = 15; // 15 minutes

        let currentTime = new Date(startTime);

        while (currentTime <= endTime) {
            slots.push(formatTime(currentTime));
            currentTime.setMinutes(currentTime.getMinutes() + timeSlotDuration);
        }

        setTimeSlots(slots);
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
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
                    {timeSlots.map((time, index) => (
                        <div
                            type="button"
                            key={index}
                            className={`
                        flex-shrink-0 py-2 px-4 rounded-lg focus:outline-none transition-all font-rasa font-[700]  text-[20px] cursor-pointer
                        ${selectedTime === time
                                    ? 'bg-[#FF827F] text-white'
                                    : 'border border-[#2F2F2F] bg-[#FAF9F6] text-charcoal'}
                      `}
                            onClick={() => onSelectTime(time)}
                        >
                            {time}
                        </div>

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


const TimePicker2 = ({ selectedTime, onSelectTime }) => {
    const [timeSlots, setTimeSlots] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isModalOpen1, setModalOpen1] = useState(false);
    const [isModalOpen2, setModalOpen2] = useState(false);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        generateTimeSlots();
    }, []);

    const generateTimeSlots = () => {
        const slots = [];
        const startTime = new Date();
        startTime.setHours(8, 0, 0, 0); // 8:00 AM

        const endTime = new Date();
        endTime.setHours(20, 0, 0, 0); // 8:00 PM

        const now = new Date();
        const timeSlotDuration = 15; // 15 minutes
        let currentTime = new Date(startTime);

        while (currentTime <= endTime) {
            slots.push({
                time: formatTime(currentTime),
                disabled: currentTime < now,
                notify: false,
            });
            currentTime.setMinutes(currentTime.getMinutes() + timeSlotDuration);
        }

        // Push a special Notify slot at the end
        slots.push({
            time: 'Notify',
            disabled: false,
            notify: true
        });

        setTimeSlots(slots);
    };


    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    };


    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (!container) return;
        const scrollAmount = container.clientWidth / 2;
        container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    };

    const handleopensecondmodal = () => {
        setModalOpen(false);
        setModalOpen1(true)
    }

    const handleopenthirdmodal = () => {
        setModalOpen(false);
        setModalOpen2(true)
    }

    return (
        <>
            <FullyBookedRequestFormModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                handleopenthirdmodal={handleopenthirdmodal} />
            <FullyBookedRequestFormModal
                isOpen={isModalOpen1}
                onClose={() => setModalOpen1(false)}
                handleopenthirdmodal={handleopenthirdmodal}
            />
            <FullyBookedRequestFormSuccesModal
                isOpen={isModalOpen2}
                onClose={() => setModalOpen2(false)}
            />
            <div className="w-full">
                <div className="relative">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-1 focus:outline-none"
                        aria-label="Scroll left"
                    >
                        <IoIosArrowBack color="#000000" size={25} />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto py-2 gap-2 no-scrollbar w-[90%] m-auto"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {timeSlots.map(({ time, disabled, notify }, index) => (
                            <div key={index} className='flex flex-col items-center flex-shrink-0'>
                                <div
                                    className={`
                py-1 px-4 rounded-[6px] transition-all font-rasa font-[700] text-[20px]
                flex items-center justify-center border cursor-pointer gap-2
                ${disabled
                                            ? 'border-[#014F86] text-[#014F86] bg-[#FAF9F6] opacity-40 line-through'
                                            : selectedTime === time
                                                ? 'bg-[#014F86] text-[#FAF9F6]'
                                                : 'border-[#014F86] text-[#014F86] bg-[#FAF9F6]'}
            `}
                                    onClick={() => {
                                        if (notify) {
                                            setModalOpen(true); // or handle notify logic here
                                        } else if (notify) {
                                            setModalOpen(true);
                                        } else {
                                            onSelectTime(time);
                                        }
                                    }}

                                >
                                    {notify ? (
                                        <>
                                            <FaConciergeBell className="text-[#FFCC4E]" />
                                            <span className="font-bold">Notify</span>
                                        </>
                                    ) : (
                                        time
                                    )}
                                </div>

                                {disabled && !notify && (
                                    <div className='flex items-center gap-1'>
                                        <FaCircle color='#FF0303' size={10} />
                                        <p className='font-rasa text-[#2F2F2F] font-[400] sm:text-[12px] text-[12px]'>booked</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-1 focus:outline-none"
                        aria-label="Scroll right"
                    >
                        <IoIosArrowForward color="#000000" size={25} />
                    </button>
                </div>
            </div>
        </>
    );
};


export {
    TimePicker,
    TimePicker1,
    TimeSlotSelector,
    ChairSelector,
    TimePickerForModal,
    TimePicker2
}