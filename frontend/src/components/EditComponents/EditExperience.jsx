import React, { useState, useEffect } from "react";
import styles from "../AdminComponents/styles/admin.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const EditExperience = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [experience, setExperience] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = (await axios.get(`/experience/${params.id}`)).data;
      console.log(res);
      setExperience(res.experience.experience);
    };
    fetchData();
  }, [params.id]);
  const handleUpdate = async () => {
    try {
      const res = await axios.put(`/experience/update/${params.id}`, {
        experience,
      });
      navigate("/admin");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.edit}>
      <div className={styles.mainContainer}>
        <div className={styles.sameComponent}>
          <div className={styles.sameForm}>
            <form action="" onSubmit={handleUpdate}>
              <h3 className={styles.updated}>Updated</h3>
              <label htmlFor="editExperience">Experience</label>
              <input
                type="text"
                id="editExperience"
                value={experience}
                onChange={(e) => {
                  setExperience(e.target.value);
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

export default EditExperience;
