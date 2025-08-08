import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

import img from '../../assets/images/dashboard/img38.png'
import { NotificationOffercanceledModal, NotificationPaymentReceiveddModal, NotificationRequestedtoPayModal, NotificationPaymentRequestDeniedModal, AddSelectTargetNotificationModal, AddSuccessModal, NotificationMakepayment, NotificationMakepaymentSuccessModal } from "../Modals/Modal";

const NotificationOffcanvas = ({ showNotification, setShowNotification }) => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: "Your custom offer has been canceled",
            message:
                "Your custom offer has been canceled. You now have the option to post your offer as a basket offer, allowing for a more flexible and comprehensive approach to your offer.",
            time: "2 hours ago",
            read: false,
            modal: () => setModalOpen(true)
        },
        {
            id: 2,
            title: "Payment Received – Appointment Confirmed",
            message:
                "The payment for your appointment has been successfully completed by ....(enter name of family member or friend) Your appointment is now confirmed! We look forward to seeing you soon.",
            time: "4 hours ago",
            read: false,
            modal: () => setModalOpen1(true)
        },
        {
            id: 3,
            title: "You’ve Been Requested to Pay for a Loved One’s Appointment",
            message:
                "Wilson George has booked a service on Latrice and selected you to complete the payment on their behalf.",
            time: "6 hours ago",
            read: false,
            modal: () => setModalOpen2(true)
        },
        {
            id: 4,
            title: "Payment Request Denied",
            message:
                "Unfortunately, ....(enter family or friend name) has declined to pay for your upcoming appointment.",
            time: "1 day ago",
            read: false,
            modal: () => setModalOpen3(true)
        },
    ]);


    const [isModalOpen, setModalOpen] = useState(false);
    const [isModalOpen1, setModalOpen1] = useState(false);
    const [isModalOpen2, setModalOpen2] = useState(false);
    const [isModalOpen3, setModalOpen3] = useState(false);
    const [isModalOpen4, setModalOpen4] = useState(false);
    const [isModalOpen5, setModalOpen5] = useState(false);
    const [isModalOpen6, setModalOpen6] = useState(false);
    const [isModalOpen7, setModalOpen7] = useState(false);


    const deleteNotification = (id) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    const deleteAll = () => {
        setNotifications([]);
    };

    const markAsRead = (id) => {
        setNotifications(prev => prev.map(n =>
            n.id === id ? { ...n, read: true } : n
        ));
    };

    const handleOpenSelectTargetModal = () => {
        setModalOpen(false)
        setModalOpen4(true)
    }

    const handleOpenSuccessModal = () => {
        setModalOpen4(false)
        setModalOpen5(true)
    }

    const handleOpenPaymentModal = () => {
        setModalOpen5(false)
        setModalOpen6(true)
    }

     const handleOpenPaymentSuccessModal = () => {
        setModalOpen6(false)
        setModalOpen7(true)
    }

    return (
        <>
            {/* Overlay */}
            {showNotification && (
                <div
                    className="fixed inset-0  z-40"
                    onClick={() => setShowNotification(false)}
                />
            )}

            <NotificationOffercanceledModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                handleOpenSelectTargetModal={handleOpenSelectTargetModal}
            />

            <NotificationPaymentReceiveddModal
                isOpen={isModalOpen1}
                onClose={() => setModalOpen1(false)}
            />

            <NotificationRequestedtoPayModal
                isOpen={isModalOpen2}
                onClose={() => setModalOpen2(false)}
                handleOpenPaymentModal={handleOpenPaymentModal}
            />

            <NotificationPaymentRequestDeniedModal
                isOpen={isModalOpen3}
                onClose={() => setModalOpen3(false)}
                handleOpenPaymentModal={handleOpenPaymentModal}
            />
            <AddSelectTargetNotificationModal
                isOpen={isModalOpen4}
                onClose={() => setModalOpen4(false)}
                handleOpenSuccessModal={handleOpenSuccessModal}
            />

            <AddSuccessModal
                isOpen={isModalOpen5}
                onClose={() => setModalOpen5(false)}
            />

            <NotificationMakepayment
                isOpen={isModalOpen6}
                onClose={() => setModalOpen6(false)}
                handleOpenPaymentSuccessModal={handleOpenPaymentSuccessModal}
            />

            <NotificationMakepaymentSuccessModal
                isOpen={isModalOpen7}
                onClose={() => setModalOpen7(false)}
            />



            {/* Offcanvas Panel */}

            <div
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#FAF9F6] shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${showNotification ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex items-center justify-between p-4 border-b border-[#2F2F2F]">
                    <div className="flex items-center">
                        <h2 className="font-[500] font-rasa sm:text-[20px] text-[15px] text-charcoal">Notifications</h2>
                        {notifications.length > 0 && (
                            <span className="ml-2 bg-charocal text-white text-xs font-medium px-2 py-0.5 rounded-full">
                                {notifications.filter(n => !n.read).length}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={() => setShowNotification(false)}
                        className="text-[#2F2F2F] hover:text-gray-700"
                    >
                        <IoClose className="w-6 h-6" />
                    </button>
                </div>

                {/* Notifications List */}
                <div className="overflow-y-auto h-[calc(100vh-120px)]">
                    {notifications.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                            <img src={img} alt="" />
                        </div>
                    ) : (
                        <div className="space-y-2 p-2">
                            {notifications.map(notification => (
                                <div
                                    key={notification.id}
                                    className={`p-4 bg-[#FAF9F6] rounded-[20px] cursor-pointer ${!notification.read ? "bg-blue-50" : ""}`}
                                    onClick={() => {
                                        markAsRead(notification.id);
                                        if (notification.modal) notification.modal();
                                    }}
                                    style={{ boxShadow: "0px 0px 4px 0px #00000040", }}
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <h3 className={`font-[500] font-rasa sm:text-[18px] text-[15px]  ${!notification.read ? "text-[#123E41]" : "text-charcoal"}`}>
                                                    {notification.title}
                                                </h3>
                                            </div>
                                            <p className="font-[500] font-rasa sm:text-[16px] text-[15px] text-[#00000066]">
                                                {notification.message}
                                            </p>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                deleteNotification(notification.id);
                                            }}
                                            className="ml-2 text-[#AE0000] hover:text-red-500"
                                        >
                                            <RiDeleteBin6Line className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer with Delete All Button */}
                {notifications.length > 0 && (
                    <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center">
                        <div
                            onClick={deleteAll}
                            className="w-[200px] border px-2 cursor-pointer border-[#FE5C73] text-[#FE5C73] font-bold py-2 rounded-md  transition hover:bg-[#FE5C73] hover:text-white"
                        >
                            Delete All Notifications
                        </div>
                    </div>

                )}
            </div>
        </>
    );
};

export default NotificationOffcanvas