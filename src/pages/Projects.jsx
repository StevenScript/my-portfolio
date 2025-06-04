import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  // Replace these values with your actual project details:
  const projectData = [
    {
      title: "Concert Management App",
      description:
        "A fullstack event promotion and ticketing system built with React, Spring Boot, and MySQL, deployed on AWS.",
      techStack: ["React", "Java", "Spring Boot", "MySQL", "Docker", "AWS"],
      imageUrl: process.env.PUBLIC_URL + "/imgs/concert-screenshot.jpg",
      repoLinkFront:
        "https://github.com/StevenScript/concert-management-frontend",
      repoLinkBack: "https://github.com/StevenScript/concertManagement_Server",
      liveLink:
        "http://concert-frontend-demo-7350.s3-website-us-east-1.amazonaws.com/",
    },
    // Add additional projects here as objects
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-hero-pattern bg-cover bg-center py-12">
      <div className="w-full max-w-6xl px-4">
        <h1 className="text-3xl font-bold text-white mb-8">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              imageUrl={project.imageUrl}
              repoLinkFront={project.repoLinkFront} // ← pass frontend repo
              repoLinkBack={project.repoLinkBack} // ← pass backend repo
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
