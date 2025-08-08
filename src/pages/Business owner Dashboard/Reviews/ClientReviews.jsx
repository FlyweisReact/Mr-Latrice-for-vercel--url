import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { BsFlagFill } from "react-icons/bs";

import img from "../../../assets/images/dashboard/img22.jpg";

import img1 from '../../../assets/images/dashboard/img23.jpg'

const ClientReviews = () => {
    const [activeTab, setActiveTab] = useState('Areas of Growth');

    const positiveTags = [
        "Excellent Service (5)",
        "Talented Stylist (57)",
        "Very Professional/Focused (6)",
        "Clean Location (46)",
        "Fast/Respected Service Time (35)",
        "Welcoming Throughout The Session (56)",
        "Pays Attention To Customer Needs (67)",
        "Welcoming Throughout The Session (56)",
        "Punctual Start (67)",
        "Highly Recommended (72)",
        "Service Done As Desired (34)",
        "Pays Attention To Customer Needs (67)",
        "Pays Attention To Customer Needs (67)"
    ];

    const reviews = [
        {
            id: 1,
            salonName: "Sexy Braids Salon",
            stylist: "Emily",
            service: "Micro Box Braids",
            date: "2025-01-18",
            postedDate: "March 15,2025",
            rating: 5,
            review:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
            image: img
        },
        {
            id: 2,
            salonName: "Omar Vaccaro Salon",
            stylist: "Emily",
            service: "Micro Box Braids",
            date: "2025-01-18",
            postedDate: "March 15,2025",
            rating: 5,
            review:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
            image: img1
        },
    ];


    return (
        <div className=" w-full">
            {/* Header */}

            <div className="border border-[#2F2F2F33] bg-[#FFFFFF] rounded-[10px] px-5 py-4 mb-4">
                <div className="mb-4 flex  items-center justify-between">
                    <h2 className="font-[800] sm:text-[20px] text-[15px] text-charcoal font-sansation">Omar Vaccaro’s Reviews</h2>
                    <div className="flex items-center mt-1">
                        <IoIosStar className="text-[#2F2F2F] text-xl" />
                        <span className="font-[800] sm:text-[20px] text-[18px] text-charcoal font-outfit">5.0</span>
                        <span className="font-[600] sm:text-[15px] text-[12px] text-[#2F2F2F80] font-outfit ml-1">(417)</span>
                    </div>
                </div>
                {/* Star Bar */}
                <div className="space-y-3">
                    {[
                        { stars: 5, percent: "98%" },
                        { stars: 4, percent: "0%" },
                        { stars: 3, percent: "<1%" },
                        { stars: 2, percent: "2%" },
                        { stars: 1, percent: "0%" },
                    ].map(({ stars, percent }, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <span className="w-4 font-[700] sm:text-[18px] text-[15px] text-charcoal font-sansation">
                                    {stars}
                                </span>
                                <IoIosStar className="text-[#2F2F2FCC] text-lg" />
                            </div>

                            <div className="flex-grow h-2 bg-[#D9D9D9] rounded-full">
                                <div
                                    className="h-2 bg-[#123E41] rounded-full"
                                    style={{ width: percent }}
                                ></div>
                            </div>
                            <span className="font-[600] sm:text-[17px] text-[15px] text-charcoal font-sansation">{percent}</span>
                        </div>
                    ))}
                </div>
            </div>


            {/* Tags */}
            <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                    <div
                        className={`px-2 py-2 sm:text-[20px] text-[18px] font-[600] font-rasa rounded-[10px] flex items-center justify-center  cursor-pointer  ${activeTab === 'What Clients Love' ? 'bg-[#123E41] text-[#FAF9F6] border border-[#FAF9F6]' : 'text-[#2F2F2F]'
                            }`}
                        onClick={() => setActiveTab('What Clients Love')}
                    >

                        What Clients Love
                    </div>
                    {/* <div
                        className={`px-3 py-2  sm:text-[20px] text-[18px] font-[500] font-rasa rounded-[10px] flex items-center justify-center cursor-pointer  ${activeTab === 'Areas of Growth' ? 'bg-[#EB0303] text-[#FAF9F6]' : 'text-[#2F2F2F]'
                            }`}
                        onClick={() => setActiveTab('Areas of Growth')}
                    >

                        Areas of Growth
                    </div> */}
                </div>
                {activeTab === "What Clients Love" ?
                    (
                        <div className="flex flex-wrap gap-2 mt-3">
                            {positiveTags.map((tag, index) => (
                                <div className="flex items-center" key={index}>
                                    <span className="bg-blue-100 text-[#197BD8] px-2 py-1 sm:text-[16px] text-[14px] font-[600] font-rasa">
                                        {tag}
                                    </span>
                                    {index !== positiveTags.length - 1 && (
                                        <span className="sm:text-[16px] text-[14px] font-[600] font-rasa ml-1">,</span>
                                    )}
                                </div>
                            ))}
                        </div>

                    ) : (
                        <div className="space-y-2 mt-3">
                            {/* Tag Labels with Background */}
                            <div className="flex flex-wrap gap-2">
                                <div className="flex items-end">
                                    <span className="bg-green-100 text-[#34A853] px-2 py-1 sm:text-[18px] text-[15px] font-[600] font-rasa">
                                        Exceeded The Indicated Service Time (1/10)
                                    </span>
                                    <span className="sm:text-[18px] text-[15px] font-[600] font-rasa ml-1">,</span>
                                </div>
                                <div className="flex items-end">
                                    <span className="bg-yellow-100 text-[#FA9316] px-2 py-1 sm:text-[18px] text-[15px] font-[600] font-rasa">
                                        Noisy & Disturbed Environment (6/10)
                                    </span>
                                    <span className="sm:text-[18px] text-[15px] font-[600] font-rasa ml-1">,</span>
                                </div>
                                <div className="flex items-end">
                                    <span className="bg-red-100 text-[#EB0303] px-2 py-1 sm:text-[18px] text-[15px] font-[600] font-rasa">
                                        Not Attentive To Customers Needs (10+)
                                    </span>
                                    <span className="sm:text-[18px] text-[15px] font-[600] font-rasa ml-1">,</span>
                                </div>
                                <div className="flex items-end">
                                    <span className="bg-red-100 text-[#EB0303] px-2 py-1 sm:text-[18px] text-[15px] font-[600] font-rasa">
                                        Constantly Stopped Service (10/10)
                                    </span>
                                </div>
                            </div>

                            {/* Legend */}
                            <div className="space-y-1 text-xs font-medium">
                                <div className="flex items-center gap-2 sm:text-[18px] text-[15px] font-[600] font-rasa text-charcoal">
                                    <FaCircle size={20} color="#34A853" />
                                    1-3 times (Low Concern)
                                </div>
                                <div className="flex items-center gap-2 sm:text-[18px] text-[15px] font-[600] font-rasa text-charcoal">
                                    <FaCircle size={20} color="#FFD703" />
                                    4–9 times (Moderate Concern)
                                </div>
                                <div className="flex items-center gap-2 sm:text-[18px] text-[15px] font-[600] font-rasa text-charcoal">
                                    <FaCircle size={20} color="#EB0303" />
                                    10+ times (Public Display Triggered)
                                </div>
                            </div>
                        </div>
                    )}
            </div>

            {/* Review Card */}
            <div className="space-y-3  bg-[#FFFCF5]">
                {reviews.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white border border-[#2F2F2F33] rounded-[10px]  p-4 flex flex-col sm:flex-row items-start justify-between"
                    >
                        <div className="flex gap-3 w-full">
                            {/* Image */}
                            <img
                                src={item.image}
                                alt="profile"
                                className="w-15 h-39 object-cover rounded-full"
                            />

                            <div className="flex flex-col">
                                {/* Title & Stars */}
                                <div className="flex items-center gap-1.5">
                                    <span className="font-[700] sm:text-[14px] text-[12px] text-[#121111] font-outfit">{item.salonName}</span>
                                    <div className="flex items-center text-[#FFCC4E] text-md">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <IoIosStar key={i} />
                                        ))}
                                    </div>
                                </div>

                                {/* Service Name */}
                                <span className="font-[500] sm:text-[14px] text-[12px] text-[#121111] font-outfit mt-1">
                                    {item.service}, by {item.stylist}
                                </span>

                                {/* Service Date */}
                                <span className="font-[500] sm:text-[12px] text-[10px] text-[#121111] font-outfit mt-1">
                                    Service date: {item.date}
                                </span>

                                {/* Review Text */}
                                <p className="font-[400] sm:text-[14px] text-[12px] text-[#757575] font-outfit mt-5">{item.review}</p>
                                <div className="flex items-center justify-end mt-3 gap-2">
                                    <button className="bg-[#FFCC4E] px-2.5 py-0.5 rounded-[6px] font-[500] sm:text-[14px] text-[12px] text-[#000000]">Reply</button>
                                    <button className="bg-[#EB0303] flex items-center gap-2 px-2.5 py-0.5 rounded-[6px] font-[500] sm:text-[14px] text-[12px] text-[#FFFFFF]">
                                        <BsFlagFill />
                                        Report
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Posted Date */}
                        <div className="font-[700] sm:text-[14px] text-[12px] text-[#121111] font-outfit mt-4 sm:mt-0 text-right">
                            {item.postedDate}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default ClientReviews;
