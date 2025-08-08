import { MdInfoOutline } from "react-icons/md";
import { MdThumbUp } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";


import img from '../../../assets/images/dashboard/img40.jpg'
import { useNavigate } from "react-router-dom";

const ShopCard = () => {
    const navigate = useNavigate();
    return (
        <div className="max-w-sm rounded-[25px] overflow-hidden border border-[#2F2F2F] shadow-[0px_6px_14px_0px_#00000040] bg-[#123E41] relative p-3">
            <div className="relative">
                <img
                    src={img}
                    alt="Shop"
                    className="w-full h-50 rounded-[10px] object-cover"
                />
                {/* Rating Bubble */}
                <div className="absolute top-0 right-0 bg-[#1A1A1A]/80 px-4 py-1 rounded-tr-[10px] rounded-br-[50px] rounded-bl-[40px] rounded-tl-[40px] shadow-md">
                    <div className="flex flex-col items-center leading-tight">
                        <span className="text-[#FAF9F6] font-rasa sm:text-[20px] text-[15px] font-[500] m-0">4.9</span>
                        <span className="text-[#FAF9F6] font-rasa sm:text-[15px] text-[12px] font-[500] m-0">200 reviews</span>
                    </div>
                </div>

                {/* Promoted Tag */}
                <div className="absolute bottom-2 right-2 flex items-center gap-1">
                    {/* <div className=" bg-[#1A1A1A]/60  rounded-full flex items-center justify-center w-[40px] h-[40px]">
                        <MdInfoOutline color="#FAF9F6" size={25} />
                    </div> */}
                    <div className="bg-[#1A1A1A]/60 px-5 py-2 rounded-full flex items-center justify-center gap-1">
                        <MdThumbUp color="#FAF9F6" size={15} />
                        <p className="text-[#FAF9F6] font-rasa sm:text-[14px] text-[12px] font-[500] m-0">Promoted</p>
                    </div>
                </div>

            </div>

            {/* Info Section */}
            <div className="py-2 px-2">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-[#FAF9F6] font-sansation sm:text-[16px] text-[14px] font-[800]">Shop No.1 Name</p>
                        <p className="text-[#FAF9F6] font-sansation sm:text-[14px] text-[12px] font-[600] mt-2">Opens: Monday - Friday (10:00 am - 8:30 pm)</p>
                    </div>
                    {/* Edit Icon */}
                    <BiSolidEditAlt color="#FAF9F6" size={25} className="cursor-pointer" onClick={() => navigate('/business-owner/dashboard/availability-management/shop-manage-time')} />
                </div>
            </div>
        </div>
    );
};

export default ShopCard;
