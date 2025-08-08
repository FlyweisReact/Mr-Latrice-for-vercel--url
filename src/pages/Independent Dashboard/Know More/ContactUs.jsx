import React from 'react'

import { Link } from 'react-router-dom';
import IndependentDashboardLayout from '../../../components/DashbaordLayout/Independent Dashbaord';


const IndependentContactUs = () => {
    const routeMapping = {
        'About Us': "/independent/dashboard/know-more/about-us",
        'Privacy Policy': "/independent/dashboard/know-more/privacy-policy",
        "Terms Of Service": "/independent/dashboard/know-more/terms-of-service",
        'Contact Us': "/independent/dashboard/know-more/contact-us",
        'Cookies': "/independent/dashboard/know-more/cookies",
        'FAQs': "/independent/dashboard/know-more/faqs",
    };

    return (
        <IndependentDashboardLayout title="Contact Us"
        >

            <div className="w-full mt-4">
                {/* Tabs */}
                <div className="flex flex-wrap w-full bg-[#D9D9D9] rounded-[80px] overflow-hidden mb-6 p-1 justify-center sm:justify-between gap-2 sm:gap-0 sm:h-[60px]">
                    {['About Us', 'Privacy Policy', 'Terms Of Service', 'Contact Us', 'Cookies', 'FAQs'].map((item, index) => (
                        <Link key={index} to={routeMapping[item]}>
                            <button
                                className={`py-1 px-5 sm:px-7 text-[16px] sm:text-[20px] lg:text-[30px] font-medium font-rasa rounded-[80px] transition-all duration-200 ${item === 'Contact Us' ? 'bg-white text-charcoal' : 'text-[#2F2F2F80]'
                                    }`}
                            >
                                {item}
                            </button>
                        </Link>
                    ))}
                </div>

                {/* Content */}
                <div className="">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="w-full">
                            <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-1 text-charcoal">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter here..."
                                className="w-full mb-4 px-3 py-2 border rounded border-[#2F2F2F] outline-none"
                            />
                        </div>
                        <div className="w-full">
                            <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-1 text-charcoal">Country</label>
                            <select name="" id="" className="w-full mb-4 px-3 py-2 border rounded border-[#2F2F2F] outline-none">
                                <option value="">select</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-1 text-charcoal">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter here..."
                                className="w-full mb-4 px-3 py-2 border rounded border-[#2F2F2F] outline-none"
                            />
                        </div>
                        <div className="w-full">
                            <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-1 text-charcoal">Phone Number</label>
                            <input
                                type="text"
                                placeholder="Enter here..."
                                className="w-full mb-4 px-3 py-2 border rounded border-[#2F2F2F] outline-none"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="block sm:text-[20px] text-[15px] font-bold font-sansation mb-1 text-charcoal">Your Question</label>
                        <textarea
                            type="text"
                            placeholder="Enter here..."
                            className="w-full mb-4 px-3 py-2 border rounded border-[#2F2F2F] outline-none h-[150px]"
                        />
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button className="bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-4 py-3 sm:w-[400px] rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"

                        >
                            Submit
                        </button>
                    </div>
                </div>

            </div>

        </IndependentDashboardLayout >
    )
}

export default IndependentContactUs