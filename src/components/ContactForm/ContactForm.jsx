import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikInput from "../FormikInput/FormikInput";
import Button from "../Button/Button";
import styles from "./ContactForm.module.scss";
import tripPicture from "./assets/trip.jpg";
import { postComment } from "../../utils/commentFetch";

const ContactForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    postComment(values);
    resetForm();
    setSubmitting(false);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email is not vaid").required("Required"),
    comment: Yup.string().required("Required"),
  });

  return (
    <section className={styles.container}>
      <h1 className={styles.container__heading}>Leave us a comment</h1>
      <div>
        <Formik
          initialValues={{
            email: "",
            comment: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.container__form}>
              <FormikInput type="email" name="email" placeholder="Email" />
              <div className={styles.container__comment}>
                <Field
                  as="textarea"
                  name="comment"
                  placeholder="Share what's on your mind"
                />
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
