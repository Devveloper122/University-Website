import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div>
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>Nurtering tommorow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam expedita consectetur praesentium doloremque, cumque fugiat perspiciatis! Nam aliquam assumenda iste, adipisci itaque in voluptate impedit dolores! Harum quaerat eius suscipit ratione. Quas commodi saepe voluptates! Rerum nulla ipsum aliquid magnam aspernatur, iure, excepturi eius expedita quas eveniet non eos!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, doloremque nobis commodi amet necessitatibus id sit sequi laborum recusandae labore maiores est beatae mollitia tempora reprehenderit quibusdam autem consectetur aliquam, inventore odio facilis ab eius. Inventore impedit asperiores consequuntur. Velit.</p>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, accusantium aut omnis quis ex, obcaecati deserunt assumenda veniam alias sint voluptates saepe sunt dolore. Dicta excepturi reprehenderit inventore deleniti maxime.</p>

            </div>

        </div>
      
    </div>
  )
}

export default About
