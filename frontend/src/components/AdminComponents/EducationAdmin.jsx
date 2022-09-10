import React from "react";
import styles from "./styles/admin.module.css";
import { Link } from "react-router-dom";
const EducationAdmin = () => {
  return (
    <div className={styles.sameComponent}>
      <div className={styles.sameForm}>
        <form>
          <h4>Education Component</h4>
          <label htmlFor="text">Education</label>
          <input type="text" />
          <button type="submit">Add Items</button>
        </form>
      </div>
      <div className={styles.sameItem}>
        <div className={styles.aboutInfo}>
          <div className={styles.sameAdmin}>
            <div className={styles.icons}>
              <Link to="/editEducation">
                <span className={styles.editIcon}>
                  <i className="fas fa-edit"></i>
                </span>
              </Link>
              <span className={styles.deleteIcon}>
                <i className="fas fa-trash"></i>
              </span>
            </div>
          </div>
          <div className={styles.singleEducation}>
            <p>Web development</p>
          </div>
          {/* <h3 className={styles.itemDeleteTab}>The message</h3> */}
        </div>
      </div>
    </div>
  );
};

export default EducationAdmin;
