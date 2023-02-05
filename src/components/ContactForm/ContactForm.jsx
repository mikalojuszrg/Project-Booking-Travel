import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <section>
      <form className={styles.container__form}></form>
      <div className={styles.container__illustration}></div>
    </section>
  );
};

export default ContactForm;
