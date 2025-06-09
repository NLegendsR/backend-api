import React from 'react';
import { JSX } from 'react';
import '../Proposition/styles/style.css';
import CoFoto from '../../../assets/images/co-working-foto.webp';
import ListItem1 from '../../../assets/icons/list-1.svg';
import ListItem2 from '../../../assets/icons/list-2.svg';
import ListItem3 from '../../../assets/icons/list-3.svg';
import ListItem4 from '../../../assets/icons/list-4.svg';
import ListItem5 from '../../../assets/icons/list-5.svg';
import { LogInButton } from '../../Shared/LogInButton';

const listItems = [
  { img: ListItem1, text: 'Dostęp 24/7 do przestrzeni' },
  { img: ListItem2, text: 'Szybki internet i nowoczesne wyposażenie' },
  { img: ListItem3, text: 'Sale konferencyjne i strefy relaksu' },
  { img: ListItem4, text: 'Wydarzenia networkingowe i warsztaty' },
  {
    img: ListItem5,
    text: 'Elastyczne pakiety cenowe​',
  },
];

export const Proposition = (): JSX.Element => {
  return (
    <section id="proposition-section-wrapper">
      <div className="left-side">
        <img src={CoFoto} className="CoFoto" alt="CoFoto" />
      </div>
      <div className="right-side">
        <h2 className="proposition-text">Dlaczego warto wybrać coworking?</h2>
        <div className="list-button-container">
          <div className="proposition-list">
            <ul>
              {listItems.map((item, index) => (
                <li key={index} className="list-item">
                  <img src={item.img} alt={`Number ${index + 1}`} />
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="proposition-button-container">
            <LogInButton scrollToId="coworking-search" />
          </div>
        </div>
      </div>
    </section>
  );
};
