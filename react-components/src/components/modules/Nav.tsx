import React from 'react';
import { NavLink } from 'react-router-dom';

const data = ['Main', 'About Us', 'Form'];

export const Nav = () => (
  <nav className="nav">
    {data.map((item) => (
      <NavLink
        key={item}
        className={({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '')}
        to={`/${item === 'Main' ? '' : item.toLowerCase().replace(' ', '-')}`}
      >
        {item}
      </NavLink>
    ))}
  </nav>
);
