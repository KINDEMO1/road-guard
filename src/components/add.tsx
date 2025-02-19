import type { NextPage } from "next";

export type ModalAddType = {
  className?: string;
  onClick: () => void; // ✅ Add onClick prop
};

const ModalAdd: NextPage<ModalAddType> = ({ className = "", onClick }) => {
  return (
    <button
      onClick={onClick} // ✅ Attach the function
      className={`cursor-pointer [border:none] py-[3px] px-[13px] bg-mediumseagreen h-[21px] w-[108px] rounded flex flex-row items-center justify-center box-border z-[1] ${className}`}
    >
      <div className="relative text-xs font-montserrat text-colors-primary text-left">
        Add Camera
      </div>
    </button>
  );
};

export default ModalAdd;
