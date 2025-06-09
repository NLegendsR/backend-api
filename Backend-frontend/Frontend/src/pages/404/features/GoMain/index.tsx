import React from 'react';
import { JSX } from 'react';
import '../GoMain/styles/style.css';
import { useNavigate } from 'react-router-dom';

interface StyleGoMain404 {
  style?: React.CSSProperties;
}

export const GoMain404 = ({ style }: StyleGoMain404): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <button className="go-main-button" onClick={handleClick} style={style}>
      <p className="go-main-text">Wróć na stronę główną</p>
    </button>
  );
};
