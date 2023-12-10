import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { InputProvider, InputContext } from './context/InputContext.tsx';
import { DataProvider, DataContext } from './context/DataContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataProvider>
      <InputProvider>
        <App />
      </InputProvider>
    </DataProvider>
  </React.StrictMode>
);
