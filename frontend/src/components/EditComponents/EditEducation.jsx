import React from "react";
import styles from "../AdminComponents/styles/admin.module.css";
import { Link } from "react-router-dom";
const EditEducation = () => {
  return (
    <div className={styles.edit}>
      <div className={styles.mainContainer}>
        <div className={styles.sameComponent}>
          <div className={styles.sameForm}>
            <form action="">
              <h3 className={styles.updated}>Updated</h3>
              <label htmlFor="editEducation">Education</label>
              <input type="text" id="editEducation" />
              <div className={styles.btns}>
                <button type="submit">Update Item</button>
                <Link to="/admin">
                  <button className={styles.cancelBtn}>Cancel</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEducation;
