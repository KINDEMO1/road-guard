import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-[#636D86] text-white p-2 h-12">
      <div className="flex items-center border-2 border-red-500">
        <img
          src="img/logo.png"
          alt="Road Guard"
          className="h-8 mr-6 border border-green-500"
        />
        <h1 className="text-2xl font-semibold font-[Kanit] relative left-4">
          Road Guard
        </h1>
      </div>
      <button className="bg-red-500 px-3 py-1 text-sm rounded hover:bg-red-600">
        Login
      </button>
    </header>
  );
};

export default Header;
