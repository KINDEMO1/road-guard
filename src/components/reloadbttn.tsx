import type { NextPage } from "next";

export type ReloadButtonType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const ReloadButton: NextPage<ReloadButtonType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-[9px] px-0 bg-mediumseagreen h-[35px] w-[122px] rounded-md flex flex-row items-center justify-center box-border ${className}`}
      data-property1={property1}
    >
      <a className="[text-decoration:none] relative text-sm font-montserrat text-colors-primary text-left">
        Reload
      </a>
    </button>
  );
};

export default ReloadButton;
