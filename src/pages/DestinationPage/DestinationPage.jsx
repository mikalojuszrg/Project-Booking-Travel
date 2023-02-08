import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styles from "./DestinationPage.module.scss";
import BackgroundWrapper from "../../components/BackgroundWrapper/BackgroundWrapper";
import Header from "../../components/Header/Header";
import SubscribeModal from "../../components/SubscriptionModal/SubscribeModal";
import TripPlanForm from "../../components/TripPlanForm/TripPlanFormNew";
import PlansSection from "../../components/PlansSection/PlansSection";
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
import { destinationData } from "../../consts/destinationData";

const DestinationPage = () => {
  const { destination } = useParams();
  const selectedDestinationThumbnail = destinationData
    .filter((data) => data.destination === destination)
    .map((data) => data.thumbnail)[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BackgroundWrapper>
      <Header />
      <SubscribeModal />
      <h1 className={styles.page__heading}>Get ready for {destination}!</h1>
      <p className={styles.page__description}>
        Select a plan, insert details, and get the best trip deal ever.
      </p>
      <section className={styles.page__hero}>
        <TripPlanForm />
        <img
          src={selectedDestinationThumbnail}
          alt="destination"
          className={styles.page__thumbnail}
        />
      </section>
      <PlansSection />
      <ContactUsSection />
    </BackgroundWrapper>
  );
};

export default DestinationPage;
