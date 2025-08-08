import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa";

const initialFormQuestions = [
  {
    id: "goal",
    text: "Goals / Expectations for this service",
    required: true,
    optional: false,
    answerType: "select",
  },
  {
    id: "allergies",
    text: "Do you have any allergies or sensitivities?",
    required: false,
    optional: true,
    answerType: "yesno",
  },
  {
    id: "sensitive",
    text: "Are you tender-headed or sensitive to tension",
    required: false,
    optional: false,
    answerType: "yesno",
  },
  {
    id: "washed",
    text: "Will you arrive with hair pre-washed and detangles?",
    required: false,
    optional: true,
    answerType: "yesno",
  },
  {
    id: "pregnant",
    text: "Are you pregnant or nursing?",
    required: false,
    optional: true,
    answerType: "yesno",
  },
  {
    id: "upload",
    text: "Upload Inspiration photo",
    required: false,
    optional: true,
    answerType: "upload",
  },
];

const availableQuestions = [
  {
    id: 1,
    category: "Hair Service",
    text: [
      "What is your current hair routine?",
      "Are you using any oils, serums, or treatments?",
    ],
  },
  {
    id: 2,
    category: "Skincare & Spa",
    text: [
      "Do you have any skin conditions (eczema, et.?)",
      "Have you had any recent treatments or facials?",
    ],
  },
  {
    id: 3,
    category: "Glam & Meakeup",
    text: [
      "Is this service for an event or photoshoot?",
      "Do you prefer a matte, dewy, or natural finish? ",
    ],
  },
  {
    id: 4,
    category: "Universal Preferences?",
    text: [
      "Is anyone accompanying you?",
      "Do you have fragrance sensitivity?",
      "Any tension or discomfort areas to avoid?",
    ],
  },
];

export const AppointmentFormModal = ({ isOpen, onClose }) => {
  const [formQuestions, setFormQuestions] = useState(initialFormQuestions);
  const [yesNoAnswers, setYesNoAnswers] = useState({});

  if (!isOpen) return null;

  const handleYesNoChange = (id, value) => {
    setYesNoAnswers({ ...yesNoAnswers, [id]: value });
  };

  return (
    <div className="fixed inset-0  bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full max-w-sm sm:max-w-lg p-3 shadow-xl overflow-y-auto h-[80vh] relative">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <IoClose
            className="cursor-pointer text-3xl text-[#000000]"
            onClick={onClose}
          />
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-charcoal font-rasa">
            Appointment Form
          </h2>
        </div>
        <p className="mb-2 sm:text-[20px] text-[15px] font-[400] text-charcoal font-sansation">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        {/* Content */}
        <div className="mb-5">
          <div className="border border-[#2F2F2F] rounded-[10px] p-4">
            {formQuestions.map((q, index) => (
              <div key={q.id} className="mb-5 flex items-start gap-1">
                <h6 className="sm:text-[17px] text-[15px] font-[700] leading-[20px] text-charcoal font-sansation">
                  {index + 1}.
                </h6>
                <div>
                  <p className="sm:text-[17px] text-[15px] font-[700] leading-[20px] text-charcoal font-sansation">
                    {q.text}{" "}
                    {q.required && (
                      <span className="font-[400]">(Required)</span>
                    )}
                    {q.optional && (
                      <span className="font-[400]">(Optional)</span>
                    )}
                  </p>

                  {q.answerType === "select" && (
                    <select className="mt-2 border border-[#2F2F2F] p-2 rounded-[6px] w-full">
                      <option>Select...</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                  )}

                  {q.answerType === "yesno" && (
                    <div className="flex space-x-6 mt-2">
                      {["Yes", "No"].map((opt) => (
                        <label
                          key={opt}
                          className="flex items-center gap-1 font-[500] font-inter sm:text-[16px] text-[14px] text-[#2F2F2F] cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={q.id}
                            value={opt}
                            checked={yesNoAnswers[q.id] === opt}
                            onChange={() => handleYesNoChange(q.id, opt)}
                            className="accent-teal-800 "
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  )}

                  {q.answerType === "upload" && (
                    <div className="mt-2">
                      <div className="flex itmes-center justify-center gap-2 cursor-pointer border border-[#2F2F2F] bg-[#FFFFFF] px-3 py-1 rounded-[6px] sm:text-[16px] text-[12px] font-[700] leading-[20px] text-charcoal font-sansation">
                        <FaRegImage />
                        Upload
                      </div>
                    </div>
                  )}

                  {q.answerType === "text" && (
                    <input
                      type="text"
                      placeholder="Answer here..."
                      className="mt-2 border p-2 rounded w-full"
                    />
                  )}
                </div>
              </div>
            ))}
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
