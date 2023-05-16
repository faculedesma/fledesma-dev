import { useEffect, useRef } from 'react';
import { HTML } from '@assets/svgs/techs/HTML';
import { Javascript } from '@assets/svgs/techs/Javascript';
import { React } from '@assets/svgs/techs/React';
import { CSS } from '@assets/svgs/techs/CSS';
import { Typescript } from '@assets/svgs/techs/Typescript';
import { NodeJS } from '@assets/svgs/techs/NodeJS';
import { Git } from '@assets/svgs/techs/Git';
import { Figma } from '@assets/svgs/techs/Figma';
import { useIntersection } from '@components/hooks/useIntersection';
import { useCursorPosition } from '@components/hooks/useCursorPosition';
import Squares from '@assets/images/squares.png';

interface ITechnologiesProps {
  isMobile: boolean;
}

export const Technologies: React.FC<ITechnologiesProps> = ({
  isMobile
}) => {
  const technologiesRef = useRef<HTMLDivElement>(null);
  const squaresRef = useRef<HTMLImageElement>(null);

  const { x, y } = useCursorPosition();
  const isInViewport = useIntersection(
    squaresRef,
    isMobile ? -75 : -150
  );

  useEffect(() => {
    if (isInViewport) {
      technologiesRef.current?.classList.add(
        'show-technologies'
      );
    }
  }, [isInViewport]);

  useEffect(() => {
    if (squaresRef.current && isInViewport) {
      squaresRef.current.animate(
        {
          left: `${x / 10}px`,
          top: `${y / 10}px`
        },
        { duration: 1618 * 2, fill: 'forwards' }
      );
    }
  }, [x, y]);

  return (
    <div ref={technologiesRef} className="technologies">
      <React />
      <Javascript />
      <HTML />
      <CSS />
      <Typescript />
      <NodeJS />
      <Git />
      <Figma />
      <img
        ref={squaresRef}
        src={Squares}
        alt="squares"
        draggable="false"
        loading="lazy"
      />
    </div>
  );
};
