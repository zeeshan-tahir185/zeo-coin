"use client";
import Link from "next/link";
import React, { useState } from "react";

const CoinPreSale = () => {
  const [selectedMethod, setSelectedMethod] = useState("ETH");
  const [progress, setProgress] = useState(25); // Percentage of progress (0-100)

  const paymentMethods = [
    { id: "ETH", label: "ETH", icon: "/images/home/eth.png" },
    { id: "USDT", label: "USDT", icon: "/images/home/usdt.png" },
    { id: "USDC", label: "USDC", icon: "/images/home/usdc.png" },
    { id: "Card", label: "Card", icon: "/images/home/card.png" },
  ];

  return (
    <div className="bg-[#190941]  w-full min-h-[1000px] flex flex-col gap-[40px] md:gap-[90px] items-center justify-center py-[30px] md:py-[90px]" >
      <div id="buy-coins"
        className="w-[95%] md:w-[600px] min-h-[764px] rounded-[20px] border-2 border-[#3E2790] mx-2 shadow-[0px_0px_60px_0px_#2F1D71] px-2 sm:px-8 xl:px-[50px] py-10 flex flex-col gap-[25px]"
        style={{ background: "#0D042E" }}
      >
        {/* Title */}
        <h1 className="text-center text-white text-2xl md:text-5xl font-semibold">
          <span className="prog_color">Zeo Coins</span> Presale
        </h1>
        <div>
          <p className="text-center font-semibold text-white  text-sm md:text-xl">
            Seed <span className="text-[#D1A03E]">(Round 1)</span>
          </p>
          <p className="text-center text-sm text-[#FFFFFF] cursor-pointer">
            See rounds prices and details (
            <Link href="https://excelli.gitbook.io/zeo/readme/tokenomics" target="_blank" className="underline">here</Link>)
          </p>
        </div>

        {/* Price Info */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex justify-between items-center mt-2">
            <p className="text-[#D1A03E] text-sm md:text-lg font-semibold">
              Current Price:{" "}
              <span className="text-white font-normal">$0.01</span>
            </p>
            <p className="text-[#D1A03E] text-sm md:text-lg font-semibold">
              Listing Price:{" "}
              <span className="text-white font-normal">$0.05</span>
            </p>
          </div>
          <img src="/images/home/bar.svg" alt="" draggable="false" />
        </div>
        {/* USD Raised */}
        <p className="text-center text-[#D1A03E] mt-4 text-xl md:text-[32px] font-extrabold">
          USD Raised <span className="text-white text-2xl">$250,000</span>
        </p>

        {/* Payment Methods */}
        <div className="flex flex-col gap-[20px]">
          <p className="text-center text-white mt-2 text-sm md:text-lg">
            Select Payment Method
          </p>
          <div className="flex justify-center gap-4 mt-2 flex-wrap">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`px-4 rounded-full  transition font-bold text-sm h-[42px] flex items-center gap-3 ${
                  selectedMethod === method.id
                    ? " bg-white text-[#4C1F59]"
                    : " bg-white/10 text-white"
                }`}
              >
                <img src={method.icon} alt="" />
                {method.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pay with Section */}
        <div className="mt-1 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col justify-between items-center px-4 py-3 mb-4 gap-[5px] w-full sm:w-[200px]">
            <p className="text-white text-lg">Pay with {selectedMethod}</p>
            <div className="bg-white text-[#4C1F59] w-full h-[52px] rounded-full px-4 flex items-center gap-[10px]">
              <img
                src={`${
                  selectedMethod == "ETH"
                    ? "/images/home/eth.png"
                    : selectedMethod == "USDT"
                    ? "/images/home/usdt.png"
                    : selectedMethod == "USDC"
                    ? "/images/home/usdc.png"
                    : "/images/home/card.png"
                }`}
                alt=""
              />
              <input
                type="text"
                placeholder="0.00"
                className=" text-left outline-none h-full text-[24px] font-semibold w-full"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between items-center px-4 py-3 mb-4 gap-[5px] w-full sm:w-[200px]">
            <p className="text-white text-lg">Receive ZEO</p>
            <div className="bg-white text-[#4C1F59]  w-full h-[52px] rounded-full px-4 flex items-center gap-[10px]">
              <img src="/images/home/zeo.png" alt="" />
              <input
                type="text"
                placeholder="0.00"
                className=" text-left outline-none h-full text-[24px] font-semibold w-full"
              />
            </div>
          </div>
        </div>

        {/* Connect Wallet */}
        <button className="w-full  bg-[#D1A03E] text-white font-bold rounded-full hover:bg-yellow-500 transition text-xl h-[52px] flex justify-center items-center">
          Connect wallet
        </button>
      </div>
      <a target="_blank" className="px-2 text-white underline mt-[-25px] md:mt-[-70px] text-lg" href="https://excelli.gitbook.io/zeo/readme/how-to-buy-zeo-coins-with-our-step-by-step-guide">Learn How to buy Zeo Coins with our step by step guide</a>
      <div id="referral"
        className="w-[95%] md:w-[600px] min-h-[438px]  rounded-[20px] border-2 border-[#3E2790] mx-2 shadow-[0px_0px_60px_0px_#2F1D71] px-2 sm:px-8 xl:px-[50px] py-10 flex flex-col gap-[25px]"
        style={{ background: "#0D042E" }}
      >
        {/* Title */}
        <h1 className="text-center text-white text-2xl md:text-5xl font-semibold">
          <span className="prog_color">Referral Program</span>
        </h1>
        <div>
          <p className="text-center font-semibold text-white text-sm md:text-lg">
            Share your link with friends and earn <br /> 5% ZEO per successful
            purchase.
          </p>
        </div>

        <div className="w-full border border-[#3E2790] px-[30px] py-4 md:py-0 bg-white/10 min-h-[98px] rounded-[12px] flex flex-col sm:flex-row items-center justify-between gap-[20px]">
          <div className="flex flex-col gap-[10px] ">
            <h2 className="text-base uppercase text-[#D1A03E] font-bold">Total Earned</h2>
            <p className="text-white text-lg md:text-2xl items-center text-center">-- <span className="font-black">ZEO</span></p>
          </div>
          <div className="flex flex-col gap-[10px] items-center ">
            <h2 className="text-base uppercase text-[#D1A03E] font-bold">Total Referrals</h2>
            <p className="text-white text-lg md:text-2xl">-- </p>
          </div>
        </div>

        {/* Connect Wallet */}
        <button className="w-full  bg-[#D1A03E] text-white font-bold rounded-full hover:bg-yellow-500 transition text-xl h-[52px] flex justify-center items-center">
          Connect wallet
        </button>
      </div>
      <a target="_blank" className="px-2 text-white underline mt-[-25px] md:mt-[-70px] text-lg" href="https://excelli.gitbook.io/zeo/readme/how-to-refer-friends-and-earn-zeo-coins-with-our-step-by-step-guide">Learn how to refer friends and earn Zeo Coins with our step-by-step guide</a>
    </div>
  );
};

export default CoinPreSale;
