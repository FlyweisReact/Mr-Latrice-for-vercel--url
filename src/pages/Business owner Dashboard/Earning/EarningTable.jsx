import { useState } from "react";
import Pagination from "../../../components/Pagination/Pagination";

const data = new Array(108).fill(null).map(() => ({
  date: "12/05/2024",
  time: "06:00 AM – 06:30 AM",
  username: `Alena George`,
  service: "Hair Service",
  amount: "$300.00",
  paymentMode: "NFC",
  transactionId: "14785412369622336",
  status: "Completed",
}));

export default function EarningTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <>
      <div className="bg-white  shadow-[0px_8.81px_52.86px_0px_#0000001A] rounded-[6px]">
        <div className="overflow-auto">
          <table className="min-w-full rounded-lg overflow-hidden">
            <thead className="bg-[#123E41] text-white text-left">
              <tr>
                <th className="px-4 py-2 font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FFFFFF]">
                  DATE & TIME
                </th>
                <th className="px-4 py-2 font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FFFFFF]">
                  USER NAME
                </th>
                <th className="px-4 py-2 font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FFFFFF]">
                  SERVICES
                </th>
                <th className="px-4 py-2 font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FFFFFF]">
                  AMOUNT
                </th>
                <th className="px-4 py-2 font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FFFFFF]">
                  PAYMENT MODE
                </th>
                <th className="px-4 py-2 font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FFFFFF]">
                  TRANSACTION ID
                </th>
                <th className="px-4 py-2 font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FFFFFF]">
                  STATUS
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {paginatedData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-1 border border-[#A8A8A84D] font-[400] font-rasa sm:text-[18px] text-[15px] text-[#464646]">
                    {item.date}
                    <br />
                    <span className="font-[400] font-rasa sm:text-[12px] text-[10px] text-[#464646]">
                      {item.time}
                    </span>
                  </td>
                  <td className="px-4 py-2 border border-[#A8A8A84D] font-[500] font-rasa sm:text-[18px] text-[15px] text-[#464646]">
                    {item.username}
                  </td>
                  <td className="px-4 py-2 border border-[#A8A8A84D] font-[500] font-rasa sm:text-[18px] text-[15px] text-[#464646]">
                    {item.service}
                  </td>
                  <td className="px-4 py-2 border border-[#A8A8A84D] font-[500] font-rasa sm:text-[18px] text-[15px] text-[#464646]">
                    {item.amount}
                  </td>
                  <td className="px-4 py-2 border border-[#A8A8A84D] font-[500] font-rasa sm:text-[18px] text-[15px] text-[#464646]">
                    {item.paymentMode}
                  </td>
                  <td className="px-4 py-2 border border-[#A8A8A84D] font-[500] font-rasa sm:text-[18px] text-[15px] text-[#464646]">
                    {item.transactionId}
                  </td>
                  <td className="px-4 py-2 border border-[#A8A8A84D] font-[500] font-rasa sm:text-[18px] text-[15px] text-[#123E41]">
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap  items-center justify-between p-7">
          <p className="mt-2 font-[700] font-rasa sm:text-[18px] text-[15px] text-[#000000] sm:mb-0 mb-2">
            Showing {(currentPage - 1) * pageSize + 1} to{" "}
            {(currentPage - 1) * pageSize + paginatedData.length} of{" "}
            {data.length} entries
          </p>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}
