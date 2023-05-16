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
import DiceOne from '@assets/images/dice-one.png';
import DiceTwo from '@assets/images/dice-two.png';
import DiceFour from '@assets/images/dice-four.png';

interface ITechnologiesProps {
  isMobile: boolean;
}

export const Technologies: React.FC<ITechnologiesProps> = ({
  isMobile
}) => {
  const technologiesRef = useRef<HTMLDivElement>(null);
  const diceOneRef = useRef<HTMLImageElement>(null);
  const diceTwoRef = useRef<HTMLImageElement>(null);
  const diceFourRef = useRef<HTMLImageElement>(null);

  const { x, y } = useCursorPosition();
  const isInViewport = useIntersection(
    diceOneRef,
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
    if (
      diceOneRef.current &&
      diceTwoRef.current &&
      diceFourRef.current &&
      isInViewport
    ) {
      diceOneRef.current.animate(
        {
          left: `${x / 10}px`,
          top: `${y / 10}px`
        },
        { duration: 1618 * 2, fill: 'forwards' }
      );
      diceTwoRef.current.animate(
        {
          left: `${x / 20}px`,
          top: `-${y / 20}px`
        },
        { duration: 1618 / 2, fill: 'forwards' }
      );
      diceFourRef.current.animate(
        {
          left: `-${x / 30}px`,
          top: `${y / 30}px`
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
      <div className="dices">
        <img
          ref={diceOneRef}
          src={DiceOne}
          alt="dice-one"
          draggable="false"
          loading="lazy"
        />
        <img
          ref={diceTwoRef}
          src={DiceTwo}
          alt="dice-two"
          draggable="false"
          loading="lazy"
        />
        <img
          ref={diceFourRef}
          src={DiceFour}
          alt="dice-four"
          draggable="false"
          loading="lazy"
        />
      </div>
    </div>
  );
};
