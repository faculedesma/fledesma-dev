import React, { useRef } from 'react';
import './toggle-button.scss';

type ToggleButtonProps = {
  onClick: () => void;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  onClick
}) => {
  const toggleRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    onClick();
    if (toggleRef.current) {
      if (toggleRef.current.classList.contains('clicked')) {
        toggleRef.current.classList.remove('clicked');
      } else {
        toggleRef.current.classList.add('clicked');
      }
    }
  };

  return (
    <div
      ref={toggleRef}
      onClick={handleClick}
      className="toggle"
    >
      <div></div>
      <div></div>
    </div>
  );
};
