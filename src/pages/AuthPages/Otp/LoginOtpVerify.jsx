import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Kit from "../../../assets/images/signin/kit.svg";
import AuthLayout from "../../../components/AuthLayout";

const LoginOtpVerify = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = Array(6).fill(0).map(() => useState(null)[0]);
  const navigate= useNavigate()

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
    navigate('/dashboard/account-setting');
    // Add your verification logic here
  };

  return (
    <AuthLayout>
      <div className="relative flex bg-white w-full h-[100%] overflow-hidden">
        <div className="w-full h-full flex flex-col justify-center px-4 sm:px-6 py-4">
          <div className="md:w-[60%] relative z-10">
            <h2 className="font-rasa text-[28px] sm:text-[32px] text-[#2F2F2F] font-semibold mb-2 sm:mb-4">
              OTP Verification
            </h2>
            <p className="text-[#2F2F2F] text-sm sm:text-base mb-4 sm:mb-6">
              Check your mail messages for a code.
              <br />
              Codes requested via EMAIL may take up to a minute to appear.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-[#2F2F2F] font-medium mb-3 text-sm sm:text-base">
                  Verify your email
                </label>
                <div className="flex gap-1 sm:gap-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      ref={(ref) => (inputRefs[index] = ref)}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={index === 0 ? handlePaste : null}
                      className="w-10 h-10 sm:w-12 sm:h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123E41] text-base sm:text-lg"
                      maxLength={1}
                      autoComplete="off"
                    />
                  ))}
                </div>
                <p className="mt-3 sm:mt-4 text-[#2F2F2F] text-sm sm:text-base">
                  Send back the validation code
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFE4E0] text-secondary font-medium py-2 sm:py-3 rounded-[16px] hover:bg-[#FFD6D0] transition duration-300 shadow-[0px_2px_4px_0px_#00000030] text-sm sm:text-base"
              >
                Verify
              </button>
            </form>

            <div className="mt-6 sm:mt-8 text-[14px] sm:text-[16px] text-gray-600">
              <p>
                Protected by reCAPTCHA and subject to the Latrice{" "}
                <Link to="/privacy" className="text-secondary">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/terms" className="text-secondary">
                  Terms of service
                </Link>.
              </p>
            </div>
          </div>
        </div>
        
        {/* Beauty Kit image - hidden on very small screens */}
        <div className="absolute bottom-0 right-0 z-0 hidden md:block">
          <img
            src={Kit}
            alt="Beauty Kit"
            className="object-contain max-w-none "
            style={{
              width: "clamp(280px, 45vw, 420px)",
              transform: "translateX(10%) translateY(10%)"
            }}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginOtpVerify;