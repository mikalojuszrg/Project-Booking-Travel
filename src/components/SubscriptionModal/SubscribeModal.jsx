import React, { useContext, useState } from "react";
import * as Yup from "yup";
import { GrClose, GrCheckmark } from "react-icons/gr";
import { SubscriptionContext } from "../../contexts/SubscriptionContext";
import styles from "./SubscribeModal.module.scss";
import Button from "../Button/Button";
import mountainPicture from "./assets/mountain.jpg";
import { postSubscription, validateEmail } from "../../utils/subscriptionFetch";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikInput from "../FormikInput/FormikInput";

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

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is not valid")
      .required("Required")
      .test("email-exists", "Email already exists", async (value) => {
        const emailExists = await validateEmail(value);
        return !emailExists;
      }),
  });

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
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitted }) => (
                <Form className={styles.modal__form}>
                  <FormikInput type="email" name="email" placeholder="email" />
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
