import { useRef, useEffect } from "react";
import useCursorPosition from "@components/hooks/useCursorPosition";
import Spline from "@splinetool/react-spline";
import { Twitter } from "@assets/svgs/Twitter";
import { Behance } from "@assets/svgs/Behance";
import { Dribble } from "@assets/svgs/Dribble";
import { LinkedIn } from "@assets/svgs/LinkedIn";
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
        <h1>designer</h1>
        <h2>Build it fast, simple and beautiful.</h2>
      </div>
      <div className="hero-social">
        <Twitter />
        <Behance />
        <Dribble />
        <LinkedIn />
      </div>
    </div>
  );
};

export default Hero;
