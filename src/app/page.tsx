import type { NextPage } from "next";
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
import Footer from "../components/Footer"; // Import Footer

const MainPage: NextPage = () => {
  return (
    <div className="w-full h-[797px] relative bg-colors-primary overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[50px] box-border leading-[normal] tracking-[normal] text-left text-mini text-gray-500 font-montserrat">
      <header className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-slategray flex flex-row items-start justify-start pt-[5px] px-0 pb-1 box-border shrink-0 top-[0] z-[99] sticky max-w-full text-left text-[24px] text-colors-primary font-kanit">
        <div className="h-[45px] w-[1440px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-slategray hidden max-w-full" />
        <Image
          className="h-9 w-[40px] relative object-cover z-[1]"
          loading="lazy"
          width={53}
          height={36}
          alt=""
          src="/img/logo.png"
        />
        <a className="[text-decoration:none] w-[245px] relative font-semibold text-[inherit] inline-block shrink-0 z-[1]">
          ROAD GUARD
        </a>
      </header>
      <section className="self-stretch h-[721px] bg-silver flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border gap-[9px] shrink-0 max-w-full">
        <div className="self-stretch h-[721px] relative bg-silver hidden" />
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
                <button className="cursor-pointer [border:none] pt-0 px-0 pb-px bg-[transparent] flex flex-col items-start justify-end">
                  <LogsOverTime property1="Default" />{" "}
                  {/* Now property1 is valid */}
                </button>
                <button className="cursor-pointer [border:none] pt-0 pb-px pl-0 pr-1.5 bg-[transparent] flex flex-col items-start justify-end mq450:flex-1">
                  <AddCamera1 property1="Default" />
                </button>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-px">
                  <FullScreen1 />
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-2.5 max-w-full mq450:flex-wrap">
          <div className="self-stretch w-[318px] relative bg-gainsboro" />
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 gap-[13px]">
            <X1CameraButton property1="Default" />
            <X2CameraButton property1="Default" />
            <X3CameraButton property1="Default" />
            <X4CameraButton property1="Default" />
          </div>
          <VideoContent />
        </div>
      </section>
      <Footer /> {/* Footer component added here */}
    </div>
  );
};

export default MainPage;
