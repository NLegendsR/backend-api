import React, { JSX } from 'react';
import './styles/styles.css';
import { ThanksForContact } from '../../modules/ThanksForContact';

export const ThanksPage = (): JSX.Element => {
  return (
    <div className="thanks-page-wrapper">
      <ThanksForContact />
    </div>
  );
};
