import React from 'react';
import { JSX } from 'react';
import './styles/style.css';
import { LogInButton } from '../../Shared/LogInButton';
import { MainText } from './features/MainText';

export const MainSection = (): JSX.Element => {
  return (
    <section className="main-section-wrapper">
      <div className="main-section-container">
        <MainText />
        <div className="login">
          <LogInButton scrollToId="coworking-search" />
        </div>
      </div>
    </section>
  );
};
