import React from "react";
import styles from "./styles/admin.module.css";
import { Link } from "react-router-dom";
const ExperienceAdmin = () => {
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
              <p>
                Worked as a full stack developer intern at Spotflock
                Technologies, Hyderabad from 30th May 2022 to 15th July 2022.
              </p>
            </div>
            {/* <h3 className={styles.itemDeleteTab}></h3> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAdmin;
