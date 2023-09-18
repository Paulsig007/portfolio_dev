import React from "react";
import resume from "../../assets/resume.pdf";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.aboutTitle}>It's a pleasure to meet you!</h2>
        <p className={styles.aboutText}>
          Greetings! I'm not just a full stack software engineer; I'm an
          enthusiastic explorer of the boundless realm where learning and
          creation intertwine. From the very roots of my fascination with
          technology's potential to unravel challenges, I've embarked on a
          journey that's ignited an insatiable passion for development.
          <br></br>
          <br></br>
          My sights are set on weaving my
          narrative into the vibrant tapestry of the tech community. I'm ready to
          dive into tomorrow's solutions, as I strive to make every
          line of code a testament to my unwavering commitment to progress.
        </p>
        {/* <br></br> */}
        <h2 className={styles.skillTitle}>My Skills</h2>
        <div className={styles.skillsContainer}>
      
        <h2 className={styles.skillSubTitle}>Languages:</h2>
        <p className={styles.skillList}>
          HTML - CSS - Javascript ES7
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
          Git Flow - Heroku - GitHub - VS Code - NPM - Jest - MVC Paradigm - Agile Developement
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
