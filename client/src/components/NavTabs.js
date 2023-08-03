import React from "react";
import { Link } from "react-router-dom";

export default function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <Link to={"/"} className="nav-item">
        Home
      </Link>
      <Link to={"/about"} className="nav-item">
        About
      </Link>
      <Link to={"/projects"} className="nav-item">
        Projects
      </Link>
      <Link to={"/contact"} className="nav-item">
        Contact
      </Link>
    </ul>
  );
}
