import React from "react";
// import ReactLoading from "react-loading";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div>
      <h2 className={styles.loadText}>Welcome, please enjoy your stay</h2>
      <div class={styles.loader}>
        <div class={styles.bar1}></div>
        <div class={styles.bar2}></div>
        <div class={styles.bar3}></div>
        <div class={styles.bar4}></div>
        <div class={styles.bar5}></div>
        <div class={styles.bar6}></div>
      </div>
    </div>
  );
}

// special thanks to John Heiner for the loading animation. https://codepen.io/johnheiner/pen/ByxZQq
