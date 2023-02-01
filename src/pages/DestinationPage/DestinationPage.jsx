import { useParams } from "react-router-dom";
import styles from "./DestinationPage.module.scss";
import BackgroundWrapper from "../../components/BackgroundWrapper/BackgroundWrapper";
import Header from "../../components/Header/Header";
import SubscribeModal from "../../components/SubscriptionModal/SubscribeModal";
import TripPlanForm from "../../components/TripPlanForm/TripPlanForm";

const DestinationPage = () => {
  const { destination } = useParams();

  return (
    <BackgroundWrapper>
      <Header />
      <SubscribeModal />
      <h1 className={styles.page__heading}>Get ready for {destination}!</h1>
      <p className={styles.page__description}>
        Select a plan, insert details, and get the best trip deal ever.
      </p>
      <TripPlanForm />
    </BackgroundWrapper>
  );
};

export default DestinationPage;
