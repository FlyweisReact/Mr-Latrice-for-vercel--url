import React, { useState } from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";

import img from '../../../assets/images/dashboard/img37.png'


const coupons = [
    {
        title: "Welcome Bonus",
        discount: "$ 15 off",
        description: "Get $15 off your first booking (min. $50).",
        expDate: "07/07/2025",
        icon: img, // your imported icon image
    },
    {
        title: "Referral Reward",
        discount: "$ 20 off",
        description: "Invite a friend, you both get $20 off your next service.",
        expDate: "07/07/2025",
        icon: img,
    },
    {
        title: "Review & Save",
        discount: "$ 10 off",
        description: "Leave a review after your appointment get $10 credit.",
        expDate: "07/07/2025",
        icon: img,
    },
    {
        title: "Milestone Reword",
        discount: "50% off",
        description: "Book 5 services within 90 days, Earn 50% off Save $25 total.",
        expDate: "07/07/2025",
        icon: img,
    },
    {
        title: "Bundle Saver",
        discount: "Save $ 25",
        description: "Book 3 services at once (within 30 days) save $25 total.",
        expDate: "07/07/2025",
        icon: img,
    },
    {
        title: "Seasonal Specials",
        discount: "$ 100 off",
        description: "$100 off service over $250 (valid until 07/07/2025). Code: 1223 456 789",
        expDate: "07/07/2025",
        icon: img,
    },
];


const incentives = [
    {
        title: "High-Volume Payouts",
        discount: "$ 50",
        description: "60 bookings in 14 days",
        expDate: "07/07/2025",
        icon: img,
    },
    {
        title: "High-Volume Payouts",
        discount: "$ 300",
        description: "190 bookings in 14 days",
        expDate: "07/07/2025",
        icon: img,
    },
    {
        title: "Staff Engagement Bonus",
        discount: "$ 100",
        description: "All staff hit 10+ bookings each in a week",
        expDate: "07/07/2025",
        icon: img,
    },
    {
        title: "Consistent Calendar Challenge",
        discount: "$ 40",
        description: "Keep calendar fully updated for 30 days",
        expDate: "07/07/2025",
        icon: img,
    },
    {
        title: "Team Ratings Reward",
        discount: "$ 200",
        description: "Entire staff maintains 4.5+ rating for a month",
        expDate: "07/07/2025",
        icon: img,
    },
    {
        title: "Off-Peak Incentive",
        discount: "$ 60",
        description: "Fill 20+ slots in weekday morning or off-hours",
        expDate: "07/07/2025",
        icon: img,
    },
];



const LatriceCouponCard = () => {
    const [isaccept, setIsAccept] = useState(false)
    return (
        <div className='space-y-4'>
            <div>
                <h6 className='font-rasa font-[600] text-[#2F2F2F] sm:text-[28px] text-[25px] mb-2'>General Offers</h6>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {coupons.map((coupon, index) => (
                        <div key={index} className="relative p-1 flex flex-col md:flex-row rounded-[8px] overflow-hidden w-full max-w-sm bg-[#FBFBFB] shadow-[0px_0px_4px_0px_#00000040]">
                            <div className="absolute -left-6 top-18 z-10">
                                <div className="w-15 h-15 bg-[#FAF9F6] rounded-full"></div>
                            </div>
                            <div className="absolute -right-6 top-18 z-10">
                                <div className="w-15 h-15 bg-[#FAF9F6] rounded-full"></div>
                            </div>
                            {/* Left side */}
                            <div className="py-1 pl-10 flex-grow">
                                <h2 className="font-rasa font-[600] text-[#000000] sm:text-[28px] text-[25px] m-0">{coupon.title}</h2>
                                <p className="font-rasa font-[600] text-[#000000] sm:text-[40px] text-[35px] m-0">{coupon.discount}</p>
                                <p className="font-rasa font-[500] text-[#000000] sm:text-[16px] text-[14px]">{coupon.description}</p>
                                <p className="font-rasa font-[500] text-[#000000] sm:text-[16px] text-[14px] mt-5">Exp Date: {coupon.expDate}</p>
                            </div>

                            {/* Right side */}
                            <div className="relative text-center border-l-2 border-dashed border-[#66666633] p-3 flex flex-col items-center justify-center">
                                <button className="absolute top-2 right-2 text-[#2F2F2F] hover:text-red-200">
                                    <RiDeleteBin6Fill size={20} />
                                </button>
                                <img src={img} alt="" className='w-15 h-15 object-fill mr-5' />
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-5 flex items-center justify-center'>
                    <button className='w-full max-w-sm bg-[#FFE6D8] text-[#FF827F] font-sansation  font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]'>
                        Load More...
                    </button>
                </div>
            </div>


            <div >
                <h6 className='font-rasa font-[600] text-[#2F2F2F] sm:text-[28px] text-[25px] mb-2'>Business Offers</h6>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {incentives.map((coupon, index) => (
                        <div key={index} className="relative p-1 flex flex-col md:flex-row rounded-[8px] overflow-hidden w-full max-w-sm bg-[#FBFBFB] shadow-[0px_0px_4px_0px_#00000040]">
                            <div className="absolute -left-6 top-18 z-10">
                                <div className="w-15 h-15 bg-[#FAF9F6] rounded-full"></div>
                            </div>
                            <div className="absolute -right-6 top-18 z-10">
                                <div className="w-15 h-15 bg-[#FAF9F6] rounded-full"></div>
                            </div>
                            {/* Left side */}
                            <div className="py-1 pl-10 pr-2 pb-2 flex-grow">
                                <h2 className="font-rasa font-[600] text-[#000000] sm:text-[28px] text-[25px] m-0">{coupon.title}</h2>
                                <p className="font-rasa font-[600] text-[#000000] sm:text-[40px] text-[35px] m-0">{coupon.discount}</p>
                                <p className="font-rasa font-[500] text-[#000000] sm:text-[16px] text-[14px]">{coupon.description}</p>
                                <button className={`w-full font-semibold sm:text-[16px] text-[12px] px-5 py-1.5 rounded-[6px] shadow-[0px_4px_4px_0px_#00000040] transition mt-2
                ${isaccept ? 'bg-[#96FFB2] text-[#009900]' : 'bg-[#FFE6D8] text-[#FF827F]'}
                `}
                                    onClick={() => setIsAccept(!isaccept)}
                                >
                                    {isaccept ? "Accepted" : "Accept"}
                                </button>
                            </div>

                            {/* Right side */}
                            <div className="relative text-center border-l-2 border-dashed border-[#66666633] p-3 flex flex-col items-center justify-center">
                                <button className="absolute top-2 right-2 text-[#2F2F2F] hover:text-red-200">
                                    <RiDeleteBin6Fill size={20} />
                                </button>
                                <img src={img} alt="" className='w-15 h-15 object-fill mr-5' />
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-5 flex items-center justify-center'>
                    <button className='w-full max-w-sm bg-[#FFE6D8] text-[#FF827F] font-sansation  font-[700] text-lg px-2 py-4  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]'>
                        Load More...
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LatriceCouponCard;
