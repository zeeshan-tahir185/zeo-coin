import React from "react";

const HeroPage = () => {
  return (
    <div className="hero_bg w-full min-h-[950px] pt-[98px] flex flex-col gap-[50px] md:gap-[130px] justify-center items-center pb-[50px] md:pb-0">
      <div className="flex flex-col lg:flex-row gap-[50px] justify-between items-center px-[20px] lg:px-[65px] max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[30px] sm:gap-[60px] w-full lg:w-[50%] items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl md:text-7xl font-extrabold text-white">
            Zeo Coin
          </h1>
          <h2 className="text-white font-bold text-2xl md:text-[42px]">
            Introducing the world's 1st
            <span className="prog_color"> Progressive </span>Crypto Token for AI Agents & Social Commerce
          </h2>
          <button className="w-[186px] h-[48px] rounded-[36px] bg-white text-sm text-[#4C1F59] font-semibold">
            White Paper
          </button>
          <div className="flex items-center gap-[40px] flex-col sm:flex-row">
            <img src="/images/home/app1.svg" alt="" />
            <img src="/images/home/app2.svg" alt="" />
          </div>
        </div>
        <img src="/images/home/img1.svg" alt="" className="w-[70%] lg:w-[287px] xl:mr-[100px]" />
      </div>
      <div className="flex justify-center items-center gap-5 lg:gap-[48px] flex-wrap">
        <img src="/images/home/icon1.png" alt="icon1" className="w-[40px] h-[40px] cursor-pointer hover:opacity-70" />
              <img src="/images/home/icon2.png" alt="icon2" className="w-[40px] h-[40px] cursor-pointer hover:opacity-70" />
              <img src="/images/home/icon3.png" alt="icon3" className="w-[40px] h-[40px] cursor-pointer hover:opacity-70" />
              <img src="/images/home/icon4.png" alt="icon4" className="w-[40px] h-[40px] cursor-pointer hover:opacity-70" />
              <img src="/images/home/icon5.png" alt="icon5" className="w-[40px] h-[40px] cursor-pointer hover:opacity-70" />
              <img src="/images/home/icon6.png" alt="icon6" className="w-[40px] h-[40px] cursor-pointer hover:opacity-70" />
              <img src="/images/home/icon7.png" alt="icon7" className="w-[40px] h-[40px] cursor-pointer hover:opacity-70" />
              <img src="/images/home/icon8.png" alt="icon8" className="w-[40px] h-[40px] cursor-pointer hover:opacity-70" />
              <img src="/images/home/icon9.png" alt="icon9" className="w-[40px] h-[40px] cursor-pointer hover:opacity-70" />
      </div>
    </div>
  );
};

export default HeroPage;
