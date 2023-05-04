import { useRef, useEffect } from 'react';
import { Social } from '@components/social/Social';
import { ScrollButton } from '@components/buttons/ScrollButton';
import { useCursorPosition } from '@components/hooks/useCursorPosition';
import { useCursorFollowing } from '@components/hooks/useCursorFollowing';
import Spline from '@splinetool/react-spline';
import './hero.scss';

interface IHeroProps {
  isLoading: boolean;
}

const Hero: React.FC<IHeroProps> = ({ isLoading }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const isFollowing = useCursorFollowing({
    targetRef: buttonRef
  });
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
    if (buttonRef.current) {
      buttonRef.current.animate(
        {
          left: `${isFollowing ? x / 20 : 0}px`,
          bottom: `${isFollowing ? y / 20 : 0}px`
        },
        { duration: 500, fill: 'forwards' }
      );
    }
  }, [isFollowing, x, y]);

  return (
    <div className="hero-gradient">
      <div className="container">
        <div ref={heroRef} id="hero" className="hero">
          <div className="hero-canvas">
            <Spline scene="https://prod.spline.design/PsvclvB5wVsUm7ZW/scene.splinecode" />
          </div>
          <div className="hero-title">
            <div className="hero-title--top">
              {/* <h1>Software</h1> */}
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
