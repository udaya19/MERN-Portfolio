import React from 'react';
import styles from './styles/footer.module.css'
import { Link } from 'react-router-dom';
import {scroller} from 'react-scroll';
const Footer = () => {
    return ( 
    <div>
        {/* <div className={styles.mainTitle}>
            <h2  ></h2>
        </div> */}
        <div className={styles.mainContact}>
            <div className={styles.contact}>
                <div className={styles.contactCenter}>
                    <div className={styles.contactLinks}>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>About</Link></li>
                            <li><Link to='/'>Education</Link></li>
                            <li><Link to='/'>Projects</Link></li>
                            <li><Link to='/'>Experience</Link></li>
                    </div>
                </div>
                <div className={styles.contactCenterMedia}>
                    <h3>Contact Me on Social Media</h3>
                    <div className={styles.contactMedia}>
                        <li>
                            <a href="https://www.instagram.com/udaya_kiran_gonuguntla/" className={styles.instagramIcon}>
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/gonuguntla-udaya-kiran-469751202/" className={styles.linkedInIcon}>
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <p>Copyrights © Developed by Gonuguntla Udaya Kiran </p>
            </div>
        </div>
    </div> 
    );
}
 
export default Footer;