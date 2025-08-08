import { MdInfoOutline } from "react-icons/md";
import { MdThumbUp } from "react-icons/md";
import { FaHeart } from 'react-icons/fa';
import { FaPersonRunning } from "react-icons/fa6";


import img from '../../../assets/images/dashboard/img22.jpg'
import img1 from '../../../assets/images/dashboard/img33.png'
import img2 from '../../../assets/images/dashboard/img34.jpg'
import { useNavigate } from "react-router-dom";



const FavouritesCard = () => {
    const navigate = useNavigate();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="cursor-pointer max-w-sm rounded-[25px] overflow-hidden border border-[#2F2F2F] shadow-[0px_6px_14px_0px_#00000040] bg-[#123E41] relative p-3" onClick={() => navigate('/services-details')}>
                <div className="relative">
                    <img
                        src={img}
                        alt="Shop"
                        className="w-full h-50 rounded-[10px] object-cover"
                    />
                    {/* Rating Bubble */}
                    <div className="backdrop-blur-lg absolute top-0 right-0 bg-[#1A1A1A33] px-4 py-1 rounded-tr-[10px] rounded-br-[50px] rounded-bl-[40px] rounded-tl-[40px] shadow-md">
                        <div className="flex flex-col items-center leading-tight">
                            <span className="text-[#FAF9F6] font-rasa sm:text-[20px] text-[15px] font-[500] m-0">4.9</span>
                            <span className="text-[#FAF9F6] font-rasa sm:text-[15px] text-[12px] font-[500] m-0">200 reviews</span>
                        </div>
                    </div>

                    <div className="backdrop-blur-lg absolute top-2 left-2 bg-[#1A1A1A33]  rounded-full flex items-center justify-center w-[40px] h-[40px] ">
                        <FaHeart className="text-[#FF0000]  hover:text-[#FF0000] transition-colors text-xl" />
                    </div>


                    {/* Promoted Tag */}
                    <div className="backdrop-blur-lg absolute bottom-2 left-1 bg-[#1A1A1A33] px-5 py-2 rounded-full flex items-center justify-center gap-1">
                        <FaPersonRunning color="#FAF9F6" size={15} />
                        <p className="text-[#FAF9F6] font-rasa sm:text-[14px] text-[12px] font-[500] m-0">10 km away</p>
                    </div>

                    <div className="absolute bottom-2 right-2 flex items-center gap-1">
                        <div className="backdrop-blur-lg bg-[#1A1A1A33]  rounded-full flex items-center justify-center w-[40px] h-[40px]">
                            <MdInfoOutline color="#FAF9F6" size={25} />
                        </div>
                        <div className="backdrop-blur-lg bg-[#1A1A1A33] px-5 py-2 rounded-full flex items-center justify-center gap-1">
                            <MdThumbUp color="#FAF9F6" size={15} />
                            <p className="text-[#FAF9F6] font-rasa sm:text-[14px] text-[12px] font-[500] m-0">Promoted</p>
                        </div>
                    </div>

                </div>

                {/* Info Section */}
                <div className="py-2 px-2">
                    <div>
                        <p className="text-[#FAF9F6] font-sansation sm:text-[16px] text-[14px] font-[800]">Omar Vaccaro</p>
                        <p className="text-[#FAF9F6] font-sansation sm:text-[14px] text-[12px] font-[600] mt-1.5">Larkfield Cte, Santa Rosa CA, 95403</p>
                    </div>
                </div>
            </div>
            <div className="cursor-pointer max-w-sm rounded-[25px] overflow-hidden border border-[#2F2F2F] shadow-[0px_6px_14px_0px_#00000040] bg-[#123E41] relative p-3" onClick={() => navigate('/services-details')}>
                <div className="relative">
                    <img
                        src={img1}
                        alt="Shop"
                        className="w-full h-50 rounded-[10px] object-cover"
                    />
                    {/* Rating Bubble */}
                    <div className="backdrop-blur-lg absolute top-0 right-0 bg-[#1A1A1A33] px-4 py-1 rounded-tr-[10px] rounded-br-[50px] rounded-bl-[40px] rounded-tl-[40px] shadow-md">
                        <div className="flex flex-col items-center leading-tight">
                            <span className="text-[#FAF9F6] font-rasa sm:text-[20px] text-[15px] font-[500] m-0">4.9</span>
                            <span className="text-[#FAF9F6] font-rasa sm:text-[15px] text-[12px] font-[500] m-0">200 reviews</span>
                        </div>
                    </div>

                    <div className="backdrop-blur-lg absolute top-2 left-2 bg-[#1A1A1A33]  rounded-full flex items-center justify-center w-[40px] h-[40px] ">
                        <FaHeart className="text-[#FF0000]  hover:text-[#FF0000] transition-colors text-xl" />
                    </div>


                    {/* Promoted Tag */}
                    <div className="backdrop-blur-lg absolute bottom-2 left-1 bg-[#1A1A1A33] px-5 py-2 rounded-full flex items-center justify-center gap-1">
                        <FaPersonRunning color="#FAF9F6" size={15} />
                        <p className="text-[#FAF9F6] font-rasa sm:text-[14px] text-[12px] font-[500] m-0">10 km away</p>
                    </div>

                    <div className="absolute bottom-2 right-2 flex items-center gap-1">
                        <div className="backdrop-blur-lg bg-[#1A1A1A33]  rounded-full flex items-center justify-center w-[40px] h-[40px]">
                            <MdInfoOutline color="#FAF9F6" size={25} />
                        </div>
                        <div className="backdrop-blur-lg bg-[#1A1A1A33] px-5 py-2 rounded-full flex items-center justify-center gap-1">
                            <MdThumbUp color="#FAF9F6" size={15} />
                            <p className="text-[#FAF9F6] font-rasa sm:text-[14px] text-[12px] font-[500] m-0">Promoted</p>
                        </div>
                    </div>

                </div>

                {/* Info Section */}
                <div className="py-2 px-2">
                    <div>
                        <p className="text-[#FAF9F6] font-sansation sm:text-[16px] text-[14px] font-[800]">James George</p>
                        <p className="text-[#FAF9F6] font-sansation sm:text-[14px] text-[12px] font-[600] mt-1.5">Larkfield Cte, Santa Rosa CA, 95403</p>
                    </div>
                </div>
            </div>
            <div className="cursor-pointer max-w-sm rounded-[25px] overflow-hidden border border-[#2F2F2F] shadow-[0px_6px_14px_0px_#00000040] bg-[#123E41] relative p-3" onClick={() => navigate('/services-details')}>
                <div className="relative">
                    <img
                        src={img2}
                        alt="Shop"
                        className="w-full h-50 rounded-[10px] object-cover"
                    />
                    {/* Rating Bubble */}
                    <div className="backdrop-blur-lg absolute top-0 right-0 bg-[#1A1A1A33] px-4 py-1 rounded-tr-[10px] rounded-br-[50px] rounded-bl-[40px] rounded-tl-[40px] shadow-md">
                        <div className="flex flex-col items-center leading-tight">
                            <span className="text-[#FAF9F6] font-rasa sm:text-[20px] text-[15px] font-[500] m-0">4.9</span>
                            <span className="text-[#FAF9F6] font-rasa sm:text-[15px] text-[12px] font-[500] m-0">200 reviews</span>
                        </div>
                    </div>

                    <div className="backdrop-blur-lg absolute top-2 left-2 bg-[#1A1A1A33]  rounded-full flex items-center justify-center w-[40px] h-[40px] ">
                        <FaHeart className="text-[#FF0000] transition-colors text-xl" />
                    </div>


                    {/* Promoted Tag */}
                    <div className="backdrop-blur-lg absolute bottom-2 left-1 bg-[#1A1A1A33] px-5 py-2 rounded-full flex items-center justify-center gap-1">
                        <FaPersonRunning color="#FAF9F6" size={15} />
                        <p className="text-[#FAF9F6] font-rasa sm:text-[14px] text-[12px] font-[500] m-0">10 km away</p>
                    </div>

                    <div className="absolute bottom-2 right-2 flex items-center gap-1">
                        <div className="backdrop-blur-lg bg-[#1A1A1A33]  rounded-full flex items-center justify-center w-[40px] h-[40px]">
                            <MdInfoOutline color="#FAF9F6" size={25} />
                        </div>
                        <div className="backdrop-blur-lg bg-[#1A1A1A33] px-5 py-2 rounded-full flex items-center justify-center gap-1">
                            <MdThumbUp color="#FAF9F6" size={15} />
                            <p className="text-[#FAF9F6] font-rasa sm:text-[14px] text-[12px] font-[500] m-0">Promoted</p>
                        </div>
                    </div>

                </div>

                {/* Info Section */}
                <div className="py-2 px-2">
                    <div>
                        <p className="text-[#FAF9F6] font-sansation sm:text-[16px] text-[14px] font-[800]">Roger Aminoff</p>
                        <p className="text-[#FAF9F6] font-sansation sm:text-[14px] text-[12px] font-[600] mt-1.5">Larkfield Cte, Santa Rosa CA, 95403</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavouritesCard;
