import { useRef, useEffect } from 'react';
import { useCursorPosition } from '@components/hooks/useCursorPosition';
import './mouse-follow.scss';

const MouseFollow = (): JSX.Element => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { x, y } = useCursorPosition();

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
      id="mouse-follow"
      ref={cursorRef}
      className="mouse-follow point"
    >
      <div className="mouse-follow--bg"></div>
      <div className="mouse-follow--image"></div>
      <p className="mouse-follow--text">Visit</p>
    </div>
  );
};

export default MouseFollow;
