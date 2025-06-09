import React from 'react';
import './styles/styles.css';
import ChatBubbles from '../../assets/icons/chat-two-bubbles.svg';
import InstagramIcon from '../../assets/icons/instagram-iocn.svg';
import FacebookIcon from '../../assets/icons/facebook-icon.svg';
import { BackToHome } from './features/BackToMain';

const socialLinks = [
  { icon: InstagramIcon, text: 'Instagram' },
  {
    icon: FacebookIcon,
    text: ['Facebook'],
  },
];

export const ThanksForContact = () => {
  return (
    <section className="thanks-contact-wrapper">
      <BackToHome />

      <div className="thanks-title-social">
        <h1>Napizs do nas!</h1>

        <div className="social-column-items">
          <div className="socials-container">
            <div className="chat-bubbles-container">
              <img className="chat-bubbles-icon" src={ChatBubbles} alt="Chat icon" />
            </div>
            <p className="social-main-text">Media społecznościowe</p>
          </div>

          <div className="socials-items-container">
            {socialLinks.map(({ icon, text }, index) => (
              <div className="linked-container" key={index}>
                <img className="social-icon" src={icon} alt={`${text} icon`} />
                {Array.isArray(text) ? (
                  <div className="linked-text-container">
                    {text.map((line, idx) => (
                      <p className="linked-text" key={idx}>
                        {line}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="linked-text">{text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
