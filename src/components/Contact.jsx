import React from 'react';
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import '../styles/Contact.css';

export const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Me</h1>
      <div className="contact-cards">
        <a href='mailto:jakhongir.burkhanov@appliedtechnology.se' className="contact-card">
          <img src={email} alt='Email icon' className="contact-icon"/>
          <h3 className="contact-title">Email</h3>
          <p className="contact-text">Let's get in touch</p>
        </a>
        <a href='https://www.linkedin.com/in/jakburkhanov/' className="contact-card">
          <img src={linkedin} alt='LinkedIn icon' className="contact-icon"/>
          <h3 className="contact-title">LinkedIn</h3>
          <p className="contact-text">Let's connect</p>
        </a>
        <a href='https://github.com/Jakhongir222' className="contact-card">
          <img src={github} alt='GitHub icon' className="contact-icon"/>
          <h3 className="contact-title">GitHub</h3>
          <p className="contact-text">Checkout my repos</p>
        </a>
      </div>
    </div>
  );
};
