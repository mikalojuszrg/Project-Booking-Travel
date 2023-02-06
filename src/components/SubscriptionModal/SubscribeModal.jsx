import React, { useContext, useState } from "react";
import { GrClose, GrCheckmark } from "react-icons/gr";
import { SubscriptionContext } from "../../contexts/SubscriptionContext";
import styles from "./SubscribeModal.module.scss";
import Button from "../Button/Button";
import mountainPicture from "./assets/mountain.jpg";
import { postSubscription } from "../../utils/postSubscription";
import { useEffect } from "react";

const SubscribeModal = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [emailList, setEmailList] = useState([]);
  const { showSubscription, toggleSubscription } =
    useContext(SubscriptionContext);

  const [email, setEmail] = useState("");

  const content = { email: email };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailList.find((email) => email === content.email)) {
      alert("You already subscribed");
    } else {
      postSubscription(content);
      setSubscribed(true);
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/subscriptions")
      .then((response) => response.json())
      .then((resp) => setEmailList(resp.map((rsp) => rsp.email)));
  }, [subscribed]);

  const handleClose = () => {
    toggleSubscription();
    setSubscribed(false);
  };

  return (
    <aside
      className={showSubscription ? styles["modal--on"] : styles["modal--off"]}
    >
      <section className={styles.modal__block}>
        {subscribed ? (
          <div className={styles["modal__subscribe-text"]}>
            <p>Subscribed! Get ready for the best trips of your life!</p>
            <GrCheckmark />
          </div>
        ) : (
          <div className={styles.modal__text}>
            <h1 className={styles.modal__heading}>NEWSLETTER</h1>
            <h2 className={styles.modal__subheading}>Subscribe now</h2>
            <form className={styles.modal__form} onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Insert your email!"
                required
              />
              <Button variant="secondary" type="submit">
                Subscribe
              </Button>
            </form>
            <div className={styles.modal__logo}>Travel</div>
          </div>
        )}
        <div className={styles.modal__visual}>
          <img src={mountainPicture} alt="mountain" />
        </div>
        <div className={styles.modal__button}>
          <Button variant="tertiary" onClick={handleClose}>
            <GrClose />
          </Button>
        </div>
      </section>
    </aside>
  );
};

export default SubscribeModal;
