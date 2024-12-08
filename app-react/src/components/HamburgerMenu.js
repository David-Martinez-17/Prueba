import React, { useState } from 'react';
import './HamburgerMenu.css';
import logo from '../components/img/Malva_logo_menu.png'; 

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className="burger-icon" onClick={toggleMenu}>
        ☰
      </div>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <span className="close-icon" onClick={toggleMenu}>✖</span>
        </div>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="menu-logo" />
        </div>
        <div className="horizontal-menu">
          <a href="#link1">Mujeres</a>
          <a href="#link2">Hombres </a>
          <a href="#link3">Global Brands</a>
          <a href="#link4">Local Brands</a> 
        </div>
        <ul className="vertical-menu">
          <li><a href="#home">Ir a inicio</a></li>
          <li><a href="#about">Herencia verde</a></li>
          <li><a href="#services">New in</a></li>
          <li><a href="#contact">Malva Edition</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
