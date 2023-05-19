import { useEffect, useRef } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import { useIsOnTop } from '@components/hooks/useIsOnTop';
import { useTheme } from '@components/hooks/useTheme';

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

  const { isDarkMode } = useTheme();

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

  useEffect(() => {
    if (isDarkMode) {
      workCardRef.current?.classList.add(`${work.id}-dark`);
      workCardRef.current?.classList.remove(
        `${work.id}-light`
      );
    } else {
      workCardRef.current?.classList.add(
        `${work.id}-light`
      );
      workCardRef.current?.classList.remove(
        `${work.id}-dark`
      );
    }
  }, [isDarkMode]);

  const handleCardClick = () =>
    window.open(work.link, '_blank');

  return (
    <div
      id={work.id}
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
