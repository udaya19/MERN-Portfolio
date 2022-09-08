import React from 'react';
import styles from './styles/education.module.css'
const Education = () => {
    return ( 
    <div className={styles.mainContainer}>
        <div className={styles.education}>
            <h2 className={styles.title}>Education</h2>
            <div className={styles.educationCenter}>
                <div className={styles.singleEducation}>
                    <p>
                        Secondary High School- NSM Public School Vijayawada Andhra Pradesh
                    </p>
                </div>
                <div className={styles.singleEducation}>
                    <p>
                        Senior Secondary High School- Happy Valley School Agiripalli Andhra Pradesh
                    </p>
                </div>
                <div className={styles.singleEducation}>
                    <p>
                        B.Tech-Computer Science Engineering from BML Munjal University
                    </p>
                </div>
            </div>
        </div>
    </div> 
    );
}
 
export default Education;