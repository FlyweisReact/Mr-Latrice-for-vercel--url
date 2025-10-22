import { IoClose } from "react-icons/io5";
import thinkingImg from "../../assets/images/dashboard/thinking.png";
import { useState } from "react";

export function ImportBookingsModal({ isOpen, onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = [
        "text/csv",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "text/calendar",
        "application/json",
      ];
      if (allowedTypes.includes(file.type)) {
        setSelectedFile(file);
        setError(null);
      } else {
        setSelectedFile(null);
        setError("Please select a .csv, .xlsx, .ics, or .json file");
      }
    }
  };

  const handleImport = () => {
    if (selectedFile) {
      // Here you would typically handle the file upload to a server
      // For this example, we'll just log the file and close the modal
      console.log("Selected file:", selectedFile);
      setSelectedFile(null);
      onClose();
    } else {
      setError("Please select a file to import");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div
        className="bg-white rounded-md w-full max-w-xl min-h-[80vh] min-w-[380px] p-8 shadow-2xl overflow-y-auto max-h-[95vh] relative flex flex-col items-center justify-between"
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
            Import Your bookings
          </div>
          <div className="text-[16px] font-[400] text-center text-charcoal font-sansation mb-8 px-2">
            Upload your bookings file in .csv, .xlsx, .ics, or .json format to
            import your appointments.
          </div>
          <div className="w-full max-w-md">
            <input
              type="file"
              accept=".csv,.xlsx,.ics,.json"
              onChange={handleFileChange}
              className="w-full text-sm text-charcoal file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#FFE6D8] file:text-[#FF827F] hover:file:bg-[#ffd9c9] mb-4"
            />
            {error && (
              <p className="text-red-500 text-sm text-center mb-4">{error}</p>
            )}
            {selectedFile && (
              <p className="text-charcoal text-sm text-center mb-4">
                Selected: {selectedFile.name}
              </p>
            )}
          </div>
        </div>
        <div className="flex w-full gap-6 mt-auto mb-2 justify-center">
          <button
            className="flex-1 bg-[#FFE6D8] text-[#FF827F] font-[700] text-lg px-2 py-3 rounded-full shadow-md disabled:opacity-50"
            onClick={handleImport}
            disabled={!selectedFile}
          >
            Import
          </button>
        </div>
      </div>
    </div>
  );
}