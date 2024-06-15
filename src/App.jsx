import React from "react";
import { BrowserRouter ,NavLink,Route ,Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from "./Home";
import './index.css'

const App=()=>{

    {/* we are using browser router because we need to connect our browser url with our app */}
    return (
        // <>
            <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/About' element={<About/>} />
                        <Route path='/Contact' element={<Contact/>} />
                    </Routes>

                    {/* <h1>Hello i am React.</h1> */}
            </BrowserRouter>
        // </>
    );

};

export default App;
