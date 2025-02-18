import type { NextPage } from "next";

export type VideoContentType = {
  className?: string;
  gridSize: number; // Receive grid size (1x1, 2x2, etc.)
  isFullscreen: boolean; // Prop to manage fullscreen state
};

const VideoContent: NextPage<VideoContentType> = ({
  className = "",
  gridSize,
  isFullscreen,
}) => {
  // Determine grid template based on gridSize
  const gridTemplate =
    {
      1: "grid-cols-1 grid-rows-1",
      2: "grid-cols-2 grid-rows-2",
      3: "grid-cols-3 grid-rows-3",
      4: "grid-cols-4 grid-rows-4",
    }[gridSize] || "grid-cols-1 grid-rows-1";

  // Generate video elements based on grid size
  const totalVideos = gridSize * gridSize;

  return (
    <div
      className={`w-full grid gap-1 ${gridTemplate} ${className} overflow-hidden flex-1 ${
        isFullscreen ? "fixed top-0 left-0 w-full h-full z-50 bg-black" : ""
      }`}
      style={{
        height: isFullscreen ? "100vh" : "calc(100vh - 125px)", // Adjust based on fullscreen mode
      }}
    >
      {Array.from({ length: totalVideos }, (_, index) => (
        <div
          key={index}
          className="video-item w-full h-full bg-black"
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <img
            className="w-full h-full object-cover"
            src="http://localhost:8000/PB_video_feed"
            onError={(e) => (e.currentTarget.src = "/img/errorvideo.png")}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoContent;
