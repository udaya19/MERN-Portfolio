import React, { useState } from "react";
import styles from "./styles/login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import Register from './Register';
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/login", {
        email: user.email,
        password: user.password,
      });
      console.log(res.data);
      setUser({ name: "", email: "", password: "" });
      setErr(res.data.message);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className={styles.login}>
        <div className={styles.mainContainer}>
          <h3>Login for Admin</h3>
        </div>
        <div className={styles.loginCenter}>
          <form action="" onSubmit={loginSubmit}>
            <p>{err}</p>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              name="email"
              required="true"
              value={user.email}
              onChange={onChangeInput}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              name="password"
              required="true"
              value={user.password}
              onChange={onChangeInput}
            />
            <button type="submit" className={styles.loginBtn}>
              Login
            </button>
            <Link to="/">
              <button className={styles.loginBtn}>Home</button>
            </Link>
          </form>
        </div>
      </div>
      {/* <Register /> */}
    </div>
  );
};

export default Login;
