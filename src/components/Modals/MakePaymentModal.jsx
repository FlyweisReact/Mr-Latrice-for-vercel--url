import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineAccessAlarms } from "react-icons/md";

import img5 from "../../assets/images/dashboard/img13.png";
import img6 from "../../assets/images/dashboard/img14.png";
import img7 from "../../assets/images/dashboard/img15.png";
import img8 from "../../assets/images/dashboard/img16.png";
import img9 from "../../assets/images/dashboard/img17.png";
import img10 from "../../assets/images/dashboard/img18.png";
import img11 from "../../assets/images/dashboard/img19.png";
import img12 from "../../assets/images/dashboard/img20.png";
import img13 from "../../assets/images/dashboard/img21.png";

export const MakePaymentModal = ({
  isOpen,
  onClose,
  handleBack,
  onPay,
  showFamilyAndFriends = false,
}) => {
  const [selected, setSelected] = useState("Credit/Debit Cards");
  const [familyFriend, setFamilyFriend] = useState("");
  const [agree, setAgree] = useState(false);
  const paymentOptions = [
    "Credit/Debit Cards",
    "NFC",
    "PayPal",
    "Wallets",
    ...(showFamilyAndFriends ? ["Family & Friends"] : []),
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" style={{ zIndex: 1 }}></div>
      <div
        className="relative bg-white rounded-[10px] h-[90vh] w-full sm:max-w-2xl max-w-md p-3 shadow-xl"
        style={{ zIndex: 2 }}
      >
        {/* header  */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <IoArrowBack
              color="#2F2F2F"
              size={25}
              className="cursor-pointer"
              onClick={handleBack}
            />
            <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
              Make payment
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-rasa text-[#121111] font-[600] sm:text-[18px] text-[15px]">
              03:00
            </span>
            <MdOutlineAccessAlarms className="text-[#2F2F2F]" size={24} />
            <IoMdCloseCircleOutline
              className="cursor-pointer text-xl text-[#000000]"
              onClick={onClose}
            />
          </div>
        </div>
        {/* main */}
        <div className="mt-5">
          <div className="text-center mb-5">
            <h6 className="font-rasa font-[600] sm:text-[30px] text-[20px] text-charcoal">
              February, Wednesday 26 2025
            </h6>
            <p className="font-rasa font-[400] sm:text-[30px] text-[20px] text-charcoal m-0">
              10:30 AM - 12:00 PM (1hour 30min)
            </p>
            <span className="font-rasa font-[600] sm:text-[12px] text-[10px] text-[#757575] m-0">
              Omar Vaccaro Barber Shop
            </span>
            <div className="flex items-center justify-center">
              <span className="font-[500] text-[#121111]  sm:text-[18px] text-[15px]">
                Total:
              </span>
              <span className="font-[700] text-[#121111]  sm:text-[30px] text-[25px] m-0">
                $85.00
              </span>
            </div>
          </div>

          <div>
            <h6 className="font-rasa text-charcoal font-[600] sm:text-[30px] text-[25] text-center mb-2">
              Your Payment Options
            </h6>
            <div className="w-full max-w-2xl mx-auto">
              {/* Tabs */}
              <div className="flex items-center justify-between mb-3">
                {paymentOptions.map((option) => (
                  <div
                    key={option}
                    onClick={() => setSelected(option)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      className={`w-[28px] h-[28px] rounded-full
                                        ${
                                          selected === option
                                            ? "bg-[#34A853]"
                                            : "bg-[#D9D9D9]"
                                        }`}
                    ></div>
                    <p className="sm:text-[17px] text-[15px] text-[#121111] font-[500]">
                      {option}
                    </p>
                  </div>
                ))}
              </div>

              <div className=""></div>

              {/* Conditional Fields */}
              {selected === "Credit/Debit Cards" && (
                <div className="space-y-2">
                  <div>
                    <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                      Card Number
                    </label>
                    <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center">
                      <input
                        type="text"
                        placeholder="1234 1234 1234 1234"
                        className="outline-none border-none flex-1"
                      />
                      <div className="flex items-center space-x-2">
                        <img src={img5} alt="Visa" className="h-8" />
                        <img src={img6} alt="Discover" className="h-8" />
                        <img src={img7} alt="Amex" className="h-8" />
                        <img src={img8} alt="Mastercard" className="h-8" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 items-center gap-1">
                    <div>
                      <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                        Expiration Date
                      </label>
                      <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="outline-none border-none flex-1"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                        Security Code
                      </label>
                      <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center">
                        <input
                          type="text"
                          placeholder="CVC"
                          className="outline-none border-none flex-1"
                        />
                        <div className="">
                          <img src={img9} alt="Visa" className="h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                      Country
                    </label>
                    <select
                      name=""
                      id=""
                      className="w-full border border-[#2F2F2F] px-3 py-2 rounded outline-none"
                    >
                      <option value="">United States Of America</option>
                    </select>
                  </div>
                </div>
              )}

              {selected === "NFC" && (
                <div className="space-y-3">
                  <div>
                    <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                      Google Pay
                    </label>
                    <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center gap-1">
                      <div className="flex items-center space-x-2">
                        <img src={img10} alt="Visa" className="h-8" />
                      </div>
                      <input
                        type="text"
                        placeholder="Bank name*****123"
                        className="outline-none border-none flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold">Amazon Pay</label>
                    <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center gap-1">
                      <div className="flex items-center space-x-2">
                        <img src={img11} alt="Visa" className="h-8" />
                      </div>
                      <input
                        type="text"
                        placeholder="Bank name*****123"
                        className="outline-none border-none flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold">Apple Pay</label>
                    <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center gap-1">
                      <div className="flex items-center space-x-2">
                        <img src={img12} alt="Visa" className="h-8" />
                      </div>
                      <input
                        type="text"
                        placeholder="Bank name*****123"
                        className="outline-none border-none flex-1"
                      />
                    </div>
                  </div>
                </div>
              )}

              {selected === "PayPal" && (
                <div>
                  <label className="font-[700] font-sansation sm:text-[18px] text-[15px] text-charcoal mb-2">
                    PayPal
                  </label>
                  <div className="w-full border border-[#2F2F2F] px-3 py-2 rounded flex items-center gap-1">
                    <div className="flex items-center space-x-2">
                      <img src={img13} alt="Visa" className="h-8" />
                    </div>
                    <input
                      type="text"
                      placeholder="Bank name*****123"
                      className="outline-none border-none flex-1"
                    />
                  </div>
                </div>
              )}

              {selected === "Wallets" && (
                <div className="mt-2">
                  <h6 className="font-sansation font-[700] sm:text-[20px] text-[18px] text-charcoal mb-2">
                    Your wallet balance is $500.00
                  </h6>
                  <p className="font-sansation font-[400] sm:text-[12px] text-[10px] text-[#757575]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              )}

              {showFamilyAndFriends && selected === "Family & Friends" && (
                <div className="mt-2">
                  <h6 className="font-rasa text-charcoal font-[600] sm:text-[22px] text-[18px] mb-2">
                    Select family & friends from this list.
                  </h6>
                  <div className="mb-4">
                    <select
                      className="w-full border border-[#2F2F2F] px-3 py-3 rounded outline-none text-[#757575] text-[16px]"
                      value={familyFriend}
                      onChange={(e) => setFamilyFriend(e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option value="John Doe">John Doe</option>
                      <option value="Jane Smith">Jane Smith</option>
                      <option value="Alex Johnson">Alex Johnson</option>
                    </select>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-[#121111] text-[15px]">
                      you are agreeing to review the providers work xxxxxxx .
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="font-[700] text-[18px] mr-2 cursor-pointer select-none">
                      +
                    </span>
                    <span className="underline font-[700] text-[18px] cursor-pointer select-none">
                      Add Family & Friends
                    </span>
                  </div>
                  <div className="mt-8 flex justify-center">
                    <button
                      className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                      style={{ opacity: 1 }}
                      onClick={onPay}
                    >
                      Request
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {(!showFamilyAndFriends || selected !== "Family & Friends") && (
          <div className="mt-3 flex justify-center">
            <button
              className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-2 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
              onClick={onPay}
            >
              Pay
            </button>
          </div>
        )}
        <p className="font-[400] text-[#757575]  sm:text-[13px] text-[10px] text-start">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};
