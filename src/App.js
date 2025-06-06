import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage"; // Import the LandingPage component
import About from "./pages/About";
import "./App.css";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/my-portfolio/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
