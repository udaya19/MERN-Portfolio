import React from 'react';
import styles from './styles/projects.module.css'
const Projects = () => {
    return ( 
    <div className={styles.mainContainer}>
        <div className={styles.projects}>
            <h2 className={styles.title}>
                Projects
            </h2>
            <div className={styles.projectsCenter}>
                <div className={styles.singleProject}>
                    <div className={styles.singleProjectImg}>
                        <a href="https://udaya19.github.io/Portfolio_Udaya_Kiran/app.html">
                            <img
                                src='https://udaya19.github.io/Portfolio_Udaya_Kiran/image/macbook_mouse.jpg'
                                alt='Project'
                            />
                        </a>
                    </div>
                    <div className={styles.singleProjectInfo}>
                        <h3>Static Portfolio Website</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic dolore, officia expedita dolorum consequuntur excepturi incidunt consectetur earum nisi sapiente nostrum inventore rerum asperiores sed eum voluptatum delectus cum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
}
 
export default Projects;