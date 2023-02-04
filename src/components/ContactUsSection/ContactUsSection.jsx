import styles from "./ContactUsSection.module.scss";
import Button from "../Button/Button";
import contactIllustration from "./assets/contact.png";

const ContactUsSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container__text}>
        <h3>Have some questions?</h3>
        <Button variant="primary">Contact us</Button>
      </div>
      <div className={styles.container__visual}>
        <img src={contactIllustration} alt="contact" />
      </div>
    </section>
  );
};

export default ContactUsSection;
