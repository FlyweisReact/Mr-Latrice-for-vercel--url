import { useState } from "react";
import { RiInformationFill } from "react-icons/ri";

import BusinessOwnerDashboardLayout from "../../../components/DashbaordLayout/Business Owner";
import ClientReviews from "./ClientReviews";
import YourReviews from "./YourReviews";

const BusinessReviews = () => {
  const [activeTab, setActiveTab] = useState("Client Reviews");

  return (
    <BusinessOwnerDashboardLayout
      title="Reviews"
      titleAction={
        <RiInformationFill className="text-[#123E41] ml-2 text-2xl" />
      }
    >
      <div className="">
        <div className="flex items-center gap-2 mb-2">
          <div
            className={`px-8 py-2 sm:text-[20px] text-[18px] font-[600] font-rasa rounded-[10px] flex items-center justify-center  cursor-pointer  ${
              activeTab === "Client Reviews"
                ? "bg-[#123E41] text-[#FAF9F6] border border-[#FAF9F6]"
                : " text-[#2F2F2F]"
            }`}
            onClick={() => setActiveTab("Client Reviews")}
          >
            Client Reviews
          </div>
          <div
            className={`px-8 py-2  sm:text-[20px] text-[18px] font-[500] font-rasa rounded-[10px] flex items-center justify-center cursor-pointer  ${
              activeTab === "Your Reviews"
                ? "bg-[#123E41] text-[#FAF9F6] border border-[#FAF9F6]"
                : "text-[#2F2F2F]"
            }`}
            onClick={() => setActiveTab("Your Reviews")}
          >
            Your Reviews
          </div>
        </div>

        {activeTab === "Client Reviews" ? <ClientReviews /> : <YourReviews />}
      </div>
    </BusinessOwnerDashboardLayout>
  );
};

export default BusinessReviews;
