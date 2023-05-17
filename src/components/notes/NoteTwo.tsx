import { useEffect, useRef } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import { useCursorPosition } from '@components/hooks/useCursorPosition';
import DiceOne from '@assets/images/dice-one.png';
import DiceTwo from '@assets/images/dice-two.png';
import DiceFour from '@assets/images/dice-four.png';
import './notes.scss';

const NoteTwo = () => {
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const noteTwoRef = useRef<HTMLDivElement>(null);
  const diceOneRef = useRef<HTMLImageElement>(null);
  const diceTwoRef = useRef<HTMLImageElement>(null);
  const diceFourRef = useRef<HTMLImageElement>(null);

  const isInViewport = useIntersection(
    noteTwoRef,
    isMobile ? -50 : -100
  );
  const { x, y } = useCursorPosition();

  useEffect(() => {
    if (isInViewport) {
      noteTwoRef.current?.classList.add('show-note');
      noteTwoRef.current?.classList.add('show-dices');
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
          top: `-${y / 10}px`
        },
        { duration: 1618 * 2, fill: 'forwards' }
      );
      diceTwoRef.current.animate(
        {
          left: `${x / 20}px`,
          top: `${y / 20}px`
        },
        { duration: 1618 / 2, fill: 'forwards' }
      );
      diceFourRef.current.animate(
        {
          left: `${x / 30}px`,
          top: `-${y / 30}px`
        },
        { duration: 1618 * 2, fill: 'forwards' }
      );
    }
  }, [x, y]);

  return (
    <div className="container">
      <div
        id="note-two"
        ref={noteTwoRef}
        className="notes-two"
      >
        <h3>
          Investing time in fundamentals is essential, build
          a strong base and enjoy the ride.
        </h3>
        <div className="dices">
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
          <img
            ref={diceOneRef}
            src={DiceOne}
            alt="dice-one"
            draggable="false"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteTwo;
