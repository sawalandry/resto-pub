import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">RN3, Rumonge, Bdi</p>
        <p className="p__opensans">
          WhatsApp: <a href="https://api.whatsapp.com/send?phone+256776050007" blank>+256 776050007</a>
        </p>
        <p className="p__opensans">
          Email: <a href="mailto:machinelab2021@gmail.com" blank>machinelab2021@gmail.com</a>
        </p>
      </div>

      <div className="app__footer-links_logo">
        {/* <img src={images.gericht} alt="footer_logo" /> */}
        <h1><a href="/" >BAR&RESTO.|</a></h1>
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} alt="spoon underline" className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">Created by Landry Sawa INGABIRE in 2022 BAT Inc. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;

