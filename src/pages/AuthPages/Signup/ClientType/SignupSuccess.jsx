import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../../components/AuthLayout";

const SignupSuccess = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <AuthLayout>
      <div className="relative flex bg-white w-full h-full px-4 sm:px-6 py-4 font-sansation">
        <div className="w-full max-w-4xl mx-auto">
          {/* Step by Step header */}
          <div className="mb-4">
            <h1 className="font-sansation text-[28px] sm:text-[32px] text-[#2F2F2F] font-semibold">
              Step By Step
            </h1>
            <p className="text-[#2F2F2F] text-base sm:text-lg">
              Please Fill In Your Deatails
            </p>
          </div>

          {/* Progress stepper */}
          <div className="mb-6 relative">
            {/* Progress bar background */}
            <div className="h-1.5 bg-gray-200 rounded-full w-full absolute top-4"></div>

            {/* Active progress - fully complete */}
            <div className="h-1.5 bg-secondary rounded-full w-full absolute top-4"></div>

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

              {/* Step 2 - Validation (Completed) */}
              <div className="text-center">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="mt-2 text-secondary font-medium">Validation</p>
              </div>

              {/* Step 3 - Started (Active) */}
              <div className="text-center">
                <div className="w-8 h-8 bg-secondary text-[#2F2F2F] rounded-full flex items-center justify-center mx-auto font-medium">
                  3
                </div>
                <p className="mt-2 text-secondary font-medium">Started</p>
              </div>
            </div>
          </div>

          {/* Success Message */}
          <div className="mb-10">
            <h2 className="font-sansation text-[24px] sm:text-[28px] text-[#2F2F2F] font-semibold mb-3">
              Congratulations Your Account Has Been Successfully Created
            </h2>
            <p className="text-[#2F2F2F] mb-5 max-w-2xl text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the l500s
            </p>
          </div>

          {/* Dashboard button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-[#FFE6D8] text-secondary font-medium py-3 rounded-[12px] hover:bg-[#FFD6D0] transition duration-300 text-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
          >
            Go to dashboard
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignupSuccess;