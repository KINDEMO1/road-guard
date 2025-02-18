import type { NextPage } from "next";
import Image from "next/image";
import BackToMain from "@/components/backtomain";

export type UserLogsType = {
  className?: string;
};

const UserLogs: NextPage<UserLogsType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] h-[797px] bg-colors-primary max-w-full overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border leading-[normal] tracking-[normal] text-left text-mini text-gray-500 font-montserrat ${className}`}
    >
      <section className="self-stretch flex flex-col items-start justify-start shrink-0 max-w-full">
        <header className="self-stretch flex flex-col items-start justify-start gap-3 max-w-full text-left text-xl text-colors-primary font-kanit">
          <div className="self-stretch bg-slategray flex flex-row items-start justify-start pt-[5px] px-0 pb-1 box-border max-w-full">
            <div className="h-[45px] w-[1440px] relative bg-slategray hidden max-w-full" />
            <Image
              className="h-9 w-[53px] relative object-cover z-[1]"
              loading="lazy"
              width={53}
              height={36}
              alt=""
              src="/itms-logo-1@2x.png"
            />
            <div className="w-56 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
              <a className="[text-decoration:none] self-stretch relative font-semibold text-[inherit] z-[1]">
                ROAD GUARD
              </a>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[27px] box-border max-w-full text-black font-montserrat">
            <div className="flex flex-row items-start justify-start gap-[67px] max-w-full mq450:gap-[17px] mq650:gap-[33px]">
              <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                <BackToMain property1="Default" />
              </div>
              <div className="w-[292px] flex flex-col items-start justify-start pt-[61px] pb-0 pl-0 pr-5 box-border">
                <a className="[text-decoration:none] relative text-[inherit] z-[2]">
                  User
                </a>
              </div>
              <div className="w-[550px] flex flex-col items-start justify-start py-0 pl-0 pr-[155px] box-border gap-[22px] max-w-full text-[32px] mq450:pr-5 mq450:box-border mq650:pr-[77px] mq650:box-border">
                <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-px">
                  <h2 className="m-0 relative text-inherit font-normal font-[inherit] z-[1]">
                    User Access Logs
                  </h2>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-5 text-xl">
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[50px] z-[2]">
                    Date
                  </a>
                  <a className="[text-decoration:none] relative text-[inherit] z-[2]">
                    Time In
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[61px] px-0 pb-0">
                <a className="[text-decoration:none] relative text-[inherit] z-[2]">
                  Time Out
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="self-stretch bg-silver flex flex-row items-start justify-start pt-[57px] px-0 pb-0 box-border max-w-full mt-[-97px]">
          <div className="h-[721px] w-[1440px] relative bg-silver hidden max-w-full" />
          <div className="h-[664px] flex-1 relative bg-gainsboro max-w-full z-[1]">
            <div className="absolute top-[0px] left-[0px] bg-gainsboro w-full h-full hidden z-[1]" />
            <div className="absolute top-[50px] left-[57px] bg-snow w-[1326px] h-[603px] z-[2]" />
          </div>
        </div>
      </section>
      <div className="bg-darkgray flex flex-row items-start justify-start py-[7px] pl-[572px] pr-[571px] shrink-0 mq450:pl-5 mq450:pr-5 mq450:box-border mq725:pl-[286px] mq725:pr-[285px] mq725:box-border">
        <div className="relative font-medium">
          Copyright @ Batangas State University
        </div>
      </div>
    </div>
  );
};

export default UserLogs;
