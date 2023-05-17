import { useEffect, useRef } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import Ilusion from '@assets/images/ilusion.png';

import './notes.scss';

const NoteThree = () => {
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const noteThreeRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(
    noteThreeRef,
    isMobile ? -100 : -300
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
          Build a strong base and enjoy the ride. Build a
          strong base and enjoy the ride.
        </h3>
        <img
          src={Ilusion}
          alt="ilusion"
          draggable="false"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default NoteThree;
