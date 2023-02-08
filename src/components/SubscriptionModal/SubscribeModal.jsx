import React, { useContext, useState } from "react";
import { GrClose, GrCheckmark } from "react-icons/gr";
import { SubscriptionContext } from "../../contexts/SubscriptionContext";
import styles from "./SubscribeModal.module.scss";
import Button from "../Button/Button";
import mountainPicture from "./assets/mountain.jpg";
import { postSubscription, validateEmail } from "../../utils/subscriptionFetch";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SubscribeModal = () => {
  const [subscribed, setSubscribed] = useState(false);
  const { showSubscription, toggleSubscription } =
    useContext(SubscriptionContext);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    postSubscription(values);
    resetForm();
    setSubmitting(false);
    setSubscribed(true);
  };

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
            <Formik
              initialValues={{ email: "" }}
              validate={async (values) => {
                const errors = {};

                if (!values.email) {
                  errors.email = "required";
                }

                try {
                  const emailExists = await validateEmail(values.email);
                  if (emailExists) {
                    errors.email = "Email already exists";
                  }
                } catch (error) {
                  throw error;
                }

                return errors;
              }}
              onSubmit={handleSubmit}
            >
              {({ isSubmitted }) => (
                <Form className={styles.modal__form}>
                  <Field type="email" name="email" placeholder="email" />
                  <ErrorMessage
                    className={styles.modal__error}
                    name="email"
                    component="div"
                  />
                  <Button
                    variant="secondary"
                    type="submit"
                    disabled={isSubmitted}
                  >
                    Subscribe
                  </Button>
                </Form>
              )}
            </Formik>
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
