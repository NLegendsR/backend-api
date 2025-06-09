import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CookieConsent } from './modules/CookieConsent';
import { Header } from './modules/Header';
import { AppRoutes } from './global/router/Routes';
import { Footer } from './modules/Footer';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CookieConsent />
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
