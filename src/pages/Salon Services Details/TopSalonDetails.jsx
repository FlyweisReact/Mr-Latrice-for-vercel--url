import React, { useState } from "react";

import { ImageShowModal } from "../../components/Modals/Modal";

import img from "../../assets/images/dashboard/img75.jpg";
import img1 from "../../assets/images/dashboard/img22.jpg";
import img2 from "../../assets/images/dashboard/img76.png";
import img3 from "../../assets/images/dashboard/img77.jpg";
import img4 from "../../assets/images/dashboard/img78.jpg";
import img5 from "../../assets/images/dashboard/img79.jpg";
import img6 from "../../assets/images/dashboard/img80.jpg";
import img7 from "../../assets/images/dashboard/img81.png";
import img8 from "../../assets/images/dashboard/img82.jpg";
import img9 from "../../assets/images/dashboard/img83.jpg";

import { IoIosStar } from "react-icons/io";
import { FaHeart } from 'react-icons/fa';
import { FiShare } from "react-icons/fi";


export default function TopSalonDetails() {
    const [isModalOpen, setModalOpen] = useState(false);

    const images = {
        left1: img3,
        left2: img4,
        grid: [
            img5,
            img6,
            img7,
            img8,
        ],
        bigRight: img9,
        overlay: img3,
    };

    const imageList = [
        img3,
        img4,
        img5,
        img5,
        img6,
        img7,
        img8,
        img9,
    ];



    return (
        <> ,

            <ImageShowModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                images={imageList}
            />
            <div className="space-y-4">
                {/* Header Banner */}
                <div className="relative bg-[#FAF9F6] shadow-md rounded-[20px] overflow-hidden">
                    <img
                        src={img}
                        alt="Banner"
                        className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-6 left-4 flex items-center space-x-7">
                        <img
                            src={img1}
                            alt="Avatar"
                            className="sm:w-30 sm:h-30 w-20 h-20 rounded-full object-cover"
                        />
                        <div className="">
                            <h2 className="text-[#FAF9F6] font-be-vietnam-pro sm:text-[20px] text-[15px] font-[800] mb-2">Omar Vaccaro</h2>
                            <p className="text-[#FAF9F6] font-be-vietnam-pro sm:text-[14px] text-[12px] font-[500] mb-2">Larkfield Cte, Santa Rosa CA, 95403</p>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="bg-[#123E41] w-[82px] h-[24px] rounded-[100px] flex items-center justify-center gap-1 text-[#FAF9F6] font-be-vietnam-pro sm:text-[12px] text-[12px] font-[700] m-0">
                                    <img src={img2} alt="" className="w-5 h-5 object-contain" />
                                    Top Pro
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1 text-[#FAF9F6] font-be-vietnam-pro sm:text-[14px] text-[12px] font-[400] m-0">
                                        <IoIosStar />
                                        <span>5.0</span>
                                        (417)
                                    </div>
                                    <div className="text-[#FAF9F6] font-be-vietnam-pro sm:text-[13.78px] text-[12px] font-[400] m-0">
                                        1K+ booked
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-2 right-2 flex items-center gap-2">
                        <div className="backdrop-blur-lg  bg-[#1A1A1A33]  rounded-full flex items-center justify-center w-[40px] h-[40px] cursor-pointer">
                            <FaHeart className="text-white  hover:text-[#FF0000] transition-colors text-xl" />
                        </div>
                        <div className="backdrop-blur-lg  bg-[#1A1A1A33]  rounded-full flex items-center justify-center w-[40px] h-[40px] cursor-pointer">
                            <FiShare className="text-white  transition-colors text-xl" />
                        </div>
                    </div>

                </div>

                {/* Gallery */}
                <div className="flex flex-col sm:flex-row gap-4 w-full h-auto sm:h-[250px]">
                    {/* Left Two Large Images */}
                    <div className="flex flex-col sm:flex-row gap-2 ">
                        <img src={images.left1} alt="left1" className="w-full h-48 sm:h-full object-cover rounded-lg" />
                        <img src={images.left2} alt="left2" className="sm:w-[250px] w-full h-48 sm:h-full object-cover rounded-lg" />
                    </div>

                    {/* 2x2 Grid */}
                    <div className="grid grid-cols-2 gap-2 sm:w-[200px]">
                        {images.grid.map((src, i) => (
                            <img key={i} src={src} alt={`grid-${i}`} className="w-full h-48 sm:h-full object-cover rounded-md" />
                        ))}
                    </div>

                    {/* One Big Right Image */}
                    <div className="flex flex-col gap-2 sm:flex-1">
                        <img src={images.bigRight} alt="big-right" className="w-full h-48 sm:h-[120px] object-cover rounded-lg" />
                        <div className="relative w-full h-48 sm:h-full rounded-lg overflow-hidden cursor-pointer"
                            onClick={() => setModalOpen(true)}
                        >
                            <img src={images.overlay} alt="more" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-[#0000009C] flex items-center justify-center">
                                <h6 className="text-white font-rasa text-2xl sm:text-3xl font-semibold">+6 More</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
