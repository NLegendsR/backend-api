import React from 'react';
import { JSX } from 'react';
import './styles/style.css';
import Image404 from '../../assets/images/page-404.png';
import { GoMain404 } from './features/GoMain';

export const Page404 = (): JSX.Element => {
  return (
    <section className="page-404-container-wrapper">
      <div className="page-404-container">
        <img src={Image404} className="image-404" alt="Image404" />
        <div className="text-container-404">
          <div className="page-404-text">
            <h2 className="h2-404">Oj! Wystąpił błąd</h2>
            <p className="bottom-text-404">
              Możliwe, że strona została usunięta, jej nazwa została zmieniona albo jest tymczasowo niedostępna.
              Sprawdź, czy adres URL nie zawiera błędów, lub wróć na stronę główną.
            </p>
          </div>
          <GoMain404 />
        </div>
      </div>
    </section>
  );
};
