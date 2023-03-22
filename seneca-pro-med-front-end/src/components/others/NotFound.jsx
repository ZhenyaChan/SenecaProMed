import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-headingColor mb-6">404 - Page Not Found</h1>
      <p className="text-lg text-gray-900 text-center">Sorry, the requested page could not be found.</p>
    </div>
  );
};

export default NotFound;
