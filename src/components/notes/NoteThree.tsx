import { useEffect, useRef } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import Ilusion from '@assets/images/ilusion.webp';

import './notes.scss';

const NoteThree = () => {
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const noteThreeRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(
    noteThreeRef,
    isMobile ? -50 : -150
  );

  useEffect(() => {
    if (isInViewport) {
      noteThreeRef.current?.classList.add('show-note');
    }
  }, [isInViewport]);

  return (
    <div className="container">
      <div ref={noteThreeRef} className="notes-three">
        <h3>
          Every project, like every person, is unique.
          Reflecting that energy into the designs makes the
          difference.
        </h3>
        <img
          src={Ilusion}
          alt="ilusion"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default NoteThree;
