import React from 'react';
import styles from './styles/experience.module.css'
const Experience = () => {
    return ( 
    <div className={styles.mainContainer} >
        <div className={styles.experience}>
            <h2 className={styles.title} >
                Experience
            </h2>
            <div className={styles.experienceInfo}>
                <div className={styles.experienceInfoImage}>
                    <img 
                        src="https://media-exp1.licdn.com/dms/image/C510BAQHVRo-fARASEw/company-logo_200_200/0/1528631690276?e=1670457600&v=beta&t=CThIIWH-VkgJA-L-Hr72Pl9Uz2Od3Lh8axszTksA9XU" 
                        alt="logo" 
                    />
                </div>
                <div className={styles.experienceInfoCompanyName}>
                    <h3>Spotflock Technologies, Hyderabad India</h3>
                        <p className={styles.experienceInfoDetails}>
                            <b className={styles.detailsHeading}>Role:</b>Full Stack Developer Intern <br />
                            <b className={styles.detailsHeading}>Duration:</b>30th May 2022 to 15th July 2022 <br />
                            <b className={styles.detailsHeading}>Work Done:</b>Bug fixes in angular website and also built a static webpage
                        </p>
                </div>
            </div>
        </div>
    </div> 
    );
}
 
export default Experience;