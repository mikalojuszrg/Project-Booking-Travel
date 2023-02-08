import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../Button/Button";
import styles from "./ContactForm.module.scss";
import tripPicture from "./assets/trip.jpg";
import { postComment } from "../../utils/commentFetch";
import { validateEmail } from "../../utils/commentFetch";

const ContactForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    postComment(values);
    resetForm();
    setSubmitting(false);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.container__heading}>Leave us a comment</h1>
      <div>
        <Formik
          initialValues={{
            email: "",
            comment: "",
          }}
          validate={async (values) => {
            const errors = {};

            if (!values.email) {
              errors.email = "Required";
            }

            if (!values.comment) {
              errors.comment = "Required";
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
          {({ isSubmitting }) => (
            <Form className={styles.container__form}>
              <div>
                <Field type="email" name="email" placeholder="email" />
                <ErrorMessage
                  className={styles.container__error}
                  name="email"
                  component="div"
                />
              </div>
              <div>
                <Field
                  as="textarea"
                  name="comment"
                  placeholder="Share what's on your mind"
                />
                <ErrorMessage
                  className={styles.container__error}
                  name="comment"
                  component="div"
                />
              </div>

              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div className={styles.container__illustration}>
        <img src={tripPicture} alt="travel" />
      </div>
    </section>
  );
};

export default ContactForm;
