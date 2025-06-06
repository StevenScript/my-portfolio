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
    <div className="w-full py-12 text-white">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

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
      </div>
    </div>
  );
};

export default Skills;
