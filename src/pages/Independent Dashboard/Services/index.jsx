import React, { useState } from 'react'
import BusinessOwnerDashboardLayout from '../../../components/DashbaordLayout/Business Owner';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { CgSandClock } from "react-icons/cg";
import { AiFillEdit } from "react-icons/ai";

import { RiDeleteBin6Fill } from "react-icons/ri";
import IndependentDashboardLayout from '../../../components/DashbaordLayout/Independent Dashbaord';

// InputField Component (Reusable)
function InputField({ label, value, onChange, suffix }) {
    return (
        <div>
            <label className='sm:text-[20px] text-[15px] font-[700] font-sansation text-charcoal mb-2 block'>
                {label}
            </label>
            <div className="flex items-center relative border border-[#2F2F2F] rounded overflow-hidden">
                <input
                    type="text"
                    className="w-full px-3 py-2 outline-none text-[#2F2F2F80]"
                    value={value}
                    onChange={onChange}
                />
                <span className="px-3 py-2 bg-[#2F2F2F] text-[#FAF9F6]">
                    {suffix}
                </span>
            </div>
        </div>
    );
}

// ServiceToggle Component
function ServiceToggle({ title, isActive, onToggle, price, time, onPriceChange, onTimeChange }) {
    return (
        <div className="flex flex-col gap-3 h-full p-4 ">
            <div className='flex items-center gap-5 flex-wrap sm:justify-normal justify-between'>
                <h6 className='sm:text-[24px] text-[18px] font-[600] font-rasa text-charcoal'>{title}</h6>
                <p className='sm:text-[20px] text-[15px] font-[400] font-sansation text-[#2F2F2F99]'>
                    {isActive ? 'Yes' : 'No'}
                </p>
                <label className="inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isActive}
                        onChange={onToggle}
                    />
                    <div className="w-11 h-6 bg-[#D9D9D9] peer-checked:bg-[#123E41] rounded-full relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
            </div>

            {isActive && (
                <div className='flex gap-4'>
                    <InputField
                        label="Enter Price"
                        type="text"
                        suffix="$"
                        value={price}
                        onChange={(e) => onPriceChange(e.target.value)}
                    />

                    <InputField
                        label="Enter Time"
                        type="text"
                        suffix="Min"
                        value={time}
                        onChange={(e) => onTimeChange(e.target.value)}
                    />
                </div>
            )}
        </div>
    );
}



