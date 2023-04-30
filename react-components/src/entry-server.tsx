import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { App } from './App';
import { StaticRouter } from 'react-router-dom/server';
import './index.css';

export const render = ({ path }) => {
  return ReactDOMServer.renderToPipeableStream(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>
  );
};
