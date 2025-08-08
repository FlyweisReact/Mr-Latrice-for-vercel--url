import { useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPaperclip, FaRegSmile, FaPaperPlane } from "react-icons/fa";

import img from "../../../assets/images/dashboard/img7.jpg";
import img1 from "../../../assets/images/dashboard/img6.png";

import {
  ChatOfferAcceptSuccessModal,
  ChatCounterPriceOfferModal,
  ChatCounterTimeOfferModal,
  ChatCounterOfferSuccessModal,
  ChatRejectOfferSuccessModal,
} from "../../../components/Modals/Modal";

const ChatBox = ({ user, messages, setMessages }) => {
  const [newMessage, setNewMessage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [isModalOpen3, setModalOpen3] = useState(false);
  const [isModalOpen4, setModalOpen4] = useState(false);
  const [showedit, setShowEdit] = useState(false);
  const [showsend, setShowSend] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: "right",
        avatar: user.avatar,
        text: newMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        date: new Date().toLocaleDateString(),
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  const isLatrice = user.id === 1; // Assuming user.id 1 is Latrice

  const handleShowSend = () => {
    setModalOpen1(false);
    setModalOpen2(false);
    setShowSend(true);
  };

  return (
    <>
      <ChatOfferAcceptSuccessModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
      <ChatCounterPriceOfferModal
        isOpen={isModalOpen1}
        onClose={() => setModalOpen1(false)}
        handleShowSend={handleShowSend}
      />
      <ChatCounterTimeOfferModal
        isOpen={isModalOpen2}
        onClose={() => setModalOpen2(false)}
        handleShowSend={handleShowSend}
      />
      <ChatCounterOfferSuccessModal
        isOpen={isModalOpen3}
        onClose={() => setModalOpen3(false)}
      />
      <ChatRejectOfferSuccessModal
        isOpen={isModalOpen4}
        onClose={() => setModalOpen4(false)}
      />
      <div className="flex flex-col h-full bg-white">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b-2 border-[#123E41]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: user.initialsBg }}
                >
                  <span className="text-white font-medium text-lg">
                    {user.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h3 className="font-medium text-gray-700">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.role}</p>
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <BsThreeDotsVertical size={20} />
          </button>
        </div>

        {/* 👉 Custom Offer Box for Latrice */}
        {isLatrice ? (
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-[#989BA1]"></div>
              <span className="px-3 font-[400] font-rasa sm:text-[15px] text-[15px] text-[#989BA1]">
                August 21
              </span>
              <div className="flex-1 border-t border-[#989BA1]"></div>
            </div>
            <div className="flex justify-end gap-1">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: "#FF827F" }}
                >
                  <span className="text-[#123E41] font-medium text-sm">
                    {user.name}
                  </span>
                </div>
              </div>
              <div>
                <div className="border border-[#123E41] rounded-[5px] p-4 bg-white shadow-md max-w-lg">
                  <p className="font-[700] font-sansation sm:text-[15px] text-[12px] text-[#2F2F2F] mb-2">
                    Similar to: <span className="font-[400]">Hair Cut</span>
                  </p>
                  <p className="font-[700] font-sansation sm:text-[15px] text-[12px] text-[#2F2F2F] mb-2">
                    Size: <span className="font-[400]">Medium</span>
                  </p>
                  <h6 className="font-[700] font-sansation sm:text-[15px] text-[12px] text-[#2F2F2F] mb-3 leading-[20px]">
                    Service Details:
                  </h6>
                  <div className="border border-[#2F2F2F] px-5 py-2 font-[400] font-sansation sm:text-[15px] text-[12px] text-[#2F2F2F] my-2 rounded-[7px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                  <div className="w-full border border-[#2F2F2F] rounded-[5px] h-[100px] flex items-center justify-center mb-2">
                    <img
                      src={img}
                      alt=""
                      className="h-full w-auto object-contain"
                    />
                  </div>

                  <p className="font-[700] font-sansation sm:text-[15px] text-[12px] text-[#2F2F2F] mb-2">
                    Additional Service:{" "}
                    <span className="font-[400]">Wash hair</span>
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-[700] font-sansation sm:text-[15px] text-[12px] text-[#2F2F2F] mb-2">
                      Date & Time:{" "}
                      <span className="font-[400]">
                        26 Feb 2025 at Afternoon 01:00 PM
                      </span>
                    </p>
                    {showedit && (
                      <img
                        src={img1}
                        alt=""
                        className="cursor-pointer w-7 h-7"
                        onClick={() => setModalOpen2(true)}
                      />
                    )}
                  </div>
                  <p className="font-[700] font-sansation sm:text-[15px] text-[12px] text-[#2F2F2F] mb-2">
                    Do you want me to drive to your palce?:{" "}
                    <span className="font-[400]">No</span>
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-[700] font-sansation sm:text-[15px] text-[12px] text-[#2F2F2F] mb-2">
                      Offered Price: <span className="font-[400]">$200</span>
                    </p>
                    {showedit && (
                      <img
                        src={img1}
                        alt=""
                        className="cursor-pointer w-7 h-7"
                        onClick={() => setModalOpen1(true)}
                      />
                    )}
                  </div>
                  <p className="font-[700] font-sansation sm:text-[15px] text-[12px] text-[#2F2F2F] mb-2">
                    Taxes: <span className="font-[400]">$13</span>
                  </p>
                  <p className="font-[700] font-sansation sm:text-[15px] text-[12px] text-[#2F2F2F] mb-2">
                    Fees: <span className="font-[400]">$2.4</span>
                  </p>

                  <p className="font-[700] font-sansation sm:text-[20px] text-[15px] leading-[20px] text-[#2F2F2F] mb-2">
                    Total: $215.4
                  </p>
                  <p className="font-[700] font-sansation sm:text-[15px] text-[12px] underline text-[#2F2F2F] mb-2 mt-1">
                    You have 2 hour to accept, reject or counter this offer
                  </p>
                </div>
                <span
                  className={`text-xs text-[#989BA1] mt-1 text-right"
              }`}
                >
                  10:15 pm
                </span>
                <div className="flex justify-center gap-3 mt-2">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="bg-[#123E41] w-full font-[700] font-sansation sm:text-[16px] text-[15px] text-[#FAF9F6] py-3 px-4 rounded-[5px]"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => setModalOpen4(true)}
                    className="bg-[#FF827F] w-full  font-[700] font-sansation sm:text-[16px] text-[15px] text-[#2F2F2F] py-3 px-4 rounded-[5px]"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => {
                      !showsend ? setShowEdit(!showedit) : setModalOpen3(true);
                    }}
                    className="bg-[#FFCC4E] w-full font-[700] font-sansation sm:text-[16px] text-[15px] text-[#2F2F2F] py-3 px-4 rounded-[5px]"
                  >
                    {showsend ? "send" : "Counteroffer"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              <div className="flex items-center my-4">
                <div className="flex-1 border-t border-[#989BA1]"></div>
                <span className="px-3 font-[400] font-rasa sm:text-[15px] text-[15px] text-[#989BA1]">
                  August 21
                </span>
                <div className="flex-1 border-t border-[#989BA1]"></div>
              </div>

              <div className="space-y-5">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "right" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.sender === "left" && (
                      <img
                        src={msg.avatar}
                        className="w-9 h-9 rounded-full mr-3 object-cover"
                        alt="avatar"
                      />
                    )}
                    <div className="flex flex-col max-w-[85%]">
                      <div
                        className={`rounded-lg p-3 text-[14px] font-[400] font-rasa ${
                          msg.sender === "right"
                            ? "bg-[#123E4133] text-[#555758]"
                            : "bg-white border border-[#123E41] text-[#555758]"
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span
                        className={`text-xs text-[#989BA1] mt-1 ${
                          msg.sender === "right" ? "text-right" : "text-left"
                        }`}
                      >
                        {msg.time}
                      </span>
                    </div>
                    {msg.sender === "right" && (
                      <img
                        src={msg.avatar}
                        className="w-9 h-9 rounded-full ml-3 object-cover"
                        alt="avatar"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white">
              <div className="flex items-center rounded-[3px] border border-[#DDDDDD] p-[10px] bg-gray-50">
                <input
                  type="text"
                  placeholder="Write a message..."
                  className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <div className="flex items-center gap-2 ml-2">
                  <button className="text-gray-500 hover:text-gray-700">
                    <FaPaperclip size={18} />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <FaRegSmile size={18} />
                  </button>
                  <button
                    className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
                    onClick={handleSendMessage}
                  >
                    <FaPaperPlane size={16} />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ChatBox;
