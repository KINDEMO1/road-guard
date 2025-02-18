import type { NextPage } from "next";

export type BackToMainType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const BackToMain: NextPage<BackToMainType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={`w-[117px] h-[19px] flex flex-row items-start justify-start py-0 px-0 box-border text-center text-sm text-tomato font-montserrat ${className}`}
      data-property1={property1}
    >
      <div className="h-[19px] w-[137px] relative flex items-center justify-center shrink-0">
        Back to Main Page
      </div>
    </div>
  );
};

export default BackToMain;
