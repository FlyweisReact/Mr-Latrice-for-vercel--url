import React from 'react'
import { useState } from "react";
import { AddBeneficiaryDetails, AddGiftCardDateandTime, AddPaymenSuccessModal, Makepayment, ReviewandConfirm, SelectServiceModal } from "../../../components/Modals/Modal";
import img from '../../../assets/images/dashboard/img3.png'
import img1 from '../../../assets/images/dashboard/img9.jpg'
import img2 from '../../../assets/images/dashboard/img10.jpg'
import img3 from '../../../assets/images/dashboard/img11.jpg'

import GiftCardsPage from './GiftCards';
import IndependentDashboardLayout from '../../../components/DashbaordLayout/Independent Dashbaord';

const IndependentGiftCards = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isModalOpen1, setModalOpen1] = useState(false);
    const [isModalOpen2, setModalOpen2] = useState(false);
    const [isModalOpen3, setModalOpen3] = useState(false);
    const [isModalOpen4, setModalOpen4] = useState(false);
    const [isModalOpen5, setModalOpen5] = useState(false);
    const [isgiftCard, setGiftCard] = useState(false);

    const handleopenfirst = () => {
        setModalOpen(false)
        setModalOpen1(true)
    }
    const handleopensecond = () => {
        setModalOpen1(false)
        setModalOpen2(true)
    }
    const handleopengofirst = () => {
        setModalOpen2(false)
        setModalOpen(true)
    }
    const handleopenthird = () => {
        setModalOpen2(false)
        setModalOpen3(true)
    }
    const handleopenfouth = () => {
        setModalOpen3(false)
        setModalOpen4(true)
    }
    const handleopenfivth = () => {
        setModalOpen4(false)
        setModalOpen5(true)
    }

    const handlshowgiftcard = () => {
        setModalOpen5(false)
        setGiftCard(true)
    }


    return (
        <IndependentDashboardLayout title="Active Gift Cards"
            headerAction={
                isgiftCard && (
                    <button
                        className="bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-6 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                        onClick={() => setModalOpen(true)}
                    >
                        Create Gift Card
                    </button>
                )
            }
        >
            <SelectServiceModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                services={[
                    {
                        title: "Gent’s Standard",
                        booked: 1,
                        price: 57,
                        duration: "30 min",
                        description: "Professional consultation, haircut, hot lather neck shave, shampoo and conditioner",
                        rating: "5.0",
                        reviews: "252",
                        img: [
                            { img: img3 },
                        ]
                    },
                    {
                        title: "The Executive",
                        booked: 2,
                        price: 72,
                        duration: "45 min",
                        description: "Professional consultation, haircut, hot lather Neck Shave, shampoo and conditioner, Scalp massage, etc.",
                        rating: "5.0",
                        reviews: "64",
                        img: [
                            { img: img1 },
                            { img: img2 },
                        ]
                    },
                    {
                        title: "Gent’s Standard",
                        booked: 1,
                        price: 57,
                        duration: "30 min",
                        description: "Professional consultation, haircut, hot lather neck shave, shampoo and conditioner",
                        rating: "5.0",
                        reviews: "252",
                        img: [
                            { img: img3 },
                        ]
                    },
                    {
                        title: "The Executive",
                        booked: 2,
                        price: 72,
                        duration: "45 min",
                        description: "Professional consultation, haircut, hot lather Neck Shave, shampoo and conditioner, Scalp massage, etc.",
                        rating: "5.0",
                        reviews: "64",
                        img: [
                            { img: img1 },
                            { img: img2 },
                        ]
                    },
                ]}
                handleopenfirst={handleopenfirst}
            />
            <AddBeneficiaryDetails
                isOpen={isModalOpen1}
                onClose={() => setModalOpen1(false)}
                handleopensecond={handleopensecond}
            />
            <AddGiftCardDateandTime
                isOpen={isModalOpen2}
                onClose={() => setModalOpen2(false)}
                handleopengofirst={handleopengofirst}
                handleopenthird={handleopenthird}
            />
            <ReviewandConfirm
                isOpen={isModalOpen3}
                onClose={() => setModalOpen4(false)}
                handleopenfouth={handleopenfouth}
            />
            <Makepayment
                isOpen={isModalOpen4}
                onClose={() => setModalOpen4(false)}
                handleopenfivth={handleopenfivth}
            />
            <AddPaymenSuccessModal
                isOpen={isModalOpen5}
                onClose={() => setModalOpen5(false)}
                handlshowgiftcard={handlshowgiftcard}
            />

            {isgiftCard ?
                <div className="flex mt-2">
                    <GiftCardsPage />
                </div>
                :
                <div className="flex flex-col items-center text-center px-4 py-6">
                    <div className="mb-4">
                        <img src={img} alt="Barber tools illustration" className="w-full max-w-xs mx-auto" />
                    </div>
                    <h6 className='font-[500] text-[40px] text-charcoal font-rasa'>Your Gift Cards</h6>
                    <p className="text-charcoal sm:text-[20px] text-[15px] font-[500] leading-relaxed max-w-md font-rasa">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                    <div className="mt-6 flex justify-center">
                        <button className="bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-4 py-3 sm:w-[400px] rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                            onClick={() => setModalOpen(true)}
                        >
                            Create Gift Card
                        </button>
                    </div>
                </div>
            }
        </IndependentDashboardLayout>
    )
}

export default IndependentGiftCards