import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AboutUs } from './components/pages/AboutUs';
import { NotFound } from './components/pages/NotFound';
import { Main } from './components/pages/Main';

export const App = () => (
  <div className="wrapper">
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);
