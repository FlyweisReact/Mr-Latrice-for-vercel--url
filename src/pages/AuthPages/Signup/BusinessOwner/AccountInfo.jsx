import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../../components/AuthLayout";
import UploadBar from "../../../../assets/images/signup/upload.png";

const AccountInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePhoto: null,
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedType, setSelectedType] = useState(""); // "business" or "independent"

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        profilePhoto: file,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to next step (OTP verification) based on selected type
    if (selectedType === "business") {
      navigate("/business-owner/verification");
    } else if (selectedType === "independent") {
      navigate("/independent/verification");
    }
  };

  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };

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
        {
          false&&(
            <div className="mb-6 relative">
            {/* Progress bar background */}
            <div className="h-1.5 bg-gray-200 rounded-full w-full absolute top-4"></div>

            {/* Active progress */}
            <div className="h-1.5 bg-secondary rounded-full w-1/6 absolute top-4"></div>

            {/* Step indicators */}
            <div className="flex justify-between relative">
              {/* Step 1 - Account (Active) */}
              <div className="text-center">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="mt-2 text-secondary font-medium">Account</p>
              </div>

              {/* Step 2 - Validation */}
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center mx-auto font-medium">
                  2
                </div>
                <p className="mt-2 text-gray-600">Validation</p>
              </div>

              {/* Step 3 - Profile Image */}
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center mx-auto font-medium">
                  3
                </div>
                <p className="mt-2 text-gray-600">Profile image</p>
              </div>

              {/* Step 4 - Place of Business */}
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center mx-auto font-medium">
                  4
                </div>
                <p className="mt-2 text-gray-600">Place of Business</p>
              </div>

              {/* Step 5 - Add Amenities */}
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center mx-auto font-medium">
                  5
                </div>
                <p className="mt-2 text-gray-600">Add Amenities</p>
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
          )
        }

          {/* Business Type Selection */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => handleTypeSelection("business")}
                className={`${selectedType === "business" ? "bg-secondary text-white border-none" : "bg-[#FAF9F6] text-[#2F2F2F] border-2 border-[#2F2F2F] "} rounded-lg p-4 flex items-center justify-center gap-3 hover:border-secondary transition-colors`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="font-medium">Business Owner</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 ${selectedType === "business" ? "text-white" : "text-gray-500"}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </button>
             
              <button
                type="button"
                onClick={() => handleTypeSelection("independent")}
                className={`border border-2 border-black ${selectedType === "independent" ? "bg-secondary text-white border border-2 border-black" : "bg-[#FAF9F6] text-[#2F2F2F] border border-[#2F2F2F] border-opacity-80"} rounded-lg p-4 flex items-center justify-center gap-3 hover:border-secondary transition-colors`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="font-medium">Independent</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 ${selectedType === "independent" ? "text-white" : "text-gray-500"}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          {/* Form is only shown when a type is selected */}
          {selectedType && (
            <form onSubmit={handleSubmit}>
              {/* Name fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-[#2F2F2F] font-medium mb-2"
                  >
                    First name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-[#2F2F2F] rounded-md focus:outline-none focus:ring-1 focus:ring-[#123E41] focus:border-transparent"
                    placeholder="Enter first name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-[#2F2F2F] font-medium mb-2"
                  >
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-[#2F2F2F] rounded-md focus:outline-none focus:ring-1 focus:ring-[#123E41] focus:border-transparent"
                    placeholder="Enter last name"
                    required
                  />
                </div>
              </div>

              {/* Phone and Email fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#2F2F2F] font-medium mb-2"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-[#2F2F2F] rounded-md focus:outline-none focus:ring-1 focus:ring-[#123E41] focus:border-transparent"
                    placeholder="Enter email address"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-[#2F2F2F] font-medium mb-2"
                  >
                    Enter your phone number
                  </label>
                  <div className="flex">
                    <div className="flex items-center border border-[#2F2F2F] rounded-l-md px-3 bg-white">
                      <img
                        src="https://flagcdn.com/w20/us.png"
                        alt="US flag"
                        className="h-4 mr-1"
                      />
                      <span className="text-gray-600 text-sm">+1</span>
                    </div>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-[#2F2F2F] border-l-0 rounded-r-md focus:outline-none focus:ring-1 focus:ring-[#123E41] focus:border-transparent"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Password fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-[#2F2F2F] font-medium mb-2"
                  >
                    Password*
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-[#2F2F2F] rounded-md focus:outline-none focus:ring-1 focus:ring-[#123E41] focus:border-transparent pr-10"
                      placeholder="••••••"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                          <line x1="1" y1="1" x2="23" y2="23"></line>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-[#2F2F2F] font-medium mb-2"
                  >
                    Confirm Password*
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-[#2F2F2F] rounded-md focus:outline-none focus:ring-1 focus:ring-[#123E41] focus:border-transparent pr-10"
                      placeholder="••••••"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                          <line x1="1" y1="1" x2="23" y2="23"></line>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms and conditions checkbox */}
              <div className="mb-5 flex items-start">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 text-[#123E41] border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="agreeTerms"
                  className="ml-3 text-[#2F2F2F] text-sm"
                >
                  By clicking create an account, I agree I have read and accepted
                  the{" "}
                  <Link
                    to="/terms"
                    className="text-[#2F2F2F] font-medium hover:underline"
                  >
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="text-[#2F2F2F] font-medium hover:underline"
                  >
                    Privacy policy
                  </Link>
                  .
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-[#FFE6D8] text-secondary font-medium py-3 rounded-[12px] hover:bg-[#FFD6D0] transition duration-300 text-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
              >
                Next step
              </button>
            </form>
          )}

          {/* Submit button is shown only when no type is selected */}
          {!selectedType && (
            <button
              onClick={() => alert("Please select an account type first")}
              className="w-full bg-[#FFE6D8] text-secondary font-medium py-3 rounded-[12px] hover:bg-[#FFD6D0] transition duration-300 text-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
            >
              Next step
            </button>
          )}
        </div>
      </div>
    </AuthLayout>
  );
};

export default AccountInfo;
