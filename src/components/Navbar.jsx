import React from 'react';
import '../styles/Navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">Jak's Portfolio</h1>
      <nav className="navbar-links">
        <a href="/about" className="navbar-link">About me</a>
        <a href="/skills" className="navbar-link">Skills</a>
        <a href="/projects" className="navbar-link">Projects</a>
        <a href="/contacts" className="navbar-link">Contact me</a>
      </nav>
    </div>
  );
};
