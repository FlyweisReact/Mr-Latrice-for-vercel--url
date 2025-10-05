import React from 'react';
import img from '../../../assets/images/dashboard/img36.jpg';

const FormsCards = ({ data, isPending, showmodal, handleOpenAppointmentform, handleOpenWaiverForm }) => {
  return (
    <div className="bg-white border border-[#2F2F2F80] rounded-[20px] shadow-[0px_4px_4px_0px_#00000040] px-3 py-2.5">
      <div className="flex flex-col">
        <div className="flex items-start gap-3">
          <img
            src={img}
            alt="Profile"
            className="w-[90px] h-[90px] rounded-full object-cover"
          />
          <div>
            <h6 className="font-[700] text-[18px] sm:text-[22px] text-charcoal font-sansation">
              Provider: {data.providerName}
            </h6>
            <p className="font-[400] text-[15px] sm:text-[18px] text-charcoal font-sansation flex items-center gap-2">
              {data.service}: {data.date}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-end items-center gap-2 mt-2">
          <div className="border border-[#2F2F2F] px-2 py-1 rounded-[4px] text-[15px] sm:text-[18px] text-charcoal">
            {data.status}
          </div>
          <button
            onClick={() => handleOpenAppointmentform()}
            className="cursor-pointer border border-[#2F2F2F] px-2 py-1 rounded-[4px] text-[15px] sm:text-[18px] text-charcoal hover:bg-gray-100"
          >
            {data.status === "Response Sent" ? "See Appointment Form" : "Fill Appointment Form"}
          </button>
          <button
            onClick={() => handleOpenWaiverForm()}
            className="cursor-pointer border border-[#2F2F2F] px-2 py-1 rounded-[4px] text-[15px] sm:text-[18px] text-charcoal hover:bg-gray-100"
          >
            {data.status === "Response Sent" ? "See Waiver" : "Fill Waiver"}
          </button>
          <div
            onClick={showmodal}
            className="cursor-pointer border border-[#2F2F2F] px-2 py-1 rounded-[4px] text-[15px] sm:text-[18px] text-charcoal hover:bg-gray-100"
          >
            View Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsCards;
