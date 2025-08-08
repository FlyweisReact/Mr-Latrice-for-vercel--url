import { useState } from "react";
import MainLayout from "../../components/MainLayout";


const faqData = [
    {
        question: "Lorem Ipsum is simply dummy text?",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        question: "Lorem Ipsum is simply dummy text?",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        question: "Lorem Ipsum is simply dummy text?",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        question: "Lorem Ipsum is simply dummy text?",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        question: "Lorem Ipsum is simply dummy text?",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        question: "Lorem Ipsum is simply dummy text?",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        question: "Lorem Ipsum is simply dummy text?",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-gray-300 py-6">
        <div
            className="flex justify-between items-center cursor-pointer"
            onClick={onClick}
        >
            <h3 className="font-[700] sm:text-[18px] text-[15px] text-[#123E41] font-Poppins">{question}</h3>
            <span className="text-xl text-[#123E41]">{isOpen ? "−" : "+"}</span>
        </div>
        {isOpen && (
            <p className="mt-2 font-[400] sm:text-[15px] text-[12px] text-charcoal font-Poppins leading-relaxed">{answer}</p>
        )}
    </div>
);

const AccordionColumn = ({ startIndex }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full md:w-1/2 px-8">
            {faqData.map((item, idx) => (
                <AccordionItem
                    key={idx + startIndex}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === idx}
                    onClick={() => handleToggle(idx)}
                />
            ))}
        </div>
    );
};


export default function FAQss() {


    return (
        <>
            <MainLayout>
                <div className="">
                    {/* Hero Section */}
                    <div className="relative h-[414px] faqs-container" >
                        <div className="absolute inset-0 flex items-center justify-start">
                            <div className="px-10">
                                <h1 className="font-rasa font-[700] sm:text-[64px] text-[50px] text-white text-shadow-custom mb-8">FAQs</h1>
                                <p className="font-sansation font-[700] sm:text-[20px] text-[15px] text-white text-shadow-custom mb-2">Find quick answers to common questions about Latrice’s services,<br /> bookings, and more in our FAQs.</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-7xl mx-auto py-10 px-2 space-y-10">
                        <div className="w-full flex flex-col md:flex-row">
                            <AccordionColumn startIndex={0} />
                            <AccordionColumn startIndex={faqData.length} />
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
