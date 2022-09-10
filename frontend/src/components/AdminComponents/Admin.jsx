import React from "react";
import styles from "./styles/admin.module.css";
import AboutAdmin from "./AboutAdmin";
import EducationAdmin from "./EducationAdmin";
import ExperienceAdmin from "./ExperienceAdmin";
import ProjectsAdmin from "./ProjectsAdmin";

const Admin = () => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>Admin</h2>
      <div className={styles.adminCenter}>
        {/* AboutAdmin component */}
        <h4 className={styles.adminTitle}>About component</h4>
        <AboutAdmin />
        <hr style={{ border: "1px solid lightgrey" }} />
        {/* EducationAdmin component */}
        <h4 className={styles.adminTitle}>Education component</h4>
        <EducationAdmin />
        <hr style={{ border: "1px solid lightgrey" }} />
        {/* ProjectsAdmin component */}
        <h4 className={styles.adminTitle}>Projects component</h4>
        <ProjectsAdmin />
        <hr style={{ border: "1px solid lightgrey" }} />
        {/* ExperienceAdmin component */}
        <h4 className={styles.adminTitle}>Experience component</h4>
        <ExperienceAdmin />
      </div>
    </div>
  );
};

export default Admin;
