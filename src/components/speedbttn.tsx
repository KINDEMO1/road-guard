"use client"; // This tells Next.js that this component is a client component

import type { NextPage } from "next";
import { useState } from "react";
import SpeedModal from "./speedmodal"; // Assuming the modal is in the same folder

export type SpeedButtonType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const SpeedButton: NextPage<SpeedButtonType> = ({
  className = "",
  property1 = "Default",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  return (
    <div>
      <button
        className={`cursor-pointer [border:none] py-[9px] px-0 bg-mediumseagreen h-[35px] w-[190px] rounded-md flex flex-row items-center justify-center box-border ${className}`}
        data-property1={property1}
        onClick={handleButtonClick} // Toggle the modal on button click
      >
        <a className="[text-decoration:none] relative text-sm font-montserrat text-colors-primary text-left">
          Speed
        </a>
      </button>

      {/* Conditionally render the modal */}
      {isModalOpen && <SpeedModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default SpeedButton;
