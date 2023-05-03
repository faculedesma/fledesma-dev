import { useEffect, useRef } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import './notes.scss';

export const NoteThree = () => {
  const noteThreeRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(noteThreeRef, -300);

  useEffect(() => {
    if (isInViewport) {
      noteThreeRef.current?.classList.add('show-note');
    }
  }, [isInViewport]);

  return (
    <div className="container">
      <div ref={noteThreeRef} className="notes-two">
        <h3>
          Build a strong base and enjoy the ride. Build a
          strong base and enjoy the ride.
        </h3>
      </div>
    </div>
  );
};
