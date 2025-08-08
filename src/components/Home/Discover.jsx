import React from "react";
import { Link } from "react-router-dom";
// Import icons (replace these with actual paths when available)
import SearchIcon from "../../assets/images/home/search.png";
import LocationIcon from "../../assets/images/home/location.png";
import SearchButtonIcon from "../../assets/images/home/searchfill.png";
import BarberImage from "../../assets/images/home/cut.png";
import { ImSearch } from "react-icons/im";


const Discover = () => {
  return (
    <div className="w-full bg-secondary relative overflow-hidden">
      <div className="bg-primary w-full h-[75px]"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-center text-charcoal font-[400] font-glamore text-[32px] md:text-[35px] lg:text-[40px] text-primary leading-tight mb-8">
            DISCOVER AND BOOK TRUSTED<br />
            LOCAL BEAUTY PROFESSIONALS.
          </h2>

          {/* Search Bar */}
          <div className="flex items-center justify-center">
            <div className="bg-[#FAF9F6] rounded-[100px] flex items-center p-2 max-w-xl mx-auto md:mx-0 shadow-md">
              <div className="flex items-center flex-1 border-r border-[#17112380] px-3">
                <ImSearch size={25} color="#2F2F2F" className="text-shadow-[0px_4px_4px_0px_#00000040]" />
                <input
                  type="text"
                  placeholder="Service, stylist or salon."
                  className="w-full py-2 px-1 outline-none  text-gray-800 font-be-vietnam-pro"
                />
              </div>

              <div className="flex items-center flex-1 px-3">
                <div className="mr-2">
                  <img src={LocationIcon} alt="Location" className="w-6 h-6" />
                </div>
                <input
                  type="text"
                  placeholder="your location"
                  className="w-full py-2 px-1 outline-none ext-gray-800 font-be-vietnam-pro"
                />
              </div>

              <div className="bg-[#2F2F2F] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                <ImSearch size={20} color="#FAF9F6" className="text-shadow-[0px_4px_4px_0px_#00000040]" />
              </div>
            </div>
          </div>


          <div className="w-full flex justify-center">
            {/* Business Links */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <p className="text-charcoal font-rasa text-[20px] md:text-[25px] lg:text-[30px]  font-[500]">
                Grow Your Business with Latrice
              </p>
              <Link
                to="/account-type"
                className="bg-[#FFCC4E] text-charcoal font-rasa text-[15px] md:text-[20px] lg:text-[20px] font-[500] px-4 py-2.5 rounded-full hover:bg-opacity-90 transition-all"
              >
                Setup my business
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-5/12 relative">
          <div className="relative">
            {/* Image with effects */}
            <div className="relative overflow-hidden">
              <img
                src={BarberImage}
                alt="Barber cutting hair"
                className="w-[450px]  h-[475px] object-contain"
                style={{
                  filter: "drop-shadow(0 4px 12px rgba(18, 62, 65, 0.25))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
