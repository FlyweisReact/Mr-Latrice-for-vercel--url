import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ServiceFilter, ExtraFilter, Filterby } from "../Service Filter/ServiceFilter";


import Facebook from "../../assets/images/home/fb.png";
import Instagram from "../../assets/images/home/intsa.png";
import Twitter from "../../assets/images/home/twitter.png";
import Linkdin from "../../assets/images/home/link.png";
import Basket from "../../assets/images/home/basket.png";


import { VscSettings } from "react-icons/vsc";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


import Footer from "../Footer";

import img from '../../assets/images/dashboard/img111.png'
import img1 from '../../assets/images/dashboard/profileimg.jpg'

export default function MainLayout({ children, showfooter = true, showfilters = false }) {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [showFilter1, setShowFilter1] = useState(false);
    const [showFilter2, setShowFilter2] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {
        const localUser = localStorage.getItem("user");
        if (localUser) {
            setUser(JSON.parse(localUser));
        }
    }, []);

    return (
        <>
            {/* Top Address Bar */}
            <div className="bg-charocal px-4 sm:px-8 py-2 flex flex-col sm:flex-row justify-between items-center">
                <p className="font-inter text-primary text-[12px] sm:text-[14px] text-center sm:text-left mb-2 sm:mb-0">
                    Company Address: ABC Road, City, State, Country, Zip Code
                </p>
                <div className="flex gap-2 items-center">
                    <img
                        src={Facebook}
                        className="w-5 h-5 sm:w-auto sm:h-auto object-contain cursor-pointer"
                    />
                    <img
                        src={Instagram}
                        className="w-5 h-5 sm:w-auto sm:h-auto object-contain cursor-pointer"
                    />
                    <img
                        src={Twitter}
                        className="w-5 h-5 sm:w-auto sm:h-auto object-contain cursor-pointer"
                    />
                    <img
                        src={Linkdin}
                        className="w-5 h-5 sm:w-auto sm:h-auto object-contain cursor-pointer"
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-primary h-full">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    {user ? (
                        <header className="py-4">
                            <div className="flex flex-wrap justify-between items-center">
                                {/* Logo */}
                                <Link to={'/'}>
                                    <div className="flex items-baseline ">
                                        <img src={img} alt="" className="h-10" />
                                        <h1 className="text-[30px] sm:text-[48px] font-[600] text-primary font-rasa m-0">
                                            atrice
                                        </h1>
                                    </div>
                                </Link>

                                {/* Mobile Menu Button */}
                                <button
                                    className="md:hidden text-primary p-2"
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d={
                                                mobileMenuOpen
                                                    ? "M6 18L18 6M6 6l12 12"
                                                    : "M4 6h16M4 12h16M4 18h16"
                                            }
                                        />
                                    </svg>
                                </button>

                                {/* Navigation - Desktop */}
                                <div className="hidden md:flex flex-wrap gap-8 items-center">
                                    <nav className="flex flex-wrap gap-5">
                                        <Link
                                            to="/"
                                            className="text-primary text-[15px] sm:text-[18px] font-outfit font-[500]"
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            to="/dashboard/favorite"
                                            className="text-primary text-[15px] sm:text-[18px] font-outfit font-[500]"
                                        >
                                            Favorites
                                        </Link>
                                        <Link
                                            to="/dashboard/know-more/contact-us"
                                            className="text-primary text-[15px] sm:text-[18px] font-outfit font-[500]"
                                        >
                                            Contact Us
                                        </Link>
                                        <Link
                                            to="/dashboard/post-project"
                                            className="text-primary text-[15px] sm:text-[18px] font-outfit font-[500]"
                                        >
                                            Post a Project
                                        </Link>

                                    </nav>
                                    {/* Buttons - Desktop */}
                                    <div className="flex items-center gap-4">
                                        <Link
                                            to="/dashboard/basket"
                                        >
                                            <button className="relative text-[13px] bg-secondary text-black px-4 py-2 rounded-[30px] shadow-[0px_4px_4px_0px_#00000040] flex items-center justify-center">
                                                <img
                                                    src={Basket}
                                                    className="h-[20px] w-[22px] object-contain"
                                                />
                                                <div className="absolute top-1 right-3 bg-[#FAF9F6] shadow-[0px_4px_4px_0px_#00000040] rounded-[10px] w-3.5 h-3.5 flex items-center justify-center font-[700] font-sansation text-[13px] ">
                                                    4
                                                </div>
                                            </button>
                                        </Link>
                                        <Link
                                            to="/dashboard/account-setting"
                                        >
                                            <div className="w-9 h-9 rounded-full cursor-pointer">
                                                <img
                                                    src={img1}
                                                    alt="Profile"
                                                    className="w-full h-full rounded-full object-cover"
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Navigation Menu */}
                            {mobileMenuOpen && (
                                <div className="md:hidden mt-2 bg-primary rounded-md p-4">
                                    <nav className="flex flex-col space-y-3">
                                        <Link
                                            to="/"
                                            className="text-primary text-[15px] sm:text-[20px] font-outfit font-[500]"
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            to="/dashboard/favorite"
                                            className="text-primary text-[15px] sm:text-[20px] font-outfit font-[500]"
                                        >
                                            Favorites
                                        </Link>
                                        <Link
                                            to="/dashboard/know-more/contact-us"
                                            className="text-primary text-[15px] sm:text-[20px] font-outfit font-[500]"
                                        >
                                            Contact Us
                                        </Link>
                                        <Link
                                            to="/dashboard/post-project"
                                            className="text-primary text-[15px] sm:text-[20px] font-outfit font-[500]"
                                        >
                                            Post a Project
                                        </Link>
                                    </nav>

                                    {/* Mobile Buttons */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <Link
                                            to="/dashboard/basket"
                                        >
                                            <button className="relative text-[13px] bg-secondary text-black px-3 py-2 rounded-[30px] shadow-[0px_4px_4px_0px_#00000040] flex items-center justify-center">
                                                <img
                                                    src={Basket}
                                                    className="h-[18px] w-[20px] object-contain"
                                                />
                                                <div className="absolute top-1 right-2 bg-[#FAF9F6] shadow-[0px_4px_4px_0px_#00000040] rounded-[10px] w-3 h-3 flex items-center justify-center font-[700] font-sansation text-[13px] ">
                                                    4
                                                </div>
                                            </button>
                                        </Link>
                                        <Link
                                            to="/dashboard/account-setting"
                                        >
                                            <div className="w-9 h-9 rounded-full cursor-pointer">
                                                <img
                                                    src={img1}
                                                    alt="Profile"
                                                    className="w-full h-full rounded-full object-cover"
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </header>
                    ) : (
                        <header className="py-4">
                            <div className="flex flex-wrap justify-between items-center">
                                {/* Logo */}
                                <Link to={'/'}>
                                    <div className="flex items-baseline ">
                                        <img src={img} alt="" className=" h-10" />
                                        <h1 className="text-[30px] sm:text-[48px] font-[600] text-primary font-rasa m-0">
                                            atrice
                                        </h1>
                                    </div>
                                </Link>

                                {/* Mobile Menu Button */}
                                <button
                                    className="md:hidden text-primary p-2"
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d={
                                                mobileMenuOpen
                                                    ? "M6 18L18 6M6 6l12 12"
                                                    : "M4 6h16M4 12h16M4 18h16"
                                            }
                                        />
                                    </svg>
                                </button>

                                {/* Navigation - Desktop */}
                                <div className="hidden md:flex flex-wrap gap-8 items-center">
                                    <nav className="flex flex-wrap gap-5">
                                        <Link
                                            to="/"
                                            className="text-primary text-[15px] sm:text-[18px] font-outfit font-[500]"
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            to="/client-signup"
                                            className="text-primary text-[15px] sm:text-[18px] font-outfit font-[500]"
                                        >
                                            Client Account
                                        </Link>
                                        <Link
                                            to="/business-owner"
                                            className="text-primary text-[15px] sm:text-[18px] font-outfit font-[500]"
                                        >
                                            Professional Account
                                        </Link>
                                        <Link
                                            to="/signin"
                                            className="text-primary text-[15px] sm:text-[18px] font-outfit font-[500]"
                                        >
                                            Favorites
                                        </Link>
                                        <Link
                                            to="/contact-us"
                                            className="text-primary text-[15px] sm:text-[18px] font-outfit font-[500]"
                                        >
                                            Contact Us
                                        </Link>
                                    </nav>
                                    {/* Buttons - Desktop */}
                                    <div className="flex gap-4">
                                        <Link to="/account-type">
                                            <button className="text-[13px] bg-secondary text-black px-4 py-2 rounded-[30px] shadow-[0px_4px_4px_0px_#00000040] flex items-center justify-center">
                                                <img
                                                    src={Basket}
                                                    className="h-[20px] w-[22px] object-contain"
                                                />
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => navigate("/signin")}
                                            className="text-[13px] bg-secondary text-black px-4 py-2 rounded-[30px] shadow-[0px_4px_4px_0px_#00000040]"
                                        >
                                            LOG IN
                                        </button>
                                        <button
                                            onClick={() => navigate("/account-type")}
                                            className="text-[13px] bg-secondary text-black px-4 py-2 rounded-[30px] shadow-[0px_4px_4px_0px_#00000040_inset]"
                                        >
                                            CREATE ACCOUNT
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Navigation Menu */}
                            {mobileMenuOpen && (
                                <div className="md:hidden mt-2 bg-primary rounded-md p-4">
                                    <nav className="flex flex-col space-y-3">
                                        <Link
                                            to="/"
                                            className="text-primary text-[15px] sm:text-[20px] font-outfit font-[500]"
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            to="/client-signup"
                                            className="text-primary text-[15px] sm:text-[20px] font-outfit font-[500]"
                                        >
                                            Client Account
                                        </Link>
                                        <Link
                                            to="/business-owner"
                                            className="text-primary text-[15px] sm:text-[20px] font-outfit font-[500]"
                                        >
                                            Professional Account
                                        </Link>
                                        <Link
                                            to="/favorites"
                                            className="text-primary text-[15px] sm:text-[20px] font-outfit font-[500]"
                                        >
                                            Favorites
                                        </Link>
                                        <Link
                                            to="/contact"
                                            className="text-primary text-[15px] sm:text-[20px] font-outfit font-[500]"
                                        >
                                            Contact Us
                                        </Link>
                                    </nav>

                                    {/* Mobile Buttons */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <Link to="/account-type">
                                            <button className="text-[13px] bg-secondary text-black px-3 py-2 rounded-[30px] shadow-[0px_4px_4px_0px_#00000040] flex items-center justify-center">
                                                <img
                                                    src={Basket}
                                                    className="h-[18px] w-[20px] object-contain"
                                                />
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => navigate("/signin")}
                                            className="text-[13px] bg-secondary text-black px-3 py-2 rounded-[30px] shadow-[0px_4px_4px_0px_#00000040]"
                                        >
                                            LOG IN
                                        </button>
                                        <button
                                            onClick={() => navigate("/account-type")}
                                            className="text-[13px] bg-secondary text-black px-3 py-2 rounded-[30px] shadow-[0px_4px_4px_0px_#00000040_inset]"
                                        >
                                            CREATE ACCOUNT
                                        </button>
                                    </div>
                                </div>
                            )}
                        </header>
                    )}
                    {showfilters &&
                        <div className="pb-5">
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

                                <div className="client-navbar-actions justify-between">
                                    <div className="relative">
                                        <button className="client-navbar-extra-btn flex items-center gap-2" onClick={() => setShowFilter2((prev) => !prev)}>Filter by
                                            {showFilter2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                        </button>
                                        {showFilter2 && (
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3">
                                                <Filterby />
                                            </div>
                                        )}
                                    </div>

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
                    }
                </div>
            </div>

            <main className="">
                {children}
            </main>
            {showfooter ?
                <Footer />
                :
                ""
            }
        </>
    );
}
