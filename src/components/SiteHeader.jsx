import { useNavigate } from "react-router-dom";
import HorizontalNavBar from "./NavBar";
import Marquee from "./Marquee";

const SiteHeader = () => {
  const navigate = useNavigate();

  const aboutText = `Hi, I’m Steven Norris—a Junior Software Developer passionate about building full-stack applications that solve real problems. Skilled in Spring Boot, React, AWS, Docker, and more. Eager to learn, collaborate, and deliver clean, maintainable code.`;

  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-br from-blue-800 to-teal-600 text-white">
      {/* Bio Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start px-6 py-12">
        {/* Profile Image */}
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
          <img
            src={process.env.PUBLIC_URL + "/imgs/profle.jpg"}
            alt="Steven Norris"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white object-cover"
          />
        </div>

        {/* Bio Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Steven Norris</h1>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            {aboutText}
          </p>
          <button
            onClick={() => navigate("/projects")}
            className="bg-white text-teal-800 hover:bg-gray-100 px-6 py-3 rounded-md text-base font-medium transition transform hover:scale-105"
          >
            View Projects
          </button>
        </div>
      </div>

      <Marquee />
      <HorizontalNavBar />
    </div>
  );
};

export default SiteHeader;
