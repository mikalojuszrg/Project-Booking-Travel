import React, { useContext, useState } from "react";
import { GrClose } from "react-icons/gr";
import { SubscriptionContext } from "../../contexts/SubscriptionContext";
import styles from "./SubscribeModal.module.scss";
import Button from "../Button/Button";
import mountainPicture from "./assets/mountain.jpg";
import { postSubscription } from "../../consts/postSubscription";

const SubscribeModal = () => {
  const { showSubscription, toggleSubscription } =
    useContext(SubscriptionContext);

  const [email, setEmail] = useState("");

  console.log(email);

  const content = { email: email };

  console.log(content);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/subscriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <aside
      className={showSubscription ? styles["modal--on"] : styles["modal--off"]}
    >
      <section className={styles.modal__block}>
        <div className={styles.modal__text}>
          <h1>NEWSLETTER</h1>
          <h2>Subscribe now</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Insert your email!"
              required
            />
            <Button variant="primary" type="submit">
              SUBSCRIBE
            </Button>
          </form>
        </div>
        <div className={styles.modal__visual}>
          <img src={mountainPicture} alt="mountain" />
        </div>
        <div className={styles.modal__button}>
          <Button variant="tertiary" onClick={toggleSubscription}>
            <GrClose />
          </Button>
        </div>
      </section>
    </aside>
  );
};

export default SubscribeModal;
