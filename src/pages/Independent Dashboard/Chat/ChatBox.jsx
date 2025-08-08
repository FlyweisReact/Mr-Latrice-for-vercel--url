import { useState } from 'react';


import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPaperclip, FaRegSmile, FaPaperPlane } from "react-icons/fa";


const ChatBox = ({ user, messages, setMessages }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: "right",
        avatar: user.avatar,
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: new Date().toLocaleDateString()
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b-2 border-[#123E41]">
        <div className="flex items-center gap-3">
          {/* Avatar */}
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

          {/* User Info */}
          <div>
            <h3 className="font-medium text-gray-700">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.role}</p>
          </div>
        </div>

        {/* Options Button */}
        <button className="text-gray-500 hover:text-gray-700">
          <BsThreeDotsVertical size={20} />
        </button>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {/* Date Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-[#989BA1]"></div>
          <span className="px-3 font-[400] font-rasa sm:text-[15px] text-[15px] text-[#989BA1]">August 21</span>
          <div className="flex-1 border-t border-[#989BA1]"></div>
        </div>

        {/* Messages List */}
        <div className="space-y-5">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "right" ? "justify-end" : "justify-start"}`}
            >
              {/* Left Avatar (only for received messages) */}
              {msg.sender === "left" && (
                <img
                  src={msg.avatar}
                  className="w-9 h-9 rounded-full mr-3 object-cover"
                  alt="avatar"
                />
              )}

              {/* Message Bubble */}
              <div className="flex flex-col max-w-[85%]">
                <div
                  className={`rounded-lg p-3 text-[14px] font-[400] font-rasa ${msg.sender === "right"
                      ? "bg-[#123E4133] text-[#555758]"
                      : "bg-white border border-[#123E41] text-[#555758]"
                    }`}
                >
                  {msg.text}
                </div>
                <span
                  className={`text-xs text-[#989BA1] mt-1 ${msg.sender === "right" ? "text-right" : "text-left"
                    }`}
                >
                  {msg.time}
                </span>
              </div>

              {/* Right Avatar (only for sent messages) */}
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

      {/* Message Input */}
      <div className="p-3 bg-white">
        <div className="flex items-center rounded-[3px] border border-[#DDDDDD] p-[10px] bg-gray-50">
          <input
            type="text"
            placeholder="Write a message..."
            className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
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
    </div>
  );
};

export default ChatBox;
