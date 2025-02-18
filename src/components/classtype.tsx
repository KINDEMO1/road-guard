"use client"; // This tells Next.js that the component should be treated as a client component

import { useState } from "react";

export type ClassificationTypeProps = {
  className?: string;
  property1?: string; // Optional variant prop for default value
};

const ClassificationType: React.FC<ClassificationTypeProps> = ({
  className = "",
  property1 = "Classification", // Default text for classification
}) => {
  const [selectedClassification, setSelectedClassification] =
    useState(property1);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectChange = (classification: string) => {
    setSelectedClassification(classification);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative w-full" style={{ marginLeft: "-225px" }}>
      {/* Button to display current classification */}
      <button
        className={`border border-gray-400 rounded-md p-2 text-sm text-gray-700 w-full ${className}`}
        style={{
          minWidth: "120px", // Set a fixed width or minimum width
        }}
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility
      >
        {selectedClassification}{" "}
        {/* Button shows the selected classification */}
      </button>

      {/* Dropdown options */}
      {isOpen && (
        <div
          className="border border-gray-400 rounded-md mt-2 w-full bg-white shadow-md"
          style={{
            position: "absolute",
            zIndex: 10,
          }}
        >
          <div
            className="p-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => handleSelectChange("Car")}
          >
            Car
          </div>
          <div
            className="p-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => handleSelectChange("Jeepney")}
          >
            Jeepney
          </div>
          <div
            className="p-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => handleSelectChange("Motorcycle")}
          >
            Motorcycle
          </div>
          <div
            className="p-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => handleSelectChange("Pedestrian")}
          >
            Pedestrian
          </div>
          <div
            className="p-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => handleSelectChange("Tricycle")}
          >
            Tricycle
          </div>
          <div
            className="p-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => handleSelectChange("Classification Type")}
          >
            Reset
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassificationType;
