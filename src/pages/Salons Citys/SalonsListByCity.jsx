import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa6';
import { useGetAllSalonsQuery } from '../../redux/api/salonApi';

const SalonsListByCity = ({ city }) => {
  const [activeTab, setActiveTab] = useState('Free cancellation');
  const navigate = useNavigate();
  const { loginType } = useSelector((state) => state.auth);
  const { data: salons, isLoading, isError, error } = useGetAllSalonsQuery(loginType);

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-6 w-32 bg-gray-200 rounded mb-2"></div>
        <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
        <div className="flex items-center gap-1 overflow-x-scroll w-full mb-4 pb-2">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex-shrink-0 px-7.5 py-2.5 w-32 h-10 bg-gray-200 rounded-[30px]"></div>
          ))}
        </div>
        <div className="space-y-4 overflow-y-scroll h-[80vh] pr-2 mb-5">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-full bg-[#FFFFFF] flex flex-col gap-2 md:flex-row border rounded-[20px] overflow-hidden shadow-[0px_4px_4px_0px_#00000040] px-2.5 py-3"
            >
              <div className="w-full md:w-60 h-48 bg-gray-200 rounded-[20px]"></div>
              <div className="flex flex-col w-full space-y-2">
                <div className="space-y-2">
                  <div className="h-5 w-40 bg-gray-200 rounded"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="h-8 w-28 bg-gray-200 rounded-[30px]"></div>
                  {[...Array(3)].map((_, idx) => (
                    <div key={idx} className="h-8 w-36 bg-gray-200 rounded-[30px]"></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="">
        <p className="font-rasa font-[300] sm:text-[20px] text-[15px] text-[#1D1D1D] m-0">430 + Salons</p>
        <h2 className="font-rasa font-[700] sm:text-[35px] text-[25px] text-[#1D1D1D]">
          Salons in {city ? city : 'New York'}
        </h2>
        <div className="text-center text-red-500 mt-4">
          Error loading salons: {error?.data?.message || 'Something went wrong'}
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <p className="font-rasa font-[300] sm:text-[20px] text-[15px] text-[#1D1D1D] m-0">
        {salons?.length || 0} + Salons
      </p>
      <h2 className="font-rasa font-[700] sm:text-[35px] text-[25px] text-[#1D1D1D]">
        Salons in {city ? city : 'New York'}
      </h2>

      <div className="flex items-center gap-1 overflow-x-scroll w-full mb-4 pb-2">
        <div
          className={`flex-shrink-0 px-7.5 py-2.5 sm:text-[20px] text-[18px] font-rasa rounded-[30px] flex items-center justify-center cursor-pointer ${
            activeTab === 'Free cancellation'
              ? 'bg-[#FFE0E9] text-[#3E4958] font-[700]'
              : 'text-[#3E4958] font-[300] bg-[white] border border-[#3E4958]'
          }`}
          onClick={() => setActiveTab('Free cancellation')}
        >
          Free cancellation
        </div>
        <div
          className={`flex-shrink-0 px-7.5 py-2.5 sm:text-[20px] text-[18px] font-rasa rounded-[30px] flex items-center justify-center cursor-pointer ${
            activeTab === 'Instant Book'
              ? 'bg-[#FFE0E9] text-[#3E4958] font-[700]'
              : 'text-[#3E4958] font-[300] bg-[white] border border-[#3E4958]'
          }`}
          onClick={() => setActiveTab('Instant Book')}
        >
          Instant Book
        </div>
        <div
          className={`flex-shrink-0 px-7.5 py-2.5 sm:text-[20px] text-[18px] font-rasa rounded-[30px] flex items-center justify-center cursor-pointer ${
            activeTab === 'Nearest From My Place'
              ? 'bg-[#FFE0E9] text-[#3E4958] font-[700]'
              : 'text-[#3E4958] font-[300] bg-[white] border border-[#3E4958]'
          }`}
          onClick={() => setActiveTab('Nearest From My Place')}
        >
          Nearest From My Place
        </div>
        <div
          className={`flex-shrink-0 px-7.5 py-2.5 sm:text-[20px] text-[18px] font-rasa rounded-[30px] flex items-center justify-center cursor-pointer ${
            activeTab === 'Above 4.5 Star Rating'
              ? 'bg-[#FFE0E9] text-[#3E4958] font-[700]'
              : 'text-[#3E4958] font-[300] bg-[white] border border-[#3E4958]'
          }`}
          onClick={() => setActiveTab('Above 4.5 Star Rating')}
        >
          Above 4.5 Star Rating
        </div>
      </div>

      <div className="space-y-4 overflow-y-scroll h-[80vh] pr-2 mb-5">
        {salons?.map((salon) => (
          <div
            key={salon._id}
            className="w-full bg-[#FFFFFF] flex flex-col gap-2 md:flex-row border rounded-[20px] overflow-hidden shadow-[0px_4px_4px_0px_#00000040] px-2.5 py-3"
          >
            <img
              src={salon.coverImage || salon.image || 'https://via.placeholder.com/240x192'}
              alt={salon.fullName}
              className="w-full md:w-60 h-48 rounded-[20px] object-cover"
            />
            <div className="flex flex-col w-full space-y-2">
              <div className="space-y-2">
                <h3 className="font-poppins font-[800] sm:text-[17px] text-[15px] text-[#3E4958]">
                  {salon.fullName}
                </h3>
                <div className="flex items-center font-poppins font-[300] sm:text-[15px] text-[15px] text-[#3E4958] gap-1">
                  <FaStar size={16} className="text-yellow-400" />
                  {salon.rating} <span className="mx-1">·</span>{' '}
                  {salon.professionalType}
                </div>
                <p className="font-poppins font-[300] sm:text-[15px] text-[15px] text-[#3E4958]">
                  {salon.address || 'Location not provided'}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <div
                  className="bg-[#2F2F2F] cursor-pointer border border-[#2F2F2F] rounded-[30px] px-2.5 py-2 font-[800] font-poppins sm:text-[12px] text-[12px] text-[#FAF9F6]"
                  onClick={() => navigate(`/services-details/${salon._id}`)}
                >
                  See All Services
                </div>
                {salon.services?.map((service, idx) => (
                  <div
                    key={idx}
                    className="border border-[#2F2F2F] rounded-[30px] px-2.5 py-2 font-poppins sm:text-[12px] text-[12px] text-[#3E4958]"
                  >
                    {service.title} · {service.time} · {service.price}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalonsListByCity;