"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LiaTimesSolid } from "react-icons/lia";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only show on homepage
    if (pathname !== "/") return;

    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      if (sections.length >= 2) {
        const section2 = sections[0]; // Second section
        const rect = section2.getBoundingClientRect();

        // Hide notice when the bottom of the second section is out of view
        if (rect.bottom <= 0) {
          setVisible(false); // Hide without saving to localStorage
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false); // Hide without saving to localStorage
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 h-[88px] left-0 right-0 bg-[#140032] text-white px-6 md:px-[100px] py-4 flex items-center justify-between z-50 shadow-lg">
      <div className="w-[40%] sm:w-auto">
        <p className="font-bold text-[10px] sm:text-lg">Cookie Notice</p>
        <p className="text-[8px] sm:text-base text-white">
          We use cookies to improve your experience. Essential cookies will
          always be enabled for the site to function properly.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handleReject}
          className="w-[70px] sm:w-[113px] h-[40px] border border-gray-400 rounded-full text-sm hover:bg-gray-700 transition"
        >
          Reject
        </button>
        <button
          onClick={handleAccept}
          className="w-[70px] mr-[20px] sm:mr-0 sm:w-[113px] h-[40px] bg-white text-black rounded-full text-sm hover:bg-gray-200 transition"
        >
          Accept
        </button>
      </div>
      <button
        onClick={handleClose}
        className="absolute top-[15px] right-[15px] bg-white/20 w-[24px] h-[24px] flex justify-center items-center rounded-full text-white hover:text-gray-300 transition"
        aria-label="Close cookie notice"
      >
        <LiaTimesSolid size={15} />
      </button>
    </div>
  );
}