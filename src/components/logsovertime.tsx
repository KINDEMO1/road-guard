"use client"; // Ensure this is a client component

import type { NextPage } from "next";
import { useState, useEffect } from "react";
import LogsOverTimeModal from "./logsovertimemodal"; // Import modal

export type LogsOverTimeType = {
  className?: string;
  property1?: string;
};

const LogsOverTime: NextPage<LogsOverTimeType> = ({
  className = "",
  property1 = "Default",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // Fix SSR mismatch

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent hydration mismatch

  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  return (
    <div className={`flex flex-col items-start justify-end ${className}`}>
      {/* Button to toggle modal */}
      <button
        className="cursor-pointer border-none py-[9px] px-4 bg-mediumseagreen h-[35px] w-[200px] rounded-md flex items-center justify-center text-sm font-montserrat text-colors-primary"
        data-property1={property1}
        onClick={handleButtonClick}
      >
        Logs Over Time
      </button>

      {/* Conditionally render the modal */}
      {isModalOpen && (
        <LogsOverTimeModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default LogsOverTime;
