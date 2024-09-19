import React, { type FC } from 'react';
import './Button.css';

interface ButtonProps {
  title: string;
  action?: () => void;
  border?: boolean;
}

const Button: FC<ButtonProps> = ({ title, action, border }) => {
  const buttonClass = border ? 'button border' : 'button';

  return (
    <button
      className={buttonClass}
      onClick={action ? () => action() : undefined}
    >
      {title}
    </button>
  );
};

export default Button;