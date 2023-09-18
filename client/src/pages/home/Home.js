import React from "react";
import GeoFace from "../../assets/images/GeoFace.jpg";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.componentContainer}>
      <div
        className={styles.textContainer}
      >
        <h2 className={styles.homeTitle}>
          Thank You for Visiting Andrick Siegmund's Portfolio
        </h2>
        <h3 className={styles.homeGreet}>Please, Make Yourself At Home</h3>
        <img src={GeoFace} alt="Geometric Sketch Profile Pic" className={styles.geoFace} />
      </div>
    </div>
  );
}
