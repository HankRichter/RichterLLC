import React from "react";
import useCarousel from "../hooks/useCarousel";

const yourItemsArrayHere = [
  {
    name: "Object 1",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    description: "Description 1",
  },
  {
    name: "Object 2",
    images: ["image4.jpg", "image5.jpg", "image6.jpg"],
    description: "Description 2",
  },
  {
    name: "Object 3",
    images: ["image7.jpg", "image8.jpg", "image9.jpg"],
    description: "Description 3",
  },
];

const ImageCarousel = ({ images }) => {
  const { visibleItems, next, prev, visibleIndex } = useCarousel(
    images,
    1,
    true
  );

  return (
    <div>
      <button onClick={prev}>Previous</button>
      {visibleItems.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
      <button onClick={next}>Next</button>
    </div>
  );
};

const CombinedCarousel = ({ items }) => {
  const { visibleItems, next, prev, visibleIndex } = useCarousel(
    items,
    1,
    true
  );

  return (
    <div>
      <button onClick={prev}>Previous</button>
      {visibleItems.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <ImageCarousel images={item.images} />
          <p>{item.description}</p>
        </div>
      ))}
      <button onClick={next}>Next</button>
    </div>
  );
};

const Carousel = () => {
  return (
    <div>
      <h2>Combined Carousel</h2>
      <CombinedCarousel items={yourItemsArrayHere} />
    </div>
  );
};

export default Carousel;
