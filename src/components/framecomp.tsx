import type { NextPage } from "next";
import FullscreenOutlined from "./fullout";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-full h-full flex flex-row items-start justify-start z-[1] ${className}`}
    >
      <div className="flex flex-row items-start justify-start w-full h-full">
        <FullscreenOutlined />
      </div>
    </div>
  );
};

export default FrameComponent;
