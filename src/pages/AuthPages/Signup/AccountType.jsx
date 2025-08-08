import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../../components/AuthLayout";
import ClientImg from "../../../assets/images/signup/chair.png";
import ProfessionalImg from "../../../assets/images/signup/chair-2.png";

const AccountType = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className="relative flex bg-white w-full h-[100%] px-6 sm:px-10 py-8">
        <div className="w-full max-w-4xl mx-auto">
          {/* Already have an account link */}
          <div className="text-right mb-6">
            <Link to="/signin" className="text-secondary font-medium hover:underline">
              Already have an account?
            </Link>
          </div>
          
          {/* Main heading with info icon */}
          <div className="mb-3">
            <h2 className="font-rasa text-[32px] text-[#2F2F2F] font-semibold flex items-center">
              What kind of account do you need? 
              <span className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#2F2F2F] text-white text-sm">i</span>
            </h2>
          </div>
          
          {/* Description text */}
          <p className="text-[#2F2F2F] mb-8 max-w-2xl">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the l500s.
          </p>

          {/* Account type options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {/* Client Account Option */}
            <div onClick={() => navigate('/client-signup')} className="cursor-pointer hover:shadow-lg transition-all duration-300">
              <div className="rounded-lg overflow-hidden border-2 border-[#123E41] h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={ClientImg} 
                    alt="Client Account" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-[#123E41] text-center">
                  <h3 className="font-rasa text-xl text-white font-medium">
                    Client Account
                  </h3>
                </div>
              </div>
            </div>
            
            {/* Professional Account Option */}
            <div onClick={() => navigate('/business-owner')} className="cursor-pointer hover:shadow-lg transition-all duration-300">
              <div className="rounded-lg overflow-hidden border-2 border-[#123E41] h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={ProfessionalImg} 
                    alt="Professional Account" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-[#123E41] text-center">
                  <h3 className="font-rasa text-xl text-white font-medium">
                    Professional Account
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy policy text */}
          <div className="text-[#2F2F2F]">
            <p>
              Protected by reCAPTCHA and subject to the Latrice{" "}
              <Link to="/privacy-policy" className="text-secondary hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/terms-of-service" className="text-secondary hover:underline">
                Terms of service
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default AccountType;