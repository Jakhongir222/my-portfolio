import React from 'react';
import about from '../images/about.png';
import '../styles/About.css';
import { handleScroll } from './handleScroll';

export const About = () => {


  return (
    <div className="about-container">
      <div className="left-container">
        <h1>Hi there, I'm Jakhongir</h1>
        <p>I am a full-stack software developer based in Stockholm.</p>
        <a href="#about-me" onClick={handleScroll} className="learn-more">Learn more</a>
      </div>
      <div className="right-container">
        <img src={about} alt="about page" height={560} />
      </div>
    </div>
  );
};
