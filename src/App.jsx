import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Programs from './Components/Programs/Programs'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navbar/>}>
                <Route index element={<Home/>}/>

                <Route path='/Program' element={<Programs/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Campus' element={<Campus/>}/>
                <Route path='/Testimonils' element={<Testimonials/>}/>
                <Route path='/Contact' element={<Contact/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
