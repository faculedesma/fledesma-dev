import { useRef, useEffect } from 'react';
import useCursorPosition from '@components/hooks/useCursorPosition';
import Spline from '@splinetool/react-spline';
import { Social } from '@components/social/Social';
import './hero.scss';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useCursorPosition();

  useEffect(() => {
    if (
      ref.current &&
      !window.matchMedia('(max-width: 480px)').matches &&
      !window.matchMedia('(min-width: 320px)').matches
    ) {
      ref.current.style.transform = `translate(-${
        x / 30
      }px, 0px)`;
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
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Hero;
