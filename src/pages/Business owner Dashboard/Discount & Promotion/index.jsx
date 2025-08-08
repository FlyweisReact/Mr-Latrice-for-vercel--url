import React from 'react'
import { useState } from "react";
import { AddaMember } from "../../../components/Modals/Modal";
import { IoMdInformationCircle } from "react-icons/io";


import ProfessionalCouponCard from './ProfessionalCouponCard';
import LatriceCouponCard from './LatriceCouponCard';
import BusinessOwnerDashboardLayout from '../../../components/DashbaordLayout/Business Owner';



const BussinessDiscountPromotion = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('By Latrice');

    const [radius, setRadius] = useState(17);

    const handleRadiusChange = (e) => {
        const value = e.target.value;
        setRadius(value);
        e.target.style.setProperty('--fill-percent', `${value}%`);
    };

    return (
        <BusinessOwnerDashboardLayout title="Discount & Promotion"
        gpnumber="8"
            titleAction={
                <div className="slider-wrapper22">
                    <input
                        type="range"
                        min="1"
                        max="100"
                        value={radius}
                        onChange={handleRadiusChange}
                        className="slider22"
                        style={{ '--fill-percent': `${radius}%` }}
                    />
                </div>
            }
        >
            <AddaMember
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
            <div className="">
                <div className='flex items-center justify-between flex-wrap sm:gap-0 gap-5 mb-4'>
                    <div className="flex bg-[#D9D9D9] rounded-[34px] overflow-hidden px-1 py-0.5">
                        <button
                            className={` px-7 sm:text-[20px] text-[18px] font-[600] font-rasa rounded-[34px]   ${activeTab === 'By Latrice' ? 'bg-white text-[#000000]' : 'text-[#00000080]'
                                }`}
                            onClick={() => setActiveTab('By Latrice')}
                        >
                            By Latrice
                        </button>
                        <button
                            className={`px-7 sm:text-[20px] text-[18px] font-[600] font-rasa rounded-[34px]  ${activeTab === 'By Professional' ? 'bg-white text-[#000000]' : 'text-[#00000080]'
                                }`}
                            onClick={() => setActiveTab('By Professional')}
                        >
                            By Professional
                        </button>
                    </div>
                    {activeTab === 'By Professional' && (
                        <select name="" id="" className='sm:w-[268px] w-full py-2 px-3.5 bg-white shadow-[0px_0px_4px_0px_#00000040] rounded-[17px] font-[400] font-rasa sm:tex-[20px] text-[15px] text-charcoal outline-none'>
                            <option value="">Sort By</option>
                            <option value="">1 mile away</option>
                            <option value="">5 miles away</option>
                            <option value="">10 miles away</option>
                            <option value="">20 miles away</option>
                            <option value="">40 miles away</option>
                            <option value="">80 miles away</option>
                            <option value="">100 miles away</option>
                            <option value="">100+ miles away</option>
                        </select>
                    )}
                </div>




                {activeTab === 'By Latrice' &&
                    <LatriceCouponCard />
                }
                {activeTab === 'By Professional' &&
                    <ProfessionalCouponCard />
                }
            </div>

        </BusinessOwnerDashboardLayout >
    )
}

export default BussinessDiscountPromotion