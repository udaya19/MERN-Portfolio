import React from "react";
import styles from "./styles/admin.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const ProjectsAdmin = () => {
  const [projects, setProjects] = useState();
  const [projectsData, setProjectsData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = (await axios.get("/projects")).data;
      console.log(res);
      setProjects(res);
    };
    fetchData();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectsData({
      ...projectsData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const res = axios.post("/projects/add", { ...projectsData });
    console.log(res);
  };
  return (
    <div>
      <div className={styles.sameComponent}>
        <div className={styles.sameForm}>
          <form action="" onSubmit={handleSubmit}>
            <h4>Projects component</h4>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              required
              onChange={handleInputChange}
            />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              onChange={handleInputChange}
            ></textarea>
            <label htmlFor="link">Project Link</label>
            <input
              type="text"
              id="link"
              name="link"
              onChange={handleInputChange}
            />
            <button>Add Item</button>
          </form>
        </div>
      </div>
      <div className={styles.sameItem}>
        {projects?.projects.map((item) => (
          <div className={styles.aboutInfo} key={item._id}>
            <div className={styles.projectAdmin}>
              <div className={styles.icons}>
                <Link to="/editProject">
                  <span className={styles.editIcon}>
                    <i className="fas fa-edit"></i>
                  </span>
                </Link>
                <span className={styles.deleteIcon}>
                  <i className="fas fa-trash"></i>
                </span>
              </div>
              <div className={styles.singleProject}>
                <div className={styles.singleProjectInfo}>
                  <a href={item.link}>
                    <h3 className={styles.title}>{item.title}</h3>
                  </a>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsAdmin;
