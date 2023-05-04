import { useEffect, useRef } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import { useCursorFollowing } from '@components/hooks/useCursorFollowing';
import { useCursorPosition } from '@components/hooks/useCursorPosition';

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
  const ctaRef = useRef<HTMLButtonElement>(null);

  const isInViewport = useIntersection(workCardRef, -250);
  const isFollowing = useCursorFollowing({
    targetRef: workCardRef
  });
  const { x, y, clientX, clientY } = useCursorPosition();

  useEffect(() => {
    if (isInViewport) {
      workCardRef.current?.classList.add('show-work-card');
    }
  }, [isInViewport]);

  useEffect(() => {
    if (ctaRef.current && workCardRef.current) {
      if (isFollowing) {
        ctaRef.current.classList.remove('hide-card-cta');
        ctaRef.current.classList.add('show-card-cta');
        const card =
          workCardRef.current.getBoundingClientRect();
        ctaRef.current.animate(
          {
            left: `${clientX - card.left}px`,
            top: `${clientY - card.top}px`
          },
          { duration: 500, fill: 'forwards' }
        );
      } else {
        ctaRef.current.classList.remove('show-card-cta');
        ctaRef.current.classList.add('hide-card-cta');
      }
    }
  }, [isFollowing, x, y]);

  const handleCardClick = () =>
    window.open(work.link, '_blank');

  return (
    <div
      key={work.id}
      ref={workCardRef}
      className={`work-list--${work.id}`}
    >
      <h2>{work.title}</h2>
      <h3>{work.type}</h3>
      <img src={work.image} alt="work-image" />
      <button ref={ctaRef} onClick={handleCardClick}>
        Discover
      </button>
    </div>
  );
};

export default WorkCard;
