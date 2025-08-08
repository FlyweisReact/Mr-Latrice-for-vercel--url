import React from "react";
import { Link } from "react-router-dom";

// Import placeholder images (replace with actual image paths)
import BraidsImg from "../../assets/images/home/services/r1.png";
import CutsImg from "../../assets/images/home/services/r2.png";
import LocsImg from "../../assets/images/home/services/r3.png";
import MensGroomingImg from "../../assets/images/home/services/r4.png";
import NailsImg from "../../assets/images/home/services/r5.png";
import MakeupImg from "../../assets/images/home/services/r6.png";
import SkincareImg from "../../assets/images/home/services/r7.png";
import SpaImg from "../../assets/images/home/services/r8.png";
import LashBrowImg from "../../assets/images/home/services/r9.png";
import BridalImg from "../../assets/images/home/services/r10.png";
import MobileBeautyImg from "../../assets/images/home/services/r11.png";

const serviceData = [
  {
    id: 1,
    title: "Braids & Hair Extensions",
    image: BraidsImg,
    link: "/salons/New York"
  },
  {
    id: 2,
    title: "Cuts, Color & Silk Press",
    image: CutsImg,
    link: "/salons/New York"
  },
  {
    id: 3,
    title: "Locs, Hair Care & Treatments",
    image: LocsImg,
    link: "/salons/New York"
  },
  {
    id: 4,
    title: "Men's Grooming Services",
    image: MensGroomingImg,
    link: "/salons/New York"
  },
  {
    id: 5,
    title: "Nail Services",
    image: NailsImg,
    link: "/salons/New York"
  },
  {
    id: 6,
    title: "Makeup & Glam Services",
    image: MakeupImg,
    link: "/salons/New York"
  },
  {
    id: 7,
    title: "Skincare Services",
    image: SkincareImg,
    link: "/salons/New York"
  },
  {
    id: 8,
    title: "Spa Therapy & Relaxation",
    image: SpaImg,
    link: "/salons/New York"
  },
  {
    id: 9,
    title: "Lash & Brow Enhancements",
    image: LashBrowImg,
    link: "/salons/New York"
  },
  {
    id: 10,
    title: "Bridal & Event Packages",
    image: BridalImg,
    link: "/salons/New York"
  },
  {
    id: 11,
    title: "Mobile Beauty Services",
    image: MobileBeautyImg,
    link: "/salons/New York"
  }
];

const ServiceCard = ({ service }) => {
  return (
    <Link to={service.link} className="block">
      <div className="bg-primary rounded-[25px] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full w-full pb-4">
        {/* Image container with fixed height */}
        <div className=" overflow-hidden p-6">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-contain rounded-[25px]"
          />
        </div>
        {/* Text container with fixed height for consistent card sizes */}
        <div className="text-center  flex items-center justify-center mb-4 md:mb-0">
          <h3 className="text-white font-rasa text-[24px] font-medium leading-tight">{service.title}</h3>
        </div>
      </div>
    </Link>
  );
};

const FindServices = () => {
  return (
    <div className="w-full bg-white py-8">
      <div className="px-4 md:px-20">
        <h2 className="text-[24px] md:text-[40px] text-charcoal font-glamore text-center md:text-left mb-6">
          FIND BY OUR SERVICES
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 justify-center w-full">
          {serviceData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindServices;
