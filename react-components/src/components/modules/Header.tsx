import React from 'react';
import { Nav } from './Nav';

export const Header = ({ title }: { title: string }) => (
  <header className="header">
    <h1>{title}</h1>
    <Nav />
  </header>
);
