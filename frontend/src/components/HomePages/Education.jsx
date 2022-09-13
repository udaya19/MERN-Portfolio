import React from "react";
import styles from "./styles/education.module.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Education = () => {
  const [education, setEducation] = useState();
  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = (await axios.get("/education")).data;
        console.log(response);
        setEducation(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEducation();
  }, []);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.education}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.educationCenter}>
          <div className={styles.singleEducation}>
            {education?.message.map((item) => (
              <p key={item._id}>{item.education}</p>
            ))}
          </div>
          {/* <div className={styles.singleEducation}>
            <p>
              Senior Secondary High School- Happy Valley School Agiripalli
              Andhra Pradesh
            </p>
          </div>
          <div className={styles.singleEducation}>
            <p>
              B.Tech-Computer Science Engineering from BML Munjal University
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Education;
