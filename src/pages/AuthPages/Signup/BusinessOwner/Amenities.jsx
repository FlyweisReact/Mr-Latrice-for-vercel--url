import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../../components/AuthLayout";

import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import { PiPuzzlePieceBold } from "react-icons/pi";
import { PiWheelchairDuotone } from "react-icons/pi";

const Amenities = () => {
  const navigate = useNavigate();
  const [amenities, setAmenities] = useState({
    parkingSpace: false,
    wifi: false,
    creditCards: false,
    accessible: false,
    childFriendly: false
  });


  const [services, setServices] = useState({
    parkingSpace: false,
    wifi: false,
    creditCards: false,
    accessible: false,
    childFriendly: false
  });

  const handleChange = (key) => {
    setServices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to next step (Services)
    navigate("/business-owner/services");
  };


  const renderCheckbox = (label, key, Icon) => (
    <label className="flex items-center justify-between" key={key}>
      <div className="flex items-center gap-2">
        {Icon && <Icon size={30} color="#000000" />}
        <span className="font-[700] font-sansation sm:text-[22px] text-[15px] text-charcoal leading-tight">
          {label}
        </span>
      </div>

      <input
        type="checkbox"
        className="peer hidden"
        checked={services[key]}
        onChange={() => handleChange(key)}
      />
      <div
        className={`w-[28px] h-[28px] rounded-sm flex items-center justify-center transition-colors duration-300
              ${services[key] ? 'bg-[#FF827F]' : 'bg-[#D9D9D9] border border-[#2F2F2F]'}`}
      >
        {services[key] && (
          <svg
            className="w-4 h-4 text-black"
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
  );

  return (
    <AuthLayout>
      <div className="relative flex bg-white w-full h-full px-4 sm:px-6 py-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Step by Step header */}
          <div className="mb-4">
            <div className="flex justify-between w-full">
              <h1 className="font-rasa text-[28px] sm:text-[32px] text-[#2F2F2F] font-semibold">
                Step By Step
              </h1>
              {/* Already have an account link */}
              <div className="text-right">
                <Link to="/signin" className="text-secondary hover:underline">
                  Already have an account?
                </Link>
              </div>
            </div>
            <p className="text-[#2F2F2F] text-base sm:text-lg">
              Please Fill In Your Details
            </p>
          </div>

          {/* Progress stepper */}
          <div className="mb-6 relative">
            {/* Progress bar background */}
            <div className="h-1.5 bg-gray-200 rounded-full w-full absolute top-4"></div>

            {/* Active progress */}
            <div className="h-1.5 bg-secondary rounded-full w-5/6 absolute top-4"></div>

            {/* Step indicators */}
            <div className="flex justify-between relative">
              {/* Step 1 - Account (Completed) */}
              <div className="text-center">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="mt-2 text-secondary font-medium">Account</p>
              </div>

              {/* Step 2 - Validation (Completed) */}
              <div className="text-center">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="mt-2 text-secondary font-medium">Validation</p>
              </div>

              {/* Step 3 - Profile Image (Completed) */}
              <div className="text-center">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="mt-2 text-secondary font-medium">Profile image</p>
              </div>

              {/* Step 4 - Place of Business (Completed) */}
              <div className="text-center">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="mt-2 text-secondary font-medium">Place of Business</p>
              </div>

              {/* Step 5 - Add Amenities (Active) */}
              <div className="text-center">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                  5
                </div>
                <p className="mt-2 text-secondary font-medium">Add Amenities</p>
              </div>

              {/* Step 6 - Service */}
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center mx-auto font-medium">
                  6
                </div>
                <p className="mt-2 text-gray-600">Service</p>
              </div>
            </div>
          </div>


          {/* Amenities Form */}
          <form onSubmit={handleSubmit}>
            <h6 className="font-[700] font-sansation sm:text-[25px] text-[20px] text-charcoal leading-tight mb-5">Add Amenities</h6>
            <div className="mb-8">
              <div className="flex flex-col gap-5">
                {renderCheckbox('Parking Space', 'parkingSpace', MdOutlineDirectionsCarFilled)}
                {renderCheckbox('Wi-Fi', 'wifi', FaWifi)}
                {renderCheckbox('Credit Cards Accepted', 'creditCards', IoCardOutline)}
                {renderCheckbox('Accessible For People With Disabilities', 'accessible', PiWheelchairDuotone)}
                {renderCheckbox('Child-Friendly', 'childFriendly', PiPuzzlePieceBold)}
              </div>
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-[#FFE6D8] text-secondary font-medium py-3 rounded-[12px] hover:bg-[#FFD6D0] transition duration-300 text-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
            >
              Next step
            </button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Amenities;
