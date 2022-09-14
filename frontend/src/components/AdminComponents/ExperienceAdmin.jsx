import React, { useState, useEffect } from "react";
import styles from "./styles/admin.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
const ExperienceAdmin = () => {
  const [experienceData, setExperienceData] = useState();
  const [experience, setExperience] = useState();
  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        const response = (await axios.get("/experience")).data;
        console.log(response);
        setExperienceData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExperienceData();
  }, []);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("/experience/add", { experience });
      console.log(response);
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.sameComponent}>
      <div className={styles.sameForm}>
        <form action="" onSubmit={handleSubmit}>
          <h4>Experience component</h4>
          <label htmlFor="experience">Experience</label>
          <input type="text" onChange={(e) => setExperience(e.target.value)} />
          <button type="submit">Add Item</button>
        </form>
      </div>
      <div className={styles.sameItem}>
        {experienceData?.message.map((item) => (
          <div className={styles.aboutInfo} key={item._id}>
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
