import React from 'react';

interface ButtonProps {
  children: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
}

export const Button = ({ children, type = 'button', onClick }: ButtonProps) => (
  <button
    type={type}
    onClick={(e) => {
      e.preventDefault();
      onClick && onClick(e);
    }}
  >
    {children}
  </button>
);
