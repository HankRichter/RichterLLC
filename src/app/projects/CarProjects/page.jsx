"use client";
import React, { useMemo, useState } from "react";
import useCarousel from "../../hooks/useCarousel";

const carProjects = [
  {
    id: "1946-mg",
    name: "1946 MG",
    headerPhoto: "MG9.jpg",
    description:
      "Full restoration including body prep, paint correction, and interior refinishing.",
    images: [
      "MG1.jpg",
      "MG2.jpg",
      "MG3.jpg",
      "MG4.jpg",
      "MG5.jpg",
      "MG6.jpg",
      "MG7.jpg",
      "MG8.jpg",
      "MG9.jpg",
    ],
  },
  {
    id: "1963-catalina",
    name: "1963 Catalina",
    headerPhoto: "63Catalina 13.JPG",
    description:
      "Classic Pontiac brought back with custom detail work and showroom-level finishing.",
    images: [
      "63Catalina 1.jpg",
      "63Catalina 2.jpg",
      "63Catalina 3.jpg",
      "63Catalina 4.jpg",
      "63Catalina 5.jpg",
      "63Catalina 6.jpg",
      "63Catalina 7.jpg",
      "63Catalina 8.jpg",
      "63Catalina 9.jpg",
      "63Catalina 10.jpg",
      "63Catalina 11.jpg",
      "63Catalina 12.jpg",
      "63Catalina 13.JPG",
    ],
  },
  {
    id: "1967-camaro",
    name: "1967 Camaro",
    headerPhoto: "67Camaro 4.JPEG",
    description:
      "Performance-focused restoration with body alignment, paint refresh, and trim detailing.",
    images: [
      "67Camaro 1.jpg",
      "67Camaro 2.JPEG",
      "67Camaro 3.JPEG",
      "67Camaro 4.JPEG",
      "67Camaro 5.jpg",
      "67Camaro 6.jpg",
    ],
  },
  {
    id: "1970-k5-blazer",
    name: "1970 K5 Blazer",
    headerPhoto: "70K5 1.jpg",
    description:
      "Frame-up style project featuring body restoration and period-correct finishing touches.",
    images: [
      "70K5 1.jpg",
      "70K5 2.jpg",
      "70K5 3.jpg",
      "70K5 4.jpg",
      "70K5 5.jpg",
      "70K5 6.jpg",
      "70K5 7.jpg",
      "70K5 8.jpg",
      "70K5 9.jpg",
      "70K5 10.jpg",
    ],
  },
  {
    id: "1985-k5-blazer",
    name: "1985 K5 Blazer",
    headerPhoto: "K5 10.jpg",
    description:
      "Exterior and mechanical refresh project with updated finish and protective coatings.",
    images: [
      "K5 1.jpg",
      "K5 2.jpg",
      "K5 3.jpg",
      "K5 4.jpg",
      "K5 5.jpg",
      "K5 6.jpg",
      "K5 7.JPG",
      "K5 8.jpg",
      "K5 9.jpg",
      "K5 10.jpg",
    ],
  },
];

function buildImagePath(carName, fileName) {
  const encodedCarName = encodeURIComponent(carName);
  const encodedFileName = encodeURIComponent(fileName);
  return `/CarProjects/${encodedCarName}/${encodedFileName}`;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const activeProject = useMemo(
    () => carProjects.find((project) => project.id === selectedProject) ?? null,
    [selectedProject]
  );

  const activeImages = useMemo(() => activeProject?.images ?? [], [activeProject]);

  const { visibleItems, next, prev, goTo, visibleIndex } = useCarousel(
    activeImages,
    1,
    true
  );

  const activeImageName = visibleItems[0] ?? "";

  const activeImagePath =
    activeProject && activeImageName
      ? buildImagePath(activeProject.name, activeImageName)
      : "";

  const openProjectModal = (projectId) => {
    setSelectedProject(projectId);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Our Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {carProjects.map((project) => {
          const coverImage = buildImagePath(
            project.name,
            project.headerPhoto || project.images[0]
          );

          return (
            <button
              key={project.id}
              type="button"
              onClick={() => openProjectModal(project.id)}
              className="text-left cursor-pointer border-2 rounded-2xl overflow-hidden shadow-lg transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:border-blue-500 bg-white"
            >
              <img
                src={coverImage}
                alt={project.name}
                className="w-full h-52 sm:h-56 object-cover"
              />
              <div className="text-center font-semibold text-lg py-3 px-2">
                {project.name}
              </div>
            </button>
          );
        })}
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={closeProjectModal}
        >
          <div
            className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl sm:text-3xl font-bold">{activeProject.name}</h2>
              <button
                type="button"
                onClick={closeProjectModal}
                className="rounded-md px-3 py-1.5 bg-gray-900 text-white hover:bg-gray-700 transition"
              >
                Close
              </button>
            </div>

            <p className="text-gray-700 mb-5">{activeProject.description}</p>

            {activeImagePath ? (
              <img
                src={activeImagePath}
                alt={`${activeProject.name} preview`}
                className="w-full h-72 sm:h-[28rem] object-contain bg-gray-100 rounded-xl mb-4"
              />
            ) : (
              <div className="w-full h-72 sm:h-[28rem] bg-gray-100 rounded-xl mb-4" />
            )}

            <div className="flex items-center justify-between gap-3 mb-4">
              <button
                type="button"
                onClick={prev}
                className="rounded-md px-4 py-2 bg-gray-900 text-white hover:bg-gray-700 transition"
              >
                Left
              </button>
              <span className="text-sm text-gray-600">
                {visibleIndex + 1} / {activeProject.images.length}
              </span>
              <button
                type="button"
                onClick={next}
                className="rounded-md px-4 py-2 bg-gray-900 text-white hover:bg-gray-700 transition"
              >
                Right
              </button>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {activeProject.images.map((imageName, index) => {
                const imagePath = buildImagePath(activeProject.name, imageName);
                const isActive = index === visibleIndex;

                return (
                  <button
                    key={imageName}
                    type="button"
                    onClick={() => goTo(index)}
                    className={`rounded-lg overflow-hidden border-2 transition ${
                      isActive ? "border-blue-600" : "border-transparent hover:border-blue-300"
                    }`}
                  >
                    <img
                      src={imagePath}
                      alt={`${activeProject.name} ${index + 1}`}
                      className="w-full h-16 sm:h-20 object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
