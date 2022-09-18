import React from "react";
import styles from "./styles/header.module.css";
// import Particles from 'react-tsparticles';
import TypeWriter from "typewriter-effect";
// import {loadFull} from 'tsparticles';
// import { useCallback } from 'react';
const Header = () => {
  // const particlesInit = useCallback(async (engine) => {
  //     console.log(engine);
  //     await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //     await console.log(container);
  // }, []);
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.particle}>
          {/* <Particles 
                   className={styles.particleComp}
                   height='400px'
                   width='100%'
                   init={particlesInit}
                   loaded={particlesLoaded}
                   options={{
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                    },
                    particles: {
                        color: {
                          value: "#ffffff",
                        },
                        links: {
                          color: "#ffffff",
                          distance: 150,
                          enable: true,
                          opacity: 0.5,
                          width: 1,
                        },
                        collisions: {
                          enable: true,
                        },
                        move: {
                          direction: "none",
                          enable: true,
                          outModes: {
                            default: "bounce",
                          },
                          random: false,
                          speed: 6,
                          straight: false,
                        },
                        number: {
                          density: {
                            enable: false,
                            value_area: 800,
                          },
                          value: 100,
                        },
                        opacity: {
                          value: 0.5,
                        },
                        shape: {
                          type: "circle",
                        },
                        // size: {
                        //   value: { min: 1, max: 5 },
                        // },
                      },
                   }}
                 /> */}
          <div className={styles.fullName}>
            <h1>
              <TypeWriter
                options={{
                  strings: ["Udaya", "Kiran"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.personalInfo}>
        <div className={styles.personalInfoCenter}>
          <div className={styles.personalInfoDetails}>
            <div className={styles.info}>
              <label htmlFor="name">Full Name:</label>
              <h4>Gonuguntla Udaya Kiran</h4>
            </div>
            <div className={styles.info}>
              <label htmlFor="occupation">Occupation:</label>
              <h4>
                Web Deve<b>love</b>per
              </h4>
            </div>
            <div className={styles.info}>
              <label htmlFor="email">Email:</label>
              <h4>gudaya2002@gmail.com</h4>
            </div>
          </div>
          <div className={styles.personalInfoImage}>
            <img
              src="https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-01-1024.png"
              alt="Profile"
              width="100px"
              height="100px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
