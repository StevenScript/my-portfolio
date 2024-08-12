import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage"; // Import the LandingPage component
import Socials from "./components/Socials";
import About from "./components/About";
import WhackAMole from "./components/WhackAMole";
import "./App.css";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/social-links" element={<Socials />} />
        <Route path="/Whack-A-Mole" element={<WhackAMole />} />
      </Routes>
    </Router>
  );
};

export default App;
