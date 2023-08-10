import React from "react";
import resume from "../../assets/resume.pdf";

export default function About() {
  return (
    <div className="componentContainer">
      <div className="textContainer">
        <h2 className="compTitle aboutTitle">It's a pleasure to meet you!</h2>
        <p className="aboutText">
          I am a full stack web developer with a passion for learning and
          creating. I have always been fascinated by technology and how it can
          be used to solve problems. In the short time I have spent in
          developement, I can honestly say that I love what I do and I am
          excited to continue to learn as a developer, grow as a person, engage
          with a dynamic team, and contribute to the tech community.
        </p>
        {/* <br></br> */}
        <h2 className="skillTitle">My Skills</h2>
        <p className="aboutText skillsList">
          HTML - CSS - Javascript ES6 - MERN - Apollo GraphQL - Bootstrap -
          Material UI - Bootstrap - Handlebars - RESTful APIs - AJAX - RESTful
          APIs - Git - Heroku - GitHub - VS Code - NPM - Jest - MongoDB -
          Mongoose - IDB - PWAs - MVC Paradigm - Agile Developement - SQ - MySQL
          Workbench - Sequelize
        </p>
        <a href={resume} download>
          Download My Resume (PDF)
        </a>
      </div>
    </div>
  );
}
