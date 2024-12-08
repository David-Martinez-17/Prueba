import React from 'react';
import { FaSearch, FaUserAlt, FaShoppingBag } from 'react-icons/fa';
import './Header.css';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <header className="header">
      <HamburgerMenu />
      <div className="background-image"></div>
      <div className="header-options">
        <div className="icon-box">
          <FaSearch className="icon" title="Buscar artículos" />
        </div>
        <div className="icon-box">
          <FaUserAlt className="icon" title="Iniciar sesión" />
        </div>
        <div className="icon-box">
          <FaShoppingBag className="icon" title="Bolsa de compras" />
        </div>
      </div>
    </header>
  );
};

export default Header;
