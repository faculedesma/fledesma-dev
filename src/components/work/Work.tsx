import DaniloBG from '@assets/images/danilo-red.webp';
import NamewizBG from '@assets/images/namewiz-bg.webp';
import LampBG from '@assets/images/lamp.png';
import WorkCard from './WorkCard';
import { useRef, useEffect } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import './work.scss';

const works = [
  {
    id: 'danilo',
    title: 'New goals, new website',
    type: 'Danilo Andrade',
    image: DaniloBG,
    link: 'https://danilo-andrade.com/'
  },
  {
    id: 'namewiz',
    title: 'Build it fast, test & iterate',
    type: 'Namewiz',
    image: NamewizBG,
    link: 'https://faculedesma.github.io/namewiz-fe/'
  },
  {
    id: 'art',
    title: 'Journey of selfknowledge',
    type: 'Art Concept',
    image: LampBG,
    link: 'https://facundo-ledesma.me/'
  }
];

const Work = () => {
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const worksRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(
    worksRef,
    isMobile ? -50 : -150
  );

  useEffect(() => {
    if (isInViewport) {
      worksRef.current?.classList.add('show-section-title');
    }
  }, [isInViewport]);

  return (
    <div className="container">
      <div ref={worksRef} id="work" className="work">
        <h3>Work</h3>
        <div className="work-list">
          {works.map((work) => {
            return <WorkCard key={work.id} work={work} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
