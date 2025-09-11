import React from "react";

const RoadMap = () => {
  return (
    <div className="roadmap_bg">
      <div className="max-w-[1440px] mx-auto flex flex-col items-start">
        <div className=" py-[20px] md:py-[50px]">
          <div className="flex flex-col gap-[20px] items-center lg:items-start px-[20px] lg:px-[65px]">
            <h2 className="text-white text-2xl md:text-5xl font-bold">
              Tokenomics
            </h2>
            <span className="bg-[#D1A03E] h-1 w-[146px]"></span>
          </div>
        </div>
        <img src="/images/home/roadmap.svg" alt="" className="" />
      </div>
    </div>
  );
};

export default RoadMap;
