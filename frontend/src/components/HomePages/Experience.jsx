import React, { useState, useEffect } from "react";
import styles from "./styles/experience.module.css";
import axios from "axios";
const Experience = () => {
  const [experience, setExperience] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = (await axios.get("/experience")).data;
      console.log(response);
      setExperience(response);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.experience}>
        <h2 className={styles.title}>Experience</h2>
        {experience?.message.map((item) => (
          <div className={styles.experienceInfo} key={item._id}>
            <div className={styles.experienceInfoCompanyName}>
              <p className={styles.experienceInfoDetails}>{item.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
