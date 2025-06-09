import React, { useState, useEffect, useCallback } from 'react';
import ReactGA from 'react-ga4';
import './styles/styles.css';

const COOKIE_KEY = 'cookiesAccepted';
const GA_ID = 'G-XXXXXXXXXX'; //  ID Google Analytics

const initializeGA = () => {
  ReactGA.initialize(GA_ID);
  ReactGA.send('pageview');
};

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // check choice in cookies
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem(COOKIE_KEY);

    if (cookiesAccepted === null) {
      setIsVisible(true);
    } else if (cookiesAccepted === 'true') {
      initializeGA();
    }
  }, []);

  // confirm ookies
  const handleAccept = useCallback(() => {
    localStorage.setItem(COOKIE_KEY, 'true');
    setIsVisible(false);
    initializeGA();
  }, []);

  // cancel cookies
  const handleReject = useCallback(() => {
    localStorage.setItem(COOKIE_KEY, 'false');
    setIsVisible(false);
  }, []);

  return isVisible ? (
    <div className="cookie-consent-wrapper">
      <div className="cookie-message">
        <div className="cookie-text">
          <h2 className="cookie-main-title">Używamy plików cookie</h2>
          <p className="cookie-text-description">
            Niektóre pliki cookie są niezbędne do działania strony, inne pomagają nam analizować ruch i personalizować
            treści. Możesz dostosować swoje preferencje lub zaakceptować wszystkie pliki cookie.
          </p>
        </div>
        <div className="cookie-buttons">
          <button className="cookie-buttons-confirm" onClick={handleAccept}>
            Akceptuj
          </button>
          <button className="cookie-buttons-cancel" onClick={handleReject}>
            Odrzuć
          </button>
          <button className="cookie-buttons-settings">Dostosu</button>
        </div>
      </div>
    </div>
  ) : null;
};
