import React from 'react';

import { JSX } from 'react';
import CoworkingSearch from '../../modules/AboutCourse/Interests';
import './styles/styles.css';
import { MainSection } from '../../modules/AboutCourse/MainSection';
import { Proposition } from '../../modules/AboutCourse/Proposition';

import { GraySection } from '../../modules/AboutCourse/GraySection';
import { ConditionsSection } from '../../modules/AboutCourse/Conditions';
import { Application } from '../../modules/AboutCourse/Application';

export const LandingPage = (): JSX.Element => {
  return (
    <div className="landing-page-wrapper">
      <div className="full-width">
        <MainSection />
      </div>
      <CoworkingSearch />
      <div className="full-width">
        <GraySection />
      </div>
      <Proposition />
      <ConditionsSection />
      <Application />
    </div>
  );
};
