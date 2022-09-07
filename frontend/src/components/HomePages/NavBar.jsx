import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/navbar.module.css';
const NavBar = () => {
    return ( 
    <div>
        <div className={styles.navContainer}>
            <nav>
                <div className={styles.logoBtn}>
                    <Link to='/'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className={styles.logoImg} alt="logo" />
                    </Link>
                    <div className='btn'>
                        <div className={styles.bar1}></div>
                        <div className={styles.bar2}></div>
                        <div className={styles.bar3}></div>
                    </div>
                </div>
                <div className={styles.linksContainer}>
                    <ul className={styles.links}>
                            <li><Link to='/' >Home</Link></li> 
                            <li><Link to='/' >About</Link></li> 
                            <li><Link to='/' >Education</Link></li> 
                            <li><Link to='/' >Experience</Link></li> 
                            <li><Link to='/' >Projects</Link></li> 
                            <li><Link to='/' >Contact</Link></li> 
                            <li><Link to='/' >Home</Link></li> 
                            <li className={styles.adminLi} ><Link to='/' >Admin</Link></li> 
                    </ul>
                </div>
            </nav>
        </div>
    </div> 
    );
}
 
export default NavBar;