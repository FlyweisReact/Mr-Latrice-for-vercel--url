import { useState } from "react";
import { Link } from "react-router-dom";
import Kit from "../../assets/images/signin/kit.svg";
import AuthLayout from "../../components/AuthLayout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    console.log("Password recovery requested for:", email);
    
    // In a real application, you would make an API call here
    // and handle the response accordingly
    
    // Reset submission state after simulated delay
    setTimeout(() => {
      setIsSubmitting(false);
      // Redirect to OTP verification or show success message
    }, 1500);
  };

  return (
    <AuthLayout>
      <div className="relative flex bg-white w-full h-[100%] overflow-hidden">
        <div className="w-full h-full flex flex-col justify-center px-4 sm:px-6 py-4">
          <div className="md:w-[60%] relative z-10">
            <h2 className="font-rasa text-[28px] sm:text-[32px] text-[#2F2F2F] font-semibold mb-2 sm:mb-4">
              Forgot Password!
            </h2>
            <p className="text-[#2F2F2F] text-sm sm:text-base mb-4 sm:mb-6">
              Please enter your email to recover your account
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-[#2F2F2F] font-medium mb-2 text-sm sm:text-base"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123E41]"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FFE4E0] text-secondary font-medium py-2 sm:py-3 rounded-[16px] hover:bg-[#FFD6D0] transition duration-300 shadow-[0px_2px_4px_0px_#00000030] text-sm sm:text-base"
              >
                {isSubmitting ? "Processing..." : "Recover my account"}
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
        
        {/* Beauty Kit image */}
        <div className="absolute bottom-0 right-0 z-0 overflow-visible">
          <img
            src={Kit}
            alt="Beauty Kit"
            className="object-contain max-w-none"
            style={{
              width: "clamp(300px, 50vw, 500px)",
              transform: "translateX(25%) translateY(15%)",
              opacity: 1
            }}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;