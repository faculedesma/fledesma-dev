import { useRef, useEffect } from 'react';
import { useCursorPosition } from '@components/hooks/useCursorPosition';
import './mouse-follow.scss';

const MouseFollow = (): JSX.Element => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { x, y } = useCursorPosition();

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.classList.add('show-point');
    }
  }),
    [];

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.animate(
        {
          left: `${x}px`,
          top: `${y}px`
        },
        { duration: 1618 * 2, fill: 'forwards' }
      );
    }
  }, [x, y]);

  return (
    <div
      ref={cursorRef}
      className="mouse-follow point"
    ></div>
  );
};

export default MouseFollow;
