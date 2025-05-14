import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const snapshot = await getDocs(collection(db, "TEST"));
      const docs = snapshot.docs.map((doc) => doc.data());

      const categoryMap = {};

      docs.forEach((doc) => {
        const category = doc.category;
        if (category && !categoryMap[category] && doc.main_image) {
          categoryMap[category] = {
            label: category,
            value: category,
            image: doc.main_image,
          };
        }
      });

      setCategories(Object.values(categoryMap));
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto">
      {!selectedCategory ? (
        <>
          <h1 className="text-4xl font-bold text-center m-12">Our Projects</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {categories.map((category) => (
              <div
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className="cursor-pointer border-2 rounded-2xl overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105 hover:border-blue-500"
              >
                <img
                  src={category.image}
                  alt={category.label}
                  className="w-full h-48 object-cover"
                />
                <div className="text-center font-semibold text-lg">
                  {category.label}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <Carousel selectedCategory={selectedCategory} />

          <div className="text-center mt-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
            >
              Go Back
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
