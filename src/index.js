import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartContextProvider } from './Context/CartContext';

import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);