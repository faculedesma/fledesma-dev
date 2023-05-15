import { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
  clientX: number;
  clientY: number;
  moveRight: boolean;
}

export const useCursorPosition = (): Position => {
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 0,
    clientX: 0,
    clientY: 0,
    moveRight: false
  });

  useEffect(() => {
    const updatePosition = (event: Event) => {
      if (event instanceof MouseEvent) {
        setPosition({
          x: window.pageXOffset + event.clientX,
          y: window.pageYOffset + event.clientY,
          clientX: event.clientX,
          clientY: event.clientY,
          moveRight: event.movementX > 0
        });
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('wheel', updatePosition);

    return () => {
      window.removeEventListener(
        'mousemove',
        updatePosition
      );
      window.removeEventListener('wheel', updatePosition);
    };
  }, []);

  return position;
};
