import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

ReactDOM.render( 
    <React.StrictMode>
        <Home/>
    </React.StrictMode> ,
    document.getElementById('root')
);