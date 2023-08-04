import { ReactNode } from 'react';
import Lottie from 'lottie-react';
import LoadingJSON from '@assets/animations/loading.json';
import './primary-button.scss';

type PrimaryButtonProps = {
  label?: string | ReactNode;
  loading?: boolean;
  onClick?: () => void;
};

export const PrimaryButton = ({
  label = '',
  onClick = () => null,
  loading = false,
  ...rest
}: PrimaryButtonProps) => {
  return (
    <button
      className="primary-button"
      onClick={onClick}
      disabled={loading}
      {...rest}
    >
      {loading && (
        <div className="primary-button--loader"></div>
      )}
      {label}
    </button>
  );
};
