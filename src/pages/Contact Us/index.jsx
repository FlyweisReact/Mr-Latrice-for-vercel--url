import MainLayout from "../../components/MainLayout";

import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";


import img from '../../assets/images/dashboard/img107.png'
import img1 from '../../assets/images/dashboard/img108.png'
import img2 from '../../assets/images/dashboard/img109.png'
import img3 from '../../assets/images/dashboard/img110.png'



export default function ContactUss() {

    return (
        <>
            <MainLayout>
                <div className="">
                    {/* Hero Section */}
                    <div className="relative h-[414px] contactus-container" >
                        <div className="absolute inset-0 flex items-center justify-start">
                            <div className="px-10">
                                <h1 className="font-rasa font-[700] sm:text-[64px] text-[50px] text-white text-shadow-custom mb-8">Contact</h1>
                                <p className="font-sansation font-[700] sm:text-[20px] text-[15px] text-white text-shadow-custom mb-2">Get in Touch With Us – We're Here to Help with Your Beauty and<br /> Style Needs.</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-7xl mx-auto py-10 px-2 space-y-10">
                        <div className="">
                            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                                {/* Contact Info Section */}
                                <div>
                                    <h2 className="font-rasa font-[700] sm:text-[40px] text-[30px] text-[#002B51] mb-2">Get In Touch</h2>
                                    <p className="font-sansation font-[400] sm:text-[18px] text-[15px] text-[#4A4A4A] mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                                    <h3 className="font-rasa font-[700] sm:text-[32px] text-[30px] text-[#002B51] mb-1">City Hall</h3>
                                    <p className="font-sansation font-[400] sm:text-[18px] text-[15px] text-[#4A4A4A] flex items-center gap-1 mb-1">
                                        <IoLocationSharp />
                                        <span className="font-[700]">Address: </span> Lorem Ipsum is simply dummy
                                    </p>
                                    <p className="font-sansation font-[400] sm:text-[18px] text-[15px] text-[#4A4A4A] flex items-center gap-1 mb-1">
                                        <IoMdCall />
                                        <span className="font-[700]">Call: </span>  1-811-7878-08
                                    </p>
                                    <p className="font-sansation font-[400] sm:text-[18px] text-[15px] text-[#4A4A4A] flex items-center gap-1 mb-1">
                                        <MdEmail />
                                        <span className="font-[700]">Mail: </span> abc@example.com
                                    </p>

                                    <h3 className="font-rasa font-[700] sm:text-[32px] text-[30px] text-[#002B51] mb-1">Opening Hours</h3>
                                    <p className="font-sansation font-[400] sm:text-[18px] text-[15px] text-[#4A4A4A]">Mon – Fri: 8:00 am – 4:00 pm</p>

                                    {/* Social Icons */}
                                    <div className="flex space-x-3 mt-4">
                                        <a href="#" >
                                            <img src={img} alt="" className="w-[47px] h-[47px]" />
                                        </a>
                                        <a href="#" >
                                            <img src={img2} alt="" className="w-[47px] h-[47px]" />
                                        </a>
                                        <a href="#" >
                                            <img src={img1} alt="" className="w-[47px] h-[47px]" />
                                        </a>
                                        <a href="#" >
                                            <img src={img3} alt="" className="w-[47px] h-[47px]" />
                                        </a>
                                    </div>
                                </div>

                                {/* Contact Form Section */}
                                <div className="bg-white px-8.5 py-5  contactus-container1">
                                    <h3 className="font-rasa font-[700] sm:text-[36px] text-[25px] text-[#002B51] mb-4">Leave your message</h3>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <input type="text" placeholder="Name" className="border border-[#00000080] p-3 w-full text-sm" />
                                        <input type="text" placeholder="Country" className="border border-[#00000080] p-3 w-full rounded text-sm" />
                                    </div>
                                    <input type="text" placeholder="Subject" className="border border-[#00000080] p-3 w-full rounded text-sm mb-4" />
                                    <textarea placeholder="Write your message..." rows="4" className="border border-[#00000080] p-2 w-full rounded text-sm mb-4"></textarea>
                                    <button className="bg-[#123E41] px-6 py-3 rounded-[10px] font-rasa font-[600] sm:text-[20px] text-[15px] text-[#FAF9F6]">Send Message</button>
                                </div>
                            </div>

                            {/* Map Embed */}
                            <div className="mt-10">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.078865405031!2d-97.74306068484663!3d30.26715398179945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a788fb8a57%3A0x6d6a0e9cfba4ec11!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1676974720173"
                                    width="100%"
                                    height="542"
                                    // style="border:0;"
                                    allowFullScreen=""
                                    loading="lazy"
                                    className="rounded-lg shadow"
                                ></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </MainLayout>
        </>
    );
}
