import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./HeroSection.module.scss";
import image from "./assets/peopleTravel.jpg";
import Button from "../Button/Button";
import SmallCarousel from "../SmallCarousel/SmallCarousel";

const HeroSection = () => {
  const [navigateTo, setNavigateTo] = useState(true);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 1024) {
        setNavigateTo(false);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [navigateTo]);

  return (
    <section className={styles.container}>
      <div className={styles.container__info}>
        <div>
          <h1 className={styles.container__heading}>
            <strong>Book an exclusive</strong> travel experience
          </h1>
          <p className={styles.container__description}>
            Each property is hand-picked, personally visited <br></br> and
            cannot be found elsewhere
          </p>
          <HashLink
            className={styles.container__hashLink}
            to={navigateTo ? "#planssection" : "#bigCarousel"}
            smooth
          >
            <Button variant="primary">Explore Destinations</Button>
          </HashLink>
        </div>
        <div className={styles.container__carousel}>
          <SmallCarousel />
        </div>
      </div>
      <div className={styles.container__illustration}>
        <img src={image} alt="people travel" />
      </div>
    </section>
  );
};

export default HeroSection;
