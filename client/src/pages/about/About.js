import React from "react";
import resume from "../../assets/resume.pdf";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.aboutTitle}>About Me</h2>
        <p className={styles.aboutText}>
        👋 Hey there! I'm Andrick, a code wizard on a mission to sprinkle tech magic everywhere! 💻✨

🚀 I'm fluent in programming languages and speak fluent emoji too! When the code finally clicks, I do a little victory dance. 💃💻

🌌 Space geek at heart, give me a sci-fi movie or mind-boggling space facts, and I'm over the moon! 🌠🚀

🌮 Oh, and let's taco 'bout my love for, well, tacos. They're my kryptonite! 🌮❤️

💡 Let's team up, talk tech, explore the cosmos, and maybe invent something awesome together!

Connect with me and let's make the digital world a more exciting place! 🌟

Cheers,
Andrick 🌈
        </p>
        {/* <br></br> */}
        <h2 className={styles.skillTitle}>skills</h2>
        <div className={styles.skillsContainer}>
      
        <h2 className={styles.skillSubTitle}>languages:</h2>
        <p className={styles.skillList}>
          HTML5 - CSS3 - Javascript ES6+
        </p>
       
        <h2 className={styles.skillSubTitle}>Frameworks & Libraries:</h2>
        <p className={styles.skillList}>
          Frontend:  React - Handlebars - Bootstrap - Material UI
        </p>
        <p className={styles.skillList}> 
          Backend:  Node - Express - Apollo GraphQL - Mongoose - Sequelize - RESTful APIs - AJAX 
        </p>
      
        <h2 className={styles.skillSubTitle}>Databases:</h2>
        <p className={styles.skillList}>
          MongoDB - MySQL - IndexedDB
        </p>
      
        <h2 className={styles.skillSubTitle}>Tools:</h2>
        <p className={styles.skillList}>
          Git - Heroku - GitHub - VS Code - NPM - Jest - MVC Paradigm - Agile Developement
        </p>
      
        <h2 className={styles.skillSubTitle}>Currently Learning:</h2>
        <p className={styles.skillList}>
          React Native - Redux - Typescript
        </p>
      
        {/* <p className={styles.skillsList}>

          HTML - CSS - Javascript ES6 - MERN - Apollo GraphQL - Bootstrap -
          Material UI - Bootstrap - Handlebars - RESTful APIs - AJAX - RESTful
          APIs - Git Flow - Heroku - GitHub - VS Code - NPM - Jest - MongoDB -
          Mongoose - IDB - PWAs - MVC Paradigm - Agile Developement - SQ - MySQL
          Workbench - Sequelize (Currently learning: React Native, Redux, and ) */}
        </div>
       <div className={styles.resumeContainer}>
        <a className={styles.resume} href={resume} download>
          Download My Resume (PDF)
        </a>
        </div>
      </div>
    </div>
  );
}
