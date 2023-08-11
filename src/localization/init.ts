import i18n from 'i18next';


  i18n.init({
    interpolation: { escapeValue: false }, 
    lng: 'eng',
    resources: {
      eng: {
        translation: require('./eng/eng.json')
      },
      pl: {
        translation: require('./pl/pl.json')
      }
    }
  });


export default i18n;