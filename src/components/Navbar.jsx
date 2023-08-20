import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logoText from '../images/logoText_macka.svg';
import './navbar-style.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      <div className="logo-wrapper">
        <img src={logoText} alt="Logo Text" className="logo-text" />
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="three-dots"></div>
          <div className="three-dots"></div>
          <div className="three-dots"></div>
        </div>
      </div>
      <ul className={`navbar ${showMenu ? 'show' : ''}`}>
        <li>
          <Link activeClass="active" smooth spy to="domov">
            Domov
          </Link>
        </li>
        <li>
          <Link activeClass="active" smooth spy to="menu">
            Cenik
          </Link>
        </li>
        <li>
          <Link activeClass="active" smooth spy to="about-us">
            O nas
          </Link>
        </li>
        <li>
          <Link activeClass="active" smooth spy to="reservate">
            Rezervacija
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
