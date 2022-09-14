import React from "react";
import styles from "./styles/admin.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const EducationAdmin = () => {
  const [educationData, setEducationData] = useState();
  const [education, setEducation] = useState();
  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = (await axios.get("/education")).data;
        console.log(response);
        setEducationData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEducation();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/education/add", { education });
    console.log(res);
    window.location.reload(true);
  };
  const handleDelete = async (id) => {
    const response = await axios.delete(`/education/delete/${id}`);
    console.log(response);
    window.location.reload(true);
  };
  return (
    <div className={styles.sameComponent}>
      <div className={styles.sameForm}>
        <form onSubmit={handleSubmit}>
          <h4>Education Component</h4>
          <label htmlFor="text">Education</label>
          <input
            type="text"
            onChange={(e) => {
              setEducation(e.target.value);
            }}
          />
          <button type="submit">Add Items</button>
        </form>
      </div>
      <div className={styles.sameItem}>
        {educationData?.message.map((item) => (
          <div className={styles.aboutInfo} key={item._id}>
            <div className={styles.sameAdmin}>
              <div className={styles.icons}>
                <Link to={`/editEducation/${item._id}`}>
                  <span className={styles.editIcon}>
                    <i className="fas fa-edit"></i>
                  </span>
                </Link>
                <span className={styles.deleteIcon}>
                  <i
                    className="fas fa-trash"
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                    style={{ cursor: "pointer" }}
                  ></i>
                </span>
              </div>
            </div>
            <div className={styles.singleEducation}>{item.education}</div>
            {/* <h3 className={styles.itemDeleteTab}>The message</h3> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationAdmin;
