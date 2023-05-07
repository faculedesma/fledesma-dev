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
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const workCardRef = useRef<HTMLDivElement>(null);

  const isInViewport = useIntersection(
    workCardRef,
    isMobile ? 0 : -250
  );
  const isFollowing = useCursorFollowing({
    targetRef: workCardRef
  });
  useEffect(() => {
    if (isInViewport) {
      workCardRef.current?.classList.add('show-work-card');
    }
  }, [isInViewport]);

  useEffect(() => {
    const mouse = document.getElementById('mouse-follow');
    if (isFollowing) {
      mouse?.classList.add('discover');
      mouse?.classList.add('show-discover');
      mouse?.classList.remove('point');
      mouse?.classList.remove('show-point');
    } else {
      mouse?.classList.add('point');
      mouse?.classList.add('show-point');
      mouse?.classList.remove('discover');
      mouse?.classList.remove('show-discover');
    }
  }, [isFollowing]);

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
      />
    </div>
  );
};

export default WorkCard;
