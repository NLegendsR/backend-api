import React from 'react';
import { JSX } from 'react';
import './styles/style.css';

export const ConditionsSection = (): JSX.Element => {
  return (
    <section className="condition-full-width">
      <div id="conditions-section-wrapper">
        <h2 className="h2-conditions-text">Co mówią nasi użytkownicy?:</h2>
        <div className="conditions-list">
          <div className="list-points">
            <div className="gap-container">
              <div className="point-restangle-container">
                <span className="point-restangle" />
              </div>
            </div>
            <div className="point-text-container">
              <p className="point-text">
                Dzięki tej platformie znalazłem idealne miejsce do pracy w centrum Warszawy!”{' '}
                <span className="b2-bold">– Anna, freelancerka</span>.
              </p>
            </div>
          </div>

          <div className="list-points">
            <div className="gap-container">
              <div className="point-restangle-container">
                <span className="point-restangle" />
              </div>
            </div>
            <div className="point-text-container">
              <p className="point-text">
                „Elastyczne pakiety i świetna atmosfera. Polecam każdemu przedsiębiorcy.”{' '}
                <span className="b2-bold">– Michał, startupowiec</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
