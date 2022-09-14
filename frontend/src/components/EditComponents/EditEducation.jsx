import React, { useState, useEffect } from "react";
import styles from "../AdminComponents/styles/admin.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const EditEducation = () => {
  const navigation = useNavigate();
  const params = useParams();
  const [education, setEducation] = useState();
  useEffect(() => {
    const fetchEducation = async () => {
      const response = (await axios.get(`/education/${params.id}`)).data;
      console.log(response);
      setEducation(response.education.education);
    };
    fetchEducation();
  }, [params.id]);
  const updateEducation = async () => {
    try {
      const response = await (
        await axios.put(`/education/update/${params.id}`, { education })
      ).data;
      console.log(response);
      setEducation(response);
      setTimeout(() => {
        navigation("/admin");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.edit}>
      <div className={styles.mainContainer}>
        <div className={styles.sameComponent}>
          <div className={styles.sameForm}>
            <form action="" onSubmit={updateEducation}>
              <h3 className={styles.updated}>Updated</h3>
              <label htmlFor="editEducation">Education</label>
              <input
                type="text"
                id="editEducation"
                value={education}
                onChange={(e) => {
                  setEducation(e.target.value);
                }}
              />
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
