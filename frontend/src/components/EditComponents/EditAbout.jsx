import React, { useState, useEffect } from "react";
import styles from "../AdminComponents/styles/admin.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const EditAbout = () => {
  const [about, setAbout] = useState("");
  const [message, setMessage] = useState("");
  const [messageCond, setMessageCond] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    const fetchAboutId = async () => {
      try {
        const res = await (await axios.get(`/about/${params.id}`)).data;
        console.log(res);
        setAbout(res.about.about);
        setMessage(res.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAboutId();
  }, [params.id]);
  const updateAbout = async (e) => {
    e.preventDefault();
    const updateAbout = { about };
    const res = (await axios.put(`/about/update/${params.id}`, updateAbout))
      .data;
    // setMessage(res.message);
    setAbout(res);
    setMessageCond(true);
    setTimeout(() => {
      setMessageCond(false);
      navigate("/admin");
    }, 2000);
  };
  return (
    <div className={styles.edit}>
      <div className={styles.mainContainer}>
        <div className={styles.sameComponent}>
          <div className={styles.sameForm}>
            <form action="" onSubmit={updateAbout}>
              <h3 className={messageCond ? `${styles.updated}` : ""}>
                {message}
              </h3>
              <label htmlFor="editAbout">About</label>
              <textarea
                name="textarea"
                value={about}
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
                id="editAbout"
                cols="30"
                rows="10"
              ></textarea>
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

export default EditAbout;
