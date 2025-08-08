import React from 'react'
import { IoIosStar } from "react-icons/io";

import img from '../../../assets/images/dashboard/img22.jpg'
import img1 from '../../../assets/images/dashboard/img23.jpg'


const YourReviews = () => {
    const ratings = [
        { category: 'Punctual', rating: 5 },
        { category: 'Clean', rating: 4 },
        { category: 'Respectful', rating: 4 },
        { category: 'Adherence to booked Services', rating: 5 },
        { category: 'Clarity of communication', rating: 4 },
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
        <>
            <div className="bg-white border border-[#2F2F2F33] rounded-[10px] p-4 w-full mb-4">
                {/* Overall rating */}
                <div className="flex items-center mb-4">
                    <IoIosStar className="text-[#2F2F2F] mr-1" />
                    <span className="font-[800] sm:text-[20px] text-[18px] text-charcoal font-outfit">5.0</span>
                    <span className="font-[600] sm:text-[15px] text-[12px] text-[#2F2F2F80] font-outfit ml-1">(417)</span>
                </div>

                {/* Individual Ratings */}
                <div className="space-y-3">
                    {ratings.map((item, index) => (
                        <div key={index} className="flex items-center gap-1">
                            <span className="font-[700] sm:text-[17px] text-[15px] text-charcoal font-outfit">
                                {item.category}
                            </span>

                            {/* Star icons */}
                            <div className="flex space-x-0.5 mr-2">
                                {[...Array(item.rating)].map((_, i) => (
                                    <IoIosStar key={i} className="text-[#2F2F2FCC] text-xs" size={15} />
                                ))}
                            </div>

                            {/* Dashed line */}
                            <div className="flex-grow border-t-2 border-dashed border-[#123E41] mx-2"></div>

                            {/* Rating Score */}
                            <span className="font-[500] sm:text-[18px] text-[15px] text-charcoal font-outfit ">{item.rating}/5</span>
                        </div>
                    ))}
                </div>
            </div>
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
                            </div>
                        </div>

                        {/* Posted Date */}
                        <div className="font-[700] sm:text-[14px] text-[12px] text-[#121111] font-outfit mt-4 sm:mt-0 text-right">
                            {item.postedDate}
                        </div>
                    </div>
                ))}
            </div>
        </ >
    )
}

export default YourReviews