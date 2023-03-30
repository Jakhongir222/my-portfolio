import React from 'react';
import info from '../images/info.png';
import '../styles/AboutInfo.css';

export const AboutInfo = () => {
  return (
    <div className="about-info-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <img src={info} alt="about page" className="about-image" height={100}/>
        <div className="about-text">
        <p>Hey there, I'm Jakhongir Burkhonov, a full-stack Java developer who is passionate about writing clean, 
         efficient code. I completed the highly competitive bootcamp program at the School of Applied Technology in Stockholm,
         where I learned to turn my love for object-oriented programming and test-driven development into a successful career.
        But I'm more than just a coder - I'm also a creative problem-solver with a sharp eye for detail. My background in 
        Tourism Management has given me experience in communicating effectively with people 
        from all walks of life.</p>
        <p>When it comes to technology, I'm comfortable working with a variety of tools and languages, including front-end frameworks, 
        as well as back-end technologies. Whether I'm building RESTful APIs or designing beautiful, responsive user interfaces,
        I take pride in delivering work that meets the highest standards of quality and performance. If you're looking for a highly skilled,
        adaptable, and all-around awesome full-stack developer to join your team, I'm your guyCheck out my skills and projects below.</p>
        </div>
      </div>
    </div>
  );
}

