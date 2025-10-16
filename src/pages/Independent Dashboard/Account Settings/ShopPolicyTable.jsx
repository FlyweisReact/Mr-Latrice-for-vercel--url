import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { MdAccessTime, MdBuild, MdBlock, MdPhoneDisabled, MdCleanHands, MdReceipt, MdCancel, MdAttachMoney, MdCalendarToday, MdLocalHospital, MdWarning, MdAccessAlarms, MdRepeat, MdCached, MdAutorenew } from "react-icons/md";
import { useState } from "react";

const policies = [
  {
    icon: <MdAccessTime />,
    title: "Grace Period",
    description: "15 Minutes After Start",
  },
  {
    icon: <MdBuild />,
    title: "Service-Specific Only",
    description: "No Add-Ons Without Approval",
  },
  {
    icon: <MdBlock />,
    title: "No Children Allowed",
    description: "Safety Reasons",
  },
  {
    icon: <MdPhoneDisabled />,
    title: "No Phone Use During Service",
    description: "Respectful Space",
  },
  {
    icon: <MdCleanHands />,
    title: "Clean Hair Required",
    description: "Arrive With Freshly Washed Hair",
  },
  {
    icon: <MdReceipt />,
    title: "Mask Required (Optional)",
    description: "Based On Stylist Preference",
  },
  {
    icon: <MdCancel />,
    title: "No Extra Guests",
    description: "Only Client Being Serviced Allowed",
  },
  {
    icon: <MdAttachMoney />,
    title: "Deposit Rules",
    description: "Deposit is Non-Refundable if Appointment is Cancelled",
  },
  {
    icon: <MdCalendarToday />,
    title: "Reschedule Limit",
    description: "Max 3 Reschedules Per Appointment",
  },
  {
    icon: <MdLocalHospital />,
    title: "Health Policy",
    description: "Stay Home if Feeling Unwell",
  },
  {
    icon: <MdWarning />,
    title: "Product Sensitivity Alert",
    description: "Notify of Allergies in Advance",
  },
  {
    icon: <MdAccessAlarms />,
    title: "Same-Day Appointments",
    description: "Available Upon Request – Fee May Apply",
  },
  {
    icon: <MdRepeat />,
    title: "Rescheduling Policy",
    description: "Reschedulable Up To 1h, Subject to Provider Terms",
  },
  {
    icon: <MdCached />,
    title: "Flexible Rescheduling",
    description: "One Free Change, Fees May Apply After",
  },
  {
    icon: <MdAutorenew />,
    title: "Change Appointment",
    description: "Rescheduling Allowed With 24–72h Notice",
  },
];

const PolicyTable = ({ handleopenEditmodal }) => {
  const [selectedPolicies, setSelectedPolicies] = useState(
    policies.reduce((acc, _, index) => ({ ...acc, [index]: false }), {})
  );

  const handleCheckboxChange = (index) => {
    setSelectedPolicies((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full rounded-lg overflow-hidden">
        <thead className="bg-[#123E41] text-white text-left">
          <tr>
            <th className="p-3 font-[600] font-rasa sm:text-[20px] text-[15px] text-[#FFFFFF]">Icon</th>
            <th className="p-3 font-[600] font-rasa sm:text-[20px] text-[15px] text-[#FFFFFF]">Policy Title</th>
            <th className="p-3 font-[600] font-rasa sm:text-[20px] text-[15px] text-[#FFFFFF]">Description</th>
            <th className="p-3 font-[600] font-rasa sm:text-[20px] text-[15px] text-[#FFFFFF]">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white shadow-2xl">
          {policies.map((policy, index) => (
            <tr key={index} className="shadow">
              <td className="p-3 font-[400] font-rasa sm:text-[18px] text-[15px] text-[#000000]">{policy.icon}</td>
              <td className="p-3 font-[400] font-rasa sm:text-[18px] text-[15px] text-[#464646]">{policy.title}</td>
              <td className="p-3 font-[400] font-rasa sm:text-[18px] text-[15px] text-[#464646]">{policy.description}</td>
              <td className="p-3 flex justify-start gap-3 items-center">
                <div
                  className="border border-[#CED4DA] px-2 py-2 rounded-[7.36px] bg-[#FFFFFF] shadow-sm cursor-pointer"
                  onClick={handleopenEditmodal}
                >
                  <FiEdit3 className="text-[#212529]" />
                </div>
                <div className="border border-[#CED4DA] px-2 py-2 rounded-[7.36px] bg-[#FFFFFF] shadow-sm cursor-pointer">
                  <AiOutlineDelete className="text-[#212529]" />
                </div>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="peer hidden"
                    checked={selectedPolicies[index]}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <div
                    className={`w-[28px] h-[28px] rounded-sm flex items-center justify-center transition-colors duration-300
                      ${selectedPolicies[index] ? "bg-[#FF827F]" : "bg-[#D9D9D9] border border-[#2F2F2F]"}`}
                  >
                    {selectedPolicies[index] && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PolicyTable;