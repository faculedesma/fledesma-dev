import React, { useState, useEffect } from 'react';
import './hover-random.string.scss';

// Utility function to generate a random string
const generateRandomString = (length: number): string => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

interface HoverRandomStringProps {
  heading: string; // The heading text
  stringLength?: number; // Length of the random string to generate (default: 8)
  cascadeSpeed?: number; // Speed of cascading effect in milliseconds (default: 100)
}

const HoverRandomString: React.FC<HoverRandomStringProps> = ({
  heading,
  stringLength = 8,
  cascadeSpeed = 100
}) => {
  const [displayText, setDisplayText] = useState<string>(heading);
  const [originalText, setOriginalText] = useState<string>(heading);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    let currentIteration = 0;

    const id = setInterval(() => {
      if (currentIteration < heading.length) {
        setDisplayText(
          heading
            .split('')
            .map((char, index) => (index <= currentIteration ? char : generateRandomString(1)))
            .join('')
        );
        currentIteration++;
      } else {
        clearInterval(id);
      }
    }, cascadeSpeed);

    setIntervalId(id);
  };

  const handleMouseLeave = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setDisplayText(originalText);
  };

  useEffect(() => {
    setOriginalText(heading);
    setDisplayText(heading);
  }, [heading]);

  return (
    <div className="hover-random-string">
      <h1 className="hover-heading" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {displayText}
      </h1>
    </div>
  );
};

export default HoverRandomString;
