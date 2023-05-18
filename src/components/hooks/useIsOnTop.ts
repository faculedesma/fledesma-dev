import React, { useEffect, useState } from 'react';

export const useIsOnTop = (
  ref: React.RefObject<HTMLElement>
): boolean => {
  const [isOnTop, setIsOnTop] = useState(false);

  const handleMouseEnter = () => {
    setIsOnTop(true);
  };

  const handleMouseLeave = () => {
    setIsOnTop(false);
  };

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (node) {
        node.removeEventListener(
          'mouseenter',
          handleMouseEnter
        );
        node.removeEventListener(
          'mouseleave',
          handleMouseLeave
        );
      }
    };
  }, [ref]);

  return isOnTop;
};
