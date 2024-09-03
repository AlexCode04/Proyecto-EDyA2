import React from 'react';
import ReactDOM from 'react-dom/client';
import './Stylesheet/Home/index.css';
import App from './Components/Home/App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> 
      <Routes>
        <Route path="/" element={<App />} /> {/* Página principal */}
        <Route path="/login" element={<Login />} /> {/* Página de Login */}
      </Routes>
    </Router>
  </React.StrictMode>
);
