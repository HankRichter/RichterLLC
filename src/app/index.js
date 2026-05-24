import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";

import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";
import App from "./App";
import Projects from "./projects/CarProjects/page";
import Contact from "./components/Contact/page";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/projects/CarProjects" element={<Projects />} />
            <Route path="/projects/Blacksmithing" element={<Projects />} />
            <Route path="/components/Contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);
