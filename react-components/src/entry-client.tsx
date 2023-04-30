import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { toolkitSlice } from './slice';
import { configureStore } from '@reduxjs/toolkit';
import { characterApi } from './api';

export const store = configureStore({
  reducer: {
    [characterApi.reducerPath]: characterApi.reducer,
    toolkit: toolkitSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(characterApi.middleware),
});

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
