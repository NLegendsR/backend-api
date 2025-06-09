import React from 'react';
import { JSX } from 'react';
import './styles/style.css';

export const MainText = (): JSX.Element => {
  return (
    <div className="main-text-wrapper">
      <h1>
        Znajdź idealną przestrzeń
        <span className="second-h1"> coworkingową </span>w Polsce
      </h1>
      <p className="bottom-text">
        Elastyczne biura, kreatywne środowisko i społeczność profesjonalistów — wszystko w jednym miejscu
      </p>
    </div>
  );
};
