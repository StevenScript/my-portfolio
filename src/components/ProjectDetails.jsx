import React from "react";

const ProjectDetails = ({ highlights = [] }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md p-5 rounded-xl text-white text-sm leading-relaxed shadow-md hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-2 text-blue-200">
        What this project demonstrates:
      </h3>
      <ul className="list-disc list-inside space-y-1">
        {highlights.map((point, index) => (
          <li key={index} className="text-white/90">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
