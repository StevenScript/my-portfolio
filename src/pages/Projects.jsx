import SiteHeader from "../components/SiteHeader";
import PageWrapper from "../components/PageWrapper";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import ProjectDetails from "../components/ProjectDetails";

const Projects = () => {
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
      highlights: [
        "CRUD functionality across artists, events, and venues",
        "JWT authentication with rotating refresh tokens",
        "Admin-only role-based access to protected routes",
        "Clean Git hygiene and GitHub Actions CI/CD",
        "Deployed using AWS S3 (frontend) + Elastic Beanstalk (backend)",
        "Built with SaaS best practices: DTOs, layers, testing, and logging",
      ],
    },
    // TODO: Add more projects in future
  ];

  return (
    <>
      {/* Shared profile + nav */}
      <SiteHeader />

      <PageWrapper>
        <PageHeader
          title="Projects"
          subtitle="A showcase of the real-world fullstack applications I've designed, built, and deployed."
        />

        {/* Expanded intro paragraph */}
        <div className="max-w-4xl mx-auto text-white text-lg leading-relaxed mb-12 px-4">
          <p className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transition">
            These projects reflect not just my technical skills in Spring Boot,
            React, and AWS — but also my focus on clean architecture, real-world
            use cases, and the deployment workflows required to turn code into
            polished, usable apps. Each project here is deployed or deployable,
            showing both frontend and backend development, secure
            authentication, and full CRUD systems backed by SQL databases.
          </p>
        </div>

        {/* Projects Display */}
        <div className="space-y-12 px-4 max-w-6xl mx-auto">
          {projectData.map((project) => (
            <div
              key={project.title}
              className="flex flex-col lg:flex-row gap-8 items-start bg-white/5 p-4 rounded-xl shadow-lg"
            >
              {/* Left: Project Card */}
              <div className="w-full lg:w-1/2">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  imageUrl={project.imageUrl}
                  repoLinkFront={project.repoLinkFront}
                  repoLinkBack={project.repoLinkBack}
                  liveLink={project.liveLink}
                />
              </div>

              {/* Right: Project Details */}
              <div className="w-full lg:w-1/2">
                <ProjectDetails highlights={project.highlights} />
              </div>
            </div>
          ))}
        </div>
      </PageWrapper>
    </>
  );
};

export default Projects;
