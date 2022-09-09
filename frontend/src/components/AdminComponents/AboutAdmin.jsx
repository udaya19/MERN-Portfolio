import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/admin.module.css";
const AboutAdmin = () => {
  return (
    <div className={styles.sameComponent}>
      <div className={styles.sameForm}>
        <form action="">
          <h4>About Component</h4>
          <label htmlFor="text">About</label>
          <textarea name="textarea" id="text" cols="30" rows="10"></textarea>
          <button type="submit">Add text</button>
        </form>
      </div>
      <div className={styles.sameItem}>
        <div className={styles.aboutInfo}>
          <div className={styles.icons}>
            <Link to="/edit">
              <span className={styles.editIcon}>
                <i className="fas fa-edit"></i>
              </span>
            </Link>
            <span className={styles.deleteIcon}>
              <i className="fas fa-trash"></i>
            </span>
          </div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, velit
          debitis, pariatur dicta magni eligendi assumenda beatae iure
          praesentium modi qui molestiae fuga fugiat dolorum iusto? Possimus
          ipsum vitae quasi!
        </div>
      </div>
      <h3 className={styles.itemDeleteTab}>Item Deleted</h3>
    </div>
  );
};

export default AboutAdmin;
