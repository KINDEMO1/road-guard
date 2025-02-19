"use client"; // Ensure this is the first line

import { useState, useRef, useEffect } from "react";
import ReloadButton from "../components/reloadbttn";
import ClassificationType from "../components/classtype";
import SpeedButton from "../components/speedbttn";
import LogsOverTime from "../components/logsovertime";
import AddCamera1 from "../components/addcamera";
import FullScreen1 from "../components/fullscreen";
import X1CameraButton from "../components/cambttn1";
import X2CameraButton from "../components/cambttn2";
import X3CameraButton from "../components/cambttn3";
import X4CameraButton from "../components/cambttn4";
import VideoContent from "../components/videocontent";
import Footer from "../components/Footer";
import CameraList from "../components/cameralist";
import Header from "../components/Header"; // Import the new Header component

const MainPage = () => {
  const [gridSize, setGridSize] = useState(1); // Default to 1x1 grid
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  const handleFullscreenClick = () => {
    if (videoContainerRef.current) {
      if (!document.fullscreenElement) {
        videoContainerRef.current.requestFullscreen().catch(console.error);
      } else {
        document.exitFullscreen();
      }
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(console.error);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        exitFullscreen();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className={`w-full ${
        isFullscreen ? "h-screen" : "min-h-screen"
      } relative bg-colors-primary overflow-hidden flex flex-col`}
    >
      <Header /> {/* Imported Header component */}
      <section className="self-stretch flex-1 bg-silver flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border gap-[9px] shrink-0 max-w-full overflow-hidden">
        <div className="w-[1153px] flex flex-row items-start justify-start py-0 px-[18px] box-border max-w-full">
          <header className="flex-1 flex flex-row items-end justify-between max-w-full gap-5 text-left text-[17px] text-black font-montserrat">
            <div className="flex flex-row items-start justify-start gap-[21px]">
              <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                <div className="relative z-[1]">Camera List</div>
              </div>
              <ReloadButton property1="Default" />
            </div>
            <div className="flex flex-col items-start justify-end pb-0.5 max-w-full">
              <div className="self-stretch flex flex-row items-end justify-start gap-[15.5px]">
                <ClassificationType property1="Classification Type" />
                <SpeedButton property1="Default" />
                <LogsOverTime />
                <AddCamera1 property1="Default" />
                <FullScreen1 onClick={handleFullscreenClick} />
              </div>
            </div>
          </header>
        </div>

        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-2.5 max-w-full flex-wrap overflow-hidden">
          <CameraList />
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 gap-[13px]">
            <button
              onClick={() => setGridSize(1)}
              className="cursor-pointer border-none bg-transparent rounded-[4px]"
            >
              <X1CameraButton property1="Default" />
            </button>
            <button
              onClick={() => setGridSize(2)}
              className="cursor-pointer border-none bg-transparent rounded-[4px]"
            >
              <X2CameraButton property1="Default" />
            </button>
            <button
              onClick={() => setGridSize(3)}
              className="cursor-pointer border-none bg-transparent rounded-[4px]"
            >
              <X3CameraButton property1="Default" />
            </button>
            <button
              onClick={() => setGridSize(4)}
              className="cursor-pointer border-none bg-transparent rounded-[4px]"
            >
              <X4CameraButton property1="Default" />
            </button>
          </div>

          <div
            ref={videoContainerRef}
            className={`flex-1 relative ${
              isFullscreen
                ? "fixed inset-0 z-50 bg-black flex items-center justify-center"
                : ""
            }`}
          >
            {isFullscreen && (
              <button
                onClick={exitFullscreen}
                className="absolute top-4 right-4 text-white text-xl bg-red-600 rounded-full p-2 hover:bg-red-700"
              >
                ✖
              </button>
            )}
            <VideoContent gridSize={gridSize} isFullscreen={isFullscreen} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MainPage;
