import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className="socials-page">
      <div className="background">
        <div className="content">
          <div className="center-grid">
            <div className="grid-item">
              Hi there! I’m Steven Norris, a passionate Software Development
              student with a keen interest in crafting innovative and imagintive
              solutions through code. Currently on track to graduate in 2025. My
              journey in software development is fueled by a desire to
              continuously learn and push the boundaries of what's possible.
            </div>
            <div className="grid-itemblank"></div>
            <div className="grid-itemblank"></div>
            <div className="grid-item">
              When I'm not coding, you'll find me exploring the latest trends in
              tech, contributing to open-source projects, or diving into new
              challenges that sharpen my problem-solving abilities. Whether it's
              building web applications, developing software tools, or
              automating processes, I'm always ready to take on the next big
              project.
            </div>
            <div
              className="grid-item"
              onClick={() => handleNavigation("/social-links")}
            >
              My Social Links
            </div>
            <div className="grid-itemblank"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
