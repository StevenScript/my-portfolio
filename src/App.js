import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage"; // Import the LandingPage component
import Socials from "./components/Socials";
import About from "./components/About";
import WhackAMole from "./components/WhackAMole";
import "./App.css";
import NavBar from "./components/NavBar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/my-portfolio/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/social-links" element={<Socials />} />
        <Route path="/Whack-A-Mole" element={<WhackAMole />} />
      </Routes>
    </Router>
  );
};

export default App;
