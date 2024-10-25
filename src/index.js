import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import MemoizedApp from './client/app';
/**
 * Main Entry Point
 * 
 * Renders the root component of the application, wrapping it with Redux Provider 
 * and React Router for state management and routing.
 * 
 * @returns {JSX.Element}
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <MemoizedApp />
      </Router>
    </Provider>
  </React.StrictMode>
);