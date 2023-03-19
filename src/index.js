import React from 'react';
import ReactDOM from 'react-dom/client';

//  external import
import { ThemeProvider } from '@mui/material';

//  internal imports
import './index.css';
import App from './App';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
