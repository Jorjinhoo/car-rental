import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

import App from './App';

import './styles/index.css';


i18n.init({
  interpolation: { escapeValue: false }, 
  lng: 'eng',
  resources: {
    eng: {
      translation: require('./localization/eng/eng.json')
    },
    pl: {
      translation: require('./localization/pl/pl.json')
    }
  }
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);

