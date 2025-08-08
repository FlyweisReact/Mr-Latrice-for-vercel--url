import MainLayout from '../../components/MainLayout';

import img from '../../assets/images/dashboard/img105.jpg'
import img1 from '../../assets/images/dashboard/img104.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


export default function Careers() {
 
    const slides = [
        {
            title: "Culture",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            img: img1, // update with actual image path
        },
        {
            title: "Teamwork",
            description:
                "Teamwork is at the heart of our success. We believe in collaboration and mutual respect, driving us to achieve excellence together.",
            img: img1,
        },
    ];

    return (
        <>
            <MainLayout>
                <div className="">
                    {/* Hero Section */}
                    <div className="relative h-[488px] careers-container" >
                        <div className="absolute inset-0 flex items-center justify-end">
                            <div className="px-10">
                                <h1 className="font-glamore font-[400] sm:text-[80px] text-[50px] text-white text-shadow-custom mb-8">LATRICA</h1>
                                <h1 className="font-glamore font-[400] sm:text-[80px] text-[50px] text-white text-shadow-custom mb-8">CEREEAR</h1>
                                <h1 className="font-glamore font-[400] sm:text-[80px] text-[50px] text-white text-shadow-custom mb-8">Opportunities</h1>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-7xl mx-auto py-10 px-2 space-y-10">

                        <Carousel
                            showThumbs={false}
                            showStatus={false}
                            infiniteLoop
                            emulateTouch
                            autoPlay
                            dynamicHeight={true}
                            interval={5000}
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <button
                                        onClick={onClickHandler}
                                        title={label}
                                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white  shadow-[0px_0px_4px_0px_#00000040] px-4.5 py-4.5 rounded-[20px] z-20 hover:bg-gray-100"
                                    >
                                        <FaArrowLeft className="text-[#00000080]" />
                                    </button>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <button
                                        onClick={onClickHandler}
                                        title={label}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-[0px_0px_4px_0px_#00000040] px-4.5 py-4.5 rounded-[20px] z-20 hover:bg-gray-100"
                                    >
                                        <FaArrowRight className="text-gray-600" />
                                    </button>
                                )
                            }
                        >
                            {slides.map((slide, index) => (
                                <div key={index}>
                                    <div className="flex flex-col md:flex-row  gap-6 px-20 py-4">
                                        <div className="flex-1">
                                            <h6 className="font-rasa font-bold text-[20px] sm:text-[25px] text-[#1D1D1D] mb-2 text-start">
                                                {slide.title}
                                            </h6>
                                            <p className="font-rasa font-semibold text-[15px] sm:text-[18px] text-[#1D1D1D] leading-relaxed text-start">
                                                {slide.description}
                                            </p>
                                        </div>
                                        <div className="flex-1 flex justify-center">
                                            <img
                                                src={slide.img}
                                                alt={slide.title}
                                                className="rounded-tl-[100px] object-cover w-[300px] h-[300px] shadow-md border-2 border-[#C9A5FF]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>

                        <section className="bg-[#D0D8D9] py-10 px-4">
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-center font-rasa font-[700] sm:text-[40px] text-[30px] text-[#1D1D1D] mb-3">What we do</h2>
                                <p className="text-center font-rasa font-[600] sm:text-[18px] text-[15px] text-[#1D1D1D]  mb-15">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center gap-8">
                                    {/* Left Profile List */}
                                    <div className="relative w-full sm:w-[30%] space-y-6">
                                        {/* Selected Card */}
                                        <div className="bg-white shadow-[0px_4px_19.1px_0px_#00000040] p-4 rounded-xl flex items-center gap-4 relative z-10">
                                            <img src="https://randomuser.me/api/portraits/men/1.jpg" className="w-12 h-12 rounded-full" />
                                            <div>
                                                <h4 className="font-semibold text-sm">Jordan Workman</h4>
                                                <p className="text-xs text-gray-500">Lorem Ipsum</p>
                                            </div>
                                        </div>

                                        {/* Other Profiles */}
                                        <div className="flex items-center gap-4 pl-4">
                                            <img src="https://randomuser.me/api/portraits/men/2.jpg" className="w-10 h-10 rounded-full" />
                                            <div>
                                                <h4 className="text-sm font-medium">Wilson Bergson</h4>
                                                <p className="text-xs text-gray-500">Lorem Ipsum</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 pl-4">
                                            <img src="https://randomuser.me/api/portraits/men/3.jpg" className="w-10 h-10 rounded-full" />
                                            <div>
                                                <h4 className="text-sm font-medium">Jaydon Torff</h4>
                                                <p className="text-xs text-gray-500">Lorem Ipsum</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Video */}
                                    <div className="w-full sm:w-[70%] relative">
                                        <div className="overflow-hidden rounded-xl transform rotate-[5deg]">
                                            <iframe
                                                className="w-full h-64 sm:h-96"
                                                src="https://www.youtube.com/embed/-FnrCZJw6TE?si=qCb1vtYbn_qc8E-v"
                                                title="YouTube video"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="py-10 bg-white">
                            <div className="">
                                {/* Header */}
                                <div className="mb-8">
                                    <h2 className="font-rasa font-[700] sm:text-[36px] text-[25px] text-[#000000]">Our Office</h2>
                                    <p className="font-rasa font-[400] sm:text-[17px] text-[15px] text-[#1A1A1A]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col sm:flex-row gap-6">
                                    {/* Left Image */}
                                    <div className="w-full sm:w-1/2">
                                        <img
                                            src={img}
                                            alt="Office"
                                            className="rounded-[10px] w-full object-cover h-[250px] sm:h-[330px] shadow-[0px_4px_4px_0px_#00000040]"
                                        />
                                    </div>

                                    {/* Right Text */}
                                    <div className="w-full sm:w-1/2">
                                        <h3 className="font-rasa font-[600] sm:text-[24px] text-[15px] text-[#1A1A1A] mb-8">Headline comes here...</h3>
                                        <p className="font-rasa font-[400] sm:text-[16px] text-[15px] text-[#000000] line-h leading-[32.3px]">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>


                    </div>
                </div>
            </MainLayout>
        </>
    );
}
