import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReact,
  SiRedux,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiAmazonwebservices,
  SiGit,
  SiGithub,
  SiPython,
  SiLinux,
  SiGraphql,
  SiTailwindcss,
} from "react-icons/si";

const logos = [
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiHtml5, name: "HTML5" },
  { Icon: SiCss3, name: "CSS3" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiReact, name: "React" },
  { Icon: SiRedux, name: "Redux" },
  { Icon: SiSpringboot, name: "Spring Boot" },
  { Icon: SiMysql, name: "MySQL" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiDocker, name: "Docker" },
  { Icon: SiAmazonwebservices, name: "AWS" },
  { Icon: SiGit, name: "Git" },
  { Icon: SiGithub, name: "GitHub" },
  { Icon: SiPython, name: "Python" },
  { Icon: SiLinux, name: "Linux" },
  { Icon: SiGraphql, name: "GraphQL" },
  { Icon: SiTailwindcss, name: "Tailwind CSS" },
];

const Marquee = () => {
  return (
    <div className="w-full overflow-hidden py-4 bg-black bg-opacity-50">
      <div className="flex whitespace-nowrap min-w-max animate-marquee">
        {[...logos, ...logos].map(({ Icon, name }, idx) => (
          <div
            key={idx}
            className="mr-8 flex-shrink-0 w-20 h-20 flex items-center justify-center"
          >
            <Icon className="w-full h-full text-white" title={name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
