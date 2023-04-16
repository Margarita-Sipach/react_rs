import React from 'react';

interface ModalProps {
  children: React.ReactElement;
  onClick: (arg: boolean) => void;
}
export const Modal = ({ children, onClick }: ModalProps) => {
  return (
    <div className="modal" onClick={() => onClick(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__close" onClick={() => onClick(false)}>
          X
        </div>
        {children}
      </div>
    </div>
  );
};
