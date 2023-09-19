import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";
import { useState } from "react";
import { useEffect } from "react";


function Footer() {
const [screenSize, setScreenSize] = useState(window.innerWidth);

useEffect(() => {
    window.addEventListener("resize", () => {
        setScreenSize(window.innerWidth);
    });
}, []);

const iconSize = screenSize > 600 ? 60 : 40;

    return (
        <div className={styles.footer}>
            <a
                  className={styles.github}
                  href="https://github.com/Paulsig007"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={iconSize} />
                </a>
                <a
                  className={styles.linkedin}
                  href="https://www.linkedin.com/in/andricksiegmund/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={iconSize} />
                </a>
        </div>
    )
}

export default Footer;