import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import IntersectionObserver from './IntersectionObserver/IntersectionDemo';

ReactDOM.render(
  <React.StrictMode>
    <IntersectionObserver></IntersectionObserver>
  </React.StrictMode>,
  document.getElementById('root')
);
