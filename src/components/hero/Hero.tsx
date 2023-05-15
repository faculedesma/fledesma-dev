import { useRef, useEffect } from 'react';
import { Social } from '@components/social/Social';
import { ScrollButton } from '@components/buttons/ScrollButton';
import ShapesBG from '@assets/images/shapes-bg.png';
import { useCursorPosition } from '@components/hooks/useCursorPosition';
import { useIntersection } from '@components/hooks/useIntersection';
import TrianglePNG from '@assets/images/triangle.png';
import EyePNG from '@assets/images/eye.png';
import './hero.scss';

interface IHeroProps {
  isLoading: boolean;
}

const Hero: React.FC<IHeroProps> = ({ isLoading }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const eyeRef = useRef<HTMLImageElement>(null);
  const pupilRef = useRef<HTMLDivElement>(null);

  const { x, y } = useCursorPosition();
  const isBGInViewport = useIntersection(
    backgroundRef,
    -100
  );

  useEffect(() => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    let interval: ReturnType<typeof setInterval> | null =
      null;

    const randomChars = () => {
      let iteration = 0;

      clearInterval(interval!);

      interval = setInterval(() => {
        titleRef.current!.innerText = titleRef
          .current!.innerText.split('')
          .map((letter, index) => {
            if (index < iteration) {
              return titleRef.current!.dataset.value![
                index
              ];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join('');

        if (
          iteration >=
          titleRef.current!.dataset.value!.length
        ) {
          clearInterval(interval!);
        }

        iteration += 1 / 3;
      }, 30);
    };

    titleRef.current?.addEventListener(
      'mouseover',
      randomChars
    );

    return () =>
      titleRef.current?.removeEventListener(
        'mouseover',
        randomChars
      );
  }, []);

  useEffect(() => {
    if (!isLoading) {
      heroRef.current?.classList.add('show-hero');
    }
  }, [isLoading]);

  useEffect(() => {
    if (
      backgroundRef.current &&
      eyeRef.current &&
      pupilRef.current &&
      isBGInViewport
    ) {
      backgroundRef.current.animate(
        {
          left: `${x / 20}px`,
          top: `${y / 20}px`
        },
        { duration: 1618 * 2, fill: 'forwards' }
      );
      eyeRef.current.animate(
        {
          left: `${x / 100}px`,
          top: `${y / 100}px`
        },
        { duration: 1618, fill: 'forwards' }
      );
      pupilRef.current.animate(
        {
          left: `${x / 50}px`,
          top: `${y / 50}px`
        },
        { duration: 1618, fill: 'forwards' }
      );
    }
  }, [x, y]);

  const handleOnScrollHover = () => {
    if (
      backgroundRef.current &&
      eyeRef.current &&
      pupilRef.current
    ) {
      backgroundRef.current.classList.add('scale-bg');
      eyeRef.current.classList.add('scale-eye');
      pupilRef.current.classList.add('scale-pupil');
    }
  };

  const handleOnScrollLeave = () => {
    if (
      backgroundRef.current &&
      eyeRef.current &&
      pupilRef.current
    ) {
      backgroundRef.current.classList.remove('scale-bg');
      eyeRef.current.classList.remove('scale-eye');
      pupilRef.current.classList.remove('scale-pupil');
    }
  };

  return (
    <div className="hero-gradient">
      <div className="container">
        <div ref={heroRef} id="hero" className="hero">
          <div className="hero-canvas">
            <img src={TrianglePNG} alt="triangle" />
            <div className="eye">
              <img ref={eyeRef} src={EyePNG} alt="eye" />
              <div
                ref={pupilRef}
                className="eye-ball"
              ></div>
            </div>
          </div>
          <div className="hero-title">
            <div className="hero-title--top">
              <h1>Developer &amp;</h1>
              <h1 ref={titleRef} data-value="designer">
                designer
              </h1>
            </div>
            <h3>Build it fast, simple and beautiful.</h3>
          </div>
          <div className="hero-social">
            <Social />
          </div>
          <div
            ref={buttonRef}
            onMouseEnter={handleOnScrollHover}
            onMouseLeave={handleOnScrollLeave}
            className="hero-scroll"
          >
            <ScrollButton />
          </div>
        </div>
        <div
          className="hero-background"
          ref={backgroundRef}
        >
          <img
            src={ShapesBG}
            alt="bg-shapes"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
