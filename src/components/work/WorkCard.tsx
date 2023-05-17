import { useEffect, useRef } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';

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

  const isInViewport = useIntersection(
    workCardRef,
    isMobile ? 0 : -250
  );

  useEffect(() => {
    if (isInViewport) {
      workCardRef.current?.classList.add('show-work-card');
    }
  }, [isInViewport]);

  const handleCardClick = () =>
    window.open(work.link, '_blank');

  return (
    <div
      ref={workCardRef}
      onClick={handleCardClick}
      className={`work-list--${work.id}`}
    >
      <h2>{work.title}</h2>
      <h3>{work.type}</h3>
      <img
        loading="lazy"
        src={work.image}
        alt="work-image"
        draggable="false"
      />
    </div>
  );
};

export default WorkCard;
