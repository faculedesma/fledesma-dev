import React, { useEffect, useRef } from 'react';
import './toggle-button.scss';

type ToggleButtonProps = {
  onClick: () => void;
  isOpen: boolean;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  onClick,
  isOpen
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

  useEffect(() => {
    if (
      !isOpen &&
      toggleRef.current &&
      toggleRef.current.classList.contains('clicked')
    ) {
      toggleRef.current.classList.remove('clicked');
    }
  }, [isOpen]);

  return (
    <div
      ref={toggleRef}
      onClick={handleClick}
      className="toggle"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
