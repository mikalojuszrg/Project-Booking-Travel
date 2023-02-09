import { useState, useEffect } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Button from "../Button/Button";
import styles from "./BigCarousel.module.scss";
import { useNavigate, generatePath } from "react-router-dom";
import { DESTINATION_PATH } from "../../routes/const";
import { activeCountry } from "../../utils/activeCountry";
import { destinationData } from "../../consts/destinationData";

const BigCarousel = () => {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
  const destinationPath = generatePath(DESTINATION_PATH, {
    destination: activeCountry(counter),
  });
  const destinationThumbnails = destinationData.map(
    (destination) => destination.thumbnail
  );

  const images = destinationThumbnails;
  const [activeImage, setActiveImage] = useState(images[counter]);

  useEffect(() => {
    setActiveImage(images[counter]);
  }, [counter, images]);

  const changeImage = () => {
    setCounter((prevValue) => {
      return prevValue + 1 >= images.length ? 0 : prevValue + 1;
    });
  };

  return (
    <div className={styles.carousel} id="bigCarousel">
      <div>
        <h2 className={styles.carousel__heading}>Most famous places</h2>
        <p className={styles.carousel__description}>
          Recommended - <strong>{activeCountry(counter)}</strong>
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
          onClick={() => {
            navigate(destinationPath);
          }}
        />
        <Button variant="tertiary" onClick={changeImage}>
          <FaAngleRight />
        </Button>
      </div>
    </div>
  );
};

export default BigCarousel;
