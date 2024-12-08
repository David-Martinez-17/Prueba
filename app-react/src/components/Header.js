import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUserAlt, FaShoppingBag } from 'react-icons/fa';
import './Header.css';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <header className="header">
      <HamburgerMenu />
      <div className="background-image">
        <Link to="/">
          <div className="logo-container">
            <img src="/img/Malva_logo.png" alt="Logo" className="logo" />
          </div>
        </Link>
      </div>
      <div className="header-options">
        <div className="icon-box">
          <FaSearch className="icon" title="Buscar artículos" />
        </div>
        <div className="icon-box">
          <FaUserAlt className="icon" title="Iniciar sesión" />
        </div>
        <Link to="/cart">
          <div className="icon-box">
            <FaShoppingBag className="icon" title="Bolsa de compras" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
