import React from 'react';

interface UIWrapperProps {
  title: string;
  children: React.ReactElement;
}

export const UIWrapper = ({ title, children }: UIWrapperProps) => (
  <div className="">
    <div>{title}</div>
    {children}
  </div>
);
