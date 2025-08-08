import React from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";


import img from '../../../assets/images/dashboard/img38.jpg'

const ProfessionalCouponCard = () => {
    return (
        <div className="relative flex flex-col md:flex-row rounded-tl-[20px] rounded-bl-[20px] shadow-md overflow-hidden w-full max-w-fit bg-[#FFFFFF]">
            {/* Left side */}
            <div className="p-3">
                <h2 className="font-rasa font-[500] text-[#000000] sm:text-[18px] text-[15px]">Black Friday Sale At 2025</h2>
                <div className="mt-2 space-y-3">
                    <div className='flex items-center gap-5'>
                        <div className="flex flex-col">
                            <span className="font-[700] font-rasa sm:text-[12px] text-[10px] text-[#848484]">Start Date</span>
                            <span className="font-[600] font-rasa sm:text-[12px] text-[10px] text-[#000000]">10.05.2025</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-[700] font-rasa sm:text-[12px] text-[10px] text-[#848484]">End Date</span>
                            <span className="font-[600] font-rasa sm:text-[12px] text-[10px] text-[#000000]">10.05.2025</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className="flex flex-col">
                            <span className="font-[700] font-rasa sm:text-[12px] text-[10px] text-[#848484]">No. Deal</span>
                            <span className="font-[600] font-rasa sm:text-[12px] text-[10px] text-[#000000]">01</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-[700] font-rasa sm:text-[12px] text-[10px] text-[#848484]">Price</span>
                            <span className="font-[600] font-rasa sm:text-[12px] text-[10px] text-[#000000]">$200</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-[700] font-rasa sm:text-[12px] text-[10px] text-[#848484]">Offer Price</span>
                            <span className="font-[600] font-rasa sm:text-[12px] text-[10px] text-[#000000]">$100</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-[700] font-rasa sm:text-[12px] text-[10px] text-[#848484]">Total Amount</span>
                            <span className="font-[600] font-rasa sm:text-[12px] text-[10px] text-[#FF827F]">$100</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute right-45 -top-2 z-10">
                <div className="w-5 h-5 bg-[#FAF9F6] rounded-full"></div>
            </div>

            {/* Bottom red dot - positioned at the bottom-right corner of the left side */}
            <div className="absolute right-45 -bottom-2 z-10">
                <div className="w-5 h-5 bg-[#FAF9F6] rounded-full"></div>
            </div>


            {/* Right side */}
            <div className="relative text-white p-4 md:w-48 flex flex-col items-center justify-center text-center"
                style={{
                    background: 'linear-gradient(133.17deg, #FF827F 11.59%, #123E41 41.23%, #464646 117.06%)'
                }}
            >
                <button className="absolute top-2 right-2 text-white hover:text-red-200">
                    <RiDeleteBin6Fill size={18} />
                </button>

                <div className="bg-secondary text-[#123E41] w-24 h-24 rounded-full flex items-center justify-center sm:text-[25px] text-[20px] font-[600] font-rasa mb-2">
                    <img src={img} alt="" className='w-24 h-24 rounded-full object-cover' />
                </div>

                <div className="text-xs opacity-80">Coupon Code:</div>
                <div className="font-mono font-bold text-lg tracking-wider">SCGP 5902378</div>

                {/* Perforation effect */}
                <div className="absolute -right-2 top-0 h-full w-4 flex flex-col justify-between items-center">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-[#FAF9F6] rounded-full"></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfessionalCouponCard;
