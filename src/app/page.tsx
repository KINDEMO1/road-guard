"use client"; // Ensure this is the first line

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
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

const MainPage = () => {
  const [gridSize, setGridSize] = useState(1); // Default to 1x1 grid
  const [isFullscreen, setIsFullscreen] = useState(false); // Track fullscreen state
  const videoContainerRef = useRef<HTMLDivElement | null>(null); // Explicitly define ref type

  // Handle fullscreen toggle
  const handleFullscreenClick = () => {
    if (videoContainerRef.current) {
      if (!document.fullscreenElement) {
        videoContainerRef.current
          .requestFullscreen()
          .catch((err: Error) =>
            console.error(`Error enabling fullscreen: ${err.message}`)
          );
      } else {
        document.exitFullscreen();
      }
    }
  };

  // Function to exit fullscreen properly
  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document
        .exitFullscreen()
        .catch((err: Error) =>
          console.error(`Error exiting fullscreen: ${err.message}`)
        );
    }
  };

  // Listen for fullscreen change and update state
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Listen for "Escape" key press to exit fullscreen
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
      } relative bg-colors-primary overflow-hidden flex flex-col items-start justify-start pt-0 px-0 box-border`}
    >
      <header className="self-stretch shadow-md bg-slategray flex flex-row items-start justify-start pt-[5px] px-0 pb-1 box-border shrink-0 top-[0] z-[99] sticky max-w-full text-left text-[24px] text-colors-primary font-kanit">
        <Image
          className="h-9 w-[40px] relative object-cover z-[1] ml-4"
          loading="lazy"
          width={53}
          height={36}
          alt="Logo"
          src="/img/logo.png"
        />
        <a className="[text-decoration:none] w-[245px] relative font-semibold text-[inherit] inline-block shrink-0 z-[1] ml-4">
          ROAD GUARD
        </a>
      </header>

      <section className="self-stretch flex-1 bg-silver flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border gap-[9px] shrink-0 max-w-full overflow-hidden">
        <div className="w-[1153px] flex flex-row items-start justify-start py-0 px-[18px] box-border max-w-full">
          <header className="flex-1 flex flex-row items-end justify-between max-w-full gap-5 text-left text-[17px] text-black font-montserrat mq1050:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-[21px]">
              <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                <div className="relative z-[1]">Camera List</div>
              </div>
              <ReloadButton property1="Default" />
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border max-w-full">
              <div className="self-stretch flex flex-row items-end justify-start py-0 pl-0 pr-0.5 gap-[15.5px] mq725:flex-wrap mq975:flex-wrap mq975:pl-[113px] mq975:box-border mq450:pl-5 mq450:box-border">
                <ClassificationType property1="Classification Type" />
                <SpeedButton property1="Default" />
                <div>
                  <LogsOverTime /> {/* Standalone button */}
                </div>
                <div>
                  <AddCamera1 property1="Default" />
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0">
                  <FullScreen1 onClick={handleFullscreenClick} />
                </div>
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

          {/* Video Container with Fullscreen Fix */}
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
