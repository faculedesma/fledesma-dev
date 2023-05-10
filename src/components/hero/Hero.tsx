import { lazy, useRef, useEffect } from 'react';
import { Social } from '@components/social/Social';
import { ScrollButton } from '@components/buttons/ScrollButton';
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
          <div ref={buttonRef} className="hero-scroll">
            <ScrollButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
