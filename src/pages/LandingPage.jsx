import React from "react";
import SiteHeader from "../components/SiteHeader";
import Skills from "../components/Skills";
import ProjectsSection from "../components/ProjectSection";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-gradient-to-br from-blue-800 to-teal-600 text-white">
      {/* ─── Shared Bio + Nav Section ─── */}
      <SiteHeader />

      {/* ─── Skills Section ─── */}
      <Skills />

      {/* ─── Projects Section ─── */}
      <ProjectsSection />
    </div>
  );
};

export default LandingPage;
