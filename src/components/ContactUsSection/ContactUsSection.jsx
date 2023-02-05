import styles from "./ContactUsSection.module.scss";
import Button from "../Button/Button";
import contactIllustration from "./assets/contact.png";

const ContactUsSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container__text}>
        <h3>Have some questions?</h3>
        <p>
          If you have any questions or concerns regarding your travel plans,
          feel free to reach out to us. Our dedicated team is always available
          to assist you and ensure that your trip is a success.
        </p>
        <Button variant="primary">Contact us</Button>
      </div>
      <div className={styles.container__visual}>
        <img src={contactIllustration} alt="contact" />
      </div>
    </section>
  );
};

export default ContactUsSection;
