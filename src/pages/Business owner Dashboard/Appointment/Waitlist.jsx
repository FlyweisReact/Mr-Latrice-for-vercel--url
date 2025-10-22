import { useState } from "react";
import BusinessOwnerDashboardLayout from "../../../components/DashbaordLayout/Business Owner";
import { TiArrowSortedDown } from "react-icons/ti";

// Sample waitlist data (replace with actual data from API or state management)
const waitlistData = [
  {
    id: 1,
    customerName: "John Doe",
    service: "Hair Cut",
    requestedDate: "2025-02-25",
    requestedTime: "08:30 AM",
    contact: "john.doe@example.com",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    service: "Manicure",
    requestedDate: "2025-02-26",
    requestedTime: "10:00 AM",
    contact: "jane.smith@example.com",
  },
  {
    id: 3,
    customerName: "Alice Johnson",
    service: "Facial",
    requestedDate: "2025-02-27",
    requestedTime: "11:30 AM",
    contact: "alice.j@example.com",
  },
];

export default function BusinessWaitlist() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Customer Waitlist");
  const locations = ["Customer Waitlist", "Personal Waitlist"];

  return (
    <BusinessOwnerDashboardLayout
      title="Waitlist Management"
      gpnumber="8"
      titleAction={
        <div className="relative inline-block text-center border border-[#2F2F2F] bg-[#FAF9F6] rounded-[10px]">
          <div
            className="flex items-center gap-1 cursor-pointer px-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="font-rasa font-[600] sm:text-[28px] text-[20px] text-[#2F2F2F]">
              {selectedLocation}
            </p>
            <TiArrowSortedDown
              size={20}
              className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              color="#2F2F2F"
            />
          </div>
          {isOpen && (
            <div className="absolute mt-2 z-10 w-[240px] bg-[#FAF9F6] border border-[#2F2F2F] rounded-[10px]">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="px-2 font-rasa font-[600] sm:text-[28px] text-[20px] text-[#2F2F2F] cursor-pointer"
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
      }
    >
      <div className="flex flex-col w-full gap-4 mt-4">
        <div className="flex-1 overflow-auto">
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
              <thead className="bg-[#123E41]">
                <tr>
                  <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2 rounded-tl-2xl">
                    Customer Name
                  </th>
                  <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2">
                    Service
                  </th>
                  <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2">
                    Requested Date
                  </th>
                  <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2">
                    Requested Time
                  </th>
                  <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2 rounded-tr-2xl">
                    Contact
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white shadow">
                {waitlistData.map((entry) => (
                  <tr key={entry.id}>
                    <td className="border-b-1 border-[#A8A8A84D] font-rasa text-[#464646] font-[400] text-center text-[18px] py-2">
                      {entry.customerName}
                    </td>
                    <td className="border-b-1 border-[#A8A8A84D] font-rasa text-[#464646] font-[400] text-center text-[18px] py-2">
                      {entry.service}
                    </td>
                    <td className="border-b-1 border-[#A8A8A84D] font-rasa text-[#464646] font-[400] text-center text-[18px] py-2">
                      {entry.requestedDate}
                    </td>
                    <td className="border-b-1 border-[#A8A8A84D] font-rasa text-[#464646] font-[400] text-center text-[18px] py-2">
                      {entry.requestedTime}
                    </td>
                    <td className="border-b-1 border-[#A8A8A84D] font-rasa text-[#464646] font-[400] text-center text-[18px] py-2">
                      {entry.contact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </BusinessOwnerDashboardLayout>
  );
}