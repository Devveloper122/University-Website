import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render( 
    <React.StrictMode>
        <Home/>
    </React.StrictMode> ,
    document.getElementById('root')
);