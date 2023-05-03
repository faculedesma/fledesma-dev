import { useState, useEffect, RefObject } from 'react';

export const useIntersection = (
  element: RefObject<HTMLElement>,
  offset = 0
) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin: `${offset}px` }
    );

    if (element.current) {
      observer.observe(element.current);
    }

    return () => {
      if (element.current) {
        observer.unobserve(element.current);
      }
    };
  }, [element, offset]);

  return isVisible;
};
