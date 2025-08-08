import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiSolidEditAlt } from "react-icons/bi";
import { IoCopy } from "react-icons/io5";

const GiftCard = ({
  index = 1,
  nameLabel = "Recipient’s Name",
  name = "",
  service = "N/A",
  validity = "90 days left",
  price = "$40.00",
  purchasedDate = "26/02/2025",
  purchasedTime = "10:00 am",
  couponCode = "",
  showCouponInLeft = false,
  gradient = "linear-gradient(133.17deg, #FF827F 11.59%, #123E41 41.23%, #464646 117.06%)",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(couponCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex gap-2">
      <div className="bg-charocal w-[60px] h-[60px] rounded-full flex items-center justify-center font-rasa font-[500] sm:text-[30px] text-[25px] text-[#FFFFFF]">
        {index}
      </div>
      <div className="relative flex flex-col md:flex-row rounded-tl-[20px] rounded-bl-[20px] shadow-md overflow-hidden w-full max-w-full">
        {/* Left side */}
        <div className="p-4 flex-1 bg-white pr-10">
          <div className="space-y-2 text-[15px] sm:text-[20px] text-[#000] font-rasa font-[500] leading-[18px] w-[280px]">
            <div className="flex items-center justify-between">
              <span>{nameLabel}:</span>
              <span>{name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Service:</span>
              <span>{service}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Validity:</span>
              <span>{validity}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Price:</span>
              <span>{price}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Purchased date:</span>
              <span>{purchasedDate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Purchased time:</span>
              <span>{purchasedTime}</span>
            </div>
            {showCouponInLeft && (
              <div className="border border-[#2F2F2F] rounded-[10px] p-[10px] text-[15px] sm:text-[20px] text-[#000000] font-rasa font-[500] leading-[18px] flex flex-col items-center cursor-pointer">
                <div className="flex  gap-2">
                  Coupon Code: {couponCode}
                  <IoCopy color="#123E41" onClick={handleCopy} />
                </div>
                {copied && (
                  <span className="ml-2 text-green-600 text-sm transition-opacity">
                    Copied!
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Top red dot */}
        <div className="absolute right-45 -top-2 z-10">
          <div className="w-5 h-5 bg-[#f5f5f5] rounded-full"></div>
        </div>
        {/* Bottom red dot */}
        <div className="absolute right-45 -bottom-2 z-10">
          <div className="w-5 h-5 bg-[#f5f5f5] rounded-full"></div>
        </div>

        {/* Right side */}
        <div
          className="relative text-white p-4 md:w-48 flex flex-col items-center justify-center text-center"
          style={{ background: gradient }}
        >
          <button className="absolute top-2 right-2 text-white hover:text-red-200 flex gap-2">
            <BiSolidEditAlt size={20} />
            <RiDeleteBin6Fill size={20} />
          </button>

          <div className="text-[#FFE6D8] rounded-full flex items-center justify-center sm:text-[35px] text-[20px] font-[600] font-rasa mb-2">
            Latrice
          </div>

          <div className="text-xs font-bold opacity-80">Coupon Code:</div>
          <div className="">
            <div className="font-mono font-bold text-lg flex items-center gap-1 cursor-pointer">
              {couponCode}
              <IoCopy onClick={handleCopy} />
            </div>
            {copied && (
              <span className="ml-2 text-green-600 text-sm transition-opacity">
                Copied!
              </span>
            )}
          </div>

          <div className="absolute -right-2 top-0 h-full w-4 flex flex-col justify-between items-center">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-[#f5f5f5] rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
