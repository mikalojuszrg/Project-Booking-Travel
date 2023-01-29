import { useState, useEffect, useMemo } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import tokyoImage from "./assets/Tokyo.jpg";
import baliImage from "./assets/Bali.jpg";
import londonImage from "./assets/London.jpg";
import Button from "../Button/Button";
import styles from "./Carousel.module.scss";

const Carousel = () => {
  const images = useMemo(() => [tokyoImage, baliImage, londonImage], []);
  const [counter, setCounter] = useState(0);
  const [activeImage, setActiveImage] = useState(images[counter]);

  console.log(counter);

  useEffect(() => {
    setActiveImage(images[counter]);
  }, [counter, images]);

  const changeImage = () => {
    setCounter((prevValue) => {
      return prevValue + 1 >= images.length ? 0 : prevValue + 1;
    });
  };

  return (
    <div className={styles.carousel}>
      <img
        className={styles.carousel__image}
        src={activeImage}
        alt="destination"
      />
      <Button variant="tertiary" onClick={changeImage}>
        <AiOutlineArrowRight />
      </Button>
    </div>
  );
};

export default Carousel;
