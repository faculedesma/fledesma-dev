import { lazy, useRef, useEffect } from 'react';
import { Social } from '@components/social/Social';
import { ScrollButton } from '@components/buttons/ScrollButton';
import ShapesBG from '@assets/images/shapes-bg.png';
import { useCursorPosition } from '@components/hooks/useCursorPosition';
import './hero.scss';

const Spline = lazy(
  () => import('@splinetool/react-spline')
);

interface IHeroProps {
  isLoading: boolean;
  handleLoaded: () => void;
}

const Hero: React.FC<IHeroProps> = ({
  isLoading,
  handleLoaded
}) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { x, y } = useCursorPosition();

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
    if (backgroundRef.current) {
      backgroundRef.current.animate(
        {
          left: `${x / 20}px`,
          top: `${y / 20}px`
        },
        { duration: 1618 * 2, fill: 'forwards' }
      );
    }
  }, [x, y]);

  const handleOnScrollHover = () => {
    if (backgroundRef.current) {
      backgroundRef.current.classList.add('scale-bg');
    }
  };

  const handleOnScrollLeave = () => {
    if (backgroundRef.current) {
      backgroundRef.current.classList.remove('scale-bg');
    }
  };

  return (
    <div className="hero-gradient">
      <div className="container">
        <div ref={heroRef} id="hero" className="hero">
          <div className="hero-canvas">
            <Spline
              scene="https://prod.spline.design/PsvclvB5wVsUm7ZW/scene.splinecode"
              onLoad={handleLoaded}
            />
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
          <img src={ShapesBG} alt="bg-shapes" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
