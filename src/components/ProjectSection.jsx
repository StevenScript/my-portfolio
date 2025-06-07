const projectData = [
  {
    title: "Concert Management App",
    description:
      "A full-stack event promotion and ticketing system built with React, Spring Boot, and MySQL, deployed on AWS.",
    techStack: ["React", "Java", "Spring Boot", "MySQL", "Docker", "AWS"],
    imageUrl: process.env.PUBLIC_URL + "/imgs/concert-screenshot.jpg",
    repoLinkFront:
      "https://github.com/StevenScript/concert-management-frontend",
    repoLinkBack: "https://github.com/StevenScript/concertManagement_Server",
    liveLink:
      "http://concert-frontend-demo-7350.s3-website-us-east-1.amazonaws.com/",
  },
];

const ProjectSection = () => {
  return (
    <div className="w-full py-12 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project) => (
            <div
              key={project.title}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg flex flex-col"
            >
              {/* Image */}
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} screenshot`}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-4">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4 flex-1">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-blue-600 text-white px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex flex-wrap gap-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm font-medium transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoLinkFront}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm font-medium transition"
                  >
                    Frontend Code
                  </a>
                  <a
                    href={project.repoLinkBack}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm font-medium transition"
                  >
                    Backend Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
