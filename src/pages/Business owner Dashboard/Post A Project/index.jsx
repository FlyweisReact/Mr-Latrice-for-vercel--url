import { useState } from "react";
import { AddDateTimeModal, AddSelectTargetModal, AddServiceDetailsModal, AddServiceModal, AddSuccessModal, AddValidationModal, IndependentPostAProject } from "../../../components/Modals/Modal";
import img from '../../../assets/images/dashboard/img2.png'
import { useNavigate } from "react-router-dom";
import BusinessOwnerDashboardLayout from "../../../components/DashbaordLayout/Business Owner";

export default function BusinessPostProject() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isModalOpen1, setModalOpen1] = useState(false);
    const [isModalOpen2, setModalOpen2] = useState(false);
    const [isModalOpen3, setModalOpen3] = useState(false);
    const [isModalOpen4, setModalOpen4] = useState(false);
    const [isModalOpen5, setModalOpen5] = useState(false);
    const [isModalOpen6, setModalOpen6] = useState(false);

    const navigate = useNavigate();

    const handleStapfirst = () => {
        setModalOpen(false)
        setModalOpen1(true)
    }
    const handleBackStapfirst = () => {
        setModalOpen(true)
        setModalOpen1(false)
    }
    const handleStapSecond = () => {
        setModalOpen1(false)
        setModalOpen2(true)
    }
    const handleBackStapsecond = () => {
        setModalOpen1(true)
        setModalOpen2(false)
        setModalOpen5(false)
    }
    const handleStapThird = () => {
        setModalOpen2(false)
        setModalOpen3(true)
    }
    const handleBackStapThird = () => {
        setModalOpen2(true)
        setModalOpen3(false)
        setModalOpen5(false)
    }

    const handleStapForth = () => {
        setModalOpen3(false)
        setModalOpen4(true)
    }

    const handleBackStapForth = () => {
        setModalOpen3(true)
        setModalOpen4(false)
        setModalOpen5(false)
    }
    const handleStapFivth = () => {
        setModalOpen4(false)
        setModalOpen5(true)
    }

    const handleBackStapFivth = () => {
        setModalOpen4(true)
        setModalOpen5(false)
    }
    const handleStapSixed = () => {
        setModalOpen5(false)
        setModalOpen6(true)
    }



    return (
        <BusinessOwnerDashboardLayout title="Post A Project"
            headerAction={
                <button className="bg-primary text-[20px] text-[#FAF9F6] px-8 py-2 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] font-[700] font-sansation"
                    onClick={() => navigate('/business-owner/dashboard/basket')}
                >
                    Check Basket
                </button>
            }
        >
            <IndependentPostAProject
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                handleStapfirst={handleStapfirst}
            />
            <AddServiceModal
                isOpen={isModalOpen1}
                onClose={() => setModalOpen1(false)}
                handleBackStapfirst={handleBackStapfirst}
                handleStapSecond={handleStapSecond}
            />
            <AddServiceDetailsModal
                isOpen={isModalOpen2}
                onClose={() => setModalOpen2(false)}
                handleStapThird={handleStapThird}
                handleBackStapsecond={handleBackStapsecond}
            />
            <AddDateTimeModal
                isOpen={isModalOpen3}
                onClose={() => setModalOpen3(false)}
                handleStapForth={handleStapForth}
                handleBackStapThird={handleBackStapThird}
            />
            <AddSelectTargetModal
                isOpen={isModalOpen4}
                onClose={() => setModalOpen4(false)}
                handleStapFivth={handleStapFivth}
                handleBackStapForth={handleBackStapForth}
            />
            <AddValidationModal
                isOpen={isModalOpen5}
                onClose={() => setModalOpen5(false)}
                handleStapSixed={handleStapSixed}
                handleBackStapFivth={handleBackStapFivth}
                handleBackStapsecond={handleBackStapsecond}
                handleBackStapThird={handleBackStapThird}
                handleBackStapForth={handleBackStapForth}
            />
            <AddSuccessModal
                isOpen={isModalOpen6}
                onClose={() => setModalOpen6(false)}
                handleStapSecond={handleStapSecond}
                handleBackStapFivth={handleBackStapFivth}
            />
            <div className="flex flex-col items-center text-center px-4 py-6">
                <div className="mb-4">
                    <img src={img} alt="Barber tools illustration" className="w-full max-w-xs mx-auto" />
                </div>
                <p className="text-charcoal sm:text-[20px] text-[15px] font-[500] leading-relaxed max-w-md font-rasa">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <div className="mt-6 flex justify-center">
                    <button className="bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-4 py-3 sm:w-[400px] rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                        onClick={() => setModalOpen(true)}
                    >
                        Post A Project
                    </button>
                </div>
            </div>

        </BusinessOwnerDashboardLayout>
    );
}