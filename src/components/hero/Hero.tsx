import { useRef, useEffect } from 'react';
import { Social } from '@components/social/Social';
import useCursorPosition from '@components/hooks/useCursorPosition';
import { useIntersection } from '@components/hooks/useIntersection';
import Spline from '@splinetool/react-spline';
import './hero.scss';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(heroRef, 0);
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
    if (isInViewport) {
      heroRef.current?.classList.add('show-hero');
    }
  }, [isInViewport]);

  useEffect(() => {
    if (ref.current) {
      // ref.current.style.transform = `translate(${
      //   x / 100
      // }px, 0px)`;
    }
  }, [x, y]);

  return (
    <div className="hero-gradient">
      <div className="container">
        <div ref={heroRef} id="hero" className="hero">
          <div ref={ref} className="hero-canvas">
            <Spline scene="https://prod.spline.design/PsvclvB5wVsUm7ZW/scene.splinecode" />
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
