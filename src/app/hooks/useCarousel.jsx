import { useState, useEffect } from "react";

function getVisibleItems(items, index, number) {
  if (!items.length || number <= 0) {
    return [];
  }
  return items.slice(index, index + number);
}

function useCarousel(items, visibleNumber, wrapAround) {
  const maxIndex = Math.max(items.length - visibleNumber, 0);
  const minIndex = 0;
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(
    getVisibleItems(items, 0, visibleNumber)
  );
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(visibleIndex === maxIndex);

  useEffect(() => {
    setVariables(0);
  }, [items, visibleNumber]);

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
    if (!items.length) {
      setVisibleIndex(0);
      setVisibleItems([]);
      setIsFirst(true);
      setIsLast(true);
      return;
    }

    const boundedIndex = Math.min(Math.max(index, minIndex), maxIndex);

    setVisibleIndex(boundedIndex);
    setVisibleItems(getVisibleItems(items, boundedIndex, visibleNumber));
    setIsFirst(boundedIndex === minIndex);
    setIsLast(boundedIndex === maxIndex);
  }

  function goTo(index) {
    setVariables(index);
  }

  return { visibleItems, next, prev, goTo, isFirst, isLast, visibleIndex };
}

export default useCarousel;
