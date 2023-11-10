// index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import './index.css'
const root = document.getElementById('root');

createRoot(root).render(<App />);
