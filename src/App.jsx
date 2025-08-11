import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { ScrollToTop } from './utils/utils';

// Layout components
const ClientDashboardLayout = lazy(() => import('./components/DashbaordLayout/Client Dashbaord'));

// Implement lazy loading for all components
// HomePage is loaded eagerly as it's the main entry point
const HomePage = lazy(() => import('./pages/HomePage'));
const SalonServicesDetails = lazy(() => import('./pages/Salon Services Details'));
const CitybySalonsList = lazy(() => import('./pages/Salons Citys'));
const AboutUss = lazy(() => import('./pages/About Us'));
const PrivacyPolicys = lazy(() => import('./pages/Privacy Policy'));
const TermsOfServices = lazy(() => import('./pages/Terms Of Service'));
const Cookiess = lazy(() => import('./pages/Cookies'));
const FAQss = lazy(() => import('./pages/FAQs'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Careers = lazy(() => import('./pages/Careers'));
const ContactUss = lazy(() => import('./pages/Contact Us'));

// Auth pages
const SignIn = lazy(() => import('./pages/AuthPages/Login'));
const LoginOtpVerify = lazy(() => import('./pages/AuthPages/Otp/LoginOtpVerify'));
const ForgotPassword = lazy(() => import('./pages/AuthPages/Forgotpassword'));
const AccountType = lazy(() => import('./pages/AuthPages/Signup/AccountType'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// User Dashboard pages 
const Basket = lazy(() => import('./pages/Dashboard/Basket'));
const UserAccountSettingPage = lazy(() => import('./pages/Dashboard/User Account Settings/Index'));
const Currentbookings = lazy(() => import('./pages/Dashboard/Appointment/Currentbookings'));
const Upcomingbookings = lazy(() => import('./pages/Dashboard/Appointment/Upcomingbookings'));
const Pastbookings = lazy(() => import('./pages/Dashboard/Appointment/Pastbookings'));
const Cancellation = lazy(() => import('./pages/Dashboard/Appointment/Cancellation'));
const ClaimDispute = lazy(() => import('./pages/Dashboard/Appointment/ClaimDispute'));
const PostProject = lazy(() => import('./pages/Dashboard/Post A Project/PostProject'));
const GiftCards = lazy(() => import('./pages/Dashboard/Gift Cards'));
const FamilyandFriends = lazy(() => import('./pages/Dashboard/Family & Friends'));
const Favourites = lazy(() => import('./pages/Dashboard/Favourites'));
const DiscountPromotion = lazy(() => import('./pages/Dashboard/Discount & Promotion'));
const Reviews = lazy(() => import('./pages/Dashboard/Reviews/Reviews'));
const Payments = lazy(() => import('./pages/Dashboard/Payments'));
const CustomerForms = lazy(() => import('./pages/Dashboard/Customer Forms'));
const AboutUs = lazy(() => import('./pages/Dashboard/Know More/AboutUs'));
const PrivacyPolicy = lazy(() => import('./pages/Dashboard/Know More/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/Dashboard/Know More/TermsOfService'));
const ContactUs = lazy(() => import('./pages/Dashboard/Know More/ContactUs'));
const Cookies = lazy(() => import('./pages/Dashboard/Know More/Cookies'));
const FAQs = lazy(() => import('./pages/Dashboard/Know More/FAQs'));
const Chat = lazy(() => import('./pages/Dashboard/Chat'));

// Business Owner Dashboard pages 
const BusinessOwnerAccountSettingPage = lazy(() => import('./pages/Business owner Dashboard/Business Owner Account Settings'));
const BusinessOwnerBasket = lazy(() => import('./pages/Business owner Dashboard/Basket'));
const BusinessCurrentbookings = lazy(() => import('./pages/Business owner Dashboard/Appointment/Currentbookings'));
const BusinessUpcomingbookings = lazy(() => import('./pages/Business owner Dashboard/Appointment/Upcomingbookings'));
const BusinessPastbookings = lazy(() => import('./pages/Business owner Dashboard/Appointment/Pastbookings'));
const BusinessClaimDispute = lazy(() => import('./pages/Business owner Dashboard/Appointment/ClaimDispute'));
const BusinessPostProject = lazy(() => import('./pages/Business owner Dashboard/Post A Project'));
const Services = lazy(() => import('./pages/Business owner Dashboard/Services'));
const Staffs = lazy(() => import('./pages/Business owner Dashboard/Staffs'));
const ManageTime = lazy(() => import('./pages/Business owner Dashboard/Manage Time'));
const Manager = lazy(() => import('./pages/Business owner Dashboard/Manager'));
const Permissions = lazy(() => import('./pages/Business owner Dashboard/Manager/Permissions'));
const BussinessDiscountPromotion = lazy(() => import('./pages/Business owner Dashboard/Discount & Promotion'));
const CreateDiscount = lazy(() => import('./pages/Business owner Dashboard/Discount & Promotion/CreateDiscount'));
const AvailabilityManagement = lazy(() => import('./pages/Business owner Dashboard/Availability Management'));
const ShopManageTime = lazy(() => import('./pages/Business owner Dashboard/Availability Management/ShopManageTime'));
const BusinessReviews = lazy(() => import('./pages/Business owner Dashboard/Reviews'));
const BusinessChat = lazy(() => import('./pages/Business owner Dashboard/Chat'));
const Earning = lazy(() => import('./pages/Business owner Dashboard/Earning'));
const BusinessPayments = lazy(() => import('./pages/Business owner Dashboard/Payments'));
const BusinessGiftCards = lazy(() => import('./pages/Business owner Dashboard/Gift Cards'));
const BusinessFamilyandFriends = lazy(() => import('./pages/Business owner Dashboard/Family & Friends'));
const BusinessCustomerForms = lazy(() => import('./pages/Business owner Dashboard/Customer Forms'));
const BusinessFavourites = lazy(() => import('./pages/Business owner Dashboard/Favourites'));
const BusinessAboutUs = lazy(() => import('./pages/Business owner Dashboard/Know More/AboutUs'));
const BusinessPrivacyPolicy = lazy(() => import('./pages/Business owner Dashboard/Know More/PrivacyPolicy'));
const BusinessTermsOfService = lazy(() => import('./pages/Business owner Dashboard/Know More/TermsOfService'));
const BusinessContactUs = lazy(() => import('./pages/Business owner Dashboard/Know More/ContactUs'));
const BusinessCookies = lazy(() => import('./pages/Business owner Dashboard/Know More/Cookies'));
const BusinessFAQs = lazy(() => import('./pages/Business owner Dashboard/Know More/FAQs'));



// Independent Dashboard pages 
const IndependentAccountSettingPage = lazy(() => import('./pages/Independent Dashboard/Account Settings'));
const IndependentBasket = lazy(() => import('./pages/Independent Dashboard/Basket'));
const IndependentCurrentbookings = lazy(() => import('./pages/Independent Dashboard/Appointment/Currentbookings'));
const IndependentUpcomingbookings = lazy(() => import('./pages/Independent Dashboard/Appointment/Upcomingbookings'));
const IndependentPastbookings = lazy(() => import('./pages/Independent Dashboard/Appointment/Pastbookings'));
const IndependentClaimDispute = lazy(() => import('./pages/Independent Dashboard/Appointment/ClaimDispute'));
const IndependentPostProject = lazy(() => import('./pages/Independent Dashboard/Post A Project'));
const IndependentServicess = lazy(() => import('./pages/Independent Dashboard/Services'));
// const ManageTime = lazy(() => import('./pages/Independent Dashboard/Manage Time'));
// const Manager = lazy(() => import('./pages/Independent Dashboard/Manager'));
// const Permissions = lazy(() => import('./pages/Independent Dashboard/Manager/Permissions'));
const IndependentDiscountPromotion = lazy(() => import('./pages/Independent Dashboard/Discount & Promotion'));
const IndependentCreateDiscount = lazy(() => import('./pages/Independent Dashboard/Discount & Promotion/CreateDiscount'));
const IndependentAvailabilityManagement = lazy(() => import('./pages/Independent Dashboard/Availability Management'));
const IndependentShopManageTime = lazy(() => import('./pages/Independent Dashboard/Availability Management/ShopManageTime'));
const IndependentReviews = lazy(() => import('./pages/Independent Dashboard/Reviews'));
const IndependentChat = lazy(() => import('./pages/Independent Dashboard/Chat'));
const IndependentEarning = lazy(() => import('./pages/Independent Dashboard/Earning'));
const IndependentPayments = lazy(() => import('./pages/Independent Dashboard/Payments'));
const IndependentGiftCards = lazy(() => import('./pages/Independent Dashboard/Gift Cards'));
const IndependentFamilyandFriends = lazy(() => import('./pages/Independent Dashboard/Family & Friends'));
const IndependentCustomerForms = lazy(() => import('./pages/Independent Dashboard/Customer Forms'));
const IndependentFavourites = lazy(() => import('./pages/Independent Dashboard/Favourites'));
const IndependentAboutUs = lazy(() => import('./pages/Independent Dashboard/Know More/AboutUs'));
const IndependentPrivacyPolicy = lazy(() => import('./pages/Independent Dashboard/Know More/PrivacyPolicy'));
const IndependentTermsOfService = lazy(() => import('./pages/Independent Dashboard/Know More/TermsOfService'));
const IndependentContactUs = lazy(() => import('./pages/Independent Dashboard/Know More/ContactUs'));
const IndependentCookies = lazy(() => import('./pages/Independent Dashboard/Know More/Cookies'));
const IndependentFAQs = lazy(() => import('./pages/Independent Dashboard/Know More/FAQs'));

// Client signup flow
const ClientType = lazy(() => import('./pages/AuthPages/Signup/ClientType/ClientType'));
const OtpVerification = lazy(() => import('./pages/AuthPages/Signup/ClientType/OtpVerification'));
const SignupSuccess = lazy(() => import('./pages/AuthPages/Signup/ClientType/SignupSuccess'));

// Business Owner signup flow
const BusinessOwnerInfo = lazy(() => import('./pages/AuthPages/Signup/BusinessOwner/AccountInfo'));
const BusinessOwnerForm = lazy(() => import('./pages/AuthPages/Signup/BusinessOwner/AccountForm'));
const BusinessOwnerVerification = lazy(() => import('./pages/AuthPages/Signup/BusinessOwner/Verification'));
const BusinessOwnerProfileImage = lazy(() => import('./pages/AuthPages/Signup/BusinessOwner/ProfileImage'));
const BusinessOwnerDetails = lazy(() => import('./pages/AuthPages/Signup/BusinessOwner/BusinessDetails'));
const BusinessOwnerAmenities = lazy(() => import('./pages/AuthPages/Signup/BusinessOwner/Amenities'));
const BusinessOwnerServices = lazy(() => import('./pages/AuthPages/Signup/BusinessOwner/Services'));
const BusinessOwnerSuccess = lazy(() => import('./pages/AuthPages/Signup/BusinessOwner/Success'));

// Independent Professional signup flow
const IndependentInfo = lazy(() => import('./pages/AuthPages/Signup/Independent/AccountInfo'));
const IndependentVerification = lazy(() => import('./pages/AuthPages/Signup/Independent/Verification'));
const IndependentProfileImage = lazy(() => import('./pages/AuthPages/Signup/Independent/ProfileImage'));
const IndependentBusinessDetails = lazy(() => import('./pages/AuthPages/Signup/Independent/BusinessDetails'));
const IndependentServices = lazy(() => import('./pages/AuthPages/Signup/Independent/Services'));
const IndependentSuccess = lazy(() => import('./pages/AuthPages/Signup/Independent/Success'));

// Loading component to show while lazy-loaded components are being loaded
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-primary">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-4 text-primary font-inter">Loading...</p>
    </div>
  </div>
);

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
};

/**
 * The main application component with optimized routing and lazy loading.
 * 
 * This component sets up the routing for the application using React's lazy loading
 * to improve initial load performance by splitting code into smaller chunks.
 */
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Suspense fallback={<LoadingFallback />}>
            <ScrollToTop />
            <Routes>
              {/* Main route */}
              <Route path="/" element={<HomePage />} />
              <Route path="/services-details" element={<SalonServicesDetails />} />
              <Route path="/salons/:city" element={<CitybySalonsList />} />
              <Route path="/about-us" element={<AboutUss />} />
              <Route path="/privacy-policy" element={<PrivacyPolicys />} />
              <Route path="/terms-of-service" element={<TermsOfServices />} />
              <Route path="/cookies" element={<Cookiess />} />
              <Route path="/contact-us" element={<ContactUss />} />
              <Route path="/faqs" element={<FAQss />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/careers" element={<Careers />} />

              {/* Authentication routes */}
              <Route path="/signin" element={<SignIn />} />
              <Route path="/otp" element={<LoginOtpVerify />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/account-type" element={<AccountType />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Client signup flow */}
              <Route path="/client-signup" element={<ClientType />} />
              <Route path="/signup-verification" element={<OtpVerification />} />
              <Route path="/signup-success" element={<SignupSuccess />} />

              {/* Business Owner signup flow */}
              <Route path="/business-owner" element={<BusinessOwnerInfo />} />
              <Route path="/business-owner/account-form" element={<BusinessOwnerForm />} />
              <Route path="/business-owner/verification" element={<BusinessOwnerVerification />} />
              <Route path="/business-owner/profile-image" element={<BusinessOwnerProfileImage />} />
              <Route path="/business-owner/business-details" element={<BusinessOwnerDetails />} />
              <Route path="/business-owner/amenities" element={<BusinessOwnerAmenities />} />
              <Route path="/business-owner/services" element={<BusinessOwnerServices />} />
              <Route path="/business-owner/success" element={<BusinessOwnerSuccess />} />

              {/* Independent Professional signup flow */}
              <Route path="/independent" element={<IndependentInfo />} />
              <Route path="/independent/verification" element={<IndependentVerification />} />
              <Route path="/independent/profile-image" element={<IndependentProfileImage />} />
              <Route path="/independent/business-details" element={<IndependentBusinessDetails />} />
              <Route path="/independent/services" element={<IndependentServices />} />
              <Route path="/independent/success" element={<IndependentSuccess />} />

              {/* user Dashboard routes with DashboardLayout */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard/basket" element={<Basket />} />
                <Route path="/dashboard/account-setting" element={<UserAccountSettingPage />} />
                <Route path="/dashboard/appointments/current-bookings" element={<Currentbookings />} />
                <Route path="/dashboard/appointments/upcoming-bookings" element={<Upcomingbookings />} />
                <Route path="/dashboard/appointments/past-bookings" element={<Pastbookings />} />
                <Route path="/dashboard/appointments/cancellation-bookings" element={<Cancellation />} />
                <Route path="/dashboard/appointments/claim/dispute-bookings" element={<ClaimDispute />} />
                <Route path="/dashboard/post-project" element={<PostProject />} />
                <Route path="/dashboard/gift-cards" element={<GiftCards />} />
                <Route path="/dashboard/family-friends" element={<FamilyandFriends />} />
                <Route path="/dashboard/favorite" element={<Favourites />} />
                <Route path="/dashboard/discounts" element={<DiscountPromotion />} />
                <Route path="/dashboard/reviews" element={<Reviews />} />
                <Route path="/dashboard/chat" element={<Chat />} />
                <Route path="/dashboard/payments" element={<Payments />} />
                <Route path="/dashboard/customer-forms" element={<CustomerForms />} />
                <Route path="/dashboard/know-more/about-us" element={<AboutUs />} />
                <Route path="/dashboard/know-more/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/dashboard/know-more/terms-of-service" element={<TermsOfService />} />
                <Route path="/dashboard/know-more/contact-us" element={<ContactUs />} />
                <Route path="/dashboard/know-more/cookies" element={<Cookies />} />
                <Route path="/dashboard/know-more/faqs" element={<FAQs />} />
              </Route>


              {/* Business Owner Dashboard routes with DashboardLayout */}
              <Route element={<ProtectedRoute />}>
                <Route path="/business-owner/dashboard/account-setting" element={<BusinessOwnerAccountSettingPage />} />
                <Route path="/business-owner/dashboard/basket" element={<BusinessOwnerBasket />} />
                <Route path="/business-owner/dashboard/appointments/current-bookings" element={<BusinessCurrentbookings />} />
                <Route path="/business-owner/dashboard/appointments/upcoming-bookings" element={<BusinessUpcomingbookings />} />
                <Route path="/business-owner/dashboard/appointments/past-bookings" element={<BusinessPastbookings />} />
                <Route path="/business-owner/dashboard/appointments/claim/dispute-bookings" element={<BusinessClaimDispute />} />
                <Route path="/business-owner/dashboard/post-project" element={<BusinessPostProject />} />
                <Route path="/business-owner/dashboard/services" element={<Services />} />
                <Route path="/business-owner/dashboard/staffs" element={<Staffs />} />
                <Route path="/business-owner/dashboard/manage-time" element={<ManageTime />} />
                <Route path="/business-owner/dashboard/manager" element={<Manager />} />
                <Route path="/business-owner/dashboard/manager/permissions" element={<Permissions />} />
                <Route path="/business-owner/dashboard/discounts" element={<BussinessDiscountPromotion />} />
                <Route path="/business-owner/dashboard/discounts/create" element={<CreateDiscount />} />
                <Route path="/business-owner/dashboard/availability-management" element={<AvailabilityManagement />} />
                <Route path="/business-owner/dashboard/availability-management/shop-manage-time" element={<ShopManageTime />} />
                <Route path="/business-owner/dashboard/reviews" element={<BusinessReviews />} />
                <Route path="/business-owner/dashboard/chat" element={<BusinessChat />} />
                <Route path="/business-owner/dashboard/earning" element={<Earning />} />
                <Route path="/business-owner/dashboard/payments" element={<BusinessPayments />} />
                <Route path="/business-owner/dashboard/gift-cards" element={<BusinessGiftCards />} />
                <Route path="/business-owner/dashboard/family-friends" element={<BusinessFamilyandFriends />} />
                <Route path="/business-owner/dashboard/customer-forms" element={<BusinessCustomerForms />} />
                <Route path="/business-owner/dashboard/favorite" element={<BusinessFavourites />} />
                <Route path="/business-owner/dashboard/know-more/about-us" element={<BusinessAboutUs />} />
                <Route path="/business-owner/dashboard/know-more/privacy-policy" element={<BusinessPrivacyPolicy />} />
                <Route path="/business-owner/dashboard/know-more/terms-of-service" element={<BusinessTermsOfService />} />
                <Route path="/business-owner/dashboard/know-more/contact-us" element={<BusinessContactUs />} />
                <Route path="/business-owner/dashboard/know-more/cookies" element={<BusinessCookies />} />
                <Route path="/business-owner/dashboard/know-more/faqs" element={<BusinessFAQs />} />
              </Route>

              {/* Independent Dashboard routes with DashboardLayout */}
              <Route element={<ProtectedRoute />}>
                <Route path="/independent/dashboard/account-setting" element={<IndependentAccountSettingPage />} />
                <Route path="/independent/dashboard/basket" element={<IndependentBasket />} />
                <Route path="/independent/dashboard/appointments/current-bookings" element={<IndependentCurrentbookings />} />
                <Route path="/independent/dashboard/appointments/upcoming-bookings" element={<IndependentUpcomingbookings />} />
                <Route path="/independent/dashboard/appointments/past-bookings" element={<IndependentPastbookings />} />
                <Route path="/independent/dashboard/appointments/claim/dispute-bookings" element={<IndependentClaimDispute />} />
                <Route path="/independent/dashboard/post-project" element={<IndependentPostProject />} />
                <Route path="/independent/dashboard/services" element={<IndependentServicess />} />
                {/* <Route path="/independent/dashboard/staffs" element={<Staffs />} />
                <Route path="/independent/dashboard/manage-time" element={<ManageTime />} /> */}
                {/* <Route path="/independent/dashboard/manager" element={<Manager />} /> */}
                {/* <Route path="/independent/dashboard/manager/permissions" element={<Permissions />} /> */}
                <Route path="/independent/dashboard/discounts" element={<IndependentDiscountPromotion />} />
                <Route path="/independent/dashboard/discounts/create" element={<IndependentCreateDiscount />} />
                <Route path="/independent/dashboard/availability-management" element={<IndependentAvailabilityManagement />} />
                <Route path="/independent/dashboard/availability-management/shop-manage-time" element={<IndependentShopManageTime />} />
                <Route path="/independent/dashboard/reviews" element={<IndependentReviews />} />
                <Route path="/independent/dashboard/chat" element={<IndependentChat />} />
                <Route path="/independent/dashboard/earning" element={<IndependentEarning />} />
                <Route path="/independent/dashboard/payments" element={<IndependentPayments />} />
                <Route path="/independent/dashboard/gift-cards" element={<IndependentGiftCards />} />
                <Route path="/independent/dashboard/family-friends" element={<IndependentFamilyandFriends />} />
                <Route path="/independent/dashboard/customer-forms" element={<IndependentCustomerForms />} />
                <Route path="/independent/dashboard/favorite" element={<IndependentFavourites />} />
                <Route path="/independent/dashboard/know-more/about-us" element={<IndependentAboutUs />} />
                <Route path="/independent/dashboard/know-more/privacy-policy" element={<IndependentPrivacyPolicy />} />
                <Route path="/independent/dashboard/know-more/terms-of-service" element={<IndependentTermsOfService />} />
                <Route path="/independent/dashboard/know-more/contact-us" element={<IndependentContactUs />} />
                <Route path="/independent/dashboard/know-more/cookies" element={<IndependentCookies />} />
                <Route path="/independent/dashboard/know-more/faqs" element={<IndependentFAQs />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </PersistGate>
    </Provider>
  );
}