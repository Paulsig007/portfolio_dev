import React from "react";
import resume from "../../assets/resume.pdf";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.aboutTitle}>About Me</h2>
        <p className={styles.aboutText}>
        Hey there! My name is Andrick, and I’m a full-stack Web Developer. After just over 11 years in the restaurant industry, holding almost every front-of-house position, I decided to make the switch to something that, at the time, felt sustainable, what with the tech industry slated to grow by 13% in just a few years. Was I in for a surprise or what? I’d honestly still make that switch, knowing how nasty the market would get, because I love what I do now.
        <br></br>
        <br></br>
        Since graduating from my Web Dev boot camp, I have started my own consulting business, taken on a handful of clients who have needed a lot of help, and loved every step of the way. I especially love the feeling of launching a product into the world for real people to see. While primarily working independently, I have also worked on group projects with my friends, developing applications we just wanted to build. Solving problems that initially seem impossible has become the fuel that drives me to get out of bed every morning. 
        <br></br>
        <br></br>
        Embracing the world of web development has been a career shift and a journey of continuous learning and personal growth. The transition from the bustling energy of restaurants to the dynamic and ever-evolving tech landscape has been nothing short of exhilarating. Each client project brings challenges and learning opportunities, further enriching my expertise and passion for this field. The magic of turning complex ideas into functional, user-friendly digital experiences truly sets my heart ablaze. It's more than coding; it's about crafting solutions that make a difference in people's lives.
        <br></br>
        <br></br>
        Thank you for visiting my site. I'm excited to see where this journey takes me next, and I hope to have the opportunity to bring your digital vision to life.

        </p>
        {/* <br></br> */}
        <h2 className={styles.skillTitle}>My Skills</h2>
        <div className={styles.skillsContainer}>
      
        <h2 className={styles.skillSubTitle}>Languages:</h2>
        <p className={styles.skillList}>
          HTML - CSS - Javascript (Node.js) - jQuery - GraphQL - SQL - NoSQL - Python - Java
        </p>
       
        <h2 className={styles.skillSubTitle}>Frameworks & Libraries:</h2>
        <p className={styles.skillList}>
          React - Vite - Tailwind CSS - Material UI - Express.js
        </p>
      
        <h2 className={styles.skillSubTitle}>Software Development Tools:</h2>
        <p className={styles.skillList}>
          Git - Github - Jest - Vitest - Restful APIs - External APIs - Containerization (Docker)
        </p>
      
        <h2 className={styles.skillSubTitle}>Database Management:</h2>
        <p className={styles.skillList}>
          MySQL (Workbench) - MongoDB (Compass)
        </p>

        <h2 className={styles.skillSubTitle}>Technical:</h2>
        <p className={styles.skillList}>
          Troubleshooting - Debugging - Problem Solving - Responsive Design - Cross-Browser Compatibility - Web Accessibility
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
