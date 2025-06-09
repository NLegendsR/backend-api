import React from 'react';
import { JSX } from 'react';
import '../Footer/styles/style.css';
import PhoneIcon from '../../assets/icons/footer-phone-icon.svg';
import MailIcon from '../../assets/icons/footer-mail-icon.svg';

export const Footer = (): JSX.Element => {
  return (
    <section className="footer-section-wrapper">
      <div className="footer-links">
        {['Polityka Prywatności', 'Warunki korzystania', 'Polityka plików cookie', 'Prawa autorskie'].map((text) => (
          <p className="footer-text" key={text}>
            {text}
          </p>
        ))}
      </div>

      <div className="footer-info-container">
        <div className="footer-info-copirate">
          <p>© CoWorkly 2025</p>
        </div>

        <div className="footer-info-contact">
          <div className="footer-icon-text">
            <div className="footer-input-icon">
              <img src={PhoneIcon} alt="Phone icon" />
            </div>
            <p className="footer-text">+48123456789</p>
          </div>

          <div className="footer-icon-text">
            <div className="footer-input-icon">
              <img src={MailIcon} alt="Mail icon" />
            </div>
            <p className="footer-text">co-workly@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};
