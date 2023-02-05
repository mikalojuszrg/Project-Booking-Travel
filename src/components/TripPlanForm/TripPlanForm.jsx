import React, { useState } from "react";
import Calendar from "react-calendar";
import Button from "../Button/Button";
import "react-calendar/dist/Calendar.css";
import styles from "./TripPlanForm.module.scss";
import { plansData } from "../../consts/PlansData";

const TripPlanForm = () => {
  const [dates, setDates] = useState([new Date(), new Date()]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [calendarVisible, setCalendarVisible] = useState(false);

  const plansAvailable = plansData.map((plan) => plan.name);

  const userTripinfo = {
    name: userName,
    email: userEmail,
    selectedPlan: selectedPlan,
    numberOfPeople: numberOfPeople,
    dates: dates,
  };

  console.log(userTripinfo);

  return (
    <>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Your name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your email"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <select onChange={(e) => setSelectedPlan(e.target.value)}>
          <option>Select your trip plan</option>
          {plansAvailable.map((plan) => {
            return <option>{plan}</option>;
          })}
        </select>
        <select onChange={(e) => setNumberOfPeople(e.target.value)}>
          <option>Number of people</option>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => {
            return <option>{number}</option>;
          })}
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
