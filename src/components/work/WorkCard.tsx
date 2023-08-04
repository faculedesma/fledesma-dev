import { useEffect, useRef } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import { useIsOnTop } from '@components/hooks/useIsOnTop';

interface IWork {
  id: string;
  title: string;
  type: string;
  image: string;
  link: string;
}

interface IWorkCardProps {
  work: IWork;
}

const WorkCard: React.FC<IWorkCardProps> = ({ work }) => {
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const workCardRef = useRef<HTMLDivElement>(null);
  const isOnTop = useIsOnTop(workCardRef);

  const isInViewport = useIntersection(
    workCardRef,
    isMobile ? 0 : -250
  );

  useEffect(() => {
    if (isInViewport) {
      workCardRef.current?.classList.add('show-work-card');
    }
  }, [isInViewport]);

  useEffect(() => {
    if (workCardRef.current) {
      const mouse = document.getElementById('mouse-follow');
      if (isOnTop) {
        mouse?.classList.remove('point');
        mouse?.classList.add('visit');
      } else {
        mouse?.classList.add('point');
        mouse?.classList.remove('visit');
      }
    }
  }, [isOnTop]);

  const handleCardClick = () =>
    window.open(work.link, '_blank');

  return (
    <section
      id={work.id}
      ref={workCardRef}
      onClick={handleCardClick}
      className={`work-list--${work.id}`}
    >
      <h2>{work.title}</h2>
      <h3>{work.type}</h3>
      <img
        src={work.image}
        alt="work-image"
        draggable="false"
      />
    </section>
  );
};

export default WorkCard;
