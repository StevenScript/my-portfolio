import React from "react";
import SiteHeader from "../components/SiteHeader";
import PageWrapper from "../components/PageWrapper";
import PageHeader from "../components/PageHeader";

const About = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      category: "Frontend",
      skills: ["React", "Tailwind CSS", "React Router", "ReactBits"],
    },
    {
      category: "Backend",
      skills: ["Spring Boot", "Node.js (optional)", "Express.js (optional)"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL (optional)", "MongoDB (optional)"],
    },
    {
      category: "DevOps & Tools",
      skills: [
        "Docker",
        "Git & GitHub",
        "AWS (Elastic Beanstalk, S3)",
        "CI/CD (GitHub Actions)",
      ],
    },
    {
      category: "Testing",
      skills: ["JUnit", "React Testing Library", "Postman"],
    },
  ];

  return (
    <>
      <SiteHeader />

      <PageWrapper>
        <PageHeader
          title="About Me"
          subtitle="Crafting clarity from chaos — full-stack focused, problem-driven."
        />

        {/* ─── Bio Grid ─── */}
        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <p className="text-white text-lg leading-relaxed">
              I’m{" "}
              <span className="font-semibold text-blue-200">Steven Norris</span>
              , a Software Development student graduating in 2025. I build
              full-stack web apps using modern tools and aim for clean, scalable
              codebases.
              <br />
              <br />
              <strong className="text-teal-300 underline">
                Favorite Tech:
              </strong>{" "}
              Java, Spring Boot, React, AWS, Docker, GitHub Actions.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <p className="text-white text-lg leading-relaxed">
              Outside coding, I explore survival games, contribute to open
              source, and experiment with indie game dev tools. I love systems,
              strategy, and structure—whether it’s software architecture or game
              mechanics.
              <br />
              <br />
              My goal? Deliver apps that *feel* good—fast, clean, and fun to
              use.
            </p>
          </div>
        </section>

        {/* ─── Skills Section ─── */}
        <section className="w-full max-w-6xl px-6 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((group) => (
              <div
                key={group.category}
                className="bg-white bg-opacity-10 backdrop-blur-md p-5 rounded-xl text-white shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-200">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-sm transition"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Social Links Section ─── */}
        <section className="w-full max-w-4xl mx-auto px-6 mb-24">
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl text-white shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-200">
              Connect With Me
            </h2>
            <ul className="space-y-2 text-white text-base">
              <li>
                📧 Email:{" "}
                <a
                  href="mailto:sdn709466@gmail.com"
                  className="text-teal-300 hover:underline"
                >
                  sdn709466@gmail.com
                </a>
              </li>
              <li>
                💼 LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/steve-n-5000212a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:underline"
                >
                  linkedin.com/in/steve-n-5000212a9
                </a>
              </li>
              <li>
                🐙 GitHub:{" "}
                <a
                  href="https://github.com/StevenScript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:underline"
                >
                  github.com/StevenScript
                </a>
              </li>
            </ul>
          </div>
        </section>
      </PageWrapper>
    </>
  );
};

export default About;
