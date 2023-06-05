import React from "react";
import useCarousel from "../hooks/useCarousel";

const Carousel = () => {
  const { visibleItems, next, prev, visibleIndex } = useCarousel(
    yourItemsArrayHere,
    1,
    true
  );

  return;
};
