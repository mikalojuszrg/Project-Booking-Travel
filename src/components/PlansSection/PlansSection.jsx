import { useState, useEffect } from "react";
import { plansData } from "../../consts/PlansData";
import PlanCard from "../PlanCard/PlanCard";
import styles from "./PlansSection.module.scss";

const PlansSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [planSelection, setPlanSelection] = useState([...plansData]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((selectedIndex + 1) % planSelection.length);
      const movedItem = planSelection.slice(-1)[0];
      setPlanSelection([movedItem, ...planSelection.slice(0, -1)]);
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedIndex, planSelection]);

  return (
    <section className={styles.container}>
      <h2 className={styles.container__heading}>Check our plans</h2>
      <div className={styles.container__cards}>
        {planSelection.map((plan, index) => (
          <PlanCard
            key={plan.name}
            {...plan}
            selected={index === selectedIndex}
          ></PlanCard>
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
