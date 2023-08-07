import { useEffect, useRef } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
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
          I elevate your online presence with high
          performing websites that sets you apart.
        </h3>
      </section>
    </div>
  );
};

export default NoteTwo;
