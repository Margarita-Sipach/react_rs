import React, { ChangeEvent, useRef } from 'react';

interface InputProps {
  attributes: {
    type?: string;
    placeholder: string;
    value?: string;
  };
  setInnerRef?: (arg: object) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input = ({ attributes, setInnerRef, onChange, onKeyDown }: InputProps) => {
  const innerRef = useRef<HTMLInputElement>(null);

  return (
    <input
      {...attributes}
      ref={innerRef}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        setInnerRef &&
          setInnerRef({
            [attributes.placeholder.toLowerCase().replace(' ', '')]: innerRef.current?.value,
          });
      }}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => onKeyDown && onKeyDown(e)}
    />
  );
};
