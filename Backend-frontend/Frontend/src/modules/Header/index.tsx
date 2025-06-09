import React from 'react';
import { JSX } from 'react';
import '../Header/styles/style.css';
import Logo from '../../assets/icons/Union.svg';
import { NavBar } from './features/NavBar';
import { SignUp } from './features/SignUp';

export const Header = (): JSX.Element => {
  return (
    <header className="header-wrapper">
      <div className="logo_navigation">
        <div className="logo">
          <img src={Logo} alt="Logo icon" />
        </div>
        <NavBar />
      </div>
      <SignUp />
    </header>
  );
};
