import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="landing-page">
      <div className="background">
        <div className="content">
          <div className="center-grid">
            <div
              className="grid-item"
              onClick={() => handleNavigation("/about")}
            >
              About me
            </div>
            <div className="grid-itemblank"></div>
            <div className="grid-itemblank"></div>
            <div
              className="grid-item"
              onClick={() => handleNavigation("/social-links")}
            >
              My Social Links
            </div>
            <div
              className="grid-item"
              onClick={() => handleNavigation("/Whack-A-Mole")}
            >
              My Latest Project
            </div>
            <div className="grid-itemblank"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
