import React from 'react'

import img from '../../../assets/images/dashboard/img26.png'
import IndependentDashboardLayout from '../../../components/DashbaordLayout/Independent Dashbaord';

import { IoMdInformationCircle } from "react-icons/io";

const IndependentCustomerForms = () => {


    return (
        <IndependentDashboardLayout title="Customer Forms"
         gpnumber='2'
            titleAction={
                <div className="flex gap-5">
                    <IoMdInformationCircle color="#2F2F2F" size={30} />
                </div>
            }
        >


            <div className="flex flex-col items-center text-center px-4 py-6">
                <div className="mb-4">
                    <img src={img} alt="Barber tools illustration" className="w-full max-w-xs mx-auto" />
                </div>
                <h6 className='font-[500] sm:text-[30px] text-[25px] text-charcoal font-rasa'>You didn’t have any forms yet</h6>
                <p className="text-charcoal sm:text-[18px] text-[15px] font-[500] leading-relaxed text-center max-w-lg font-rasa">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </div>

        </IndependentDashboardLayout>
    )
}

export default IndependentCustomerForms