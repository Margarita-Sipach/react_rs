import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => (
  <nav className="nav">
    <NavLink className={({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '')} to="/">
      Main
    </NavLink>
    <NavLink
      className={({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '')}
      to="/about-us"
    >
      About Us
    </NavLink>
  </nav>
);
