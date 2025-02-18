"use client"; // This ensures the component is a client component

import type { NextPage } from "next";
import { useState } from "react";
import CameraPopup from "./addcampop"; // Import the modal component

export type AddCameraType = {
  className?: string;
  property1?: string;
};

const AddCamera: NextPage<AddCameraType> = ({
  className = "",
  property1 = "Default",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle modal visibility

  const handleButtonClick = () => {
    setIsModalOpen(true); // Open the modal when the button is clicked
  };

  return (
    <div className="relative">
      {/* Button for opening the modal */}
      <button
        className={`rounded-md bg-[#25A25A] h-[34px] flex flex-row items-center justify-center py-2 px-5 box-border text-left text-sm text-white font-montserrat ${className}`}
        data-property1={property1}
        onClick={handleButtonClick}
        style={{ whiteSpace: "nowrap" }} // Prevent text from wrapping to the next line
      >
        Add Camera
      </button>

      {/* Conditionally render the CameraPopup modal */}
      {isModalOpen && <CameraPopup onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default AddCamera;
