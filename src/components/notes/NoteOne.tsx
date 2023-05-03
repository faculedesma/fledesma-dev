import { useRef, useEffect } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import './notes.scss';

export const NoteOne = () => {
  const noteOneRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(noteOneRef, -300);

  useEffect(() => {
    if (isInViewport) {
      noteOneRef.current?.classList.add('show-note');
    }
  }, [isInViewport]);

  return (
    <div className="container">
      <div ref={noteOneRef} className="notes-one">
        <h3>
          Passionate about building user interfaces that are
          aesthetically pleasing, highly functional, and
          intuitive.
        </h3>
      </div>
    </div>
  );
};
