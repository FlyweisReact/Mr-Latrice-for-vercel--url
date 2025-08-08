import { IoClose } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";

export function ConnectCalendarModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleCalendarConnect = (calendarType) => {
    console.log(`Connecting to ${calendarType}`);
    // Add your calendar connection logic here
    onClose();
  };

  const calendarOptions = [
    {
      name: "Google Calendar",
      icon: <BsCalendar3 className="text-2xl" />,
      color: "hover:bg-blue-50",
      type: "google",
    },
    {
      name: "Microsoft Outlook",
      icon: <BsCalendar3 className="text-2xl text-gray-800" />,
      color: "hover:bg-blue-50",
      type: "outlook",
    },
    {
      name: "Apple Calendar",
      icon: <BsCalendar3 className="text-2xl text-gray-800" />,
      color: "hover:bg-gray-50",
      type: "apple",
    },
    {
      name: "Calendly",
      icon: <BsCalendar3 className="text-2xl text-gray-800" />,
      color: "hover:bg-blue-50",
      type: "calendly",
    },
    {
      name: "Other Calendar",
      icon: <BsCalendar3 className="text-2xl text-gray-800" />,
      color: "hover:bg-gray-50",
      type: "other",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div
        className="bg-white rounded-md w-full max-w-xl min-h-[60vh] min-w-[380px] p-8 shadow-2xl overflow-y-auto max-h-[95vh] relative flex flex-col"
        style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)" }}
      >
        <IoClose
          className="cursor-pointer text-xl text-[#000000] absolute right-4 top-4 p-0.5 rounded-full border hover:bg-gray-200"
          onClick={onClose}
        />

        <div className="flex flex-col items-center w-full mb-8">
          <div className="font-[700] text-[22px] text-center mb-4 font-rasa text-charcoal">
            Connect Your Calendar
          </div>
          <div className="text-[16px] font-[400] text-center text-charcoal font-sansation mb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          {calendarOptions.map((calendar, index) => (
            <button
              key={index}
              className={`w-full border border-gray-200 rounded-lg p-4 flex items-center gap-4 transition-colors ${calendar.color} hover:border-gray-300`}
              onClick={() => handleCalendarConnect(calendar.type)}
            >
              <div className="flex-shrink-0">{calendar.icon}</div>
              <div className="flex-1 text-left">
                <div className="font-[600] text-[16px] text-charcoal font-sansation">
                  {calendar.name}
                </div>
              </div>
              <div className="text-[#FF827F] font-[600] text-sm">Connect →</div>
            </button>
          ))}
        </div>

        <div className="flex w-full gap-4 mt-8 justify-center">
          <button
            className="px-8 py-3 bg-gray-200 text-gray-700 font-[600] text-lg rounded-full shadow-md hover:bg-gray-300 transition-colors w-full"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
