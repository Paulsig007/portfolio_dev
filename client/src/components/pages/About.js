import React from "react";
import resume from "../../assets/resume.pdf";

export default function About() {
  return (
    <div className="componentContainer">
      <div className="textContainer">
        <h2 className="compTitle aboutTitle">It's a pleasure to meet you!</h2>
        <p className="aboutText">
          Greetings! I'm not just a full stack software engineer; I'm an
          enthusiastic explorer of the boundless realm where learning and
          creation intertwine. From the very roots of my fascination with
          technology's potential to unravel challenges, I've embarked on a
          journey that's ignited an insatiable passion for development.
          <br></br>
          <br></br>
          In this condensed span of time immersed in the art of crafting digital
          landscapes, I've unequivocally found my calling. Enthusiasm courses
          through my veins as I eagerly embrace the endless avenues of growth as
          a developer and as an individual. A fervent believer in the power of
          collaboration, I'm on the hunt for a dynamic team that mirrors my
          ardor for innovation.
          <br></br>
          <br></br>
          But my aspirations don't halt there; my sights are set on weaving my
          narrative into the vibrant tapestry of the tech community. So, let's
          dive into tomorrow's solutions together, as I strive to make every
          line of code a testament to my unwavering commitment to progress.
        </p>
        {/* <br></br> */}
        <h2 className="skillTitle">My Skills</h2>
        <p className="aboutText skillsList">
          HTML - CSS - Javascript ES6 - MERN - Apollo GraphQL - Bootstrap -
          Material UI - Bootstrap - Handlebars - RESTful APIs - AJAX - RESTful
          APIs - Git Flow - Heroku - GitHub - VS Code - NPM - Jest - MongoDB -
          Mongoose - IDB - PWAs - MVC Paradigm - Agile Developement - SQ - MySQL
          Workbench - Sequelize (Currently learning: React Native, Redux, and )
        </p>
        <a id="resume" href={resume} download>
          Download My Resume (PDF)
        </a>
      </div>
    </div>
  );
}
