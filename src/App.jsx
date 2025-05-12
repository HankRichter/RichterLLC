import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <section className="text-center my-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <img
          src="/main-photo.jpg"
          alt="Main"
          className="mx-auto rounded-2xl shadow-lg w-1/2"
        />
        <p className="mt-6 text-lg text-gray-700">
          I am a creative developer with a passion for impactful projects.
        </p>
      </section>
      <Carousel />
      <footer className="text-center border-t pt-8 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <p className="text-gray-600">Email: hankricter97@gmail.com</p>
        <p className="text-gray-600">Phone: (989) 413-7843</p>
      </footer>
    </div>
  );
};

export default App;
