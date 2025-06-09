import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../../../../assets/icons/burger_menu.svg';
import '../NavBar/styles/style.css';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <button className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
        <img src={Menu} alt="menu icon" />
      </button>

      <ul className={`navbar ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <a href="#coworking-search">Mapa</a>
        </li>
        <li>
          <a href="#application-section-wrappper">Kontakt</a>
        </li>
        <li>
          <a href="#proposition-section-wrapper">Zalety</a>
        </li>
      </ul>
    </nav>
  );
};
