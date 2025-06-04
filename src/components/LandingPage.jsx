import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
        min-h-screen
        flex flex-col items-center justify-start
        bg-hero-pattern bg-cover bg-center
      "
    >
      <div className="mt-36 w-full max-w-4xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
          {/* About Me box */}
          <button
            className="
              bg-black bg-opacity-80 text-white
              w-64 h-64
              flex items-center justify-center
              rounded-md
              transition transform hover:scale-105 hover:bg-opacity-100
              text-lg font-medium
            "
            onClick={() => navigate("/about")}
          >
            About Me
          </button>

          {/* Blank placeholder */}
          <div className="w-64 h-64"></div>

          {/* Blank placeholder */}
          <div className="w-64 h-64"></div>

          {/* Social Links box */}
          <button
            className="
              bg-black bg-opacity-80 text-white
              w-64 h-64
              flex items-center justify-center
              rounded-md
              transition transform hover:scale-105 hover:bg-opacity-100
              text-lg font-medium
            "
            onClick={() => navigate("/social-links")}
          >
            My Social Links
          </button>

          {/* Latest Project box */}
          <button
            className="
              bg-black bg-opacity-80 text-white
              w-64 h-64
              flex items-center justify-center
              rounded-md
              transition transform hover:scale-105 hover:bg-opacity-100
              text-lg font-medium
            "
            onClick={() => navigate("/Whack-A-Mole")}
          >
            My Latest Project
          </button>

          {/* Blank placeholder */}
          <div className="w-64 h-64"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
