import BackgroundWrapper from "../../components/BackgroundWrapper/BackgroundWrapper";
import BigCarousel from "../../components/BigCarousel/BigCarousel";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";

const HomePage = () => {
  return (
    <BackgroundWrapper>
      <Header />
      <HeroSection />
      <BigCarousel />
    </BackgroundWrapper>
  );
};

export default HomePage;
