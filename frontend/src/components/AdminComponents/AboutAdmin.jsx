import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/admin.module.css";
import axios from "axios";
const AboutAdmin = () => {
  const [about, setAbout] = useState("");
  const [aboutData, setAboutData] = useState();
  const [message, setMessage] = useState("");
  const [messageCond, setMessageCond] = useState(false);
  useEffect(() => {
    try {
      const fetchAbout = async () => {
        const response = (await axios.get("/about")).data;
        console.log(response);
        setAboutData(response);
      };
      fetchAbout();
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(about);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/about/add ", { about });
    window.location.reload(true);
    console.log(res);
  };
  const deleteAbout = async (id) => {
    try {
      const res = await axios.delete(`/about/delete/${id}`);
      console.log(res);
      window.location.reload(true);
      setMessageCond(true);
      setMessage(`${res.data.message}`);
      setTimeout(() => {
        setMessageCond(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.sameComponent}>
      <div className={styles.sameForm}>
        <form action="" onSubmit={handleSubmit}>
          <h4>About Component</h4>
          <label htmlFor="text">About</label>
          <textarea
            name="textarea"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            id="text"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Add text</button>
        </form>
      </div>
      <div className={styles.sameItem}>
        {aboutData?.message.map((item) => (
          <div className={styles.aboutInfo} key={item._id}>
            <div className={styles.icons}>
              <Link to={`/edit/${item._id}`}>
                <span className={styles.editIcon}>
                  <i className="fas fa-edit"></i>
                </span>
              </Link>
              <span className={styles.deleteIcon}>
                <i
                  className="fas fa-trash"
                  onClick={() => {
                    deleteAbout(item._id);
                  }}
                  style={{ cursor: "pointer" }}
                ></i>
              </span>
            </div>
            {item.about}
          </div>
        ))}
        <h3
          className={
            messageCond
              ? `${styles.newDelete} ${styles.itemDeleteTab}`
              : `${styles.itemDeleteTab}`
          }
        >
          {message}
        </h3>
      </div>
    </div>
  );
};

export default AboutAdmin;
