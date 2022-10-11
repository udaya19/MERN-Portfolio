import React, { useEffect, useState } from "react";
import styles from "./styles/projects.module.css";
// import { Link } from "react-router-dom";
import axios from "axios";
const Projects = () => {
  const [projects, setProjects] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = (await axios.get("/projects")).data;
      console.log(res);
      setProjects(res);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.projects}>
        <h2 className={styles.title}>Projects</h2>

        <div className={styles.projectsCenter}>
          {projects?.projects?.map((item) => (
            <div className={styles.singleProject} key={item._id}>
              <div className={styles.singleProjectInfo}>
                <a href={item.link}>
                  <h3>{item.title}</h3>
                </a>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
