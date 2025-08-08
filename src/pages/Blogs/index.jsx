import { useNavigate } from "react-router-dom";


import img from '../../assets/images/dashboard/img98.png'
import img1 from '../../assets/images/dashboard/img33.png'
import img2 from '../../assets/images/dashboard/img99.jpg'
import img3 from '../../assets/images/dashboard/img23.jpg'
import img4 from '../../assets/images/dashboard/img100.jpg'
import img5 from '../../assets/images/dashboard/img101.jpg'
import MainLayout from "../../components/MainLayout";



export default function Blogs() {
    const navigate = useNavigate();

    return (
        <>
            <MainLayout >
                <div className="">
                    {/* Hero Section */}
                    <div className="relative h-[802px] blogs-container" >
                        <div className="absolute inset-0 flex items-center justify-center top-50">
                            <div className="px-10 bg-[#FFFFFF1A] blogs-container1 flex flex-wrap gap-2">
                                <h1 className="font-rasa font-[500] sm:text-[35px] text-[25px] text-white px-2 py-2">Hair Services</h1>
                                <h1 className="font-rasa font-[500] sm:text-[35px] text-[25px] text-white px-2 py-2">Nail Services</h1>
                                <h1 className="font-rasa font-[500] sm:text-[35px] text-[25px] text-white px-2 py-2">Skincare Services</h1>
                                <h1 className="font-rasa font-[500] sm:text-[35px] text-[25px] text-white px-2 py-2">Men’s Grooming Services</h1>
                                <h1 className="font-rasa font-[500] sm:text-[35px] text-[25px] text-white px-2 py-2">Lash & Brow Enhancements</h1>
                                <h1 className="font-rasa font-[500] sm:text-[35px] text-[25px] text-white px-2 py-2">Makeup & Glam Services</h1>
                                <h1 className="font-rasa font-[500] sm:text-[35px] text-[25px] text-white px-2 py-2">Spa Therapy & Relaxation</h1>
                                <h1 className="font-rasa font-[500] sm:text-[35px] text-[25px] text-white px-2 py-2">Bridal & Event Packages</h1>
                                <h1 className="font-rasa font-[500] sm:text-[35px] text-[25px] text-white px-2 py-2">Mobile Beauty Services</h1>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-7xl mx-auto py-10 px-2 space-y-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
                            <div className="cursor-pointer max-w-xl rounded-[25px] overflow-hidden border border-[#2F2F2F] shadow-[0px_6px_14px_0px_#00000040] bg-[#123E41] relative p-3" onClick={() => navigate('/services-details')}>
                                <div className="relative">
                                    <img
                                        src={img}
                                        alt="Shop"
                                        className="w-full h-80 rounded-[10px] object-cover"
                                    />
                                </div>

                                {/* Info Section */}
                                <div className="py-2 px-2">
                                    <div>
                                        <p className="text-[#FAF9F6] font-rasa sm:text-[30px] text-[25px] font-[500]">Headline comes here</p>
                                        <p className="text-[#FAF9F6] font-rasa sm:text-[20px] text-[15px] font-[500] mt-1.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                    </div>
                                    <div className="mt-5 flex justify-center">
                                        <button className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                                        >
                                            Read
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="cursor-pointer max-w-xl rounded-[25px] overflow-hidden border border-[#2F2F2F] shadow-[0px_6px_14px_0px_#00000040] bg-[#123E41] relative p-3" onClick={() => navigate('/services-details')}>
                                <div className="relative">
                                    <img
                                        src={img1}
                                        alt="Shop"
                                        className="w-full h-80 rounded-[10px] object-cover"
                                    />
                                </div>

                                {/* Info Section */}
                                <div className="py-2 px-2">
                                    <div>
                                        <p className="text-[#FAF9F6] font-rasa sm:text-[30px] text-[25px] font-[500]">Headline comes here</p>
                                        <p className="text-[#FAF9F6] font-rasa sm:text-[20px] text-[15px] font-[500] mt-1.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                    </div>
                                    <div className="mt-5 flex justify-center">
                                        <button className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                                        >
                                            Read
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="cursor-pointer max-w-xl rounded-[25px] overflow-hidden border border-[#2F2F2F] shadow-[0px_6px_14px_0px_#00000040] bg-[#123E41] relative p-3" onClick={() => navigate('/services-details')}>
                                <div className="relative">
                                    <img
                                        src={img2}
                                        alt="Shop"
                                        className="w-full h-80 rounded-[10px] object-cover"
                                    />
                                </div>

                                {/* Info Section */}
                                <div className="py-2 px-2">
                                    <div>
                                        <p className="text-[#FAF9F6] font-rasa sm:text-[30px] text-[25px] font-[500]">Headline comes here</p>
                                        <p className="text-[#FAF9F6] font-rasa sm:text-[20px] text-[15px] font-[500] mt-1.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                    </div>
                                    <div className="mt-5 flex justify-center">
                                        <button className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                                        >
                                            Read
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="cursor-pointer max-w-xl rounded-[25px] overflow-hidden border border-[#2F2F2F] shadow-[0px_6px_14px_0px_#00000040] bg-[#123E41] relative p-3" onClick={() => navigate('/services-details')}>
                                <div className="relative">
                                    <img
                                        src={img3}
                                        alt="Shop"
                                        className="w-full h-80 rounded-[10px] object-cover"
                                    />
                                </div>

                                {/* Info Section */}
                                <div className="py-2 px-2">
                                    <div>
                                        <p className="text-[#FAF9F6] font-rasa sm:text-[30px] text-[25px] font-[500]">Headline comes here</p>
                                        <p className="text-[#FAF9F6] font-rasa sm:text-[20px] text-[15px] font-[500] mt-1.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                    </div>
                                    <div className="mt-5 flex justify-center">
                                        <button className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                                        >
                                            Read
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="cursor-pointer max-w-xl rounded-[25px] overflow-hidden border border-[#2F2F2F] shadow-[0px_6px_14px_0px_#00000040] bg-[#123E41] relative p-3" onClick={() => navigate('/services-details')}>
                                <div className="relative">
                                    <img
                                        src={img4}
                                        alt="Shop"
                                        className="w-full h-80 rounded-[10px] object-cover"
                                    />
                                </div>

                                {/* Info Section */}
                                <div className="py-2 px-2">
                                    <div>
                                        <p className="text-[#FAF9F6] font-rasa sm:text-[30px] text-[25px] font-[500]">Headline comes here</p>
                                        <p className="text-[#FAF9F6] font-rasa sm:text-[20px] text-[15px] font-[500] mt-1.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                    </div>
                                    <div className="mt-5 flex justify-center">
                                        <button className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                                        >
                                            Read
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="cursor-pointer max-w-xl rounded-[25px] overflow-hidden border border-[#2F2F2F] shadow-[0px_6px_14px_0px_#00000040] bg-[#123E41] relative p-3" onClick={() => navigate('/services-details')}>
                                <div className="relative">
                                    <img
                                        src={img5}
                                        alt="Shop"
                                        className="w-full h-80 rounded-[10px] object-cover"
                                    />
                                </div>

                                {/* Info Section */}
                                <div className="py-2 px-2">
                                    <div>
                                        <p className="text-[#FAF9F6] font-rasa sm:text-[30px] text-[25px] font-[500]">Headline comes here</p>
                                        <p className="text-[#FAF9F6] font-rasa sm:text-[20px] text-[15px] font-[500] mt-1.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                    </div>
                                    <div className="mt-5 flex justify-center">
                                        <button className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                                        >
                                            Read
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
