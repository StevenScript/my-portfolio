const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "JavaScript", "Python", "SQL", "HTML", "CSS"],
    },
    {
      category: "Frontend",
      skills: [
        "React",
        "Tailwind CSS",
        "React Router",
        "Ionic Framework",
        "@mui/material",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Spring Boot",
        "Node.js",
        "Express.js",
        "JWT Auth (Spring Security)",
        "Lombok",
        "Bucket4j (Rate Limiting)",
      ],
    },
    {
      category: "Data Handling",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "RESTful APIs"],
    },
    {
      category: "DevOps & Tools",
      skills: [
        "Docker",
        "Git & GitHub",
        "GitHub Actions (CI/CD)",
        "AWS EC2",
        "AWS S3",
        "AWS RDS",
        "AWS Lambda",
        "AWS Cognito",
        "AWS Elastic Beanstalk",
        "VS Code",
        "Postman",
        "Figma",
      ],
    },
    {
      category: "Testing",
      skills: [
        "JUnit",
        "Jest",
        "React Testing Library",
        "Mockito",
        "Test-Driven Development (TDD)",
      ],
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
