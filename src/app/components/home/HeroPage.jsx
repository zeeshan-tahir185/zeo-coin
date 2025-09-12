import React from "react";

const HeroPage = () => {
  return (
    <div
      className="hero_bg w-full min-h-[100vh] md:min-h-[1200px] pt-[98px] flex flex-col gap-[20px] md:gap-[130px] justify-center items-center pb-[50px] md:pb-0"
      id="home"
    >
      <div className="flex flex-col lg:flex-row gap-[50px] justify-between items-center px-[20px] lg:px-[65px] max-w-[1440px] mx-auto mt-2 md:mt-0">
        <div className="flex flex-col gap-[25px] sm:gap-[60px] w-full lg:w-[50%] items-start text-start lg:text-left">
          <div className="flex justify-between items-center w-full mb-[-20px]">
            <h1 className="text-3xl md:text-7xl font-extrabold text-white mb-5 md:mb-0  sm:mt-0">
              Zeo Coin
            </h1>
            <img
              src="/images/home/img1.png"
              alt=""
              className="w-[100px] md:w-[200px] lg:hidden block "
            />
          </div>
          <h2 className="text-white font-bold text-2xl md:text-[42px]">
            Introducing the world's 1st
            <span className="prog_color"> Progressive </span>Crypto Token for AI
            Agents & Social Commerce
          </h2>
          <button className="w-full sm:w-[186px] h-[48px] rounded-[36px] bg-white text-sm text-[#4C1F59] font-semibold">
            <a href="https://excelli.gitbook.io/zeo" target="_blank">
              {" "}
              White Paper
            </a>
          </button>
          <div className="flex items-center w-full justify-between sm:justify-start gap-[10px] sm:gap-[40px] ">
            <img
              src="/images/home/app1.svg"
              className="w-[45%] sm:w-auto "
              alt=""
            />
            <img
              src="/images/home/app2.svg"
              className="w-[45%] sm:w-auto "
              alt=""
            />
          </div>
        </div>
        <img
          src="/images/home/img1.png"
          alt=""
          className="w-[70%] lg:w-[287px] xl:mr-[100px] hidden lg:block"
        />
      </div>
      <div className="flex justify-center items-center gap-5 lg:gap-[48px] flex-wrap">
        <a target="_blank" href="https://x.com/ZeoSuperApp">
          <img
            src="/images/home/icon1.png"
            alt="icon1"
            className="w-[40px] h-[40px] cursor-pointer hover:opacity-70"
          />
        </a>
        <a target="_blank" href="https://t.me/ZeoSuperApp">
          <img
            src="/images/home/icon2.png"
            alt="icon2"
            className="w-[40px] h-[40px] cursor-pointer hover:opacity-70"
          />
        </a>
        <a target="_blank" href="https://www.reddit.com/r/ZeoSuperApp/">
          <img
            src="/images/home/icon3.png"
            alt="icon3"
            className="w-[40px] h-[40px] cursor-pointer hover:opacity-70"
          />
        </a>
        <a target="_blank" href="https://www.instagram.com/zeosuperapp/">
          {" "}
          <img
            src="/images/home/icon4.png"
            alt="icon4"
            className="w-[40px] h-[40px] cursor-pointer hover:opacity-70"
          />
        </a>
        <a target="_blank" href="https://www.facebook.com/ZeoSuperApp">
          <img
            src="/images/home/icon5.png"
            alt="icon5"
            className="w-[40px] h-[40px] cursor-pointer hover:opacity-70"
          />
        </a>
        <a target="_blank" href="https://medium.com/zeosuperapp">
          <img
            src="/images/home/icon6.png"
            alt="icon6"
            className="w-[40px] h-[40px] cursor-pointer hover:opacity-70"
          />
        </a>
        <a target="_blank" href="https://www.linkedin.com/company/zeosuperapp/">
          <img
            src="/images/home/icon7.png"
            alt="icon7"
            className="w-[40px] h-[40px] cursor-pointer hover:opacity-70"
          />
        </a>
        <a target="_blank" href="https://www.youtube.com/@ZeoSuperApp">
          <img
            src="/images/home/icon8.png"
            alt="icon8"
            className="w-[40px] h-[40px] cursor-pointer hover:opacity-70"
          />
        </a>
        <a target="_blank" href="https://discord.gg/F6RY2Ywup4">
          {" "}
          <img
            src="/images/home/icon9.png"
            alt="icon9"
            className="w-[40px] h-[40px] cursor-pointer hover:opacity-70"
          />
        </a>
      </div>
    </div>
  );
};

export default HeroPage;
