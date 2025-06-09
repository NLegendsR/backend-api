import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBack from '../../../../assets/icons/arrow-back.svg';
import './styles/styles.css';

export const BackToHome = () => {
  return (
    <Link to="/" className="arrow-back-container">
      <img src={ArrowBack} alt="arrow back icon" />
      <p className="arrow-back-text">Wróć na stronę główną</p>
    </Link>
  );
};
