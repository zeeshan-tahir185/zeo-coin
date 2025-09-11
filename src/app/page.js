import React from 'react'
import HeroPage from './components/home/HeroPage'
import "@fontsource/mulish"; // Defaults to weight 400
import "@fontsource/mulish/400.css"; // Specify weight
import CoinPreSale from './components/home/CoinPreSale';
import AboutUs from './components/home/AboutUs';
import ZeoSuperApp from './components/home/ZeoSuperApp';
import KeyFeatures from './components/home/KeyFeatures';
import Tokenomics from './components/home/Tokenomics';
import RoadMap from './components/home/RoadMap';
import ContactUs from './components/home/ContactUs';
const page = () => {
  return (
    <div className=''>
      <HeroPage />
      <CoinPreSale />
      <AboutUs />
      <ZeoSuperApp />
      <KeyFeatures />
      <Tokenomics />
      <RoadMap />
      <ContactUs />
    </div>
  )
}

export default page
