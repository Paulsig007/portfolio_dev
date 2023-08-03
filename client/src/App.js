import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";
import React, { useEffect } from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Nav from "./components/NavTabs";
import Loading from "./components/Loading";

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 4000);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <footer>
              <footer>
                <a
                  id="github"
                  href="https://github.com/Paulsig007"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={32} />
                </a>
                <a
                  id="linkedin"
                  href="https://www.linkedin.com/in/andricksiegmund/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={32} />
                </a>
              </footer>
            </footer>
          </div>
        </div>
      )}
    </Router>
  );
}
