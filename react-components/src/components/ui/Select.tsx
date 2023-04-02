import React, { useRef } from 'react';

interface SelectProps {
  title: string;
  values: string[];
  setInnerRef?: (arg: object) => void;
}

export const Select = ({ title, values, setInnerRef }: SelectProps) => {
  const innerRef = useRef<HTMLSelectElement>(null);

  return (
    <select
      name={title}
      ref={innerRef}
      id={title}
      onChange={() => {
        setInnerRef &&
          setInnerRef({
            [title.toLowerCase()]: innerRef.current?.value,
          });
      }}
    >
      {values.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
