import { useRef, useEffect } from "react";
import useCursorPosition from "@components/hooks/useCursorPosition";
import "./mouse-follow.scss";

const MouseFollow = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useCursorPosition();

  useEffect(() => {
    if (ref.current) {
      ref.current.animate(
        {
          left: `${x}px`,
          top: `${y}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    }
  }, [x, y]);

  return <div ref={ref} className="mouse-follow"></div>;
};

export default MouseFollow;
