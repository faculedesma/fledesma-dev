import { useRef, useEffect } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import './notes.scss';

const NoteOne = () => {
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const noteOneRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(
    noteOneRef,
    isMobile ? -100 : -300
  );

  useEffect(() => {
    if (isInViewport) {
      noteOneRef.current?.classList.add('show-note');
    }
  }, [isInViewport]);

  return (
    <div className="container">
      <div
        ref={noteOneRef}
        id="note-one"
        className="notes-one"
      >
        <h3>
          Passionate about building user interfaces
          harmonious, highly functional, and intuitive.
        </h3>
      </div>
    </div>
  );
};

export default NoteOne;
