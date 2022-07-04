import React, {useRef} from 'react';
import emailjs from "emailjs-com";

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const form = useRef()
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_wtjs4qs', 'template_9q0g3vn', form.current, 'qBjJALND4i_Urpbgc');
    e.target.reset();
  }
  
  return (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Booking a Table online</h1>
      <p className="p__opensans">And never miss our latest event</p>
    </div>
    <form ref={form} onSubmit={sendEmail} className="">
          <input type="text " name='name' placeholder='Your Full Name' required />
          <input type="email " name='email' placeholder='Enter your Email' required />
          <input type="text " name='subject' placeholder='Your subject' required />
          <textarea name="message" rows="7" placeholder='Enter Your Message' required ></textarea>
          <button className="custom__button" type='submit'>Send Message</button>
    </form>
  </div>
);

}
export default Newsletter;
