import Spline from "@splinetool/react-spline";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-canvas">
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
