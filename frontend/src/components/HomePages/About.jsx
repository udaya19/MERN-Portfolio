import React, { useEffect, useState } from "react";
import styles from "./styles/about.module.css";
import axios from "axios";
const About = () => {
  const [about, setAbout] = useState();
  useEffect(() => {
    try {
      const fetchAbout = async () => {
        const response = (await axios.get("/about")).data;
        console.log(response);
        setAbout(response);
      };
      fetchAbout();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.about}>
        <div className={styles.aboutInfo}>
          <h2 className={styles.title}>About</h2>
          {about?.message.map((item) => (
            <p key={item._id}>{item.about}</p>
          ))}
          {/* <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nisi
            minus laudantium cupiditate architecto debitis iusto. Consequatur
            commodi eius repudiandae placeat perferendis ipsum sapiente?
            Delectus est doloribus qui deleniti neque. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Natus nisi minus laudantium
            cupiditate architecto debitis iusto. Consequatur commodi eius
            repudiandae placeat perferendis ipsum sapiente? Delectus est
            doloribus qui deleniti neque.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default About;
