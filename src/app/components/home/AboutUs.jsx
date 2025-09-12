import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#0D042E] w-full min-h-[30vh] pt-[30px] md:pt-[100px]" id="about-us">
      <div className=" flex flex-col gap-[50px] md:gap-[100px]">
        <div className="relative max-w-[1440px] w-full mx-auto px-[20px] lg:px-[65px] z-10">
          <h2 className="text-white text-3xl md:text-[52px] ">About Us </h2>
          <span className="border-[3px] border-[#BD9442] absolute bottom-[-20px] sm:bottom-[-45px] w-[100px] md:w-[182px]"></span>
        </div>
        <div className=" w-full px-[20px] lg:px-[65px] bg-[#241E4E] min-h-[587px] ">
          <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-[50px] py-4 md:py-0">
            <img src="/images/home/about.svg" alt="" className="w-[100%] lg:w-[55%] " />
            <div className="flex flex-col gap-[20px] text-[#C5C5C5] w-full lg:w-[45%] text-left mb-5 md:mb-0">
                <p>Zeo Super App is an AI Agentic Social Commerce platform built to transform the way people shop, connect, and engage online. Today, ecommerce is often a solo experience where buyers miss out on the benefits of collective purchasing power. Zeo changes this by making shopping social and collaborative, where users and their AI agents can form groups, connect with sellers, and unlock better deals together.</p>
                <p>To reward participation, users earn Zeo Coins, our blockchain based digital rewards, whenever group purchases are completed. These tokens not only build loyalty but also open up new value exchanges across the Zeo ecosystem.</p>
                <p>Beyond social shopping, Zeo brings entertainment, encrypted chats, and a wide range of everyday services into one connected platform. Users can book cabs, flights, and hotels, order food and groceries, make payments, send remittances, trade stocks, and even advertise, all powered by the Zeo Coins.</p>
                <p>
                  By combining commerce, community, and cutting edge technology, Zeo creates a dynamic marketplace that benefits both users and merchants while shaping the future of digital lifestyles.  
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
