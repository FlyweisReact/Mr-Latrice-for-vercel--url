// ServiceFilter.jsx
import { useState } from "react";

import img from '../../assets/images/dashboard/img40.jpg'
import img1 from '../../assets/images/dashboard/img72.jpg'
import img2 from '../../assets/images/dashboard/img73.jpg'
import { IoClose } from "react-icons/io5";

import { AddSolonProfileImageModal, AddSolonePlaceModal, AddSoloneAmenitiesModal, AddSoloneYourCategoriesModal, AddSoloneSuccessfullyModal } from '../Modals/Modal'

export function ServiceFilter() {
    const [serviceType, setServiceType] = useState("");
    const [homeService, setHomeService] = useState("");

    const clearFilters = () => {
        setServiceType("");
        setHomeService("");
    };

    return (
        <div className="relative w-40 bg-[#FAF9F6] rounded-[10px] shadow-lg p-4 z-50">
            {/* Arrow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#FAF9F6] rotate-45 border-l border-t border-gray-300 z-0"></div>

            <div className="relative z-10">
                <p className="font-[600] font-inter sm:text-[16px] text-[14px] text-[#123E41] mb-1">Service type:</p>
                <div className="space-y-1 mb-2">
                    {["Independent", "Salon Owner", "Both"].map((type) => (
                        <label key={type} className="flex items-center font-[500] font-inter sm:text-[16px] text-[14px] text-[#2F2F2F]">
                            <input
                                type="radio"
                                name="serviceType"
                                value={type}
                                checked={serviceType === type}
                                onChange={() => setServiceType(type)}
                                className="mr-2 accent-[#123E41]"
                            />
                            {type}
                        </label>
                    ))}
                </div>

                <p className="font-[600] font-inter sm:text-[16px] text-[14px] text-[#123E41] mb-1">Home service?</p>
                <div className="flex space-x-4 mb-2">
                    {["Yes", "No"].map((opt) => (
                        <label key={opt} className="flex flex-col items-center font-[500] font-inter sm:text-[16px] text-[14px] text-[#2F2F2F]">
                            <input
                                type="radio"
                                name="homeService"
                                value={opt}
                                checked={homeService === opt}
                                onChange={() => setHomeService(opt)}
                                className="mr-1 accent-teal-800"
                            />
                            {opt}
                        </label>
                    ))}
                </div>

                <button
                    onClick={clearFilters}
                    className="w-full bg-charocal rounded-[8px] text-[#FAF9F6] text-[14px] py-1.5 px-2.5 hover:bg-gray-700"
                >
                    Clear
                </button>
            </div>
        </div>
    );
}


export function ExtraFilter() {
    const [serviceType, setServiceType] = useState("");
    const [homeService, setHomeService] = useState("");
    const [extraFilters, setExtraFilters] = useState({});

    const [services, setServices] = useState({
        undoHair: false,
        washHair: false,
        blowDryHair: false,
    });

    const handleChange = (key) => {
        setServices((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const [rating, setRating] = useState(0);

    const clearFilters = () => {
        setServiceType("");
        setHomeService("");
        setRating(0);
        setExtraFilters({});
    };

    const renderCheckbox = (label, key) => (
        <label className="flex items-center space-x-2" key={key}>
            <input
                type="checkbox"
                className="peer hidden"
                checked={services[key]}
                onChange={() => handleChange(key)}
            />
            <div
                className={`w-[28px] h-[28px] rounded-sm flex items-center justify-center transition-colors duration-300
            ${services[key] ? 'bg-[#FF827F]' : 'bg-[#D9D9D9] border border-[#2F2F2F]'}`}
            >
                {services[key] && (
                    <svg
                        className="w-4 h-4 text-black"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </div>
            <span className="font-[700] font-sansation sm:text-[17px] text-[15px] text-charcoal">{label}</span>
        </label>
    );


    return (
        <div className="relative w-40 bg-[#FAF9F6] rounded-[10px] shadow-lg p-2 z-50">
            {/* Arrow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#FAF9F6] rotate-45 border-l border-t border-gray-300 z-0"></div>

            <div className="relative z-10">
                {/* Rating Section */}
                <p className="font-[600] font-inter sm:text-[16px] text-[14px] text-[#123E41] mb-1">Rating score:</p>
                <div className="flex items-center space-x-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            onClick={() => setRating(star)}
                            className={`text-xl cursor-pointer ${rating >= star ? "text-yellow-500" : "text-gray-300"
                                }`}
                        >
                            ★
                        </span>
                    ))}
                </div>
                {/* Reusable Radio Section */}
                {[
                    "Wheelchair accessible?",
                    "Kids friendly?",
                    "Kids service?",
                    "Free parking for client?",
                    "Custom style",
                ].map((label, idx) => (
                    <div key={idx}>
                        <p className="font-[600] font-inter sm:text-[16px] text-[14px] text-[#123E41] mb-1">{label}</p>
                        <div className="flex space-x-4 mb-2">
                            {["Yes", "No"].map((opt) => (
                                <label
                                    key={`${label}-${opt}`}
                                    className="flex flex-col items-center font-[500] font-inter sm:text-[16px] text-[14px] text-[#2F2F2F]"
                                >
                                    <input
                                        type="radio"
                                        name={label}
                                        value={opt}
                                        checked={extraFilters[label] === opt}
                                        onChange={() =>
                                            setExtraFilters((prev) => ({ ...prev, [label]: opt }))
                                        }
                                        className="mr-1 accent-teal-800"
                                    />
                                    {opt}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                <p className="font-[600] font-inter sm:text-[16px] text-[14px] text-[#123E41] mb-1">Extra service</p>
                <div className="flex flex-col gap-2 mb-2">
                    {renderCheckbox('Blow Dry', 'undoHair')}
                    {renderCheckbox('Wash hair', 'washHair')}
                    {renderCheckbox('Undo Hair', 'blowDryHair')}
                </div>



                <button
                    onClick={clearFilters}
                    className="w-full bg-charocal rounded-[8px] text-[#FAF9F6] text-[14px] py-1.5 px-2.5 hover:bg-gray-700"
                >
                    Clear
                </button>
            </div>
        </div>
    );
}

export function Filterby() {
    const [sortOption, setSortOption] = useState("Best Match");

    const [services, setServices] = useState({
        undoHair: false,
        washHair: false,
        blowDryHair: false,
    });


    const applyFilters = () => {
        console.log("Selected sort:", sortOption);
        console.log("Services:", services);
    };


    return (
        <div className="relative w-50 bg-[#FAF9F6] rounded-[10px] shadow-lg p-2 z-50">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#FAF9F6] rotate-45 border-l border-t border-gray-300 z-0"></div>
            <div className="relative z-10">
                <p className="font-[700] font-inter text-[18px] text-[#123E41] mb-4">Sort Result By</p>
                <div className="flex flex-col gap-3 mb-5">
                    {[
                        "Best Match",
                        "Highest Rated",
                        "Distance",
                        "Price: Low to High",
                        "Price: High to Low",
                    ].map((label) => (
                        <label key={label} className="flex items-center gap-2 font-[600] text-[16px] text-[#2F2F2F]">
                            <input
                                type="radio"
                                name="sort"
                                value={label}
                                checked={sortOption === label}
                                onChange={() => setSortOption(label)}
                                className="accent-[#123E41] w-5 h-5"
                            />
                            {label}
                        </label>
                    ))}
                </div>
                <button
                    onClick={applyFilters}
                    className="w-full bg-[#2F2F2F] rounded-[8px] text-[#FAF9F6] text-[15px] py-2 px-3 hover:bg-[#1F1F1F]"
                >
                    Apply
                </button>
            </div>
        </div>
    );
}


export function SalonsList() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isModalOpen1, setModalOpen1] = useState(false);
    const [isModalOpen2, setModalOpen2] = useState(false);
    const [isModalOpen3, setModalOpen3] = useState(false);
    const [isModalOpen4, setModalOpen4] = useState(false);

    const salons = [
        { name: "Salon A", image: img },
        { name: "Salon B", image: img1 },
        { name: "Salon C", image: img2 },
    ];


    const handleopensecondmodal = () => {
        setModalOpen(false)
        setModalOpen1(true)
    }
    const handleopenthirdmodal = () => {
        setModalOpen1(false)
        setModalOpen2(true)
    }
    const handleopenforthmodal = () => {
        setModalOpen2(false)
        setModalOpen3(true)
    }
    const handleopenfivthmodal = () => {
        setModalOpen3(false)
        setModalOpen4(true)
    }

    return (
        <>
            <AddSolonProfileImageModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                handleopensecondmodal={handleopensecondmodal}
            />
            <AddSolonePlaceModal
                isOpen={isModalOpen1}
                onClose={() => setModalOpen1(false)}
                handleopenthirdmodal={handleopenthirdmodal}
            />
            <AddSoloneAmenitiesModal
                isOpen={isModalOpen2}
                onClose={() => setModalOpen2(false)}
                handleopenforthmodal={handleopenforthmodal}
            />
            <AddSoloneYourCategoriesModal
                isOpen={isModalOpen3}
                onClose={() => setModalOpen3(false)}
                handleopenfivthmodal={handleopenfivthmodal}
            />
            <AddSoloneSuccessfullyModal
                isOpen={isModalOpen4}
                onClose={() => setModalOpen4(false)}
            />
            <div className="relative w-48 bg-white rounded-xl shadow-lg p-2 z-50">
                {/* Arrow */}
                <div className="absolute top-0 right-2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-300"></div>

                <div className="space-y-2 pt-2">
                    {salons.map((salon, idx) => (
                        <div
                            key={idx}
                            className="flex items-center space-x-2 border border-[#FF827F] shadow-[0px_4px_4px_0px_#FF827F40] rounded-[6px] p-2 cursor-pointer hover:bg-red-200 transition"
                        >
                            <img
                                src={salon.image}
                                alt={salon.name}
                                className="w-8 h-8 rounded-md object-cover"
                            />
                            <span className="sm:text-[18px] text-[15px] font-[600] text-charcoal font-rasa">{salon.name}</span>
                        </div>
                    ))}

                    <button className="w-full bg-[#FFE6D8] text-[#FF827F] font-sansation font-[700] text-sm py-2 rounded-[10px] shadow-sm hover:bg-red-200 transition"
                        onClick={() => setModalOpen(true)}
                    >
                        + Add a new salon
                    </button>
                </div>
            </div>
        </>
    );
}





export function OfferFilters({ showOfferFilter, setShowOfferFilter }) {
    const [activeFilter, setActiveFilter] = useState("Price");

    const [services, setServices] = useState({
        undoHair: false,
        washHair: false,
        blowDryHair: false,
    });

    const handleChange = (key) => {
        setServices((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };
    const filtersData = {
        Price: [
            "$20 and Below",
            "$20 to $100",
            "$100 to $200",
            "$200 to $400",
            "$500 and Above",
        ],
        Services: ["Hair Service", "Nail Services", "Skincare Services", "Lash & Brow Enhancements", "Makeup & Glam Services"],
        Gender: ["Male", "Female", "Other"],
        Type: ["Client", "Independent", "Business Owner", "Mobile Salon"],
        Amenities: ["Kids Service", "Kid Friendly", "Wheel Chair Accessible", "Free Parking"],
        "Day/Month": ["Last 7 days", "1 Week - 1 Month", "1 Month - 2 Month ", "2 Month - 4 Month"],
        Distance: ["0 mile - 10 miles", "10 miles - 20 miles", "20 miles - 30 miles"],
        "Rating Score": ["3+ Stars", "4+ Stars", "5 Stars Only "],
    };


    const renderCheckbox = (label, key) => (
        <label className="flex items-center space-x-2" key={key}>
            <input
                type="checkbox"
                className="peer hidden"
                checked={services[key]}
                onChange={() => handleChange(key)}
            />
            <div
                className={`w-[28px] h-[28px] rounded-sm flex items-center justify-center transition-colors duration-300
            ${services[key] ? 'bg-[#FF827F]' : 'bg-[#D9D9D9] border border-[#2F2F2F]'}`}
            >
                {services[key] && (
                    <svg
                        className="w-4 h-4 text-black"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </div>
            <span className="font-[500] font-rasa sm:text-[17px] text-[15px] text-charcoal">{label}</span>
        </label>
    );

    return (
        <>
            {/* Overlay */}
            {showOfferFilter && (
                <div
                    className="fixed inset-0 bg-black opacity-30 z-40"
                    onClick={() => setShowOfferFilter(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#FAF9F6] shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${showOfferFilter ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-[#2F2F2F]">
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setShowOfferFilter(false)}
                            className="text-[#2F2F2F]"
                        >
                            <IoClose className="w-5 h-5" />
                        </button>
                        <h2 className="sm:text-[20px] text-[15px] font-[500] text-charcoal font-rasa">Filters</h2>
                    </div>

                    <button
                        className="sm:text-[20px] text-[15px] font-[500] text-[#2F2F2F66] font-rasa"
                        onClick={() => console.log("Clear Filters")}
                    >
                        Clear Filters
                    </button>

                </div>

                {/* Body */}
                <div className="flex h-[calc(100vh-50px)] overflow-y-auto">
                    {/* Left filter categories */}
                    <div className="w-1/3 bg-[#D9D9D9] text-sm font-medium text-gray-700">
                        {Object.keys(filtersData).map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`block w-full text-left px-5 py-5 sm:text-[18px] text-[15px] font-[600] text-[#2F2F2F] font-rasa  ${activeFilter === category
                                    ? "bg-[#FAF9F6] "
                                    : "hover:bg-[#FAF9F6]"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Right options based on selected filter */}
                    <div className="w-2/3 px-5 py-6 space-y-4 relative">
                        {filtersData[activeFilter].map((option, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                                {renderCheckbox(option, option)}
                            </div>
                        ))}
                        <div className="p-5 absolute bottom-5 w-[80%]">
                            <button className="w-full bg-[#123E41] hover:bg-[#0c4142] sm:text-[20px] text-[15px] font-[700] text-[#FAF9F6] font-sansation py-2 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
                                onClick={() => setShowOfferFilter(false)}
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}

            </div>
        </>
    );
}



