"use client";

import React from "react";

export type CameraListProps = {
  cameras?: { name: string; api: string }[]; // ✅ Store name & API
};

const CameraList: React.FC<CameraListProps> = ({ cameras = [] }) => {
  return (
    <div className="self-stretch w-[250px] relative bg-gainsboro p-4">
      <ul className="mt-2 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        {cameras.length > 0 ? (
          cameras.map((camera, index) => (
            <li key={index} className="p-2 border-b border-gray-300">
              <strong className="text-black">{camera.name}</strong>
              <br />
              <span className="text-sm text-gray-600">{camera.api}</span>
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-center py-2">No cameras added</li>
        )}
      </ul>
    </div>
  );
};

// ✅ Prevents unnecessary re-renders if the camera list hasn't changed
export default React.memo(CameraList);
