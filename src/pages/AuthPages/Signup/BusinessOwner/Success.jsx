// src/pages/AuthPages/Signup/BusinessOwner/Success.js (similar for Independent)
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../../components/AuthLayout";

const Success = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/business-owner/dashboard/account-setting");
  };
  return (
    <AuthLayout>
      <div className="relative flex bg-white w-full h-full px-4 sm:px-6 py-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header and Progress UI keep as is */}

          <div className="text-center py-8">
            <div className="flex justify-center mb-6">
              {/* Success icon */}
            </div>
            <h2 className="text-[32px] sm:text-[40px] font-rasa text-[#2F2F2F] font-semibold mb-4">
              Congratulations!
            </h2>
            <p className="text-[#2F2F2F] text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Your business account has been successfully created. You can now start managing your salon services and connect with clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <button
                onClick={handleSubmit}
                className="bg-[#123E41] text-white font-medium py-3 px-6 rounded-[12px] hover:bg-opacity-90 transition duration-300 text-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)] w-full text-center"
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