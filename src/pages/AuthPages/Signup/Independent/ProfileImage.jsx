import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../../components/AuthLayout";
import UploadBar from "../../../../assets/images/signup/upload.png";
import { IoMdInformationCircle } from "react-icons/io";

const ProfileImage = () => {
  const navigate = useNavigate();
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);

  const handleProfilePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(file);
    }
  };

  const handleCoverPhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverPhoto(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to next step (Place of Business)
    navigate("/independent/business-details");
  };

  const handleSkip = () => {
    navigate("/independent/business-details");
  };

  return (
    <AuthLayout>
      <div className="relative flex bg-white w-full h-full px-3 sm:px-4 py-3">
        <div className="w-full max-w-3xl mx-auto">
          {/* Step by Step header */}
          <div className="mb-3">
            <div className="flex justify-between w-full">
              <h1 className="font-rasa text-[26px] sm:text-[30px] text-[#2F2F2F] font-semibold">
                Step By Step
              </h1>
              {/* Already have an account link */}
              <div className="text-right">
                <Link to="/signin" className="text-secondary hover:underline">
                  Already have an account?
                </Link>
              </div>
            </div>
            <p className="text-[#2F2F2F] text-base">
              Please Fill In Your Detaills
            </p>
          </div>

          {/* Progress stepper */}
          <div className="mb-4 relative">
            {/* Progress bar background */}
            <div className="h-1.5 bg-gray-200 rounded-full w-full absolute top-4"></div>

            {/* Active progress */}
            <div className="h-1.5 bg-secondary rounded-full w-3/5 absolute top-4"></div>

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

              {/* Step 2 - Validation (Completed) */}
              <div className="text-center">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="mt-2 text-secondary font-medium">Validation</p>
              </div>

              {/* Step 3 - Profile Image (Active) */}
              <div className="text-center">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mx-auto font-medium">
                  3
                </div>
                <p className="mt-2 text-secondary font-medium">Profile image</p>
              </div>

              {/* Step 4 - Place of Business */}
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center mx-auto font-medium">
                  4
                </div>
                <p className="mt-2 text-gray-600">Place of Business</p>
              </div>

              {/* Step 5 - Services */}
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center mx-auto font-medium">
                  5
                </div>
                <p className="mt-2 text-gray-600">Services</p>
              </div>
            </div>
          </div>

          {/* Profile Image Upload Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <h2 className="text-[26px] sm:text-[28px] font-rasa text-[#2F2F2F] font-semibold mb-3 flex items-center gap-1">
                Upload A Profile Picture
                <IoMdInformationCircle color="#2F2F2F" size={30} />
              </h2>

              <div
                className="border-2 border-dashed border-[#FF827F] rounded-lg p-5 text-center cursor-pointer mb-5"
                onClick={() => document.getElementById("profile-photo-upload").click()}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-3">
                    <img src={UploadBar} className="h-10 w-10 object-contain" alt="upload" />
                  </div>
                  <p className="text-secondary text-base mb-1">
                    Click here or drag & drop your new photo
                  </p>
                  <input
                    type="file"
                    id="profile-photo-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleProfilePhotoUpload}
                  />
                </div>
              </div>
              <h2 className="text-[26px] sm:text-[28px] font-rasa text-[#2F2F2F] font-semibold mb-3 flex items-center gap-1">
                Upload A Cover Photo
                <IoMdInformationCircle color="#2F2F2F" size={30} />
              </h2>

              <div
                className="border-2 border-dashed border-[#FF827F] rounded-lg p-5 text-center cursor-pointer mb-5"
                onClick={() => document.getElementById("cover-photo-upload").click()}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-3">
                    <img src={UploadBar} className="h-10 w-10 object-contain" alt="upload" />
                  </div>
                  <p className="text-secondary text-base mb-1">
                    Click here or drag & drop your new photo
                  </p>
                  <input
                    type="file"
                    id="cover-photo-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleCoverPhotoUpload}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleSkip}
                className="bg-gray-200 text-gray-700 font-medium py-2.5 rounded-[12px] hover:bg-gray-300 transition duration-300 text-base shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
              >
                Skip
              </button>
              <button
                type="submit"
                className="bg-[#FFE6D8] text-secondary font-medium py-2.5 rounded-[12px] hover:bg-[#FFD6D0] transition duration-300 text-base shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
              >
                Next step
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ProfileImage;
