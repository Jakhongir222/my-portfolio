import React from 'react';
import '../styles/Navbar.css';
import { handleScroll } from './handleScroll';


export const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">Portfolio</h1>
      <nav className="navbar-links">
        <a href="#about-me" onClick={handleScroll} className="navbar-link">About me</a>
        <a href="#skills" onClick={handleScroll} className="navbar-link">Skills</a>
        <a href="#projects" onClick={handleScroll} className="navbar-link">Projects</a>
        <a href="#contacts" onClick={handleScroll} className="navbar-link">Contact me</a>
      </nav>
    </div>
  );
};
