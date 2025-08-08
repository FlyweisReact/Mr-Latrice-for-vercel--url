import { useState } from "react";
import { IoClose } from "react-icons/io5";

import signatureImage from "../../assets/images/dashboard/signature.png";

export const WaiverFormModal = ({ isOpen, onClose }) => {
  //   const [signature, setSignature] = useState(null);
  const [signatureName, setSignatureName] = useState("");

  if (!isOpen) return null;

  const handleSignatureUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      //   setSignature(e.target.files[0]);
      setSignatureName(e.target.files[0].name);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-xl p-4 shadow-xl overflow-y-auto h-[90vh] relative">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <IoClose
            className="cursor-pointer text-3xl text-[#000000]"
            onClick={onClose}
          />
          <h2 className="sm:text-[25px] text-[20px] font-[600] text-charcoal font-rasa">
            Waiver Form
          </h2>
        </div>
        <p className="mb-2 sm:text-[18px] text-[14px] font-[400] text-charcoal font-sansation">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        {/* Content */}
        <div className="mb-5">
          <div className="border border-[#2F2F2F] rounded-[10px] p-4">
            <ol className="list-decimal pl-4 space-y-4">
              <li>
                <span className="font-bold">
                  Lorem Ipsum is simply dummy text.
                </span>
                <p className="text-[14px] mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>
              <li>
                <span className="font-bold">
                  Lorem Ipsum is simply dummy text.
                </span>
                <p className="text-[14px] mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>
              <li>
                <span className="font-bold">
                  Lorem Ipsum is simply dummy text.
                </span>
                <p className="text-[14px] mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>
            </ol>
            {/* Signature Upload */}
            <div className="mt-6">
              <span className="font-bold">Add Signature</span>
              <div className="mt-2">
                <label
                  htmlFor="signature-upload"
                  className="flex items-center justify-center gap-2 cursor-pointer border border-[#2F2F2F] bg-[#FFFFFF] px-3 py-2 rounded-[6px] sm:text-[16px] text-[12px] font-[700] leading-[20px] text-charcoal font-sansation"
                >
                  <img src={signatureImage} className="max-h-8 max-w-8" />
                  {signatureName
                    ? signatureName
                    : "click here to upload signature"}
                  <input
                    id="signature-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleSignatureUpload}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 ">
          <button
            className="w-full bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-4 rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]"
            onClick={onClose}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
