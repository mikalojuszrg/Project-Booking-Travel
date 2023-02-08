import React, { useState, useEffect } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import Calendar from "react-calendar";
import Button from "../Button/Button";
import "react-calendar/dist/Calendar.css";
import styles from "./TripPlanForm.module.scss";
import { plansData } from "../../consts/PlansData";
import { postBooking } from "../../utils/postBooking";

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
  const [dates, setDates] = useState([new Date(), new Date()]);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [bookingList, setBookingList] = useState([]);
  const [isBooked, setIsBooked] = useState(false);

  const plansAvailable = plansData.map((plan) => plan.name);

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    // postReservation(values);
    // resetForm();
    // setSubmitting(false);
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          plan: "Select a plan",
          people: "Select a number people",
          dates: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = "Required";
          }

          if (!values.email) {
            errors.email = "Required";
          }

          if (!values.plan) {
            errors.plan = "Required";
          }

          if (!values.people) {
            errors.people = "Required";
          }

          if (!values.dates) {
            errors.dates = "Required";
          }
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div>
              <Field type="text" name="name" placeholder="name" />
              <ErrorMessage
                name="name"
                className={styles.form__error}
                component="div"
              />
            </div>
            <div>
              <Field type="email" name="email" placeholder="email" />
              <ErrorMessage
                name="email"
                className={styles.form__erorr}
                component="div"
              />
            </div>
            <div>
              <Field as="select" name="plan">
                {plansAvailable.map((plan) => (
                  <option key={plan} value={plan}>
                    {plan}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="plan"
                className={styles.form__error}
                component="div"
              />
            </div>
            <div>
              <Field as="select" name="people">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
                  <option value={number} key={number}>
                    {number}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="people"
                className={styles.form__error}
                component="div"
              />
            </div>
            <div>
              <Field name="dates" component={DatePicker} />
              <ErrorMessage
                name="dates"
                className={styles.form__error}
                component="div"
              />
            </div>
            <Button variant="primary" type="submit">
              Get an offer
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default TripPlanForm;
