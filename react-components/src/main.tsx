import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';
import { Provider } from 'react-redux';
import { toolkitSlice } from './slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: toolkitSlice.reducer,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
