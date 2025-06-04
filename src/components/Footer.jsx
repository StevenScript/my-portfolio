import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Replace these URLs with your actual profile links
  const profiles = [
    {
      name: "GitHub",
      url: "https://github.com/StevenScript",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/steve-n-5000212a9/",
      icon: <FaLinkedin />,
    },
    {
      name: "Email",
      url: "mailto:sdn709466@gmail.com",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black bg-opacity-75">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-center space-x-6">
        {profiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition text-xl"
            aria-label={profile.name}
          >
            {profile.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
