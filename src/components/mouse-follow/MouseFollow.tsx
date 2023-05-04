import { useRef, useEffect } from 'react';
import { useCursorPosition } from '@components/hooks/useCursorPosition';
import './mouse-follow.scss';

const MouseFollow = (): JSX.Element => {
  const refBackground = useRef<HTMLDivElement>(null);
  const refPoint = useRef<HTMLDivElement>(null);
  const { x, y } = useCursorPosition();

  useEffect(() => {
    if (refBackground.current) {
      refBackground.current.animate(
        {
          left: `${x}px`,
          top: `${y}px`
        },
        { duration: 3000, fill: 'forwards' }
      );
    }
    if (refPoint.current) {
      refPoint.current.animate(
        {
          left: `${x}px`,
          top: `${y}px`
        },
        { duration: 3000, fill: 'forwards' }
      );
    }
  }, [x, y]);

  return (
    <>
      {/* <div
        ref={refBackground}
        className="mouse-follow--bg"
      ></div> */}
      <div
        ref={refPoint}
        className="mouse-follow--point"
      ></div>
    </>
  );
};

export default MouseFollow;
