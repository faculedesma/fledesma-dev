import DaniloBG from '@assets/images/danilo-red.png';
import NamewizBG from '@assets/images/namewiz-bg.png';
import NinaBG from '@assets/images/nina-bg.png';
import LampBG from '@assets/images/lamp-bg.png';
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
    type: 'Art Portfolio',
    image: LampBG,
    link: 'https://facundo-ledesma.me/'
  },
  {
    id: 'nina',
    title: "Let's sell it online",
    type: 'Nina Style',
    image: NinaBG,
    link: 'https://www.instagram.com/shopninastyle/'
  }
];

const Work = () => {
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const worksRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(
    worksRef,
    isMobile ? -50 : -200
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
