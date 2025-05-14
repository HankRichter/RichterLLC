import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full" /> */}
          <span className="text-xl font-bold">Richter LLC</span>
        </div>
        <nav className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-blue-600">
            Projects
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
