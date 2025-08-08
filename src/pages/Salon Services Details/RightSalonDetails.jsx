import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { TiArrowSortedDown } from "react-icons/ti";
import { PiCalendarCheckDuotone } from "react-icons/pi";
import { MdVerified } from "react-icons/md";

import img1 from '../../assets/images/dashboard/img84.png'
import img from '../../assets/images/dashboard/img74.png'

const RightSalonDetails = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Plano, TX 75093");

  const locations = [
    "Plano, TX 75093",
    "Plano, TX 75094",
    "New York, NY 10011",
    "New York, NY 10012",
  ];

  return (
    <>
      <div className="space-y-3">
        {/* Map */}
        <div className="w-full h-48 sm:h-64">
          <img src={img} alt="Map" className="w-full h-full object-cover rounded-tl-[10px] rounded-tr-[10px]" />
        </div>

        {/* Location */}
        <div className="">
          <p className="font-rasa font-[700] sm:text-[20px] text-[15px] text-[#121111]">Location (4)</p>
          <p className="font-rasa font-[400] sm:text-[16px] text-[12px] text-[#2F2F2F]">Omar Vaccaro</p>
          <div className="relative inline-block text-left">
            {/* Selected location and icon */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <p className="font-rasa font-[400] sm:text-[16px] text-[12px] text-[#2F2F2F] underline">
                {selectedLocation}
              </p>
              <TiArrowSortedDown
                size={18}
                className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                color="#00000080"
              />
            </div>

            {/* Dropdown menu */}
            {isOpen && (
              <div className="absolute mt-2 z-10 w-[180px] bg-white border border-gray-300 rounded shadow-lg">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedLocation(location);
                      setIsOpen(false);
                    }}
                  >
                    {location}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* About Me */}
        <div className=''>
          <h2 className="font-rasa font-[700] sm:text-[20px] text-[15px] text-[#121111]">About Me</h2>
          <div className="flex items-center gap-2 my-2 mb-2">
            <span className="font-rasa font-[700] sm:text-[15px] text-[10px] text-[#121111] flex items-center gap-1">
              <img src={img1} alt="" />
              Top Pro
            </span>
            <span className="font-rasa font-[400] sm:text-[15px] text-[10px] text-[#494948] flex items-center gap-1">
              <PiCalendarCheckDuotone color='#00331D' />
              1K+ booked
            </span>
          </div>
          <div className="font-rasa font-[400] sm:text-[18px] text-[10px] text-[#494948] flex items-center gap-1 mb-2">
            <MdVerified color='#00331D' />
            Latrice Verified
          </div>
          <p className="font-rasa font-[400] sm:text-[16px] text-[10px] text-[#2F2F2F] leading-relaxed">
            I am a well-rounded Hairstylist, meaning no matter what type of hair you have I can do it well! I am also a Cosmetology Teacher which means I have made it my business to perfect my craft, to be able to provide top quality service to my clientele.
          </p>
        </div>

        {/* Message Button */}
        <button className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] font-sansation sm:text-[20px] text-[15px] px-2 py-2  rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
          onClick={() => navigate('/business-owner/dashboard/chat')}
        >
          Message
        </button>

        {/* Hours of Operation */}
        <div>
          <h3 className="font-rasa font-[700] sm:text-[20px] text-[15px] text-[#121111]">Hours of Operation</h3>
          <div className='space-y-2'>
            <div className='flex itmes-center justify-between'>
              <h6 className='font-rasa font-[500] sm:text-[16px] text-[15px] text-[#494948]'>Sunday:</h6>
              <span className='font-rasa font-[500] sm:text-[16px] text-[15px] text-[#757575]'>Closed</span>
            </div>
            <div className='flex itmes-center justify-between'>
              <h6 className='font-rasa font-[500] sm:text-[16px] text-[15px] text-[#494948]'>Monday:</h6>
              <span className='font-rasa font-[500] sm:text-[16px] text-[15px] text-[#494948]'>9:00 AM- 7:45 PM</span>
            </div>
            <div className='flex itmes-center justify-between'>
              <h6 className='font-rasa font-[500] sm:text-[16px] text-[15px] text-[#494948]'>Tuesday:</h6>
              <span className='font-rasa font-[500] sm:text-[16px] text-[15px] text-[#494948]'>9:00 AM- 7:00 PM</span>
            </div>
            <div className='flex itmes-center justify-between'>
              <h6 className='font-rasa font-[500] sm:text-[16px] text-[15px] text-[#494948]'>Wednesday:</h6>
              <span className='font-rasa font-[500] sm:text-[16px] text-[15px] text-[#494948]'>9:00 AM- 7:00 PM</span>
            </div>
            <div className='flex itmes-center justify-between'>
              <h6 className='font-rasa font-[500] sm:text-[16px] text-[15px] text-[#494948]'>Thursday:</h6>
              <span className='font-rasa font-[500] sm:text-[16px] text-[15px] text-[#757575]'>Closed</span>
            </div>
            <div className='flex itmes-center justify-between'>
              <h6 className='font-rasa font-[500] sm:text-[16px] text-[15px] text-[#494948]'>Friday:</h6>
              <span className='font-rasa font-[500] sm:text-[16px] text-[15px] text-[#494948]'>9:00 AM- 7:45 PM</span>
            </div>
            <div className='flex itmes-center justify-between'>
              <h6 className='font-rasa font-[500] sm:text-[16px] text-[15px] text-[#494948]'>Saturday:</h6>
              <span className='font-rasa font-[500] sm:text-[16px] text-[15px] text-[#494948]'>9:00 AM- 6:00 PM</span>
            </div>

          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="">
          <h3 className="font-rasa font-[700] sm:text-[20px] text-[15px] text-[#121111]">No-Show / Late Cancellation Policy</h3>
          <p className="font-rasa font-[400] sm:text-[16px] text-[10px] text-[#2F2F2F] leading-relaxed">
            You will not be charged if you cancel at least 24 hours before your appointment starts. Otherwise, you will be charged 50% of service price for canceling within less than 24 hours notice and 100% if you fail to show up at your appointment.
          </p>
        </div>
      </div>

    </>
  )
}

export default RightSalonDetails