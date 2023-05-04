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
  const workCardRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(workCardRef, -250);

  useEffect(() => {
    if (isInViewport) {
      workCardRef.current?.classList.add('show-work-card');
    }
  }, [isInViewport]);

  const handleCardClick = (link: string) =>
    window.open(link, '_blank');

  return (
    <div
      key={work.id}
      ref={workCardRef}
      className={`work-list--${work.id}`}
      onClick={() => handleCardClick(work.link)}
    >
      <h2>{work.title}</h2>
      <h3>{work.type}</h3>
      <img src={work.image} alt="work-image" />
    </div>
  );
};

export default WorkCard;
