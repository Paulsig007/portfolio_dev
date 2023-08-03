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
        <ul className="aboutText skillsList">
          <li className="skill">HTML</li>
          <li className="skill">CSS</li>
          <li className="skill">Bootstrap</li>
          <li className="skill">Material UI</li>
          <li className="skill">React Bootstrap</li>
          <li className="skill">Node.js</li>
          <li className="skill">Express.js</li>
          <li className="skill">Handlebars</li>
          <li className="skill">jQuery</li>
          <li className="skill">RESTful APIs</li>
          <li className="skill">GraphQL</li>
          <li className="skill">Apollo</li>
          <li className="skill">AJAX</li>
          <li className="skill">APIs</li>
          <li className="skill">Git</li>
          <li className="skill">Heroku</li>
          <li className="skill">GitHub</li>
          <li className="skill">VS Code</li>
          <li className="skill">NPM</li>
          <li className="skill">Jest</li>
          <li className="skill">Javascript</li>
          <li className="skill">MERN Stack</li>
          <li className="skill">React</li>
          <li className="skill">NoSQL (MongoDB, Mongoose, IDB)</li>
          <li className="skill">PWAs</li>
          <li className="skill">MVC Paradigm</li>
          <li className="skill">Agile Developement</li>
          <li className="skill">SQL, MySQL, Sequelize</li>
        </ul>
        <br></br>
        <a href={resume} download>
          Download My Resume (PDF)
        </a>
      </div>
    </div>
  );
}
