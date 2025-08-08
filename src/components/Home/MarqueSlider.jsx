import Star from "../../assets/images/home/star.png";

export default function BeautySalonNavCSS() {
  return (
    <div className="w-full">
      {/* Yellow/gold service navigation bar with marquee effect */}
      <div className="w-full bg-[#FFCC4E] border-b-2 border-t-2 border-white py-3 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            <div className="flex items-center">
              <span className="text-black font-medium px-4 ml-4 font-gotu font-[400]">Hair Services</span>
              <img src={Star} alt="★" className="h-4 w-4 object-contain" />
            </div>
            
            <div className="flex items-center">
              <span className="text-black font-medium px-4 ml-4 font-gotu font-[400]">Nail Services</span>
              <img src={Star} alt="★" className="h-4 w-4 object-contain" />
            </div>
            
            <div className="flex items-center">
              <span className="text-black font-medium px-4 ml-4 font-gotu font-[400]">Skincare Services</span>
              <img src={Star} alt="★" className="h-4 w-4 object-contain" />
            </div>
            
            <div className="flex items-center">
              <span className="text-black font-medium px-4 ml-4 font-gotu font-[400]">Aesthetic & Cosmetic Treatments</span>
              <img src={Star} alt="★" className="h-4 w-4 object-contain" />
            </div>
            
            <div className="flex items-center">
              <span className="text-black font-medium px-4 ml-4 font-gotu font-[400]">Lash & Brow Enhancements</span>
              <img src={Star} alt="★" className="h-4 w-4 object-contain" />
            </div>
            
            <div className="flex items-center">
              <span className="text-black font-medium px-4 ml-4 font-gotu font-[400]">Makeup & Glam Services</span>
              <img src={Star} alt="★" className="h-4 w-4 object-contain" />
            </div>
            
            <div className="flex items-center">
              <span className="text-black font-medium px-4 ml-4 font-gotu font-[400]">Spa Therapy & Wellness</span>
              <img src={Star} alt="★" className="h-4 w-4 object-contain" />
            </div>
          </div>
          
          <div className="marquee-content">
            <div className="flex items-center">
              <span className="text-black font-medium px-4 ml-4 font-gotu font-[400]">Hair Services</span>
              <img src={Star} alt="★" className="h-4 w-4 object-contain" />
            </div>
            
            <div className="flex items-center">
              <span className="text-black font-medium px-4 ml-4 font-gotu font-[400]">Nail Services</span>
              <img src={Star} alt="★" className="h-4 w-4 object-contain" />
            </div>
            
            <div className="flex items-center">
              <span className="text-black font-medium px-4 ml-4 font-gotu font-[400]">Skincare Services</span>
              <img src={Star} alt="★" className="h-4 w-4 object-contain" />
            </div>
            
            <div className="flex items-center">
              <span className="text-black font-medium px-4 ml-4 font-gotu font-[400]">Aesthetic & Cosmetic Treatments</span>
              <img src={Star} alt="★" className="h-4 w-4 object-contain" />
            </div>
            
            <div className="flex items-center">
              <span className="text-black font-medium px-4 ml-4 font-gotu font-[400]">Lash & Brow Enhancements</span>
              <img src={Star} alt="★" className="h-4 w-4 object-contain" />
            </div>
            
            <div className="flex items-center">
              <span className="text-black font-medium px-4 ml-4 font-gotu font-[400]">Makeup & Glam Services</span>
              <img src={Star} alt="★" className="h-4 w-4 object-contain" />
            </div>
            
            <div className="flex items-center">
              <span className="text-black font-medium px-4 ml-4 font-gotu font-[400]">Spa Therapy & Wellness</span>
              <img src={Star} alt="★" className="h-4 w-4 object-contain" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          display: flex;
          width: 100%;
          overflow: hidden;
        }

        .marquee-content {
          display: flex;
          align-items: center;
          white-space: nowrap;
          animation: marquee 10s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
