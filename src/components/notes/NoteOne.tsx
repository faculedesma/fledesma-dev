import { useRef, useEffect } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import './notes.scss';

const NoteOne = () => {
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const noteOneRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(
    noteOneRef,
    isMobile ? -50 : -100
  );

  useEffect(() => {
    if (isInViewport) {
      noteOneRef.current?.classList.add('show-note');
    }
  }, [isInViewport]);

  return (
    <div className="container">
      <section
        ref={noteOneRef}
        id="note-one"
        className="notes-one"
      >
        <h3>
          Passionate about crafting beautiful, functional,
          and user-friendly interfaces.
        </h3>
      </section>
    </div>
  );
};

export default NoteOne;
