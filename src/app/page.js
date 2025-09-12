import React from "react";
import HeroPage from "./components/home/HeroPage";
import "@fontsource/mulish";
import "@fontsource/mulish/400.css";
import CoinPreSale from "./components/home/CoinPreSale";
import AboutUs from "./components/home/AboutUs";
import ZeoSuperApp from "./components/home/ZeoSuperApp";
import KeyFeatures from "./components/home/KeyFeatures";
import Tokenomics from "./components/home/Tokenomics";
import RoadMap from "./components/home/RoadMap";
import ContactUs from "./components/home/ContactUs";
import CookieNotice from "./components/CookieNotice";

const Page = () => {
  return (
    <div>
      <section>
        <HeroPage />
      </section>
      <section>
        <CoinPreSale />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <ZeoSuperApp />
      </section>
      <section>
        <KeyFeatures />
      </section>
      <section>
        <Tokenomics />
      </section>
      <section>
        <RoadMap />
      </section>
      <section>
        <ContactUs />
      </section>
      <CookieNotice />
    </div>
  );
};

export default Page;