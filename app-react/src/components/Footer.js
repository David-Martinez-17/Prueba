import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaTiktok } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-section">
        <div className="social-icons">
          <div className="icon-box">
            <FaFacebookF className="icon" />
          </div>
          <div className="icon-box">
            <FaInstagram className="icon" />
          </div>
          <div className="icon-box">
            <FaPinterestP className="icon" />
          </div>
          <div className="icon-box">
            <FaYoutube className="icon" />
          </div>
          <div className="icon-box">
            <FaTiktok className="icon" />
          </div>
        </div>
        <div className="dropdowns">
          <div className="dropdown">
            <button className="dropdown-btn">Servicio al Cliente</button>
            <div className="dropdown-content">
              <a href="#Contactanos">Contáctanos/PQR</a>
              <a href="#Recoge">Recoge en la tienda</a>
              <a href="#Localiza">Localizador de tiendas</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown-btn">Quiénes Somos</button>
            <div className="dropdown-content">
              <a href="#Nosotros">Nuestro equipo</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
