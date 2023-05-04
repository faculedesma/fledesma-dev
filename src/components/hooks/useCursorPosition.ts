import { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

export const useCursorPosition = (): Position => {
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const updatePosition = (event: Event) => {
      if (event instanceof MouseEvent) {
        setPosition({
          x: window.pageXOffset + event.clientX,
          y: window.pageYOffset + event.clientY
        });
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener(
        'mousemove',
        updatePosition
      );
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  return position;
};
