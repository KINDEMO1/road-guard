import type { NextPage } from "next";

export type X2CameraButtonType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const X2CameraButton: NextPage<X2CameraButtonType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={`w-[33px] h-[29px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start text-left text-sm text-lavenderblush font-montserrat ${className}`}
      data-property1={property1}
    >
      <div className="h-[29px] w-[33px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-gray-400 flex flex-row items-start justify-start py-1.5 px-[4.5px] box-border">
        <a className="[text-decoration:none] h-[17px] w-[25px] relative text-[inherit] inline-block shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          2x2
        </a>
      </div>
    </div>
  );
};

export default X2CameraButton;
