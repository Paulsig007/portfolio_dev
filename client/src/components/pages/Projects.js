import React from "react";
import Blueit from "../../assets/images/Blueit.png";
import SocialNetworkAPI from "../../assets/images/SocialNetworkAPI.png";
import Jate from "../../assets/images/Jate.png";
import MaPeepl from "../../assets/images/MaPeepl.png";
import DrDrink from "../../assets/images/Dr.Drink.png";
import Chat98 from "../../assets/images/chat98.png";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const projectObjects = [
  {
    name: "Chat98",
    cardImg: Chat98,
    repoUrl: "https://github.com/TrueWillB/chat98",
    deployedUrl: "https://chat98-a21833346cf4.herokuapp.com/",
    descriptions: "A nostalgic chatroom app",
  },
  {
    name: "Blueit",
    cardImg: Blueit,
    repoUrl: "https://github.com/Paulsig007/Blueit",
    deployedUrl: "https://blueit-79b9e15820d2.herokuapp.com/",
    descriptions: "A simple blog posting app",
  },
  {
    name: "Social Network API",
    cardImg: SocialNetworkAPI,
    repoUrl: "https://github.com/Paulsig007/mySocialAPI",
    deployedUrl: "N/A",
    descriptions: "It basically explains itself",
  },
  {
    name: "Jate",
    cardImg: Jate,
    repoUrl: "https://github.com/Paulsig007/textEditPro",
    deployedUrl: "https://jate-siegmund-f0b7b423e081.herokuapp.com/",
    descriptions: "A fun little text editor",
  },
  {
    name: "MaPeepl",
    cardImg: MaPeepl,
    repoUrl: "https://github.com/Paulsig007/MaPeepl",
    deployedUrl: "N/A",
    descriptions: "A CLI Employee Tracker",
  },
  {
    name: "Dr. Drink",
    cardImg: DrDrink,
    repoUrl: "https://github.com/ryantixier/Dr-Drink",
    deployedUrl: "https://ryantixier.github.io/Dr-Drink/",
    descriptions: "A delightful cocktail recipe app",
  },
];

export default function Projects() {
  return (
    <div>
      <h1 className="compTitle">Projects</h1>
      <p id="projectText">
        Please feel free to browse through my projects. I have included links to
        the repositories as well as the deployed applications.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {projectObjects.map((project, index) => (
          <Card
            className=".projectCard"
            key={index}
            style={{ minWidth: 300, cursor: "pointer" }}
          >
            <CardMedia
              component="img"
              height="130"
              image={project.cardImg}
              alt={project.name}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {project.name}
              </Typography>
              <Typography variant="body1">{project.descriptions}</Typography>
              <Button href={project.repoUrl} target="_blank">
                View Repo
              </Button>
              <Button href={project.deployedUrl} target="_blank">
                View Deployed
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
