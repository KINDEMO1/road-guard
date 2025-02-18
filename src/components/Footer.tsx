import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#9D9D9D] text-white text-center text-sm p-2 fixed bottom-0 w-full">
      © {new Date().getFullYear()} Batangas State University. All rights
      reserved.
    </footer>
  );
};

export default Footer;
