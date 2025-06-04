import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="relative">
      {/* Top-right bio box */}
      <div
        className="
        absolute top-4 right-4
        bg-black bg-opacity-80 text-white
        p-4 pr-8 pl-8
        rounded-bl-md rounded-tl-md rounded-tr-md
        text-center
        max-w-xs
        "
      >
        <p className="text-sm leading-snug">
          You Are Visiting The Portfolio of
          <br />
          <span className="font-semibold">Steven Norris</span>
          <br />
          Student of Software Development.
          <br />
          Graduating 2025.
        </p>
      </div>

      {/* Vertical menu */}
      <div
        className="
        absolute top-28 right-4
        bg-black bg-opacity-80 text-white
        p-4
        rounded-bl-md rounded-br-md
        w-24
        space-y-2
        "
      >
        <button
          className="
            block w-full text-center
            bg-blue-700 hover:bg-blue-800
            text-white py-2 rounded-md
            transition transform hover:scale-110
            text-xs
          "
          onClick={() => handleNavigation("/")}
        >
          Home
        </button>

        <button
          className="
            block w-full text-center
            bg-blue-700 hover:bg-blue-800
            text-white py-2 rounded-md
            transition transform hover:scale-110
            text-xs
          "
          onClick={() => handleNavigation("/about")}
        >
          About Me
        </button>

        <button
          className="
            block w-full text-center
            bg-blue-700 hover:bg-blue-800
            text-white py-2 rounded-md
            transition transform hover:scale-110
            text-xs
          "
          onClick={() => handleNavigation("/projects")}
        >
          Projects
        </button>

        <button
          className="
            block w-full text-center
            bg-blue-700 hover:bg-blue-800
            text-white py-2 rounded-md
            transition transform hover:scale-110
            text-xs
          "
          onClick={() => handleNavigation("/skills")}
        >
          Skills
        </button>

        <button
          className="
            block w-full text-center
            bg-blue-700 hover:bg-blue-800
            text-white py-2 rounded-md
            transition transform hover:scale-110
            text-xs
          "
          onClick={() => handleNavigation("/social-links")}
        >
          Socials
        </button>
      </div>
    </div>
  );
};

export default NavBar;
