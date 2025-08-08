import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../../components/AuthLayout";
import img22 from '../../../../assets/images/dashboard/img74.png'

import { IoMdInformationCircle } from "react-icons/io";

import { FaShuttleVan } from "react-icons/fa";
import { LiaUserClockSolid } from "react-icons/lia";


const BusinessDetails = () => {
  const navigate = useNavigate();
  const [radius, setRadius] = useState(17);

  const [sliderStates, setSliderStates] = useState({
    undoHair: false,
    washHair: false,
    blowDryHair: false,
    Overnightbooking: true,
  });

  const [selectedOptions, setSelectedOptions] = useState({
    undoHair: "No",
    washHair: "No",
    blowDryHair: "No",
  });



  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to next step (Services)
    navigate("/independent/services");
  };


  const handleRadiusChange = (e) => {
    const value = e.target.value;
    setRadius(value);
    e.target.style.setProperty('--fill-percent', `${value}%`);
  };


  const renderSlider = (label, key, Icon) => (
    <label className="flex items-center justify-between" key={key}>
      <div className="flex items-center gap-1">
        {Icon && <Icon size={25} color="#000000" />}
        <span className="flex items-center gap-1 font-[700] font-sansation sm:text-[17px] text-[15px] text-charcoal">
          {label}
          <IoMdInformationCircle color="#2F2F2F" size={30} />
        </span>
      </div>

      {/* Switch */}
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={sliderStates[key]} // reflect state
          onChange={() =>
            setSliderStates((prev) => ({
              ...prev,
              [key]: !prev[key],
            }))
          }
        />
        <div className="w-11 h-6 bg-[#D9D9D9] peer-checked:bg-[#123E41] rounded-full relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
      </label>
    </label>
  );


  const renderOption = (label, key, Icon) => (
    <div className="flex items-center justify-between" key={key}>
      <div className="flex items-center gap-1">
        {Icon && <Icon size={25} color="#000000" />}
        <span className="flex items-center gap-1 font-[700] font-sansation sm:text-[17px] text-[15px] text-charcoal">
          {label}
          <IoMdInformationCircle color="#2F2F2F" size={30} />
        </span>
      </div>

      {/* Toggle Group */}
      <div className="flex items-center bg-[#FFFFFF] rounded-[36px] p-[2px] border border-[#123E41]">
        {["No", "Only", "Yes"].map((opt) => (
          <button
            key={opt}
            className={`px-3 py-1 text-sm rounded-full transition-all font-sansation  ${selectedOptions[key] === opt
              ? "bg-[#F4E1B7] text-[#123E41] font-[600]"
              : "text-[#123E41]"
              }`}
            onClick={() =>
              setSelectedOptions((prev) => ({ ...prev, [key]: opt }))
            }
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <AuthLayout>
      <div className="relative flex bg-white w-full h-full px-3 sm:px-4 py-3">
        <div className="w-full max-w-3xl mx-auto">
          {/* Step by Step header */}
          <div className="mb-3">
            <div className="flex justify-between w-full">
              <h1 className="font-rasa text-[26px] sm:text-[30px] text-[#2F2F2F] font-semibold">
                Step By Step
              </h1>
              {/* Already have an account link */}
              <div className="text-right">
                <Link to="/signin" className="text-secondary hover:underline">
                  Already have an account?
                </Link>
              </div>
            </div>
            <p className="text-[#2F2F2F] text-base">
              Please Fill In Your Detaills
            </p>
          </div>

          {/* Progress stepper */}
          <div className="mb-4 relative">
            {/* Progress bar background */}
            <div className="h-1.5 bg-gray-200 rounded-full w-full absolute top-4"></div>

            {/* Active progress */}
            <div className="h-1.5 bg-secondary rounded-full w-4/5 absolute top-4"></div>

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

              {/* Step 4 - Place of Business (Active) */}
              <div className="text-center">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                  4
                </div>
                <p className="mt-2 text-secondary font-medium">Place of Business</p>
              </div>

              {/* Step 5 - Services */}
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center mx-auto font-medium">
                  5
                </div>
                <p className="mt-2 text-gray-600">Services</p>
              </div>
            </div>
          </div>

          {/* Business Details Form */}
          <form>
            <div className="mb-5">
              <h2 className="text-[26px] sm:text-[28px] font-rasa text-[#2F2F2F] font-semibold mb-4">
                Enter your business details
              </h2>

              <div className="mb-2">
                <label className="block font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">Name of your business*</label>
                <input
                  type="text"
                  className="w-full border border-[#2F2F2F] rounded-[6px] px-4 py-2 pr-10 outline-none"
                />
              </div>

              {/* Location */}
              <div className="mb-4">
                <label className="block font-[700] font-sansation sm:text-[22px] text-[15px] text-charcoal mb-2">
                  Location
                </label>

                <div className="relative w-full h-35 rounded-[7px] overflow-hidden border border-[#2F2F2F]">
                  <img src={img22} alt="location" className="w-full h-full object-cover" />

                  <input
                    type="text"
                    className="absolute top-2 left-2 right-2 bg-[#FAF9F6] border border-[#2F2F2F] rounded-[10px] px-4 py-2 outline-none placeholder:text-sm text-[#2F2F2F] font-sansation font-[400]"
                    placeholder="Enter the location where you operate your business..."
                  />
                </div>
              </div>

              {/* Service Radius */}
              <div className="mb-4">
                <div className="mb-4 flex gap-5">
                  <label className="flex items-center gap-1 text-[20px] font-bold font-sansation mb-1.5 text-charcoal">
                    Service Radius
                    <IoMdInformationCircle color="#2F2F2F" size={30} />
                  </label>
                  <div className="slider-wrapper">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={radius}
                      onChange={handleRadiusChange}
                      className="slider"
                      style={{ '--fill-percent': `${radius}%` }}
                    />
                    <div className="slider-value">{radius} miles</div>
                  </div>
                </div>
              </div>

              {/* Mobile Service Toggle */}
              <div className="mb-2">
                <div className="flex flex-col space-y-3">
                  {renderSlider('Do you allow clients to come to your place of business?', 'undoHair', FaShuttleVan)}
                  {renderOption('Is this a mobile salon service?', 'washHair', FaShuttleVan)}
                  {renderSlider('Do you accept custom style requests?', 'blowDryHair', LiaUserClockSolid)}
                </div>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-[#FFE6D8] text-secondary font-medium py-2.5 rounded-[12px] hover:bg-[#FFD6D0] transition duration-300 text-base shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
            >
              Next step
            </button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default BusinessDetails;
