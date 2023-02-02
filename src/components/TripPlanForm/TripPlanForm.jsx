import React, { useState } from "react";
import Calendar from "react-calendar";
import Button from "../Button/Button";
import "react-calendar/dist/Calendar.css";
import styles from "./TripPlanForm.module.scss";

const TripPlanForm = () => {
  const [dates, setDates] = useState([new Date(), new Date()]);
  const [calendarVisible, setCalendarVisible] = useState(false);

  return (
    <>
      <form className={styles.form}>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <select>
          <option>Relaxation</option>
        </select>
        <select>
          <option>Number of people</option>
        </select>
        <div>
          <input
            type="text"
            value={dates
              .map((date) =>
                date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              )
              .join(" - ")}
            onClick={() => setCalendarVisible(!calendarVisible)}
          />
          {calendarVisible && (
            <div>
              <Calendar
                onChange={(newDates) => setDates(newDates)}
                selectRange={true}
                value={dates}
              />
            </div>
          )}
        </div>
        <Button variant="primary">Get your offer</Button>
      </form>
    </>
  );
};

export default TripPlanForm;
