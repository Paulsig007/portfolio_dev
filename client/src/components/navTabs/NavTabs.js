import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import styles from "./NavTabs.module.css";
import logo from "../../assets/images/logo.png";

export default function NavTabs() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={6}  sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      '@media screen and (min-width: 1500px)': {
        justifyContent: "flex-start",
      },
      }}>
        <img src={logo} alt="logo" className={styles.logo}/>
      </Grid>
      <Grid item xs={12} sm={8} md={6} sx={{
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      '@media screen and (max-width: 600px)': {
        justifyContent: "center",
      }
      }}
      >
        <Link to={"/"} className={styles.navItem}>
        Home
        </Link>
        <Link to={"/about"} className={styles.navItem}>
          About
        </Link>
        <Link to={"/projects"} className={styles.navItem}>
          Projects
        </Link>
        <Link to={"/contact"} className={styles.navItem}>
          Contact
        </Link>
      </Grid>
    </Grid>
  );
}
