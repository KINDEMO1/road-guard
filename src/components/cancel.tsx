import type { NextPage } from "next";

export type ModalCancelType = {
  className?: string;
  property1?: string;
  onClick: () => void; // Add onClick prop to the type
};

const ModalCancel: NextPage<ModalCancelType> = ({
  className = "",
  property1 = "Default",
  onClick, // Destructure onClick prop
}) => {
  return (
    <button
      onClick={onClick} // Attach the onClick handler here
      className={`cursor-pointer [border:none] py-[3px] px-[13px] bg-brown h-[21px] w-[108px] rounded flex flex-row items-center justify-center box-border z-[2] ${className}`}
      data-property1={property1}
    >
      <div className="relative text-xs font-montserrat text-colors-primary text-left">
        Cancel
      </div>
    </button>
  );
};

export default ModalCancel;
