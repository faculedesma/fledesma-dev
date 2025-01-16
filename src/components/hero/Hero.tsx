import { useRef, useEffect } from 'react';

import SectionTitle from '@components/titles/SectionTitle';
import { useIntersection } from '@components/hooks/useIntersection';

import './hero.scss';
import HoverRandomString from '@components/text/HoverRandomString';

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
    <div className="container" style={{ paddingTop: 120 }}>
      <section ref={heroRef} id="hero" className="hero">
        <div className="hero-titles">
          <div className="hero-titles--top">
            {/* <SectionTitle text="Facundo Ledesma" /> */}
            <SectionTitle text="Facundo Ledesma" />
            <h1>engineer &amp;</h1>
            <HoverRandomString heading="ux designer" stringLength={12} />
            {/* <h1 data-value="ux designer">ux designer</h1> */}
          </div>
          <div className="hero-titles--bottom">
            {/* <span></span> */}
            <h5>Build it simple and beautiful</h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
