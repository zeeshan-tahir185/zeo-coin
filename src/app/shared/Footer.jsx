import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#07011E] text-white">
      <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[65px] py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start text-center md:text-left gap-10">
          {/* Left - Logo & Socials */}
          <div className="flex flex-col items-center md:items-start gap-4 flex-1">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <img
                src="/images/home/logo.svg" // replace with your actual logo path
                alt="Zeo Logo"
                className="w-[80px] h-auto"
              />
              <p className="text-sm">It’s all you ever need</p>
              <div className="w-[50px] border-t border-white mt-2"></div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-4 flex-wrap justify-center md:justify-start">
              <img src="/images/home/icon1.png" alt="icon1" className="w-[32px] h-[32px] cursor-pointer hover:opacity-70" />
              <img src="/images/home/icon2.png" alt="icon2" className="w-[32px] h-[32px] cursor-pointer hover:opacity-70" />
              <img src="/images/home/icon3.png" alt="icon3" className="w-[32px] h-[32px] cursor-pointer hover:opacity-70" />
              <img src="/images/home/icon4.png" alt="icon4" className="w-[32px] h-[32px] cursor-pointer hover:opacity-70" />
              <img src="/images/home/icon5.png" alt="icon5" className="w-[32px] h-[32px] cursor-pointer hover:opacity-70" />
              <img src="/images/home/icon6.png" alt="icon6" className="w-[32px] h-[32px] cursor-pointer hover:opacity-70" />
              <img src="/images/home/icon7.png" alt="icon7" className="w-[32px] h-[32px] cursor-pointer hover:opacity-70" />
              <img src="/images/home/icon8.png" alt="icon8" className="w-[32px] h-[32px] cursor-pointer hover:opacity-70" />
              <img src="/images/home/icon9.png" alt="icon9" className="w-[32px] h-[32px] cursor-pointer hover:opacity-70" />
            </div>
          </div>

          {/* Right - Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1 justify-items-center md:justify-items-start">
            <a href="#" className="hover:text-gray-400">About Us</a>
            <a href="#" className="hover:text-gray-400">FAQ</a>
            <a href="#" className="hover:text-gray-400">Blog</a>
            <a href="#" className="hover:text-gray-400">Whitepaper</a>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-10 gap-4">
          <p>© Zeo Coins 2025. All rights reserved</p>
          <div className="flex gap-3">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
