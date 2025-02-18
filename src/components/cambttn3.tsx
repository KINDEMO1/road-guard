import type { NextPage } from "next";

export type X3CameraButtonType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const X3CameraButton: NextPage<X3CameraButtonType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={`w-[33px] h-[29px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start text-left text-sm text-lavenderblush font-montserrat ${className}`}
      data-property1={property1}
    >
      <div className="h-[29px] w-[33px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-gray-400 flex flex-row items-start justify-start py-1.5 px-[4.5px] box-border">
        <div className="h-[17px] w-[25px] relative inline-block shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          3x3
        </div>
      </div>
    </div>
  );
};

export default X3CameraButton;
