import { NextPage } from "next";
import ModalCancel from "./cancel";
import ModalAdd from "./add";

export type CameraPopupType = {
  className?: string;
  onClose: () => void;
};

const CameraPopup: NextPage<CameraPopupType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${className}`}
    >
      <div className="w-[449px] max-w-full rounded-md bg-white p-5 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-montserrat text-colors-primary">
            Add Camera
          </h2>
          <span onClick={onClose} className="p-1 cursor-pointer">
            {/* SVG for Close */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>

        {/* Camera Name Input */}
        <div className="mt-2 flex flex-col items-center">
          {" "}
          {/* Reduced mt-4 to mt-2 */}
          <label className="block text-sm font-montserrat text-black text-center mb-2">
            Camera Name:
          </label>
          <input
            type="text"
            className="w-[80%] p-2 border rounded-md bg-gray-100"
            placeholder="Enter camera name"
          />
        </div>

        {/* Camera API Input */}
        <div className="mt-2 flex flex-col items-center">
          {" "}
          {/* Reduced mt-4 to mt-2 */}
          <label className="block text-sm font-montserrat text-black text-center mb-2">
            Camera API:
          </label>
          <input
            type="text"
            className="w-[80%] p-2 border rounded-md bg-gray-100"
            placeholder="Enter camera API URL"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-5">
          <ModalCancel onClick={onClose} />
          <ModalAdd />
        </div>
      </div>
    </div>
  );
};

export default CameraPopup;
