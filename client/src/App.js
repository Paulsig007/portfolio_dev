import {  Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Nav from "./components/navTabs/NavTabs";
import Loading from "./components/loading/Loading";
import Container from "@mui/material/Container";
import Footer from "./components/footer/Footer";


export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2500);
  }, []);

  return (
    <HashRouter>
    <Container maxWidth={false}>
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
            <Footer />
          </div>
        </div>
      )}
      </Container>
    </HashRouter>
  );
}
