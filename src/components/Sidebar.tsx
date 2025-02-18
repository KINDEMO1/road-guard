import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      {/* Title and Reload Button in the Same Line */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Cameras</h2>
        <button className="bg-blue-500 px-2 py-1 text-sm rounded">
          Reload
        </button>
      </div>

      {/* Camera List */}
      <ul className="mt-4 space-y-2">
        {Array.from({ length: 10 }, (_, i) => (
          <li key={i} className="p-2 bg-gray-700 rounded">
            Camera {i + 1}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
