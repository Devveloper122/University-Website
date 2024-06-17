import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "17f95a93-f909-4608-9af6-c1a1275316de");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message  <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis assumenda obcaecati eum officiis repellendus necessitatibus consequatur ipsum illum, velit impedit sunt debitis laboriosam ad exercitationem quae recusandae magnam modi autem, excepturi esse est, cum dolorem! Illo temporibus quasi fugiat.</p>
            <ul>
                <li ><img src={mail_icon} alt="" />Contact@gmail.com</li>
                <li><img src={phone_icon} alt="" />6387505058</li>
                <li><img src={location_icon} alt="" />IIIT sonepat <br /> Miami,USA</li>
            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label >Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label >Phone number</label>
                <input type="tell" name='phone' placeholder='Enter your mobile number' required/>
                <label >Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>

                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>

            <span>{result}</span>



        </div>

      
    </div>
  )
}

export default Contact
