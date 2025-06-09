import React from 'react';
import { JSX } from 'react';
import '../SignUp/styles/style.css';

export const SignUp = (): JSX.Element => {
  return (
    <div className="sign_up">
      <button className="sign_up_button">
        <p className="sign_up_text">Zaloguj się</p>
      </button>
    </div>
  );
};
