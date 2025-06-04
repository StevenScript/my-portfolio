import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-hero-pattern bg-cover bg-center">
      <div className="mt-36 w-full max-w-4xl px-4">
        {/* Section Title */}
        <h1 className="text-3xl font-bold text-white mb-8">About Me</h1>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-start">
          {/* Left Column: Paragraph 1 */}
          <div className="bg-black bg-opacity-80 text-white p-6 rounded-md text-base leading-relaxed">
            <p>
              Hi there! I’m <span className="font-semibold">Steven Norris</span>
              , a passionate Software Development student on track to graduate
              in 2025. I enjoy building fullstack applications with clean,
              maintainable code.
              <br />
              <strong className="underline decoration-blue-400">
                Technologies:
              </strong>{" "}
              Java, Spring Boot, React, AWS, Docker.
            </p>
          </div>

          {/* Right Column: Paragraph 2 */}
          <div className="bg-black bg-opacity-80 text-white p-6 rounded-md text-base leading-relaxed">
            <p>
              When I’m not coding, you’ll find me exploring new technologies,
              contributing to open-source projects, or playing survival games.
              My goal is to continuously learn and deliver solutions that make a
              real impact.
            </p>
          </div>

          {/* Bottom: Social Links CTA (spans full width on mobile) */}
          <button
            className="
              md:col-span-2
              bg-blue-600 hover:bg-blue-700
              text-white p-4
              rounded-md
              transition transform hover:scale-105
              text-base font-medium
            "
            onClick={() => navigate("/social-links")}
          >
            My Social Links
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
