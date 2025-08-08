import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../../components/AuthLayout";

const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = Array(6).fill(0).map(() => useState(null)[0]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    // Only allow digits
    if (value && !/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    // Take only the last character if multiple are pasted
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Move to next input if current one is filled
    if (value && index < 5) {
      inputRefs[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();
    
    // Check if pasted content is numeric and has appropriate length
    if (!/^\d+$/.test(pastedData)) return;
    
    const digits = pastedData.split("").slice(0, 6);
    const newOtp = [...otp];
    
    digits.forEach((digit, index) => {
      if (index < 6) {
        newOtp[index] = digit;
      }
    });
    
    setOtp(newOtp);
    
    // Focus the appropriate input after paste
    if (digits.length < 6) {
      inputRefs[digits.length].focus();
    } else {
      inputRefs[5].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    console.log("OTP submitted:", otpValue);
    navigate('/signup-success');
  };

  return (
    <AuthLayout>
      <div className="relative flex bg-white w-full h-full px-4 sm:px-6 py-4">
        <div className="w-full max-w-4xl mx-auto">
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
              Please Fill In Your Deatails
            </p>
          </div>

          {/* Progress stepper */}
          <div className="mb-6 relative">
            {/* Progress bar background */}
            <div className="h-1.5 bg-gray-200 rounded-full w-full absolute top-4"></div>
            
            {/* Active progress - 2/3 complete */}
            <div className="h-1.5 bg-secondary rounded-full w-2/3 absolute top-4"></div>
            
            {/* Step indicators */}
            <div className="flex justify-between relative">
              {/* Step 1 - Account (Completed) */}
              <div className="text-center">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="mt-2 text-secondary font-medium">Account</p>
              </div>
              
              {/* Step 2 - Validation (Active) */}
              <div className="text-center">
                <div className="w-8 h-8 bg-secondary text-[#2F2F2F] rounded-full flex items-center justify-center mx-auto font-medium">
                  2
                </div>
                <p className="mt-2 text-secondary font-medium">Validation</p>
              </div>
              
              {/* Step 3 - Started */}
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center mx-auto font-medium">
                  3
                </div>
                <p className="mt-2 text-gray-600">Started</p>
              </div>
            </div>
          </div>

          {/* OTP Verification */}
          <div className="mb-6">
            <h2 className="font-rasa text-[24px] sm:text-[28px] text-[#2F2F2F] font-semibold mb-3">
              OTP Verification
            </h2>
            <p className="text-[#2F2F2F] mb-5 max-w-2xl text-base">
              Please enter the validation code received in your email address
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* OTP Input Fields */}
            <div className="mb-5">
              <label className="block text-[#2F2F2F] text-lg font-medium mb-3">
                Verify your email
              </label>
              <div className="flex gap-2 sm:gap-3 mb-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    ref={(ref) => (inputRefs[index] = ref)}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : null}
                    className="w-10 h-10 sm:w-12 sm:h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#123E41] text-lg"
                    maxLength={1}
                    autoComplete="off"
                  />
                ))}
              </div>
              <p className="text-[#2F2F2F] text-base">
                Send back the validation code
              </p>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-[#FFE6D8] text-secondary font-medium py-3 rounded-[12px] hover:bg-[#FFD6D0] transition duration-300 text-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
            >
              Confirm your registration
            </button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default OtpVerification;
