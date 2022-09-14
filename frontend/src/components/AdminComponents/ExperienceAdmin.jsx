import React, { useState, useEffect } from "react";
import styles from "./styles/admin.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
const ExperienceAdmin = () => {
  const [experience, setExperience] = useState();
  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        const response = (await axios.get("/experience")).data;
        console.log(response);
        setExperience(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExperienceData();
  }, []);
  return (
    <div className={styles.sameComponent}>
      <div className={styles.sameForm}>
        <form action="">
          <h4>Experience component</h4>
          <label htmlFor="experience">Experience</label>
          <input type="text" />
          <button type="submit">Add Item</button>
        </form>
      </div>
      <div className={styles.sameItem}>
        {experience?.message.map((item) => (
          <div className={styles.aboutInfo}>
            <div className={styles.sameAdmin}>
              <div className={styles.icons}>
                <Link to="/editExperience">
                  <span className={styles.editIcon}>
                    <i className="fas fa-edit"></i>
                  </span>
                </Link>
                <span className={styles.deleteIcon}>
                  <i className="fas fa-trash"></i>
                </span>
              </div>
              <div className={styles.singleExperience}>
                <p>{item.experience}</p>
              </div>
              {/* <h3 className={styles.itemDeleteTab}></h3> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceAdmin;
