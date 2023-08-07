import { useRef, useEffect } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import './hero.scss';

interface IHeroProps {
  isLoading: boolean;
}

const Hero: React.FC<IHeroProps> = ({ isLoading }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  const isHeroInViewport = useIntersection(heroRef, -100);

  useEffect(() => {
    if (!isLoading) {
      if (isHeroInViewport) {
        heroRef.current?.classList.remove('hide-hero');
        heroRef.current?.classList.add('show-hero');
      } else {
        heroRef.current?.classList.remove('show-hero');
        heroRef.current?.classList.add('hide-hero');
      }
    }
  }, [isLoading, isHeroInViewport]);

  return (
    <div className="container">
      <section ref={heroRef} id="hero" className="hero">
        <div className="hero-titles">
          <div className="hero-titles--top">
            <p>Facundo Ledesma</p>
            <h1>developer &amp;</h1>
            <h1 data-value="ui/ux designer">
              ui/ux designer
            </h1>
          </div>
          <div className="hero-titles--bottom">
            <p>Build it simple and beautiful.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
