//Componente principal

import React from 'react';
import ReactDOM from 'react-dom/client';
import './Stylesheet/Home/index.css';
import { BrowserRouter} from 'react-router-dom';
import App from './Routes/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
);
