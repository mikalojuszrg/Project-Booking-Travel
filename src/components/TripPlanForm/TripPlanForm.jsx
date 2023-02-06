import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Button from "../Button/Button";
import "react-calendar/dist/Calendar.css";
import styles from "./TripPlanForm.module.scss";
import { plansData } from "../../consts/PlansData";
import { postBooking } from "../../utils/postBooking";

const TripPlanForm = () => {
  const [dates, setDates] = useState([new Date(), new Date()]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [bookingList, setBookingList] = useState([]);
  const [isBooked, setIsBooked] = useState(false);

  const plansAvailable = plansData.map((plan) => plan.name);

  const userTripinfo = {
    name: userName,
    email: userEmail,
    selectedPlan: selectedPlan,
    numberOfPeople: numberOfPeople,
    dates: dates,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookingList.find((email) => email === userTripinfo.email)) {
      alert("You already booked");
    } else {
      postBooking(userTripinfo);
      setUserName("");
      setUserEmail("");
      setSelectedPlan("");
      setNumberOfPeople("");
      setDates([]);
      setIsBooked(true);
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((response) => response.json())
      .then((resp) => setBookingList(resp.map((rsp) => rsp.email)));
  }, []);

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          value={userName}
          type="text"
          placeholder="Your name"
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          value={userEmail}
          type="email"
          placeholder="Your email"
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <select required onChange={(e) => setSelectedPlan(e.target.value)}>
          <option>Select your trip plan</option>
          {plansAvailable.map((plan) => {
            return <option>{plan}</option>;
          })}
        </select>
        <select required onChange={(e) => setNumberOfPeople(e.target.value)}>
          <option>Number of people</option>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => {
            return <option>{number}</option>;
          })}
        </select>
        <div style={{ position: "relative" }}>
          <input
            required
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
            <div style={{ position: "absolute" }}>
              <Calendar
                onChange={(newDates) => setDates(newDates)}
                selectRange={true}
                value={dates}
              />
            </div>
          )}
        </div>

        {isBooked ? (
          <p className={styles.form__bookedText}>
            Thanks for booking! We will get in touch soon.
          </p>
        ) : (
          <Button variant="primary">Get your offer</Button>
        )}
      </form>
    </>
  );
};

export default TripPlanForm;
