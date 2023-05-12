import { useRef, useEffect, useState } from 'react';
import { ArrowDown } from '@assets/svgs/ArrowDown';
import './scroll-button.scss';

const CircleText = () => {
  const radius = 60; // radius of the circle
  const textPathId = 'text-path'; // id for the textPath element

  return (
    <svg
      viewBox="-100 -100 200 200"
      width="200"
      height="200"
    >
      <path
        d={`M 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${
          2 * radius
        } a ${radius} ${radius} 0 1 1 0 -${2 * radius}`}
        fill="none"
        stroke="#000"
        strokeWidth="1"
      />

      <defs>
        <path
          id={textPathId}
          d={`M 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${
            2 * radius
          } a ${radius} ${radius} 0 1 1 0 -${2 * radius}`}
        />
      </defs>

      <text>
        <textPath
          xlinkHref={`#${textPathId}`}
          startOffset="50%"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Scroll & Explore
        </textPath>
      </text>
    </svg>
  );
};

export const ScrollButton = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  const handleClick = () => {
    const noteOne = document.getElementById('note-one');
    noteOne?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button onClick={handleClick} className="scroll-button">
      <div className="scroll-button--circle"></div>
      <div className="scroll-button--icon">
        <ArrowDown />
      </div>
      <div
        ref={textRef}
        className="scroll-button--text-path"
      >
        <CircleText />
        <CircleText />
      </div>
    </button>
  );
};
