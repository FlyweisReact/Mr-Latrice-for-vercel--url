import React from 'react';


export const ClientsFormsCards = ({ data, showmodal, showmodal1, showmodal3 }) => {
    return (
        <div
            key={data.id}
            className="border border-[#2F2F2F80] rounded-[20px] bg-[#FFFFFF] shadow-[0px_4px_4px_0px_#00000040] p-4 w-110 relative"
        >
            {/* Status badge */}
            <span
                className="absolute top-2 right-2 text-sm px-4 py-4 rounded-[16px] bg-[#EDEDED] sm:text-[18px] text-[15px] font-[700] text-charcoal text-center font-sansation"
            >
                {data.status}
            </span>

            {/* Title & Client */}
            <h3 className="sm:text-[20px] text-[15px] font-[700] text-charcoal leading-[20px] font-sansation">{data.title}</h3>
            <p className="sm:text-[20px] text-[15px] font-[700] text-charcoal leading-[20px] font-sansation mt-2">{data.client}</p>

            {/* Date & Duration */}
            <p className="sm:text-[20px] text-[15px] font-[400] text-charcoal leading-[20px] font-sansation mt-4">{data.date}</p>
            <div className='flex items-center justify-between mt-2'>
                <p className="sm:text-[20px] text-[15px] font-[400] text-charcoal leading-[20px] font-sansation">
                    Duration : <span className='font-[700]'>{data.duration}</span>
                </p>

                {/* View details */}
                <div
                    onClick={showmodal3}
                    className={` px-4.5 py-2.5 rounded-[16px] sm:text-[17px] text-[15px] font-[400] leading-[20px] font-sansation  ${data.status === "Active"
                        ? "bg-[#2F2F2F] text-[#FAF9F6] cursor-pointer"
                        : "bg-[#2F2F2F] text-[#FAF9F6] opacity-50 cursor-not-allowed"
                        }`}
                >
                    View details
                </div>
            </div>


            {/* Actions */}
            <div className="flex gap-2 mt-4">
                <div
                    onClick={showmodal}
                    disabled={data.status === "Completed"}
                    className={`flex-1 border-2 border-[#2F2F2F] rounded-[8px] p-2.5 sm:text-[20px] text-[15px] font-[700] text-center  leading-[20px] font-sansation ${data.status === "Active"
                        ? "text-charcoal border-[#2F2F2F] cursor-pointer"
                        : "text-charcoal border-[#2F2F2F] cursor-not-allowed opacity-50"
                        }`}
                >
                    Send Form
                </div>

                <div
                    onClick={showmodal1}
                    disabled={data.status === "Completed"}
                    className={`flex-1 border-2 border-[#2F2F2F] rounded-[8px] p-2.5 sm:text-[20px] text-[15px] font-[700] text-center  leading-[20px] font-sansation ${data.status === "Active"
                        ? "text-charcoal border-[#2F2F2F] cursor-pointer"
                        : "text-charcoal border-[#2F2F2F] cursor-not-allowed opacity-50"
                        }`}
                >
                    Send Waiver
                </div>
            </div>
        </div>
    );
};


export const PersonalFormsCards = ({ data, showmodal }) => {
    return (
        <div
            key={data.id}
            className="border border-[#2F2F2F80] rounded-[20px] bg-[#FFFFFF] shadow-[0px_4px_4px_0px_#00000040] p-4 w-110 relative"
        >
            <div className="flex items-start mb-4">
                <img
                    src={data.image}
                    alt={data.provider}
                    className="w-30 h-30 rounded-full object-cover mr-4"
                />
                <div className='pt-4'>
                    <p className="sm:text-[22px] text-[15px] font-[700] text-charcoal leading-[20px] font-sansation mb-2">Provider: {data.provider}</p>
                    <p className="sm:text-[22px] text-[15px] font-[700] text-charcoal leading-[20px] font-sansation mb-5">{data.service}</p>
                    <p className="sm:text-[20px] text-[15px] font-[400] text-charcoal leading-[20px] font-sansation">{data.date}</p>
                </div>
            </div>


            <div className="flex gap-2 mt-7">
                <div
                    disabled={data.status === "Completed"}
                    className="flex-1 border-2 rounded-[8px] p-2.5 sm:text-[20px] text-[15px] font-[700] text-center  leading-[20px] font-sansation text-charcoal border-[#2F2F2F] cursor-pointer"
                >
                    Response Sent
                </div>

                <div
                    onClick={showmodal}
                    disabled={data.status === "Completed"}
                    className="flex-1 border-2 rounded-[8px] p-2.5 sm:text-[20px] text-[15px] font-[700] text-center  leading-[20px] font-sansation text-charcoal border-[#2F2F2F] cursor-pointer"
                >
                    View Details
                </div>
            </div>
        </div>
    );
};

