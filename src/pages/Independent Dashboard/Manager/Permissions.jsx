import React, { useState } from 'react';
import BusinessOwnerDashboardLayout from '../../../components/DashbaordLayout/Business Owner';
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

const managerPermissions = [
    "View & manage appointments at their assigned location.",
    "Respond to basket hiring requests for their location.",
    "Hire independent providers for their location.",
    "View staff availability and assign services to open chairs.",
    "Track payouts and tips at the branch level (view only).",
    "Update their own working hours/availability.",
    "Edit service listings for the assigned location.",
    "Manage client reviews for their team (view/respond/flag).",
    "Repost expired or rejected hiring offers for their location.",
];

const advancedPermissions = [
    "Create/edit team members and availability",
    "Set local deposit rules or cancellation windows",
    "View financial summaries (for their location only)",
    "Adjust operating hours or blackout dates",
    "Approve or block booking requests (if manual approval is enabled)",
];

const Permissions = () => {
    const [selectedPermission, setSelectedPermission] = useState("");
    const navigate = useNavigate();
    return (
        <BusinessOwnerDashboardLayout
            titleAction={
                <div className="flex items-center gap-2">
                    <HiOutlineArrowLeft color='#000000' size={30} className='cursor-pointer' onClick={() => navigate(-1)} />
                    <div className="sm:text-[40px] text-2xl font-[600] font-rasa whitespace-nowrap text-charcoal">
                        Core Permissions
                    </div>
                </div>
            }
        >
            <div className="">
                {/* Manager Permissions */}
                <div className="mb-10">
                    <h6 className="font-sansation font-bold sm:text-[25px] text-[20px] text-charcoal mb-4">
                        Manager Can
                    </h6>
                    <div className="flex flex-wrap gap-5">
                        {managerPermissions.map(permission => (
                            <div key={permission}
                                onClick={() => setSelectedPermission(permission)}
                                className={`cursor-pointer border p-[10px] rounded-[10px] transition font-sansation  sm:text-[16px] text-[20px] text-center  ${selectedPermission === permission
                                    ? "bg-[#123E41] text-[#FAF9F6] font-[600]"
                                    : "bg-[#FFFFFF00] text-[#2F2F2F] border-[#2F2F2F] font-[400]"
                                    }`}
                            >
                                {permission}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optional Advanced Permissions */}
                <div>
                    <h6 className="font-sansation font-bold sm:text-[25px] text-[20px] text-charcoal mb-4">
                        Optional Advanced Permissions
                    </h6>
                    <div className="flex flex-wrap gap-3">
                        {advancedPermissions.map(permission => (
                            <div key={permission}
                                onClick={() => setSelectedPermission(permission)}
                                className={`cursor-pointer border p-[10px] rounded-[10px] transition font-sansation  sm:text-[16px] text-[20px] text-center  ${selectedPermission === permission
                                    ? "bg-[#123E41] text-[#FAF9F6] font-[600]"
                                    : "bg-[#FFFFFF00] text-[#2F2F2F] border-[#2F2F2F] font-[400]"
                                    }`}
                            >
                                {permission}
                            </div>
                        ))}
                    </div>
                </div>

                <div className=" flex justify-center w-[50%] m-auto mt-8">
                    <button className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                    >
                        Save
                    </button>
                </div>
            </div>
        </BusinessOwnerDashboardLayout>
    );
};

export default Permissions;
