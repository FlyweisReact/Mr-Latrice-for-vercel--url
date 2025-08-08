import { IoClose } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { SuccessModal } from "./SuccessModal";

import thinkingImg from "../../assets/images/dashboard/thinking.png";
// Confirm modal for selecting provider
function SelectProviderConfirmModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div
        className="bg-white rounded-md w-full max-w-xl min-h-[80vh] min-w-[380px] p-8 shadow-2xl overflow-y-auto max-h-[95vh] relative flex flex-col items-center justify-center"
        style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)" }}
      >
        <IoClose
          className="cursor-pointer text-xl text-[#000000] absolute right-4 top-4 p-0.5 rounded-full border hover:bg-gray-200"
          onClick={onClose}
        />
        <div className="flex flex-col items-center w-full mt-4 mb-2">
          <img
            src={thinkingImg}
            alt="Provider"
            className="max-h-52 max-w-52 object-contain mb-6"
          />
          <div className="font-[700] text-[22px] text-center mt-2 mb-4 font-rasa text-charcoal">
            Are you sure you want to select this provider?
          </div>
          <div className="text-[16px] font-[400] text-center text-charcoal font-sansation mb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
        </div>
        <div className="flex w-full gap-6 mt-auto mb-2 justify-center">
          <button
            className="flex-1 bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-3 rounded-full shadow-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="flex-1 bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-3 rounded-full shadow-md"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export function AnotherMatchesModal({ isOpen, onClose, matches = [] }) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [successOpen, setSuccessOpen] = useState(false);

  if (!isOpen) return null;

  const handleSelectProvider = (match) => {
    setSelectedImage(match.image);
    setConfirmOpen(true);
  };

  const handleConfirm = () => {
    setConfirmOpen(false);
    setSuccessOpen(true);
    // Add your confirm logic here
  };

  // Only show one modal at a time
  if (confirmOpen) {
    return (
      <SelectProviderConfirmModal
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirm}
        image={selectedImage}
      />
    );
  }

  if (successOpen) {
    return (
      <SuccessModal
        isOpen={successOpen}
        onClose={() => {
          setSuccessOpen(false);
          if (onClose) onClose();
        }}
        message={"You have been successfully selected this new provider."}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-2xl p-6 shadow-xl overflow-y-auto max-h-[90vh] relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-center flex-1 text-[22px] font-[700] text-charcoal font-rasa">
            Another Matches
          </h2>
          <IoClose
            className="cursor-pointer text-3xl text-[#000000] absolute right-4 top-4"
            onClick={onClose}
          />
        </div>
        <p className="mb-4 text-[15px] font-[400] text-charcoal font-sansation">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        {/* Matches List */}
        <div className="space-y-4">
          {matches.map((match, idx) => (
            <div key={idx}>
              <div className="font-[700] text-[16px] text-charcoal font-sansation mb-2">
                Match {idx + 1}
              </div>
              <div className="border border-[#2F2F2F] rounded-[10px] p-4 flex gap-4 items-center bg-[#fff]">
                <div className="flex-shrink-0">
                  <img
                    src={match.image}
                    alt={match.name}
                    className="w-[80px] h-[80px] object-cover rounded-[8px] border"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-[700] text-[15px] text-charcoal font-sansation mb-1">
                    {match.name}
                  </div>
                  <div className="text-[14px] font-[600] mb-1">
                    Estimated Duration:{" "}
                    <span className="font-[500]">{match.duration}</span>
                  </div>
                  <div className="text-[14px] font-[400] mb-1">
                    Price: <span className="font-[500]">{match.price}</span>
                  </div>
                  <div className="text-[14px] font-[400] flex items-center gap-2 mb-1">
                    Distance:{" "}
                    <span className="font-[500]">{match.distance}</span>
                    {match.icon && (
                      <img
                        src={match.icon}
                        alt="icon"
                        className="inline w-5 h-5 ml-1"
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-[14px] font-[400] mt-1">
                    <FaStar className="text-yellow-400" />
                    <span className="font-[500]">{match.rating}</span>{" "}
                    <span className="text-[#989BA1]">
                      ({match.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-w-[130px] items-end">
                  <button className="bg-[#FF827F] hover:bg-[#ff6f6b] transition-colors font-[700] font-sansation text-[15px]  py-2 px-4 rounded-[5px] shadow-md w-full">
                    View Profile
                  </button>
                  <button
                    className="bg-[#FF827F] hover:bg-[#ff6f6b] transition-colors font-[700] font-sansation text-[15px] py-2 px-4 rounded-[5px] shadow-md w-full"
                    onClick={() => handleSelectProvider(match)}
                  >
                    Select Provider
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
