import { useEffect, useRef } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import { useIsOnTop } from '@components/hooks/useIsOnTop';
import './notes.scss';

const NoteTwo = () => {
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const noteTwoRef = useRef<HTMLDivElement>(null);

  const isInViewport = useIntersection(
    noteTwoRef,
    isMobile ? -50 : -100
  );

  useEffect(() => {
    if (isInViewport) {
      noteTwoRef.current?.classList.add('show-note');
    }
  }, [isInViewport]);

  return (
    <div className="container">
      <section
        id="note-two"
        ref={noteTwoRef}
        className="notes-two"
      >
        <h3>
          Investing time in fundamentals is essential, build
          a strong base and enjoy the ride.
        </h3>
      </section>
    </div>
  );
};

export default NoteTwo;
