import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../../components/AuthLayout";
import { useGetAllServicesQuery, useProfessionalAddCategoriesInProfileMutation } from "../../../../redux/api/Professional/professionalApi";

const Services = () => {
  const navigate = useNavigate();
  const { data: servicesData, isLoading: isServicesLoading } = useGetAllServicesQuery();
  const [professionalAddCategoriesInProfile, { isLoading }] = useProfessionalAddCategoriesInProfileMutation();
  const [selectedServices, setSelectedServices] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [error, setError] = useState(null);

  const serviceSuggestions = servicesData?.data?.map(s => ({ id: s._id, name: s.name, categoryId: s.categoryId[0] })) || [];

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowDropdown(true);
  };

  const addService = (name) => {
    const service = serviceSuggestions.find(s => s.name === name);
    if (service && !selectedServices.some(s => s.id === service.id)) {
      setSelectedServices([...selectedServices, service]);
      setInputValue("");
    }
    setShowDropdown(false);
  };

  const removeService = (index) => {
    const newServices = [...selectedServices];
    newServices.splice(index, 1);
    setSelectedServices(newServices);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const body = {
      categoryId: selectedServices.map(s => s.categoryId),
    };

    try {
      await professionalAddCategoriesInProfile(body).unwrap();
      navigate("/business-owner/success");
    } catch (err) {
      setError(err?.data?.message || "Failed to add services. Please try again.");
    }
  };

  const filteredSuggestions = serviceSuggestions.filter(
    (suggestion) => 
      suggestion.name.toLowerCase().includes(inputValue.toLowerCase()) && 
      !selectedServices.some(s => s.id === suggestion.id)
  );

  if (isServicesLoading) return <div>Loading services...</div>;

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
            <div className="h-1.5 bg-secondary rounded-full w-full absolute top-4"></div>

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

              {/* Step 5 - Add Amenities (Completed) */}
              <div className="text-center">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="mt-2 text-secondary font-medium">Add Amenities</p>
              </div>

              {/* Step 6 - Service (Active) */}
              <div className="text-center">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                  6
                </div>
                <p className="mt-2 text-secondary font-medium">Services</p>
              </div>
            </div>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <h2 className="text-[28px] sm:text-[32px] font-rasa text-[#2F2F2F] font-semibold mb-6">
                Enter your services
              </h2>
              
              <div className="mb-6">
                <div className="relative">
                  <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-white">
                    <div className="flex flex-wrap gap-2 mr-2">
                      {selectedServices.map((service, index) => (
                        <div 
                          key={index} 
                          className="flex items-center bg-gray-100 rounded-full px-3 py-1"
                        >
                          <span className="text-[#2F2F2F] mr-2">{service.name}</span>
                          <button 
                            type="button" 
                            onClick={() => removeService(index)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      ))}
                      <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onFocus={() => setShowDropdown(true)}
                        className="flex-grow border-none focus:ring-0 focus:outline-none"
                        placeholder="Add your services"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => addService(inputValue)}
                      className="bg-secondary text-white rounded-full p-1 ml-auto"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                  
                  {showDropdown && filteredSuggestions.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                      {filteredSuggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => addService(suggestion.name)}
                        >
                          {suggestion.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Dropdown */}
              <div className="mb-6">
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-white border border-gray-300 rounded-md py-3 px-4 pr-8 focus:outline-none focus:ring-1 focus:ring-[#123E41]"
                    onChange={(e) => {
                      if (e.target.value) {
                        addService(e.target.value);
                        e.target.value = "";
                      }
                    }}
                  >
                    <option value="">Select or type your services</option>
                    {serviceSuggestions.map((suggestion, index) => (
                      <option key={index} value={suggestion.name}>
                        {suggestion.name}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#FFE6D8] text-secondary font-medium py-3 rounded-[12px] hover:bg-[#FFD6D0] transition duration-300 text-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)] disabled:opacity-50"
            >
              {isLoading ? 'Saving...' : 'Go to dashboard'}
            </button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Services;