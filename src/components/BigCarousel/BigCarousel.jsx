import { useState, useEffect, useMemo } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import tokyoImage from "../SmallCarousel/assets/Tokyo.jpg";
import baliImage from "../SmallCarousel/assets/Bali.jpg";
import londonImage from "../SmallCarousel/assets/London.jpg";
import Button from "../Button/Button";
import styles from "./BigCarousel.module.scss";

const BigCarousel = () => {
  const images = useMemo(() => [tokyoImage, baliImage, londonImage], []);
  const [counter, setCounter] = useState(0);
  const [activeImage, setActiveImage] = useState(images[counter]);

  console.log(counter);
  console.log(activeImage);

  useEffect(() => {
    setActiveImage(images[counter]);
  }, [counter, images]);

  const changeImage = () => {
    setCounter((prevValue) => {
      return prevValue + 1 >= images.length ? 0 : prevValue + 1;
    });
  };

  const activeCountry = () => {
    if (counter === 0) {
      return "Tokyo";
    } else if (counter === 1) {
      return "Bali";
    } else {
      return "London";
    }
  };

  return (
    <div className={styles.carousel}>
      <div>
        <h2 className={styles.carousel__heading}>Most famous places</h2>
        <p className={styles.carousel__description}>
          Recommended - <strong>{activeCountry()}</strong>
        </p>
      </div>
      <div className={styles.carousel__destinations}>
        <Button variant="tertiary" onClick={changeImage}>
          <FaAngleLeft />
        </Button>
        <img
          className={styles.carousel__image}
          src={activeImage}
          alt="destination"
        />
        <Button variant="tertiary" onClick={changeImage}>
          <FaAngleRight />
        </Button>
      </div>
    </div>
  );
};

export default BigCarousel;
