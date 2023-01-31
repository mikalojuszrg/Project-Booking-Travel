import { useState } from "react";
import BackgroundWrapper from "../../components/BackgroundWrapper/BackgroundWrapper";
import BigCarousel from "../../components/BigCarousel/BigCarousel";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import SubscribeModal from "../../components/SubscriptionModal/SubscribeModal";

const HomePage = () => {
  return (
    <BackgroundWrapper>
      <Header />
      <SubscribeModal />
      <HeroSection />
      <BigCarousel />
    </BackgroundWrapper>
  );
};

export default HomePage;
