import type { NextPage } from "next";

export type VideoContentType = {
  className?: string;
};

const VideoContent: NextPage<VideoContentType> = ({ className = "" }) => {
  return (
    <textarea
      className={`[border:none] bg-gainsboro h-[664px] w-auto [outline:none] flex-1 relative max-w-full mq975:min-w-full ${className}`}
      rows={33}
      cols={53}
    />
  );
};

export default VideoContent;
