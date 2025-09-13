"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation"; 

const Navbar = () => {
  const pathname = usePathname();
  const currentActive =
    pathname === "/privacy-policy" || pathname === "/terms-of-use"
      ? "/legal"
      : pathname;
  const [activeLink, setActiveLink] = useState(currentActive);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLegalDropdownOpen, setIsLegalDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
 useEffect(() => {
    const newActive =
      pathname === "/privacy-policy" || pathname === "/terms-of-use"
        ? "/legal"
        : pathname;
    setActiveLink(newActive);
  }, [pathname]);

  const toggleLegalDropdown = () => {
    setIsLegalDropdownOpen(!isLegalDropdownOpen);
  };
  
   useEffect(() => {
    const sections = [
      { id: "home", path: "/" },
      { id: "buy-coins", path: "/buy-coins" },
      { id: "referral", path: "/referral" },
      { id: "about-us", path: "/about-us" },
      { id: "key-features", path: "/key-features" },
      { id: "tokenomics", path: "/tokenomics" },
      { id: "roadmap", path: "/roadmap" },
    ];

    const handleScroll = () => {
      let current = activeLink;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section agar thoda bhi viewport me hai
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            current = section.path;
          }
        }
      }
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial load pe bhi check ho jaye

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-black text-white h-[88px] fixed top-0 left-0 right-0 w-full z-50">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center h-full px-[20px] lg:px-[65px]">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Link href="/#home" onClick={() => setActiveLink("/")}>
            <Image
              src="/images/home/logo.svg"
              alt="Zeo"
              width={82}
              height={60}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Navbar Links (Desktop) */}
        <div className="hidden md:flex space-x-8 border-b border-transparent h-full">
          <Link
            href="/#home"
            className={`relative h-full flex justify-center items-center ${
              activeLink === "/"
                ? " !font-bold text-sm xl:text-lg"
                : "text-[#FFFFFF] text-xs xl:text-base !font-light"
            }`}
            onClick={() => setActiveLink("/")}
          >
            Home
            {activeLink === "/" && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
            )}
          </Link>
          <Link
            href="/#buy-coins"
            className={`relative h-full flex justify-center items-center ${
              activeLink === "/buy-coins"
                ? " !font-bold text-sm xl:text-lg"
                : "text-[#FFFFFF] text-xs xl:text-base !font-light"
            }`}
            onClick={() => setActiveLink("/buy-coins")}
          >
            Buy Coins
            {activeLink === "/buy-coins" && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
            )}
          </Link>
          <Link
            href="/#referral"
            className={`relative h-full flex justify-center items-center ${
              activeLink === "/referral"
                ? " !font-bold text-sm xl:text-lg"
                : "text-[#FFFFFF] text-xs xl:text-base !font-light"
            }`}
            onClick={() => setActiveLink("/referral")}
          >
            Referral
            {activeLink === "/referral" && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
            )}
          </Link>

          <Link
            href="/#about-us"
            className={`relative h-full flex justify-center items-center ${
              activeLink === "/about-us"
                ? " !font-bold text-sm xl:text-lg"
                : "text-[#FFFFFF] text-xs xl:text-base !font-light"
            }`}
            onClick={() => setActiveLink("/about-us")}
          >
            About Us
            {activeLink === "/about-us" && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
            )}
          </Link>
          <Link
            href="/#key-features"
            className={`relative h-full flex justify-center items-center ${
              activeLink === "/key-features"
                ? " !font-bold text-sm xl:text-lg"
                : "text-[#FFFFFF] text-xs xl:text-base !font-light"
            }`}
            onClick={() => setActiveLink("/key-features")}
          >
            Key Features
            {activeLink === "/key-features" && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
            )}
          </Link>
          <Link
            href="/#tokenomics"
            className={`relative h-full flex justify-center items-center ${
              activeLink === "/tokenomics"
                ? " !font-bold text-sm xl:text-lg"
                : "text-[#FFFFFF] text-xs xl:text-base !font-light"
            }`}
            onClick={() => setActiveLink("/tokenomics")}
          >
            Tokenomics
            {activeLink === "/tokenomics" && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
            )}
          </Link>
          <Link
            href="/#roadmap"
            className={`relative h-full flex justify-center items-center ${
              activeLink === "/roadmap"
                ? " !font-bold text-sm xl:text-lg"
                : "text-[#FFFFFF] text-xs xl:text-base !font-light"
            }`}
            onClick={() => setActiveLink("/roadmap")}
          >
            Roadmap
            {activeLink === "/roadmap" && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
            )}
          </Link>

          <Link
            href="/faq"
            className={`relative h-full flex justify-center items-center ${
              activeLink === "/faq"
                ? " !font-bold text-sm xl:text-lg"
                : "text-[#FFFFFF] text-xs xl:text-base !font-light"
            }`}
            onClick={() => setActiveLink("/faq")}
          >
            FAQ
            {activeLink === "/faq" && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
            )}
          </Link>
          <div
            className="relative h-full flex justify-center items-center"
            onMouseEnter={toggleLegalDropdown}
            onMouseLeave={toggleLegalDropdown}
          >
            <Link
              href="#"
              className={`cursor-pointer relative h-full flex justify-center items-center ${
                activeLink === "/legal"
                  ? " !font-bold text-sm xl:text-lg"
                  : "text-[#FFFFFF] text-xs xl:text-base !font-light"
              }`}
            >
              Legal
              {activeLink === "/legal" && (
                <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
              )}
            </Link>
            {isLegalDropdownOpen && (
              <div className="absolute top-full  bg-[#0E1D32] shadow-lg z-10 h-[100px] w-[106px] flex flex-col justify-center items-center">
                <Link
                  href="/privacy-policy"
                  className="block  py-2 text-sm text-center text-white"
                  onClick={() => setActiveLink("/legal")}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-use"
                  className="block py-2 text-sm text-center text-white"
                  onClick={() => setActiveLink("/legal")}
                >
                  Terms Of Use
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/coming-soon"
            className={`relative h-full flex justify-center items-center ${
              activeLink === "/claim-staking"
                ? " !font-bold text-sm xl:text-lg"
                : "text-[#FFFFFF] text-xs xl:text-base !font-light"
            }`}
            onClick={() => setActiveLink("/claim-staking")}
          >
            Claim & Staking
            {activeLink === "/claim-staking" && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <GiHamburgerMenu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black min-h-[calc(100vh-88px)] flex flex-col justify-start gap-[5px] absolute top-[88px] left-0 w-full text-center border-t border-gray-500">
          <Link
            href="/#home"
            className="block text-base text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => {
              setActiveLink("/");
              setIsMobileMenuOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            href="/#buy-coins"
            className="block text-base text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => {
              setActiveLink("/buy-coins");
              setIsMobileMenuOpen(false);
            }}
          >
            Buy Coins
          </Link>
          <Link
            href="/#referral"
            className="block text-base text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => {
              setActiveLink("/referral");
              setIsMobileMenuOpen(false);
            }}
          >
            Referral
          </Link>

          <Link
            href="/#about-us"
            className="block text-base text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => {
              setActiveLink("/about-us");
              setIsMobileMenuOpen(false);
            }}
          >
            About Us
          </Link>
          <Link
            href="/#key-features"
            className="block text-base text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => {
              setActiveLink("/key-features");
              setIsMobileMenuOpen(false);
            }}
          >
            Key Features
          </Link>
          <Link
            href="/#tokenomics"
            className="block text-base text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => {
              setActiveLink("/tokenomics");
              setIsMobileMenuOpen(false);
            }}
          >
            Tokenomics
          </Link>
          <Link
            href="/#roadmap"
            className="block text-base text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => {
              setActiveLink("/roadmap");
              setIsMobileMenuOpen(false);
            }}
          >
            Roadmap
          </Link>

          <Link
            href="/faq"
            className="block text-base text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => {
              setActiveLink("/faq");
              setIsMobileMenuOpen(false);
            }}
          >
            FAQ
          </Link>
          <div className="relative" onClick={toggleLegalDropdown}>
            <span
              href=""
              className="block text-base text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            >
              Legal
            </span>
            {isLegalDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-black border border-blue-500 rounded-lg shadow-lg z-10">
                <Link
                  href="/privacy-policy"
                  onClick={() => {
                    setActiveLink("/legal");
                    setIsMobileMenuOpen(false);
                  }}
                  className="block px-4 py-2 text-white hover:bg-gray-700 border-b border-dashed border-blue-500"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-use"
                  onClick={() => {
                    setActiveLink("/legal");
                    setIsMobileMenuOpen(false);
                  }}
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  Terms Of Use
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/coming-soon"
            className="block text-base text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => {
              setActiveLink("/claim-staking");
              setIsMobileMenuOpen(false);
            }}
          >
            Claim & Staking
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
