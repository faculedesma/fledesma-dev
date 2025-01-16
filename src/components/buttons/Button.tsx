import React from 'react';
import clsx from 'clsx';
import * as LucideIcons from 'lucide-react';

import styles from './button.module.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  leadingIcon?: string;
  trailingIcon?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  leadingIcon,
  trailingIcon,
  ...restProps
}) => {
  const LeadingIconComponent = leadingIcon ? (LucideIcons as any)[leadingIcon] : null;
  const TrailingIconComponent = trailingIcon ? (LucideIcons as any)[trailingIcon] : null;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        { [styles['button--disabled']]: disabled },
        className
      )}
      {...restProps}
    >
      {LeadingIconComponent && (
        <span className={styles['button--icon']}>
          <LeadingIconComponent size={16} />
        </span>
      )}
      {children && <span>{children}</span>}
      {TrailingIconComponent && (
        <span className={styles['button--icon']}>
          <TrailingIconComponent size={16} />
        </span>
      )}
    </button>
  );
};

export default Button;
