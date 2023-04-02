import React, { useEffect, useRef, useState } from 'react';

interface FileProps {
  setInnerRef?: (arg: object) => void;
  img: string;
  sendData: boolean;
}

export const File = ({ setInnerRef, sendData }: FileProps) => {
  const innerRef = useRef<HTMLInputElement>(null);
  const [currentImg, setCurrentImg] = useState('src/assets/default.png');

  const onLoadFile = () => {
    const files = innerRef.current?.files;
    if (files && files[0]) {
      const objectUrl = URL.createObjectURL(files[0]);
      setCurrentImg(objectUrl);
      setInnerRef && setInnerRef({ img: objectUrl });
    }
  };

  useEffect(() => {
    setCurrentImg('src/assets/default.png');
  }, [sendData]);

  return (
    <div className="file">
      <img className="file__img" src={currentImg} alt="" />
      <input type="file" className="file__input" ref={innerRef} onChange={onLoadFile} />
    </div>
  );
};
