import { IoClose } from "react-icons/io5";
import { RiInformationFill } from "react-icons/ri";
import { useState } from "react";
import { SuccessModal } from "./SuccessModal";

import userIcon from "../../assets/images/dashboard/user.png";
import basketIcon from "../../assets/images/dashboard/basket.png";
import sparkIcon from "../../assets/images/dashboard/spark.png";

export function PostToBasketModal({ isOpen, onClose }) {
  const [selected, setSelected] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const options = [
    { label: "Independent", value: "independent", icon: userIcon },
    { label: "Salon", value: "salon", icon: basketIcon },
    { label: "Both", value: "both", icon: sparkIcon },
  ];

  return (
    <>
      {!showSuccess && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-md w-full sm:max-w-xl p-6 shadow-xl overflow-y-auto max-h-[90vh] h-full relative flex flex-col items-center">
            <IoClose
              className="cursor-pointer text-xl text-[#000000] absolute right-4 top-4 p-0.5 rounded-full border hover:bg-gray-200"
              onClick={onClose}
            />
            <h2 className="text-center text-[22px] font-[700] text-charcoal font-rasa mb-2">
              Post to Basket
            </h2>
            <div className="w-full mb-4 flex items-center gap-2">
              <span className="text-[#FF827F] font-[600] text-[15px]">
                Select Target
              </span>
              <RiInformationFill className="text-[#FF827F] text-lg" />
            </div>
            <div className="flex-1 w-full">
              <div className=" flex gap-4 w-full mb-8">
                {options.map((opt) => (
                  <button
                    key={opt.value}
                    className={`relative flex-1 flex flex-col items-center justify-center rounded-md p-6 transition-all min-h-[120px] min-w-[110px] shadow-sm border-2! ${
                      selected === opt.value
                        ? "border-[#FF827F]! bg-[#FAF9F6]"
                        : "border-[#E5E7EB]! bg-[#FAF9F6]"
                    }`}
                    style={{
                      boxShadow:
                        selected === opt.value
                          ? "0 2px 8px 0 rgba(255,130,127,0.10)"
                          : "0 2px 8px 0 rgba(0,0,0,0.04)",
                    }}
                    onClick={() => setSelected(opt.value)}
                  >
                    {/* Radio indicator for selected option */}
                    {selected === opt.value && (
                      <div className="absolute top-2 right-2 size-5 rounded-full border-2 border-[#FF827F]  flex justify-center items-center">
                        <div className="shrink-0 size-3 rounded-full bg-[#FF827F]"></div>
                      </div>
                    )}
                    <img
                      src={opt.icon}
                      alt={opt.label}
                      className={`w-10 h-10 mb-2 object-contain ${
                        selected === opt.value ? "filter-red" : ""
                      }`}
                      style={
                        selected === opt.value
                          ? {
                              filter:
                                "invert(54%) sepia(89%) saturate(749%) hue-rotate(324deg) brightness(102%) contrast(101%)",
                            }
                          : {}
                      }
                    />
                    <span
                      className={`font-[600] text-[16px] ${
                        selected === opt.value
                          ? "text-[#FF827F]"
                          : "text-charcoal"
                      }`}
                    >
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <button
              className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg py-3 rounded-[5px] shadow-md disabled:opacity-50"
              disabled={!selected}
              onClick={() => setShowSuccess(true)}
            >
              Post
            </button>
          </div>
        </div>
      )}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          onClose && onClose();
        }}
        message="Your offer, now successfully added to your basket"
      />
    </>
  );
}
