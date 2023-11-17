import { useState, useEffect } from "react";

function getVisibleItems(items, index, number) {
  return items.slice(index, index + number);
}

function useCarousel(items, visibleNumber, wrapAround) {
  const maxIndex = items.length - visibleNumber;
  const minIndex = 0;
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(
    getVisibleItems(items, 0, visibleNumber)
  );
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(visibleIndex == maxIndex);

  function next() {
    let nextIndex = visibleIndex + 1;
    if (nextIndex > maxIndex) {
      nextIndex = wrapAround ? minIndex : maxIndex;
    }
    setVariables(nextIndex);
  }

  function prev() {
    let nextIndex = visibleIndex - 1;
    if (nextIndex < minIndex) {
      nextIndex = wrapAround ? maxIndex : 0;
    }
    setVariables(nextIndex);
  }

  function setVariables(index) {
    setVisibleIndex(index);
    setVisibleItems(getVisibleItems(items, index, visibleNumber));
    setIsFirst(index === minIndex);
    setIsLast(index === maxIndex);
  }

  return { visibleItems, next, prev, isFirst, isLast, visibleIndex };
}

export default useCarousel;
