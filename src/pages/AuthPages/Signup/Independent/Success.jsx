import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../../components/AuthLayout";



const Success = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: 'admin@gmail.com',
    };

    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/independent/dashboard/account-setting");
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

          {/* Progress stepper - All completed */}
          <div className="mb-6 relative">
            {/* Progress bar background */}
            <div className="h-1.5 bg-gray-200 rounded-full w-full absolute top-4"></div>

            {/* Active progress - Full */}
            <div className="h-1.5 bg-secondary rounded-full w-full absolute top-4"></div>

            {/* Step indicators - All completed */}
            <div className="flex justify-between relative">
              {/* All steps completed with checkmarks */}
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="text-center">
                  <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="mt-2 text-secondary font-medium">
                    {step === 1 && "Account"}
                    {step === 2 && "Validation"}
                    {step === 3 && "Profile image"}
                    {step === 4 && "Place of Business"}
                    {step === 5 && "Services"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center py-8">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-[#FFE6D8] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-[32px] sm:text-[40px] font-rasa text-[#2F2F2F] font-semibold mb-4">
              Congratulations!
            </h2>
            <p className="text-[#2F2F2F] text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Your independent professional account has been successfully created. You can now start managing your services and connect with clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <button
                onClick={handleSubmit}
                className="bg-[#123E41] text-[#FAF9F6] font-medium py-3 px-6 rounded-[12px] hover:bg-opacity-90 transition duration-300 text-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)] w-full text-center"
              >
                Go to Dashboard
              </button>
              <button
                onClick={handleSubmit}
                className="bg-[#FFE6D8] text-secondary font-medium py-3 px-6 rounded-[12px] hover:bg-[#FFD6D0] transition duration-300 text-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)] w-full text-center"
              >
                View Your Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Success;
