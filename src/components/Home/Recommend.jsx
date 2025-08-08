import React from 'react';
import Slider from 'react-slick';
import { MdInfoOutline } from "react-icons/md";
import { MdThumbUp } from "react-icons/md";
import { FaHeart } from 'react-icons/fa';
import { FaPersonRunning } from "react-icons/fa6";


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './recommend.css';

import { useNavigate } from "react-router-dom";


// Sample data for recommended professionals
const recommendedProfessionals = [
  {
    id: 1,
    name: 'Omar Vaccaro',
    location: 'New York, NY 10011',
    rating: 4.9,
    reviews: 209,
    distance: 10,
    promoted: true,
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 2,
    name: 'Omar Vaccaro',
    location: 'New York, NY 10011',
    rating: 4.9,
    reviews: 209,
    distance: 10,
    promoted: true,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'
  },
  {
    id: 3,
    name: 'Omar Vaccaro',
    location: 'New York, NY 10011',
    rating: 4.9,
    reviews: 209,
    distance: 10,
    promoted: true,
    image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 4,
    name: 'Omar Vaccaro',
    location: 'New York, NY 10011',
    rating: 4.9,
    reviews: 209,
    distance: 10,
    promoted: true,
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80'
  },
  {
    id: 5,
    name: 'Omar Vaccaro',
    location: 'New York, NY 10011',
    rating: 4.9,
    reviews: 209,
    distance: 10,
    promoted: true,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }
];

// Custom arrow components for the slider
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className="slick-prev-custom"
      onClick={onClick}
      aria-label="Previous"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 19L8 12L15 5" stroke="#123E41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className="slick-next-custom"
      onClick={onClick}
      aria-label="Next"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5L16 12L9 19" stroke="#123E41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};

// Professional card component
const ProfessionalCard = ({ professional }) => {
  const navigate = useNavigate();
  return (
    <div className="cursor-pointer max-w-sm rounded-[25px] overflow-hidden border border-[#2F2F2F] shadow-[0px_6px_14px_0px_#00000040] bg-[#123E41] relative p-3" onClick={() => navigate('/services-details')}>
      <div className="relative">
        <img
          src={professional.image}
          alt="Shop"
          className="w-full h-50 rounded-[10px] object-cover"
        />
        {/* Rating Bubble */}
        <div className="backdrop-blur-lg absolute top-0 right-0 bg-[#1A1A1A33] px-4 py-1 rounded-tr-[10px] rounded-br-[50px] rounded-bl-[40px] rounded-tl-[40px] shadow-md">
          <div className="flex flex-col items-center leading-tight">
            <span className="text-[#FAF9F6] font-rasa sm:text-[20px] text-[15px] font-[500] m-0">{professional.rating}</span>
            <span className="text-[#FAF9F6] font-rasa sm:text-[15px] text-[12px] font-[500] m-0">{professional.reviews} reviews</span>
          </div>
        </div>

        <div className="backdrop-blur-lg absolute top-2 left-2 bg-[#1A1A1A33]  rounded-full flex items-center justify-center w-[40px] h-[40px] ">
          <FaHeart className="text-white  hover:text-[#FF0000] transition-colors text-xl" />
        </div>


        {/* Promoted Tag */}
        <div className="backdrop-blur-lg absolute bottom-2 left-1 bg-[#1A1A1A33] px-5 py-2 rounded-full flex items-center justify-center gap-1">
          <FaPersonRunning color="#FAF9F6" size={15} />
          <p className="text-[#FAF9F6] font-rasa sm:text-[14px] text-[12px] font-[500] m-0">{professional.distance} km away</p>
        </div>

        <div className="absolute bottom-2 right-2 flex items-center gap-1">
          <div className="backdrop-blur-lg bg-[#1A1A1A33]  rounded-full flex items-center justify-center w-[40px] h-[40px]">
            <MdInfoOutline color="#FAF9F6" size={25} />
          </div>
          <div className="backdrop-blur-lg bg-[#1A1A1A33] px-5 py-2 rounded-full flex items-center justify-center gap-1">
            <MdThumbUp color="#FAF9F6" size={15} />
            <p className="text-[#FAF9F6] font-rasa sm:text-[14px] text-[12px] font-[500] m-0">Promoted</p>
          </div>
        </div>

      </div>

      {/* Info Section */}
      <div className="py-2 px-2">
        <div>
          <p className="text-[#FAF9F6] font-sansation sm:text-[16px] text-[14px] font-[800]">{professional.name}</p>
          <p className="text-[#FAF9F6] font-sansation sm:text-[14px] text-[12px] font-[600] mt-1.5">{professional.location}</p>
        </div>
      </div>
    </div>
  );
};

const Recommend = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="recommend-section">
      <div className="px-4 md:px-8 lg:px-12">
        <h2 className="recommend-heading">
          RECOMMENDED
        </h2>

        <div className="recommend-slider-container">
          <Slider {...settings}>
            {recommendedProfessionals.map(professional => (
              <div key={professional.id} className="recommend-slide">
                <ProfessionalCard professional={professional} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Recommend;