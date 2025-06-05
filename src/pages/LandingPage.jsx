import React from "react";
import { useNavigate } from "react-router-dom";

// Only import icon names that actually exist in react-icons/si
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReact,
  SiRedux,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiAmazonwebservices,
  SiGit,
  SiGithub,
  SiPython,
  SiLinux,
  SiGraphql,
  SiTailwindcss,
} from "react-icons/si";

const LandingPage = () => {
  const navigate = useNavigate();

  const aboutText = `Hi, I’m Steven Norris—a Junior Software Developer passionate about building full-stack applications that solve real problems. Skilled in Spring Boot, React, AWS, Docker, and more. Eager to learn, collaborate, and deliver clean, maintainable code.`;

  const logos = [
    { Icon: SiJavascript, name: "JavaScript" },
    { Icon: SiHtml5, name: "HTML5" },
    { Icon: SiCss3, name: "CSS3" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: SiReact, name: "React" },
    { Icon: SiRedux, name: "Redux" },
    { Icon: SiSpringboot, name: "Spring Boot" },
    { Icon: SiMysql, name: "MySQL" },
    { Icon: SiPostgresql, name: "PostgreSQL" },
    { Icon: SiDocker, name: "Docker" },
    { Icon: SiAmazonwebservices, name: "AWS" },
    { Icon: SiGit, name: "Git" },
    { Icon: SiGithub, name: "GitHub" },
    { Icon: SiPython, name: "Python" },
    { Icon: SiLinux, name: "Linux" },
    { Icon: SiGraphql, name: "GraphQL" },
    { Icon: SiTailwindcss, name: "Tailwind CSS" },
  ];

  return (
    <div
      className="
        min-h-screen
        flex flex-col items-center justify-between
        bg-hero-pattern bg-cover bg-center
        text-white
      "
    >
      {/* Top Section: Profile + Synopsis */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start px-6 py-12">
        {/* Profile Photo */}
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
          <img
            src={process.env.PUBLIC_URL + "/imgs/profle.jpg"}
            alt="Steven Norris"
            className="
              w-40 h-40
              md:w-56 md:h-56
              rounded-full
              border-4 border-white
              object-cover
            "
          />
        </div>

        {/* Bio & Button */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Steven Norris</h1>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            {aboutText}
          </p>
          <button
            onClick={() => navigate("/projects")}
            className="
              bg-blue-600 hover:bg-blue-700
              text-white
              px-6 py-3 rounded-md
              text-base font-medium
              transition transform hover:scale-105
            "
          >
            View Projects
          </button>
        </div>
      </div>

      {/* Marquee Ticker: Skill Icons (gap-free, constant flow) */}
      <div className="w-full overflow-hidden py-4 bg-black bg-opacity-50">
        <div className="flex whitespace-nowrap min-w-max animate-marquee">
          {[...logos, ...logos].map(({ Icon, name }, idx) => (
            <div
              key={idx}
              className="mr-8 flex-shrink-0 w-20 h-20 flex items-center justify-center"
            >
              <Icon className="w-full h-full text-white" title={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
