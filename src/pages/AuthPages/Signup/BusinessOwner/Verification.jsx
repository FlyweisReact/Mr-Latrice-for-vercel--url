import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../../components/AuthLayout";

const Verification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  const handleChange = (index, value) => {
    if (value && !/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    
    // Auto-focus to next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();
    
    if (!/^\d+$/.test(pastedData)) return;
    
    const digits = pastedData.split("").slice(0, 6);
    const newOtp = [...otp];
    
    digits.forEach((digit, index) => {
      if (index < 6) {
        newOtp[index] = digit;
      }
    });
    
    setOtp(newOtp);
    
    // Focus the next empty input or the last input
    const nextEmptyIndex = newOtp.findIndex(val => !val);
    if (nextEmptyIndex !== -1 && nextEmptyIndex < 6) {
      inputRefs.current[nextEmptyIndex].focus();
    } else if (digits.length < 6) {
      inputRefs.current[digits.length].focus();
    } else {
      inputRefs.current[5].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate OTP
    if (otp.join("").length === 6) {
      // Navigate to profile image upload
      navigate("/business-owner/profile-image");
    }
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
          <div className="mb-6 relative">
            {/* Progress bar background */}
            <div className="h-1.5 bg-gray-200 rounded-full w-full absolute top-4"></div>

            {/* Active progress */}
            <div className="h-1.5 bg-secondary rounded-full w-1/3 absolute top-4"></div>

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

              {/* Step 2 - Validation (Active) */}
              <div className="text-center">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                  2
                </div>
                <p className="mt-2 text-secondary font-medium">Validation</p>
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

          {/* OTP Verification */}
          <div className="mb-8">
            <h2 className="text-[28px] sm:text-[32px] font-rasa text-[#2F2F2F] font-semibold mb-4">
              OTP Verification
            </h2>
            <p className="text-[#2F2F2F] text-base sm:text-lg mb-8">
              Please enter the validation code received in your email address
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <label className="block text-[#2F2F2F] text-xl font-medium mb-4">
                  Verify your email
                </label>
                <div className="flex gap-2 sm:gap-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={index === 0 ? handlePaste : undefined}
                      className="w-12 h-12 sm:w-16 sm:h-16 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                      maxLength={1}
                    />
                  ))}
                </div>
              </div>

              <p className="text-[#2F2F2F] text-base mb-8">
                Send back the validation code
              </p>

              <button
                type="submit"
                className="w-full bg-[#FFE6D8] text-secondary font-medium py-3 rounded-[12px] hover:bg-[#FFD6D0] transition duration-300 text-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
              >
                Confirm your registration
              </button>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Verification;
