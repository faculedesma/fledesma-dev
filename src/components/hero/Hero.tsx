import { useRef, useEffect } from "react";
import useCursorPosition from "@components/hooks/useCursorPosition";
import Spline from "@splinetool/react-spline";
import "./hero.scss";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useCursorPosition();

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(-${x / 30}px, -${y / 30}px)`;
    }
  }, [x, y]);

  return (
    <div className="hero">
      <div ref={ref} className="hero-canvas">
        <Spline scene="https://prod.spline.design/PsvclvB5wVsUm7ZW/scene.splinecode" />
      </div>
      <div className="hero-title">
        <h1>Developer &</h1>
        <h1>Designer</h1>
        <h2>Build it fast, simple and beautiful.</h2>
      </div>
    </div>
  );
};

export default Hero;
