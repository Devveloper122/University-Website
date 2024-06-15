import React from "react";
import { BrowserRouter ,NavLink,Route ,Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Home from "./Home";
import './index.css'
import Mainheader from "./Mainheader";


const App=()=>{

    return (
        <BrowserRouter>
                <Routes>
                     {/*This is nexted routing .Here parent(always shown) + child's component (if <outlet> tag is used) 
                        is shoen*/}

                    <Route path='/' element={<Mainheader/>} >
                        // index prop is used to show this.
                        <Route index element={<Home/>}/>

                        <Route path='/About' element={<About/>} />
                        <Route path='/Contact' element={<Contact/>} />
                        <Route path='*' element={<Error/>} />
                    </Route>
                </Routes>
        </BrowserRouter>
    );

};

export default App;
