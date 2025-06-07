import { Link, useLocation } from "react-router-dom";

const HorizontalNavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // A simple array of nav items:
  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Resume", to: "/resume" },
    { name: "Projects", to: "/projects" },
  ];

  return (
    <nav className="w-full bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <ul className="flex justify-center space-x-6 py-3">
          {navItems.map((item) => {
            // Highlight the current link with a different style:
            const isActive = currentPath === item.to;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`
                    px-3 py-1 rounded-md
                    text-sm font-medium
                    transition
                    ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-200 hover:bg-gray-700 hover:text-white"
                    }
                  `}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default HorizontalNavBar;
