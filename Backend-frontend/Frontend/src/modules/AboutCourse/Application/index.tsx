import React from 'react';
import { JSX } from 'react';
import './styles/style.css';
import { LogInButton } from '../../Shared/LogInButton';

export const Application = (): JSX.Element => {
  return (
    <section id="application-section-wrappper">
      <div className="application-section-container">
        <div className="application-main-text">
          <div className="application-h2">
            <h2>Masz pytania? Skontaktuj się z nami!</h2>
          </div>
          <div className="application-paragraph-text">
            <p>Napisz do nas na e-mail, jeśli masz pytania.</p>
          </div>
        </div>
        <div>
          <LogInButton
            redirectTo="/thanks"
            text="Napisz do nas"
            style={{
              width: '185px',
              height: '60px',
            }}
          />
        </div>
      </div>
    </section>
  );
};
