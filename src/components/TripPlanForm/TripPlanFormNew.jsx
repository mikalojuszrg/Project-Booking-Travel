import React, { useState } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import Calendar from "react-calendar";
import Button from "../Button/Button";
import "react-calendar/dist/Calendar.css";
import styles from "./TripPlanForm.module.scss";
import { plansData } from "../../consts/PlansData";
import { postBooking } from "../../utils/postBooking";
import FormikInput from "../FormikInput/FormikInput";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  plan: Yup.string().required("Required"),
  people: Yup.string().required("Required"),
});

const DatePicker = ({ field, form }) => {
  const [dates, setDates] = useState([new Date(), new Date()]);
  const handleChange = (value) => {
    let selectedDates = dates.slice();
    if (selectedDates.length === 2) {
      selectedDates = [value];
    } else {
      selectedDates.push(value);
    }
    setDates(selectedDates);
    form.setFieldValue(field.name, selectedDates);
  };

  return (
    <>
      <Calendar onChange={handleChange} value={dates} />
    </>
  );
};

const TripPlanForm = () => {
  const plansAvailable = plansData.map((plan) => plan.name);

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    postBooking(values);
    resetForm();
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          plan: "",
          people: "",
          dates: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <FormikInput type="text" name="name" placeholder="Name" />
            <FormikInput type="email" name="email" placeholder="Email" />
            <Field as="select" name="plan">
              <option value="" disabled>
                Choose plan
              </option>
              {plansAvailable.map((plan) => (
                <option key={plan} value={plan} name="plan">
                  {plan}
                </option>
              ))}
            </Field>

            <Field as="select" name="people">
              <option value="" disabled>
                Choose number of people
              </option>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
                <option value={number} key={number} name="people">
                  {number}
                </option>
              ))}
            </Field>

            <div>
              <Field name="dates" component={DatePicker} />
              <ErrorMessage
                name="dates"
                className={styles.form__error}
                component="div"
              />
            </div>
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Get an offer
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default TripPlanForm;
