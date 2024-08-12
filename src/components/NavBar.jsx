import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className="top-right">
        <p>
          You Are Visiting The Portfolio of <br /> Steven Norris <br /> Student
          of Software Development. <br /> Graduating 2025.
        </p>
      </div>
      <div className="menu">
        <div className="menu-item" onClick={() => handleNavigation("/")}>
          Home
        </div>
        <div className="menu-item" onClick={() => handleNavigation("/about")}>
          About Me
        </div>
        <div
          className="menu-item"
          onClick={() => handleNavigation("/social-links")}
        >
          Socials
        </div>
        <div
          className="menu-item"
          onClick={() => handleNavigation("/Whack-A-Mole")}
        >
          Latest Project
        </div>
      </div>
    </div>
  );
};

export default NavBar;
