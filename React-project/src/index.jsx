import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

createRoot(document.querySelector('#root')).render(<App />); // Nouelle façon react 18

// containers => statefull
// components => stateless