const IndependentServicess = () => {
    const [images, setImages] = useState([null, null, null]);

    const [showinputs, setShowInputs] = useState(false)
    const [showinputs1, setShowInputs1] = useState(false)
    const [showlist, setShowList] = useState(false)

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const updated = [...images];
            updated[index] = URL.createObjectURL(file);
            setImages(updated);
        }
    };


    const [services, setServices] = useState([
        { title: 'Undo Hair', active: false, price: '', time: '' },
        { title: 'Wash Hair', active: false, price: '', time: '' },
        { title: 'Blow Dry Hair', active: false, price: '', time: '' },
    ]);

    const toggleService = (title) => {
        setServices(prev =>
            prev.map(service =>
                service.title === title ? { ...service, active: !service.active } : service
            )
        );
    };

    const updatePrice = (title, price) => {
        setServices(prev =>
            prev.map(service =>
                service.title === title ? { ...service, price } : service
            )
        );
    };

    const updateTime = (title, time) => {
        setServices(prev =>
            prev.map(service =>
                service.title === title ? { ...service, time } : service
            )
        );
    };





    const handleAddService = () => {
        setShowInputs(!showinputs)
    };

    const handleAddService1 = () => {
        setShowInputs1(!showinputs1)
    };

    const handleshowlist = () => {
        setShowList(!showlist)
    };


    return (
        <IndependentDashboardLayout title="Services">
            <div className=''>
                <div className="flex flex-wrap -mx-2">
                    {services.map((service) => (
                        <div key={service.title} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 px-2 mb-4">
                            <ServiceToggle
                                title={service.title}
                                isActive={service.active}
                                onToggle={() => toggleService(service.title)}
                                price={service.price}
                                time={service.time}
                                onPriceChange={(val) => updatePrice(service.title, val)}
                                onTimeChange={(val) => updateTime(service.title, val)}
                            />
                        </div>
                    ))}
                </div>
                <div className="h-[80px] bg-white rounded-[10px] shadow-[0px_4px_4px_0px_#FF5A5F] shadow-[0px_0px_4px_0px_#FF5A5F] flex items-center justify-between p-5">
                    <h6 className='sm:text-[26px] text-[15px] font-[700] font-rasa text-charcoal'>Add your services</h6>
                    <button
                        className="w-10 h-10 rounded-full bg-[#FF827F] flex items-center justify-center hover:bg-[#FF5A5F] transition-colors"
                        onClick={handleAddService}
                    >
                        <FaPlus color='#FFFFFF' size={25} />
                    </button>
                </div>

                <div className="mt-4">
                    {showinputs &&
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Left side */}
                            <div className="flex flex-col gap-4">
                                <select className="w-full p-3 border border-[#2F2F2F] rounded outline-none bg-white font-sansation font-[400] text-[16px] text-charcoal">
                                    <option>Select or type your service</option>
                                </select>

                                <div className="flex items-center rounded px-3 py-2 border border-[#2F2F2F] relative">
                                    <input
                                        type="number"
                                        className="w-full pr-10 text-[#2F2F2F80] border-none outline-none"
                                        placeholder="Price"
                                    />
                                    <span className="px-3 py-2 bg-[#2F2F2F] text-[#FAF9F6] absolute right-0 rounded-r">
                                        $
                                    </span>
                                </div>

                                <textarea
                                    placeholder="Add a description "
                                    className="resize-none w-full p-3 border border-[#2F2F2F] rounded outline-none bg-white font-sansation font-[400] text-[16px] text-charcoal"
                                    rows={3}
                                />
                            </div>

                            {/* Right side */}
                            <div className="flex flex-col gap-4">
                                <select className="w-full p-3 border border-[#2F2F2F] rounded outline-none bg-white font-sansation font-[400] text-[16px] text-charcoal">
                                    <option>Select service size/Length</option>
                                </select>

                                <div className="flex items-center rounded px-3 py-2 border border-[#2F2F2F] relative">
                                    <input
                                        type="number"
                                        className="w-full pr-14 text-[#2F2F2F80] border-none outline-none"
                                        placeholder="Durations"
                                    />
                                    <span className="px-3 py-2 bg-[#2F2F2F] text-[#FAF9F6] absolute right-0 rounded-r">
                                        mins
                                    </span>
                                </div>

                                {/* Image Uploads & Buttons */}
                                <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
                                    {/* Image Uploads */}
                                    <div className="flex gap-2">
                                        {images.map((img, index) => (
                                            <label
                                                key={index}
                                                className="w-[80px] h-[80px] border-2 border-dashed border-[#2F2F2F] flex flex-col items-center justify-center text-xs text-[#2F2F2F] cursor-pointer rounded"
                                            >
                                                {img ? (
                                                    <img
                                                        src={img}
                                                        alt="preview"
                                                        className="w-full h-full object-cover rounded"
                                                    />
                                                ) : (
                                                    <>
                                                        <span className="text-2xl text-[#123E41]">+</span>
                                                        <span className="text-[10px]">Add Images</span>
                                                    </>
                                                )}
                                                <input
                                                    type="file"
                                                    className="hidden"
                                                    onChange={(e) => handleImageChange(e, index)}
                                                />
                                            </label>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col gap-2 w-full lg:w-auto">
                                        <button className="px-8 py-2 bg-[#FF827F] font-[700] font-sansation text-[15px] sm:text-[18px] text-[#FAF9F6] rounded-[8px] shadow-[4px_-10px_20px_0px_#FFFFFF40_inset]">
                                            Clear All
                                        </button>
                                        <button className="px-8 py-2 bg-[#123E41] font-[700] font-sansation text-[15px] sm:text-[18px] text-[#FAF9F6] rounded-[8px] shadow-[4px_-10px_20px_0px_#FFFFFF40_inset]">
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="flex items-center justify-between mt-5">
                        <h6 className='sm:text-[28px] text-[20px] font-[700] font-rasa text-[#121111]'>BOX BRAIDS</h6>
                        <div className='flex items-center gap-2'>
                            <div className='bg-secondary w-[41px] h-[41px] rounded-full flex items-center justify-center cursor-pointer' onClick={handleAddService1}>
                                {showinputs1 ? <FaMinus color='white' size={20} /> : <FaPlus color='white' size={20} />}
                            </div>
                            <div className='bg-secondary w-[41px] h-[41px] rounded-full flex items-center justify-center cursor-pointer' onClick={handleshowlist}>
                                {showlist ? <IoIosArrowUp color='white' size={20} /> : <IoIosArrowDown color='white' size={20} />}
                            </div>
                        </div>
                    </div>
                    {showinputs1 &&
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                            {/* Left side */}
                            <div className="flex flex-col gap-4">
                                <select className="w-full p-3 border border-[#2F2F2F] rounded outline-none bg-white font-sansation font-[400] text-[16px] text-charcoal">
                                    <option>Select or type your service</option>
                                </select>

                                <div className="flex items-center rounded px-3 py-2 border border-[#2F2F2F] relative">
                                    <input
                                        type="number"
                                        className="w-full pr-10 text-[#2F2F2F80] border-none outline-none"
                                        placeholder="Price"
                                    />
                                    <span className="px-3 py-2 bg-[#2F2F2F] text-[#FAF9F6] absolute right-0 rounded-r">
                                        $
                                    </span>
                                </div>

                                <textarea
                                    placeholder="Add a description "
                                    className="resize-none w-full p-3 border border-[#2F2F2F] rounded outline-none bg-white font-sansation font-[400] text-[16px] text-charcoal"
                                    rows={3}
                                />
                            </div>

                            {/* Right side */}
                            <div className="flex flex-col gap-4">
                                <select className="w-full p-3 border border-[#2F2F2F] rounded outline-none bg-white font-sansation font-[400] text-[16px] text-charcoal">
                                    <option>Select service size/Length</option>
                                </select>

                                <div className="flex items-center rounded px-3 py-2 border border-[#2F2F2F] relative">
                                    <input
                                        type="number"
                                        className="w-full pr-14 text-[#2F2F2F80] border-none outline-none"
                                        placeholder="Durations"
                                    />
                                    <span className="px-3 py-2 bg-[#2F2F2F] text-[#FAF9F6] absolute right-0 rounded-r">
                                        mins
                                    </span>
                                </div>

                                {/* Image Uploads & Buttons */}
                                <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
                                    {/* Image Uploads */}
                                    <div className="flex gap-2">
                                        {images.map((img, index) => (
                                            <label
                                                key={index}
                                                className="w-[80px] h-[80px] border-2 border-dashed border-[#2F2F2F] flex flex-col items-center justify-center text-xs text-[#2F2F2F] cursor-pointer rounded"
                                            >
                                                {img ? (
                                                    <img
                                                        src={img}
                                                        alt="preview"
                                                        className="w-full h-full object-cover rounded"
                                                    />
                                                ) : (
                                                    <>
                                                        <span className="text-2xl text-[#123E41]">+</span>
                                                        <span className="text-[10px]">Add Images</span>
                                                    </>
                                                )}
                                                <input
                                                    type="file"
                                                    className="hidden"
                                                    onChange={(e) => handleImageChange(e, index)}
                                                />
                                            </label>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col gap-2 w-full lg:w-auto">
                                        <button className="px-8 py-2 bg-[#FF827F] font-[700] font-sansation text-[15px] sm:text-[18px] text-[#FAF9F6] rounded-[8px] shadow-[4px_-10px_20px_0px_#FFFFFF40_inset]">
                                            Clear All
                                        </button>
                                        <button className="px-8 py-2 bg-[#123E41] font-[700] font-sansation text-[15px] sm:text-[18px] text-[#FAF9F6] rounded-[8px] shadow-[4px_-10px_20px_0px_#FFFFFF40_inset]">
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {showlist &&
                        <div className="space-y-2 mt-5">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white flex flex-wrap sm:flex-nowrap justify-between items-center p-4 rounded-[10px] border border-[#2F2F2F33]"
                                >
                                    {/* Left - Title and Info */}
                                    <div className="flex flex-col gap-1 flex-grow">
                                        <div className="fsm:text-[28px] text-[20px] font-[700] font-rasa text-[#121111]">BOX BRAIDS</div>
                                    </div>

                                    <div className="flex flex-col gap-1 flex-grow">
                                        <div className="fsm:text-[18px] text-[15px] font-[600] font-rasa text-[#494948]">Small, Butt-Length</div>
                                    </div>

                                    <div className="flex items-center gap-1 flex-grow">
                                        <BiSolidBadgeDollar className="text-black" />
                                        <div className="fsm:text-[18px] text-[15px] font-[600] font-rasa text-[#494948]">$100.00</div>
                                    </div>

                                    <div className="flex items-center gap-1 flex-grow">
                                        <CgSandClock className="text-black" />
                                        <div className="fsm:text-[18px] text-[15px] font-[600] font-rasa text-[#494948]">1 hr 30 mins</div>
                                    </div>

                                    <div className="flex flex-col gap-1 flex-grow">
                                        <div className="fsm:text-[18px] text-[15px] font-[600] font-rasa text-[#494948]">Lorem Ipsum is simply dummy text</div>
                                    </div>
                                    {/* Right - Edit / Delete */}
                                    <div className="flex items-center gap-4 mt-2 sm:mt-0">
                                        <button className="flex items-center gap-1">
                                            <AiFillEdit size={14} color='#FF827F' />
                                            <div className="fsm:text-[18px] text-[15px] font-[600] font-rasa text-[#FF827F]">Edit</div>
                                        </button>
                                        <button className="flex items-center gap-1">
                                            <RiDeleteBin6Fill size={14} color='#014F86' />
                                            <div className="fsm:text-[18px] text-[15px] font-[600] font-rasa text-[#014F86]">Delete</div>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>


            </div>
        </IndependentDashboardLayout>
    )
}

export default IndependentServicess