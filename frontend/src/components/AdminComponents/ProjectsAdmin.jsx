import React, { useEffect, useState } from "react";
import styles from "./styles/admin.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
const ProjectsAdmin = () => {
  const [projects, setProjects] = useState();
  const [images, setImages] = useState();
  // const [projectsData, setProjectsData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = (await axios.get("/projects")).data;
      console.log(res);
      setProjects(res);
    };
    fetchData();
  }, []);
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file) return alert("No file exists");
      if (file.size > 1024 * 1024) {
        return alert("File size is too big");
      }
      if (file.type === "image/jpeg" && file.type === "image/png") {
        let formData = FormData();
        formData.append("file", file);
        const res = await axios.post("/upload", formData, {
          headers: { "content-type": "multipart/form-data" },
        });
        setImages(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDestroyImage = async () => {
    try {
      const res = await axios.delete("/destroy", {
        public_id: images.public_id,
      });
      setImages(false);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjects({ ...projects, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/projects/add", { ...projects, images });
      setImages(false);
    } catch (error) {
      console.log(error);
    }
  };
  const styleUpload = {
    display: images ? "block" : "none",
  };
  return (
    <div className={styles.sameComponent}>
      <div className={styles.sameForm}>
        <form action="" onSubmit={handleSubmit}>
          <h4>Projects component</h4>
          <label htmlFor="product_id">Id</label>
          <input
            id="product_id"
            type="text"
            name="product_id"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            onChange={handleInputChange}
            name="title"
            required
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            onChange={handleInputChange}
          ></textarea>
          <div className={styles.upload}>
            <input
              type="file"
              name="file"
              id="file_up"
              onChange={handleUpload}
              className={styles.fileUp}
            />
            <div className={styles.fileImg} style={styleUpload}>
              <img src={images ? images.url : ""} alt="" />
              <span onClick={handleDestroyImage}>X</span>
            </div>
          </div>
          <button>Add Item</button>
        </form>
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
                <div className={styles.singleProjectImg}>
                  <img src={images ? images.url : ""} alt="img" />
                </div>
                <div className={styles.singleProjectInfo}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
              {/* <h3 className={styles.itemDeleteTab}></h3> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsAdmin;
