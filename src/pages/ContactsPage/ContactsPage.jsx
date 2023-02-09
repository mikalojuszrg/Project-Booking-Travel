import { useEffect } from "react";
import BackgroundWrapper from "../../components/BackgroundWrapper/BackgroundWrapper";
import ContactForm from "../../components/ContactForm/ContactForm";
import Header from "../../components/Header/Header";
import SubscribeModal from "../../components/SubscriptionModal/SubscribeModal";

const ContactsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BackgroundWrapper>
      <Header />
      <SubscribeModal />
      <ContactForm />
    </BackgroundWrapper>
  );
};

export default ContactsPage;
