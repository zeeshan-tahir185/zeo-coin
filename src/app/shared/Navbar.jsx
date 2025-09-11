"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { motion } from 'framer-motion' // Import Framer Motion for animations

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-black text-white h-[88px] fixed top-0 left-0 right-0 w-full z-50">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center h-full px-[20px] lg:px-[65px]">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Image src="/images/home/logo.svg" alt="Zeo" width={82} height={60} />
        </div>

        {/* Navbar Links (Desktop) */}
        <div className="hidden md:flex space-x-8 border-b border-transparent h-full">
          <Link 
            href="/" 
            className={`relative h-full flex justify-center items-center ${activeLink === '/' ? 'text-[#D1A03E] !font-bold text-sm xl:text-lg' : 'text-[#FFFFFF] text-xs xl:text-base !font-light'}`} 
            onClick={() => setActiveLink('/')}>
            Home
            {activeLink === '/' && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
            )}
          </Link>
          <Link 
            href="/#buy-coins" 
            className={`relative h-full flex justify-center items-center ${activeLink === '/buy-coins' ? 'text-[#D1A03E] !font-bold text-sm xl:text-lg' : 'text-[#FFFFFF] text-xs xl:text-base !font-light'}`} 
            onClick={() => setActiveLink('/buy-coins')}>
            Buy Coins
            {activeLink === '/buy-coins' && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
            )}
          </Link>
          <Link 
            href="/#referral" 
            className={`relative h-full flex justify-center items-center ${activeLink === '/referral' ? 'text-[#D1A03E] !font-bold text-sm xl:text-lg' : 'text-[#FFFFFF] text-xs xl:text-base !font-light'}`} 
            onClick={() => setActiveLink('/referral')}>
            Referral
            {activeLink === '/referral' && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
            )}
          </Link>
          <Link 
            href="/claim-staking" 
            className={`relative h-full flex justify-center items-center ${activeLink === '/claim-staking' ? 'text-[#D1A03E] !font-bold text-sm xl:text-lg' : 'text-[#FFFFFF] text-xs xl:text-base !font-light'}`} 
            onClick={() => setActiveLink('/claim-staking')}>
            Claim & Staking
            {activeLink === '/claim-staking' && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
            )}
          </Link>
          <Link 
            href="/#about-us" 
            className={`relative h-full flex justify-center items-center ${activeLink === '/about-us' ? 'text-[#D1A03E] !font-bold text-sm xl:text-lg' : 'text-[#FFFFFF] text-xs xl:text-base !font-light'}`} 
            onClick={() => setActiveLink('/about-us')}>
            About Us
            {activeLink === '/about-us' && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
            )}
          </Link>
          <Link 
            href="/#key-features" 
            className={`relative h-full flex justify-center items-center ${activeLink === '/key-features' ? 'text-[#D1A03E] !font-bold text-sm xl:text-lg' : 'text-[#FFFFFF] text-xs xl:text-base !font-light'}`} 
            onClick={() => setActiveLink('/key-features')}>
            Key Features
            {activeLink === '/key-features' && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
            )}
          </Link>
          <Link 
            href="/#tokenomics" 
            className={`relative h-full flex justify-center items-center ${activeLink === '/tokenomics' ? 'text-[#D1A03E] !font-bold text-sm xl:text-lg' : 'text-[#FFFFFF] text-xs xl:text-base !font-light'}`} 
            onClick={() => setActiveLink('/tokenomics')}>
            Tokenomics
            {activeLink === '/tokenomics' && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
            )}
          </Link>
          <Link 
            href="/#roadmap" 
            className={`relative h-full flex justify-center items-center ${activeLink === '/roadmap' ? 'text-[#D1A03E] !font-bold text-sm xl:text-lg' : 'text-[#FFFFFF] text-xs xl:text-base !font-light'}`} 
            onClick={() => setActiveLink('/roadmap')}>
            Roadmap
            {activeLink === '/roadmap' && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
            )}
          </Link>
          <Link 
            href="/#blog" 
            className={`relative h-full flex justify-center items-center ${activeLink === '/blog' ? 'text-[#D1A03E] !font-bold text-sm xl:text-lg' : 'text-[#FFFFFF] text-xs xl:text-base !font-light'}`} 
            onClick={() => setActiveLink('/blog')}>
            Blog
            {activeLink === '/blog' && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[4px] bg-[#D1A03E] rounded-[4px]"></span>
            )}
          </Link>
          <Link 
            href="/faq" 
            className={`relative h-full flex justify-center items-center ${activeLink === '/faq' ? 'text-[#D1A03E] !font-bold text-sm xl:text-lg' : 'text-[#FFFFFF] text-xs xl:text-base !font-light'}`} 
            onClick={() => setActiveLink('/faq')}>
            FAQ
            {activeLink === '/faq' && (
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
        <div
          className="md:hidden bg-black min-h-[calc(100vh-88px)] flex flex-col justify-between absolute top-[88px] left-0 w-full text-center border-t border-gray-500"
          
        >
          <Link 
            href="/" 
            className="block text-xl text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => { setActiveLink('/'); setIsMobileMenuOpen(false); }}>
            Home
          </Link>
          <Link 
            href="/#buy-coins" 
            className="block text-xl text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => { setActiveLink('/buy-coins'); setIsMobileMenuOpen(false); }}>
            Buy Coins
          </Link>
          <Link 
            href="/#referral" 
            className="block text-xl text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => { setActiveLink('/referral'); setIsMobileMenuOpen(false); }}>
            Referral
          </Link>
          <Link 
            href="/claim-staking" 
            className="block text-xl text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => { setActiveLink('/claim-staking'); setIsMobileMenuOpen(false); }}>
            Claim & Staking
          </Link>
          <Link 
            href="/#about-us" 
            className="block text-xl text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => { setActiveLink('/about-us'); setIsMobileMenuOpen(false); }}>
            About Us
          </Link>
          <Link 
            href="/#key-features" 
            className="block text-xl text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => { setActiveLink('/key-features'); setIsMobileMenuOpen(false); }}>
            Key Features
          </Link>
          <Link 
            href="/#tokenomics" 
            className="block text-xl text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => { setActiveLink('/tokenomics'); setIsMobileMenuOpen(false); }}>
            Tokenomics
          </Link>
          <Link 
            href="/#roadmap" 
            className="block text-xl text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => { setActiveLink('/roadmap'); setIsMobileMenuOpen(false); }}>
            Roadmap
          </Link>
          <Link 
            href="/#blog" 
            className="block text-xl text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => { setActiveLink('/blog'); setIsMobileMenuOpen(false); }}>
            Blog
          </Link>
          <Link 
            href="/faq" 
            className="block text-xl text-white py-2 px-4 hover:bg-[#D1A03E] rounded-lg transition-all"
            onClick={() => { setActiveLink('/faq'); setIsMobileMenuOpen(false); }}>
            FAQ
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
