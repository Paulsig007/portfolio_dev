import React from "react";
import GeoFace from "../../assets/images/GeoFace.jpg";

export default function Home() {
  return (
    <div className="componentContainer">
      <div
        className="textContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 className="compTitle homeTitle">
          Thank You for Visiting Andrick Siegmund's Portfolio
        </h2>
        <h3 className="homeGreet">Please, Make Yourself At Home</h3>
        <img src={GeoFace} alt="Geometric Sketch Profile Pic" id="geoFace" />
      </div>
    </div>
  );
}
