import React from 'react'
import { useState } from "react";
import { AddaMember, AddManager, DeleteManagerModal } from "../../../components/Modals/Modal";
import img from '../../../assets/images/dashboard/img65.png'
import ManagerCards from './ManagerCards';
import BusinessOwnerDashboardLayout from '../../../components/DashbaordLayout/Business Owner';

const Manager = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isModalOpen1, setModalOpen1] = useState(false);
    const [isfamilycard, setFamilyCard] = useState(false);

    const handleshowfamilycard = () => {
        setModalOpen(false)
        setFamilyCard(true)
    }

    const handlehidefamilycard = () => {
        setModalOpen1(false)
        setFamilyCard(false)
    }



    return (
        <BusinessOwnerDashboardLayout title="Manager"
            headerAction={
                isfamilycard && (
                    <button
                        className="bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-6 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                        onClick={() => setModalOpen(true)}
                    >
                        Add Manager
                    </button>
                )
            }
        >
            <AddManager
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                handleshowfamilycard={handleshowfamilycard}
            />

            <DeleteManagerModal
                isOpen={isModalOpen1}
                onClose={() => setModalOpen1(false)}
                handleshowfamilycard={handleshowfamilycard}
                handlehidefamilycard={handlehidefamilycard}
            />

            {isfamilycard ?
                <div className="flex mt-2">
                    <ManagerCards setModalOpen={setModalOpen} setModalOpen1={setModalOpen1} />
                </div>
                :
                <div className="flex flex-col items-center text-center px-4 py-6">
                    <div className="mb-4">
                        <img src={img} alt="Barber tools illustration" className="w-full max-w-xs mx-auto" />
                    </div>
                    {/* <h6 className='font-[500] text-[40px] text-charcoal font-rasa'>Add Your Family & Friends</h6> */}
                    <p className="text-charcoal sm:text-[20px] text-[15px] font-[500] leading-relaxed max-w-md font-rasa">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                    <div className="mt-6 flex justify-center">
                        <button className="bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-4 py-3 sm:w-[400px] rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                            onClick={() => setModalOpen(true)}
                        >
                            Add A Manager
                        </button>
                    </div>
                </div>
            }
        </BusinessOwnerDashboardLayout>
    )
}

export default Manager