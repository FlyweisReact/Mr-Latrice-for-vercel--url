import React, { useState } from 'react'
import img from '../../assets/images/dashboard/img86.jpg'
import img1 from '../../assets/images/dashboard/img33.png'
import img2 from '../../assets/images/dashboard/img34.jpg'
import { useNavigate } from "react-router-dom";

import { FaStar } from "react-icons/fa6";

const salons = [
  {
    id: 1,
    name: "Latrica Hair Salon",
    rating: 3.8,
    vehicle: "Mercedes Vito",
    location: "NY 10003, USA",
    services: [
      { title: "Braids", time: "150 Mins", price: "$100" },
      { title: "Box Braids", time: "480 Mins", price: "$200" },
      { title: "Crochet", time: "240 Mins", price: "$180" },
    ],
    image: img,
  },
  {
    id: 2,
    name: "Jakob Hair Salon",
    rating: 3.8,
    vehicle: "Mercedes Vito",
    location: "NY 10003, USA",
    services: [
      { title: "Braids", time: "150 Mins", price: "$100" },
      { title: "Box Braids", time: "480 Mins", price: "$200" },
      { title: "Crochet", time: "240 Mins", price: "$180" },
    ],
    image: img1,
  },
  {
    id: 3,
    name: "Nolan Hair Salon",
    rating: 3.8,
    vehicle: "Mercedes Vito",
    location: "NY 10003, USA",
    services: [
      { title: "Braids", time: "150 Mins", price: "$100" },
      { title: "Box Braids", time: "480 Mins", price: "$200" },
      { title: "Crochet", time: "240 Mins", price: "$180" },
    ],
    image: img2,
  },
];



const SalonsListByCity = ({ city }) => {
  const [activeTab, setActiveTab] = useState('Free cancellation');
  const navigate = useNavigate();

  return (
    <div className="">
      <p className='font-rasa font-[300] sm:text-[20px] text-[15px] text-[#1D1D1D] m-0'>430 + Salons</p>
      <h2 className="font-rasa font-[700] sm:text-[35px] text-[25px] text-[#1D1D1D] ">Salons in {city ? city : "New York"}</h2>

      <div className="flex items-center gap-1 overflow-x-scroll w-full mb-4 pb-2">
        <div
          className={`flex-shrink-0 px-7.5 py-2.5 sm:text-[20px] text-[18px]  font-rasa rounded-[30px] flex items-center justify-center  cursor-pointer  ${activeTab === 'Free cancellation' ? 'bg-[#FFE0E9] text-[#3E4958] font-[700]' : ' text-[#3E4958] font-[300] bg-[white] border border-[#3E4958]'
            }`}
          onClick={() => setActiveTab('Free cancellation')}
        >

          Free cancellation
        </div>
        <div
          className={`flex-shrink-0 px-7.5 py-2.5 sm:text-[20px] text-[18px]  font-rasa rounded-[30px] flex items-center justify-center  cursor-pointer  ${activeTab === 'Instant Book' ? 'bg-[#FFE0E9] text-[#3E4958] font-[700]' : ' text-[#3E4958] font-[300] bg-[white] border border-[#3E4958]'
            }`}
          onClick={() => setActiveTab('Instant Book')}
        >

          Instant Book
        </div>
        <div
          className={`flex-shrink-0 px-7.5 py-2.5 sm:text-[20px] text-[18px]  font-rasa rounded-[30px] flex items-center justify-center  cursor-pointer  ${activeTab === 'Nearest From My Place' ? 'bg-[#FFE0E9] text-[#3E4958] font-[700]' : ' text-[#3E4958] font-[300] bg-[white] border border-[#3E4958]'
            }`}
          onClick={() => setActiveTab('Nearest From My Place')}
        >

          Nearest From My Place
        </div>
        <div
          className={`flex-shrink-0 px-7.5 py-2.5 sm:text-[20px] text-[18px]  font-rasa rounded-[30px] flex items-center justify-center  cursor-pointer  ${activeTab === 'Above 4.5 Star Rating' ? 'bg-[#FFE0E9] text-[#3E4958] font-[700]' : ' text-[#3E4958] font-[300] bg-[white] border border-[#3E4958]'
            }`}
          onClick={() => setActiveTab('Above 4.5 Star Rating')}
        >

          Above 4.5 Star Rating
        </div>
      </div>

      <div className="space-y-4 overflow-y-scroll h-[80vh] pr-2 mb-5">
        {salons.map((salon) => (
          <div
            key={salon.id}
            className="w-full bg-[#FFFFFF] flex flex-col gap-2 md:flex-row border rounded-[20px] overflow-hidden shadow-[0px_4px_4px_0px_#00000040] px-2.5 py-3"
          >
            <img
              src={salon.image}
              alt={salon.name}
              className="w-full md:w-60 h-48 rounded-[20px] object-cover"
            />
            <div className="flex flex-col w-full space-y-2">
              <div className='space-y-2'>
                <h3 className="font-poppins font-[800] sm:text-[17px] text-[15px] text-[#3E4958]">{salon.name}</h3>
                <div className="flex items-center font-poppins font-[300] sm:text-[15px] text-[15px] text-[#3E4958] gap-1">
                  <FaStar size={16} className="text-yellow-400" />
                  {salon.rating} <span className="mx-1">·</span> {salon.vehicle}
                </div>
                <p className=" font-poppins font-[300] sm:text-[15px] text-[15px] text-[#3E4958]">{salon.location}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <div
                  className="bg-[#2F2F2F] cursor-pointer border border-[#2F2F2F] rounded-[30px] px-2.5 py-2 font-[800] font-poppins sm:text-[12px] text-[12px] text-[#FAF9F6]"
                  onClick={() => navigate("/services-details")}
                >
                  See All Services
                </div>
                {salon.services.map((service, idx) => (
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
  )
}

export default SalonsListByCity