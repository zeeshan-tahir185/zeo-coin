import Link from "next/link";
import React from "react";

const ZeoSuperApp = () => {
  return (
    <div className="bg-[#0D042E] py-[20px] md:py-[50px]">
      <div className="flex flex-col justify-center items-center gap-[20px] md:gap-[50px]">
        <h3 className="text-white text-lg md:text-2xl ">
          Zeo Coin Powers Zeo Super App
        </h3>
        <img src="/images/home/img2.svg" alt="" />
        <Link href="https://excelli.gitbook.io/zeo" target="_blank">
        <button className="text-lg font-bold text-white border-[1.4px] border-white h-[50px] sm:h-[60px] w-[200px] rounded-full cursor-pointer mt-0 md:mt-[50px]">
            White Paper
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ZeoSuperApp;
