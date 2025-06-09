import React from 'react';
import { JSX } from 'react';
import './styles/styles.css';

export const GraySection = (): JSX.Element => {
  return (
    <section className="gray-section-wrapper">
      <div className="gray-section-container">
        <p className="gray-section-title">
          PRZESTRZENIE COWORKINGOWE TO NIE TYLKO BIURKA —
          <span className="gray-weight-text"> TO SPOŁECZNOŚĆ, INSPIRACJA I NOWOCZESNE UDOGODNIENIA </span>
        </p>
      </div>
    </section>
  );
};
