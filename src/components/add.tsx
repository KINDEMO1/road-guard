import type { NextPage } from "next";

export type ModalAddType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const ModalAdd: NextPage<ModalAddType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-[3px] px-[13px] bg-mediumseagreen h-[21px] w-[108px] rounded flex flex-row items-center justify-center box-border z-[1] ${className}`}
      data-property1={property1}
    >
      <div className="relative text-xs font-montserrat text-colors-primary text-left">
        Add Camera
      </div>
    </button>
  );
};

export default ModalAdd;
