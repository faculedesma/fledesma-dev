import { useEffect, useRef } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import './notes.scss';

const NoteThree = () => {
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const noteThreeRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(
    noteThreeRef,
    isMobile ? -50 : -100
  );

  useEffect(() => {
    if (isInViewport) {
      noteThreeRef.current?.classList.add('show-note');
    }
  }, [isInViewport]);

  return (
    <div className="container">
      <section ref={noteThreeRef} className="notes-three">
        <h3>
          I infuse a unique essence into each design project
          to achieve a distinctive impact.
        </h3>
      </section>
    </div>
  );
};

export default NoteThree;
