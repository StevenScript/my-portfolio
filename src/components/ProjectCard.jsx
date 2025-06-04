import React from "react";

const ProjectCard = ({
  title,
  description,
  techStack,
  imageUrl,
  repoLinkFront,
  repoLinkBack,
  liveLink,
}) => {
  return (
    <div className="bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 rounded-lg shadow-lg overflow-hidden flex flex-col">
      {/* Project image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Card content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 flex-1">
          {description}
        </p>

        {/* Tech Stack */}
        {techStack && techStack.length > 0 && (
          <ul className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        {/* Links */}
        <div className="mt-auto flex flex-wrap gap-2">
          {/* Live Demo button */}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded transition text-xs"
            >
              Live Demo
            </a>
          )}

          {/* Frontend Repo button */}
          {repoLinkFront && (
            <a
              href={repoLinkFront}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gray-700 hover:bg-gray-800 text-white px-3 py-2 rounded transition text-xs"
            >
              Frontend Code
            </a>
          )}

          {/* Backend Repo button */}
          {repoLinkBack && (
            <a
              href={repoLinkBack}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gray-700 hover:bg-gray-800 text-white px-3 py-2 rounded transition text-xs"
            >
              Backend Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
