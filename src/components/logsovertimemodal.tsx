"use client"; // This tells Next.js that this component is a client component

import type { NextPage } from "next";

export type LogsOverTimeModalType = {
  onClose: () => void; // Callback to close the modal
};

const LogsOverTimeModal: NextPage<LogsOverTimeModalType> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
      <section className="w-[800px] h-[400px] bg-white rounded-lg p-6 shadow-xl">
        {/* Modal Header */}
        <header className="flex justify-between items-center mb-4">
          <div className="text-xl font-semibold">Logs Over Time</div>
          <span onClick={onClose} className="h-5 w-5 cursor-pointer">
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
        </header>

        {/* Modal Body Content */}
        <div className="flex flex-col h-full">
          {/* Example Graph Area */}
          <div className="flex-1">
            <p>Graphs will be shown here once the backend is ready.</p>
            {/* You can replace the above with your dynamic graph component */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogsOverTimeModal;
