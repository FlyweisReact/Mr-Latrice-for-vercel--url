// src/pages/AuthPages/Signup/BusinessOwner/AccountForm.js (if used, but seems redundant, integrate similarly if needed)
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../../components/AuthLayout";
import UploadBar from "../../../../assets/images/signup/upload.png";
import { useDispatch } from "react-redux";
import { useProfessionalSignupMutation } from "../../../../redux/api/Professional/professionalApi";
import { setProfessionalCredentials } from "../../../../redux/slices/authSlice";

const AccountForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [professionalSignup, { isLoading }] = useProfessionalSignupMutation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "1",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePhoto: null,
    agreeTerms: false,
  });
  const [error, setError] = useState(null);

  const countries = [
    // same as above
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        profilePhoto: file,
      }));
    }
  };

  const handleCountryChange = (e) => {
    const selected = countries.find(c => c.dial_code === e.target.value);
    setSelectedCountry(selected);
    setFormData((prev) => ({
      ...prev,
      countryCode: selected.dial_code.replace('+', ''),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.agreeTerms) {
      return setError("Please agree to the terms and conditions.");
    }

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match.");
    }

    const body = {
      fullName: `${formData.firstName} ${formData.lastName}`,
      firstName: formData.firstName,
      lastName: formData.lastName,
      countryCode: formData.countryCode,
      mobileNumber: formData.phoneNumber,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      professionalType: "Business",
    };

    try {
      const response = await professionalSignup(body).unwrap();
      dispatch(setProfessionalCredentials({ user: response.data, accessToken: response.accessToken }));
      navigate("/business-owner/profile-image");
    } catch (err) {
      setError(err?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <AuthLayout>
      <div className="relative flex bg-white w-full h-full px-4 sm:px-6 py-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-4">
            <div className="flex justify-between w-full">
              <h1 className="font-rasa text-[28px] sm:text-[32px] text-[#2F2F2F] font-semibold">
                Step By Step
              </h1>
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

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            {/* Profile Photo */}
            <div className="mb-4 flex items-center gap-2">
              <label className="block text-[#2F2F2F] text-nowrap text-xl font-medium mb-2">
                Profile Photo
              </label>
              <div
                className="border border-gray-300 rounded-lg p-1 text-center cursor-pointer flex flex-col items-center justify-center w-full"
                onClick={() => document.getElementById("photo-upload").click()}
              >
                <div className="flex gap-1 items-center justify-center mb-1">
                  <div className="rounded-md p-1">
                    <img src={UploadBar} className="object-contain w-full" alt="upload" />
                  </div>
                  <p className="text-secondary text-sm sm:text-base">
                    Click here or drag & drop your new photo
                  </p>
                </div>
                <input
                  type="file"
                  id="photo-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />
              </div>
            </div>

            {/* Name fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-[#2F2F2F] font-medium mb-2">
                  First name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#123E41]"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-[#2F2F2F] font-medium mb-2">
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#123E41]"
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>

            {/* Phone and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="phoneNumber" className="block text-[#2F2F2F] font-medium mb-2">
                  Enter your phone number
                </label>
                <div className="flex">
                  <select
                    value={selectedCountry.dial_code}
                    onChange={handleCountryChange}
                    className="flex items-center border border-gray-300 rounded-l-md px-2 bg-white text-sm"
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.dial_code}>
                        {country.flag} {country.dial_code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 border-l-0 rounded-r-md focus:outline-none focus:ring-1 focus:ring-[#123E41]"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-[#2F2F2F] font-medium mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#123E41]"
                  placeholder="Enter email address"
                  required
                />
              </div>
            </div>

            {/* Password fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div>
                <label htmlFor="password" className="block text-[#2F2F2F] font-medium mb-2">
                  Password*
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#123E41] pr-10"
                    placeholder="••••••"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {/* Eye icon */}
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-[#2F2F2F] font-medium mb-2">
                  Confirm Password*
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#123E41] pr-10"
                    placeholder="••••••"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {/* Eye icon */}
                    {showConfirmPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="mb-5 flex items-start">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mt-1 h-5 w-5 text-[#123E41] border-gray-300 rounded"
                required
              />
              <label htmlFor="agreeTerms" className="ml-3 text-[#2F2F2F] text-sm">
                By clicking create an account, I agree I have read and accepted the
                <Link to="/terms" className="text-[#2F2F2F] font-medium hover:underline"> Terms of Use</Link> and <Link to="/privacy" className="text-[#2F2F2F] font-medium hover:underline">Privacy policy</Link>.
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#FFE6D8] text-secondary font-medium py-3 rounded-[12px] hover:bg-[#FFD6D0] transition duration-300 text-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)] disabled:opacity-50"
            >
              {isLoading ? 'Registering...' : 'Next step'}
            </button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default AccountForm;