import React from "react";

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="relative w-full text-center mt-4 mb-10">
      {/* Decorative gradient mist */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/10 to-transparent blur-md pointer-events-none" />

      {/* Header content */}
      <h2 className="relative z-10 text-4xl font-bold text-white drop-shadow-sm">
        {title}
      </h2>
      {subtitle && (
        <p className="relative z-10 mt-2 text-md text-blue-100 font-medium tracking-wide">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
