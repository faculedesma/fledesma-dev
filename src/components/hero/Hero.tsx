import { useRef, useEffect } from 'react';
import { Social } from '@components/social/Social';
import { ScrollButton } from '@components/buttons/ScrollButton';
import { useCursorPosition } from '@components/hooks/useCursorPosition';
import { useIntersection } from '@components/hooks/useIntersection';
import TrianglePNG from '@assets/images/triangle.webp';
import TrianglePsychPNG from '@assets/images/triangle-psych.webp';
import TriangleBGPNG from '@assets/images/triangle-bg.webp';
import TriangleShapesPNG from '@assets/images/shapes-triangle.webp';
import EyePNG from '@assets/images/eye.webp';
import { useIsOnTop } from '@components/hooks/useIsOnTop';
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

  const isOnTop = useIsOnTop(eyeRef);

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
    setTimeout(() => {
      randomChars();
    }, 3200);

    return () => {
      titleRef.current?.removeEventListener(
        'mouseover',
        randomChars
      );
    };
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
      isPupilInViewport
    ) {
      backgroundRef.current.animate(
        {
          left: `${x / 40}px`,
          top: `${y / 40}px`
        },
        { duration: 1618 * 2, fill: 'forwards' }
      );
      if (!isMobile) {
        pupilRef.current.animate(
          {
            left: `${x / 20}%`,
            top: `${y / 20}%`
          },
          { duration: 1618 / 2, fill: 'forwards' }
        );
      }
    }
  }, [x, y, moveRight]);

  useEffect(() => {
    if (eyeRef.current) {
      const mouse = document.getElementById('mouse-follow');
      if (isOnTop) {
        mouse?.classList.remove('point');
        mouse?.classList.add('eye');
      } else {
        mouse?.classList.add('point');
        mouse?.classList.remove('eye');
      }
    }
  }, [isOnTop]);

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
            />
            <img
              src={TrianglePsychPNG}
              className="hero-triangle--psych"
              alt="triangle-pscyh"
            />
            <img
              ref={shapesRef}
              src={TriangleShapesPNG}
              className="hero-triangle--shapes"
              alt="triangle-shapes"
            />
            <img
              src={TriangleBGPNG}
              className="hero-triangle--bg"
              alt="triangle-bg"
            />
            <div className="eye">
              <img ref={eyeRef} src={EyePNG} alt="eye" />
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
      </div>
      <div
        className="hero-background"
        ref={backgroundRef}
      ></div>
    </div>
  );
};

export default Hero;
