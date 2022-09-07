import React from 'react';
import styles from './styles/about.module.css'
const About = () => {
    return ( 
    <div className={styles.mainContainer}>
        <div className={styles.about}>
            <div className={styles.aboutInfo}>
            <h2 className={styles.title}>About</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Natus nisi minus laudantium 
                    cupiditate architecto debitis iusto. Consequatur 
                    commodi eius repudiandae placeat perferendis ipsum 
                    sapiente? Delectus est doloribus qui deleniti neque.
                    Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Natus nisi minus laudantium 
                    cupiditate architecto debitis iusto. Consequatur 
                    commodi eius repudiandae placeat perferendis ipsum 
                    sapiente? Delectus est doloribus qui deleniti neque.
                </p>
            </div>
        </div>
    </div> 
    );
}
 
export default About;