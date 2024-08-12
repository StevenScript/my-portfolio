import React from "react";

const Socials = () => {
  return (
    <div className="socials-page">
      <div className="background">
        <div className="content">
          <div className="center-grid">
            <div className="grid-item">
              Email:{" "}
              <a href="mailto:sdn709466@gmail.com">sdn709466@gmail.com</a>
            </div>
            <div className="grid-itemblank"></div>
            <div className="grid-itemblank"></div>
            <div className="grid-item">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/steve-n-5000212a9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/steve-n-5000212a9/
              </a>
            </div>
            <div className="grid-item">
              GitHub:{" "}
              <a
                href="https://github.com/StevenScript"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/StevenScript
              </a>
            </div>
            <div className="grid-itemblank"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
