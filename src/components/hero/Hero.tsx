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
      ref.current.style.transform = `translate(-${x / 30}px, 0px)`;
    }
  }, [x, y]);

  return (
    <div className="container">
      <div id="hero" className="hero">
        <div ref={ref} className="hero-canvas">
          <Spline scene="https://prod.spline.design/PsvclvB5wVsUm7ZW/scene.splinecode" />
        </div>
        <div className="hero-title">
          <h1>Developer &</h1>
          <h1>designer</h1>
          <h3>Build it fast, simple and beautiful.</h3>
        </div>
        <div className="hero-social">
          <a
            href="https://twitter.com/faculedesma93"
            target="_blank"
            aria-label="Go to Facundo's Twitter account."
          >
            <Twitter />
          </a>
          <a
            href="https://dribbble.com/fledesma"
            target="_blank"
            aria-label="Go to Facundo's Dribble account."
          >
            <Dribble />
          </a>
          <a
            href="https://www.behance.net/facundoledesma5"
            target="_blank"
            aria-label="Go to Facundo's Behance account."
          >
            <Behance />
          </a>
          <a
            href="https://www.linkedin.com/in/facundo-ledesma/"
            target="_blank"
            aria-label="Go to Facundo's LinkedIn account."
          >
            <LinkedIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
