import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import projectObjects from "../../assets/projectObjects";
import styles from "./Projects.module.css";

export default function Projects() {
  const handleCardClick = (url) => {
    window.open(url, "_blank");
  }

  return (
    <div className={styles.componentContainer}>
      <div className={styles.projectBackground}>
        <h1 className={styles.projectTitle}>Projects</h1>
        <p className={styles.projectText}>
          Please feel free to browse through my projects. I have included links
          to the repositories as well as the deployed applications.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            marginBottom: "4%",
          }}
        >
          {projectObjects.map((project, index) => (
            <Card
              key={index}
              className=".projectCard"
              style={{ minWidth: 340, cursor: "pointer" }}
          >
            <img
              src={project.cardImg}
              alt={project.name}
              style={{ height: 130, width: "100%", objectFit: "cover" }}
              onClick={() => handleCardClick(project.deployedUrl)}
            />
              <CardContent>
                <Typography variant="h6" component="div">
                  {project.name}
                </Typography>
                <Typography variant="body1">{project.descriptions}</Typography>
                <Button href={project.repoUrl} target="_blank">
                  View Repo
                </Button>
                <Button
                  href={project.deployedUrl}
                  target="_blank"
                  style={
                    project.deployedUrl === "#"
                      ? { display: "none" }
                      : { display: "inline" }
                  }
                >
                  View Deployed App
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

