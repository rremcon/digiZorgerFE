import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import reportWebVitals from './reportWebVitals';
import ClickContextProvider from "./context/ClickContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <Router>
          <AuthContextProvider>
              <ClickContextProvider>
              <App />
              </ClickContextProvider>
          </AuthContextProvider>
      </Router>
  // </React.StrictMode>
);

reportWebVitals();
