import { useState, useEffect, RefObject } from "react";

interface Position {
  x: number;
  y: number;
}

const useMouseFollowElement = (ref: RefObject<HTMLElement>): Position => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const element = ref.current;
    if (element) {
      window.addEventListener("mousemove", onMouseMove);
      return () => {
        element.removeEventListener("mousemove", onMouseMove);
      };
    }
  }, [ref]);

  return position;
};

export default useMouseFollowElement;
