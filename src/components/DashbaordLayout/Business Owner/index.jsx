import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Line from "../../../assets/images/dashboard/line.png";
import "../scrollbar.css";
import {
  AppointmentsIcon,
  PostIcon,
  ServicesIcon,
  DiscountsIcon,
  AvailabilityIcon,
  ReviewsIcon,
  ChatIcon,
  EarningsIcon,
  PaymentsIcon,
  GiftCardsIcon,
  FamilyFriendsIcon,
  FavoriteIcon,
  Customer,
  Logout,
} from "../DashbaordIcons";
import { IoMdCart } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import img from '../../../assets/images/dashboard/img40.jpg';
import { IoSettingsOutline } from "react-icons/io5";
import { LuBellDot } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi";
import { ServiceFilter, ExtraFilter, SalonsList } from "../../Service Filter/ServiceFilter";
import NotificationOffcanvas from "../../Notification Offcanvas/NotificationOffcanvas";

import img1 from '../../../assets/images/dashboard/img111.png'

/**
 * Dashboard Layout Component
 *
 * A responsive layout component that provides a consistent structure for dashboard pages
 * with a collapsible sidebar navigation, header, and main content area.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render in the main content area
 */
const BusinessOwnerDashboardLayout = ({ children, title = "", headerAction = null, titleAction = null, gpnumber = "", }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showFilter, setShowFilter] = useState(false);
  const [showFilter1, setShowFilter1] = useState(false);
  const [showsalonsList, setShowSalonsList] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const location = useLocation();
  const navigate = useNavigate()

  // Navigation items configuration
  const navItems = [
    { name: "Appointments", icon: AppointmentsIcon, path: "/business-owner/dashboard/appointments/current-bookings" },
    { name: "Post A Project", icon: PostIcon, path: "/business-owner/dashboard/post-project" },
    { name: "Services", icon: ServicesIcon, path: "/business-owner/dashboard/services" },
    { name: "Staffs", icon: Customer, path: "/business-owner/dashboard/staffs" },
    { name: "Manager", icon: Customer, path: "/business-owner/dashboard/manager" },
    { name: "Discount & Promotion", icon: DiscountsIcon, path: "/business-owner/dashboard/discounts" },
    { name: "Availability Management", icon: AvailabilityIcon, path: "/business-owner/dashboard/availability-management" },
    { name: "Reviews", icon: ReviewsIcon, path: "/business-owner/dashboard/reviews" },
    { name: "Chat", icon: ChatIcon, path: "/business-owner/dashboard/chat" },
    { name: "Earning", icon: EarningsIcon, path: "/business-owner/dashboard/earning" },
    { name: "Payments", icon: PaymentsIcon, path: "/business-owner/dashboard/payments" },
    { name: "Gift Cards", icon: GiftCardsIcon, path: "/business-owner/dashboard/gift-cards" },
    { name: "Family & Friends", icon: FamilyFriendsIcon, path: "/business-owner/dashboard/family-friends" },
    { name: "Customer Forms", icon: Customer, path: "/business-owner/dashboard/customer-forms" },
    { name: "Favorite", icon: FavoriteIcon, path: "/business-owner/dashboard/favorite" },
    { name: "Know More", icon: AvailabilityIcon, path: "/business-owner/dashboard/know-more/about-us" },
  ];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile menu when resizing to desktop
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && windowWidth < 768) {
        const sidebar = document.getElementById("mobile-sidebar");
        // const menuToggle = document.querySelector("[data-menu-toggle]");

        if (sidebar && !sidebar.contains(event.target)) {
          if (!event.target.closest("[data-menu-toggle]")) {
            setIsMobileMenuOpen(false);
          }
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen, windowWidth]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex h-screen bg-[#FAF9F6] relative overflow-x-hidden">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && windowWidth < 768 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside
        id="mobile-sidebar"
        className={`bg-[#123E41] text-[#FAF9F6] w-[230px] sm:w-[260px] fixed h-full z-40 transition-all duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 flex flex-col`}
      >
        <div className="p-4 md:block flex items-center justify-between w-full">
          {/* <h1 className="text-2xl text-[#FFE6D8] font-rasa font-bold text-center cursor-pointer" onClick={() => navigate('/')}>Latrice</h1> */}
          <Link to={'/'}>
            <div className="flex items-baseline justify-center ">
              <img src={img1} alt="" className="h-10" />
              <h1 className="text-[25px] sm:text-[32px] font-[600] text-[#FFE6D8] font-rasa m-0">
                atrice
              </h1>
            </div>
          </Link>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <FiX size={24} />
          </button>
        </div>

        <div className="w-full flex justify-center">
          <img src={Line} alt="Divider line" className="object-contain" />
        </div>

        <nav className="mt-4 flex-1 overflow-hidden">
          <ul className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#FF827F] scrollbar-track-[#123E41] pr-1">
            {navItems.map((item) => (
              <li key={item.name} className="mb-1 pl-4 pr-1">
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-sm transition-colors duration-200 ${location.pathname === item.path
                    ? "bg-[#FFE6D8] rounded-[15px] shadow-md"
                    : "hover:bg-[#FFE6D8] hover:bg-opacity-30 hover:rounded-[15px]"
                    }`}
                  onClick={() => windowWidth < 768 && setIsMobileMenuOpen(false)}
                >
                  <div className={`w-[33px] h-[30px] rounded-[12px] flex justify-center items-center transition-all ${location.pathname === item.path
                    ? 'bg-white shadow-xl'
                    : 'bg-[#FF827F]'
                    }`}>
                    <img
                      src={item.icon}
                      alt={item.name}
                      className={`${location.pathname === item.path ? 'brightness-0' : ''}`}
                    />
                  </div>
                  <span className={`font-rasa ml-3 text-[16px] ${location.pathname === item.path ? "text-[#2F2F2F]" : "text-[#FAF9F6]"
                    }`}>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-full px-4 pb-12 mt-2">
          <Link
            to="/"
            className="flex items-center px-4 py-3 text-sm group hover:bg-[#FFE6D8] hover:rounded-[15px] hover:shadow-md transition-colors duration-200"
            onClick={() => windowWidth < 768 && setIsMobileMenuOpen(false)}
          >
            <div className="w-[33px] h-[30px] rounded-[12px] flex justify-center items-center bg-[#FF827F] mr-3 group-hover:bg-white group-hover:shadow-xl transition-all">
              <img src={Logout} alt="Logout" className="group-hover:brightness-0" />
            </div>
            <span className="font-rasa text-[16px] text-[#FF827F] group-hover:text-[#2F2F2F]">
              Log Out
            </span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-[260px] w-full">
        {/* Header */}
        <header className="bg-[#123E41] text-[#FAF9F6] p-2 sm:p-4 flex flex-col-reverse sm:flex-row  items-center justify-between gap-2 shadow-md fixed top-0 right-0 left-0 md:left-[260px] z-30">
          <div className="">
            <div className="client-navbar-filters">
              <div className="client-navbar-search-group">
                <IoIosSearch className="client-navbar-icon" />
                <input
                  type="search"
                  placeholder="Service, Independ..."
                  className="client-navbar-input"
                />
              </div>

              <div className="client-navbar-divider" />

              <div className="client-navbar-search-group">
                <MdOutlineLocationOn className="client-navbar-icon" />
                <input
                  type="search"
                  placeholder="Where..."
                  className="client-navbar-input"
                />
                <input
                  type="search"
                  placeholder="mm/dd/yyyy"
                  className="client-navbar-input"
                />
              </div>

              <div className="client-navbar-actions">
                <div className="relative">
                  <button className="client-navbar-extra-btn" onClick={() => setShowFilter1((prev) => !prev)}>Extra</button>
                  {showFilter1 && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3">
                      <ExtraFilter />
                    </div>
                  )}
                </div>


                <div className="relative">
                  <button
                    onClick={() => setShowFilter((prev) => !prev)}
                    className="relative z-10"
                  >
                    <VscSettings className="client-navbar-icon" />
                  </button>

                  {showFilter && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3">
                      <ServiceFilter />
                    </div>
                  )}
                </div>
                <div className="client-navbar-search-btn">
                  <IoSearch className="text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between w-full sm:w-auto mt-2 sm:mt-0">
            <button
              data-menu-toggle
              className="md:hidden mr-2 text-white focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Open menu"
            >
              <FiMenu size={24} />
            </button>
            <div className="client-navbar-icons">
              <div className="w-[30px] h-[30px] bg-[#F5F7FA] rounded-full flex items-center justify-center cursor-pointer text-[#FFCC4E] flex-shrink-0 hover:bg-[#FFCC4E] hover:text-[#FFFFFF] transition duration-300"
                onClick={() => navigate('/business-owner/dashboard/basket')}
              >
                <IoMdCart />
              </div>
              <div className="w-[30px] h-[30px] bg-[#F5F7FA] rounded-full flex items-center justify-center cursor-pointer text-[#718EBF] flex-shrink-0 hover:bg-[#718EBF] hover:text-[#FFFFFF] transition duration-300"
                onClick={() => navigate('/business-owner/dashboard/account-setting')}
              >
                <IoSettingsOutline />
              </div>
              <div className="w-[30px] h-[30px] bg-[#F5F7FA] rounded-full flex items-center justify-center cursor-pointer text-[#FE5C73] flex-shrink-0 hover:bg-[#FE5C73] hover:text-[#FFFFFF] transition duration-300"
                onClick={() => setShowNotification(true)}
              >
                <LuBellDot />
              </div>
            </div>

            <div className="flex items-center ml-4">
              <div className="sm:block mr-2 sm:mr-4">
                <div className="client-navbar-username">Sexy Braids</div>
              </div>
              <div className="relative cursor-pointer">
                <div className="client-navbar-avatar" onClick={() => setShowSalonsList((prev) => !prev)}>
                  <img
                    src={img}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {showsalonsList && (
                  <div className="absolute top-full right-0 mt-3 z-50">
                    <SalonsList />
                  </div>
                )}
              </div>
            </div>
          </div>

          <NotificationOffcanvas
            showNotification={showNotification}
            setShowNotification={setShowNotification}
          />
        </header>

        {/* Main Content Area */}
        <main className="p-2 sm:p-4 pt-60 sm:pt-24 w-full overflow-x-hidden">
          <div className="flex justify-between items-center mb-1 gap-2 flex-wrap">
            <div className={`flex-1 min-w-[400px] flex items-center gap-${gpnumber} flex-wrap`}>
              <h2 className="sm:text-[40px] text-[25px] font-[600] text-charcoal font-rasa whitespace-nowrap">
                {title}
              </h2>
              {titleAction}
            </div>

            <div className="flex items-center gap-2">
              {headerAction}
            </div>
          </div>

          {children}
        </main>
      </div>
    </div>
  );
};

export default BusinessOwnerDashboardLayout;