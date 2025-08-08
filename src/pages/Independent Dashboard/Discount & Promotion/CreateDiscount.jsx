import React, { useState } from 'react'
import IndependentDashboardLayout from '../../../components/DashbaordLayout/Independent Dashbaord';
import { IoCamera } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

const IndependentCreateDiscount = () => {
    const [isOn, setIsOn] = useState(true)


    const [value, setValue] = useState(null);
    const [value1, setValue1] = useState(null);
    const navigate = useNavigate();

    return (
        <IndependentDashboardLayout
            titleAction={
                <div className="flex items-center gap-2">
                    <HiOutlineArrowLeft color='#000000' size={30} className='cursor-pointer' onClick={() => navigate(-1)} />
                    <div className="sm:text-[40px] text-2xl font-[600] font-rasa whitespace-nowrap text-charcoal">
                        Create Discount
                    </div>
                </div>
            }
        >
            <div className=''>
                <div className='flex sm:flex-row flex-col gap-8 mb-5'>
                    <div className='bg-[#D9D9D9] shadow-[0px_4px_4px_0px_#00000040] rounded-[10px] sm:w-80 w-full h-50 flex items-center justify-center'>
                        <IoCamera color='#17181D' size={30} />
                    </div>
                    <div className='space-y-2 flex-1'>
                        <div>
                            <label htmlFor="" className='flex items-center gap-1 sm:text-[20px] text-[18px] font-[700] font-sansation text-charcoal mb-2'>
                                Offer Name
                                <IoMdInformationCircle color='#2F2F2F' />
                            </label>
                            <select name="" id="" className='bg-[#FAF9F6] border border-[#2F2F2F] rounded-[7px] py-3 px-7 outline-none w-full sm:text-[18px] text-[15px] font-[400] font-sansation text-[#2F2F2F80]'>
                                <option value="">enter offer name or select from here...</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="" className='flex items-center gap-1 sm:text-[20px] text-[18px] font-[700] font-sansation text-charcoal mb-2'>
                                Coupon Code
                                <IoMdInformationCircle color='#2F2F2F' />
                            </label>
                            <input type="text" placeholder='e.g. LATRICEFLAT25' className='bg-[#FAF9F6] border border-[#2F2F2F] outline-none rounded-[7px] py-3 px-7  w-full sm:text-[18px] text-[15px] font-[400] font-sansation text-[#2F2F2F80]' />
                        </div>
                    </div>
                </div>
                <div>
                    <h6 className='sm:text-[25px] text-[18px] font-[700] font-sansation text-charcoal mb-2'>Coupon Type</h6>
                    <div className='flex items-center gap-8 mb-3'>
                        <div className='flex  gap-2'>
                            <span className="relative w-4 h-4">
                                <input
                                    type="radio"
                                    name="yesno"
                                    className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                                    checked={value === true}
                                    onChange={() => setValue(true)}
                                />
                                <span
                                    className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${value === true ? "border-[#F67067]" : "border-[#2F2F2F]"
                                        } border`}
                                ></span>
                            </span>
                            <label htmlFor="" className='flex items-center gap-1 sm:text-[18px] text-[15px] font-[700] font-sansation text-charcoal mb-2'>
                                Public Coupon
                                <IoMdInformationCircle color='#2F2F2F' />
                            </label>
                        </div>
                        <div className='flex gap-2'>
                            <span className="relative w-4 h-4">
                                <input
                                    type="radio"
                                    name="yesno"
                                    className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                                    checked={value === true}
                                    onChange={() => setValue(true)}
                                />
                                <span
                                    className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${value === true ? "border-[#F67067]" : "border-[#2F2F2F]"
                                        } border`}
                                ></span>
                            </span>
                            <label htmlFor="" className='flex items-center gap-1 sm:text-[18px] text-[15px] font-[700] font-sansation text-charcoal mb-2'>
                                Private Coupon
                                <IoMdInformationCircle color='#2F2F2F' />
                            </label>
                        </div>
                    </div>
                    <div className=' mb-2'>
                        <label htmlFor="" className='flex items-center gap-1 sm:text-[20px] text-[18px] font-[700] font-sansation text-charcoal mb-2'>
                            Number of times code can be used
                            <IoMdInformationCircle color='#2F2F2F' />
                        </label>
                        <input type="text" placeholder='e.g. 1000' className='bg-[#FAF9F6] border border-[#2F2F2F] outline-none rounded-[7px] py-3 px-7  w-full sm:text-[18px] text-[15px] font-[400] font-sansation text-[#2F2F2F80]' />
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            id="unlimited-toggle"
                            type="checkbox"
                            className="peer hidden"
                            checked={value1}
                            onChange={() => setValue1(!value1)}
                        />

                        <label
                            htmlFor="unlimited-toggle"
                            className={`w-[28px] h-[28px] rounded-sm flex items-center justify-center cursor-pointer transition-colors duration-300 
      ${value1 ? 'bg-[#FF827F]' : 'bg-[#D9D9D9] border border-[#2F2F2F]'}`}
                        >
                            {value1 && (
                                <svg
                                    className="w-4 h-4 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </label>

                        <label
                            htmlFor="unlimited-toggle"
                            className="block sm:text-[18px] text-[15px] font-[700] font-sansation text-[#2F2F2F99] cursor-pointer"
                        >
                            Check, if you want to set number of times to unlimited
                        </label>
                    </div>
                    <div className="mt-4 mb-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h6 className="sm:text-[20px] text-[15px] font-[700] text-charcoal font-sansation">Visibility</h6>
                                <p className="sm:text-[20px] text-[15px] font-[700] text-[#2F2F2F99] font-sansation">Toggle OFF, in case you don’t want to show this coupon to your users</p>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <span className="text-sm text-[#2F2F2F99] font-sansation font-[400]">{isOn ? "On" : "Off"}</span>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" value={isOn} onChange={(e) => setIsOn(e.target.checked)} />
                                        <div className="w-11 h-6 bg-[#D9D9D9] peer-checked:bg-[#123E41] rounded-full relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                                    </label>
                                </label>
                            </div>
                        </div>
                    </div>
                    <h6 className='sm:text-[25px] text-[18px] font-[700] font-sansation text-charcoal mb-2'>Discount Type</h6>
                    <div className='flex items-center gap-8 mb-3 '>
                        <div className='flex  gap-2'>
                            <span className="relative w-4 h-4">
                                <input
                                    type="radio"
                                    name="yesno"
                                    className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                                    checked={value === true}
                                    onChange={() => setValue(true)}
                                />
                                <span
                                    className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${value === true ? "border-[#F67067]" : "border-[#2F2F2F]"
                                        } border`}
                                ></span>
                            </span>
                            <label htmlFor="" className='flex items-center gap-1 sm:text-[18px] text-[15px] font-[700] font-sansation text-charcoal mb-2'>
                                Flat Discount
                                <IoMdInformationCircle color='#2F2F2F' />
                            </label>
                        </div>
                        <div className='flex gap-2'>
                            <span className="relative w-4 h-4">
                                <input
                                    type="radio"
                                    name="yesno"
                                    className="appearance-none w-5 h-5  rounded-full checked:bg-[#F67067]  checked:border-4 checked:border-white focus:outline-none"
                                    checked={value === true}
                                    onChange={() => setValue(true)}
                                />
                                <span
                                    className={`absolute w-5 h-5 inset-0 rounded-full pointer-events-none ${value === true ? "border-[#F67067]" : "border-[#2F2F2F]"
                                        } border`}
                                ></span>
                            </span>
                            <label htmlFor="" className='flex items-center gap-1 sm:text-[18px] text-[15px] font-[700] font-sansation text-charcoal mb-2'>
                                Percentage Discount
                                <IoMdInformationCircle color='#2F2F2F' />
                            </label>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4'>
                        <div>
                            <label htmlFor="" className='block sm:text-[20px] text-[18px] font-[700] font-sansation text-charcoal mb-2'> Flat Discount Amount</label>
                            <input type="text" placeholder='enter discount amount' className='bg-[#FAF9F6] border border-[#2F2F2F] outline-none rounded-[7px] py-3 px-7  w-full sm:text-[18px] text-[15px] font-[400] font-sansation text-[#2F2F2F80]' />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4'>
                        <div>
                            <label htmlFor="" className='block sm:text-[20px] text-[18px] font-[700] font-sansation text-charcoal mb-2'>Start Date</label>
                            <input type="date" placeholder='enter discount amount' className='bg-[#FAF9F6] border border-[#2F2F2F] outline-none rounded-[7px] py-3 px-7  w-full sm:text-[18px] text-[15px] font-[400] font-sansation text-[#2F2F2F80]' />
                        </div>
                        <div>
                            <label htmlFor="" className='block sm:text-[20px] text-[18px] font-[700] font-sansation text-charcoal mb-2'>Start Time</label>
                            <input type="time" placeholder='enter discount amount' className='bg-[#FAF9F6] border border-[#2F2F2F] outline-none rounded-[7px] py-3 px-7  w-full sm:text-[18px] text-[15px] font-[400] font-sansation text-[#2F2F2F80]' />
                        </div>
                        <div>
                            <label htmlFor="" className='block sm:text-[20px] text-[18px] font-[700] font-sansation text-charcoal mb-2'>End Date</label>
                            <input type="date" placeholder='enter discount amount' className='bg-[#FAF9F6] border border-[#2F2F2F] outline-none rounded-[7px] py-3 px-7  w-full sm:text-[18px] text-[15px] font-[400] font-sansation text-[#2F2F2F80]' />
                        </div>
                        <div>
                            <label htmlFor="" className='block sm:text-[20px] text-[18px] font-[700] font-sansation text-charcoal mb-2'>End Time</label>
                            <input type="time" placeholder='enter discount amount' className='bg-[#FAF9F6] border border-[#2F2F2F] outline-none rounded-[7px] py-3 px-7  w-full sm:text-[18px] text-[15px] font-[400] font-sansation text-[#2F2F2F80]' />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            id="unlimited-toggle"
                            type="checkbox"
                            className="peer hidden"
                            checked={value1}
                            onChange={() => setValue1(!value1)}
                        />

                        <label
                            htmlFor="unlimited-toggle"
                            className={`w-[28px] h-[28px] rounded-sm flex items-center justify-center cursor-pointer transition-colors duration-300 
      ${value1 ? 'bg-[#FF827F]' : 'bg-[#D9D9D9] border border-[#2F2F2F]'}`}
                        >
                            {value1 && (
                                <svg
                                    className="w-4 h-4 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </label>

                        <label
                            htmlFor="unlimited-toggle"
                            className="block sm:text-[18px] text-[15px] font-[700] font-sansation text-[#2F2F2F99] cursor-pointer"
                        >
                            Check, if you want to see coupon validity to lifetime
                        </label>
                    </div>
                </div>
                <div className=" flex justify-center w-[50%] m-auto mt-8">
                    <button className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                    >
                        Create
                    </button>
                </div>
            </div>
        </IndependentDashboardLayout>
    )
}

export default IndependentCreateDiscount