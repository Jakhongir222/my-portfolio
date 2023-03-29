import React from 'react';
import skills from './skillsData';
import frontend from '../images/frontend.webp'
import backend from '../images/backend.webp'
import tools from '../images/tools.png'
import '../styles/Skills.css';

export const Skills = () => {
  return (
    <div className="container">
      <h1 className="title">My Skills</h1>
      <div className="column">
        <img src={frontend} alt='frontend' className="section-icon"/>
        <h3>FrontEnd</h3>
        <hr className="line" />
        <div>
          {skills.find((skill) => skill.title === 'FrontEnd').skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
      </div>
      <div className="column">
        <img src={backend} alt='backend' className="section-icon"/>
        <h3>BackEnd</h3>
        <hr className="line" />
        <div>
          {skills.find((skill) => skill.title === 'BackEnd').skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
      </div>
      <div className="column">
        <img src={tools} alt='tools' className="section-icon"/>
        <h3>Tools</h3>
        <hr className="line" />
        <div>
          {skills.find((skill) => skill.title === 'Tools').skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
