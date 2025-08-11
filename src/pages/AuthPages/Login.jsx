import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Kit from "../../assets/images/signin/kit.svg";
import Google from "../../assets/images/dashboard/img114.png";
import apple from "../../assets/images/dashboard/img115.png";
import AuthLayout from "../../components/AuthLayout";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../redux/api/api";
import { setCredentials } from "../../redux/slices/authSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState(null);

  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(null);

    try {
      const res = await login({
        email: formData.email,
        password: formData.password,
      }).unwrap();
      dispatch(setCredentials({ user: res.data, accessToken: res.accessToken }));

      const type = res.data.userType;
      if (type === "USER") {
        navigate("/dashboard/account-setting");
      } else if (type === "BUSINESS_OWNER") {
        navigate("/business-owner/dashboard/account-setting");
      } else if (type === "INDEPENDENT") {
        navigate("/independent/dashboard/account-setting");
      } else {
        navigate("/dashboard/account-setting"); // Default to client
      }
    } catch (err) {
      setApiError(err?.data?.message || "Login failed. Please check your credentials.");
    }
  };

  return (
    <AuthLayout>
      <div className="relative flex flex-col bg-white w-full h-auto min-h-[80%] pb-16 sm:pb-20 overflow-hidden">
        <div className=" w-full h-full flex flex-col  justify-center">
          <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-4 sm:mb-6">
            <h2 className="font-rasa text-[28px] sm:text-[32px] text-[#2F2F2F] font-semibold mb-2 md:mb-0">
              Sign in to Latrice
            </h2>
            <div className="flex items-center pr-4">
              <span className="text-[#2F2F2F] text-sm sm:text-base mr-2">New User?</span>
              <Link to="/account-type" className="text-secondary text-sm sm:text-base font-[600]">
                Create an account
              </Link>
            </div>
          </div>

          {/* Social login buttons */}
          <div className="w-full md:w-[60%] flex justify-center sm:justify-start gap-4 mb-4 sm:mb-6 relative z-10">
            <button className="transition-transform hover:scale-105">
              <img
                src={apple}
                alt="Sign in with Apple"
                className="h-[50px] w-[50px] sm:h-[72px] sm:w-[72px] object-contain"
              />
            </button>
            <button className="transition-transform hover:scale-105">
              <img
                src={Google}
                alt="Sign in with Google"
                className="h-[50px] w-[50px] sm:h-[72px] sm:w-[72px] object-contain"
              />
            </button>
          </div>

          {/* Divider */}
          <div className="flex w-full md:w-[60%] items-center mb-4 sm:mb-6 relative z-10">
            <div className="flex-1 h-[2px] bg-[#2F2F2F]"></div>
            <span className="px-4 text-gray-500 text-sm sm:text-base">or</span>
            <div className="flex-1 h-[2px] bg-[#2F2F2F]"></div>
          </div>

          {/* Login form */}
          <form className="w-full md:w-[60%] relative z-10" onSubmit={handleSubmit}>
            <div className="mb-4">
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
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123E41]"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-[#2F2F2F] font-medium mb-2 text-sm sm:text-base"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123E41] pr-10"
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
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:w-6 sm:h-6"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:w-6 sm:h-6"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="mb-6">
              <Link
                to="/forgot-password"
                className="text-[#2F2F2F] hover:text-[#123E41] text-sm sm:text-base"
              >
                Forgot Password?
              </Link>
            </div>

            {apiError && <p className="text-red-500 mb-4">{apiError}</p>}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#FFE4E0] text-secondary font-medium py-2 sm:py-3 rounded-[16px] hover:bg-[#FFD6D0] transition duration-300 shadow-[0px_2px_4px_0px_#00000030] text-sm sm:text-base disabled:opacity-50"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="w-full md:w-[60%] mt-6 sm:mt-8 text-[14px] sm:text-[16px] text-gray-600 relative z-10">
            <p>
              Protected by reCAPTCHA and subject to the Latrice{" "}
              <Link to="/privacy-policy" className="text-secondary">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/terms-of-service" className="text-secondary">
                Terms of service.
              </Link>
            </p>
          </div>
        </div>



        {/* Beauty Kit image */}
        <div className="absolute bottom-0 right-0 z-0">
          <img
            src={Kit}
            alt="Beauty Kit"
            className="object-contain max-w-none"
            style={{
              width: "clamp(280px, 40vw, 450px)",
              transform: "translateX(10%) translateY(5%)"
            }}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;