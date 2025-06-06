import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-800 to-teal-600 text-white px-6 py-12">
      <div className="w-full max-w-6xl">{children}</div>
    </div>
  );
};

export default PageWrapper;
