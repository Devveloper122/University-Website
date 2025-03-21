import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure Better education for better world.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque alias neque est? Eos quidem, repellendus obcaecati labore facere consequatur. </p>

            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
