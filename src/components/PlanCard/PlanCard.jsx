import styles from "./PlanCard.module.scss";

const PlanCard = ({ name, onClick, image, description }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <h3 className={styles.card__name}>{name}</h3>
      <p className={styles.card__description}>{description}</p>
      <img src={image} alt="plan" className={styles.card__image} />
    </div>
  );
};

export default PlanCard;
