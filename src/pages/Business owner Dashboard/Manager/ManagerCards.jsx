import React, { useState } from "react";
import img from "../../../assets/images/dashboard/img68.jpg";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiSolidEditAlt } from "react-icons/bi";
import { IoIosClock } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AiFillTool } from "react-icons/ai";

const ManagerCards = ({ setModalOpen, setModalOpen1 }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white rounded-[20px] shadow-[0px_4px_4px_0px_#00000040] ">
        {/* Top section */}
        <div className="flex items-start gap-3 p-2 relative">
          <button className="absolute top-3 right-2 text-[#EB0303] hover:scale-110 transition">
            <RiDeleteBin6Fill size={18} onClick={() => setModalOpen1(true)} />
          </button>

          <img
            src={img}
            alt="Profile"
            className="w-[100px] rounded-[10px] object-cover"
          />
          <div className="space-y-1 mr-5">
            <p className="flex items-center justify-between font-sansation font-[700] sm:text-[19px] text-[15px] text-charcoal ">
              <span className="">Name:</span>
              Jaydon Dias
            </p>
            <p className="flex items-center justify-between font-sansation font-[700] sm:text-[20px] text-[15px] text-charcoal ">
              <span className="">Experience:</span>5 Years
            </p>
            <p className="flex items-center justify-between font-sansation font-[700] sm:text-[20px] text-[15px] text-charcoal ">
              <span className="">Phone Number:</span>
              +1 778 6931 369
            </p>
            <p className="flex items-center justify-between font-sansation font-[700] sm:text-[20px] text-[15px] text-charcoal ">
              <span className="">Email Address:</span>
              example@gmail.com
            </p>
            <p className="flex items-center justify-between font-sansation font-[700] sm:text-[20px] text-[15px] text-charcoal ">
              <span className="">Birthday:</span>
              1994/07/03
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex mt-2">
          <button
            className="w-full bg-[#97E7EC] text-[#123E41] font-semibold sm:text-[18px] text-[15px] px-2 py-2 rounded-bl-[20px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#6cc8cf] transition flex gap-1 items-center justify-center"
            onClick={() => navigate("/business-owner/dashboard/manage-time")}
          >
            <IoIosClock size={20} />
            manage time
          </button>
          <button
            className="w-full bg-[#FFF1CD] text-[#ECA800] font-semibold sm:text-[18px] text-[15px] px-2 py-2 shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#ECA800] hover:text-white transition flex gap-1 items-center justify-center"
            onClick={() =>
              navigate("/business-owner/dashboard/manager/permissions")
            }
          >
            <AiFillTool size={20} />
            Permissions
          </button>
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold sm:text-[18px] text-[15px] px-2 py-2  rounded-br-[20px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition flex gap-1 items-center justify-center"
            onClick={() => setModalOpen(true)}
          >
            <BiSolidEditAlt size={20} />
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default ManagerCards;
