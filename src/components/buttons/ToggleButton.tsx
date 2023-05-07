import React from 'react';
import './toggle-button.scss';

type ToggleButtonProps = {
  onClick: () => void;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  onClick
}) => {
  const handleClick = () => onClick();

  return (
    <div onClick={handleClick} className="toggle">
      <div></div>
      <div></div>
    </div>
  );
};
