import { useRef, useEffect } from 'react';
import { ArrowDown } from '@assets/svgs/ArrowDown';
import './scroll-button.scss';

export const ScrollButton = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  const handleClick = () => {
    const noteOne = document.getElementById('note-one');
    noteOne?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (textRef.current) {
      textRef.current.innerHTML = textRef.current.innerText
        .split('')
        .map(
          (char, index) =>
            `<span style="transform:rotate(${
              index * 12
            }deg)">${char}</span>`
        )
        .join('');
    }
  }, []);

  return (
    <button className="scroll-button">
      <div className="scroll-button--icon">
        <ArrowDown />
      </div>
      <div className="scroll-button--text">
        <p ref={textRef}>
          Scroll & Explore ・ Scroll & Explore ・
        </p>
      </div>
      <div
        onClick={handleClick}
        className="scroll-button--bg"
      ></div>
    </button>
  );
};
