import React from 'react'

import { Link } from 'react-router-dom';
import ClientDashboardLayout from '../../../components/DashbaordLayout/Client Dashbaord';


const Cookies = () => {
    const routeMapping = {
        'About Us': "/dashboard/know-more/about-us",
        'Privacy Policy': "/dashboard/know-more/privacy-policy",
        "Terms Of Service": "/dashboard/know-more/terms-of-service",
        'Contact Us': "/dashboard/know-more/contact-us",
        'Cookies': "/dashboard/know-more/cookies",
        'FAQs': "/dashboard/know-more/faqs",
    };

    return (
        <ClientDashboardLayout title="Cookies"
        >

            <div className="w-full mt-4">
                {/* Tabs */}
                <div className="flex flex-wrap w-full bg-[#D9D9D9] rounded-[80px] overflow-hidden mb-6 p-1 justify-center sm:justify-between gap-2 sm:gap-0 sm:h-[60px]">
                    {['About Us', 'Privacy Policy', 'Terms Of Service', 'Contact Us', 'Cookies', 'FAQs'].map((item, index) => (
                        <Link key={index} to={routeMapping[item]}>
                            <button
                                className={`py-1 px-5 sm:px-7 text-[16px] sm:text-[20px] lg:text-[30px] font-medium font-rasa rounded-[80px] transition-all duration-200 ${item === 'Cookies' ? 'bg-white text-charcoal' : 'text-[#2F2F2F80]'
                                    }`}
                            >
                                {item}
                            </button>
                        </Link>
                    ))}
                </div>

                {/* Content */}
                <div className=" text-gray-800 space-y-6">
                    {/* Top line with bold end */}
                    <p className="font-[600] sm:text-[18px] text-[15px] text-charcoal font-outfit text-charcoal leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    {/* First group */}
                    <div className="space-y-2">
                        <h2 className="font-[600] sm:text-[18px] text-[15px] text-charcoal font-outfit text-charcoal leading-relaxed">Lorem Ipsum is simply dummy text</h2>
                        <p className="font-[400] sm:text-[16px] text-[15px]  font-outfit text-gray-600 leading-relaxed mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <p className="font-[400] sm:text-[16px] text-[15px] font-outfit text-gray-600 leading-relaxed mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                        <p className="font-[400] sm:text-[16px] text-[15px] font-outfit text-gray-600 leading-relaxed mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                        <p className="font-[400] sm:text-[16px] text-[15px]  font-outfit text-gray-600 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                    </div>

                    {/* Second group */}
                     <div className="space-y-2">
                        <h2 className="font-[600] sm:text-[18px] text-[15px] text-charcoal font-outfit text-charcoal leading-relaxed">Lorem Ipsum is simply dummy text</h2>
                        <p className="font-[400] sm:text-[16px] text-[15px]  font-outfit text-gray-600 leading-relaxed mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <p className="font-[400] sm:text-[16px] text-[15px] font-outfit text-gray-600 leading-relaxed mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                        <p className="font-[400] sm:text-[16px] text-[15px] font-outfit text-gray-600 leading-relaxed mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                        <p className="font-[400] sm:text-[16px] text-[15px]  font-outfit text-gray-600 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                    </div>

                </div>

            </div>

        </ClientDashboardLayout >
    )
}

export default Cookies