import { useRef, useEffect } from 'react';
import { Social } from '@components/social/Social';
import { ScrollButton } from '@components/buttons/ScrollButton';
import ShapesBG from '@assets/images/shapes-bg.png';
import { useCursorPosition } from '@components/hooks/useCursorPosition';
import { useIntersection } from '@components/hooks/useIntersection';
import TrianglePNG from '@assets/images/triangle.png';
import TrianglePsychPNG from '@assets/images/triangle-psych.png';
import TriangleBGPNG from '@assets/images/triangle-bg.png';
import TriangleShapesPNG from '@assets/images/shapes-triangle.png';
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
  const shapesRef = useRef<HTMLImageElement>(null);

  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;

  const { x, y, moveRight } = useCursorPosition();
  const isPupilInViewport = useIntersection(pupilRef, -100);

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
      shapesRef.current &&
      isPupilInViewport
    ) {
      backgroundRef.current.animate(
        {
          left: `${x / 20}px`,
          top: `${y / 20}px`
        },
        { duration: 1618 * 2, fill: 'forwards' }
      );
      if (!isMobile) {
        pupilRef.current.animate(
          {
            translate: `${moveRight ? '' : '-'}${
              x / 40
            }px ${y / 20}px`
          },
          { duration: 1618 / 2, fill: 'forwards' }
        );
        shapesRef.current.animate(
          {
            translate: `0 -${y / 50}px`
          },
          { duration: 1618 / 2, fill: 'forwards' }
        );
      }
    }
  }, [x, y, moveRight]);

  const handleOnScrollHover = () => {
    if (
      backgroundRef.current &&
      eyeRef.current &&
      pupilRef.current
    ) {
      backgroundRef.current.classList.add('focus-bg');
      eyeRef.current.classList.remove('unfocus-eye');
      eyeRef.current.classList.add('focus-eye');
      pupilRef.current.classList.remove('unfocus-pupil');
      pupilRef.current.classList.add('focus-pupil');
    }
  };

  const handleOnScrollLeave = () => {
    if (
      backgroundRef.current &&
      eyeRef.current &&
      pupilRef.current
    ) {
      backgroundRef.current.classList.remove('focus-bg');
      eyeRef.current.classList.remove('focus-eye');
      eyeRef.current.classList.add('unfocus-eye');
      pupilRef.current.classList.remove('focus-pupil');
      pupilRef.current.classList.add('unfocus-pupil');
    }
  };

  const handleOnScrollClick = () => {
    const mouse = document.getElementById('mouse-follow');
    mouse?.classList.add('lighted');
  };

  return (
    <div className="hero-gradient">
      <div className="container">
        <div ref={heroRef} id="hero" className="hero">
          <div className="hero-triangle">
            <img
              src={TrianglePNG}
              className="hero-triangle--normal"
              alt="triangle"
              loading="lazy"
            />
            <img
              src={TrianglePsychPNG}
              className="hero-triangle--psych"
              alt="triangle-pscyh"
              loading="lazy"
            />
            <div
              ref={shapesRef}
              className="hero-triangle--shapes"
            >
              <img
                src={TriangleShapesPNG}
                alt="triangle-shapes"
                loading="lazy"
              />
            </div>
            <img
              src={TriangleBGPNG}
              className="hero-triangle--bg"
              alt="triangle-bg"
              loading="lazy"
            />
            <div className="eye">
              <img
                ref={eyeRef}
                src={EyePNG}
                alt="eye"
                loading="lazy"
              />
              <div
                ref={pupilRef}
                className="eye-pupil"
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
            onTouchStart={handleOnScrollHover}
            onTouchEnd={handleOnScrollLeave}
            onClick={handleOnScrollClick}
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
