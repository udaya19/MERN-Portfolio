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
        {education?.message.map((item) => (
          <div className={styles.educationCenter} key={item._id}>
            <div className={styles.singleEducation}>
              <p>{item.education}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
