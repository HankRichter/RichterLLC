"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const blacksmithingImages = [
  "Blacksmithing 1.png",
  "Blacksmithing 2.png",
  "Blacksmithing 3.png",
  "Blacksmithing 4.png",
  "Blacksmithing 5.png",
  "Blacksmithing 6.png",
  "Blacksmithing 7.png",
  "Blacksmithing 8.png",
  "Blacksmithing 9.jpeg",
  "Blacksmithing 10.jpeg",
  "Blacksmithing 11.jpeg",
  "Blacksmithing 12.jpeg",
  "Blacksmithing 13.png",
  "Blacksmithing 14.png",
];

function buildImagePath(fileName) {
  return `/BlacksmithingProjects/${encodeURIComponent(fileName)}`;
}

function shuffleImages(images) {
  const shuffled = [...images];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}

const Projects = () => {
  const [randomizedImages, setRandomizedImages] = useState(blacksmithingImages);

  useEffect(() => {
    setRandomizedImages(shuffleImages(blacksmithingImages));
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Blacksmithing</h1>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
        {randomizedImages.map((fileName, index) => (
          <div
            key={fileName}
            className="mb-6 break-inside-avoid rounded-2xl overflow-hidden border-2 border-gray-200 shadow-md bg-white"
          >
            <Image
              src={buildImagePath(fileName)}
              alt={`Blacksmithing project ${index + 1}`}
              width={0}
              height={0}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;