import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";


function Footer() {
    return (
        <div className={styles.footer}>
            <a
                  className={styles.github}
                  href="https://github.com/Paulsig007"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={50} />
                </a>
                <a
                  className={styles.linkedin}
                  href="https://www.linkedin.com/in/andricksiegmund/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={50} />
                </a>
        </div>
    )
}

export default Footer;