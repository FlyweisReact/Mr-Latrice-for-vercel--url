import React from 'react'
import { useState } from "react";
import { AddaMember } from "../../../components/Modals/Modal";
import { IoMdInformationCircle } from "react-icons/io";


import ProfessionalCouponCard from './ProfessionalCouponCard';
import LatriceCouponCard from './LatriceCouponCard';
import ClientDashboardLayout from '../../../components/DashbaordLayout/Client Dashbaord';



const DiscountPromotion = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('By Latrice');



    return (
        <ClientDashboardLayout title="Discount & Promotion"
            gpnumber='2'
            titleAction={
                <div className="flex gap-5">
                    <IoMdInformationCircle color="#2F2F2F" size={30} />

                    <div className="flex w-full bg-[#D9D9D9] rounded-[34px] overflow-hidden px-1 py-0.5 max-w-xl">
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
                </div>
            }
            headerAction={
                activeTab === 'By Professional' && (
                    <select name="" id="" className='w-[268px] py-2 px-3.5 bg-white shadow-[0px_0px_4px_0px_#00000040] rounded-[17px] font-[400] font-rasa sm:tex-[20px] text-[15px] text-charcoal outline-none'>
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
                )
            }
       > 
            <AddaMember
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
            <div className="flex mt-5">
                {activeTab === 'By Latrice' &&
                    <LatriceCouponCard />
                }
                {activeTab === 'By Professional' &&
                    <ProfessionalCouponCard />
                }
            </div>

        </ClientDashboardLayout >
    )
}

export default DiscountPromotion