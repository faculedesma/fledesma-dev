import { ReactNode } from 'react';
import './secondary-button.scss';

type SecondaryButtonProps = {
  label?: string | ReactNode;
  backgroundColor?: string;
  onClick?: () => void;
};

export const SecondaryButton = ({
  label = '',
  backgroundColor = '#ffffff',
  onClick = () => null
}: SecondaryButtonProps) => {
  return (
    <button
      className="secondary-button"
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
