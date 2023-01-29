import styles from "./HeroSection.module.scss";
import image from "./assets/peopleTravel.jpg";

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container__info}>yoyoy</div>
      <div className={styles.container__illustration}>
        <img src={image} alt="people travel" />
      </div>
    </section>
  );
};

export default HeroSection;
