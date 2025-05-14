import React, { useState } from "react";

const App = () => {
  return (
    <div className="container mx-auto text-center py-20">
      <h1 className="text-5xl font-bold mb-6">
        Welcome to Richter Renovations
      </h1>
      <img
        src="/main-photo.jpg"
        alt="Main"
        className="mx-auto rounded-2xl shadow-lg w-1/2"
      />
      <p className="mt-6 text-lg text-gray-700">
        We bring your dream renovations to life with elegance and precision.
      </p>
    </div>
  );
};

export default App;
