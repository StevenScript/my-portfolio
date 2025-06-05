// src/components/Skills.jsx
import React from "react";

const Skills = () => {
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
    <div className="w-full flex flex-col items-center justify-start bg-slate-900 py-4 text-white">
      <div className="w-full max-w-5xl px-4">
        <h1 className="text-3xl font-bold mb-6">Skills</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="bg-gray-800 rounded-lg p-4 shadow"
            >
              <h2 className="text-xl font-semibold text-white mb-3">
                {group.category}
              </h2>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="
                      inline-block
                      bg-blue-600 hover:bg-blue-700
                      text-white px-2 py-1 rounded
                      transition
                      text-sm
                    "
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
