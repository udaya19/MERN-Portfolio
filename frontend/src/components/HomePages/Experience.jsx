import React from "react";
import styles from "./styles/experience.module.css";
const Experience = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.experience}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.experienceInfo}>
          <div className={styles.experienceInfoCompanyName}>
            <p className={styles.experienceInfoDetails}>
              Worked as a full stack developer intern at Spotflock Technologies,
              Hyderabad from 30th May 2022 to 15th July 2022.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
