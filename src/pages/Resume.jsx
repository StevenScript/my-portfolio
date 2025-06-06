import React from "react";
import SiteHeader from "../components/SiteHeader";
import PageWrapper from "../components/PageWrapper";
import PageHeader from "../components/PageHeader";

const Resume = () => {
  return (
    <>
      {/* Shared profile + nav + marquee */}
      <SiteHeader />

      <PageWrapper>
        <PageHeader
          title="Resume"
          subtitle="A snapshot of my skills, education, and experience as a developer."
        />

        {/* Download Button */}
        <div className="mb-6 text-center">
          <a
            href={process.env.PUBLIC_URL + "/resume.pdf"}
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition transform hover:scale-105 text-base font-medium shadow-md"
          >
            Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="w-full max-w-4xl mx-auto border-2 border-white rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={process.env.PUBLIC_URL + "/resume.pdf"}
            title="Resume PDF"
            className="w-full h-[80vh] bg-white"
          />
        </div>
      </PageWrapper>
    </>
  );
};

export default Resume;
