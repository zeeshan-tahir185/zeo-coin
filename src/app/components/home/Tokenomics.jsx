import React from "react";

const Tokenomics = () => {
  return (
    <div className="w-full flex flex-col relative min-h-[100vh]">
      {/* Make sure the parent div is relative so that the image positions itself accordingly */}
      <div className=" w-full">
        <img
          src="/images/home/token_bg.svg"
          alt=""
          className="absolute top-0 bottom-0 w-full right-0 object-cover z-30 "
        />
      </div>

      <div className="bg-[#190941] w-full md:min-h-[790px] pt-[30px] md:pt-[50px] z-10 relative">
        <div className="flex flex-col lg:flex-row gap-[30px] w-full px-[20px] lg:px-[65px] max-w-[1440px] mx-auto pb-[30px]">
          <div className="flex flex-col gap-[20px] md:gap-[50px] items-center lg:items-start w-full lg:w-[35%] mt-0 lg:mt-[100px] text-center lg:text-start">
            <div className="flex flex-col gap-[20px] items-center lg:items-start">
              <h2 className="text-white text-2xl md:text-5xl font-bold">
                Tokenomics
              </h2>
              <span className="bg-[#D1A03E] h-1 w-[146px]"></span>
            </div>
            <p className="text-white text-lg md:text-2xl">
              With Zeo’s unique rewards program “Zeo coins” you will start
              exploring the world of crypto as Zeo coins are backed by
              Blockchain enabled Crypto token.
            </p>
          </div>
          <img
            src="/images/home/token_img.svg"
            alt=""
            className="mx-auto lg:mx-0 w-[80%] lg:w-[65%] xl:w-[785px]"
          />
        </div>
      </div>

      <div className="bg-[#0B264A] min-h-[500px] w-full flex justify-center items-center">
        <div className="max-w-[1440px] mx-auto w-full px-[20px] lg:px-[65px] py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[80px] ">
          <div className="text-white text-center md:text-left">
            <h2 className="text-xl font-bold mb-2 text-[#D1A03E]">Name</h2>
            <p className="text-xl font-bold">Zeo Coin</p>
          </div>
          <div className="text-white text-center md:text-left">
            <h2 className="text-xl font-bold mb-2 text-[#D1A03E]">
              Token Symbol
            </h2>
            <p className="text-xl font-bold">ZEO</p>
          </div>
          <div className="text-white text-center md:text-left">
            <h2 className="text-xl font-bold mb-2 text-[#D1A03E]">
              Token Standard
            </h2>
            <p className="text-xl font-bold">ERC20</p>
          </div>
          <div className="text-white text-center md:text-left">
            <h2 className="text-xl font-bold mb-2 text-[#D1A03E]">
              Blockchain
            </h2>
            <p className="text-xl font-bold">Ethereum</p>
          </div>
          <div className="text-white text-center md:text-left">
            <h2 className="text-xl font-bold mb-2 text-[#D1A03E]">
              Token Price
            </h2>
            <p className="text-xl font-bold">$0.05</p>
          </div>
          <div className="text-white text-center md:text-left">
            <h2 className="text-xl font-bold mb-2 text-[#D1A03E]">
              Initial Token Supply
            </h2>
            <p className="text-xl font-bold">350 Million</p>
          </div>
          <div className="text-white text-center md:text-left">
            <h2 className="text-xl font-bold mb-2 text-[#D1A03E]">
              Total Tokens Supply
            </h2>
            <p className="text-xl font-bold">1 Billion</p>
          </div>
          <div className="text-white text-center md:text-left">
            <h2 className="text-xl font-bold mb-2 text-[#D1A03E]">
              Full Dilution Value
            </h2>
            <p className="text-xl font-bold">$50 Million</p>
          </div>
          <div className="text-white text-center md:text-left">
            <h2 className="text-xl font-bold mb-2 text-[#D1A03E]">Decimal</h2>
            <p className="text-xl font-bold">18</p>
          </div>
          <div className="text-white text-center md:text-left">
            <h2 className="text-xl font-bold mb-2 text-[#D1A03E]">
              Future Minting
            </h2>
            <p className="text-xl font-bold">Fixed supply, future minting disabled</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
