let debug = false
switch (process.env.NODE_ENV) {
  case 'production':
    break
  case 'development':
    debug = true
    break
}

export default {
  debug,
  react: {
    useSuspense: false,
  },
  load: 'languageOnly',
  lngs: ['ru'],

  fallbackLng: 'ru',

  interpolation: {
    escapeValue: false,
  },
  resources: {
    ru: {
      translation: require('../locales/ru/translation.json'),
    },
  },
}
