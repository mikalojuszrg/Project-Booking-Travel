import { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import { activeCountry } from "../../utils/activeCountry";
import Button from "../Button/Button";
import styles from "./SmallCarousel.module.scss";
import { destinationData } from "../../consts/destinationData";
import { generatePath, useNavigate } from "react-router-dom";
import { DESTINATION_PATH } from "../../routes/const";

const SmallCarousel = () => {
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
    <div className={styles.carousel}>
      <div>
        <h2>Most famous places</h2>
        <p>
          Recommended - <strong>{activeCountry(counter)}</strong>
        </p>
      </div>
      <div className={styles.carousel__destinations}>
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

export default SmallCarousel;
