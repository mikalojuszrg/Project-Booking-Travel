import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import styles from "./TripPlanForm.module.scss";

const TripPlanForm = () => {
  const [startDate, setStartDate] = useState(Date.now());
  return (
    <form>
      <select>plan selection</select>
      <input type="text" placeholder="Your name" />
      <input type="email" placeholder="Your email" />
      <select>number of people</select>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </form>
  );
};

export default TripPlanForm;
