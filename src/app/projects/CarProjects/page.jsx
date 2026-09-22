"use client";
import BeforeAfterCards from "../../components/BeforeAfterCard/page.jsx";
import { carProjects } from "./carData";

export default function CarProjects() {
  return (
    <div className="container mx-auto px-4 py-10">
      <BeforeAfterCards cars={carProjects} viewBasePath="/projects/CarProjects" />
    </div>
  );
}
