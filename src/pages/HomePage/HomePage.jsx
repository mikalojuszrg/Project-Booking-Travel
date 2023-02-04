import BackgroundWrapper from "../../components/BackgroundWrapper/BackgroundWrapper";
import BigCarousel from "../../components/BigCarousel/BigCarousel";
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import PlansSection from "../../components/PlansSection/PlansSection";
import SubscribeModal from "../../components/SubscriptionModal/SubscribeModal";

const HomePage = () => {
  return (
    <BackgroundWrapper>
      <Header />
      <SubscribeModal />
      <HeroSection />
      <BigCarousel />
      <PlansSection />
      <ContactUsSection />
    </BackgroundWrapper>
  );
};

export default HomePage;
