import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better education for better world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sint, facilis nihil amet, in ab magni iusto ad voluptatibus placeat iure ipsa nesciunt fugiat minima facere itaque maxime dolore quasi! </p>

            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
