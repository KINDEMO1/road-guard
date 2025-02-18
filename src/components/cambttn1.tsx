import type { NextPage } from "next";

export type X1CameraButtonType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const X1CameraButton: NextPage<X1CameraButtonType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={`w-[33px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-[29px] flex flex-row items-center justify-between py-1.5 px-[7px] box-border relative text-left text-sm text-lavenderblush font-montserrat ${className}`}
      data-property1={property1}
    >
      <div className="h-full w-full absolute !m-[0] top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-gray-400 z-[0]" />
      <a className="[text-decoration:none] h-[17px] relative text-[inherit] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]">
        1x1
      </a>
    </div>
  );
};

export default X1CameraButton;
