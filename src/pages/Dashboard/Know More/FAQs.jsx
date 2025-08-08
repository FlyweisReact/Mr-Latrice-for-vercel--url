import React, { useState } from "react";
import {
  AiFillTool,
  AiFillDollarCircle,
  AiFillCalendar,
  AiFillFileText,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import ClientDashboardLayout from "../../../components/DashbaordLayout/Client Dashbaord";

// Example FAQ data grouped by category
const faqCategories = [
  {
    icon: <AiFillTool className="text-2xl mr-2 text-[#123E41]" />,
    title: "Using the Platform",
    key: "platform",
    faqs: [
      {
        question: "How do I create an account?",
        answer:
          "To create an account, click on the 'Sign Up' button and fill in your details.",
      },
      {
        question: "How do I reset my password?",
        answer:
          "Click on Forgot Password on the login page and follow the instructions.",
      },
      {
        question: "Can I use the platform on mobile?",
        answer:
          "Yes, our platform is mobile-friendly and works on all devices.",
      },
    ],
  },
  {
    icon: <AiFillDollarCircle className="text-2xl mr-2 text-[#123E41]" />,
    title: "Payment & Earnings",
    key: "payment",
    faqs: [
      {
        question: "How do I get paid?",
        answer:
          "Payments are processed weekly to your registered bank account.",
      },
      {
        question: "Are there any fees?",
        answer: "A small service fee is deducted from each transaction.",
      },
      {
        question: "How do I view my payment history?",
        answer: "Go to your dashboard and click on Payment History.",
      },
    ],
  },
  {
    icon: <AiFillCalendar className="text-2xl mr-2 text-[#123E41]" />,
    title: "Booking & Cancellations",
    key: "booking",
    faqs: [
      {
        question: "How do I book a service?",
        answer:
          "Browse services and click Book Now to schedule an appointment.",
      },
      {
        question: "What is the cancellation policy?",
        answer:
          "You can cancel up to 24 hours before your appointment for a full refund.",
      },
      {
        question: "How do I reschedule?",
        answer:
          "Go to your bookings and select Reschedule next to the appointment.",
      },
    ],
  },
  {
    icon: <AiFillFileText className="text-2xl mr-2 text-[#123E41]" />,
    title: "Policies & Terms",
    key: "policies",
    faqs: [
      {
        question: "Where can I find the privacy policy?",
        answer: "Our privacy policy is available at the bottom of every page.",
      },
      {
        question: "What are the terms of service?",
        answer: "You can read our terms of service on the Terms page.",
      },
      {
        question: "How is my data protected?",
        answer: "We use industry-standard security to protect your data.",
      },
    ],
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-4">
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={onClick}
    >
      <h3 className="font-semibold text-[16px] sm:text-[18px] text-[#123E41] font-Poppins">
        {question}
      </h3>
      <span className="text-2xl text-[#123E41]">{isOpen ? "−" : "+"}</span>
    </div>
    {isOpen && (
      <p className="mt-2 text-[14px] sm:text-[15px] text-charcoal font-Poppins leading-relaxed">
        {answer}
      </p>
    )}
  </div>
);

const AccordionCategory = ({ icon, title, faqs, searchTerm }) => {
  const [openIndex, setOpenIndex] = useState(null);

  // Filter by search term
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (filteredFaqs.length === 0) return null;

  return (
    <div className="w-full px-2 mb-8">
      <div className="flex items-center mb-2">
        {icon}
        <h2 className="font-bold text-[20px] sm:text-[22px] text-[#222] font-Poppins">
          {title}
        </h2>
      </div>
      <div className=" divide-y divide-gray-200">
        {filteredFaqs.map((faq, idx) => (
          <AccordionItem
            key={idx}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === idx}
            onClick={() => handleToggle(idx)}
          />
        ))}
      </div>
    </div>
  );
};

const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, _setFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("all"); // 'all' or 'client'

  // For navigation tabs
  const routeMapping = {
    "About Us": "/dashboard/know-more/about-us",
    "Privacy Policy": "/dashboard/know-more/privacy-policy",
    "Terms Of Service": "/dashboard/know-more/terms-of-service",
    "Contact Us": "/dashboard/know-more/contact-us",
    Cookies: "/dashboard/know-more/cookies",
    FAQs: "/dashboard/know-more/faqs",
  };

  // Filter categories if filter is set
  const displayedCategories =
    filter === "all"
      ? faqCategories
      : faqCategories.filter((cat) => cat.key === filter);

  return (
    <ClientDashboardLayout title="FAQs">
      <div className="w-full mt-4">
        {/* Tabs */}
        <div className="flex flex-wrap w-full bg-[#D9D9D9] rounded-[80px] overflow-hidden mb-6 p-1 justify-center sm:justify-between gap-2 sm:gap-0 sm:h-[60px]">
          {Object.keys(routeMapping).map((item, index) => (
            <Link key={index} to={routeMapping[item]}>
              <button
                className={`py-1 px-5 sm:px-7 text-[16px] sm:text-[20px] lg:text-[30px] font-medium font-rasa rounded-[80px] transition-all duration-200 ${
                  item === "FAQs"
                    ? "bg-white text-charcoal"
                    : "text-[#2F2F2F80]"
                }`}
              >
                {item}
              </button>
            </Link>
          ))}
        </div>

        {/* Toolbar: Search | Switcher | Sort by topic */}
        <div className="w-full grid grid-cols-4 gap-4 mb-8">
          {/* Search bar left */}
          <div className="col-span-2 flex justify-start w-full md:w-auto mb-2 md:mb-0">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for all the question by topics"
                className="border bg-white border-gray-300 rounded-[8px] pl-12 pr-4 py-2 w-full text-[16px] focus:outline-none shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#123E41]">
                <AiOutlineSearch className="w-5 h-5" />
              </span>
            </div>
          </div>

          <div className="flex justify-center bg-white w-full rounded-[8px] border border-[#E5E5E5] h-[44px] items-center relative">
            <button
              className={`flex-1 h-full px-6 py-1 font-medium text-[16px] transition-all duration-200 relative ${
                activeTab === "all"
                  ? "text-[#222] font-semibold"
                  : "text-[#888]"
              } `}
              onClick={() => setActiveTab("all")}
            >
              All
              {activeTab === "all" && (
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#F9B233] rounded-t-[2px]"></span>
              )}
            </button>
            <button
              className={`flex-1 h-full px-6 py-1 font-medium text-[16px] transition-all duration-200 relative ${
                activeTab === "client"
                  ? "text-[#222] font-semibold"
                  : "text-[#888]"
              } `}
              onClick={() => setActiveTab("client")}
            >
              Clients
              {activeTab === "client" && (
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#F9B233] rounded-t-[2px]"></span>
              )}
            </button>
          </div>

          <div className="flex justify-end w-full">
            <select
              className="border border-gray-300 rounded-[8px] px-4 py-2 text-[16px] focus:outline-none w-full appearance-none bg-white text-[#222]"
              disabled
              value="sort"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 8l4 4 4-4' stroke='%23222' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
              }}
            >
              <option value="sort">Sort by topic</option>
            </select>
          </div>
        </div>

        {/* FAQ Content - Grid 2 Columns */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedCategories.map((cat) => (
            <AccordionCategory key={cat.key} {...cat} searchTerm={searchTerm} />
          ))}
        </div>
      </div>
    </ClientDashboardLayout>
  );
};

export default FAQs;
