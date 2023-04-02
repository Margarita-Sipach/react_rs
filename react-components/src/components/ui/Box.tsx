import React, { useRef, useState } from 'react';

interface BoxProps {
  title: string;
  type: 'checkbox' | 'radio';
  values: string[];
  setInnerRef: (arg: object) => void;
}

export const Box = ({ values, type, title, setInnerRef }: BoxProps) => {
  const innerRef = useRef<Array<HTMLInputElement | null>>([]);
  const [newVal, setNewVal] = useState({});

  return (
    <div className="checkbox">
      {values.map((item, index) => (
        <label key={item} htmlFor={item}>
          <input
            type={type}
            name={title}
            value={item}
            id={item}
            ref={(item) => innerRef.current.push(item)}
            onClick={() => {
              const val =
                type === 'radio'
                  ? { [item]: innerRef.current[index]?.checked }
                  : { ...newVal, [item]: innerRef.current[index]?.checked };
              setInnerRef({
                [title.toLowerCase()]: Object.entries(val).reduce(
                  (acc: string[], item) => (item[1] ? [...acc, item[0]] : acc),
                  []
                ),
              });
              setNewVal(val);
            }}
          />
          {item}
        </label>
      ))}
    </div>
  );
};
