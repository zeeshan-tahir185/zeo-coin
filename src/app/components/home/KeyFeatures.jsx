"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const features = [
  {
    title: ["Social", "Commerce"],
    desc: "Zeo makes shopping social. Buyers join with friends, communities, or AI agents to negotiate directly with sellers. This group-buying model unlocks better prices, higher engagement, and faster conversions, creating a win-win marketplace where everyone benefits from collective power.",
  },
  {
    title: ["AI", "Agents"],
    desc: "AI agents shop on behalf of users, analyzing preferences, comparing offers, and negotiating with seller-side agents. They deliver personalized deals, save time, and ensure smarter purchases, while sellers benefit from reliable demand, faster sales, and actionable insights that improve conversion rates.",
  },
  {
    title: ["Progressive", "Coin"],
    desc: "Zeo Coin powers loyalty and growth. Users earn tokens from group purchases, while staking and token burning enhance long-term value. Offering stability with upside potential, Zeo Coin delivers real-time utility, turning every transaction into both a reward and investment.",
  },
  {
    title: ["Payments", "& Remittances"],
    desc: "The Zeo Wallet enables seamless digital payments and remittances. Users can transfer funds, redeem rewards, or pay for services effortlessly. Combining blockchain rewards with secure transactions, it reduces friction, builds trust, and powers the financial backbone of the Zeo ecosystem.",
  },
  {
    title: ["One Stop", "Shop"],
    desc: "Zeo makes shopping social. Buyers join with friends, communities, or AI agents to negotiate directly with sellers. This group-buying model unlocks better prices, higher engagement, and faster conversions, creating a win-win marketplace where everyone benefits from collective power.",
  },
];

// Duplicate cards for infinite illusion
const extendedFeatures = [...features, ...features, ...features]; // Triple for smoother looping

const KeyFeatures = () => {
  const [currentIndex, setCurrentIndex] = useState(features.length); // Start from middle copy
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardWidth, setCardWidth] = useState(434); // default desktop (410 + 24)

  const totalCards = extendedFeatures.length;

  // swipe/drag tracking
  const startX = useRef(0);
  const isDragging = useRef(false);

  // Update card width based on screen size
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 768) {
        setCardWidth(window.innerWidth - 48); // full width minus padding
      } else {
        setCardWidth(434); // desktop fixed
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
    setIsTransitioning(true);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  // Handle infinite loop reset
  useEffect(() => {
    if (currentIndex >= totalCards - features.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - features.length);
      }, 500);
    } else if (currentIndex < features.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex + features.length);
      }, 500);
    }
  }, [currentIndex, totalCards]);

  // drag/swipe handlers
  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const diff = e.touches[0].clientX - startX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
      isDragging.current = false;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const diff = e.clientX - startX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="mask_bg" id="key-features">
      <div className="max-w-[1440px] mx-auto w-full py-16 pl-6 md:pl-16 pr-6 md:pr-0 flex flex-col md:flex-row items-start gap-10 overflow-hidden">
        {/* Left Heading */}
        <div className="w-full md:w-1/4 text-white mt-0 md:mt-[150px]">
          <h2 className="text-2xl md:text-5xl font-extrabold leading-snug">
            Key <br /> Features
          </h2>
          <div className="w-[146px] h-[4px] bg-[#D1A03E] mt-3"></div>
        </div>

        {/* Right Carousel */}
        <div
          className="w-full md:w-3/4 relative overflow-hidden user-select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Cards Container */}
          <div
            className={`flex ${
              isTransitioning ? "transition-transform duration-500 ease-in-out" : ""
            }`}
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
            }}
          >
            {extendedFeatures.map((item, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-md shadow-md py-4 md:pt-[72px] px-[35px] mx-3 flex-shrink-0 h-auto md:h-[610px]"
                style={{
                  width: `${cardWidth - 24}px`,
                }}
              >
                <h3 className="text-xl md:text-5xl text-[#22304C] font-extrabold mb-2 leading-snug">
                  {item.title.map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx !== item.title.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>

                <div className="w-[146px] rounded-[4px] h-[4px] bg-[#FF7F00] mb-4"></div>
                <p className="text-sm md:text-lg font-semibold text-[#161616] leading-[30px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Dots + Arrows */}
          <div className="flex items-center justify-center gap-3 sm:gap-[100px] mt-6">
            {/* Prev Arrow */}
            <button
              onClick={prevSlide}
              className="text-white p-2 hover:text-orange-400 transition"
            >
              <FaArrowLeftLong size={28} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {features.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full ${
                    idx === currentIndex % features.length ? "bg-white" : "bg-gray-500"
                  }`}
                ></div>
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              className="text-white p-2 hover:text-orange-400 transition"
            >
              <FaArrowRightLong size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
