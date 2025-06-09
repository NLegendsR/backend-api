import React from 'react';
import { JSX } from 'react';
import './styles/style.css';
import { useNavigate } from 'react-router-dom';

interface StyleButtonLogin {
  style?: React.CSSProperties;
  scrollToId?: string;
  redirectTo?: string;
  text?: string;
}

export const LogInButton = ({
  style,
  scrollToId,
  redirectTo,
  text = 'Przeglądaj', // domyślny tekst
}: StyleButtonLogin): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (redirectTo) {
      navigate(redirectTo);
    } else if (scrollToId) {
      const section = document.getElementById(scrollToId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button className="login-button" onClick={handleClick} style={style}>
      <p>{text}</p>
    </button>
  );
};
