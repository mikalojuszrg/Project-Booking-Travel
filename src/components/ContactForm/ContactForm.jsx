import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../Button/Button";
import styles from "./ContactForm.module.scss";
import tripPicture from "./assets/trip.jpg";
import { postComment } from "../../utils/postComment";

const ContactForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    postComment(values);
    resetForm();
    setSubmitting(false);
  };

  return (
    <section>
      <div className={styles.container__form}>
        <Formik
          initialValues={{
            email: "",
            comment: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.email) {
              errors.email = "Required";
            }

            if (!values.comment) {
              errors.comment = "Required";
            }
            console.log(errors);
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                <Field as="textarea" name="comment" />
                <ErrorMessage name="comment" component="div" />
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
