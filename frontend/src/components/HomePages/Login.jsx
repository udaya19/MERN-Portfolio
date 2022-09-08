import React from 'react';
import styles from './styles/login.module.css'
import { Link } from 'react-router-dom';
const Login = () => {
    return ( 
    <div>
        <div className={styles.login}>
            <div className={styles.mainContainer}>
                <h3>Login for Admin</h3>
            </div>
            <div className={styles.loginCenter}>
                <form action="">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder='Enter email' name='email' required='true' />
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='Enter password' name='password' required='true' />
                    <button type='submit' className={styles.loginBtn} >Submit</button>
                    <Link to='/'><button className={styles.loginBtn} >Back To Home</button></Link>
                </form>
            </div>
        </div>
    </div> 
    );
}
 
export default Login;