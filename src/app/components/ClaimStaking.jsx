import React from "react";

const ClaimStaking = () => {
  return (
    <div className="bg-[#190941] pt-[98px] ">
      <div className="flex flex-col gap-[50px] justify-between items-center sm:items-start py-[30px] md:py-[50px] px-[20px] lg:px-[65px] max-w-[1440px] mx-auto mt-2 md:mt-0">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Claim Tokens
        </h2>
        <button className="w-[150px] h-[48px] rounded-full bg-white text-sm font-bold text-[#4C1F59]">
          Connect Wallet
        </button>
        <div className="flex flex-col items-center sm:items-start sm:flex-row gap-[30px] md:gap-[60px]">
          <div className="border flex flex-col items-center sm:items-start gap-[30px] text-center justify-between border-[#3E2790] w-full mx-auto md:mx-0 md:w-[45%] lg:w-[418px] bg-[#302254] rounded-[12px] p-[20px] sm:p-[40px] min-h-[204px]">
            <div className="flex items-center gap-3">
              <img src="/images/home/zeo.png" alt="" />
              <h3 className="text-xl md:text-[32px] font-semibold text-white">
                ZEO
              </h3>
            </div>
            <div className="flex items-center justify-between gap-5 flex-col sm:flex-row">
              <button className="w-[150px] h-[48px] rounded-full bg-white/20 text-sm font-semibold text-white/75">
                Claim Tokens
              </button>
              <p className="text-white font-medium">
                Available for Claim <br />
                <span className="font-bold">-- ZEO</span>
              </p>
            </div>
          </div>
          <div className="border flex flex-col items-center sm:items-start gap-[30px] text-center justify-between border-[#3E2790] w-full mx-auto md:mx-0 md:w-[45%] lg:w-[418px] bg-[#302254] rounded-[12px] p-[20px] sm:p-[40px] min-h-[204px]">
            <div className="flex items-center gap-3">
              <img src="/images/home/zeo.png" alt="" />
              <h3 className="text-xl md:text-[32px] font-semibold text-white">
                ZEO
              </h3>
            </div>
            <div className="flex items-center justify-between gap-5 flex-col sm:flex-row">
              <button className="w-[150px] h-[48px] rounded-full bg-white/20 text-sm font-semibold text-white/75">
                Unlock Tokens
              </button>
              <p className="text-white font-medium">
                Available for Unlock <br />
                <span className="font-bold">-- ZEO</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold prog_color mt-3">
          Stake Tokens
        </h2>
        <button className="w-[150px] h-[48px] rounded-full bg-white text-sm font-bold text-[#4C1F59]">
          Connect Wallet
        </button>
        <div className="flex flex-col items-center sm:items-start flex-wrap sm:flex-row gap-[30px] md:gap-[60px] w-full">
          <div className="w-[297px] flex flex-col justify-between text-white lg:w-[21%] min-h-[462px] p-[24px] rounded-[12px] bg-[#302254] border border-[#3E2790]">
            <h2 className="font-bold text-2xl mb-[20px]">3 Months, 6% APY</h2>
            <p className="text-base font-medium mb-[10px]">
              Available for staking
            </p>
            <p className="text-base font-medium mb-[10px]">-.-- zEO</p>
            <button className="w-[100%] mx-auto h-[40px] rounded-full bg-white/20 text-sm font-bold">
              Stake
            </button>
            <p className="text-base font-medium mb-[10px]">Staked amount</p>
            <p className="text-base font-medium mb-[10px]">-.-- zEO</p>
            <button className="w-[100%] mx-auto h-[40px] rounded-full bg-white/20 text-sm font-bold">
              Withdraw
            </button>
            <p className="text-base font-medium mb-[10px]">Staking rewards</p>
            <p className="text-base font-medium mb-[10px]">-.-- zEO</p>
            <p className="text-base font-medium mb-[10px] italic">
              Rewards withdrawn with the staking deposit
            </p>
          </div>
          <div className="w-[297px] flex flex-col justify-between text-white lg:w-[21%] min-h-[462px] p-[24px] rounded-[12px] bg-[#302254] border border-[#3E2790]">
            <h2 className="font-bold text-2xl mb-[20px]">6 Months, 9% APY</h2>
            <p className="text-base font-medium mb-[10px]">
              Available for staking
            </p>
            <p className="text-base font-medium mb-[10px]">-.-- zEO</p>
            <button className="w-[100%] mx-auto h-[40px] rounded-full bg-white/20 text-sm font-bold">
              Stake
            </button>
            <p className="text-base font-medium mb-[10px]">Staked amount</p>
            <p className="text-base font-medium mb-[10px]">-.-- zEO</p>
            <button className="w-[100%] mx-auto h-[40px] rounded-full bg-white/20 text-sm font-bold">
              Withdraw
            </button>
            <p className="text-base font-medium mb-[10px]">Staking rewards</p>
            <p className="text-base font-medium mb-[10px]">-.-- zEO</p>
            <p className="text-base font-medium mb-[10px] italic">
              Rewards withdrawn with the staking deposit
            </p>
          </div>
          <div className="w-[297px] flex flex-col justify-between text-white lg:w-[21%] min-h-[462px] p-[24px] rounded-[12px] bg-[#302254] border border-[#3E2790]">
            <h2 className="font-bold text-2xl mb-[20px]">12 Months, 12% APY</h2>
            <p className="text-base font-medium mb-[10px]">
              Available for staking
            </p>
            <p className="text-base font-medium mb-[10px]">-.-- zEO</p>
            <button className="w-[100%] mx-auto h-[40px] rounded-full bg-white/20 text-sm font-bold">
              Stake
            </button>
            <p className="text-base font-medium mb-[10px]">Staked amount</p>
            <p className="text-base font-medium mb-[10px]">-.-- zEO</p>
            <button className="w-[100%] mx-auto h-[40px] rounded-full bg-white/20 text-sm font-bold">
              Withdraw
            </button>
            <p className="text-base font-medium mb-[10px]">Staking rewards</p>
            <p className="text-base font-medium mb-[10px]">-.-- zEO</p>
            <p className="text-base font-medium mb-[10px] italic">
              Rewards withdrawn with the staking deposit
            </p>
          </div>
          <div className="w-[297px] flex flex-col justify-between text-white lg:w-[21%] min-h-[462px] p-[24px] rounded-[12px] bg-[#302254] border border-[#3E2790]">
            <h2 className="font-bold text-2xl mb-[20px]">24 Months, 18% APY</h2>
            <p className="text-base font-medium mb-[10px]">
              Available for staking
            </p>
            <p className="text-base font-medium mb-[10px]">-.-- zEO</p>
            <button className="w-[100%] mx-auto h-[40px] rounded-full bg-white/20 text-sm font-bold">
              Stake
            </button>
            <p className="text-base font-medium mb-[10px]">Staked amount</p>
            <p className="text-base font-medium mb-[10px]">-.-- zEO</p>
            <button className="w-[100%] mx-auto h-[40px] rounded-full bg-white/20 text-sm font-bold">
              Withdraw
            </button>
            <p className="text-base font-medium mb-[10px]">Staking rewards</p>
            <p className="text-base font-medium mb-[10px]">-.-- zEO</p>
            <p className="text-base font-medium mb-[10px] italic">
              Rewards withdrawn with the staking deposit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimStaking;
