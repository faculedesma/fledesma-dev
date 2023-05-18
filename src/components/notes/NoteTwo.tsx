import { useEffect, useRef } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import { useIsOnTop } from '@components/hooks/useIsOnTop';
import './notes.scss';

const NoteTwo = () => {
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const noteTwoRef = useRef<HTMLDivElement>(null);
  const squareBigRef = useRef<HTMLImageElement>(null);
  const squareSmallRef = useRef<HTMLImageElement>(null);
  const circlesRef = useRef<HTMLImageElement>(null);

  const isOnTop = useIsOnTop(circlesRef);

  const isInViewport = useIntersection(
    noteTwoRef,
    isMobile ? -50 : -100
  );

  useEffect(() => {
    if (isInViewport) {
      noteTwoRef.current?.classList.add('show-note');
      squareBigRef.current?.classList.add('show-bg');
    }
  }, [isInViewport]);

  useEffect(() => {
    if (circlesRef.current) {
      const mouse = document.getElementById('mouse-follow');
      if (isOnTop) {
        mouse?.classList.remove('point');
        mouse?.classList.add('video');
      } else {
        mouse?.classList.add('point');
        mouse?.classList.remove('video');
      }
    }
  }, [isOnTop]);

  return (
    <div className="container">
      <div
        id="note-two"
        ref={noteTwoRef}
        className="notes-two"
      >
        <h3>
          Investing time in fundamentals is essential, build
          a strong base and enjoy the ride.
        </h3>
      </div>
      <div className="notes-two-bg">
        <div ref={squareBigRef} className="square-big">
          <div
            ref={squareSmallRef}
            className="square-small"
          >
            <div ref={circlesRef} className="circles"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteTwo;
