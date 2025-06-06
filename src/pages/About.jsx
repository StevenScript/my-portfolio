import React from "react";
import { useNavigate } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import PageWrapper from "../components/PageWrapper";
import PageHeader from "../components/PageHeader";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Shared photo, bio, marquee, and nav */}
      <SiteHeader />

      <PageWrapper>
        <PageHeader
          title="About Me"
          subtitle="Crafting clarity from chaos — full-stack focused, problem-driven."
        />

        {/* Bio Grid */}
        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
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

        {/* CTA Button */}
        <div className="mt-12">
          <button
            className="bg-white text-teal-800 px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-100 transition transform hover:scale-105"
            onClick={() => navigate("/social-links")}
          >
            Connect With Me →
          </button>
        </div>
      </PageWrapper>
    </>
  );
};

export default About;
