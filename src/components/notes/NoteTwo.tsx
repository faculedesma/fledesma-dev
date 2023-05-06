import { useEffect, useRef } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import './notes.scss';

const NoteTwo = () => {
  const noteTwoRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(noteTwoRef, -300);

  useEffect(() => {
    if (isInViewport) {
      noteTwoRef.current?.classList.add('show-note');
    }
  }, [isInViewport]);

  return (
    <div className="container">
      <div ref={noteTwoRef} className="notes-two">
        <h3>
          Investing time in fundamentals is essential, build
          a strong base and enjoy the ride.
        </h3>
      </div>
    </div>
  );
};

export default NoteTwo;
