import React from "react";

const Resume = () => {
  return (
    <div
      className="
        min-h-screen
        flex flex-col items-center justify-start
        bg-hero-pattern bg-cover bg-center
        py-12
      "
    >
      <div className="w-full max-w-4xl px-4">
        <h1 className="text-3xl font-bold text-white mb-6">Resume</h1>

        <div className="mb-4">
          <a
            href={process.env.PUBLIC_URL + "/resume.pdf"}
            download
            className="
              inline-block
              bg-blue-600 hover:bg-blue-700
              text-white px-4 py-2 rounded-md
              transition transform hover:scale-105
              text-base font-medium
            "
          >
            Download PDF
          </a>
        </div>

        <div className="w-full h-[80vh] border-2 border-white rounded-md overflow-hidden">
          <iframe
            src={process.env.PUBLIC_URL + "/resume.pdf"}
            title="Resume"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
